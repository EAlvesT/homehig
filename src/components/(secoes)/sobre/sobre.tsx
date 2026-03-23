import { CenterContent } from "../../center-content";
import { FotoSobre } from "./foto";
import { Textos } from "./textos";

export function Sobre() {
    return (
        <section className="w-full bg-geral text-padrao overflow-hidden bg-[url('/canto.jpg')] bg-cover bg-center">
            <CenterContent>
                <div className="w-full flex items-center justify-center flex-col md:flex-row gap-2">

                    <Textos />

                    <FotoSobre />
                </div>
            </CenterContent>
        </section>
    )
}