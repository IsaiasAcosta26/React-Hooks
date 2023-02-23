import React, {useState, useReducer, useMemo, useRef, useCallback} from 'react'
import {Search} from '../components/Search'
import {useCharacters} from '../hooks/useCharacters'

const initialState = {
    favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/'

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
    
        default:
            return state;
    }
}

const Character = () => {
    // const [character, setCharacter] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState("")
    const searchInput = useRef(null)

    // useEffect(() => {
    //     fetch("https://rickandmortyapi.com/api/character/")
    //     .then(result => result.json())
    //     .then(data => setCharacter(data.results))
    // }, [])

    const character = useCharacters(API)

    const handelClick = (favorite) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    // const filtederedUsers = character.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // })

    const filtederedUsers = useMemo(() => character.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
    }), [character, search])

    // const handelSeach = () => {
    //     setSearch(seactInput.current.value)
    // }

    const handelSeach = useCallback(() => {
        setSearch(searchInput.current.value)
    }, 
    [],
    )
    
    

    return (
        <>
        {favorites.favorites.map((favorite) => (
            <li key={favorite.id}>
                {favorite.name}
            </li>
        ))}

        <Search search={search} searchInput={searchInput} handelSeach={handelSeach} />

        {filtederedUsers.map(characters => (
            <div key={characters.id}>
            <img  src={characters.image} />
            <h2> {characters.name} </h2>
            <button type='button' onClick={() => handelClick(character)}>Agregar a Favorito</button>
            </div>
        ))}
        </>
    );
}

export default Character