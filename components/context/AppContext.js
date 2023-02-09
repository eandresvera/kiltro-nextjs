import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    let hello = 'world';

    return (
        <AppContext.Provider value={{hello}}>{children}</AppContext.Provider>
    )
}