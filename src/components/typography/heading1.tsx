import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import { cn } from "@/libs/utils";

const heading1Variants = cva('text-5xl font-bold uppercase', {
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

export interface Heading1Props
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading1Variants> {

}

const Heading1 = React.forwardRef<HTMLHeadingElement, Heading1Props>(
    ({ className, variant, ...props }, ref) => {

        return (
            <h1
                className={cn(heading1Variants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Heading1.displayName = "Heading1"
export { Heading1, heading1Variants }