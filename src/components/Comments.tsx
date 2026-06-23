"use client";

import Giscus from "@giscus/react";

export function Comments() {
  return (
    <div className="print:hidden">
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
    </div>
  );
}
