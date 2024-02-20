import React from 'react';


const Home = () => {
  return (
    <div>
          {/* Hero section */}
      <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Welcome to Our Restaurant</h1>
            <p className="mt-3 text-lg text-gray-300 sm:mt-5 sm:text-xl md:mt-5 md:text-2xl">Experience the best dining experience with us.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Restaurant</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Your content here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Special Offer</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta eleifend felis, at pretium velit fermentum in. Integer dignissim sit amet odio vitae tempus.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <p className="text-gray-600">Check out our delicious menu and find your favorite dishes.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Reservation</h2>
            <p className="text-gray-600">Book a table at our restaurant for your special occasions or gatherings.</p>
          </div>
        </div>
      </div>
        {/* About section */}
        <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec est sit amet odio eleifend varius. Vivamus varius augue ut fermentum consectetur. Nullam fermentum nunc eget enim feugiat, vitae blandit mauris tincidunt. Integer ut diam eget leo elementum dapibus. Vestibulum facilisis accumsan erat sit amet commodo. Proin pretium justo a nisi posuere, a faucibus nisi fermentum. Sed in arcu vestibulum, vestibulum turpis non, accumsan purus. 
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Aliquam erat volutpat. Cras condimentum nisi at velit condimentum, non sodales arcu aliquet. Nulla facilisi. Morbi in dui a metus rutrum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec hendrerit, velit nec facilisis malesuada, erat leo tincidunt justo, sit amet ultrices justo velit vel mi. Vestibulum vel diam sit amet arcu ullamcorper laoreet nec vel elit. In lobortis aliquam est nec interdum.
          </p>
        </div>
      </div>
      {/* How it works section */}
      <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Browse Menu</h3>
                <p className="text-gray-600">Discover our wide range of delicious dishes.</p>
              </div>
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Place Order</h3>
                <p className="text-gray-600">Select your favorite items and place your order hassle-free.</p>
              </div>
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Enjoy!</h3>
                <p className="text-gray-600">Sit back, relax, and enjoy your meal with friends and family.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
      {/* Specials section */}
      <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Specials items go here */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Special Event 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Special Event 2</h3>
              <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Special Event 3</h3>
              <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
