import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/Random-beer';
import NewBeer from './pages/New-beer';
import BeerDetails from './pages/BeerDetails';

function App() {

  const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';
  const [ beers, setBeers ] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then(response => setBeers(response.data)).catch(err => console.log(err));
  })


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/beers' element={<Beers beers={beers}/>}/> 
        <Route path='/random-beer' element={<RandomBeer/>}/> 
        <Route path='/new-beer' element={<NewBeer/>}/> 
        <Route path='/beers/:id' element={<BeerDetails beers={beers}/>}/>
      </Routes>
    </div>
  );
}

export default App;
