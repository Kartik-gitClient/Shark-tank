import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import myProducts from '../data/db.json';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import custom from "../Assets/custom.jpg";
import custom2 from "../Assets/custom2.jpg";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drinkIdea, setDrinkIdea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your custom drink idea has been submitted! Our baristas will craft it soon.", drinkIdea);
    setDrinkIdea('');
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(myProducts.products);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto p-6 bg-amber-50">
      {/* Hero Banner */}
      <div className="bg-amber-800 p-6 text-center rounded-lg shadow-lg mb-6 border-2 border-amber-200">
        <h1 className="text-3xl font-bold mb-4 text-amber-100 font-serif">Barista's Special: 25% Off All Coffees</h1>
        <p className="text-amber-200">Savor the richness of our handcrafted brews for a limited time!</p>
      </div>

      {/* Café Highlights */}
      <h2 className="text-3xl my-5 font-bold mb-4 text-amber-900 font-serif">Why Our Café Stands Out</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          {
            title: "Artisan Roasts",
            desc: "Our beans are ethically sourced and roasted in-house for unparalleled flavor."
          },
          {
            title: "Cozy Ambiance",
            desc: "Relax in our warm, inviting space designed for coffee lovers."
          },
          {
            title: "All-Day Menu",
            desc: "From morning espressos to evening lattes, we’ve got you covered."
          },
          {
            title: "Fair Prices",
            desc: "Premium quality without the premium price tag."
          }
        ].map((item, index) => (
          <div key={index} className="bg-amber-700 hover:bg-amber-600 p-6 rounded-lg shadow-md text-amber-50 transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <h2 className="text-3xl font-bold mb-4 text-amber-900 font-serif">Our Menu</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill().map((_, i) => (
            <div className="bg-white p-6 rounded-lg shadow-md" key={i}>
              <Skeleton height={200} className="w-full mb-4 rounded-lg" />
              <Skeleton width={150} height={30} className="mb-2" />
              <Skeleton width={200} className="mb-2" />
              <Skeleton width={100} height={30} className="mb-4" />
              <Skeleton width={120} height={40} className="inline-block" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-amber-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover mb-4 rounded-lg" 
              />
              <h3 className="text-2xl font-semibold mb-2 text-amber-900">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.shortDescription}</p>
              <p className="text-amber-800 text-xl font-bold mb-4">
                <s className="text-gray-400 mr-2">{product.discount}</s>
                {product.price}
              </p>
              <Link 
                to={`/product/${product.id}`} 
                className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-lg transition duration-300 inline-block"
              >
                Order Now
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Café Features */}
      <h2 className="text-3xl font-bold my-8 text-amber-900 font-serif">Café Perks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          {
            title: "Single-Origin Beans",
            desc: "Directly traded from sustainable farms for exceptional quality."
          },
          {
            title: "Signature Blends",
            desc: "Unique flavor profiles crafted by our master roasters."
          },
          {
            title: "Custom Creations",
            desc: "Tailor your drink exactly to your taste preferences."
          },
          {
            title: "Eco-Conscious",
            desc: "Compostable cups and zero-waste practices."
          }
        ].map((item, index) => (
          <div key={index} className="bg-amber-700 p-6 rounded-lg shadow-md text-amber-50">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Custom Drink Section */}
      <div className="bg-amber-100 border-2 border-amber-200 rounded-lg p-8 mb-8 shadow-md">
        <h1 className="text-3xl text-center font-bold text-amber-900 font-serif mb-6">Create Your Signature Drink</h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <img src={custom} alt="Coffee customization" className="w-full md:w-1/3 rounded-lg shadow-md" />
          
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
            <h2 className="text-xl font-bold text-amber-800 mb-4">Brew Your Imagination</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="drinkIdea" className="block text-amber-700 mb-2">
                Describe your dream drink:
              </label>
              <textarea
                id="drinkIdea"
                className="w-full p-3 border border-amber-300 rounded-lg mb-4 focus:ring-2 focus:ring-amber-500"
                rows="4"
                placeholder="e.g., 'Iced vanilla latte with caramel drizzle...'"
                value={drinkIdea}
                onChange={(e) => setDrinkIdea(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Submit to Our Barista
              </button>
            </form>
          </div>
          
          <img src={custom2} alt="Coffee art" className="w-full md:w-1/3 rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Store;