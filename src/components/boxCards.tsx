import { BoxCardsProps } from "@/interfaces/cardTech";
import React, { FC } from "react";
import { CardTecnologi } from "./cardTecnologi";

export const BoxCards: FC<BoxCardsProps> = ({ cards }) => {
    return (
        <section className="flex w-full flex-row items-center justify-center px-4 py-8">
            <ul className="grid w-full grid-cols-6">
                {cards.map((card) => {
                    return <CardTecnologi key={card.id} card={card} />;
                })}
            </ul>
        </section>
    );
};
