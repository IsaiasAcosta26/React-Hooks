import React from 'react'

export const Search = ({search, searchInput, handelSeach}) => {
    return(
    <>
    <input type={Text} placeholder='Buscar un personaje' value={search} ref={searchInput} onChange={handelSeach}/>
    </>
    )
}