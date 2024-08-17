"use client";
import Card from "@/components/card";
import Footer from "@/components/footer";
import FullPage from "@/components/full-page";
import Header from "@/components/header";
import HorizontalWrapper from "@/components/horizontal-wrapper";
import SectionLayout from "@/components/section-layout";
import TextSection from "@/components/text-section";
import ZoomSection from "@/components/zoom-section";
import { cards } from "@/utils/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
    const videoRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: videoRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
    const scale = useTransform(
        scrollYProgress,
        [0, 0.6, 0.8, 0.9],
        [1, 0.8, 0.8, 0]
    );

    return (
        <div className="bg-bg z-10">
            <Header />
            <main className="min-h-[100vh]">
                <SectionLayout>
                    <HorizontalWrapper direction={-1400} height={"40rem"}>
                        <div
                            className="cards-section grid absolute"
                            style={{
                                gap: "4rem",
                                gridTemplateColumns: "repeat(5, 30rem)",
                            }}
                        >
                            {cards.map((c, index) => {
                                return (
                                    <Card
                                        key={index}
                                        description={c.description}
                                        image={c.image}
                                        title={c.title}
                                    />
                                );
                            })}
                        </div>
                    </HorizontalWrapper>
                </SectionLayout>
                <FullPage />
                <SectionLayout>
                    <HorizontalWrapper direction={1400} height={"40rem"}>
                        <div
                            className="cards-section grid absolute"
                            style={{
                                gap: "4rem",
                                gridTemplateColumns: "repeat(5, 30rem)",
                                right: 0,
                            }}
                        >
                            {cards.map((c, index) => {
                                return (
                                    <Card
                                        key={index}
                                        description={c.description}
                                        image={c.image}
                                        title={c.title}
                                    />
                                );
                            })}
                        </div>
                    </HorizontalWrapper>
                </SectionLayout>
                <SectionLayout>
                    <TextSection />
                </SectionLayout>

                <SectionLayout>
                    <motion.div
                        style={{
                            opacity,
                            scale,
                        }}
                        ref={videoRef}
                        className="video-comp bg-[#161616] rounded-2xl "
                    >
                        <iframe
                            src="https://www.youtube.com/embed/qp0-L_M3Ad4"
                            title="Youtube Video Player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media"
                            allowFullScreen
                            className="border-none w-full iframe-style"
                        ></iframe>
                    </motion.div>
                </SectionLayout>
                <SectionLayout>
                    <ZoomSection />
                </SectionLayout>
                <SectionLayout>
                    <TextSection />
                </SectionLayout>

                <Footer />
            </main>
        </div>
    );
}
