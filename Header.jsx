import React, {useState, useContext} from 'react'
import TheContext from '../context/TheContext'

const Header = () => {
    const [darkState, setDarkState] = useState(false);

    const onClick = () => {
        setDarkState(!darkState);
    }

    const color = useContext(TheContext)

    return (
        <>
        <h1 style={{color}}>React Hooks</h1>
        <button type='buttom' onClick={onClick}> {darkState ? "Dark Mode" : "Lash Mode"} </button>
        <button type='buttom' onClick={() => setDarkState(!darkState)}> {darkState ? "Dark Mode" : "Lash Mode"} </button>
        </>
    );
}

export default Header