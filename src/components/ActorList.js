import React, { useState, useEffect } from 'react';
import ActorDetail from './ActorDetail';

function ActorList() {
    const [actors, setActors] = useState([]);
    const [selectedActor, setSelectedActor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setActors(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    console.log(actors)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="actor-list">
            {selectedActor ? (
                <ActorDetail actor={selectedActor} onBack={() => setSelectedActor(null)} />
            ) : (
                actors.map(actor => (
                    <div key={actor.name} className="card">
                        <h3>{actor.name}</h3>
                        <p>Height: {actor.height}</p>
                        <p>Birth Year: {actor.birth_year}</p>
                        <button onClick={() => setSelectedActor(actor)}>Details</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default ActorList;
