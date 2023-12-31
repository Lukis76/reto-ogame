import { BtnLink } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen w-full flex-row items-center justify-center bg-[url(/ingame-background.jpg)] bg-cover">
            <div className="m-1 max-w-xs">
                <ul>
                    <li>
                        <BtnLink href="/ingame/overview">Overview</BtnLink>
                    </li>
                    <li>
                        <BtnLink href="/ingame/resources">Resources</BtnLink>
                    </li>
                    {/* <li> */}
                    {/*     <BtnLink>Lifestyle</BtnLink> */}
                    {/* </li> */}
                    <li>
                        <BtnLink href="/ingame/installations">Installations</BtnLink>
                    </li>
                    {/* <li> */}
                    {/*     <BtnLink>Market</BtnLink> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/*     <BtnLink>Investigation</BtnLink> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/*     <BtnLink>Defending</BtnLink> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/*     <BtnLink>Fleet</BtnLink> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/*     <BtnLink>Galaxy</BtnLink> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/*     <BtnLink>Empire</BtnLink> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/*     <BtnLink>Alliance</BtnLink> */}
                    {/* </li> */}
                </ul>
            </div>
            <section className="flex w-full max-w-4xl flex-col items-center justify-center">{children}</section>
            <div className="flex flex-col items-center justify-center">constenedor de planestas</div>
        </main>
    );
}
