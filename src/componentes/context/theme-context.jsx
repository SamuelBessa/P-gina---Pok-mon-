import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#FFF7FC'
    },
    dark: {
        color: '#ffffff',
        background: '#5f5a5a'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}