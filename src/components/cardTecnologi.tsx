import { CardTecnologiProps } from "@/interfaces/cardTech";
import { FC } from "react";
import { BtnUpLevel } from "./ui/btnUpLevel";
// import { ToolTip } from "./ui/toolTip";
import { WrapperToolTip } from "./ui/wrapperToolTip";

export const CardTecnologi: FC<CardTecnologiProps> = ({ card }) => {
    return (
        <WrapperToolTip text={card.name}>
            <li
                aria-label="hola lucas como esta ?"
                className="relative flex h-[8.5rem] w-[8.5rem] flex-col items-center justify-between rounded-md border border-transparent bg-blue-700  hover:border hover:border-red-900"
            >
                <BtnUpLevel />
                <p>{card.name}</p>
                <br />
                <div className="bg-clip-level  flex h-8 w-[95%] flex-row items-center justify-end self-end rounded-ee-md bg-purple-500">
                    <span className="px-2 py-1 text-lg font-normal">{card.level}</span>
                </div>
            </li>
        </WrapperToolTip>
    );
};
