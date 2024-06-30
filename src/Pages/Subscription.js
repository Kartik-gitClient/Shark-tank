import React from 'react';

const Subscription = ({ onSubscribe }) => {
  const subscriptions = [
    {
      type: 'Monthly Subscription',
      price: 1800,
      discountedPrice: 1600,
      benefits: [
        'Free delivery',
        'Customizable options',
        'Exclusive discounts',
        'Priority customer support',
        'Flexible subscription management'
      ]
    },
    {
      type: 'Quarterly Subscription',
      price: 5400,
      discountedPrice: 5000,
      benefits: [
        'Free delivery',
        'Customizable options',
        'Exclusive discounts',
        'Priority customer support',
        'Flexible subscription management'
      ]
    },
    {
      type: 'Yearly Subscription',
      price: 21600,
      discountedPrice: 20000,
      benefits: [
        'Free delivery',
        'Customizable options',
        'Exclusive discounts',
        'Priority customer support',
        'Flexible subscription management'
      ]
    }
  ];

  const handleSubscribe = (subscriptionType) => {
    const UserSub=window.confirm(`Do You really Want to Subscribe ${selectedSubscription} `)
    if(UserSub){
    const selectedSubscription = subscriptions.find(sub => sub.type === subscriptionType);
    if (selectedSubscription) {
      const subscribedItem = {
        type: selectedSubscription.type,
        price: selectedSubscription.discountedPrice, 
        benefits: selectedSubscription.benefits,
        date: new Date().toISOString()
      };

      const storedSubscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
      storedSubscriptions.push(subscribedItem);
      localStorage.setItem('subscriptions', JSON.stringify(storedSubscriptions));

      alert(`Subscribed to ${subscriptionType} successfully!`);
    } else {
      alert('Subscription type not found.');
    }}
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Subscription Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptions.map((subscription, index) => (
          <div key={index} className="p-4 border border-green-300 rounded-lg shadow-md bg-green-100">
            <h2 className="text-2xl font-bold mb-2 text-green-700">{subscription.type}</h2>
            <table className="min-w-full bg-white">
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-gray-700">Price</td>
                  <td className="py-2 px-4 border-b text-gray-700">
                    <del>₹{subscription.price}</del> ₹{subscription.discountedPrice}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-gray-700">Benefits</td>
                  <td className="py-2 px-4 border-b text-gray-700">
                    <ul className="list-disc list-inside">
                      {subscription.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => handleSubscribe(subscription.type)}
              className="bg-green-500 my-5 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
