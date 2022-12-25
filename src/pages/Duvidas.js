import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { useNavigate } from 'react-router-dom'
import MenuOpcoes from '../components/MenuOpcoes'
import { salvarDuvidas } from '../services/BancoService'

export default function Duvidas(props) {
    const navigate = useNavigate("/home");

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [duvida, setDuvida] = useState("")

    const limpar = () => {
        setNome("")
        setTelefone("")
        setDuvida("")
    }

    const salvar = async () => {


        const dados = {
            nome: nome,
            telefone: telefone,
            duvida: duvida
        }

        try {
            await salvarDuvidas(dados)
            navigate('/home')

        } catch (error) {
            alert(error)
        }


    }

    return (
        <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>

                    <MenuOpcoes />
                    <div className='corpo'>
                        <Grid container style={{ padding: 10 }} spacing={1}>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Nome"
                                    variant="outlined"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Telefone"
                                    variant="outlined"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Dúvida"
                                    variant="outlined"
                                    value={duvida}
                                    onChange={(e) => setDuvida(e.target.value)}

                                />
                            </Grid>
                      
                            <Grid item md={12} xs={12} sm={12}>
                                <Button
                                    variant="contained"
                                    style={{ marginRight: 10 }}
                                    onClick={salvar}
                                >Enviar</Button>
                                <Button variant="outlined" onClick={limpar}>Cancelar</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>

    )
}