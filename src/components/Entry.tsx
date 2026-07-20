import { ChevronDownIcon } from "lucide-react";
import { PropsWithChildren } from "react";

import { Badges } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RichContent } from "@/components/ui/rich-content";
import { createHost, createSlot } from "@/lib/slots";

export const EntryTitle = createSlot();
export const EntrySubtitle = createSlot();
export const EntryTime = createSlot();
export const EntryBadges = createSlot();
export const EntryDescription = createSlot();
export const EntryDetails = createSlot();

export const Entry = ({ children }: PropsWithChildren) =>
  createHost(children, (Slots) => {
    const title = Slots.getProps(EntryTitle);
    const subtitle = Slots.getProps(EntrySubtitle);
    const time = Slots.getProps(EntryTime);
    const badges = Slots.getProps(EntryBadges);
    const description = Slots.getProps(EntryDescription);
    const details = Slots.getProps(EntryDetails);

    const { children: titleChildren, ...titleProps } = title ?? {};
    const { children: subtitleChildren, ...subtitleProps } = subtitle ?? {};
    const { children: timeChildren, ...timeProps } = time ?? {};
    const { children: badgesChildren, ...badgesProps } = badges ?? {};

    const headerContent = (isInteractive: boolean) => (
      <>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 text-base">
          <h3
            className={[
              "inline-flex min-w-0 flex-wrap items-center gap-x-1 gap-y-1 leading-tight font-semibold",
              isInteractive
                ? "group-hover:underline group-focus-visible:underline"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span {...titleProps}>{titleChildren}</span>
            <Badges {...badgesProps}>{badgesChildren}</Badges>
          </h3>
          <div className="flex items-center gap-1 text-right text-sm text-muted-foreground tabular-nums">
            <span {...timeProps}>{timeChildren}</span>
            {isInteractive ? (
              <ChevronDownIcon
                aria-hidden="true"
                className="size-3.5 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
              />
            ) : null}
          </div>
        </div>
        {subtitle ? (
          <h4
            className="font-mono text-sm leading-snug text-pretty"
            {...subtitleProps}
          >
            {subtitleChildren}
          </h4>
        ) : null}
      </>
    );

    const descriptionContent = description ? (
      <CardContent className="mt-2 flex flex-col gap-y-2 text-xs">
        <RichContent>{description.children}</RichContent>
      </CardContent>
    ) : null;

    if (!details) {
      return (
        <Card className="break-inside-avoid">
          <CardHeader>{headerContent(false)}</CardHeader>
          {descriptionContent}
        </Card>
      );
    }

    return (
      <Card className="break-inside-avoid">
        <details className="group entry-details">
          <summary className="group -m-1 flex w-[calc(100%+0.5rem)] cursor-pointer touch-manipulation list-none flex-col gap-y-1 rounded-sm p-1 text-left transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
            {headerContent(true)}
          </summary>
          <div className="entry-details-content">
            <CardContent className="mt-2 space-y-2 text-sm">
              <RichContent>{details.children}</RichContent>
            </CardContent>
          </div>
        </details>
        {descriptionContent}
      </Card>
    );
  });
