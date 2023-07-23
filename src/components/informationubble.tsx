import { ReactNode, type FC } from "react";
import { z } from "zod";
import { IconIformationError } from "./icons/iconInfomationError";

const fieldEnum = z.enum(["error", "warning", "active", "success"]);

type InformationType = z.infer<typeof fieldEnum>;

interface InformationBubbleProps {
  visible?: boolean;
  type?: InformationType;
  children?: ReactNode | string;
  className?: string;
}

export const InformationBubble: FC<InformationBubbleProps> = ({
  visible = true,
  type = "error",
  children = "personalize this message",
  className,
}) => {
  return (
    <>
      {visible && (
        <div
          className={`flex flex-row items-center justify-center rounded-md bg-bg-${type} px-2 py-1 shadow-${type} ${className}`}
        >
          {!!(type === "error") && <IconIformationError className="left-0" />}
          {!!(type === "success") && <IconIformationError className="left-0" />}
          {!!(type === "warning") && <IconIformationError className="left-0" />}
          {!!(type === "active") && <IconIformationError className="left-0" />}

          <p className="w-full text-center leading-3">
            <small className={`px-2 py-1 leading-3 text-fg-${type}`}>
              {children}
            </small>
          </p>
          {/* <button>X</button> */}
        </div>
      )}
    </>
  );
};
