import React from 'react';

import { CastCard } from './CastCard';

const FullCast = ({ cast }) => {
    return (
        cast.map(cas => (
            <CastCard
                name={cas.name}
                character={cas.character}
                image={cas.image}
            />
        ))
    )
}

export { FullCast };