import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { RichContent } from "@/components/ui/rich-content";
import { createHost, createSlot } from "@/lib/slots";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Status = "online" | "wip";

const statusColorClass: Record<Status, string> = {
  online: "bg-green-500",
  wip: "bg-amber-500",
};

const statusLabel: Record<Status, string> = {
  online: "Online",
  wip: "WIP",
};

export const ProjectTitle = createSlot();
export const ProjectDescription = createSlot();
export const ProjectBadges = createSlot();
export const ProjectLabel = createSlot();

interface Props {
  status?: Status;
  href: string;
  hiddenPrint?: boolean;
}

export function Project({
  children,
  status = "online",
  hiddenPrint = false,
  href,
}: PropsWithChildren<Props>) {
  const colorClass = statusColorClass[status];
  return createHost(children, (Slots) => {
    const titleProps = Slots.getProps(ProjectTitle);
    const descriptionProps = Slots.getProps(ProjectDescription);
    const badgesProps = Slots.getProps(ProjectBadges);
    const labelProps = Slots.getProps(ProjectLabel);
    const { children: titleChildren, ...projectTitleProps } = titleProps ?? {};
    const { children: badgesChildren, ...projectBadgesProps } =
      badgesProps ?? {};
    const { children: labelChildren, ...projectLabelProps } = labelProps ?? {};
    return (
      <Card
        className={twMerge(
          "flex flex-col overflow-hidden border border-muted p-3",
          hiddenPrint && "print:hidden",
        )}
      >
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:underline"
              >
                <span {...projectTitleProps}>{titleChildren}</span>
                <span className="sr-only"> - {statusLabel[status]}</span>
                <span
                  aria-hidden="true"
                  className={twMerge("mx-1 h-1 w-1 rounded-full", colorClass)}
                />
              </a>
            </CardTitle>
            <div className="hidden font-mono text-xs underline print:block">
              <span {...projectLabelProps}>{labelChildren}</span>
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              <RichContent>{descriptionProps?.children}</RichContent>
            </div>
          </div>
        </CardHeader>
        <CardContent className="my-auto flex">
          <div className="mt-2 flex flex-wrap gap-1" {...projectBadgesProps}>
            {badgesChildren}
          </div>
        </CardContent>
      </Card>
    );
  });
}

export const ProjectCards = ({ children }: PropsWithChildren) => (
  <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
    {children}
  </div>
);
