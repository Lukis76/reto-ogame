export interface CardTech {
    id: string;
    picture: string;
    name: string;
    level: number;
    active: boolean;
}

export interface CardTecnologiProps {
    card: CardTech;
}

export interface BoxCardsProps {
    cards: CardTech[];
}
