"use client";
import React, { ReactNode, RefObject } from "react";

interface Props {
    children: ReactNode;
    ref?: RefObject<HTMLDivElement>;
}

const SectionLayout = ({ children, ref }: Props) => {
    return (
        <div
            style={{
                padding: "5rem 10rem",
            }}
            ref={ref}
        >
            {children}
        </div>
    );
};

export default SectionLayout;
