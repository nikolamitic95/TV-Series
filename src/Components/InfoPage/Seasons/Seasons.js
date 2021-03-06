import React from 'react';

import { Season } from './Season';

const Seasons = ({ seasons }) => {
    return (

        seasons.slice(0, 5).map(sea => (
            <Season
                key={sea.id}
                premiereDate={sea.premiereDate}
                endDate={sea.endDate}
            />
        ))
    )
}

export { Seasons }