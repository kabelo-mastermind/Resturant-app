import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange, userIds}) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const handlePrice = ()=>{
    let ans = 0;
    cart.map((item)=>(
        ans += item.amount * item.price
    ))
    setPrice(ans);
}

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id); // Filter out the item to remove
    setCart(updatedCart); // Update the cart state
    // Recalculate the total price based on the updated cart
    let totalPrice = 0;
    updatedCart.forEach((item) => {
      totalPrice += item.price;
    });
    setPrice(totalPrice); // Update the total price
  };

  //to database
  const handlePlaceOrder = () => {
  // Construct the data object to send to the backend
  const requestData = {
    userIds: userIds, // Include the userIds data
    cart: cart // Include the cart data
  };

  axios.post("http://localhost:8001/store-cart", requestData)
    .then((response) => {
      console.log("Order placed successfully:", response.data);
      setCart([]);
      // Navigate to the payment page
      navigate('./payment');
    })
    .catch((error) => {
      console.error("Error placing order:", error);
    });
};

  
  useEffect(()=>{
    handlePrice();
})
  return (
    <div className="container mx-auto py-8">
      {cart.map((item) => (
        <div
          className="flex items-center justify-between border-b border-gray-300 py-4"
          key={item.id}
        >
          <div className="flex items-center">
            <div className="cart-img mr-4">
              <img
                src={`http://localhost:8001/images/${item.image}`}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
            </div>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500">R{item.price} each</p>
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={()=>handleChange(item, +1)} className="bg-blue-500 text-white px-3 py-1 rounded-l focus:outline-none">
              +
            </button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded focus:outline-none">
            {item.amount}
            </button>
            <button onClick={()=>handleChange(item, -1)} className="bg-blue-500 text-white px-3 py-1 rounded-r focus:outline-none">
              -
            </button>
            <button onClick={()=>handleRemove(item.id)} className="bg-red-500 text-white px-3 py-1 ml-4 rounded focus:outline-none">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between mt-4">
        <div className="font-semibold">Total price: R{price}</div>
        <button
          onClick={handlePlaceOrder}
          className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
