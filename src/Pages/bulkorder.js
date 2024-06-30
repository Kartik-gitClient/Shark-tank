import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bulk from "./bulk.jpeg"

const BulkOrder = () => {
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [salesExecutive, setSalesExecutive] = useState('');
  const [customization, setCustomization] = useState('');

  const handlePlaceOrder = () => {
    if(quantity && address && salesExecutive === ""){
      alert("Pls fill the Required Fields")
    }
    const order = {
      productId: product.id,
      productName: product.name,
      quantity,
      address,
      salesExecutive,
      customization,
      date: new Date().toISOString(),
    };
    
    

    const storedOrders = JSON.parse(localStorage.getItem('bulkOrders')) || [];
    const updatedOrders = [...storedOrders, order];
    localStorage.setItem('bulkOrders', JSON.stringify(updatedOrders));

    alert('Bulk order placed successfully!');
    navigate('/orders'); 
  };

  return (
    <div className="container mx-auto p-6 flex flex-wrap bg-green-50 relative">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-green-700">{product.name}</h2>
        <p className="mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-green-800">Price: {product.price}</p>
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-4 rounded" />
      </div>
      <div className="w-full relative lg:w-1/2 p-4">
        <h3 className="text-xl font-semibold mb-4 text-green-700">Bulk Order Details</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter the address of the organization"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Quantity (in boxes, 1 box contains 20 bottles):</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Number of boxes (20 bottles per box)"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Sales Executive Mobile No:</label>
          <input
            type="text"
            value={salesExecutive}
            onChange={(e) => setSalesExecutive(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter the sales executive's mobile number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Customization (Optional):</label>
          <textarea
            value={customization}
            onChange={(e) => setCustomization(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter any customization requests (optional)"
          />
        </div>
        <button
          onClick={handlePlaceOrder}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Place Bulk Order
        </button>
        <div className=' w-full lg:w-2/3 mt-4'>
          <img src={bulk} alt="Bulk Order" className=' w-full rounded' />
        </div>
      </div>
    </div>
  );
};

export default BulkOrder;
