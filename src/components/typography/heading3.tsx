import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import { cn } from "@/libs/utils";

const heading3Variants = cva('text-3xl font-bold', {
    variants: {
        variant: {
            dark: 'text-black',
            light: 'text-white',
        }
    },
    defaultVariants: {
        variant: "dark",
    }
})

export interface Heading3Props
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading3Variants> {

}

const Heading3 = React.forwardRef<HTMLHeadingElement, Heading3Props>(
    ({ className, variant, ...props }, ref) => {

        return (
            <h1
                className={cn(heading3Variants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Heading3.displayName = "Heading3"
export { Heading3, heading3Variants }