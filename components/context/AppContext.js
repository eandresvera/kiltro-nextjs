import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {

    const [lang, setLanguage] = useState('esp');
    const [homeData, sethomeData] = useState(null)

    const updateLang = ( propLang ) => {
        setLanguage( propLang )
    }
    
    const updateHomeData = ( data ) => {
        sethomeData( data )
    }

    return (
        <AppContext.Provider value={{lang, homeData, updateLang, updateHomeData}}>{children}</AppContext.Provider>
    )
}