import React from 'react';

const Research = () => {
  const researchProjects = [
    {
      id: 1,
      title: 'AI in Education',
      description: 'Collaborate on projects related to AI applications in modern education.',
      link: '#',
    },
    {
      id: 2,
      title: 'Renewable Energy Research',
      description: 'Join teams working on sustainable energy solutions in Bangladesh.',
      link: '#',
    },
    {
      id: 3,
      title: 'HealthTech Innovation',
      description: 'Work on innovative healthcare technology projects.',
      link: '#',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Research Community</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {researchProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Join Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
