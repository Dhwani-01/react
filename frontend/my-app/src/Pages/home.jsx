// // // import React from "react";
// // // import './CSS/Loginsignup.css'
// // // // import { useEffect } from "react";
// // // import { useLocation } from 'react-router-dom';
// // // // import { useNavigate } from "react-router-dom";

// // // const Home=()=>{
    
// // //     const location=useLocation()
// // //     // const navigate = useNavigate();

// // //     // useEffect(()=>{
// // //     //     let isAuth=JSON.parse(localStorage.getItem('user'));
// // //     //     if(isAuth && isAuth!==null){
// // //     //         navigate("/");
// // //     //     }
// // //     // },[]);

// // //     return (
// // //         <div className="loginsignup">
           
// // //             <h1>Hello {location.state? location.state.id :'' } and welcome to the home</h1>

            
// // //         </div>
// // //     )
// // // }

// // // export default Home;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import { useLocation } from 'react-router-dom';


// // const Home = () => {
// //   const [userData, setUserData] = useState(null);
// //   const navigate = useNavigate();
// //   const location=useLocation()
// //   const [products, setProducts] = useState([]); 

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');

// //     if (!token) {
// //       navigate('/login');
// //     } else {
// //       axios.get('http://localhost:3001/home', {
// //         headers: { Authorization: `Bearer ${token}` }
// //       })
// //       .then(response => {
// //         setUserData(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching user data:', error);
// //         alert('Error fetching user data');
// //         navigate('/login'); // redirect to login if token is invalid or expired
// //       });
// //     }
// //     fetch('http://localhost:3001/getProductlist')
// //     .then(response => response.json()) 
// //       .then(data => setProducts(data)) 
// //       .catch(err => console.error("Error fetching data: ", err)); 
// //   }, [navigate]);



// // const addToCart = (product) => {
// //   const token = localStorage.getItem('token');
// //   axios.post('http://localhost:3001/addToCart', { productId: product._id }, {
// //     headers: { Authorization: `Bearer ${token}` }
// //   })
// //   .then(response => {
// //     setCart([...cart, product]);
// //   })
// //   .catch(error => {
// //     console.error('Error adding product to cart:', error);
// //   });
// // };


// //   if (!userData) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     // <div>
// //     //   <h1>Welcome,{location.state? location.state.id :'' }</h1>
// //     //   {/* Render other user data */}
// //     //   <ul> 
// //     //     {products.map(product => ( 
// //     //       <li key={product._id}>{product.Name}: {product.Amount} <button>Add to cart</button></li> 
// //     //     ))} 
// //     //   </ul>
      
      
// //     // </div>
// //     <div>
// //       <h1>Welcome, {location.state ? location.state.id : ''}</h1>
// //       {/* Render other user data */}
// //       <ul>
// //         {products.map(product => (
// //           <li key={product._id}>
// //             {product.name}: {product.amount}
// //             <button onClick={() => addToCart(product)}>Add to cart</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <h2>Your Cart</h2>
// //       <ul>
// //         {cart.map((item, index) => (
// //           <li key={index}>{item.name}: {item.amount}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Home;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import { useLocation } from 'react-router-dom';

// // const Home = () => {
// //   const [userData, setUserData] = useState(null);
// //   const [cart, setCart] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   useEffect(() => {
// //     const token = localStorage.getItem('token');

// //     if (!token) {
// //       navigate('/login');
// //     } else {
// //       axios.get('http://localhost:3001/home', {
// //         headers: { Authorization: `Bearer ${token}` }
// //       })
// //       .then(response => {
// //         setUserData(response.data);
// //         return axios.get('http://localhost:3001/cart', {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //       })
// //       .then(response => {
// //         setCart(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching data:', error);
// //         alert('Error fetching data');
// //         navigate('/login'); // redirect to login if token is invalid or expired
// //       });

// //       fetch('http://localhost:3001/getProductlist')
// //         .then(response => response.json())
// //         .then(data => setProducts(data))
// //         .catch(err => console.error("Error fetching data: ", err));
// //     }
// //   }, [navigate]);

// //   const addToCart = (product) => {
// //     const token = localStorage.getItem('token');
// //     axios.post('http://localhost:3001/cart', { productId: product._id }, {
// //       headers: { Authorization: `Bearer ${token}` }
// //     })
// //     .then(response => {
// //       setCart([...cart, product]);
// //     })
// //     .catch(error => {
// //       console.error('Error adding product to cart:', error);
// //     });
// //   };

// //   if (!userData) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>Welcome, {location.state ? location.state.id : ''}</h1>
// //       <ul>
// //         {products.map(product => (
// //           <li key={product._id}>
// //             {product.Name}: {product.Amount}
// //             <button onClick={() => addToCart(product)}>Add to cart</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <h2>Your Cart</h2>
// //       <ul>
// //         {cart.map((item, index) => (
// //           <li key={index}>{item.Name}: {item.Amount}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// const Home = () => {
//   const [userData, setUserData] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//       navigate('/login');
//     } else {
//       axios.get('http://localhost:3001/home', {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(response => {
//         setUserData(response.data);
//         return axios.get('http://localhost:3001/cart', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       })
//       .then(response => {
//         setCart(response.data); // Assuming response.data is an array from server
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         alert('Error fetching data');
//         navigate('/login'); // redirect to login if token is invalid or expired
//       });

