import { useState, useEffect } from 'react';
import axios from 'axios';

const OrdersPage = ({userIds}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve userId from localStorage
    // const userId = localStorage.getItem('userId');

    // Check if userId is present 
    if (userIds) {
      // Fetch orders for the given userId
      axios.get(`http://localhost:8001/orders/${userIds}`)
        .then(response => {
          setOrders(response.data);
          console.log(userIds)
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
        });
    } else {
      console.error('User ID not found ');
    }
  }, [userIds]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Your Ordered Items</h1>
      <ul className="divide-y divide-gray-200">
        {orders.map(order => (
          <li key={order.order_id} className="py-6">
            <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg hover:bg-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-lg font-semibold">Order ID: {order.order_id}</p>
                  <p className="text-gray-600">Status: {order.status}</p>
                </div>
                <div className="text-gray-600">
                  <p>Name: {order.name}</p>
                  <p>Price: {order.price}</p>
                  <p>Date: {order.created_at}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
  
  
};

export default OrdersPage;
