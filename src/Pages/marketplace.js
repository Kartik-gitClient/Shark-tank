import React from 'react';
import  fb from "../Assets/fw.jpg";
import t from "../Assets/t.png";
import i from "../Assets/i.png";
import w from "../Assets/w.png";


const socialMedia = [
  { name: 'Facebook', link: 'https://facebook.com', logo: fb, color: 'bg-blue-500' },
  { name: 'Instagram', link: 'https://instagram.com', logo: i, color: 'bg-gradient-to-r from-purple-400 to-pink-500' },
  { name: 'Telegram', link: 'https://telegram.org', logo: t, color: 'bg-indigo-500' },
  { name: 'WhatsApp', link: 'https://whatsapp.com', logo: w, color: 'bg-green-500' },
];

const Marketplace = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-amber-700">Connect and Browse our Marketplace on Social Media</h1>
      <div className="space-y-10">
        {socialMedia.map((platform, index) => (
          <div key={platform.name} className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`w-1/2 p-6 rounded-lg shadow-md ${platform.color}`}>
              <h2 className="text-2xl font-semibold mb-4 text-white">{platform.name}</h2>
              <p className="text-gray-100 mb-4">Follow us on {platform.name} to stay updated with our latest news and offers.</p>
              <a href={platform.link} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Visit</a>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={platform.logo} alt={platform.name} className="w-40 h-40 rounded-lg shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

