
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Components/header/Header';
import Home from './pages/home/Home';
import Movielist from './Components/movieList/Movielist';
import MovieDetail from './pages/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<h1><Home/></h1>}></Route>
          <Route path='movie/:id' element={<MovieDetail/>}></Route>
          <Route path='movies/:type' element={<Movielist/>}></Route>
          <Route path='/*' element={<h1>page error</h1>}></Route>
        </Routes>

     
    </Router>
    </div>
  );
}

export default App;
