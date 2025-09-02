import { useNavigate } from "react-router";

const EventCard = ({event}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/events/${event.id}`);
    };

    return (
    <div click={handleClick} className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnQlMjBoaW50ZXJncnVuZGJpbGR8ZW58MHx8MHx8fDA%3D"
                    alt="Event" />
            </figure>
        <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">{event.date}</div>
            <div className="badge badge-outline">{event.location}</div>
        </div>
        </div>
    </div>
    );

};

export default EventCard; 