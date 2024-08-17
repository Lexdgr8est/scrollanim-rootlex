"use client";

import Image from "next/image";
import React from "react";

interface Props {
    title: string;
    description: string;
    image: any;
}

const Card = ({ description, image, title }: Props) => {
    return (
        <div
            className="relative bg-bg h-full rounded-lg border border-border "
            style={{
                padding: "1.5rem",
                transition: "all 0.3s ease-in-out",
            }}
        >
            <div
                className="card-image"
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <p
                    className="card-new absolute z-10 bg-[#222260] text-white rounded-lg font-semibold  "
                    style={{
                        top: "3rem",
                        right: "2.5rem",
                        padding: "0.2rem 0.5rem",
                        fontSize: "1rem",
                    }}
                >
                    New
                </p>
                <div
                    className="card-text absolute z-10"
                    style={{
                        bottom: "3rem",
                        left: "2.5rem",
                    }}
                >
                    <h3
                        className="inline-block text-yellow bg-bg border border-border"
                        style={{
                            fontSize: "1.5rem",
                            padding: "0.2rem 1rem",
                            borderRadius: "30px",
                            marginBottom: "0.5rem",
                        }}
                    >
                        {title}
                    </h3>
                    <p>{description}</p>
                </div>
                <Image
                    src={image}
                    alt="card-image"
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: 8,
                    }}
                />
            </div>
            <div
                className="absolute -bottom-0.5 -left-0.5  h-1/4 bg-gradient-to-t from-[#111111] to-[rgba(17,17,17,0.06)] rounded-bl-lg rounded-br-lg"
                style={{
                    width: "calc(100% + 4px)",
                }}
            ></div>
        </div>
    );
    // return (
    //     <div className="relative bg-bg h-[400px] w-[400px] p-5 rounded-lg border border-border transition ease-in-out delay-300">
    //         <div
    //             style={{
    //                 width: "100%",
    //                 height: "100%",
    //             }}
    //         ></div>
    //         <p className="absolute top-12 right-10 z-10 bg-[#222260] text-white py-1 px-2 rounded-lg font-semibold text-sm">
    //             New
    //         </p>
    //         <div className="absolute bottom-12 left-10 z-10">
    //             <h3 className="inline-block text-lg text-yellow bg-bg p-3 rounded-[30px] mb-8 border border-border">
    //                 {title}
    //             </h3>
    //             <p>{description}</p>
    //         </div>

    //         <Image
    //             src={image}
    //             alt="card-image"
    //             fill
    //             style={{
    //                 height: "100%",
    //                 width: "100%",
    //                 objectFit: "cover",
    //                 objectPosition: "center",
    //                 borderRadius: 8,
    //             }}
    //         />
    //
    //     </div>
    // );
};

export default Card;
