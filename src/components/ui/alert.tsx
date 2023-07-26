import {
  IconAlertError,
  IconAlertInfo,
  IconAlertSuccess,
  IconAlertWarning,
} from "@/components/icons";
import { ReactNode, type FC } from "react";
import { z } from "zod";

const fieldEnum = z.enum(["error", "warning", "info", "success"]);

type Variant = z.infer<typeof fieldEnum>;

interface AlertProps {
  hidden?: boolean;
  variant?: Variant;
  children?: ReactNode | string;
  className?: string;
}

export const Alert: FC<AlertProps> = ({
  hidden = true,
  variant = "error",
  children = "personalize this message",
  className,
}) => {
  return (
    <>
      {hidden && (
        <>
          {!!(variant === "error") && (
            <div
              className={`flex flex-row items-center justify-center rounded-md bg-dark-bg-error px-2 py-1 ${className}`}
            >
              <IconAlertError className="text-dark-fg-error" />
              <p className="w-full  px-1 text-center text-xs leading-3 text-dark-fg-error">
                {/* <small className="px-2 py-1 leading-3 text-dark-fg-error"> */}
                {children}
                {/* </small> */}
              </p>
            </div>
          )}
          {!!(variant === "success") && (
            <div
              className={`flex flex-row items-center justify-center rounded-md bg-dark-bg-success px-2 py-1 ${className}`}
            >
              <IconAlertSuccess className="text-dark-fg-success" />
              <p className="w-full text-center leading-3">
                <small className="text-dark-fg-seccess px-2 py-1 leading-3">
                  {children}
                </small>
              </p>
            </div>
          )}
          {!!(variant === "warning") && (
            <div
              className={`flex flex-row items-center justify-center rounded-md bg-dark-bg-warning px-2 py-1 ${className}`}
            >
              <IconAlertWarning className="text-dark-fg-warning" />
              <p className="w-full text-center leading-3">
                <small className="px-2 py-1 leading-3 text-dark-fg-warning">
                  {children}
                </small>
              </p>
            </div>
          )}
          {!!(variant === "info") && (
            <div
              className={`flex flex-row items-center justify-center rounded-md bg-dark-bg-info px-2 py-1 ${className}`}
            >
              <IconAlertInfo className="text-dark-fg-info" />
              <p className="w-full text-center leading-3">
                <small className="px-2 py-1 leading-3 text-dark-fg-info">
                  {children}
                </small>
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};
