import { Hero } from "../components/(secoes)/hero/hero";
import { Servicos } from "../components/(secoes)/servicos/servicos";
import { Sobre } from "../components/(secoes)/sobre/sobre";

export default function Home() {
  return (
    <>
      <Hero />

      <Sobre />

      <Servicos />
    </>
  )
}