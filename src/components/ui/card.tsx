import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg bg-card text-card-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithRef<"h3">) {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-2xl leading-none font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

function CardContent({
  className,
  children,
  ref,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      ref={ref}
      className={cn(
        "font-mono text-sm text-pretty text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card, CardContent, CardHeader, CardTitle };
