import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import { cn } from "@/libs/utils";

const paraVariants = cva('text-base font-bold font-body', {
    variants: {
        variant: {
            dark: 'text-black',
            light: 'text-white',
            'muted-200': 'text-muted-200',
            muted: 'text-muted',
        }
    },
    defaultVariants: {
        variant: "muted-200",
    }
})

export interface ParaProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paraVariants> {

}

const Para = React.forwardRef<HTMLParagraphElement, ParaProps>(
    ({ className, variant, ...props }, ref) => {

        return (
            <h1
                className={cn(paraVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Para.displayName = "Para"
export { Para, paraVariants }