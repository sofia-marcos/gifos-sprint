import { Loading } from '../loading/index';
import { AppContext } from '../AppContext'
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { List } from './components/List';

export function Autocomplete() {

const { data, setData, search, setSearch, loading, setLoading, isError, setIsError, autocomplete, setAutocomplete, render, setRender,  isSearching, setIsSearching} = React.useContext(AppContext);
const [autoData, setAutoData] = useState([])

//gifs
const suggestions =
autoData.length > 0 ? (
    autoData.map((object, index) => (
        <List key={index} tag={object.name} setSearch={setSearch} />
    ))
) : (
    <List error='No se han encontrado sugerencias de búsqueda' />
)


useEffect(() => {
if (search > 0) {
    setAutocomplete(false)
} else {
    setAutocomplete(true)
}
}, [search])

useEffect(() => {
const fetchData = async () => {
    try {
        const fetchedData = await axios(
            'https://api.giphy.com/v1/gifs/search/tags',
            {
                params: {
                    api_key: "eBohsmBl5oy9QutMrkK68dhSm4tuD7US",
                    limit: '4',
                    q: search,
                },
            }
        )
        setAutoData(fetchedData.data.data)
    } catch (err) {
        console.log(err)
    }
}
fetchData()
}, [search])

return (
<div
onClick={() => {
        setIsSearching(true)
        setAutocomplete(false)
    }}
>
    {suggestions}
</div>
)
}  
    
