"use client";
import Image from "next/image";
import React, { useRef } from "react";
import roverImg from "@/assets/images/rover.jpg";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
const FullPage = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    // const xTransform = useTransform(
    //     scrollYProgress,
    //     [0, 0.5, 1],
    //     [0, 0, -1000]
    // );

    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const xTransform = useTransform(
        scrollYProgress,
        [1, 0.5, 0.1, 0],
        [-1000, 0, 0, 0]
    );

    // console.log("xTransform:", xTransform);

    return (
        <div ref={sectionRef}>
            <motion.div
                style={{
                    transition: "all 0.3s ease-in-out",
                    scale: scale,
                    x: xTransform,
                }}
                className="relative min-h-[100vh] w-[90%] rounded-2xl border border-border hover:border-yellow"
            >
                <Image
                    src={roverImg.src}
                    alt="rover"
                    fill
                    className="object-cover object-center"
                    style={{
                        padding: "1.5rem",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default FullPage;
