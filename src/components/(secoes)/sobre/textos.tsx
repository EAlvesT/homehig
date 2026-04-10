export function Textos() {
    function calculaTempoExperiencia() {
        const mesInicioExperiencia = 2;
        const anoInicioExperiencia = 2020;

        const dataAtual = new Date();

        let anos = dataAtual.getFullYear() - anoInicioExperiencia;

        if (dataAtual.getMonth() <= mesInicioExperiencia) {
            anos--;
        }

        return anos;
    }

    function calculaIdade() {
        const dataNascimento = new Date(1998, 2, 5); // 5 de março de 1998
        const dataAtual = new Date();

        let anos = dataAtual.getFullYear() - dataNascimento.getFullYear();

        const mesAtual = dataAtual.getMonth();
        const diaAtual = dataAtual.getDate();

        const mesNascimento = dataNascimento.getMonth();
        const diaNascimento = dataNascimento.getDate();

        if (
            mesAtual < mesNascimento ||
            (mesAtual === mesNascimento && diaAtual < diaNascimento)
        ) {
            anos--;
        }

        return anos;
    }

    const textos = [
        {
            id: 1, frase: `Por trás da nossa marca, existe um casal apaixonado por transformar ambientes. Com ${calculaIdade()} anos e muita vontade de fazer diferente, decidimos tirar um sonho do papel no ano passado.`
        },
        {
            id: 2, frase: "Eu Robson, trago a bagagem técnica na higienização profissional desde 2020, e juntos, criamos um padrão de atendimento exclusivo para tecidos de alto padrão."
        },
        {
            id: 3, frase: "Sabe qual é o nosso diferencial? A gente não entrega apenas um serviço técnico. A gente entrega o cuidado que dedicamos à nossa própria casa. É sobre segurança, confiança e o brilho nos olhos de ver tudo novo de novo."
        },
    ]

    return (
        <div className="w-9/10 border border-[#0D1520] md:max-w-3/5 h-full py-15 px-4 md:px-17 bg-[#0D1520] text-left flex items-start justify-center flex-col gap-25">
            <div>
                <h2 className="text-azul-escuro font-serif text-4xl">+{calculaTempoExperiencia()} ANOS</h2>
                <span className="text-lg">De Experiência</span>
            </div>

            <div className="flex items-start justify-center flex-col gap-2">
                <h2 className="text-azul-escuro font-serif text-2xl">QUEM SOMOS</h2>
                <div className="flex items-center justify-center flex-col gap-6">
                    {textos.map(texto => (
                        <p
                            key={texto.id}
                            className="text-lg"
                            data-aos="fade-up"
                        >
                            {texto.frase}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}