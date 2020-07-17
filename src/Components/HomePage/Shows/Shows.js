import React from 'react';

import { Show } from './Show';

const Shows = ({ shows }) => {

    return (
        shows.sort((a, b) => a.rating > b.rating ? -1 : 1).map((show, i) => {
            if (i < 50) {
                return (
                    <Show
                        key={show.id}
                        name={show.name}
                        avatar={show.avatar}
                        id={show.id}
                    />
                )
            }
        })
    )
}

export { Shows };