// import axios from "axios"
import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import Admin from "./admin";
// import Delivery from "./delivery"

import { Link } from "react-router-dom";


export default function Home({roles}) {
  useEffect(() => {
    // Check if the page has already been refreshed
    const isFirstVisit = sessionStorage.getItem("isFirstVisit");

    if (!isFirstVisit) {
      // If it's the first visit, reload the page
      sessionStorage.setItem("isFirstVisit", true);
      window.location.reload();
    }
  }, []);
  // const [role,setRole] = useState('')
  // const navigate = useNavigate()

  // axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   axios.get('http://localhost:8001/home')
  //   .then( res => {
  //     if(res.data.valid){
  //       setRole(res.data.role);
        
  //     }else{
  //       navigate('/')
  //     }
  //   })
  //   .catch(err => console.log(err))
  // }, [])
  return (
    
  <div>
<div>
  <div className="relative min-h-screen flex items-center">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url(../public/bg-img.jpg)"}}></div>
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Left Content */}
    <div className="container mx-auto px-4 flex justify-center lg:justify-start relative z-10">
      <div className="lg:w-2/3">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">Welcome to Delicious Eats</h1>
        <p className="text-xl lg:text-2xl text-white mb-8">Experience the most delicious dishes from around the world, prepared by our talented chefs with love and care.</p>
        {
                roles === "driver" || roles=== "admin" || roles=== "visitor" ?
        <Link to="/menu" className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full shadow-lg font-semibold text-lg">Order Now</Link>
        :
        <Link to="/Signup" className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full shadow-lg font-semibold text-lg">Get Started</Link>
      }
        </div>
    </div>
  </div>
</div>

    
 {/* About Us Section */}
<section className="container mx-auto px-4 py-8 text-gray-800">
  <div className="lg:w-2/3">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6">About Us</h2>
    <p className="mb-8 leading-relaxed">At Delicious Eats, we are passionate about creating exceptional dining experiences for our customers. Our restaurant combines the finest ingredients, talented chefs, and a welcoming atmosphere to ensure every visit is memorable.</p>
    <p className="leading-relaxed">We take pride in offering a diverse menu featuring dishes inspired by cuisines from around the world. Whether you're craving a comforting bowl of pasta, a juicy steak, or a refreshing salad, we have something to satisfy every palate.</p>
  </div>
</section>

{/* Contact Us Section */}
<section className="container mx-auto px-4 py-8 bg-gray-100">
  <div className="lg:w-2/3">
    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contact Us</h2>
    <p className="mb-4">Address: 1711 Block H, Soshanguve, Pretoria, South Africa</p>
    <p className="mb-4">Phone: +27 73 371 9228</p>
    <p className="mb-8">Email: info@deliciouseats.com</p>
    {/* Replace 'YOUR_GOOGLE_MAPS_EMBED_URL' with your actual Google Maps embed URL */}
    {/* <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full"
        src="https://maps.app.goo.gl/uaYfPnyWrR4LMUDj6"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div> */}
  </div>
</section>

  </div>
  );
}
