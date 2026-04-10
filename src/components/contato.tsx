<<<<<<< HEAD
"use client"

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { abrirWhatsapp } from "../utils/abrirwhatsapp";
import { usePhones } from "../context/globals";

interface BotaoContatoProps {
    icone: "telefone" | "whatsapp";
    texto: string;
}

export function BotaoContato({ icone, texto }: BotaoContatoProps) {
    const tamanhoIconeBotao = 26;
    const phones = usePhones();
    const numerosExistentes = phones?.phones;

    function handleChamaWhatsapp(e: React.MouseEvent<HTMLAnchorElement>) {
        abrirWhatsapp({ numeros: numerosExistentes, e });
    }

    return (
        <a
            title="Botão para contato"
            className="p-4 mt-8 bg-azul-claro rounded-lg flex items-center justify-center gap-4 cursor-pointer hover:scale-105 duration-300 font-serif underline z-1"
            href="#"
            onClick={handleChamaWhatsapp}
        >
            {icone === "telefone" && <FaPhoneAlt size={tamanhoIconeBotao} color="ffffff" />}
            {icone === "whatsapp" && <FaWhatsapp size={tamanhoIconeBotao} color="ffffff" />}

            {texto}
        </a>
    )
=======
"use client"

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { abrirWhatsapp } from "../utils/abrirwhatsapp";
import { usePhones } from "../context/globals";

interface BotaoContatoProps {
    icone: "telefone" | "whatsapp";
    texto: string;
}

export function BotaoContato({ icone, texto }: BotaoContatoProps) {
    const tamanhoIconeBotao = 26;
    const phones = usePhones();
    const numerosExistentes = phones?.phones;

    function handleChamaWhatsapp(e: React.MouseEvent<HTMLAnchorElement>) {
        abrirWhatsapp({ numeros: numerosExistentes, e });
    }

    return (
        <a
            title="Botão para contato"
            className="p-4 mt-8 bg-azul-claro rounded-lg flex items-center justify-center gap-4 cursor-pointer hover:scale-105 duration-300 font-serif underline z-1"
            href="#"
            onClick={handleChamaWhatsapp}
        >
            {icone === "telefone" && <FaPhoneAlt size={tamanhoIconeBotao} color="ffffff" />}
            {icone === "whatsapp" && <FaWhatsapp size={tamanhoIconeBotao} color="ffffff" />}

            {texto}
        </a>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}