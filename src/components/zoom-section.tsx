"use client";
import use3DHover from "@/utils/hover";
import Image from "next/image";
import React, { useRef } from "react";
import arm1Img from "@/assets/images/arm.jpg";

import arm2Img from "@/assets/images/arm2.jpg";

const ZoomSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { transform } = use3DHover(containerRef, {
        x: 5,
        y: 10,
        z: -60,
    });
    const { transform: transform2 } = use3DHover(containerRef, {
        x: 40,
        y: 20,
        z: 7,
    });
    const { transform: transform3 } = use3DHover(containerRef, {
        x: -45,
        y: -20,
        z: -7,
    });
    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden rounded-lg border border-border"
        >
            <div
                className="image w-full"
                style={{
                    height: "50rem",
                }}
            >
                <Image
                    fill
                    src={"/images/spiral.svg"}
                    alt="spiral"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transform: transform,
                        scale: 1.2,
                    }}
                    className="bg-bg"
                />

                <Image
                    src={arm1Img}
                    alt="arm1"
                    className="absolute top-[10%] right-[3rem]"
                    width={500}
                    height={500}
                    style={{
                        height: 500,
                        width: 500,
                        objectFit: "cover",
                        objectPosition: "50% 0%",
                        transform: transform2,
                    }}
                />
                <Image
                    src={arm2Img}
                    alt="arm2"
                    className="absolute top-[10%] left-[3rem]"
                    width={500}
                    height={500}
                    style={{
                        height: 500,
                        width: 500,
                        objectFit: "cover",
                        objectPosition: "center",
                        transform: transform3,
                    }}
                />
            </div>
        </div>
    );
};

export default ZoomSection;
