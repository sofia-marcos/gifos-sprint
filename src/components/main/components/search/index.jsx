import { Loading } from '../loading/index';
import { Autocomplete } from '../autocomplete/index';
import { AppContext } from '../AppContext'
import axios from 'axios';
import React, {useEffect, useState} from 'react';


export function Search() {
 const { data, setData, search, setSearch, loading, setLoading, isError, setIsError, autocomplete, setAutocomplete, render, setRender, isSearching,setIsSearching} = React.useContext(AppContext);
   
 const handleSearch = (e) => {
    setSearch(e.target.value);
    
    

    


    
    }
    
 const inputSearch = (e) => {
	let keycode = e.keyCode
		if (keycode === 13 || e.wich === 13) {
			setIsSearching(true)
			if (search.length === 0) {
				alert('Por favor, ingrese algo antes de buscar')
			}
		}
	}
 const handleSubmit = (e) => {
   setSearch(e.target.value);
/*    if (search.length > 0) {
      setAutocomplete(true)
    } */
       setIsSearching(true)
       
       console.log('search', search)
       console.log('data', data)
       //isSearching
    }

    const check = () => {
		if (search.length === 0) {
			alert('Por favor, ingrese algo antes de buscar')
		}
	}
 
 return (
        <div className="Search">
           <h1> ¡Inspirate y busca los mejores GIFS! </h1>
           <img src="./img/ilustra_header.svg" />
         
		<div >
			<input
				placeholder='Busque los mejores GIFs'
				value={search}
				onChange={(e) => {
					setSearch(e.target.value)
				}}
				onKeyDown={inputSearch}
			/>
			<Autocomplete />
		<button

				onClick={() => {
					setIsSearching(true)
					check()
				}}
			>
				boton
			</button>
		</div>
      </div>
	
  
          
       
    )
}