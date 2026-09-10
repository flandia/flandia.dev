import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import {
  ExpandableDetails,
  ExpandableDetailsContent,
  ExpandableDetailsTrigger,
  ProjectCardFrame,
} from "@/components/ui/expandable-details";
import { ProjectCardCollection } from "@/components/ui/project-card-collection";
import { RichContent } from "@/components/ui/rich-content";
import { createHost, createSlot } from "@/lib/slots";

import { CardContent, CardHeader, CardTitle } from "./ui/card";

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
export const ProjectDetails = createSlot();
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
    const detailsProps = Slots.getProps(ProjectDetails);
    const badgesProps = Slots.getProps(ProjectBadges);
    const labelProps = Slots.getProps(ProjectLabel);
    const { children: titleChildren, ...projectTitleProps } = titleProps ?? {};
    const { children: badgesChildren, ...projectBadgesProps } =
      badgesProps ?? {};
    const { children: labelChildren, ...projectLabelProps } = labelProps ?? {};
    const content = (
      <ProjectCardFrame
        className="flex flex-col overflow-hidden border border-muted p-3"
        hiddenPrint={hiddenPrint}
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-1">
            <CardTitle className="min-w-0">
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
            {detailsProps ? (
              <ExpandableDetailsTrigger className="-my-1.5 size-8 shrink-0 justify-center">
                <span className="sr-only">{titleChildren} details</span>
              </ExpandableDetailsTrigger>
            ) : null}
          </div>
          <div className="hidden body-copy underline print:block">
            <span {...projectLabelProps}>{labelChildren}</span>
          </div>
        </CardHeader>
        <CardContent className="mt-1">
          <RichContent>{descriptionProps?.children}</RichContent>
        </CardContent>
        {detailsProps ? (
          <ExpandableDetailsContent>
            <CardContent>
              <RichContent>{detailsProps.children}</RichContent>
            </CardContent>
          </ExpandableDetailsContent>
        ) : null}
        <CardContent className="mt-auto flex pt-2">
          <div className="flex flex-wrap gap-1" {...projectBadgesProps}>
            {badgesChildren}
          </div>
        </CardContent>
      </ProjectCardFrame>
    );

    return detailsProps ? (
      <ExpandableDetails>{content}</ExpandableDetails>
    ) : (
      content
    );
  });
}

export const ProjectCards = ({ children }: PropsWithChildren) => (
  <ProjectCardCollection>{children}</ProjectCardCollection>
);
