import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../assets/Gemini_Generated_Image_lr79rrlr79rrlr79.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero h-[600px] relative"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow p-5 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Scholarships</h2>
            <p>Find local and international scholarships suitable for Bangladeshi students.</p>
            <Link to="/scholarships" className="btn btn-outline btn-sm mt-3">
              View More
            </Link>
          </div>

          <div className="card bg-base-100 shadow p-5 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Job Opportunities</h2>
            <p>Browse student-friendly job posts and internship opportunities.</p>
            <Link to="/jobs" className="btn btn-outline btn-sm mt-3">
              View More
            </Link>
          </div>

          <div className="card bg-base-100 shadow p-5 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Research Community</h2>
            <p>Join with other students, share ideas, and find research partners.</p>
            <Link to="/research" className="btn btn-outline btn-sm mt-3">
              Join Now
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
