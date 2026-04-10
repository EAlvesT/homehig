<<<<<<< HEAD
import Image, { StaticImageData } from "next/image";

interface ServicoCardProps {
    label: string;
    imgPath: string | StaticImageData;
}

export function ServicoCard({ imgPath, label }: ServicoCardProps) {
    return (
        <div
            className="bg-cards-fundo border border-cards-borders rounded-xl aspect-square flex items-center justify-center"
            data-card-animation
        >
            <figure
                className="w-44 h-30 md:w-48 lg:w-52 lg:h-34 relative overflow-hidden"
            >
                <Image
                    src={imgPath}
                    alt="Imagem do serviço para sofá"
                    fill
                    className="object-cover"
                    sizes="200px"
                    draggable={false}
                />
                <figcaption className="absolute bottom-1 left-1 bg-black/30 text-padrao px-3">{label}</figcaption>
            </figure>
        </div>
    )
=======
import Image, { StaticImageData } from "next/image";

interface ServicoCardProps {
    label: string;
    imgPath: string | StaticImageData;
}

export function ServicoCard({ imgPath, label }: ServicoCardProps) {
    return (
        <div
            className="bg-cards-fundo border border-cards-borders rounded-xl aspect-square flex items-center justify-center"
            data-card-animation
        >
            <figure
                className="w-44 h-30 md:w-48 lg:w-52 lg:h-34 relative overflow-hidden"
            >
                <Image
                    src={imgPath}
                    alt="Imagem do serviço para sofá"
                    fill
                    className="object-cover"
                    sizes="200px"
                    draggable={false}
                />
                <figcaption className="absolute bottom-1 left-1 bg-black/30 text-padrao px-3">{label}</figcaption>
            </figure>
        </div>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}