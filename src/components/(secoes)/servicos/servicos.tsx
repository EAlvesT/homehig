<<<<<<< HEAD
import { ServicosProps } from "@/src/types/types";
import { CenterContent } from "../../center-content";
import { ContainerCardsServicos } from "./cardsContainer";

interface ServicosSectionProps {
    servicos: ServicosProps[];
}

export function Servicos({ servicos }: ServicosSectionProps) {
    return (
        <section className="w-full py-16 bg-fundo-servicos text-padrao overflow-hidden">
            <CenterContent>
                <div className="w-full flex items-center justify-center flex-col gap-10">

                    <h1 className="text-4xl mb-8 text-azul-escuro underline font-bold">Nossos Serviços</h1>

                    <ContainerCardsServicos servicos={servicos} />
                </div>
            </CenterContent>
        </section>
    )
=======
import { ServicosProps } from "@/src/types/types";
import { CenterContent } from "../../center-content";
import { ContainerCardsServicos } from "./cardsContainer";

interface ServicosSectionProps {
    servicos: ServicosProps[];
}

export function Servicos({ servicos }: ServicosSectionProps) {
    return (
        <section className="w-full py-16 bg-fundo-servicos text-padrao overflow-hidden">
            <CenterContent>
                <div className="w-full flex items-center justify-center flex-col gap-10">

                    <h1 className="text-4xl mb-8 text-azul-escuro underline font-bold">Nossos Serviços</h1>

                    <ContainerCardsServicos servicos={servicos} />
                </div>
            </CenterContent>
        </section>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}