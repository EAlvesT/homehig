<<<<<<< HEAD
interface CardPassosProps {
    numero: string;
    titulo: string;
    texto: string;
};

export function CardPassos({ numero, texto, titulo }: CardPassosProps) {
    return (
        <figure
            className="max-w-77 px-6 pb-10 md:pb-0 pt-12 md:pt-0 md:min-h-75 border border-cards-borders bg-cards-fundo flex items-start justify-center flex-col gap-4 md:gap-8 rounded-4xl relative"
            data-card-passos
        >
            <figcaption className="text-2xl md:text-3xl font-bold">{titulo}</figcaption>

            <p className="text-lg md:text-2xl font-thin">{texto}</p>

            <span className="absolute -top-11 md:-top-20 left-8 text-8xl md:text-9xl font-serif text-blue-800/50 pointer-events-none">{numero}</span>
        </figure>
    )
=======
interface CardPassosProps {
    numero: string;
    titulo: string;
    texto: string;
};

export function CardPassos({ numero, texto, titulo }: CardPassosProps) {
    return (
        <figure
            className="max-w-77 px-6 pb-10 md:pb-0 pt-12 md:pt-0 md:min-h-75 border border-cards-borders bg-cards-fundo flex items-start justify-center flex-col gap-4 md:gap-8 rounded-4xl relative"
            data-card-passos
        >
            <figcaption className="text-2xl md:text-3xl font-bold">{titulo}</figcaption>

            <p className="text-lg md:text-2xl font-thin">{texto}</p>

            <span className="absolute -top-11 md:-top-20 left-8 text-8xl md:text-9xl font-serif text-blue-800/50 pointer-events-none">{numero}</span>
        </figure>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}