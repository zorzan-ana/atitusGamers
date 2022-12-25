import React, { useState, useLayoutEffect} from 'react'
import axios from 'axios'
import Cabecalho from '../components/Cabecalho'
import MenuOpcoes from '../components/MenuOpcoes'
import Rodape from '../components/Rodape'


export default function Films(){
    const [ films, setFilms ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getFilms = () => {
        axios.get(`https://swapi.dev/api/films/`)
        .then(res => {
            console.log(res.data.results)
            setFilms (res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getFilms()
    }, [])


    return (
        <>
        <Cabecalho title="" message=""/>
            <MenuOpcoes/>
            {msg}
            {films.map((item, chave) =>
            <div className='films' key={chave}>
                {item.title}
            </div>
            )}
        
            <Rodape/>
         
        </>
            

    )
}
