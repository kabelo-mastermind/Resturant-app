import React, { useState } from 'react';

const Menu = () => {
    const [cart, setCart] = useState([]);
  
    // Dummy food data for demonstration
    const foodItems = [
        { id: 1, name: 'Pizza', price: 10, image: 'https://i0.wp.com/www.youtubers.cooking/wp-content/uploads/2022/04/pizza-youtubers-cooking.jpg?w=1280&ssl=1' },
        { id: 2, name: 'Burger', price: 8, image: 'https://cdn.foodloversmarket.co.za/wp-content/uploads/20231212141812/ultimate-burger-with-crispy-onion-rings-chips-jpg-webp.webp' },
        { id: 3, name: 'Salad', price: 6, image: 'https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=1xw:0.8435812837432514xh;center,top&resize=1200:*' },
        { id: 4, name: 'Sushi', price: 12, image: 'https://www.pressurecookrecipes.com/wp-content/uploads/2021/02/california-roll.webp' },
        { id: 5, name: 'Steak', price: 15, image: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/09/How-to-cook-the-perfect-steak-tall-FS.webp' },
        { id: 6, name: 'Pasta', price: 9, image: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/10/roasted-tomato-sauce-portion-800x1200.jpg' },
        { id: 7, name: 'Tacos', price: 7, image: 'https://tatyanaseverydayfood.com/wp-content/uploads/2023/05/The-Best-Birria-Tacos-Recipe-2.jpg' },
        { id: 8, name: 'Sushi Rolls', price: 13, image: 'https://www.sugarsaltmagic.com/wp-content/uploads/2023/01/Chinese-Spring-Rolls-4FEAT-500x500.jpg' },
         // Add more food items as needed
    ];
  
    // Function to add item to cart
    const addToCart = (item) => {
      setCart([...cart, item]);
    };

    return (
        
        <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">Price: Zar {item.price}.00</p>
                  <button onClick={() => addToCart(item)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Menu;
