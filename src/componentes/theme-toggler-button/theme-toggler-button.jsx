import { useContext } from "react"
import { ThemeContext, themes } from "../context/theme-context"
import { Button } from "../buttons/button"
import { Sun } from "lucide-react"

export const ThemeToggleerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                <Sun />
            </Button>
        </div>
    )
}