import Image, { StaticImageData } from "next/image";

interface ServicoCardProps {
    label: string;
    imgPath: string | StaticImageData;
}

export function ServicoCard({ imgPath, label }: ServicoCardProps) {
    return (
        <div
            className="py-6 bg-[#041326] border border-[#323435] rounded-lg"
        >
            <figure
                className="w-40 h-40 md:w-48 md:h-44 lg:w-48 lg:h-48 relative  overflow-hidden"
                data-aos="flip-up"
            >
                <Image
                    src={imgPath}
                    alt="Imagem do serviço para sofá"
                    fill
                    priority
                    className="object-cover"
                    sizes="200px"
                />
                <figcaption className="absolute bottom-1 left-1 bg-black/30 text-white px-3">{label}</figcaption>
            </figure>
        </div>
    )
}