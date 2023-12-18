import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={()=>{}}
    sx={{
      borderRadius:20,
      width:400,
      border:"1px solid #e3e3e3",
      pl:2,
      boxShadow:"none",
      justifyContent:"space-between",
      mr:{sm:5}
    }}>
      
      <input 
      className='search-bar'
      placeholder='Search...'
      value=""
      onChange={()=>{}} />

      <IconButton type='submit' sx={{ p: '10px', color: 'blue' }} aria-label='search'>
        <Search />
      </IconButton>
    </Paper>
  )
}
/*Paper se trata de um componente comum para utilização de formulários */

/* IconButton se trata de um componente responsável por armazenar
icones em um componente botão, como exemplo adicionamos o icone de pesquisa */

export default SearchBar
