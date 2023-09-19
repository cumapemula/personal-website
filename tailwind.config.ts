import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [
    // eslint-disable-next-line global-require
    require("daisyui"),
    plugin(({
      // eslint-disable-next-line no-unused-vars
      addBase, addComponents, addUtilities, theme,
    }) => {
      addUtilities({
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
      });
    }),
  ],
};
export default config;
