import React from 'react';

import { Season } from './Season';

const Seasons = ({ seasons }) => {
    return (
        <ul>
            {seasons.map(sea=>(
                <Season
                    key={sea.id}
                    premiereDate={sea.premiereDate}
                    endDate={sea.endDate}
                 />
            ))}
        </ul>
    )
}

export { Seasons }