import React from 'react';
import { Link, Navigate } from 'react-router-dom';

function DogInfo({ dog }) {
    if (!dog) return <Navigate to='/dogs' />

    return (
        <div>
            <div>
                <img src={dog.src} alt={dog.name} />
                <h1>{dog.name}</h1>
                <h3>{dog.age} years old</h3>
                <ul>
                    {dog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Return Home</Link>
            </div>
        </div>
    );
}

export default DogInfo;