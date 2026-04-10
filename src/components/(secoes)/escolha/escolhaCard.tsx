<<<<<<< HEAD
import { CiClock1 } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { RiShieldCheckFill } from "react-icons/ri";

const iconMap = {
    CiClock1,
    FaMapMarkerAlt,
    BsStars,
    RiShieldCheckFill,
};

type IconName = keyof typeof iconMap;

interface CardEscolhaProps {
    titulo: string;
    texto: string;
    icon: IconName;
}

export function CardEscolha({ icon, texto, titulo }: CardEscolhaProps) {
    const Icon = iconMap[icon];

    return (
        <div
            className="h-full px-4 py-6 flex items-start justify-center flex-col gap-2 bg-cards-fundo border border-cards-borders rounded-2xl"
            data-card-escolha
        >
            <Icon size={34} color="#0320fc" />

            <h2 className="font-bold text-lg">{titulo}</h2>

            <p className="font-thin text-lg">{texto}</p>
        </div>
    )
=======
import { CiClock1 } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { RiShieldCheckFill } from "react-icons/ri";

const iconMap = {
    CiClock1,
    FaMapMarkerAlt,
    BsStars,
    RiShieldCheckFill,
};

type IconName = keyof typeof iconMap;

interface CardEscolhaProps {
    titulo: string;
    texto: string;
    icon: IconName;
}

export function CardEscolha({ icon, texto, titulo }: CardEscolhaProps) {
    const Icon = iconMap[icon];

    return (
        <div
            className="h-full px-4 py-6 flex items-start justify-center flex-col gap-2 bg-cards-fundo border border-cards-borders rounded-2xl"
            data-card-escolha
        >
            <Icon size={34} color="#0320fc" />

            <h2 className="font-bold text-lg">{titulo}</h2>

            <p className="font-thin text-lg">{texto}</p>
        </div>
    )
>>>>>>> 1a3b13d (fix-age-add-readme)
}