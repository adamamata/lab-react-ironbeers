import React from 'react';
import Header from '../components/Header';

function Beers({beers}) {
  return (
    <div className='Beers'>
        <Header/>
        <h1>All Beers</h1>
        {beers.map(beer => {
            return (
                <div>
                    <img className='beerImg' src={beer.image_url} alt='beerImg'/>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>{beer.description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Beers