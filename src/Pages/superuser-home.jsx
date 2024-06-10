
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SuperuserHome = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const location=useLocation()
  
  const handleAddProduct = () => {
    navigate("/superuser-addProduct", { state: { id: location.state ? location.state.id : '' } });
  }
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('http://localhost:3001/superuser-home', {
        
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
      <h1>Superuser</h1>
      <button onClick={handleAddProduct}>Add Product</button>

    </div>
  );
};

export default SuperuserHome;

