"use client";
import React, { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export const LenisProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    //   useEffect(() =

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
};