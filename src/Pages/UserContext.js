import React, { createContext, useState  } from 'react';
import { Link } from 'react-router-dom';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [serverUser , setserverUser]=useState(()=>{
    const storedUser = localStorage.getItem("serverUser");
    return storedUser ? JSON.parse(storedUser) : null;
  })

  const login = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem('serverUser'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setUser(storedUser);
     <Link to="/" className="text-2xl text-white hover:text-orange-400 transition duration-300">
     Store
   </Link>
    } else {
      alert('Invalid username or password');
      navigate("/signup")
    }
  };

  const signup = (username, password) => {
    const userData = { username, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    localStorage.setItem("serverUser" , JSON.stringify(userData))
    setserverUser(userData)
  };

  const logout = () => {
    const userRes=window.confirm("Do you Really Want To Logout")
    if(userRes){
    localStorage.removeItem('user');
    window.location.reload()
    setUser(null);
    }else{
      console.log("request rejected....")
    }
   
  };

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};
