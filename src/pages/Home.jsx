import { useState, useEffect } from "react";

import { EventCard } from "../components";
import { getEvents } from "../events-api";

const url = "http://localhost:3001/api/events?page=1&limit=10"

const Home = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect (() => {

        const abortController = new AbortController();
        
        const getAndSetEvents = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getEvents(url, abortController);
                setEvents(data);
            } catch (error) {
                if (error.name !== 'AbortError') {
					console.error(error);
					setError('Failed to load Events');
				}
			} finally {
				setLoading(false);
			}
        };

        getAndSetEvents();

        return () => {
            abortController.abort();
        }

    }, []) 

    return (
        <main className="grid grid-cols-3 gap-6 p-6">
            {loading && <p>Loading Events...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </main>
    )
};

export default Home;

