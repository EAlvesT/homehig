<<<<<<< HEAD
"use client"

import { useRef, useEffect } from "react";
import { CardsDataProps } from "./escolha";
import { CardEscolha } from "./escolhaCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface ContainerEscolhaCardsProps {
    cardsData: CardsDataProps[]
}

export function ContainerEscolhaCards({ cardsData }: ContainerEscolhaCardsProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 728;

        if (!containerRef.current) return;

        const ctx = gsap.context(() => {

            gsap.from("[data-card-escolha]", {
                ...(isMobile ? { x: 60 } : { y: 60 }),
                opacity: 0,
                duration: 1.7,
                ease: "power3.out",
                stagger: 0.5,

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true
                }
            })

        }, containerRef)

        return () => ctx.revert();
    }, [])

    return (
        <div
            className="w-full md:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr md:gap-x-18"
            ref={containerRef}
        >
            {cardsData.map(cardData => (
                <CardEscolha
                    icon={cardData.icon}
                    texto={cardData.texto}
                    titulo={cardData.titulo}
                    key={cardData.id}
                />
            ))}
        </div>
    )
=======
"use client"

import { useRef, useEffect } from "react";
import { CardsDataProps } from "./escolha";
import { CardEscolha } from "./escolhaCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface ContainerEscolhaCardsProps {
    cardsData: CardsDataProps[]
}

export function ContainerEscolhaCards({ cardsData }: ContainerEscolhaCardsProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 728;

        if (!containerRef.current) return;

        const ctx = gsap.context(() => {

            gsap.from("[data-card-escolha]", {
                ...(isMobile ? { x: 60 } : { y: 60 }),
                opacity: 0,
                duration: 1.7,
                ease: "power3.out",
                stagger: 0.5,

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true
                }
            })

        }, containerRef)

        return () => ctx.revert();
    }, [])

    return (
        <div
            className="w-full md:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr md:gap-x-18"
            ref={containerRef}
        >
            {cardsData.map(cardData => (
                <CardEscolha
                    icon={cardData.icon}
                    texto={cardData.texto}
                    titulo={cardData.titulo}
                    key={cardData.id}
                />
            ))}
        </div>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}