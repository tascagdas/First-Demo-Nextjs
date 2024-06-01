import { useState } from "react"

const useDarkMode = (defaultTheme = 'dark') => {
    const [theme, setTheme] = useState(defaultTheme)
    function setAndSaveTheme(theme) {
        setTheme(theme)
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
    }
    function toggleTheme() {
        setAndSaveTheme(theme == 'dark' ? 'light' : 'dark')
    }


    return {theme, toggleTheme}
}

export default useDarkMode