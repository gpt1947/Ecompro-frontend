import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  HomePage from "./components/HomePage.jsx";
import Navbar from './components/Navbar.jsx';
import SearchResults from './components/SearchResults.jsx';
import ProductPage from './components/ProductPage.jsx';
import Checkout from './components/Checkout.jsx';
import Footer from './components/Footer.jsx';
// import Footer2 from './components/Footer2.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
//  import { useState,useEffect} from 'react';
// import axios from 'axios';
import { Toaster } from 'react-hot-toast';
// import toast from 'react-hot-toast';
// axios.defaults.baseURL="http://localhost:5000";
// axios.defaults.withCredentials=true;

const App = () => {
  //  const [data, setData] = useState(null);
  // // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //       if(!data){
  //         toast.error("shi nhi chal rha haio")
  //       }
  //   };
     
  //   fetchData();
    
  // }, []); 

 
  return (
  //   <div>
  //   {loading ? (
  //     <p>Loading...</p>
  //   ) : data ? (
  //     <div>
  //       <h2>Data from backend:</h2>
  //       <pre>{JSON.stringify(data, null, 2)}</pre>
  //     </div>
  //   ) : (
  //     <p>No data available</p>
  //   )}
  // </div>

  
    <BrowserRouter>
    <Navbar />
    <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
    <Routes>
      {/* <Route exact path="/" element={<Navbar />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/Search" element={<SearchResults />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
    </Routes>
    <Footer/>
    
  </BrowserRouter>
  )
}

export default App
