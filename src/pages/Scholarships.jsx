import React from 'react';

const Scholarships = () => {
  const scholarships = [
    {
      id: 1,
      title: 'Bangladesh Government Merit Scholarship',
      description: 'Merit-based scholarship for top-performing Bangladeshi students.',
      link: '#',
    },
    {
      id: 2,
      title: 'Australia International Postgraduate Scholarship',
      description: 'Scholarship for Bangladeshi students to pursue Masters in Australia.',
      link: '#',
    },
    {
      id: 3,
      title: 'Fulbright Scholarship',
      description: 'Fully-funded scholarships for higher studies in the USA.',
      link: '#',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Scholarships</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {scholarships.map((sch) => (
          <div
            key={sch.id}
            className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{sch.title}</h2>
            <p className="text-gray-600 mb-4">{sch.description}</p>
            <a
              href={sch.link}
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
