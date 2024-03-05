// Import useState, useEffect, and Link from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MenuTable = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [remainItems, setRemainingItems] = useState(0);
//fetching menu items
  useEffect(() => {
    axios.get('http://localhost:8001/admin')
      .then(response => {
        setMenuItems(response.data);
        calculateTotalItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });
  }, [])
  //fetching orders
  useEffect(() => {
    axios.get('http://localhost:8001/orders')
      .then(response => {
        setOrders(response.data);
        calculateRemainItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching order items:', error);
      });
  }, [])
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8001/delete/${id}`)
        .then(() => {
            location.reload();
            setMenuItems(prevMenuItems => prevMenuItems.filter(item => item.id !== id));
        })
        .catch(err => console.log(err));
  };

  const calculateTotalItems = (items) => {
    const total = items.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotalItems(total);
  };
  const calculateRemainItems = (items) => {
    // const totalOrderedItems = items.reduce((acc, item) => acc + item.amount, 0);
    const remainingItems = items.reduce((acc, item) => acc + item.quantity - item.amount, 0);
    // setRemainTotalItems(totalOrderedItems);
    setRemainingItems(remainingItems);
  };
  

  // Function to convert ISO date format to a readable format
  // const formatDateTime = (dateTimeString) => {
  //   const options = {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //     timeZone: 'UTC'
  //   };
  //   return new Date(dateTimeString).toLocaleString('en-US', options);
  // };

  return (
    <div className="container mt-4">
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-2xl font-bold">Menu Items</h2>
      <div className="text-gray-500">Total Items: {totalItems}</div>
      <div className="text-gray-500">Remaining Items: {remainItems}</div>
    </div>
    <div className="flex justify-end mb-3">
      <Link to="/adding" className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add</Link>
    </div>
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Items</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price per Item</th>
          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated At</th> */}
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {menuItems.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap">R{item.price}</td>
            {/* <td className="px-6 py-4 whitespace-nowrap">{formatDateTime(item.created_at)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{formatDateTime(item.updated_at)}</td> */}
            <td className="px-6 py-4 whitespace-nowrap">
              <Link to={`/edit/${item.id}`} className="inline-block px-2 py-1 mr-2 text-xs font-semibold leading-none text-white bg-blue-500 rounded hover:bg-blue-600">Edit</Link>
              <Link to={`/view/${item.id}`} className="inline-block px-2 py-1 mr-2 text-xs font-semibold leading-none text-white bg-blue-500 rounded hover:bg-blue-600">View</Link>
              <button onClick={() => handleDelete(item.id)} className="inline-block px-2 py-1 text-xs font-semibold leading-none text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* discount timer */}
    <div>
  <h2 className="text-2xl font-bold mb-3">Add Time and Discount Percentage</h2>
  <form>
    <div className="mb-3">
      <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
      <input
        type="text"
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        id="time"
        name="time"
        placeholder="Enter time"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">Discount Percentage</label>
      <input
        type="number"
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        id="discountPercentage"
        name="discountPercentage"
        placeholder="Enter discount percentage"
      />
    </div>
    <button
      type="submit"
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </form>
</div>

    {/* Orders Table */}
    <div>
        <h2 className="text-2xl font-bold mb-3">Orders</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, index) => (
              <tr key={order.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
              <Link  className="inline-block px-2 py-1 mr-2 text-xs font-semibold leading-none text-white bg-blue-500 rounded hover:bg-blue-600">Edit</Link>
              <Link  className="inline-block px-2 py-1 mr-2 text-xs font-semibold leading-none text-white bg-blue-500 rounded hover:bg-blue-600">View</Link>
              <button className="inline-block px-2 py-1 text-xs font-semibold leading-none text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>
  </div>
  );
};

export default MenuTable;
