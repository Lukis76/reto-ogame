import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface BtnLinkProps {
    children: ReactNode | string;
    href: string;
    className?: string;
}

export const BtnLink: FC<BtnLinkProps> = ({ href, className, children }) => {
    return (
        <Link
            href={href}
            className={`hover:bg-zinc-800" inline-flex w-full items-center justify-center rounded-md bg-zinc-900 px-8 py-2 text-sm font-bold  text-zinc-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900  ${className}`}
        >
            {children}
        </Link>
    );
};
