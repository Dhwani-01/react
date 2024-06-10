// import React from "react";
// import './CSS/Loginsignup.css'
// // import { useEffect } from "react";
// import { useLocation } from 'react-router-dom';
// // import { useNavigate } from "react-router-dom";

// const Home=()=>{
    
//     const location=useLocation()
//     // const navigate = useNavigate();

//     // useEffect(()=>{
//     //     let isAuth=JSON.parse(localStorage.getItem('user'));
//     //     if(isAuth && isAuth!==null){
//     //         navigate("/");
//     //     }
//     // },[]);

//     return (
//         <div className="loginsignup">
           
//             <h1>Hello {location.state? location.state.id :'' } and welcome to the home</h1>

            
//         </div>
//     )
// }

// export default Home;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const location=useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('http://localhost:3001/home', {
      })
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        alert('Error fetching user data');
        navigate('/login'); // redirect to login if token is invalid or expired
      });
    }
  }, [navigate]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome,{location.state? location.state.id :'' }</h1>
      {/* Render other user data */}
    </div>
  );
};

export default Home;


