"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  ComponentPropsWithoutRef,
  createContext,
  PropsWithChildren,
  use,
  useId,
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
        "group -m-1 inline-flex cursor-pointer touch-manipulation items-center gap-1 rounded-sm p-1 text-left transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none",
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
      <Card {...props} className={cn("project-card min-w-0", className)}>
        {children}
      </Card>
    </div>
  );
}
