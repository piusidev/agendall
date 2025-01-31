import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { Loader } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@ui/lib/utils'

const buttonVariants = cva(
  'relative overflow-hidden group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      loading = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        aria-busy={loading}
        disabled={loading}
        {...props}
      >
        <div className="transition-all duration-300 flex items-center justify-center gap-2 translate-y-[0] transform opacity-100 group-aria-busy:translate-y-[-100%] group-aria-busy:opacity-0">
          {children}
        </div>

        <div className="transition-all duration-300 absolute translate-y-[100%] transform opacity-0  group-aria-busy:translate-y-0 group-aria-busy:opacity-100">
          <Loader className="animate-spin" />
        </div>
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
