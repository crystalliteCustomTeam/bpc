import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const ButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-[14px] md:text-[16px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-transparent text-primary-foreground border-2 hover:border-0 hover:bg-primary/90",
        dark:
          "bg-card-foreground text-primary-foreground hover:bg-primary/90",
        darkOutline:
          "bg-transparent text-card-foreground border-2 border-card-foreground hover:border-0 hover:bg-primary/90 hover:text-white"
      },
      size: {
        default: "h-[45px] px-4",
        cta: "h-[45px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(ButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, ButtonVariants }