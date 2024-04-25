import api from '../services/api';
import { useState, useEffect } from 'react'; 

const useData = (endPoint) => {
    const [actors, setActors] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);  
    
    useEffect(() => {
        setLoading(true);

        api.get(endPoint)
            .then(res => {
                setActors(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                console.error('API Error:', err);
                if (err.name === 'AbortError') {
                    return;
                }
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { actors, error, loading };
}

export default useData;