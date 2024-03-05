import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Admin from "./admin";
import Delivery from "./delivery"


export default function Home() {
  const [role,setRole] = useState('')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8001/home')
    .then( res => {
      if(res.data.valid){
        setRole(res.data.role);
        
      }else{
        navigate('/')
      }
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
        <h2>welcome to the resturant {role}</h2>
        {role === "admin" && <Admin />}
        {/* {role === "visitor" && <Home />} */}
        {role === "driver" && <Delivery />}
    </div>
  )
}
