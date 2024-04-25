import React from 'react';

function ActorDetail({ actor, onBack }) {
    return (
        <div>
            <h2>{actor.name}</h2>
            <p>Height: {actor.height}</p>
            <p>Mass: {actor.mass}</p>
            <p>Hair Color: {actor.hair_color}</p>
            <p>Skin Color: {actor.skin_color}</p>
            <p>Eye Color: {actor.eye_color}</p>
            <p>Birth Year: {actor.birth_year}</p>
            <p>Gender: {actor.gender}</p>
            <button onClick={onBack}>Back to list</button>
        </div>
    );
}

export default ActorDetail;
