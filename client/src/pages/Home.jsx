import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/user/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Secure Auth App
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a secure authentication application built with React, Redux, and Firebase.
      </p>
      {currentUser && (
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-2">
            Hello, {currentUser.username}!
          </p>
          <p className="text-md text-gray-500 mb-4">
            Email: {currentUser.email}
          </p>
          <button
            onClick={handleSignOut}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
