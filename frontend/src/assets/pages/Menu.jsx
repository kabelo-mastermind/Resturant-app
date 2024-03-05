import { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = ({handleClick, warning}) => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8001/admin')
      .then(res => {
        setMenuItems(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter menu items based on search query
  const filteredMenuItems = menuItems.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    
    <div className="container mx-auto py-8">
        {/* warning notification */}
        {warning && (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Warning!</strong>
    <span className="block sm:inline"> Item already exists in the cart.</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        className="fill-current h-6 w-6 text-red-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path
          fillRule="evenodd"
          d="M14.354 5.646a.5.5 0 0 1 0 .708L10.707 10l3.647 3.646a.5.5 0 0 1-.708.708L10 10.707l-3.646 3.647a.5.5 0 1 1-.708-.708L9.293 10 5.646 6.354a.5.5 0 0 1 .708-.708L10 9.293l3.646-3.647a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </span>
  </div>
)}
        {/* ends here */}
      <h1 className="text-3xl font-bold mb-4">Menu</h1>
      <input
        type="text"
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
        placeholder="Search Menu"
        value={searchQuery}
        onChange={handleSearch}
        />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMenuItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img src={`http://localhost:8001/images/${item.image}`} alt={item.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-500 mb-2">{item.category}</p>
            <p className="text-gray-500 mb-4">Price: {item.price}</p>
            <button onClick={() =>handleClick(item)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
