import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const [step, setStep] = React.useState(1);
  const [address, setAddress] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('cash');
  const [total, setTotal] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  const quantity = location.state?.quantity;
  const bulk = location.state?.bulk;
  const subscription = location.state?.Subscription;

  React.useEffect(() => {
    if (!product || !quantity) {
      navigate('/');
    }
  }, [product, quantity, navigate]);

  const calculateFinalPrice = () => quantity * parseFloat(product.price.replace('₹', ''));
  const calculateGst = (price) => (price * 0.18).toFixed(2);

  React.useEffect(() => {
    const totalPrice = calculateFinalPrice();
    const gst = parseFloat(calculateGst(totalPrice));
    let finalTotal = totalPrice + gst;

    if (bulk) {
      finalTotal -= totalPrice * 0.10;
    }

    if (subscription) {
      finalTotal -= totalPrice * 0.15;
    }

    setTotal(finalTotal.toFixed(2));
  }, [bulk, subscription, quantity, product]);

  const handleNextStep = () => {
    if (address && mobile && email) {
      setStep(step + 1);
    } else {
      alert('Please fill all fields.');
    }
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === 'online') {
      alert("Hey Buddy, we're Looking Forward To Increment Online Payments");
      return;
    }
    const order = { address, mobile, email, product, quantity, total };
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));
    setStep(3);
  };

  if (!product || !quantity) {
    return null;
  }

  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center bg-green-100 min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-6">
            <div className={`bg-green-500 text-xs leading-none py-1 text-center text-white rounded-full ${step >= 2 ? 'w-2/3' : 'w-1/3'} ${step === 3 && 'w-full'}`}>
              {step === 1 ? 'Step 1 of 3' : step === 2 ? 'Step 2 of 3' : 'Step 3 of 3'}
            </div>
          </div>
          {step === 1 && (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4">Enter Shipping Details</h2>
              <form className="w-full max-w-md">
                <div className="mb-4">
                  <label className="block text-gray-700">{bulk ? 'Address' : 'Address of Organisation'}</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mobile Number</label>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Next
                </button>
              </form>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex flex-col items-center w-full mb-4">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4" />
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <h4 className="text-gray-700">{product.description}</h4>
                  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 border-b text-left text-gray-700">Description</th>
                          <th className="py-2 px-4 border-b text-left text-gray-700">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b text-gray-700">Quantity</td>
                          <td className="py-2 px-4 border-b text-gray-700">{quantity}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b text-gray-700">Price</td>
                          <td className="py-2 px-4 border-b text-gray-700">₹{calculateFinalPrice()}</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b text-gray-700">GST</td>
                          <td className="py-2 px-4 border-b text-gray-700">₹{calculateGst(calculateFinalPrice())}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="cash">Cash on Delivery</option>
                  <option value="online">Online Payment</option>
                </select>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Place Order
              </button>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
              <div className="text-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 mx-20 w-20 text-green-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <img src={product.image} alt={product.name} className="w-40 mx-10 h-40 object-cover mb-4 rounded-lg shadow-lg" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-left text-gray-700">Description</th>
                        <th className="py-2 px-4 border-b text-left text-gray-700">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b text-gray-700">Quantity</td>
                        <td className="py-2 px-4 border-b text-gray-700">{quantity}</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b text-gray-700">Price</td>
                        <td className="py-2 px-4 border-b text-gray-700">₹{calculateFinalPrice()}</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b text-gray-700">GST</td>
                        <td className="py-2 px-4 border-b text-gray-700">₹{calculateGst(calculateFinalPrice())}</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b text-gray-900 font-bold">Total</td>
                        <td className="py-2 px-4 border-b text-gray-900 font-bold">₹{total}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 mt-4"
              >
                Shop More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
