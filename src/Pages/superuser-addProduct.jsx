
import React, { useEffect, useState } from 'react';
import './CSS/Loginsignup.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const SuperuserAddproduct=()=>{
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    
    const [Name,setProductName]=useState('')
    const [Amount,setAmount]=useState('')

    const location=useLocation()
    
    
useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('http://localhost:3001/superuser-addProduct', {
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


    const handleAddproduct = () => {
        navigate('/superuser-home');
    }


    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3001/superuser-addProduct",{
                Name,Amount
            })

        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
            <h1>Welcome,{location.state? location.state.id :'' }</h1>
            <h1>Superuser</h1>
                <h1>Add Product</h1>
<form action="POST" onSubmit={submit}>
                 <div className="loginsignup-fields">
                 <input type="text" onChange={(e)=>{setProductName(e.target.value)}} placeholder="Product Name"></input>
                        <input type="number" onChange={(e)=>{setAmount(e.target.value)}} placeholder="Amount"></input>
                        <button type="submit" onClick={handleAddproduct}>Add</button>
                     <br></br>
                 </div>
</form>
            </div>
        </div>
    )
}

export default SuperuserAddproduct;


