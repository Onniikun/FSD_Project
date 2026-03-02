import { Routes, Route } from 'react-router-dom'

import './App.css'
import { Layout } from './components/common/layout/Layout';
import Landing from './components/pages/Landing';
import SongReviews from './components/pages/SongReviews';
import DiscoverSongs from './components/pages/DiscoverSongs';
import SongListsPage from './components/pages/SongListsPage';

function App() {
  return (
    <Routes>  
      <Route path="/" element={<Layout />}>

          <Route 
            index 
            element={<Landing />}
          /> 

          <Route 
            path="/songs" 
            element={<DiscoverSongs />} 
          /> 
          <Route 
            path="/songs/:id" 
            element={<DiscoverSongs />}
          />

          <Route 
            path="/lists" 
            element={<SongListsPage />} 
          /> 

          {/* all paths starting with /reviews */}
          <Route 
            path="/reviews" 
            element={<SongReviews />} 
          />
      </Route>
    </Routes>
  );
}

export default App
