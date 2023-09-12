import { createContext } from "react";

export const themes = {
    light: {
        background: "white",
        color: "black"
    },
    dark: {
        background: "black",
        color: "white"
    }
};

const themeContext = createContext(themes.dark);

export default themeContext;