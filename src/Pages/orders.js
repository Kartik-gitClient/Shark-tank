import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [bulkOrders, setBulkOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const date = new Date().toISOString().split('T')[0]

  useEffect(() => {
    setTimeout(() => {
      const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      setOrders(storedOrders);

      const storedBulkOrders = JSON.parse(localStorage.getItem('bulkOrders')) || [];
      setBulkOrders(storedBulkOrders);

      const storedSubscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
      setSubscriptions(storedSubscriptions);
    }, 1500);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className="mb-6 p-4 border border-green-300 rounded shadow-sm bg-green-100">
              <h2 className="text-2xl font-bold mb-2 text-green-700">{order.product.name}</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left text-gray-700">Product Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Quantity</td>
                    <td className="py-2 px-4 border-b text-gray-700">{order.product.quantity}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Final Price</td>
                    <td className="py-2 px-4 border-b text-gray-700">₹{order.totalWithGst}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Address</td>
                    <td className="py-2 px-4 border-b text-gray-700">{order.address}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Address</td>
                    <td className="py-2 px-4 border-b text-gray-700">{ date }</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <img src={order.product.image} alt={order.product.name} className="w-full h-40 object-cover mb-4 rounded" />
              </div>
            </div>
          ))
        ) : (
          <>
            {orders.length === 0 && bulkOrders.length === 0 && subscriptions.length === 0 ? (
              Array.from({ length: 9 }, (_, i) => (
                <div className="mb-6 p-4 border rounded shadow-sm animate-pulse" key={i}>
                  <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                  <div className="w-40 h-40 bg-gray-300 rounded mb-4"></div>
                </div>
              ))
            ) : (
              <h1 className="text-2xl">
              <pre>No Orders Placed Yet ;)</pre>
            </h1>
            )}
          </>
        )}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-6">Bulk Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bulkOrders.length > 0 ? (
          bulkOrders.map((order, index) => (
            <div key={index} className="mb-6 p-4 border border-green-300 rounded shadow-sm bg-green-100">
              <h2 className="text-2xl font-bold mb-2 text-green-700">{order.productName}</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left text-gray-700">Bulk Order Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Quantity (in boxes)</td>
                    <td className="py-2 px-4 border-b text-gray-700">{order.quantity}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Address</td>
                    <td className="py-2 px-4 border-b text-gray-700">{order.address}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Sales Executive Mobile No</td>
                    <td className="py-2 px-4 border-b text-gray-700">{order.salesExecutive}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Customization</td>
                    <td className="py-2 px-4 border-b text-gray-700">{order.customization || 'None'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Date</td>
                    <td className="py-2 px-4 border-b text-gray-700">{new Date(order.date).toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <h1 className="text-2xl">
            <pre>No Bulk Orders Placed Yet ;)</pre>
          </h1>
        )}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-6">Subscriptions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.length > 0 ? (
          subscriptions.map((subscription, index) => (
            <div key={index} className="mb-6 p-4 border border-green-300 rounded shadow-sm bg-green-100">
              <h2 className="text-2xl font-bold mb-2 text-green-700">{subscription.productName}</h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left text-gray-700">Subscription Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Type</td>
                    <td className="py-2 px-4 border-b text-gray-700">{subscription.type}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Price</td>
                    <td className="py-2 px-4 border-b text-gray-700">₹{subscription.price}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Benefits</td>
                    <td className="py-2 px-4 border-b text-gray-700">
                      <ul>
                        {subscription.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-gray-700">Date</td>
                    <td className="py-2 px-4 border-b text-gray-700">{new Date(subscription.date).toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <h1 className="text-2xl">
            <pre>No Subscriptions Placed Yet ;)</pre>
          </h1>
        )}
      </div>
    </>
  );
};

export default Orders;
