import { CenterContent } from "../../center-content";
import { ServicoCard } from "./servicoCard";
import imgSofa from '../../../../public/sofacard.jpg';

export function Servicos() {
    const servicos = [
        { id: 1, label: 'SOFÁ', imgPath: '' },
        { id: 2, label: 'POLTRONA', imgPath: '' },
        { id: 3, label: 'COLCHÃO', imgPath: '' },
        { id: 4, label: 'TAPETE', imgPath: '' },
        { id: 5, label: 'CADEIRAS', imgPath: '' },
        { id: 6, label: 'VEÍCULO', imgPath: '' },
    ];

    return (
        <section className="w-full py-16 bg-[#020B17] text-white overflow-hidden">
            <CenterContent>
                <div className="w-full flex items-center justify-center flex-col gap-10">

                    <h1 className="text-4xl text-azul-escuro underline font-bold">Nossos Serviços</h1>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-y-4">

                        {servicos.map(servico => (
                            <ServicoCard key={servico.id} imgPath={imgSofa} label={servico.label} />
                        ))}

                    </div>

                    {/* {servicos.map(servico => (

                        <ServicoCard key={servico.id} imgPath={servico.imgPath} label={servico.label} />

                    ))} */}
                </div>
            </CenterContent>
        </section>
    )
}