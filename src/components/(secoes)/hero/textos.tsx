export function TextosHero() {
    return (
        <div className="w-full px-4">
            <div className="w-full text-2xl mx-auto md:max-w-3/5 text-left flex items-center justify-center flex-col gap-6">
                <div className="w-full md:self-start md:text-3xl font-serif">
                    <h1 data-aos="fade-down" data-aos-delay={100}>MAIS QUE UMA LIMPEZA</h1>
                    <h1 className="text-azul-escuro" data-aos="fade-down" data-aos-delay={400}>UM PROTOCOLO DE SAÚDE</h1>
                    <h1 data-aos="fade-down" data-aos-delay={800}>PARA O SEU LAR</h1>
                </div>

                <div className="w-full md:self-end md:max-w-3/4 md:text-4xl" data-aos="fade-left" data-aos-delay={1200}>
                    <p className="text-xl font-normal">
                        Somos especialistas em higienização de
                        estofados, eliminando sujeira com tecnologia
                        de extração profunda e secagem rápida, sem
                        bagunça e com máxima eficiência.
                    </p>
                </div>
            </div>
        </div>
    )
}