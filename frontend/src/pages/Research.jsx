import React, { useEffect, useState } from "react";
import axios from "axios";

const Research = () => {
  const [researchList, setResearchList] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all research entries
  const fetchResearch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/research");
      setResearchList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResearch();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update research
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/research/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/research", formData);
      }
      setFormData({ title: "", description: "" });
      fetchResearch();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit research
  const handleEdit = (research) => {
    setEditingId(research.research_id);
    setFormData({ title: research.title, description: research.description });
  };

  // Delete research
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/research/${id}`);
      fetchResearch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Research Management</h2>

      {/* Research Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mb-8 space-y-4">
        <h3 className="text-xl font-semibold">{editingId ? "Update Research" : "Add New Research"}</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          {editingId ? "Update Research" : "Add Research"}
        </button>
      </form>

      {/* Research List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchList.map((res) => (
          <div key={res.research_id} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">{res.title}</h3>
            <p className="mt-2">{res.description}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEdit(res)}
                className="flex-1 bg-yellow-500 text-white py-1 rounded-lg hover:bg-yellow-600 transition"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(res.research_id)}
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

export default Research;
