import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(128, 128, 128, 0.07)",   // Cor de fundo das páginas (claro)
        contentBackground: "rgb(255, 255, 255)",   // Cor de fundo dos conteúdos (escuro)
        contentBackGroundBlue: "rgb(0, 155, 196)", // Branco para conteúdo


        textWhite: {
          100: "rgb(255, 255, 255)", // Branco para texto
        },
        textYellow: {
          500: "rgb(254, 205, 60)", // Amarelo suave para texto
          700: "rgb(204, 153, 25)", // Amarelo mais escuro para um contraste mais forte
        },
        textDarkBlue: {
          100: "rgb(26, 32, 44)", // Azul escuro para texto
        },


        buttonYellow: {
          500: "rgb(254, 205, 60)", // Amarelo para botões
        },
        buttonBlue: {
          500: "rgb(0, 155, 196)", // Azul para botões
        },
        detailPink: {
          300: "rgb(219, 112, 147)", // Rosa suave para detalhes
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
