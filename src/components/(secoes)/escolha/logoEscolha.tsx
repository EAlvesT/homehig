<<<<<<< HEAD
import Image from "next/image";
import imgHomeBranca from "../../../../public/homebranco.png";

export function LogoEscolha() {
    return (
        <span className="inline-block w-28 md:w-62 h-24 relative align-middle">
            <Image
                src={imgHomeBranca}
                alt="Imagem logo Home."
                fill
                sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 208px"
                className="object-contain"
            />
        </span>
    )
=======
import Image from "next/image";
import imgHomeBranca from "../../../../public/homebranco.png";

export function LogoEscolha() {
    return (
        <span className="inline-block w-28 md:w-62 h-24 relative align-middle">
            <Image
                src={imgHomeBranca}
                alt="Imagem logo Home."
                fill
                sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 208px"
                className="object-contain"
            />
        </span>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
};