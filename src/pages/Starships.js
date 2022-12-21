import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Cabecalho from '../components/Cabecalho'
import MenuOpcoes from '../components/MenuOpcoes'
import Rodape from '../components/Rodape'



export default function Starships(){
  const [ starships, setStarships ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getStarships = () => {
        axios.get(`https://swapi.dev/api/starships/`)
        .then(res => {
            console.log(res.data)
            setStarships(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getStarships()
    }, [])


    return (
        <>
        <Cabecalho title="" message=""/>
        <MenuOpcoes/>
        {msg}
        {starships.map((item, chave) =>
            <div className='starships' key={chave}>
                {item.name}
            </div>
            )}
            <Rodape/>
       </>
    )
}
