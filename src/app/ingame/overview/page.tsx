import { BoxCards } from "@/components";
import Image from "next/image";
import React from "react";

const cards = [
    {
        id: "1",
        name: "fabrica de robots",
        picture: "",
        level: 0,
        active: true,
    },
    {
        id: "2",
        name: "hangar",
        picture: "",
        level: 0,
        active: true,
    },
    {
        id: "3",
        name: "laboratorio de investigacion",
        picture: "",
        level: 0,
        active: true,
    },
];
const OverviewPage = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center bg-orange-400">
            <div className="relative flex w-full flex-col items-center justify-between">
                <Image
                    src={"/up-planet.jpg"}
                    width={700}
                    height={300}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    alt="imagen vision desde la atmosfera del planeta"
                />
                <p className="absolute top-[2%] w-full truncate pl-[22%] pr-[3%] text-[150%] font-bold leading-7">
                    vision general - planeta principal {/*  TODO: texto de forma dinamica dependiendo la page */}
                </p>
                {true && (
                    <div className=" absolute right-0 flex  h-full w-[50%] flex-col items-start justify-end px-4 pb-10 pt-8">
                        <div className="flex w-full flex-col items-start justify-center gap-6 rounded-md bg-blue-900 p-2">
                            <div>
                                <p>diametro: 65765</p>
                                <p>temperatura: 65765</p>
                                <p>posocion: 65765</p>
                                <p>puntos: 65765</p>
                                <p className="bg-orange-400">puntos de honor: 65765</p>
                            </div>
                            <div>
                                <p className="bg-orange-400">puntos de honor: 65765</p>
                            </div>
                        </div>
                    </div>
                )}
                {true && (
                    <p className="absolute bottom-[2%] w-full truncate pl-[22%] pr-[3%] text-[150%] font-bold leading-7">
                        vision general - planeta principal
                    </p>
                )}
            </div>
            <BoxCards cards={cards} />
        </div>
    );
};

export default OverviewPage;
