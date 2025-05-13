import { cva, type VariantProps } from "class-variance-authority"
import React from "react";
import { cn } from "@/libs/utils";



const buttonVariants = cva(
    "whitespace-nowrap rounded-lg inline-flex justify-center items-center gap-2.5 overflow-hidden capitalize font-bold text-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "text-white bg-black hover:bg-black/80",
                outline:
                    "border border-black bg-transparent text-black",
                secondary:
                    "bg-white text-black hover:bg-white/80",
                link: "text-white after:content-[''] relative after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:-z-10 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
            },
            size: {
                default: "px-8 py-4",
                sm: "px-4 py-2",
                icon: "h-9 w-9",
                link: "px-2 py-1",
            },
            rounded: {
                default: "rounded-lg",
                sm: "rounded-sm",
                full: "rounded-full",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            rounded: "default",
        },
    }
)
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {

}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, rounded, variant, size, ...props }, ref) => {


        return (
            <button
                className={cn(buttonVariants({ variant, size, rounded, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }