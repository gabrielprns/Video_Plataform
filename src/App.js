import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Box } from '@mui/material';
//Principal container de agrupamento onde ficaram localizados os itens do banner 

import {NavBar, Feed, VideoDetail, SearchFeed, ChannelDetail } from './pages';
// import simplificado feito a partir do index de pages 


function App() {
  return (
    //rotas 
    <Router>
      <Box sx={{bgcolor: "#000"}}>
        <NavBar/> /*Aqui estarão localizados os itens de navegação como campo de pesquisa e icone para acessar a página inicial */
        <Routes> 
          <Route path="/" exact element={<Feed/>}></Route>
          <Route path="/video/:id" element={<VideoDetail/>}></Route>
          <Route path="/channel/:id" element={<ChannelDetail/>}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
          
        </Routes>
      </Box>
    </Router>

    
  );
}

export default App;
