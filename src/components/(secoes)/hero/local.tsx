import Image from "next/image";
import local from "../../../../public/localizacao.png";

export function LocalAtendimento() {
    return (
        <div className="max-w-4/5 md:max-w-[26%] p-2 md:-ml-20 bg-azul-claro flex items-center justify-center rounded-lg self-start md:self-center gap-2" data-aos="flip-up">
            <div className="w-12 md:w-12 h-8 relative">
                <Image
                    src={local}
                    alt="Icone localização"
                    fill
                    quality={75}
                    draggable="false"
                />
            </div>

            <span className="text-start text-[0.9rem] text-texto-localizacao">ATENDIMENTO EM VOLTA REDONDA E REGIÃO</span>
        </div>
    )
}