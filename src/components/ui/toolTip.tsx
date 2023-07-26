import React, { FC } from "react";

interface ToolTipProps {
  text?: string;
  className?: string;
  children: React.ReactNode;
}

export const ToolTip: FC<ToolTipProps> = ({ text, className, children }) => {
  return (
    <span
      data-tooltip={text && text?.length > 0 ? text : "Text default tooltip"}
      className={`relative w-fit bg-red-900 text-sm duration-300 before:absolute before:bottom-full before:left-1/2 before:z-50 before:hidden before:max-w-2xl before:-translate-y-1/2 before:whitespace-nowrap before:rounded-lg before:bg-blue-800 before:px-2 before:py-1 before:text-white before:opacity-0 before:transition-opacity before:content-[attr(data-tooltip)] before:hover:block before:hover:opacity-100 ${className}`}
    >
      {children}
    </span>
  );
};
