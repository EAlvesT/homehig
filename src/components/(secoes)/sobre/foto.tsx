import Image from "next/image";
import fotoSobre from '../../../../public/ipadmockup.png';

export function FotoSobre() {
    return (
        <div className="w-full h-full pt-4 flex items-center justify-center" data-aos="fade-left">
            <div className="w-full md:w-4/5 pt-4 aspect-4/5 relative">
                <Image
                    src={fotoSobre}
                    alt="Imagem da logo"
                    quality={75}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    draggable="false"
                />

                <div className="w-[80%] md:w-[80%] px-2 py-6 absolute bottom-10 md:bottom-13 left-10 md:left-13 bg-black/70 rounded-lg flex items-center justify-center text-center">
                    <div className="w-fit px-2 md:px-10 flex items-center justify-center flex-col">

                        <div className="w-full flex items-center justify-between text-xl">
                            <span>JU VIANA</span>
                            <span>ROBSON VILLA</span>
                        </div>

                        <div className="w-full text-lg md:text-xl">
                            <span className="text-azul-escuro whitespace-nowrap tracking-wide">ESPECIALISTAS EM HIGIENIZAÇÃO</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}