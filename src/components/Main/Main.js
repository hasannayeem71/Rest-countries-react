import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Main.css';

const Main = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>response.json())
        .then(data=>setCountries(data));
    },[]);

    return (
        <div className='country-container'>
          {
              countries.map(country=><Country country={country} key={country.name}></Country>)
          }
        </div>
    );
};


export default Main;