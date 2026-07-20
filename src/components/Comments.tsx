"use client";

import dynamic from "next/dynamic";

const Giscus = dynamic(
  () => import("@giscus/react").then((module) => module.default),
  { ssr: false },
);

export function Comments() {
  return (
    <section aria-labelledby="comments-title" className="print:hidden">
      <h2 id="comments-title" className="sr-only">
        Comments
      </h2>
      <Giscus
        repo="flandia/flandia.dev"
        repoId="R_kgDOK_J-pA"
        category="Giscus"
        categoryId="DIC_kwDOK_J-pM4CpUQr"
        mapping="number"
        term="2"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
