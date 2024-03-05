import Header from "./assets/components/Header"
import { Route, Routes } from "react-router-dom"
import { useState } from "react";
import Home from './assets/pages/Home';
import Menu from './assets/pages/Menu';
import Cart from './assets/pages/Cart';
import Signup from './assets/pages/Signup';
import Login from './assets/pages/Login';
import Admin from "./assets/pages/admin";
import View from "./assets/pages/View";
import Adding from "./assets/pages/adding";
import Edit from "./assets/pages/Edit";
import Footer from './assets/components/Footer';
import Payment from './assets/pages/payment';

function App() {
const [cart, setCart] = useState([]);
const [warning, setWarning] = useState(false);

const handleClick = (item) =>{
  // console.log(item);
  let isPresent = false;
  cart.forEach((product)=>{
    if (item.id ===product.id)
    isPresent = true;
  })
  if (isPresent){
    setWarning(true);
    setTimeout( ()=>{
      setWarning(false);
    }, 2000);
  return;
  }
setCart([...cart, item]);
}
const handleChange = (item, d) =>{
  let ind = -1;
  cart.forEach((data, index)=>{
    if (data.id === item.id)
      ind = index;
  });
  const tempArr = cart;
  tempArr[ind].amount += d;
  
  if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
  setCart([...tempArr])
}

  return (
    <div className="mx-w-4 mx-auto">
      <Header size={cart.length}/>
      <div className="max-w-7xl mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu handleClick={handleClick} warning={warning}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/Cart/payment" element={<Payment/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path='/adding' element={<Adding/>} />
          <Route path='/View/:id' element={<View />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
