import { useState } from 'react';
import { motion } from 'framer-motion'; // Animation ke liye

function AddItem() {
  const [HandleInput, setHandleInput] = useState('');
  const [HandleTextArea, setHandleTextArea] = useState('');
  const [Location, setLocation] = useState('');
  const [LostDate, setLostDate] = useState('');
  const [Image, setImage] = useState(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { HandleInput, HandleTextArea, Location, LostDate, Image });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-4">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-3">
          Lost & Found Portal 🔎
        </h1>
        <p className="text-lg text-gray-200">
          Report lost items easily and help finders reach you faster!
        </p>
      </motion.div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">📝 Report Lost Item</h2>

        <form className="space-y-6" onSubmit={HandleSubmit}>
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
            <input
              type="text"
              value={HandleInput}
              onChange={(e) => setHandleInput(e.target.value)}
              placeholder="Enter item name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={HandleTextArea}
              onChange={(e) => setHandleTextArea(e.target.value)}
              placeholder="Enter description"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm resize-none"
            />
          </div>

          {/* Lost Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lost Date</label>
            <input
              type="date"
              value={LostDate}
              onChange={(e) => setLostDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          {/* Lost Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lost Location</label>
            <input
              type="text"
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image (optional)</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            📤 Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
