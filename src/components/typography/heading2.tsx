import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import { cn } from "@/libs/utils";

const heading2Variants = cva('text-4xl font-bold', {
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

export interface Heading2Props
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading2Variants> {

}

const Heading2 = React.forwardRef<HTMLHeadingElement, Heading2Props>(
    ({ className, variant, ...props }, ref) => {

        return (
            <h1
                className={cn(heading2Variants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Heading2.displayName = "Heading2"
export { Heading2, heading2Variants }