"use client"

import { useEffect, useRef } from "react";
import { ServicoCard } from "./servicoCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServicosProps } from "@/src/types/types";

gsap.registerPlugin(ScrollTrigger);

interface ServicosContainerProps {
    servicos: ServicosProps[]
}

export function ContainerCardsServicos({ servicos }: ServicosContainerProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {

            gsap.from("[data-card-animation]", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.6,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="w-full md:w-122.5 grid grid-cols-2 place-items-center gap-y-8 servico-card"
            ref={containerRef}
        >

            {servicos.map(servico => (
                <ServicoCard key={servico.id} imgPath={servico.imgpath.url} label={servico.label} />
            ))}

        </div>
    )
}