import { useNavigate } from "react-router";

const eventImages = [
  "/assets/event1.jpg",
  "/assets/event2.jpg",
  "/assets/event3.jpg",
  "/assets/event4.jpg",
  "/assets/event5.jpg"
];

const EventCard = ({event}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/events/${event.id}`);
    };

    return (
    <div onClick={handleClick} className="card bg-gray-600 w-96 shadow-sm">
            <figure>
                <img
                    src={eventImages[event.id % eventImages.length]}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg" />
            </figure>
        <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{new Date(event.date).toLocaleDateString()}</div>
            <div className="badge badge-outline">{event.location}</div>
          </div>
        </div>
    </div>
    );

};

export default EventCard; 