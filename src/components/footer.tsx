"use client";
import Image from "next/image";
import React from "react";
import logoImg from "@/assets/images/logo.png";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { footerData } from "@/utils/data";

const Footer = () => {
    return (
        <footer className="relative footer z-10 bg-bg border-t border-t-border">
            <nav className="flex justify-between gap-6 ">
                <div className="logo-con w-1/2 ">
                    <div className="flex items-center gap-4 mb-4">
                        <Image src={logoImg} width={36} alt="logo" />
                        <h2>ECOFLOW</h2>
                    </div>
                    <div className="relative">
                        <input
                            className="w-full p-5 rounded-lg bg-[#161616] border border-border placeholder:text-border placeholder:font-medium "
                            placeholder="Subscribe here..."
                        />
                        <button className="absolute right-8 top-1/2 -translate-y-1/2 bg-transparent cursor-pointer transition-all ease-in-out hover:text-white hover:translate-x-2 ">
                            &#8594;
                        </button>
                    </div>

                    <p className="my-6">
                        Create, Sell and Collect Truly Rare Digital Artworks.
                        Powered By Blockchain Technology.
                    </p>
                    <div className="flex gap-4 ">
                        <Instagram
                            className="cursor-pointer transition-all hover:text-white"
                            size={26}
                        />
                        <Twitter
                            className="cursor-pointer transition-all hover:text-white"
                            size={26}
                        />
                        <Linkedin
                            className="cursor-pointer transition-all hover:text-white"
                            size={26}
                        />
                        <Github
                            className="cursor-pointer transition-all hover:text-white"
                            size={26}
                        />
                        <Facebook
                            className="cursor-pointer transition-all hover:text-white"
                            size={26}
                        />
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-3 gap-4 6">
                    {footerData.map((item, index) => {
                        return (
                            <div key={index}>
                                <h4 className="text-lg mb-6">{item.title}</h4>
                                <ul>
                                    {item.links.map((text, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={`${
                                                    index !== item.links.length
                                                        ? "mb-4"
                                                        : "mb-0"
                                                }`}
                                            >
                                                <a
                                                    href="#"
                                                    className="text-border"
                                                >
                                                    {text.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </nav>
            <div className="flex justify-between items-center mt-8 py-8 border-t border-t-border">
                <a href="">©2023 The Code Dealer. All rights reserved.</a>
                <a href="">Privacy policy | Terms of service</a>
            </div>
        </footer>
    );
};

export default Footer;
