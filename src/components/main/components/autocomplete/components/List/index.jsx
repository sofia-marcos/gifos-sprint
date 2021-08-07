import { AppContext } from '../../../AppContext';
import React, {useEffect, useState} from 'react';


export function List(props) {

const { data, setData, search, setSearch, loading, setLoading, isError, setIsError, autocomplete, setAutocomplete, render, setRender,  isSearching, setIsSearching} = React.useContext(AppContext);

    if (props.tag) {
        return (
        <p  onClick={() => setSearch(props.tag)} >
        {props.tag}
        </p>
            )
        } else {
            return (
                <p>
                    {props.error}
                </p>
            )
        }
    }


