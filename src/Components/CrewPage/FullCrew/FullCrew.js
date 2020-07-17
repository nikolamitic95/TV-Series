import React from 'react';

import { CrewCard } from './CrewCard';

const FullCrew = ({ crew }) => {
    return (
        crew.map(cre => (
            <CrewCard
                name={cre.name}
                type={cre.type}
                image={cre.image}
            />
        ))
    )
}

export { FullCrew };