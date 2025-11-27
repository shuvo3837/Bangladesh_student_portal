import React, { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({ job_title: "", organization: "", requirements: "" });
  const [editingJobId, setEditingJobId] = useState(null);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingJobId) {
        await axios.put(`http://localhost:5000/jobs/${editingJobId}`, formData);
        setEditingJobId(null);
      } else {
        await axios.post("http://localhost:5000/jobs", formData);
      }
      setFormData({ job_title: "", organization: "", requirements: "" });
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (job) => {
    setEditingJobId(job.job_id);
    setFormData({
      job_title: job.job_title,
      organization: job.organization,
      requirements: job.requirements
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Jobs Management</h2>

      {/* Job Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mb-8 space-y-4">
        <h3 className="text-xl font-semibold">{editingJobId ? "Update Job" : "Add New Job"}</h3>
        <input
          type="text"
          name="job_title"
          placeholder="Job Title"
          value={formData.job_title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="organization"
          placeholder="Organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="requirements"
          placeholder="Requirements"
          value={formData.requirements}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          {editingJobId ? "Update Job" : "Add Job"}
        </button>
      </form>

      {/* Jobs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job.job_id} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">{job.job_title}</h3>
            <p><strong>Organization:</strong> {job.organization}</p>
            <p><strong>Requirements:</strong> {job.requirements}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleEdit(job)}
                className="flex-1 bg-yellow-500 text-white py-1 rounded-lg hover:bg-yellow-600 transition"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(job.job_id)}
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

export default Jobs;
