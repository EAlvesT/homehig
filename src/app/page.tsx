import { EscolhaSection } from "../components/(secoes)/escolha/escolha";
import { Footer } from "../components/(secoes)/footer/footer";
import { Hero } from "../components/(secoes)/hero/hero";
import { PassosSection } from "../components/(secoes)/passos/passos";
import { ReadySection } from "../components/(secoes)/ready/ready";
import { Servicos } from "../components/(secoes)/servicos/servicos";
import { Sobre } from "../components/(secoes)/sobre/sobre";
import { ApiDataProps } from "../types/types";

export default async function Home() {
  const api_key = process.env.COSMIC_API_READ_KEY!;

  const baseApiUrl = `https://api.cosmicjs.com/v3/buckets/homehig-production-f2404c60-3b3d-11f1-a194-236056411684/objects/69e3a985e8787a5bd2e1c457?read_key=${api_key}&props=slug%2Ctitle%2Cmetadata%2Ctype&depth=1&limit=10&skip=0&sort=-order`;

  async function getDados(): Promise<ApiDataProps> {
    const dados = await fetch(baseApiUrl, { next: { revalidate: 300 } })
      .then((data) => data.json())
      .catch((data) => console.log(data)) as ApiDataProps;

    return dados;
  }

  const { object } = await getDados();

  const { metadata: { services: servicos } } = object;
  const { metadata: { telefone } } = object;
  const telefones = telefone.split("|");

  return (
    <>
      <Hero />

      <Sobre />

      <Servicos servicos={servicos} />

      <PassosSection />

      <EscolhaSection />

      <ReadySection />

      <Footer telefones={telefones} />
    </>
  )
}