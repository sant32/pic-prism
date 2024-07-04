
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import {Toaster, toast} from 'react-hot-toast'

function GsapTransition() {
  const nodeRef = useRef(null);
  const location = useLocation(); // Replaced userLocation with useLocation

  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }); // Changed initial opacity to 0
      
    }
  }, [location]); // Added location to dependency array

  return (
    <div ref={nodeRef}>
        <Toaster />
      <Routes location={location}> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
}

export default GsapTransition;
