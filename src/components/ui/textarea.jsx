import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[100px] resize-none  w-full rounded-md border border-card-foreground bg-transparent px-3 py-2 text-sm shadow-sm text-card-foreground focus-visible:border-2 focus-visible:outline-none focus-within:border-primary disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
