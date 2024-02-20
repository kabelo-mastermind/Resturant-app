import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
      <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Cart;