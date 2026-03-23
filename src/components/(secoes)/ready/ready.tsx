import { CenterContent } from "../../center-content";
import { ContainerCardReady } from "./containerCardReady";

export function ReadySection() {
    return (
        <section className="w-full min-h-screen bg-fundo-escolha text-white text-center">
            <CenterContent>

                <ContainerCardReady />

            </CenterContent>
        </section>
    )
}