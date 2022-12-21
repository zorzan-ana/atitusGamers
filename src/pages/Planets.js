import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Cabecalho from '../components/Cabecalho'
import MenuOpcoes from '../components/MenuOpcoes'
import Rodape from '../components/Rodape'



export default function Planets(){
  const [ planets, setPlanets ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getPlanets = () => {
        axios.get(`https://swapi.dev/api/planets/`)
        .then(res => {
            console.log(res.data)
            setPlanets(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getPlanets()
    }, [])


    return (
        <>
        <Cabecalho title="" message=""/>
        <MenuOpcoes/>
        {msg}
        {planets.map((item, chave) =>
            <div className='planets' key={chave}>
                {item.name}
            </div>
            )}
            <Rodape/>
       </>
    )
}