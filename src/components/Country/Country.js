import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country)
    const {name,flag,capital}= props.country;
    return (
        <div className="country">
           <h2>{name}</h2>
            <img src={flag} alt={name} />
            <p>Capital -&gt; {capital}</p>
        </div>
    );
};

export default Country;