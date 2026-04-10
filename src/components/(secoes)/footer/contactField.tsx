<<<<<<< HEAD
"use client"

import { useEffect } from "react";
import { usePhones } from "@/src/context/globals";
import { ContactFieldProps } from "@/src/types/types";
import { FaPhoneAlt } from "react-icons/fa";

export function ContactField({ telefones }: ContactFieldProps) {
    const phones = usePhones();

    useEffect(() => {
        if (telefones) {
            telefones.forEach(telefone => {
                phones?.addPhone(telefone);
            })
        }
    }, [telefones])

    const list = phones?.phones!;
    let numero;

    if (list?.length > 0) {
        const randomIndex = Math.floor(Math.random() * list.length);
        numero = list[randomIndex];
    }

    const numeroFormatado = numero && numero
        .slice(2)
        .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")

    return (
        <div className="flex items-center justify-center gap-1">
            <FaPhoneAlt size={18} color="#fff" />
            <span className="text-lg md:text-xl">{numeroFormatado}</span>
        </div>
    )
=======
"use client"

import { useEffect } from "react";
import { usePhones } from "@/src/context/globals";
import { ContactFieldProps } from "@/src/types/types";
import { FaPhoneAlt } from "react-icons/fa";

export function ContactField({ telefones }: ContactFieldProps) {
    const phones = usePhones();

    useEffect(() => {
        if (telefones) {
            telefones.forEach(telefone => {
                phones?.addPhone(telefone);
            })
        }
    }, [telefones])

    const list = phones?.phones!;
    let numero;

    if (list?.length > 0) {
        const randomIndex = Math.floor(Math.random() * list.length);
        numero = list[randomIndex];
    }

    const numeroFormatado = numero && numero
        .slice(2)
        .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")

    return (
        <div className="flex items-center justify-center gap-1">
            <FaPhoneAlt size={18} color="#fff" />
            <span className="text-lg md:text-xl">{numeroFormatado}</span>
        </div>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}