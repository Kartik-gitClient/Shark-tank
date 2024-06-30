import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logoc.jpg"
import userIcon from '../Assets/user.png';
import { UserContext } from '../Pages/UserContext';

const Header = () => {
  const { user , logout } = useContext(UserContext);

  return (
    <header className="flex flex-wrap justify-between items-center p-3 lg:p-5 bg-gradient-to-r from-green-500 to-yellow-500 text-white">
      <div className="flex items-center mb-3 lg:mb-0">
        <img src={logo} alt="Logo" className="w-12 rounded-3xl object-cover h-12 mr-2 lg:mr-3" />
        <span className="text-2xl font-semibold">CleansWave</span>
      </div>

      <nav className="flex justify-center w-full lg:w-auto mb-3 lg:mb-0">
        <ul className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6">
          <li>
            <Link to="/" className="text-xl text-white hover:text-amber-400  hover:text-2xl transition duration-300 transition duration-300">
              Store
            </Link>
          </li>
          <li>
            <Link to="/marketplace" className="text-xl text-white hover:text-amber-400 hover:text-2xl transition duration-300">
              Marketplace
            </Link>
          </li>
          <li>
            <Link to="/community" className="text-xl text-white hover:text-amber-400  hover:text-2xl transition duration-300">
              Community
            </Link>
          </li>
          <li>
        <Link to="/Orders" className="text-xl text-white hover:text-amber-400  hover:text-2xl transition duration-300">
        Subscriptions
        </Link>
      </li>
        </ul>
       
      </nav>

      <div className="relative ml-3 flex lg:ml-5 group">
        {user ? (
          <div className="flex items-center">
            <img src={userIcon} alt="User Icon" className="w-10 h-10 bg-green rounded-full cursor-pointer border-white" />
            <span className="mr-4 bold  text-lg">Hii {user.username.toUpperCase()}</span>
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Log Out
            </button>
          </div>
        ) : (
          <>
            <img src={userIcon} alt="User Icon" className="w-10 mx-5 h-10 rounded-full cursor-pointer border-white" />
            <div className="absolute right-1 mt-2 w-20 bg-white rounded-md shadow-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/login" className="block border-2 border-gray-300  text-center py-2 text-gray-800 hover:bg-gray-100">
                Login
              </Link>
              <Link to="/signup" className="block border-2 border-gray-300 text-center py-2 text-gray-800 hover:bg-gray-100">
                Signup
              </Link>
            </div>
          </>
        )}
      </div>

      
    </header>
  );
};

export default Header;
