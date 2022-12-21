import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Cabecalho from '../components/Cabecalho'
import MenuOpcoes from '../components/MenuOpcoes'
import Rodape from '../components/Rodape'

export default function People(){
  const [ peoples, setPeoples ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getPeople = () => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
            console.log(res.data)
            setPeoples(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getPeople()
    }, [])


    return (
        <>
        <Cabecalho title="" message=""/>
        <MenuOpcoes/>
        {msg}
        {peoples.map((item, chave) =>
            <div className='people' key={chave}>
                {item.name}
            </div>
            )}
            <Rodape/>
       </>
    )
}