import React from 'react';

import { Aka } from './Aka';

const Akas = ({ akas }) => {
    return (

        akas.slice(0, 5).map(aka => (
            <Aka
                name={aka.name}
                country={aka.country}
            />
        ))
    )
}

export { Akas }