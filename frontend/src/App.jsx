import React from 'react'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';


function App() {
  return(
    <>
  
    {/* <Header/> */}
    {/* <LandingPage/> */}
    <Home/>
     <WhatsAppFloat />
    
    </>
  );
}
export default App;