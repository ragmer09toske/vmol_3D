"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Card } from "@/components/ui/card";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/glowing-stars";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import useDeviceType from "../Devices";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Image from "next/image";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Model } from "@/public/Scene";
import { Keyboard } from "@/public/Keyboard";
import { CyberCity } from "@/public/CyberCity";
import { AIRMAX } from "@/public/AIRMAX";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Tailwindfilter from "@/components/ui/Tailwindfilter";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;
 
function TracingBeamIndex() {
  const isDesktop = useDeviceType();
  return (
    <div className="w-full">
    <Tailwindfilter/>
    <TracingBeam className="w-full">
      <div className=" pl-1 lg:pl-0 mx-auto antialiased pt-4 relative">
        <Canvas>
            <ambientLight />
            <OrbitControls />
            <Suspense fallback={null}>
                <AIRMAX />
            </Suspense>
        </Canvas>
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <div className="absolute">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="absolute" style={{zIndex:9999}}>
                      3D
                    </div>
                      <Canvas>
                        <PerspectiveCamera
                          makeDefault // Make this the default camera
                          position={[0, 0, 0.3]} // Adjust the position to control the initial zoom level
                        />
                        <ambientLight />
                        <OrbitControls 
                          enableZoom // Enable zooming
                          zoomSpeed={0.5} // Adjust zoom speed if necessary
                          enablePan={false} // Optionally disable panning
                        />
                        <Suspense fallback={null}>
                            <AIRMAX />
                        </Suspense>
                    </Canvas>
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    Nike Airforce 
                    </p>
                    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        M2,000.00
                    </span>
                    </button>
                </BackgroundGradient>
            </div>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Snickers
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
        <div className="mb-5">
            <ContainerScroll
                titleComponent={
                <>
                    <h1 className="text-4xl font-semibold text-black dark:text-white">
                    Unleash the power of <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                        Scroll Animations
                    </span>
                    </h1>
                </>
                }
            >
                <Canvas>
                    <ambientLight />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <Keyboard />
                    </Suspense>
                </Canvas>
            </ContainerScroll>
        </div>
      </div>
    </TracingBeam>
    </div>
  );
}

export default TracingBeamIndex
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  export const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];