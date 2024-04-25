import React, { useState } from 'react';
import ActorDetail from './ActorDetail';
import useActors from '../hooks/useActors';
import './ActorList.css';
import Loading from './common/LoadingIcon';
import ActorCard from './ActorCard'; 
import Error from './common/Error';

function ActorList() {
    const { actors, error, loading } = useActors();
    const [selectedActor, setSelectedActor] = useState(null);

    console.log(error)
    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    return (
        <div className="actor-list">
            {selectedActor ? (
                <ActorDetail actor={selectedActor} onBack={() => setSelectedActor(null)} />
            ) : (
                actors.map(actor => (
                    <ActorCard actor={actor} onSelectActor={setSelectedActor} />
                ))
            )}
        </div>
    );
}

export default ActorList;