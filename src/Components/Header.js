import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logoc.jpg";
import userIcon from '../Assets/user.png';
import { UserContext } from '../Pages/UserContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="flex flex-wrap justify-between items-center p-4 bg-gradient-to-r from-amber-800 to-amber-600 text-white shadow-lg">
      {/* Logo & Brand Name */}
      <div className="flex items-center mb-4 lg:mb-0">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-12 h-12 rounded-full object-cover border-2 border-amber-200 shadow-md" 
        />
        <span className="text-2xl font-bold ml-3 font-serif text-amber-50">
          Café Delight
        </span>
      </div>

      {/* Navigation Menu */}
      <nav className="w-full lg:w-auto mb-4 lg:mb-0">
        <ul className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-8">
          <li>
            <Link 
              to="/" 
              className="text-lg font-medium hover:text-amber-200 hover:underline transition duration-300"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link 
              to="/marketplace" 
              className="text-lg font-medium hover:text-amber-200 hover:underline transition duration-300"
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link 
              to="/community" 
              className="text-lg font-medium hover:text-amber-200 hover:underline transition duration-300"
            >
              Events
            </Link>
          </li>
          <li>
            <Link 
              to="/Orders" 
              className="text-lg font-medium hover:text-amber-200 hover:underline transition duration-300"
            >
              Reservations
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Section */}
      <div className="relative flex items-center group">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-lg font-medium text-amber-100">
              Welcome, {user.username.toUpperCase()}
            </span>
            <img 
              src={userIcon} 
              alt="User Icon" 
              className="w-10 h-10 rounded-full border-2 border-amber-200 cursor-pointer" 
            />
            <button 
              onClick={logout} 
              className="bg-amber-900 hover:bg-amber-800 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <img 
              src={userIcon} 
              alt="User Icon" 
              className="w-10 h-10 rounded-full border-2 border-amber-200 cursor-pointer" 
            />
            <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <Link 
                to="/login" 
                className="block px-4 py-2 text-amber-900 hover:bg-amber-50 border-b border-amber-100"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="block px-4 py-2 text-amber-900 hover:bg-amber-50"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;