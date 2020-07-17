import React from 'react';

const CrewPerson = ({ name, type }) => {
    return (
    <li>{type}: {name}</li>
    )
}

export { CrewPerson }