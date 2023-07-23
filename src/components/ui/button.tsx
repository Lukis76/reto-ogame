import { type ButtonHTMLAttributes, type FC } from "react";
import { LoaderCircle } from "./loaderCircle";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children?: React.ReactNode | string;
  className?: string;
  size?: number;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={`hover:bg-zinc-800" inline-flex items-center justify-center rounded-md bg-zinc-900 px-8 py-2 text-sm font-bold text-zinc-200  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full ${className}`}
      disabled={isLoading}
      {...props}
    >
      {!!isLoading && (
        <LoaderCircle size={size} className="mr-2 animate-spin" />
      )}
      {children}
    </button>
  );
};
