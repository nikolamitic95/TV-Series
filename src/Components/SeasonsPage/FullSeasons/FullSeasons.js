import React from 'react';

import { SeasonCard } from './SeasonCard';

const FullSeasons = ({ seasons }) => {
    return (
        seasons.map(season => (
            <SeasonCard
                key={season.id}
                id={season.id}
                premiereDate={season.premiereDate}
                endDate={season.endDate}
                image={season.image}
                episode={season.episode}
            />
        ))
    )
}

export { FullSeasons };