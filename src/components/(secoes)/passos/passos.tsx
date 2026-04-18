import { CenterContent } from "../../center-content"
import { ContainerCardPassos } from "./containerCardPassos";

export interface PassosProps {
    id: number;
    numero: string;
    titulo: string;
    texto: string;
};

export function PassosSection() {
    const passos: PassosProps[] = [
        { id: 1, numero: "01", titulo: "Seu Nome", texto: "Nos diga como você se chama para que possamos te atender melhor." },
        { id: 2, numero: "02", titulo: "Seu Bairro", texto: "Informe seu bairro para verificarmos possibilidade de agenda." },
        { id: 3, numero: "03", titulo: "Foto do estofado", texto: "Envie uma foto do que precisa de tratamento para te passarmos o valor do investimento." },
    ];

    return (
        <section className="w-full min-h-screen pt-14 pb-22 text-white overflow-hidden
bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),linear-gradient(rgba(37,99,235,0.55),rgba(37,99,235,0.55)),url('/sofa-canto.jpg')]
bg-cover bg-center">
            <CenterContent>
                <div className="w-full mx-auto px-4 flex items-center justify-center flex-col gap-20">
                    <h1 className="text-4xl text-center mb-16">PASSO A PASSO PARA ORÇAMENTO</h1>

                    <ContainerCardPassos passos={passos} />
                </div>
            </CenterContent>
        </section>
    )
}