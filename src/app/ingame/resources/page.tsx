import { BoxCards } from "@/components";
import React from "react";

const cards = [
    {
        id: "1",
        name: "mina de metales",
        picture: "",
        level: 0,
        active: true,
    },
    {
        id: "2",
        name: "mina de cristal",
        picture: "",
        level: 0,
        active: true,
    },
    {
        id: "3",
        name: "mina de deuterio",
        picture: "",
        level: 0,
        active: true,
    },
];

const ResourcesPage = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className="flex h-56 w-96 bg-sky-400 text-slate-800">imagen</div>
            <BoxCards cards={cards} />
        </div>
    );
};

export default ResourcesPage;
