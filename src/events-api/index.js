const getEvents = async abortCont => {
    const res = await fetch ('http://localhost:3001/api/events?page=1&limit=10', {
        signal: abortCont.signal
    });
    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

    const data = await res.json();

    return data.results;
};

export { getEvents };

