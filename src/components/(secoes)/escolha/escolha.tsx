import { CenterContent } from "../../center-content";
import { LogoEscolha } from "./logoEscolha";
import { ContainerEscolhaCards } from "./escolhaContainerCards";

type TypesIcons = "CiClock1" | "FaMapMarkerAlt" | "BsStars" | "RiShieldCheckFill";

export interface CardsDataProps {
    id: number;
    titulo: string;
    texto: string;
    icon: TypesIcons;
};

export function EscolhaSection() {
    const cardsData: CardsDataProps[] = [
        { id: 1, titulo: "Pontualidade", texto: "Respeitamos o Seu Tempo.", icon: "CiClock1" },
        { id: 2, titulo: "A Domicílio", texto: "Vamos até Você em toda região.", icon: "FaMapMarkerAlt" },
        { id: 3, titulo: "Remoção de Manchas", texto: "Técnicas Avançadas.", icon: "BsStars" },
        { id: 4, titulo: "Anti-Mal Odor", texto: "Tratamento contra mal cheiro.", icon: "RiShieldCheckFill" },
    ];

    return (
        <section className="w-full min-h-screen pt-4 md:pt-10 pb-6 text-padrao bg-black/50 bg-blend-darken bg-[url('/canto-sala.jpg')] bg-cover bg-center">
            <CenterContent>
                <div className="w-full md:w-3/4 px-4 mx-auto flex items-center justify-center flex-col gap-4 md:gap-10">
                    <h1 className="text-center font-bold text-[22px] md:text-5xl text-nowrap">PORQUE ESCOLHER A {<LogoEscolha />} ?
                    </h1>

                    <p className="font-thin text-2xl">Porque nós não enviamos terceiros. Somos nós mesmos, os donos, que cuidamos de tudo.
                        O nosso nome e o nosso sonho esta em cada sofá que limpamos.
                    </p>

                    <ContainerEscolhaCards cardsData={cardsData} />
                </div>
            </CenterContent>
        </section>
    )
};

