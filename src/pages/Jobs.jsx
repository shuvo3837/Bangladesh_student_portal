import React from 'react';

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Ltd.',
      location: 'Dhaka, Bangladesh',
      type: 'Internship',
      link: '#',
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'Global Analytics',
      location: 'Remote',
      type: 'Full-time',
      link: '#',
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'Innovatech',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      link: '#',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Job Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-1"><strong>Company:</strong> {job.company}</p>
            <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
            <p className="text-gray-600 mb-4"><strong>Type:</strong> {job.type}</p>
            <a
              href={job.link}
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

export default Jobs;
