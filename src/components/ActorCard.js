import React from 'react';
import './ActorCard.css';

function ActorCard({ actor, onSelectActor }) {
    return (
        <div key={actor.name} className="card">
            <h3>{actor.name}</h3>
            <p>Height: {actor.height}</p>
            <p>Birth Year: {actor.birth_year}</p>
            <button onClick={() => onSelectActor(actor)}>Details</button>
        </div>
    );
}

export default ActorCard;