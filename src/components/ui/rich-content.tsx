import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

/**
 * Props for {@link RichContent}.
 *
 * Pass either plain markdown text, the result of {@link md}, or a mixed React
 * node tree. Pure text content is rendered as markdown, while mixed content
 * falls back to interleaving rendered markdown segments with React elements.
 */
type RichContentProps = {
  children?: ReactNode;
};

/**
 * Tagged template helper for authoring inline markdown content.
 *
 * It concatenates the template parts and interpolated string or number values
 * into a single markdown string that can be passed to {@link RichContent}.
 *
 * @example
 * const content = md`Hello, **world**`;
 *
 * @example
 * const content = md`Score: ${42}`;
 */
export const md = (
  strings: TemplateStringsArray,
  ...values: Array<string | number>
) =>
  strings.reduce(
    (result, string, index) => result + string + (values[index] ?? ""),
    "",
  );

/**
 * Attempts to convert a ReactNode tree into a single markdown string.
 *
 * - Returns a non-empty string when all nodes can be losslessly represented as
 *   plain text or markdown.
 * - Returns an empty string when the node is nullish, boolean, or an array of
 *   only such values, meaning conversion succeeded but nothing visible remains.
 * - Returns null when any part of the tree contains non-serializable React
 *   content, signalling that the caller should fall back to mixed rendering.
 */
const toMarkdownString = (node: ReactNode): string | null => {
  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "number") {
    return node.toString();
  }

  if (node == null || typeof node === "boolean") {
    return "";
  }

  if (Array.isArray(node)) {
    const parts = node.map(toMarkdownString);
    return parts.every((part) => part !== null) ? parts.join("") : null;
  }

  return null;
};

/**
 * Removes common leading whitespace from markdown while preserving relative
 * indentation between lines.
 *
 * This is primarily useful for markdown authored in template literals, where
 * source indentation would otherwise leak into the rendered output.
 *
 * @param markdown - The raw markdown text to normalize.
 * @returns The markdown text with shared leading indentation removed.
 */
const dedentMarkdown = (markdown: string) => {
  const normalized = markdown.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");

  while (lines[0]?.trim() === "") {
    lines.shift();
  }

  while (lines.at(-1)?.trim() === "") {
    lines.pop();
  }

  const indentation = lines
    .filter((line) => line.trim() !== "")
    .map((line) => line.match(/^[\t ]*/)?.[0].length ?? 0);

  const commonIndent = indentation.length > 0 ? Math.min(...indentation) : 0;

  return lines
    .map((line) => {
      if (line.trim() === "") {
        return "";
      }

      return line.slice(commonIndent);
    })
    .join("\n");
};

const renderMarkdown = (markdown: string, key?: string) => {
  const source = dedentMarkdown(markdown);

  if (source === "") {
    return null;
  }

  return (
    <ReactMarkdown
      key={key}
      remarkPlugins={[remarkGfm, remarkBreaks]}
      components={{
        a: ({ children, node: _node, ...props }) => (
          <a
            {...props}
            target="_blank"
            rel="noreferrer"
            className="wrap-break-word underline underline-offset-2"
          >
            {children}
          </a>
        ),
        blockquote: ({ node: _node, ...props }) => (
          <blockquote
            {...props}
            className="border-l-2 border-border pl-3 italic"
          />
        ),
        ol: ({ node: _node, ...props }) => (
          <ol {...props} className="list-outside list-decimal pl-4" />
        ),
        p: ({ node: _node, ...props }) => <p {...props} />,
        ul: ({ node: _node, ...props }) => (
          <ul {...props} className="list-outside list-disc pl-4" />
        ),
      }}
    >
      {source}
    </ReactMarkdown>
  );
};

const renderMixedContent = (
  node: ReactNode,
  keyPrefix = "content",
): ReactNode => {
  if (Array.isArray(node)) {
    const parts: ReactNode[] = [];
    let markdownBuffer = "";
    let markdownIndex = 0;

    const flushMarkdown = () => {
      if (markdownBuffer === "") {
        return;
      }

      const rendered = renderMarkdown(
        markdownBuffer,
        `${keyPrefix}-markdown-${markdownIndex}`,
      );

      markdownBuffer = "";
      markdownIndex += 1;

      if (rendered) {
        parts.push(rendered);
      }
    };

    node.forEach((child, index) => {
      if (typeof child === "string" || typeof child === "number") {
        markdownBuffer += child.toString();
        return;
      }

      if (child == null || typeof child === "boolean") {
        return;
      }

      flushMarkdown();

      if (Array.isArray(child)) {
        parts.push(renderMixedContent(child, `${keyPrefix}-${index}`));
        return;
      }

      parts.push(child);
    });

    flushMarkdown();
    return parts;
  }

  return node;
};

/**
 * Renders markdown-authored content while preserving support for mixed React
 * children when a node tree cannot be flattened into a single markdown string.
 *
 * Use this for prose-oriented slots and content blocks that are usually plain
 * text or markdown, but may occasionally contain embedded React elements.
 *
 * @example
 * <RichContent>{md`Visit [flandia.dev](https://flandia.dev)`}</RichContent>
 */
export function RichContent({ children }: RichContentProps) {
  const markdown = toMarkdownString(children);

  return (
    <div
      className={
        markdown == null ? "prose-content [&>*+*]:mt-2" : "prose-content"
      }
    >
      {markdown == null
        ? renderMixedContent(children)
        : renderMarkdown(markdown)}
    </div>
  );
}
