import React from 'react';

import { Aka } from './Aka';

const Akas = ({ akas }) => {
    return (
        <ul>
            {akas.map(aka => (
                <Aka
                    name={aka.name}
                    country={aka.country}
                />
            ))}
        </ul>
    )
}

export { Akas }