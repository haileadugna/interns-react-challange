import React from 'react';

function ActorDetail({ actor, onBack }) {
    return (
        <div className="actor-detail">
            <h2>{actor.name}</h2>
            <div className="detail-item">
                <span>Height:</span>
                <p>{actor.height}</p>
            </div>
            <div className="detail-item">
                <span>Mass:</span>
                <p>{actor.mass}</p>
            </div>
            <div className="detail-item">
                <span>Hair Color:</span>
                <p>{actor.hair_color}</p>
            </div>
            <div className="detail-item">
                <span>Skin Color:</span>
                <p>{actor.skin_color}</p>
            </div>
            <div className="detail-item">
                <span>Eye Color:</span>
                <p>{actor.eye_color}</p>
            </div>
            <div className="detail-item">
                <span>Birth Year:</span>
                <p>{actor.birth_year}</p>
            </div>
            <div className="detail-item">
                <span>Gender:</span>
                <p>{actor.gender}</p>
            </div>
            <div className="detail-item">
                <span>Films:</span>
                <ul>
                    {actor.films.map((film, index) => (
                        <li key={index}><a href={film}>{film}</a></li>
                    ))}
                </ul>
            </div>
            <div className="detail-item">
                <span>Vehicles:</span>
                <ul>
                    {actor.vehicles.map((vehicle, index) => (
                        <li key={index}><a href={vehicle}>{vehicle}</a></li>
                    ))}
                </ul>
            </div>
            <div className="detail-item">
                <span>Starships:</span>
                <ul>
                    {actor.starships.map((starship, index) => (
                        <li key={index}><a href={starship}>{starship}</a></li>
                    ))}
                </ul>
            </div>
            <button onClick={onBack}>Back to list</button>
        </div>
    );
}

export default ActorDetail;
