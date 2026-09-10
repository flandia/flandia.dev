import { PropsWithChildren } from "react";

import { Badges } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RichContent } from "@/components/ui/rich-content";
import { createHost, createSlot } from "@/lib/slots";

export const SubEntryTitle = createSlot();
export const SubEntrySubtitle = createSlot();
export const SubEntryTime = createSlot();
export const SubEntryBadges = createSlot();
export const SubEntryDescription = createSlot();

export const SubEntry = ({ children }: PropsWithChildren) =>
  createHost(children, (Slots) => {
    const title = Slots.getProps(SubEntryTitle);
    const subtitle = Slots.getProps(SubEntrySubtitle);
    const time = Slots.getProps(SubEntryTime);
    const badges = Slots.getProps(SubEntryBadges);
    const description = Slots.getProps(SubEntryDescription);
    const { children: titleChildren, ...titleProps } = title ?? {};
    const { children: subtitleChildren, ...subtitleProps } = subtitle ?? {};
    const { children: timeChildren, ...timeProps } = time ?? {};
    const { children: badgesChildren, ...badgesProps } = badges ?? {};
    const { children: descriptionChildren, ...descriptionProps } =
      description ?? {};
    return (
      <Card>
        <CardHeader>
          <div className="grid grid-cols-[minmax(0,1fr)_fit-content(40%)] items-start gap-x-3 text-base">
            <h4 className="inline-flex min-w-0 flex-wrap items-center gap-2 text-sm leading-snug font-semibold text-foreground/85">
              <span {...titleProps}>{titleChildren}</span>
              <Badges {...badgesProps}>{badgesChildren}</Badges>
            </h4>
            <div
              className="shrink-0 text-right text-sm leading-snug text-muted-foreground tabular-nums"
              {...timeProps}
            >
              {timeChildren}
            </div>
          </div>
          {subtitle && (
            <p className="body-copy" {...subtitleProps}>
              {subtitleChildren}
            </p>
          )}
        </CardHeader>
        {description && (
          <CardContent className="mt-2" {...descriptionProps}>
            <RichContent>{descriptionChildren}</RichContent>
          </CardContent>
        )}
      </Card>
    );
  });
