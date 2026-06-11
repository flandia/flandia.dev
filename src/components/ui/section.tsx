import React, { PropsWithChildren } from "react";

import { RichContent } from "@/components/ui/rich-content";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  newPage?: boolean;
  hiddenPrint?: boolean;
}

export function Section({
  className,
  newPage,
  hiddenPrint,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "flex min-h-0 flex-col gap-y-3",
        className,
        newPage && "print-force-new-page",
        hiddenPrint && "print:hidden",
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionTitle(props: PropsWithChildren<{}>) {
  const { children, ...rest } = props;
  return (
    <h2 className="break-after-avoid text-xl font-bold" {...rest}>
      {children}
    </h2>
  );
}

export function SectionText(props: PropsWithChildren<{}>) {
  const { children, ...rest } = props;
  return (
    <div className="font-mono text-sm text-pretty space-y-2" {...rest}>
      <RichContent>{children}</RichContent>
    </div>
  );
}
