import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    
    const [isLoading, setLoading]= useState(true)
    const [movies, setmovies]= useState([])
    const [isError, setIsError] = useState({show: 'false', msg: ''})

    const getmovies = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            if (data.Response === "True") {
                setmovies(data.Search)
                setLoading(false)
                
            }else{
                setIsError({
                    show: true,
                    msg: data.error
                })
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getmovies(API_URL)
    }, [])

    return <AppContext.Provider value={{isLoading,movies,isError}}>{children}</AppContext.Provider>

}

const GlobaleContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, GlobaleContext };