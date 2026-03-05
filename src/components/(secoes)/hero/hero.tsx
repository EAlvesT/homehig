import { CenterContent } from "../../center-content"
import { BotaoContato } from "../../contato"
import { Logo } from "../../logo"
import { TextosHero } from "./textos"

export function Hero() {
    return (
        <section className="w-full py-8 pb-15 bg-[#151313] text-white overflow-hidden fundoHero">
            <CenterContent>
                <div className="w-full flex items-center justify-center flex-col gap-12">
                    <Logo />

                    <TextosHero />

                    <BotaoContato icone="telefone" texto="SOLICITAR ORÇAMENTO GRÁTIS" />
                </div>
            </CenterContent>
        </section>
    )
}