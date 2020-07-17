import React from 'react';

import { CrewPerson } from './CrewPerson';

const CrewPersons = ({ crew }) => {
    return (

        crew.slice(0, 5).map(cre => (
            <CrewPerson
                name={cre.name}
                type={cre.type}
            />
        ))

    )
}

export { CrewPersons }