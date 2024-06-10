import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "bottom-right-green-gradient": "linear-gradient(204.38deg, rgba(16,185,129,0) 0.93%, rgba(16,185,129,0) 52.94%, rgba(16,185,129,0.42) 100%)",
        "bottom-right-orange-gradient": "linear-gradient(204.38deg, rgba(249, 115, 22,0) 0.93%, rgba(249, 115, 22,0) 52.94%, rgba(249, 115, 22,0.42) 100%)",
      }),
      screens: {
        navbar_margin: "1560px",
      },
      fontSize: {
        "2xs": [
          "0.75rem",
          {
            fontWeight: "400",
            lineHeight: "1rem",
          },
        ],
        xs: [
          "0.875rem",
          {
            fontWeight: "400",
            lineHeight: "1.125rem",
          },
        ],
        base: [
          "1rem",
          {
            fontWeight: "400",
          },
        ],
        lg: [
          "1.25rem",
          {
            fontWeight: "400",
          },
        ],
        xl: [
          "1.375rem",
          {
            fontWeight: "500",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            fontWeight: "700",
          },
        ],
        "3xl": [
          "2.5rem",
          {
            fontWeight: "700",
          },
        ],
        "4xl": [
          "3.437rem",
          {
            fontWeight: "700",
          },
        ],
      },
      colors: {
        alert: {
          success: "#00C247",
          info: "#004CE8",
          warning: "#FFE16A",
          error: "#FF3333",
          disabled: "#879AC1",
        },
        dark: {
          900: "#181A20",
          800: "#1D293B",
          700: "#35383F",
        },
        primary: {
          500: "#059669",
          400: "#10b981",
          300: "#6ee7b7",
          200: "#a7f3d0",
          100: "#d1fae5",
          50: "#ecfdf5",
        },
        secondary: {
          500: "#ea580c",
          400: "#f97316",
          300: "#fb923c",
          200: "#fed7aa",
          100: "#ffedd5",
          50: "#fff7ed",
        },
        gray: {
          900: "#61646B",
          800: "#84939F",
          700: "#AFB1B6",
          600: "#BBBBBB",
          500: "#C7C7C7",
          400: "#D9D9D9",
          300: "#EBEBEB",
          100: "#EFEFF0",
          50: "#F1F5F9",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
