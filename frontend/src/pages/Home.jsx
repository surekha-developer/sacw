// import AddressCard from "../components/AddressCard/AddressCard";
// import BgVideoWithText from "../components/BgVideoWithText/BgVideoWithText";
// import Carousels from "../components/Carousels/Carousels";
// import Duplicate from "../components/Duplicate/Duplicate";
// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";
// import React from "react";
// import HowWeWork from "../components/HowWeWork/HowWeWork";
// import WhyHireUs from "../components/WhyHireUs/WhyHireUs";
// import Gallery from "../components/Gallery/Gallery";
// import ContactPage from "./ContactPage";


// const Home = () => {
//   return (
//     <>
//       <Header />
//       <Duplicate />
//       <AddressCard />
//       <Carousels />
//       <WhyHireUs />
//       <HowWeWork />

//       <Gallery />
//       <ContactPage />
//       <Footer />
//     </>
//   );
// };
// export default Home;

//..............................


import AddressCard from "../components/AddressCard/AddressCard";
import BgVideoWithText from "../components/BgVideoWithText/BgVideoWithText";
import Carousels from "../components/Carousels/Carousels";
import Duplicate from "../components/Duplicate/Duplicate";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import React,{useRef} from "react";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import WhyHireUs from "../components/WhyHireUs/WhyHireUs";
import Gallery from "../components/Gallery/Gallery";
import ContactPage from "./ContactPage";
import styles from "./Home.module.scss";
import ContactForm from "../components/ContactForm/ContactForm";
import Location from "../components/Location/Location";
// import CarLoader from "../components/CarLoader/CarLoader";


const Home = () => {
      const homeRef = useRef(null);
    const carouselsRef = useRef(null); // Single ref for both About and Services
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
    // Function to scroll to section
  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
         <Header
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          aboutRef: carouselsRef,    // About scrolls to carousels
          servicesRef: carouselsRef, // Services scrolls to carousels
          featuresRef,
          galleryRef,
          contactRef,
        }}
      />

         <section ref={homeRef} className={styles.scrollSection}>
        <Duplicate />
        <AddressCard />
      </section>
       <section ref={carouselsRef} className={styles.scrollSection}>
        <Carousels />
      </section>
        
      <WhyHireUs />
     <section ref={featuresRef} className={styles.scrollSection}>
        <HowWeWork />
      </section>

     <section ref={galleryRef} className={styles.scrollSection}>
        <Gallery />
      </section>
      <section ref={contactRef} className={styles.scrollSection}>
      <ContactPage />
      </section>
      <Location/>
      <Footer />
    </>
    // <>
    // <CarLoader/>
    // </>
  
   
  );
};
export default Home;

