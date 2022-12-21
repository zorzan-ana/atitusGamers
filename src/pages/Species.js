import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Cabecalho from '../components/Cabecalho'
import MenuOpcoes from '../components/MenuOpcoes'
import Rodape from '../components/Rodape'

export default function Species(){
  const [ species, setSpecies ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getSpecies = () => {
        axios.get(`https://swapi.dev/api/species/`)
        .then(res => {
            console.log(res.data)
            setSpecies(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getSpecies()
    }, [])


    return (
        <>
        <Cabecalho title="" message=""/>
        <MenuOpcoes/>
        {msg}
        {species.map((item, chave) =>
            <div className='species'key={chave}>
                {item.name}
            </div>
            )}
            <Rodape/>
       </>
    )
}