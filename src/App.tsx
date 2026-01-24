import './App.css'
import Nav from './components/common/nav/Nav'
import SongList  from "./components/common/song-list/SongList"
import SongList2  from "./components/common/song-list/SongList2"

function App() {

  return (
    <>
      <Nav />
      <SongList />
      {/* <SongList /> */}
      <SongList2/>
    </>
  )
}

export default App
