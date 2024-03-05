// import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
// import {  useEffect } from 'react';

const Navbar = ({size}) => {
 
  // useEffect(() => {
  //   // Check if the user is authenticated
  //   axios.get('http://localhost:8001/home')
  //     .then(response => {
  //       const { valid } = response.data;
  //       // setAuthenticated(valid);
  //     })
  //     .catch(error => {
  //       console.error('Error checking authentication status:', error);
  //       // Handle error if authentication status check fails
  //     });
  // }, []);

  const handleLogout = () => {
    axios.get('http://localhost:8001/logout')
      .then(res => {
        // If logout is successful, you can redirect the user to the login page
        window.location.href = '/login'; // Redirect to the home page
      })
      .catch(error => {
        console.error('Error logging out:', error);
        // Handle error if logout fails
      });
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-semibold text-lg">Restaurant</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/menu" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Link to="/Cart" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart <span>{size}</span></Link>
           
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign in</Link>
          
            <button onClick={handleLogout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign out</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
