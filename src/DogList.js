import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
    return (
        <div className='DogList'>
            <div>
                <h1 className='text-center'>
                    Attention: Dogs Below.
                </h1>
            </div>
            <div className='row'>
                {dogs.map(dog => (
                    <div className='col-3 text-center' key={dog.name}>
                        <img src={dog.src} alt={dog.name} />
                        <h3>
                            <Link to={`${dog.name.toLowerCase()}`}>{dog.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;