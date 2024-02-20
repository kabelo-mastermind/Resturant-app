import Header from "./assets/components/Header"
import { Route, Routes } from "react-router-dom"
import Home from './assets/pages/Home';
import Menu from './assets/pages/Menu';
import Cart from './assets/pages/Cart';
import Signup from './assets/pages/Signup';
import Login from './assets/pages/Login';
import ForgotPassword from "./assets/pages/ForgotPassword";
import Footer from './assets/components/Footer.jsx'

function App() {

  return (
    <div className="mx-w-4 mx-auto">
      <Header />
      <div className="max-w-7xl mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot password" element={<ForgotPassword/>} />

        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
