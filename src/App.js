
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SuperuserAddProduct from "./Pages/superuser-addProduct.jsx";
import SuperuserHome from "./Pages/superuser-home.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx"; 
import Login from "./Pages/Login.jsx";
import Home from "./Pages/home.jsx"; 


import Navbar from './Components/Navbar/Navbar.jsx';

function App() {

  return (
    <div className='homepage'>
     <Router>
            <Navbar /> 
            
              <Routes>
                <Route path="/login-signup" element={<LoginSignup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/superuser-home" element={<SuperuserHome/>}/>
                <Route path="/superuser-addProduct" element={<SuperuserAddProduct/>}/>
            </Routes>
        </Router> 
      
        </div>
  );
}


export default App;
