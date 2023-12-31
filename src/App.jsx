import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound'
import Categories from './Components/Categories';
import Videoplayer from './Components/Videoplayer';
import WatchMovie from './Components/WatchMovie';
function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/videoplay" element={<Videoplayer/>}/>
            <Route path="/watchmovie/:id" element={<WatchMovie/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
