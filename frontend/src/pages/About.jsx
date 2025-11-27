import React from 'react';
import member1 from '../assets/WhatsApp Image 2025-10-25 at 14.55.13_a3f1c3cb.jpg'; // replace with actual image path
import member2 from '../assets/WhatsApp Image 2025-11-06 at 22.52.51_612b40e5.jpg'; // replace with actual image path

const About = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-gray-50">
      {/* About Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us</h1>

      {/* About Content */}
      <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">
        <p>
          Welcome to AspireNet, a platform dedicated to helping students unlock their full potential.
          Whether it's finding scholarships, job opportunities, research communities, or free learning resources, we are here to guide you at every step.
        </p>

        <p>
          Our mission is to create a bridge between students and opportunities globally.
          We strive to provide accurate, up-to-date, and personalized information to help students make informed decisions for their academic and professional journey.
        </p>

        <p>
          Join our community and explore workshops, courses, and tools designed specifically to enhance your skills and open doors to new opportunities.
          AspireNet is your companion in achieving academic excellence and career success.
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>
            To empower every student with access to opportunities and resources that can help them achieve their dreams.
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            To provide a one-stop platform where students can discover scholarships, jobs, workshops, and learning resources tailored to their needs.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Team Member 1 */}
          <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
            <img
              src={member1}
              alt="Dib"
              className="w-40 h-40 rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold">Shuvo Sutradhor</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
            <img
              src={member2}
              alt="Dib"
              className="w-40 h-40 rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold">Prity Saha Chnoya</h3>
            <p className="text-gray-500">Database Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
