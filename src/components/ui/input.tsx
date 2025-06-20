import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { SearchIcon } from "@/components/icons/icons"

const inputVariants = cva(
  "flex w-full border rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        outline: "border-2",
        filled: "bg-muted border-transparent",
        ghost: "border-muted-foreground",
        search: "pl-10", // For inputs with a search icon
      },
      inputSize: {
        default: "h-10",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, inputSize, ...props }, ref) => {
    if (variant === "search") {
      return (
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <SearchIcon className="fill-input" />
          </div>
          <input
            type={type}
            className={cn(inputVariants({ variant, inputSize, className }))}
            ref={ref}
            {...props}
          />
        </div>
      )
    }

    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
