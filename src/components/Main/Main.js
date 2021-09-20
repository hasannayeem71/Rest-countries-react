import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Footer from '../Footer/Footer';
import './Main.css';

const Main = () => {
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>response.json())
        .then(data=>setCountries(data));
    },[]);
        if (countries.length===0) {
            return(
                <div>
                    <p>Loding.....</p>
                </div>
            )
            
        }else{
            return (
                <div>
                    <div className='country-container'>
                         {
                           countries.map(country=><Country country={country} key={country.name}></Country>)
                         }
                       
                    </div>
                    <Footer></Footer>
                </div>
    )
  }
};


export default Main;