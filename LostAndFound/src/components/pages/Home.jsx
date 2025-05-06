import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import React from 'react';

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-[#FF5733] to-[#C70039] flex flex-col text-white">


      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[80vh] text-center p-8">
        <h1 className="text-6xl font-extrabold leading-tight mb-4 text-shadow-lg">
          Lost and Found
        </h1>
        <p className="text-xl mb-8 max-w-lg mx-auto opacity-90">
          Reconnect with your lost items effortlessly. Search, report, and get notifications.
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          Login
        </button>
      </div>

      {/* Features Section */}
      <div className="flex justify-around items-center py-16 bg-gray-900 rounded-t-3xl mt-16">
        <div className="flex flex-col items-center text-center px-6">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full shadow-lg mb-6">
            <i className="fas fa-search text-3xl text-white"></i>
          </div>
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Find Lost Items</h2>
          <p className="text-lg opacity-80">
            Search through our comprehensive database of found items. Reunite with your belongings.
          </p>
        </div>
        <div className="flex flex-col items-center text-center px-6">
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-4 rounded-full shadow-lg mb-6">
            <i className="fas fa-bell text-3xl text-white"></i>
          </div>
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Report a Lost Item</h2>
          <p className="text-lg opacity-80">
            Easily report any lost items and receive alerts when found by others.
          </p>
        </div>
      </div>

    
    </div>
  );
}

export default Home;
