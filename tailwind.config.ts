import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // "error":
        //   "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 2px rgba(243, 65, 65, 0.40), 0px 2px 5px 0px rgba(243, 65, 65, 0.08)",
      },
      "colors": {
        "dark-fg-error": "#ef4444",
        "dark-bg-error": "rgba(185,28,28,0.2)",
        "dark-fg-success": "#22c55e",
        "dark-bg-success": "rgba(21,128,61,0.2)",
        "dark-fg-warning": "#f59e0b",
        "dark-bg-warning": "rgba(180,83,9,0.2)",
        "dark-fg-info": "#0ea5e9",
        "dark-bg-info": "rgba(3,105,161,0.2)",

        "warning": ""
      },
    },
  },
  plugins: [],
} satisfies Config;
