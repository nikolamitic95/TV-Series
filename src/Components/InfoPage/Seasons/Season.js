import React from 'react';

const Season = ({ premiereDate, endDate }) => {
    return (
        <li>{premiereDate} - {endDate}</li>
    )
}

export { Season }