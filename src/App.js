import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material';


import {NavBar, Feed, VideoDetail, SearchFeed, ChannelDetail } from './pages';



function App() {
  return (
    //rotas
    <Router>
      <Box sx={{bgcolor: "#000"}}>
        <NavBar/>
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
