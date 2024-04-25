import React from 'react';
import './ActorDetail.css';

function ActorDetail({ actor, onBack }) {
    return (
        <div className="actor-detail">
            <div className="actor-header">
                <h2>{actor.name}</h2>
            </div>
            <div className="actor-body">
                <div className="detail-item">
                    <p>Height: {actor.height}</p>
                </div>
                <div className="detail-item">
                    <p>Mass: {actor.mass}</p>
                </div>
                <div className="detail-item">
                    <p>Hair Color: {actor.hair_color}</p>
                </div>
                <div className="detail-item">
                    
                    <p>Skin Color: {actor.skin_color}</p>
                </div>
                <div className="detail-item">
                    
                    <p>Eye Color: {actor.eye_color}</p>
                </div>
                <div className="detail-item">
                    <p>Birth Year: {actor.birth_year}</p>
                </div>
                <div className="detail-item">
                    <p>Gender: {actor.gender}</p>
                </div>
                <div className="detail-item">
                    <span>Films:</span>
                    <ul>
                        {actor.films.map((film, index) => (
                            <li key={index}><a href={film}>Movie{index}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="detail-item">
                    <span>Vehicles:</span>
                    <ul>
                        {actor.vehicles.map((vehicle, index) => (
                            <li key={index}><a href={vehicle}>vehicle{index}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="detail-item">
                    <span>Starships:</span>
                    <ul>
                        {actor.starships.map((starship, index) => (
                            <li key={index}><a href={starship}>starship{index}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <button onClick={onBack}>Back</button>
        </div>
    );
}

export default ActorDetail;
