import React from 'react';

import { Episode } from './Episode';

const Episodes = ({ episodes }) => {
    return (
        episodes.map(episode => (
            <Episode
                id={episode.id}
                name={episode.name}
                image={episode.image}
            />
        ))
    )
}

export { Episodes };