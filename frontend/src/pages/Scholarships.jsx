import React, { useState, useEffect } from "react";
import axios from "axios";

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newScholarship, setNewScholarship] = useState({
    title: "",
    description: "",
    eligibility: "",
    deadline: "",
    apply_link: "",
  });

  // Fetch scholarships from backend
  const fetchScholarships = async () => {
    try {
      const res = await axios.get("http://localhost:5000/scholarships");
      setScholarships(res.data);
    } catch (err) {
      console.error("Error fetching scholarships:", err);
    }
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setNewScholarship({ ...newScholarship, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/scholarships", newScholarship);
      setScholarships([res.data, ...scholarships]); // Add new scholarship on top
      setNewScholarship({ title: "", description: "", eligibility: "", deadline: "", apply_link: "" });
      setShowForm(false); // Close the form after submitting
    } catch (err) {
      console.error("Error posting scholarship:", err);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">Scholarships</h1>

      {/* Toggle Form Button */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary"
        >
          {showForm ? "Close Form" : "Post Scholarship"}
        </button>
      </div>

      {/* Scholarship Form */}
      {showForm && (
        <div className="max-w-xl mx-auto mb-12 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Add New Scholarship</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Scholarship Title"
              value={newScholarship.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newScholarship.description}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="eligibility"
              placeholder="Eligibility Criteria"
              value={newScholarship.eligibility}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="date"
              name="deadline"
              value={newScholarship.deadline}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="url"
              name="apply_link"
              placeholder="Application Link"
              value={newScholarship.apply_link}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Submit Scholarship
            </button>
          </form>
        </div>
      )}

      {/* Display Scholarships */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {scholarships.map((sch) => (
          <div
            key={sch.scholarship_id}
            className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{sch.title}</h2>
            <p className="text-gray-600 mb-2"><strong>Eligibility:</strong> {sch.eligibility}</p>
            <p className="text-gray-600 mb-2">{sch.description}</p>
            <p className="text-gray-600 mb-4"><strong>Deadline:</strong> {sch.deadline}</p>
            <a
              href={sch.apply_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
