import React, { useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import MenuOpcoes from '../components/MenuOpcoes'
import Rodape from '../components/Rodape'
import fotoAna from '../assets/images/ana_zorzan.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material'



export default function Sobre(){
  return(
    <>
      <Cabecalho/>
      <MenuOpcoes/>
   
      
        <h1 className='dev'>Ana Gabriela Zorzan</h1>
        <img className='foto' src={fotoAna}/>

        <div className='icons'>
          <IconButton>
            <a href="https://github.com/zorzan-ana">    
            <GitHubIcon sx={{ fontSize: 35 }}/>
            </a>
          </IconButton>

          <IconButton>
            <a href="https://www.linkedin.com/in/ana-gabriela-zorzan/">    
            <LinkedInIcon sx={{ fontSize: 35 }}/>
            </a>
          </IconButton>

          <IconButton>
            <a href="https://instagram.com/zorzan_anna">    
            <InstagramIcon sx={{ fontSize: 30  }}/>
            </a>
          </IconButton>
        </div>
      <Rodape/>
    </>
  )
}
