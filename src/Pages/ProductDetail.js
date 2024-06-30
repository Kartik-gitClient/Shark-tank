import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import myProducts from '../data/db.json';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { UserContext } from './UserContext';
import benefitImg from "./benefit.jpg"

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user, logout } = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);
  const [bulk, setbulk] = useState(false);
  const [Subscription, setsubscription] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const findProductById = myProducts.products.find((product) => product.id == id);
      setProduct(findProductById);
    }, 1000);
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const calculateFinalPrice = () => {
    return quantity * parseFloat(product.price.replace('₹', ''));
  };

  const handlePlaceOrder = () => {
    if (!user) {
      alert("Please Sign in or Login to order a Product");
      navigate("/Signup");
    } else if (product.quantity === 0) {
      alert("Hey Its An Upcoming Flavour!");
      return;
    } else {
      navigate('/place-order', { state: { product, quantity, bulk, Subscription } });
    }
  };

  const handleSubscription = () => {
    if (!user) {
      alert("Please Sign in or Login to order a Product");
      navigate("/Signup");
    } else if (product.quantity === 0) {
      alert("Hey Its An Upcoming Flavour!");
      return;
    } else {
      navigate('/subscription', { state: { product } });
    }
  };

  const handleBulkOrder = () => {
    if (!user) {
      alert("Please Sign in or Login to order a Product");
      navigate("/Signup");
    } else if (product.quantity === 0) {
      alert("Hey Its An Upcoming Flavour!");
      return;
    } else {
      navigate('/bulk-order', { state: { product } });
    }
  };

  return (
    <div className="container mx-auto p-6">
      {product ? (
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5">
            <h1 className="text-3xl font-bold text-green-700 mb-4">{product.name}</h1>
            <p className="text-gray-900 text-2xl font-bold mb-4">
              Price: <s>{product.discount}</s> {product.price}
            </p>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
              <select
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="p-2 border rounded"
              >
                {[...Array(product.quantity).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
              <p className="text-2xl my-2 font-semibold mb-2">Final Price: ₹{calculateFinalPrice()}</p>
            </div>
            <h2 className="text-xl font-bold mb-2 text-green-700">Description</h2>
            <p className="my-4 text-lg text-gray-700">{product.description}</p>
            <div className='flex flex-col md:flex-row md:space-x-4 mt-6'>
              <button
                className="bg-green-500 my-2 w-full md:w-auto text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
              <button
                className="bg-green-500 my-2 w-full md:w-auto text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                onClick={handleBulkOrder}
                title='15% discount'
              >
                Bulk Order
              </button>
              <button
                onClick={handleSubscription}
                title='10% discount'
                className="bg-green-500 my-2 w-full md:w-auto text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 h-fit rounded text-center shadow">
          <Skeleton height={200} className="w-100 mb-4" />
          <Skeleton width={150} height={30} className="mb-2" />
          <Skeleton width={200} className="mb-2" />
          <Skeleton width={100} height={30} className="mb-4" />
          <Skeleton width={120} height={40} className="inline-block" />
        </div>
      )}
      {product && (
        <div className="mt-6 border flex justify-between items-center p-5 rounded-lg bg-green-100 shadow-md">
          <div>
          <h2 className="text-2xl font-bold mb-2 text-green-700">Benefits</h2>
          <ul className="list-disc text-lg list-inside mb-4">
            {product.Benefits && product.Benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-green-700">Ingredients</h2>
          <ul className="list-disc text-lg list-inside">
            {product.Ingredients && product.Ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          </div>
          <img src={benefitImg} alt=" benefit image" className='h-1/4 rounded w-1/4' />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
