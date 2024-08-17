"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
    children: ReactNode;
}

const TextWrapper = ({ children }: Props) => {
    const textRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "end start"],
    });

    // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
    const colorChange = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [
            "hsla(180, 7%, 75%, 0.9)",
            "hsla(180, 7%, 75%, 0.9)",
            "#f2994a",
            "#f2994a",
            "#f2994a",
            "#f2994a",
        ]
    );

    return (
        <div ref={textRef}>
            <motion.p
                style={{
                    opacity,
                    x,
                    color: colorChange,
                }}
                className="animated-p"
            >
                {children}
            </motion.p>
        </div>
    );
};

const TextSection = () => {
    return (
        <div>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </TextWrapper>
        </div>
    );
};

export default TextSection;
