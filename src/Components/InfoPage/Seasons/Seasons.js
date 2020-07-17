import React from 'react';

import { Season } from './Season';

const Seasons = ({ seasons }) => {
    return (

        seasons.slice(0, 5).map(sea => (
            <Season
                premiereDate={sea.premiereDate}
                endDate={sea.endDate}
            />
        ))

    )
}

export { Seasons }