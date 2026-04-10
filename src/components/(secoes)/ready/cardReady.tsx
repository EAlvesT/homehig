<<<<<<< HEAD
"use client"

import { useRef } from "react";
import { TbFlowerFilled } from "react-icons/tb";
import { BotaoContato } from "../../contato";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CardReady() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardInnerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.to(cardInnerRef.current, {
            rotationY: 180,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%", // Dispara quando o topo do card chega em 60% da tela
                toggleActions: "play none none reverse",
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full flex justify-center py-20">

            {/* O Wrapper define a perspectiva 3D */}
            <div className="w-full max-w-125 h-100 perspective-[1000px]">

                {/* O Elemento que o GSAP vai girar */}
                <div
                    ref={cardInnerRef}
                    className="relative w-full h-full transition-all duration-500 transform-3d"
                >

                    {/* FACE FRONTAL (O que aparece primeiro) */}
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 bg-blue-100 rounded-[52px] shadow-xl backface-hidden">
                        <TbFlowerFilled size={92} className="text-blue-600 animate-pulse" />
                        <h3 className="text-2xl font-bold text-center mt-4 text-[#121212]">Então vamos lá ...</h3>
                    </div>

                    {/* FACE TRASEIRA (O conteúdo final que você já tinha) */}
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 bg-linear-to-b from-azul-claro to-fundo-final-card text-white rounded-[52px] shadow-xl  transform-[rotateY(180deg)] backface-hidden">
                        <TbFlowerFilled size={92} color="#FFFFFF" />
                        <h3 className="text-3xl md:text-4xl leading-tight font-bold text-center mt-4">
                            Pronta para renovar o seu lar?
                        </h3>
                        <p className="text-lg font-thin text-center mt-4 mb-6">
                            Solicite um orçamento sem compromisso agora mesmo!
                        </p>
                        {/* <BotaoContato icone="whatsapp" texto="FALAR NO WHATSAPP" /> */}
                        <BotaoContato icone="whatsapp" texto="FALAR NO WHATSAPP" />
                    </div>

                </div>
            </div>
        </div>
    )
=======
"use client"

import { useRef } from "react";
import { TbFlowerFilled } from "react-icons/tb";
import { BotaoContato } from "../../contato";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CardReady() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardInnerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.to(cardInnerRef.current, {
            rotationY: 180,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%", // Dispara quando o topo do card chega em 60% da tela
                toggleActions: "play none none reverse",
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full flex justify-center py-20">

            {/* O Wrapper define a perspectiva 3D */}
            <div className="w-full max-w-125 h-100 perspective-[1000px]">

                {/* O Elemento que o GSAP vai girar */}
                <div
                    ref={cardInnerRef}
                    className="relative w-full h-full transition-all duration-500 transform-3d"
                >

                    {/* FACE FRONTAL (O que aparece primeiro) */}
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 bg-blue-100 rounded-[52px] shadow-xl backface-hidden">
                        <TbFlowerFilled size={92} className="text-blue-600 animate-pulse" />
                        <h3 className="text-2xl font-bold text-center mt-4 text-[#121212]">Então vamos lá ...</h3>
                    </div>

                    {/* FACE TRASEIRA (O conteúdo final que você já tinha) */}
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 bg-linear-to-b from-azul-claro to-fundo-final-card text-white rounded-[52px] shadow-xl  transform-[rotateY(180deg)] backface-hidden">
                        <TbFlowerFilled size={92} color="#FFFFFF" />
                        <h3 className="text-3xl md:text-4xl leading-tight font-bold text-center mt-4">
                            Pronta para renovar o seu lar?
                        </h3>
                        <p className="text-lg font-thin text-center mt-4 mb-6">
                            Solicite um orçamento sem compromisso agora mesmo!
                        </p>
                        {/* <BotaoContato icone="whatsapp" texto="FALAR NO WHATSAPP" /> */}
                        <BotaoContato icone="whatsapp" texto="FALAR NO WHATSAPP" />
                    </div>

                </div>
            </div>
        </div>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}