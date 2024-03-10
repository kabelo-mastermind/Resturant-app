import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const { order_id } = useParams();
  const [orderItem, setOrderItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8001/view_order/${order_id}`)
      .then(res => {
        setOrderItem(res.data[0]);
      })
      .catch(err => console.error(err));
  }, [order_id]);

  // Function to convert ISO date format to a readable format
  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC'
    };
    return new Date(dateTimeString).toLocaleString('en-US', options);
  };

  return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4">Order Details</h1>
    {orderItem && (
        <div className="flex flex-col items-center">
            {/* <img src={`http://localhost:8001/images/${orderItem.image}`} alt={orderItem.name} className="w-32 h-32 rounded-full mb-4" /> */}
            <div className="bg-gray-200 p-4 rounded shadow-md w-3/4">
                <h2 className="text-xl font-bold mb-2">{orderItem.name}</h2>
                <p className="text-gray-600 mb-2">Category: {orderItem.category}</p>
                <p className="text-gray-600 mb-2">Quantity: {orderItem.quantity}</p>
                <p className="text-gray-600 mb-2">Amount: {orderItem.amount}</p>
                <p className="text-gray-600 mb-2">Price: R{orderItem.price}</p>
                <p className="text-gray-600 mb-2">Paid: R{orderItem.price * orderItem.amount}</p>
                <p className="text-gray-600 mb-2">Created At: {formatDateTime(orderItem.created_at)}</p>
                <p className="text-gray-600 mb-2">Updated At: {formatDateTime(orderItem.updated_at)}</p>
                <div className="flex space-x-2">
                    <Link to="/admin" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">
                        Back
                    </Link>
                    <Link to={`/edit_order/${orderItem.order_id}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    )}
</div>

  );
};

export default View;
