import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import { Link } from 'react-router-dom';

function LostItemList() {

    // Get lostItems from the context
    const { lostItems } = useContext(ItemContext);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
            <div className="max-w-7xl mx-auto">
                
                {/* HERO SECTION */}
                <section className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
                        Find & Reunite Lost Treasures
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Browse the latest lost items. Help yourself or someone else by identifying and returning lost belongings.
                    </p>
                </section>

                {/* CARD GRID */}
                <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  
                    {lostItems.map((item) => (
                        <Link to={`/ItemDetail/${item.id}`}>

                        <div
                            key={item.id} // Always use key when mapping over arrays in React
                            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300"
                        >
                            <img
                                src={item.image}
                                alt="Lost Item"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h2 className="text-2xl font-semibold text-white mb-2">📦 {item.itemName}</h2>
                                <p className="text-gray-300 text-sm mb-4">
                                    {item.description}
                                </p>
                                <div className="flex justify-between text-gray-400 text-xs">
                                    <span>📍 {item.location}</span>
                                    <span>📅 {item.lostDate}</span>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </section>

            </div>
        </div>
    );
}

export default LostItemList;
