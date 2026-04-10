import Image from "next/image";
import { CenterContent } from "../../center-content";
import logoImg from "../../../../public/Logo-alta-s-fundo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ContactField } from "./contactField";
import { FooterProps } from "@/src/types/types";

export function Footer({ telefones }: FooterProps) {
    return (
        <footer className="w-full py-8 bg-fundo-footer text-padrao">
            <CenterContent>
                <div className="w-full flex items-stretch justify-center flex-col md:flex-row gap-12">
                    <div className="w-full px-4 flex items-center justify-center flex-col gap-4">
                        <div className="w-full h-39 md:h-50 relative">
                            <Image
                                src={logoImg}
                                alt="Logo da HOME"
                                fill
                                quality={75}
                                sizes="(max-width: 726px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>

                        <p className="text-left text-2xl font-thin max-w-4/5 self-start">Especialistas em alto padrão<br /> dedicados ao seu bem-estar.</p>
                    </div>

                    <div className="w-full flex md:items-start md:justify-center font-thin">
                        <div className="w-full p-4 text-left flex items-start justify-center flex-col gap-2">
                            <h4 className="mb-3 font-bold text-2xl md:text-3xl">Contato</h4>
                            <ContactField telefones={telefones} />
                            <div className="flex items-center justify-center gap-1">
                                <FaMapMarkerAlt size={18} color="#fff" />
                                <span className="text-lg md:text-xl">Volta Redonda/RJ</span>
                            </div>
                        </div>

                        <div className="w-full p-4 text-left flex items-start justify-center flex-col gap-2">
                            <h4 className="mb-3 font-bold text-2xl md:text-3xl">Horário</h4>
                            <span className="text-lg md:text-xl">Segunda a Sábado</span>
                            <span className="text-lg md:text-xl">8:00 às 21:00</span>
                        </div>
                    </div>
                </div>
            </CenterContent>
        </footer>
    )
}