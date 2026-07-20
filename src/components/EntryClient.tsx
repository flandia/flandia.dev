"use client";

import { ChevronDownIcon } from "lucide-react";
import { PropsWithChildren, useCallback, useState } from "react";

import { Badges } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RichContent } from "@/components/ui/rich-content";
import { useBeforePrint } from "@/utils/useBeforePrint";

type EntrySlotProps = PropsWithChildren<Record<string, unknown>>;

interface EntryClientProps {
  title?: EntrySlotProps;
  subtitle?: EntrySlotProps;
  time?: EntrySlotProps;
  badges?: EntrySlotProps;
  description?: EntrySlotProps;
  details?: EntrySlotProps;
}

export const EntryClient = ({
  title,
  subtitle,
  time,
  badges,
  description,
  details,
}: EntryClientProps) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  useBeforePrint(
    useCallback(() => {
      setCollapseOpen(true);
    }, []),
  );

  const { children: titleChildren, ...titleProps } = title ?? {};
  const { children: subtitleChildren, ...subtitleProps } = subtitle ?? {};
  const { children: timeChildren, ...timeProps } = time ?? {};
  const { children: badgesChildren, ...badgesProps } = badges ?? {};
  const detailsChildren = details?.children;
  const descriptionChildren = description?.children;
  const hasDetails = Boolean(details);

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
          {isInteractive && (
            <ChevronDownIcon
              aria-hidden="true"
              className={`size-3.5 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                collapseOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
      </div>
      {subtitle && (
        <h4
          className="font-mono text-sm leading-snug text-pretty"
          {...subtitleProps}
        >
          {subtitleChildren}
        </h4>
      )}
    </>
  );

  return (
    <Collapsible open={collapseOpen} onOpenChange={setCollapseOpen}>
      <Card className="break-inside-avoid">
        <CardHeader>
          {hasDetails ? (
            <CollapsibleTrigger
              type="button"
              className="group -m-1 flex w-[calc(100%+0.5rem)] cursor-pointer touch-manipulation flex-col gap-y-1 rounded-sm p-1 text-left transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {headerContent(true)}
            </CollapsibleTrigger>
          ) : (
            headerContent(false)
          )}
        </CardHeader>
        {description && (
          <CardContent className="mt-2 flex flex-col gap-y-2 text-xs">
            <RichContent>{descriptionChildren}</RichContent>
          </CardContent>
        )}
        {details && (
          <CollapsibleContent
            keepMounted
            className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-250 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none [&[hidden]:not([hidden='until-found'])]:hidden"
          >
            <CardContent className="mt-2 space-y-2 text-sm">
              <RichContent>{detailsChildren}</RichContent>
            </CardContent>
          </CollapsibleContent>
        )}
      </Card>
    </Collapsible>
  );
};
