import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const PaymentPage = ({userIds}) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Here you can implement the logic to process the payment
    // For now, let's just show a success message
    setPaymentSuccess(true);
    const paymentData = {
      userIds: userIds,
      paymentMethod: paymentMethod,
      deliveryAddress: deliveryAddress,
      phoneNumber: phoneNumber
    };

    axios.post("http://localhost:8001/payment", paymentData)
      .then((response) => {
        console.log("Payment successful:", response.data);
        setPaymentSuccess(true);
      })
      .catch((error) => {
        console.error("Error processing payment:", error);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-8">Choose Payment Method</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-green-600"
              name="paymentMethod"
              value="cash"
              onChange={() => setPaymentMethod("cash")}
            />
            <span className="ml-2 text-sm">Cash</span>
          </label>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-green-600"
              name="paymentMethod"
              value="card"
              onChange={() => setPaymentMethod("card")}
            />
            <span className="ml-2 text-sm">Card</span>
          </label>
        </div>
      </div>
      <div className="mt-8">
        <label className="block mb-2 text-sm font-semibold">Phone Number</label>
        <input
          type="text"
          placeholder="+27"
          className="w-full px-4 py-2 mb-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label className="block mb-2 text-sm font-semibold">Delivery Address</label>
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
        />
        {paymentMethod === "card" && (
          <div>
            <label className="block mb-2 text-sm font-semibold">Card Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 mb-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              // value={cardNumber}
              // onChange={(e) => setCardNumber(e.target.value)}
            />
            <label className="block mb-2 text-sm font-semibold">Expiry Date</label>
            <input
              type="text"
              className="w-full px-4 py-2 mb-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              // value={expiryDate}
              // onChange={(e) => setExpiryDate(e.target.value)}
            />
            <label className="block mb-2 text-sm font-semibold">CVV</label>
            <input
              type="text"
              className="w-full px-4 py-2 mb-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              // value={cvv}
              // onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        )}
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
      {paymentSuccess && (
        <div className="mt-8 text-green-500 font-semibold">
          Payment Successful!
          <Link to="/menu" className="text-blue-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
