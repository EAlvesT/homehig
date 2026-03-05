"use client"

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

interface BotaoContatoProps {
    icone: "telefone" | "whatsapp";
    texto: string;
}

export function BotaoContato({ icone, texto }: BotaoContatoProps) {
    const tamanhoIconeBotao = 26;

    const numeros = ["5524992075052"];

    function abrirWhatsapp(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        const numero = numeros[indiceAleatorio];
        const mensagem = encodeURIComponent("Olá, gostaria de solicitar um orçamento!");

        window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank", "noreferrer")
    }

    return (
        <a
            title="Botão para contato"
            className="p-4 mt-8 bg-azul-claro rounded-lg flex items-center justify-center gap-4 cursor-pointer hover:scale-105 duration-300 font-serif underline z-1"
            href="#"
            onClick={abrirWhatsapp}
        >
            {icone === "telefone" && <FaPhoneAlt size={tamanhoIconeBotao} color="ffffff" />}
            {icone === "whatsapp" && <FaWhatsapp size={tamanhoIconeBotao} color="ffffff" />}

            {texto}
        </a>
    )
}