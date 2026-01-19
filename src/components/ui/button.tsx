import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-sans uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary: Gold border, transparent bg → hover: gold bg, navy text
        default:
          "border-2 border-gold-500 bg-transparent text-gold-500 hover:bg-gold-500 hover:text-navy-950",
        // Navy bg with gold text → hover: lighter navy
        secondary:
          "bg-navy-800 text-gold-500 border-2 border-navy-800 hover:bg-navy-700 hover:border-navy-700",
        // Ghost: Transparent, gold text → hover: subtle gold bg
        ghost:
          "text-gold-500 hover:bg-gold-500/10",
        // Outline on dark backgrounds
        outline:
          "border-2 border-white/30 text-white hover:border-gold-500 hover:text-gold-500",
        // Link style
        link: "text-gold-500 underline-offset-4 hover:underline p-0 h-auto",
        // Hero CTA - prominent gold
        hero:
          "border-2 border-gold-500 bg-transparent text-white hover:bg-gold-500 hover:text-navy-950 hover:shadow-card-hover",
        // Destructive
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-6 py-3 rounded-sm",
        sm: "h-9 px-4 py-2 text-xs rounded-sm",
        lg: "h-14 px-8 py-4 text-base rounded-sm",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
