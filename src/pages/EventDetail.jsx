import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const eventImages = [
  "/assets/event1.jpg",
  "/assets/event2.jpg",
  "/assets/event3.jpg",
  "/assets/event4.jpg",
  "/assets/event5.jpg",
];

const EventDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const data = await fetch(`http://localhost:3001/api/events/${id}`);
                const json = await data.json();
                setEvent(json);
            }   catch (err) {
                console.error(err);
            }   finally {
                setLoading(false)
            }
        };

        fetchEvent();

    }, [id])

    if (loading) return <p>Loading...</p>;
    if (!event) return <p>Event not found.</p>;


    return (
  <div className="hero min-h-screen p-10">
    <div className="hero-content flex-col lg:flex-row gap-10 bg-gray-600 rounded-xl p-10">
   
      <img
        src={eventImages[event.id % eventImages.length]}
        alt={event.title}
        className="w-full max-w-sm h-80 object-cover rounded-lg"
      />

      <div className="text-white flex flex-col justify-start flex-1">
        
        <h1 className="text-5xl font-bold mb-4">{event.title}</h1>

        <div className="flex gap-6 mb-4">
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
        </div>
        <p className="mb-4">{event.description}</p>
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary p-2 w-20"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

export default EventDetail;