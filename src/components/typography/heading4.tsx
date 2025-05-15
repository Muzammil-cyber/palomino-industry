import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import { cn } from "@/libs/utils";

const heading4Variants = cva('text-lg font-bold', {
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

export interface Heading4Props
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading4Variants> {

}

const Heading4 = React.forwardRef<HTMLHeadingElement, Heading4Props>(
    ({ className, variant, ...props }, ref) => {

        return (
            <h1
                className={cn(heading4Variants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Heading4.displayName = "Heading4"
export { Heading4, heading4Variants }