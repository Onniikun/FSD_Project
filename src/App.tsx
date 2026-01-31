import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import { Layout } from './components/common/layout/Layout';
import Landing from './components/pages/Landing';
import SongReviews from './components/pages/SongReviews';
import DiscoverSongs from './components/pages/DiscoverSongs';
import SongLists from './components/pages/SongLists';

function App() {
  const [mood, setMood] = useState<string>("");

  return (
    <Routes>  
      <Route path="/" element={<Layout />}>

          <Route 
            index 
            element={<Landing mood={mood} setMood={setMood} />
            } 
          />

          <Route 
            path="/songs" 
            element={<DiscoverSongs />} 
          /> 

          <Route 
            path="/lists" 
            element={<SongLists />} 
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
