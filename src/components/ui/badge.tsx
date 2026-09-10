import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs font-semibold text-nowrap",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/80 text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  const { children, ...rest } = props;
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...rest}>
      {children}
    </span>
  );
}

export const Badges = ({ children, ...props }: PropsWithChildren) => (
  <span className="inline-flex flex-wrap gap-x-1 gap-y-1" {...props}>
    {children}
  </span>
);
export const DarkBadge = ({ children }: PropsWithChildren) => (
  <Badge>{children}</Badge>
);
export const LightBadge = ({ children }: PropsWithChildren) => (
  <Badge variant="secondary" className="align-middle text-xs">
    {children}
  </Badge>
);
