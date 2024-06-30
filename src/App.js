import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from './Components/Header';
import Store from './Pages/store';
import Marketplace from './Pages/marketplace';
import Community from './Pages/community';
import Login from './Pages/Login';
import Signup from './Pages/signup';
import ProductDetail from './Pages/ProductDetail';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Footer from "./Components/Footer";
import { UserProvider } from './Pages/UserContext'; 
import PlaceOrder from './Pages/placeOrder';
import Orders from './Pages/orders';
import BulkOrder from './Pages/bulkorder';
import Subscription from './Pages/Subscription';


const App = ({ username }) => {
  return (
    <UserProvider>
      <Router>
        <Header username={username} />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/bulk-order" element={<BulkOrder />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
