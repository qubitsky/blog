import { toTheme } from "@theme-ui/typography";
import merge from "deepmerge";

const typoTheme = toTheme({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ["Josefin Sans", "Noto Sans SC", "sans-serif"],
  bodyFontFamily: ["Alegreya", "Songti SC", "serif"],
});

export const { typography } = typoTheme;

export default merge(typoTheme, {
  colors: {
    background: "#fff",
    text: "#333",
    primary: "#7397ab",
    secondary: "#a29b7c",
    muted: "#d1d9e0",
  },
  fonts: {
    monospace: "Consolas, Monaco, monospace",
  },
  styles: {
    a: {
      color: "primary",
    },
    pre: {
      overflow: "auto",
      code: {
        fontFamily: "monospace",
      },
    },
  },
  sizes: {
    container: 768,
  },
  text: {
    heading: {
      a: {
        color: "text",
        textDecoration: "none",

        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
});
