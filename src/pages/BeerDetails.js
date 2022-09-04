import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';

function BeerDetails({beers}) {

    const { id } = useParams();

    const [beer, setBeer] = useState({});

    useEffect(() => { 
        const foundBeer = beers.find(beer => beer._id === id);
        setBeer(foundBeer);
    }, [id])

    return (
        <div className='Page'>
            <Header />
            <img src={beer.image_url} alt='beerImg'/>
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p><strong>Contributed by: </strong> {beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails