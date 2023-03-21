import React, { useContext, useEffect, useState } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    
    const [isLoading, setLoading]= useState(true)
    const [movies, setmovies]= useState([])
    const [isError, setIsError] = useState({show: 'false', msg: ''})
    const [query, setQuery] = useState('titanic')

    const getmovies = async (url) => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            if (data.Response === "True") {
                setmovies(data.Search)
                setIsError({
                    show: false,
                    msg: ''
                })
                setLoading(false)
                
            }else{
                setIsError({
                    show: true,
                    msg: data.Error
                })
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
     let timerout =  setTimeout(() => {
         getmovies(`${API_URL}&s=${query}`)
        }, 2000);
        return () => clearTimeout(timerout)
        // eslint-disable-next-line
    },[query])

    return <AppContext.Provider value={{isLoading,movies,isError,query, setQuery}}>{children}</AppContext.Provider>

}

const GlobaleContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, GlobaleContext };