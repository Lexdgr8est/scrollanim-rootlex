"use client";
import Image from "next/image";
import React, { useRef } from "react";

import logo from "@/assets/images/logo.png";
import Button from "./button";
import { RocketIcon, WalletMinimal } from "lucide-react";
import { Abril_Fatface } from "next/font/google";
import monkey from "@/assets/images/monkey.png";
import { clsx } from "clsx";
import use3DHover from "@/utils/hover";
const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: ["400"],
});

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    const { transform } = use3DHover(headerRef, {
        x: 30,
        y: -40,
        z: 30,
    });

    const { transform: imaageTransform } = use3DHover(headerRef, {
        x: 20,
        y: -5,
        z: 11,
    });

    return (
        <div className="" ref={headerRef}>
            <nav className=" py-3 px-16 min-h-[10vh] border-b border-b-border flex items-center justify-between">
                <div className="flex gap-x-4 items-center cursor-pointer">
                    <Image src={logo} alt="logo" width={36} />
                    <h2 className="text-xl font-bold">ECOFLOW</h2>
                </div>
                <div className="rounded-lg  flex-1 flex justify-center ">
                    <input
                        className="w-1/2 px-2 py-3 rounded-lg bg-[#161616] border border-border placeholder:text-border placeholder:font-medium"
                        placeholder="Search"
                    />
                </div>
                <ul className="flex items-center gap-x-8">
                    <li className="list">
                        <a href="#">Home</a>
                    </li>
                    <li className="list">
                        <a href="#">About</a>
                    </li>
                    <li className="list">
                        <a href="#">Marketplace</a>
                    </li>
                    <li className="list">
                        <a href="#">Contact</a>
                    </li>
                    <Button name="Connnet Wallet" icon={<WalletMinimal />} />
                </ul>
            </nav>
            <div className="flex justify-between min-h-[90vh] items-center gap-8 py-40 px-20">
                <div>
                    <h1
                        className={clsx(
                            abril.className,
                            "text-yellow pb-5 text-5xl"
                        )}
                    >
                        Buy, collect and sell extraordinary{" "}
                    </h1>
                    <p className="mb-5">
                        Acquire expertise in navigating the rapidly evolving and
                        exhilarating NFT landscape, unveil the highly
                        sought-after NFTs, and comprehend the possible
                        advantages and disadvantages of acquiring, amassing, and
                        vending these exceptional digital assets.
                    </p>
                    <div className="flex items-center gap-4">
                        <Button
                            name="Get Started"
                            background="#f2994a"
                            color="#fff"
                            border="1px solid #f2994a"
                            icon={<RocketIcon />}
                        />
                        <Button name="Learn More " />
                    </div>
                </div>
                <div>
                    <div
                        className=" relative p-4 border border-border rounded-lg bg-bg w-[600px] h-[600px]"
                        style={{
                            transform,
                        }}
                    >
                        <Image
                            alt="hero"
                            width={600}
                            height={600}
                            // fill
                            src={monkey}
                            className="rounded-lg"
                            // style={{
                            //     width: 600,
                            //     height: 600,
                            // }}
                            style={{
                                transform: imaageTransform,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
