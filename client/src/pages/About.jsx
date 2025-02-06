import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        About This App
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Our Secure Authentication App is designed to provide robust and user-friendly access control.
        Built with React, Redux, and Firebase, it ensures your data is safe and accessible only to you.
        Customize it to suit your needs and enjoy a seamless, secure experience.
      </p>
    </div>
  );
};

export default About;
