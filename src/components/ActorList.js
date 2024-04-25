import React, { useState} from 'react';
import ActorDetail from './ActorDetail';
import useActors from '../hooks/useActors';
import './ActorList.css';
import Loading from './LoadingIcon';

function ActorList() {
    const { actors, error, loading } = useActors();
    const [selectedActor, setSelectedActor] = useState(null);

    // console.log(actors.result, error)
    if (loading) return <Loading />;
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
