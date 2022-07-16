import { createContext, useReducer } from 'react'
export const ThemeContext = createContext()

const darkMode = JSON.parse(localStorage.getItem('darkMode'))

const INITIAL_STATE = { darkMode: darkMode || false }

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            {
                const newMode = !state.darkMode
                localStorage.setItem('darkMode', newMode)
                return { darkMode: newMode }
            }
        default:
            return state
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>
    )
}