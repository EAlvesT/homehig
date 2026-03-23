import { EscolhaSection } from "../components/(secoes)/escolha/escolha";
import { Footer } from "../components/(secoes)/footer/footer";
import { Hero } from "../components/(secoes)/hero/hero";
import { PassosSection } from "../components/(secoes)/passos/passos";
import { ReadySection } from "../components/(secoes)/ready/ready";
import { Servicos } from "../components/(secoes)/servicos/servicos";
import { Sobre } from "../components/(secoes)/sobre/sobre";
import { ApiDataProps } from "../types/types";

export default async function Home() {
  const api_key = process.env.COSMIC_API_READ_KEY;

  const baseApiUrl = `https://api.cosmicjs.com/v3/buckets/homehig-production/objects/69c163e6ec4fb6783710662b?pretty=true&read_key=${api_key}=1&props=slug,title,metadata,type`;

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