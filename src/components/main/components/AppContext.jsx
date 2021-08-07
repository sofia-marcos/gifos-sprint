import { useState, createContext } from "react";

export const AppContext = createContext()


export const AppProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false); 
    const [ data, setData] = useState([])
    const [ search, setSearch] = useState ("")
    const [isSearching, setIsSearching] = useState(false)
    const [autocomplete, setAutocomplete] = useState(false);
   
    //const [render, setRender] = useState(false);
    

    return (
        <AppContext.Provider value ={{data, setData, search, setSearch, loading, setLoading, isError, setIsError, autocomplete, setAutocomplete,  isSearching, setIsSearching}}>
            {children}
        </AppContext.Provider>
    )
}