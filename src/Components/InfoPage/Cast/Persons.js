import React from 'react';

import { Person } from './Person';

const Persons = ({ cast }) => {
    return (
        <ul>
            {cast.map(cas => (
                <Person
                    key={cas.id}
                    name={cas.name}
                />
            ))}
        </ul>
    )
}

export { Persons }