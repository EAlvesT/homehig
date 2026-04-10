<<<<<<< HEAD
"use client"

interface abrirWhatsappFunctionProps {
    e: React.MouseEvent<HTMLAnchorElement>;
    numeros: string[] | undefined
}

export function abrirWhatsapp({ numeros, e }: abrirWhatsappFunctionProps) {
    e.preventDefault();

    if (numeros !== undefined) {
        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        const numero = numeros[indiceAleatorio];
        const mensagem = encodeURIComponent("Olá, gostaria de solicitar um orçamento!");

        window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank", "noreferrer")
    }
=======
"use client"

interface abrirWhatsappFunctionProps {
    e: React.MouseEvent<HTMLAnchorElement>;
    numeros: string[] | undefined
}

export function abrirWhatsapp({ numeros, e }: abrirWhatsappFunctionProps) {
    e.preventDefault();

    if (numeros !== undefined) {
        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        const numero = numeros[indiceAleatorio];
        const mensagem = encodeURIComponent("Olá, gostaria de solicitar um orçamento!");

        window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank", "noreferrer")
    }
>>>>>>> 1a3b13d (fix-age-add-readme)
}