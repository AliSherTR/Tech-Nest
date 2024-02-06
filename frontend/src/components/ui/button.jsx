import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "yesinline-flex yesitems-center yesjustify-center yeswhitespace-nowrap yesrounded-md yestext-sm yesfont-medium yesring-offset-white yestransition-colors focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-stone-950 focus-visible:yesring-offset-2 disabled:yespointer-events-none disabled:yesopacity-50 dark:yesring-offset-stone-950 dark:focus-visible:yesring-stone-300",
  {
    variants: {
      variant: {
        default: "yesbg-stone-900 yestext-stone-50 hover:yesbg-stone-900/90 dark:yesbg-stone-50 dark:yestext-stone-900 dark:hover:yesbg-stone-50/90",
        destructive:
          "yesbg-red-500 yestext-stone-50 hover:yesbg-red-500/90 dark:yesbg-red-900 dark:yestext-stone-50 dark:hover:yesbg-red-900/90",
        outline:
          "yesborder yesborder-stone-200 yesbg-white hover:yesbg-stone-100 hover:yestext-stone-900 dark:yesborder-stone-800 dark:yesbg-stone-950 dark:hover:yesbg-stone-800 dark:hover:yestext-stone-50",
        secondary:
          "yesbg-stone-100 yestext-stone-900 hover:yesbg-stone-100/80 dark:yesbg-stone-800 dark:yestext-stone-50 dark:hover:yesbg-stone-800/80",
        ghost: "hover:yesbg-stone-100 hover:yestext-stone-900 dark:hover:yesbg-stone-800 dark:hover:yestext-stone-50",
        link: "yestext-stone-900 yesunderline-offset-4 hover:yesunderline dark:yestext-stone-50",
      },
      size: {
        default: "yesh-10 yespx-4 yespy-2",
        sm: "yesh-9 yesrounded-md yespx-3",
        lg: "yesh-11 yesrounded-md yespx-8",
        icon: "yesh-10 yesw-10",
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
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
