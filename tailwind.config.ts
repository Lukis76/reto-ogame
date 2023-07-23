import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "error":
          "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 2px rgba(243, 65, 65, 0.40), 0px 2px 5px 0px rgba(243, 65, 65, 0.08)",
      },
      "colors": {
        "fg-error": "#b82525",
        "bg-error": "#d48181a8",
      },
    },
  },
  plugins: [],
} satisfies Config;
