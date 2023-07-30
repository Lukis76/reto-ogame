import { type ButtonHTMLAttributes, type FC } from "react";

interface BtnUpLevelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const BtnUpLevel: FC<BtnUpLevelProps> = ({ className, children, ...props }) => {
    return (
        <button
            className={`after:triangle-level-up absolute left-0  top-0 h-6 w-8 rounded-ee-md rounded-ss-md bg-level-up-dark transition-colors duration-200 hover:bg-level-up-light ${className}`}
            {...props}
        ></button>
    );
};
