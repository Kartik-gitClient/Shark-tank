import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import myProducts from '../data/db.json'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import custom from "../Assets/custom.jpg"
import custom2 from "../Assets/custom2.jpg"

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drinkIdea, setDrinkIdea] = useState('');

  const active = true

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Detox Drink Idea Submitted:', drinkIdea);
    alert("Detox idea Successfully Submitted", drinkIdea);

    setDrinkIdea('');
  };

  useEffect(() => {
    // fetch('http://localhost:8000/products')
    //   .then(response => response.json())
    //   .then(data => {
    //     setProducts(data);
    //     setLoading(false);
    //   })
    //   .catch(error => console.error('Error fetching products:', error));
    setLoading(true)
    setTimeout(() => {
      setProducts(myProducts.products)
      setLoading(false)
    }, 2000)
    // console.log("products", myProducts.products)
    // console.log("products", 4)
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 text-center rounded hover: shadow mb-6">
        <h1 className="text-2xl  font-bold mb-4">Doctors Day Special 25% Discount</h1>
        <p>Enjoy a special discount on our detox drinks for a limited time!</p>
      </div>
      <h2 className="text-3xl my-5 font-bold mb-4">Why CleansWave's Detox stands out in the market</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="bg-green-500 hover:blue-500 p-6 rounded shadow text-white">
          <h3 className="text-2xl font-semibold mb-2">Natural Ingredients</h3>
          <p>Our detox drinks are made from natural ingredients ensuring you get the best nutrition.</p>
        </div>
        <div className="bg-green-500 p-6 rounded shadow text-white">
          <h3 className="text-2xl font-semibold mb-2">Multiple Uses</h3>
          <p>Whether you're looking to cleanse your system or just need a refreshing drink, our detox drinks are perfect for any occasion.</p>
        </div>
        <div className="bg-green-500 p-6 rounded shadow text-white">
          <h3 className="text-2xl font-semibold mb-2">Versatility</h3>
          <p>Perfect for any time of day, our detox drinks are versatile and delicious.</p>
        </div>
        <div className="bg-green-500 p-6 rounded shadow text-white">
          <h3 className="text-2xl font-semibold mb-2">Cost Effective</h3>
          <p>Enjoy the benefits of our detox drinks without breaking the bank.</p>
        </div>
      </div>


      <h2 className="text-3xl font-bold mb-4">Products</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((_, i) =>
            <div className="bg-white p-6 h-fit rounded text-center shadow" key={i}>
              <Skeleton height={200} className="w-100 mb-4" />
              <Skeleton width={150} height={30} className="mb-2" />
              <Skeleton width={200} className="mb-2" />
              <Skeleton width={100} height={30} className="mb-4" />
              <Skeleton width={120} height={40} className="inline-block" />
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white p-6 h-fit rounded text-center shadow">
              <img src={product.image} alt={product.name} className="w-100  object-cover mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.shortDescription}</p>
              <p className="text-gray-900 text-xl font-bold mb-4"><s>{product.discount}</s>{product.price}</p>
              <Link to={`/product/${product.id}`} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
      <h2 className="text-3xl font-bold my-5 mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-500 p-6 rounded shadow text-white">
          <h3 className="text-2xl font-semibold mb-2">High Nutritional Value</h3>
          <p className='text-sm'>Packed with vitamins and minerals, our detox drinks provide a nutritional boost.</p>
        </div>
        <div className="bg-green-500 p-6 rounded shadow text-white">
          <h3 className="text-2xl font-semibold mb-2">Refreshing and Tasty</h3>
          <p className='text-sm'>Enjoy the refreshing and delicious taste of our detox drinks. Start your day with these refreshing drinks!</p>
        </div>
        <div className="bg-green-500 p-6 rounded shadow text-white">
          <h3 className="text-2xl font-semibold mb-2">Customizable</h3>
          <p className='text-sm'>Adjust the flavors to your liking and enjoy a personalized detox experience. with nature's love</p>
        </div>
        <div className="bg-green-500 p-6 rounded shadow text-white">
          <h3 className="text-2xl font-semibold mb-2">Eco-Friendly Packaging</h3>
          <p className='text-sm'>We use sustainable packaging to help reduce our environmental footprint. We are sustanaible</p>
        </div>
      </div>


      <h1 className='text-3xl text-center font-bold'>Have Your Own idea for a Detox ? Describe the detox here for a Customizable Detox</h1>
      <div className='flex justify-between my-4  items-center'>
        <img src={custom} alt="customimage" className='w-1/3 rounded-lg'/>
        <div className="max-w-sm mx-auto bg-white shadow-lg w-1/2 h-full rounded-lg  p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Customizable Drink</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="drinkIdea" className="block h-1/3 text-gray-700 mb-2">
              Detox Drink Idea
            </label>
            <div>
              <textarea
                id="drinkIdea"
                className="w-full p-2 min-h-2/3 border border-gray-300 rounded-md mb-4"
                rows="4"
                value={drinkIdea}
                onChange={(e) => setDrinkIdea(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>

        </div>
        <img src={custom2} alt="customimage" className='w-1/3 rounded-lg'/>
      </div>

    </div>
  );
};

export default Store;
