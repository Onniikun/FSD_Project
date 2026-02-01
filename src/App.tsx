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
      {/* The root path renders <Layout>. That component contains an <Outlet>
      which will render the elements of their child routes. */}  
      <Route path="/" element={<Layout />}>
          {/* 
            Renders the different pages in the Layout. 
            index: indicates route at the root of this path (/)
          */}
          <Route index element={
            <Landing />
            } 
          />

          <Route 
            path="/songs" 
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
