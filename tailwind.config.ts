import { Opacity } from "@mui/icons-material";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      bebas: "Bebas Neue",
      roboto: "Roboto",
    },
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        brand: {
          gray: "#edeff0",
          blue: "#0078d4",
          
        },
        
      },
      colors: {
        brand:{
          'brownish':'rgb(133 100 100)',
         'theme-blue':'rgb(151 205 229)',
         'white': 'rgb(255 255 255)',
         
        },
        pami: {
          orange: { default: "#eb6e1e", light: "rgb(235 110 30 / 4%)" },
          gray: "#EAEAEA",
        },
        "brand-blue": "#00a6f1",
      },
    },
  },
  plugins: [],
};
export default config;
