import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goki_dark: "rgba(29, 29, 29, 1)",
        goki_dark_card: "rgba(38, 38, 38, 1)",
        goki_light: "rgba(250, 250, 250, 1)",
        "goki_dark-label-red": "#cf6155",
        primary: "#C42929",
        primary_red: "rgba(196, 41, 41, 1)",
        primary_red_dark: "rgba(196, 41, 41, 1)",
        primary_red_alt: "rgba(196, 41, 41, 0.1)",
        primary_dark: "rgba(25, 25, 25, 1)", // #191919
        secondary_yellow: "rgba(254, 210, 54, 1)",
        custom1: "rgba(25, 25, 25, 0.08)",
        custom2: "rgba(25, 25, 25, 0.14)",
        custom3: "rgba(25, 25, 25, 0.2)",
        custom4: "rgba(25, 25, 25, 0.1)",
        custom2_dark: "rgba(255, 255, 255, 0.08)",
        custom_gray: "rgba(25, 25, 25, 0.04)",
        custom_gray_faded: "rgba(25, 25, 25, 0.4)",
        custom_divider: "rgba(0, 0, 0, 0.16)",
        custom_divider2: "rgba(0, 0, 0, 0.14)",
        custom_divider3: "rgba(0, 0, 0, 0.56)",
        custom_divider4: "rgba(255, 255, 255, 0.14)",
        custom_divider5: "rgba(228, 228, 228, 1)",
        icon: "#191919",
        custom_bg_2: "rgba(236, 236, 236, 1)",
        positive: "rgba(38, 147, 36, 1)",
      },
      boxShadow: {
        custom_shadow_1: "0px 0px 16px rgba(0, 0, 0, 0.06)",
        custom_shadow_2: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        custom_shadow_3: "0px 0px 20px 0px rgba(0, 0, 0, 0.08)",
        custom_shadow_4: "0px 4px 10px 0px rgba(0, 0, 0, 0.04)",
        custom_shadow_5: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
        custom_shadow_6: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
        custom_inset_shadow: "inset 0px 0px 0px 2000px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        xl: "1440px",
      },
    },
    container: {
      padding: {
        // sm 640
        md: "2rem", // 768
        lg: "2.8rem", //1024
        xl: "4rem",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    typography,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
} satisfies Config;
