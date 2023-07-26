import { type IconProps } from "@/interfaces/icon";

export const IconAlertSuccess = (props: IconProps) => (
  <svg
    width={`${props?.size ?? 1.2}rem`}
    height={`${props?.size ?? 1.2}rem`}
    fill="currentColor"
    style={{
      alignSelf: "flex-start",
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88Z" />
  </svg>
);
