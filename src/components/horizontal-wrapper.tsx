"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
    children: ReactNode;
    direction: number;
    height: any;
}

const HorizontalWrapper = ({ children, direction, height }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xTransfrom = useTransform(
        scrollYProgress,
        [0, 0.1, 1],
        [0, 0, direction]
    );

    return (
        <div ref={containerRef}>
            <motion.div
                style={{
                    height,
                    zIndex: 6,
                    position: "relative",
                    translateX: xTransfrom,
                }}
                className=""
            >
                {children}
            </motion.div>
        </div>
    );
};

export default HorizontalWrapper;
