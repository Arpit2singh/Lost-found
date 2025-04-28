// src/pages/ItemDetail.jsx
import React from 'react';

function ItemDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl w-full shadow-2xl">
        
        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/300"
            alt="Lost Item"
            className="rounded-xl shadow-lg h-64 object-cover"
          />
        </div>

        {/* DETAILS */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">📦 Item Name</h1>
          <p className="text-gray-300 mb-4">
            Detailed description of the lost item goes here.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 text-gray-400">
            <div className="flex items-center gap-2">
              📍 <span>Lost Location</span>
            </div>
            <div className="flex items-center gap-2">
              📅 <span>Lost Date</span>
            </div>
          </div>

          {/* BACK BUTTON */}
          <div className="mt-8">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300">
              🔙 Back to List
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ItemDetail;
