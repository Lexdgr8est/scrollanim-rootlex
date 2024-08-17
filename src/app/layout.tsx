import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rootlex Scroll Animation",
    description: "A site to test out my animation skills with framer motion",
};

const myArray = Array(20)
    .fill(null)
    .map((_, i) => (i % 2 === 0 ? "circle" : "x-shape"));

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.className, "relative")}>
                <div className="absolute top-0 left-0 w-full h-full  flex justify-evenly pointer-events-none">
                    {Array(4)
                        .fill(null)
                        .map((_, i) => (
                            <div
                                key={i}
                                className="w-[1px] min-h-full bg-border relative "
                            >
                                <div className="absolute py-40 h-full top-0 left-1/2 -translate-x-1/2 flex flex-col justify-between">
                                    {myArray.map((shape, index) => (
                                        <div
                                            key={index}
                                            className={clsx(
                                                shape === "circle"
                                                    ? "w-4 h-4 rounded-[50%] border-4 border-border bg-bg"
                                                    : "w-4 h-4 relative border-4 border-border rotate-45"
                                            )}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
                {children}
            </body>
        </html>
    );
}
