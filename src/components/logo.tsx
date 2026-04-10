<<<<<<< HEAD
import { LocalAtendimento } from "./(secoes)/hero/local";
import Image from "next/image";
import logoImg from '../../public/Logo-alta-s-fundo.png';

export function Logo() {
    return (
        <div className="w-full px-4 flex items-center justify-center flex-col gap-2">
            <div className="w-full md:w-[32%] h-40 md:h-35 relative">
                <Image
                    src={logoImg}
                    alt="Imagem da logo"
                    quality={75}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    draggable="false"
                />
            </div>

            <LocalAtendimento />
        </div>
    )
=======
import { LocalAtendimento } from "./(secoes)/hero/local";
import Image from "next/image";
import logoImg from '../../public/Logo-alta-s-fundo.png';

export function Logo() {
    return (
        <div className="w-full px-4 flex items-center justify-center flex-col gap-2">
            <div className="w-full md:w-[32%] h-40 md:h-35 relative">
                <Image
                    src={logoImg}
                    alt="Imagem da logo"
                    quality={75}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    draggable="false"
                />
            </div>

            <LocalAtendimento />
        </div>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}