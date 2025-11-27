import React, { useEffect, useState } from "react";
import axios from "axios";

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [formData, setFormData] = useState({ name: "", details: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchScholarships = async () => {
    try {
      const res = await axios.get("http://localhost:5000/scholarships");
      setScholarships(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchScholarships();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/scholarships/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/scholarships", formData);
      }
      setFormData({ name: "", details: "" });
      fetchScholarships();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (scholarship) => {
    setEditingId(scholarship.scholarship_id);
    setFormData({ name: scholarship.name, details: scholarship.details });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/scholarships/${id}`);
      fetchScholarships();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Scholarships Management</h2>

      {/* Scholarship Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mb-8 space-y-4">
        <h3 className="text-xl font-semibold">{editingId ? "Update Scholarship" : "Add New Scholarship"}</h3>
        <input
          type="text"
          name="name"
          placeholder="Scholarship Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="details"
          placeholder="Details"
          value={formData.details}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          {editingId ? "Update Scholarship" : "Add Scholarship"}
        </button>
      </form>

      {/* Scholarships List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scholarships.map((sch) => (
          <div key={sch.scholarship_id} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">{sch.name}</h3>
            <p className="mt-2">{sch.details}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEdit(sch)}
                className="flex-1 bg-yellow-500 text-white py-1 rounded-lg hover:bg-yellow-600 transition"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(sch.scholarship_id)}
                className="flex-1 bg-red-500 text-white py-1 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
