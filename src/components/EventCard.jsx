
const EventCard = ({event}) => {
    
    return (
    <div className="card bg-gray-600 w-96 shadow-sm">
            <figure>
                <img
                    src={`https://picsum.photos/400/300?random=${event.id}`} 
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg" />
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