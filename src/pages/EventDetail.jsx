

const EventDetail = () => {

    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row ">
    <img
      src={`https://picsum.photos/400/300?random=${ev.id}`}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold text-white">{event.title}</h1>
      <p className="py-6">{event.date}</p>
      <p className="py-6">{event.location}</p>
      <p className="py-6">{event.discription}</p>
      <button className="btn btn-primary">Go Back</button>
    </div>
  </div>
</div>
    )
};

export default EventDetail;