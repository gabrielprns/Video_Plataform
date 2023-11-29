import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Feed } from './pages/home';
import { Box } from '@mui/material';
import VideoDetail from './pages/VideoDetail';
import ChannelDetail from './pages/ChannelDetail';
import SearchFeed from './pages/SearchFeed';


function App() {
  return (
    //rotas
    <Router>
      <Box sx={{bgcolor: "#000"}}>
        <Routes> 
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/video/:id" element={<VideoDetail/>}></Route>
          <Route path="/channel/:id" element={<ChannelDetail/>}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
          
        </Routes>
      </Box>
    </Router>

    
  );
}

export default App;
