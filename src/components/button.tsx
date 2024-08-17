"use client";
import React, { ReactNode } from "react";

interface Props {
    name: string;
    icon?: ReactNode;
    background?: string;
    color?: string;
    border?: string;
}

const Button = ({ name, background, border, color, icon }: Props) => {
    return (
        <div
            className="px-8 py-3 rounded-3xl border-2 border-border cursor-pointer transition-all ease-in-out duration-200 flex items-center gap-4 hover:bg-border hover:text-white"
            style={{
                background,
                color,
                border,
            }}
        >
            {icon ? icon : null}
            {name}
        </div>
    );
};

export default Button;