//       fetch('http://localhost:3001/getProductlist')
//         .then(response => response.json())
//         .then(data => setProducts(data))
//         .catch(err => console.error("Error fetching data: ", err));
//     }
//   }, [navigate]);

//   const addToCart = (product) => {
//     const token = localStorage.getItem('token');
//     axios.post('http://localhost:3001/cart', { productId: product._id }, {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(response => {
//       setCart([...cart, product]);
//     })
//     .catch(error => {
//       console.error('Error adding product to cart:', error);
//     });
//   };

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {location.state ? location.state.id : ''}</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product._id}>
//             {product.Name}: {product.Amount}
//             <button onClick={() => addToCart(product)}>Add to cart</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Your Cart</h2>
//       <ul>
//         {Array.isArray(cart) && cart.length > 0 ? (
//           cart.map((item, index) => (
//             <li key={index}>{item.Name}: {item.Amount}</li>
//           ))
//         ) : (
//           <li>Your cart is empty</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import './CSS/home.css';


// const Home = () => {
//   const [userData, setUserData] = useState(null);
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//       navigate('/login');
//     } else {
//       axios.get('http://localhost:3001/home', {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(response => {
//         setUserData(response.data);
//         // return axios.get('http://localhost:3001/cart', {
//         //   headers: { Authorization: `Bearer ${token}` }
//         // });
//       })
//       // .then(response => {
//       //   setCart(response.data);
//       // })
//       // .catch(error => {
//       //   console.error('Error fetching data:', error);
//       //   alert('Error fetching data');
//       //   navigate('/login');
//       // });

//       fetch('http://localhost:3001/getProductlist')
//         .then(response => response.json())
//         .then(data => setProducts(data))
//         .catch(err => console.error("Error fetching data: ", err));
//     }

    
//   }, [navigate]);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);


//   const addToCart = (product) => {
//     // const token = localStorage.getItem('token');
//     const isProduct=cart.find((cart)=>cart._id===product._id);
//     if(isProduct){
//       setCart(
//         cart.map((cart)=>
//         cart._id===product._id?{...cart,quantity:cart.quantity+1}:cart)

//       )
//     }else{
//        setCart([...cart,{...product,quantity:1}]);
     
//     }
    
//   };

//   const handleImageClick = (productId) => {
//     navigate(`/image/${productId}`, { state: { productId: productId } });
//   };

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <h1>Welcome, {location.state ? location.state.id : ''}</h1>
//       <div className="product-list">
//         {products.map(product => (
//           <div key={product._id} className="product-card">
            
//             <img
//               src={`http://localhost:3001/image/${product._id}`}
//               alt={product.Name}
//               className="product-image"
//               onClick={() => handleImageClick(product._id)}
//             />
//             <div className="product-details">
//               <h2 className="product-name">{product.Name}</h2>
//               <p className="product-amount">${product.Amount}</p>
//               <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <h2>Your Cart</h2>
//       <ul className="cart-list">
//         {Array.isArray(cart) && cart.length > 0 ? (
//           cart.map((item, index) => (
//             <li key={index} className="cart-item">
//               <span>{item.Name}</span>: <span>${item.Amount}</span>
//             </li>
//           ))
//         ) : (
//           <li>Your cart is empty</li>
//         )}
//       </ul> */}
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './CSS/home.css';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      axios.get('http://localhost:3001/home', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setUserData(response.data);
        console.log(response.data)
        return axios.get(`http://localhost:3001/cart/${response.data.id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
      })
      // .then(response => {
      //   setCart(response.data.products);
      // })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Error fetching data');
        navigate('/login');
      });

      fetch('http://localhost:3001/getProductlist')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(err => console.error("Error fetching data: ", err));
    }
  }, [navigate]);

  const addToCart = (product) => {
    const token = localStorage.getItem('token');
    const userId = userData.id;

    axios.post('http://localhost:3001/cart/addToCart', {
      userId: userId,
      productId: product._id
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setCart([...cart, response.data.products]);
    })
    .catch(error => {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart');
    });
  };

  const handleImageClick = (productId) => {
    navigate(`/image/${productId}`, { state: { productId: productId } });
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Welcome, {location.state ? location.state.id : ''}</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img
              src={`http://localhost:3001/image/${product._id}`}
              alt={product.Name}
              className="product-image"
              onClick={() => handleImageClick(product._id)}
            />
            <div className="product-details">
              <h2 className="product-name">{product.Name}</h2>
              <p className="product-amount">${product.Amount}</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {/* <h2>Your Cart</h2>
      <ul className="cart-list">
        {Array.isArray(cart) && cart.length > 0 ? (
          cart.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.Name}</span>: <span>${item.Amount}</span>
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul> */}
    </div>
  );
};

export default Home;
