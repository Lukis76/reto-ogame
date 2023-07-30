import { FC, ReactNode } from "react";

interface WrapperToolTipProps {
    text: string;
    className?: string;
    children: ReactNode;
}

export const WrapperToolTip: FC<WrapperToolTipProps> = ({ text, className = "", children }) => {
    return (
        <span data-tooltip={text} className={`wrapper-tool-tip ${className}`}>
            {children}
        </span>
    );
};
