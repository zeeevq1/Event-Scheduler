import { useState, useEffect } from "react";

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const [token, setToken] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // retrieving token from localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setError("");
    setSuccess("");

    if (!token) {
      setError("Access denied. No valid token found.");
      return;
    }

    try {
      //fetch request to create event
      const res = await fetch("http://localhost:3001/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      //  Error handling based on status codes
      if (!res.ok) {
        let message = "❌ Something went wrong.";

        if (res.status === 401) {
          message = "❌ Unauthorized: your session may have expired.";
        } else if (res.status === 403) {
          message = "❌ Forbidden: you don’t have permission to create events.";
        } else if (res.status === 404) {
          message = "❌ API endpoint not found (404).";
        } else if (res.status >= 500) {
          message = "❌ Server error: please try again later.";
        }

        throw new Error(message);
      }

      setSuccess("Event created successfully!");
      setForm({ title: "", description: "", date: "", location: "" });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  // If no token, show access denied message
  if (!token) {
    return (
      <div className="max-w-lg mx-auto mt-10 bg-red-50 text-red-700 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold">Access Denied</h2>
        <p className="mt-2">
          You must be logged in with a valid token to create events.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Create Event</h2>

      {error && <p className="mb-3 text-red-600">{error}</p>}
      {success && <p className="mb-3 text-green-600">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter event title"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter event description"
            required
            className="w-full border rounded-lg px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Enter event location"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Save Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
