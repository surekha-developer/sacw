
// import React from "react";
// import Home from "./Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Carousels from "../components/Carousels/Carousels";
// import HowWeWork from "../components/HowWeWork/HowWeWork";
// import WhyHireUs from "../components/WhyHireUs/WhyHireUs";
// import Header from "../components/Header/Header";

// const LandingPage = () => {
//     return(
//         <>
//          <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Carousels />} />
//         <Route path="/about" element={<HowWeWork/>}/>
//         <Route path="/features" element={<WhyHireUs/>}/>
//       </Routes>
//     </Router>
//         </>
 
//     );
// }

// export default LandingPage;

//.........................above code is perfect

import React from "react";
import Header from "../components/Header/Header";
import AddressCard from "../components/AddressCard/AddressCard";
import BgVideoWithText from "../components/BgVideoWithText/BgVideoWithText";
import Carousels from "../components/Carousels/Carousels";
import Duplicate from "../components/Duplicate/Duplicate";
import Footer from "../components/Footer/Footer";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import WhyHireUs from "../components/WhyHireUs/WhyHireUs";
import Home from "./Home";

const LandingPage = () => {
  return (
    <>
      {/* <Header />
     
       <BgVideoWithText/>
       <AddressCard/>
       <Carousels/>
       <WhyHireUs/>
       <HowWeWork/>
       <Footer/> */}

      {/* Give IDs for scrolling targets */}
      {/* <section id="home">
        <Home />
      </section> */}
    

      {/* <section id="about">
        <HowWeWork />
      </section>
      <BgVideoWithText/> */}

      {/* <section id="services">
        
        <Footer/>
      </section> */}

       {/* <section id="features">
        <WhyHireUs />
        <AddressCard />
      </section> 

      <Footer /> */}

         {/* <section id="home">
        <Home />
      </section> */}
       {/* <section id="about">
        <HowWeWork />
      </section> */}
      <Home/>
      
    </>
  );
};

export default LandingPage;
