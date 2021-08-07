import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Loading } from './components/loading/index';
import { Results } from './components/results/index';
import { Search } from './components/search/index';
import { AppContext } from './components/AppContext'
import './index.css';



export function Main() {

 const { data, setData, search, setSearch, loading, setLoading, isError, setIsError, autocomplete, setAutocomplete, render, setRender, isSearching,setIsSearching} = React.useContext(AppContext);

    

//la APi
useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        setIsError(false)
        try {
            const apiData = await axios(
                'https://api.giphy.com/v1/gifs/search',
                {
                    params: {
                        api_key: "eBohsmBl5oy9QutMrkK68dhSm4tuD7US",
                        limit: '15',
                        q: search,
                    },
                }
            )
            setData(apiData.data.data)
        } catch (err) {
            setIsError(true)
            console.log(err)
            console.log(isError)
        }
        setLoading(false)
        setIsSearching(false)
        setAutocomplete(false)
    }
    fetchData()
}, [isSearching])

//loading y el map de los gifs 




const renderError = () => {
    if(isError) {
        return (
            <div> unable to get gifs, error </div>
        )
    }
}
//manejar search

console.log(search)
console.log(isSearching, 'searching')


 return (
<div>
<Search />
<Results />


</div>
    );
}