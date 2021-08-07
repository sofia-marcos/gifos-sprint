import { Loading } from '../loading/index';
import { AppContext } from '../AppContext'
import axios from 'axios';
import React, {useEffect, useState} from 'react';

export function Results() {

const { data, setData, search, setSearch, loading, setLoading, isError, setIsError, autocomplete, setAutocomplete, isSearching, setIsSearching} = React.useContext(AppContext);

//gifs
const renderGifs = data.map(gifs => {
    return (
<div className="gif">
<img src={gifs.images.fixed_height.url} key={gifs.id} />
</div>
)})

if (loading) {
    return (
        <div >
            <p >
                Resultados de la búsqueda
            </p>
            <div>
                <Loading/>
            </div>
        </div>
    )
} else {
    return (
        <div>
            <p>
                Resultados de la búsqueda
            </p>
            {data.length > 0 ? (
                <div>
                    {renderGifs}
                </div>
            ) : (
                <h3>
                    No se han encontrado resultados
                </h3>
            )}
        </div>
    )
}



       
    
}