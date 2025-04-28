import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-16 px-[20px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-semibold text-yellow-500 mb-4">Lost and Found</h3>
            <p className="mb-4 max-w-lg">
              Reconnect with your belongings. A platform that helps you find lost items and report your own.
            </p>
          </div>
          <div className="flex space-x-10">
            <div className="flex flex-col items-start">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
                <li><Link to="/find-items" className="hover:text-yellow-500 transition-colors">Find Items</Link></li>
                <li><Link to="/report-lost-item" className="hover:text-yellow-500 transition-colors">Report Lost Item</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl text-gray-300 hover:text-yellow-500 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-2xl text-gray-300 hover:text-yellow-500 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl text-gray-300 hover:text-yellow-500 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl text-gray-300 hover:text-yellow-500 transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        <p>&copy; 2025 Lost and Found. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
