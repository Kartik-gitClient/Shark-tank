import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-900 w-full text-amber-100 p-6 shadow-lg border-t-2 border-amber-700">
      <div className="max-w-7xl mx-auto">
        {/* Café branding */}
        <div className="mb-4">
          <p className="text-2xl font-serif font-bold text-amber-50">Café Delight</p>
          <p className="text-sm italic mt-1">Serving happiness in every cup since 2024</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-4">
          <Link 
            to="/PrivacyPolicy" 
            className="hover:text-amber-300 transition duration-300 text-sm md:text-base"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/TermsOfService" 
            className="hover:text-amber-300 transition duration-300 text-sm md:text-base"
          >
            Terms of Service
          </Link>
          <Link 
            to="/Contact" 
            className="hover:text-amber-300 transition duration-300 text-sm md:text-base"
          >
            Contact Us
          </Link>
          <Link 
            to="/Careers" 
            className="hover:text-amber-300 transition duration-300 text-sm md:text-base"
          >
            Careers
          </Link>
        </div>

        {/* Social Icons (optional - add your own) */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-amber-200 hover:text-amber-50">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-amber-200 hover:text-amber-50">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="text-amber-200 hover:text-amber-50">
            <i className="fab fa-facebook text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-amber-200 mt-4">
          &copy; {new Date().getFullYear()} Café Delight. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;