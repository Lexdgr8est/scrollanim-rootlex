"use client";

import { RefObject, useCallback, useEffect, useState } from "react";
import { HoverCordsType } from "./types";

export default function use3DHover(
    ref: RefObject<HTMLDivElement>,
    data: {
        x: number | 0;
        y: number | 0;
        z: number | 0;
    }
) {
    const [coords, setCoords] = useState<HoverCordsType>({
        x: 0,
        y: 0,
        z: 0,
    });
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!ref.current) return;
            const { offsetHeight: height, offsetWidth: width } = ref.current;

            const { clientX, clientY } = e;

            const x = (clientX - width / 2) / width;
            const y = (clientY - width / 2) / height;

            setCoords({ x, y, z: 0 });
        },
        [ref]
    );

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        const { current } = ref;
        current?.addEventListener("mousemove", handleMouseMove);
        current?.addEventListener("mouseenter", handleMouseEnter);
        current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            current?.removeEventListener("mousemove", handleMouseMove);
            current?.removeEventListener("mouseenter", handleMouseEnter);
            current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [handleMouseMove, ref, coords, isHovering, data.x, data.y, data.z]);

    const { x: xCoord, y: yCoord } = coords;

    const xTransform = isHovering ? xCoord * data.x : 0;
    const yTransform = isHovering ? yCoord * data.y : 0;
    const zTransform = isHovering ? data.z : 0;

    const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
    const transition = isHovering ? `all 0.3s ease-in-out` : ``;

    return { transform, transition };
}
