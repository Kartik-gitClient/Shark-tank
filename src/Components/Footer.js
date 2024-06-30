import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-500 w-full relative bottom-0  dynamic text-white p-5 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg">&copy; 2024 Detoxify. All rights reserved.</p>
        <div className="flex justify-center items-center mt-3 space-x-6">
          <Link to="/PrivacyPolicy" className="hover:text-orange-400 transition duration-300">
            Privacy Policy
          </Link>
          <Link to="/PrivacyPolicy" className="hover:text-orange-400 transition duration-300">
            Terms of Service
          </Link>
          <Link to="/PrivacyPolicy" className="hover:text-orange-400 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
