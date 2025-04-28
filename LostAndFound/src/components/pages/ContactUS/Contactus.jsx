// src/pages/ContactUs.jsx
import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Get In Touch With Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or found something important? We'd love to hear from you.  
            Fill the form below or reach out directly!
          </p>
        </section>

        {/* CONTACT FORM */}
        <section className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            ></textarea>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition duration-300 shadow-lg"
              >
                🚀 Send Message
              </button>
            </div>

          </form>
        </section>

        {/* FOOTER INFO */}
        <section className="text-center mt-16 text-gray-400">
          <p>📍 Location: VIIT Bhopal Campus</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>✉️ Email: support@example.com</p>
        </section>

      </div>
    </div>
  );
}

export default ContactUs;
