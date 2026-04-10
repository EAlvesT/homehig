"use client"

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { CardPassos } from "./card-passos";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface PassosProps {
    id: number;
    numero: string;
    titulo: string;
    texto: string;
}

interface ConatinerCardPassosProps {
    passos: PassosProps[]
}

export function ContainerCardPassos({ passos }: ConatinerCardPassosProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {

            gsap.from("[data-card-passos]", {
                x: 120,
                y: -210,
                rotation: 22,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.9,

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, [])

    return (
        <div
            className="w-full md:max-w-3/4 grid grid-cols-1 md:grid-cols-3 gap-y-18 md:gap-0 place-items-center"
            ref={containerRef}
        >
            {passos.map(passo => (
                <CardPassos key={passo.id} numero={passo.numero} texto={passo.texto} titulo={passo.titulo} />
            ))}
        </div>
    )
}