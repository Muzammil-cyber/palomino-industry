import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import { cn } from "@/libs/utils";

const taglineVariants = cva('text-sm font-semibold font-body italic', {
    variants: {
        variant: {
            dark: 'text-black-200',
            light: 'text-white-200',
        }
    },
    defaultVariants: {
        variant: "dark",
    }
})

export interface TaglineProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof taglineVariants> {

}

const Tagline = React.forwardRef<HTMLDivElement, TaglineProps>(
    ({ className, variant, ...props }, ref) => {

        return (
            <div
                className={cn(taglineVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Tagline.displayName = "tagline"
export { Tagline, taglineVariants }