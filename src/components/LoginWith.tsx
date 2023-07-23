"use client";

import { useState, type FC } from "react";
import { Button } from "./ui/button";
// import { Button } from '@/components/ui/Button'
// import { useToast } from '@/hooks/use-toast'

interface LoginWithProps extends React.HTMLAttributes<HTMLDivElement> {
  provider: string;
  icon?: JSX.Element;
}

export const LoginWith: FC<LoginWithProps> = ({
  icon,
  provider,
  className,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const login = async () => {
    setIsLoading(true);

    try {
      // await signIn(provider);
    } catch (error) {
      // toast.error(`There was an error logging in with ${provider}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex justify-center items-center w-full ${className}`}>
      <Button
        isLoading={isLoading}
        className=" rounded-[0.2rem] bg-red-500"
        onClick={login}
        disabled={isLoading}
      >
        {!isLoading && icon}
        {provider.charAt(0).toUpperCase() + provider.slice(1)} 
      </Button>
    </div>
  );
};
