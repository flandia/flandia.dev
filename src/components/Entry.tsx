import { PropsWithChildren } from "react";

import { Badges } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ExpandableDetails,
  ExpandableDetailsContent,
  ExpandableDetailsTrigger,
} from "@/components/ui/expandable-details";
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

    const titleContent = (
      <span className="inline-flex min-w-0 flex-wrap items-center gap-x-1 gap-y-1 leading-snug font-semibold">
        <span {...titleProps}>{titleChildren}</span>
        <Badges {...badgesProps}>{badgesChildren}</Badges>
      </span>
    );
    const timeContent = (
      <span className="text-right text-sm leading-snug font-normal text-muted-foreground tabular-nums">
        <span {...timeProps}>{timeChildren}</span>
      </span>
    );

    const content = (
      <Card className="break-inside-avoid">
        <CardHeader>
          {details ? (
            <h3 className="text-base leading-snug">
              <ExpandableDetailsTrigger className="grid w-[calc(100%+0.5rem)] grid-cols-[minmax(0,1fr)_fit-content(40%)_auto] items-start gap-x-1 [&>span:first-child]:mr-2 hover:[&>span:first-child]:underline focus-visible:[&>span:first-child]:underline">
                {titleContent}
                {timeContent}
              </ExpandableDetailsTrigger>
            </h3>
          ) : (
            <div className="grid grid-cols-[minmax(0,1fr)_fit-content(40%)] items-start gap-x-3 text-base">
              <h3 className="leading-snug">{titleContent}</h3>
              {timeContent}
            </div>
          )}
          {subtitle ? (
            <p className="body-copy" {...subtitleProps}>
              {subtitleChildren}
            </p>
          ) : null}
        </CardHeader>
        {description ? (
          <CardContent className="mt-2">
            <RichContent>{description.children}</RichContent>
          </CardContent>
        ) : null}
        {details ? (
          <ExpandableDetailsContent>
            <CardContent>
              <RichContent>{details.children}</RichContent>
            </CardContent>
          </ExpandableDetailsContent>
        ) : null}
      </Card>
    );

    return details ? <ExpandableDetails>{content}</ExpandableDetails> : content;
  });
