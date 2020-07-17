import React from 'react';

import { CrewPerson } from './CrewPerson';

const CrewPersons = ({ crew }) => {
    return (
        <ul>
            {crew.map(cre => (
                <CrewPerson
                    key={cre.id}
                    name={cre.name}
                    type={cre.type}
                />
            ))}
        </ul>
    )
}

export { CrewPersons }