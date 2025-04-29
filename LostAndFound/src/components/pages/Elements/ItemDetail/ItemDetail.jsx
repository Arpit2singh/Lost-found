// src/pages/ItemDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../../../context/ItemContext';
function ItemDetail() {

  const params = useParams();
  const { lostItems } = useContext(ItemContext);
  console.log(lostItems);
  console.log(params.id) ;
  const itemfound = lostItems.find(item => item.id.toString() === params.id);

  if (!itemfound) {
    return <div className="text-white text-center">Item not found.</div>;
  }






  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl w-full shadow-2xl">

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={itemfound.image}
            alt={itemfound.itemName}
            className="rounded-xl shadow-lg h-64 object-cover"
          />

        </div>

        description
        {/* : 
"Black leather wallet with some cards and cash"
id
: 
1
image
: 
"https://via.placeholder.com/150"
itemName
: 
"Wallet"
location
: 
"Cafeteria"
lostDate
: 
"2025-04-26" */}

        {/* DETAILS */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">📦 {itemfound.itemName}</h1>
          <p className="text-gray-300 mb-4">
            {itemfound.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 text-gray-400">
            <div className="flex items-center gap-2">
              📍 <span>{itemfound.location}</span>
            </div>
            <div className="flex items-center gap-2">
              📅 <span>{itemfound.lostDate}</span>
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
