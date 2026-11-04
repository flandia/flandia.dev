"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  ComponentPropsWithoutRef,
  createContext,
  PropsWithChildren,
  use,
  useId,
  useRef,
  useState,
} from "react";

import { Card } from "@/components/ui/card";
import { useProjectCardPosition } from "@/components/ui/project-card-collection";
import { cn } from "@/lib/utils";

interface DetailsContextValue {
  open: boolean;
  toggle: () => void;
  triggerId: string;
  panelId: string;
}

const DetailsContext = createContext<DetailsContextValue | null>(null);

function useDetails() {
  const context = use(DetailsContext);
  if (!context) {
    throw new Error("Disclosure components require ExpandableDetails.");
  }
  return context;
}

export function ExpandableDetails({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const position = useProjectCardPosition();

  return (
    <DetailsContext
      value={{
        open,
        toggle: () => {
          if (!open) position?.beforeExpand();
          setOpen((previous) => !previous);
        },
        triggerId: `${id}-trigger`,
        panelId: `${id}-panel`,
      }}
    >
      {children}
    </DetailsContext>
  );
}

export function ExpandableDetailsTrigger({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  const { open, toggle, triggerId, panelId } = useDetails();

  return (
    <button
      {...props}
      id={triggerId}
      type="button"
      aria-expanded={open}
      aria-controls={panelId}
      onClick={toggle}
      className={cn(
        "group m-0 inline-flex min-h-11 min-w-11 cursor-pointer touch-manipulation items-center justify-center gap-1 rounded-sm p-1 text-left transition-colors select-text hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none sm:-m-1 sm:min-h-7 sm:min-w-7 print:hidden",
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "size-3.5 shrink-0 self-center text-muted-foreground transition-transform duration-200 motion-reduce:transition-none print:hidden",
          open && "rotate-180",
        )}
      >
        <ChevronDownIcon className="size-full" />
      </span>
    </button>
  );
}

export function ExpandableDetailsContent({ children }: PropsWithChildren) {
  const { open, triggerId, panelId } = useDetails();

  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      aria-hidden={!open}
      inert={!open}
      data-open={open}
      className="entry-details-content"
    >
      <div className="entry-details-clip min-h-0 overflow-hidden">
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
}

// Use rendered text bounds rather than block bounds: paragraphs and headings
// also contain blank space that should remain clickable.
function hitsText(element: Element, x: number, y: number) {
  const walker = element.ownerDocument.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
  );
  const range = element.ownerDocument.createRange();
  let node;
  while ((node = walker.nextNode())) {
    if (!node.textContent?.trim()) continue;
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) {
      if (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      )
        return true;
    }
  }
  return false;
}

// Text is reserved for selection. Only whitespace and the dedicated
// disclosure button toggle the card; links retain their normal behavior.
export function ExpandableDetailsCard({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Card>) {
  const details = use(DetailsContext);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  return (
    <Card
      {...props}
      className={cn(
        details &&
          "expandable-card cursor-pointer transition-colors duration-300 ease-out select-text hover:bg-muted/50 has-[:focus-visible]:bg-muted/50 motion-reduce:transition-none print:!bg-card",
        className,
      )}
      onPointerDownCapture={(event) => {
        pointerStart.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerMove={(event) => {
        if (!details || !(event.target instanceof Element)) return;
        event.currentTarget.style.cursor = hitsText(
          event.target,
          event.clientX,
          event.clientY,
        )
          ? "text"
          : "pointer";
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.removeProperty("cursor");
      }}
      onClick={(event) => {
        const start = pointerStart.current;
        pointerStart.current = null;
        if (!details || event.defaultPrevented) return;
        const target = event.target;
        if (
          !(target instanceof Element) ||
          target.closest(
            "a, button, input, textarea, select, summary, [role='button'], [role='link'], [contenteditable]:not([contenteditable='false'])",
          )
        )
          return;
        const dragged =
          start &&
          Math.hypot(event.clientX - start.x, event.clientY - start.y) > 4;
        if (
          dragged ||
          event.detail > 1 ||
          window.getSelection()?.isCollapsed === false ||
          hitsText(target, event.clientX, event.clientY)
        )
          return;
        details.toggle();
      }}
    />
  );
}

export function ProjectCardFrame({
  children,
  className,
  hiddenPrint = false,
  ...props
}: ComponentPropsWithoutRef<"div"> & { hiddenPrint?: boolean }) {
  const details = use(DetailsContext);
  const position = useProjectCardPosition();

  return (
    <div
      className={cn(
        "project-card-slot flex min-w-0",
        hiddenPrint && "print:hidden",
      )}
      data-expanded={details?.open ?? false}
      data-project-id={position?.id}
    >
      <ExpandableDetailsCard
        {...props}
        className={cn("project-card min-w-0", className)}
      >
        {children}
      </ExpandableDetailsCard>
    </div>
  );
}
