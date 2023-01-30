import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DogList from './DogList';
import SelectDog from './SelectDog';

function Router({ dogs }) {
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<SelectDog dogs={dogs} />} />
            <Route path="/" element={<Navigate replace to="/dogs" />} />
        </Routes>
    );
}

export default Router;