import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-sky-500/30 bg-sky-500/10 text-sky-400 dark:text-sky-300 backdrop-blur-sm",
        secondary:
          "border-indigo-500/30 bg-indigo-500/10 text-indigo-400 dark:text-indigo-300 backdrop-blur-sm",
        outline: "text-foreground border-border/80 bg-background/50",
        accent:
          "border-cyan-500/30 bg-cyan-500/10 text-cyan-400 dark:text-cyan-300",
        muted: "border-border/40 bg-muted/50 text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };