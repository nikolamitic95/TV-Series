import React from 'react';

import { Person } from './Person';

const Persons = ({ cast }) => {
    return (

        cast.slice(0, 5).map(cas => (
            <Person
                key={cas.id}
                name={cas.name}
            />
        ))

    )
}

export { Persons }