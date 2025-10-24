


// import React,{useEffect} from "react";
// import styles from "./Footer.module.scss";
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Footer() {
//     useEffect(() => {
//       AOS.init({ duration: 2000, once: true });
//     }, []);
//   return (
//     <footer className={styles.footer} data-aos="fade-up">
//       <div className={styles.container} data-aos="fade-up">
//         {/* Column 1: Logo + Description */}
//         <div className={styles.column}>
//           <div className={styles.logo}>Sri Akshara Car Care</div>
//           <p>
//             Wash and Wax deep cleans dirt, grime, stubborn stains and gives a
//             completely clean and smooth surface.
//           </p>
//         </div>

//         {/* Column 2: Services */}
//         <div className={styles.column} data-aos="fade-up">
//           <h3>Services</h3>
//           <ul>
//             <li>Full Wash (Lift wash)</li>
//             <li>Body Wash</li>
//             <li>Interior Cleaning</li>
//             <li>Teflon Coating</li>
//             <li>Polish</li>
//           </ul>
//         </div>

//         {/* Column 3: Services */}
//         <div className={styles.column} data-aos="fade-up">
//           <h3>Services</h3>
//           <ul>
//             <li>Anti Rust Paint</li>
//             <li>Full Detailing Work</li>
//             <li>Engine Cleaning</li>
//             <li>Glass Treatment</li>
//             <li>Others</li>
//           </ul>
//         </div>

//         {/* Column 4: Find Us */}
//         <div className={styles.column} data-aos="fade-up">
//           <h3>Find Us</h3>

//           <div className={styles.contactItem}>
//             <FaClock />
//             <span>Mon - Sun : 06:00 AM - 09:00 PM</span>
//           </div>

//           <div className={styles.contactItem}>
//             <FaMapMarkerAlt />
//             <span>
//               CTRI Road Manna Church Back Side,
//               <br /> Subrahmanyam Nagar,
//               <br /> Rajamahendravaram
//             </span>
//           </div>

//           <div className={styles.contactItem}>
//             <FaPhoneAlt />
//             <span>96529 33339</span>
//           </div>

//           <div className={styles.contactItem}>
//             <FaEnvelope />
//             <span>srikanth.d2803@gmail.com</span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className={styles.bottom}>
//         © {new Date().getFullYear()} Sri Akshara Car Care. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

//..........................................

import React, { useEffect } from "react";
import styles from "./Footer.module.scss";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import CarLogo from "../CarLogo/CarLogo";
import CarLogoFooter from "../CarLogoFooter/CarLogoFooter";


function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container} >
        {/* Column 1: Logo + Description */}
        <div className={styles.column} data-aos="fade-up">
     <div className={styles.logo}>
  <div className={styles.logoLeft}>
    <div className={styles.carWrapper}>
      <CarLogoFooter />
      {/* <p className={styles.subTitle}>Sai Annapurna</p> */}
    </div>
    {/* <h2 className={styles.title}>Car Wash</h2> */}
  </div>
</div>


          <p>
           Sai Annapurna Car Care delivers meticulous care to every vehicle, ensuring it shines and performs at its best.  </p>
        </div>

        {/* Column 2: Wash & Interior */}
        <div className={styles.column} data-aos="fade-up">
          <h3>Wash & Interior</h3>
          <ul>
            <li>Classic Foam Wash</li>
            <li>Complete Interior Vacuum Cleaning</li>
            <li>Dashboard Cleaning & Polishing</li>
            <li>Engine Bay Cleaning</li>
            <li>Intense Interior Cleaning</li>
          </ul>
        </div>

        {/* Column 3: Coatings & Polishing */}
        <div className={styles.column} data-aos="fade-up">
          <h3>Coatings & Polishing</h3>
          <ul>
            <li>Teflon Coating</li>
            <li>Scratch Removal</li>
            <li>Rat Inspect & Repellant Spray</li>
            <li>Compound Polish</li>
            <li>Ceramic Coating</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className={styles.column} data-aos="fade-up">
          <h3>Contact Us</h3>
          <div className={styles.contactItem}>
            <FaClock className={styles.icon}/>
            <span>Mon - Sun: 08:00 AM - 08:00 PM</span>
          </div>

          <div className={styles.contactItem} >
            <FaMapMarkerAlt className={styles.icon}/>
            <span style={{textAlign:"left"}}>
              69-1-13,  
              Baskar Nagar,
              <br />Between Kwari Market and Lalacheruvu Road,
              <br /> Rajamahendravaram
            </span>
          </div>

          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon}/>
            <span>99666 22822
               <br/>9676969140
            </span>
           
            {/* <span>9676969140</span> */}
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon}/>
            <span>saiannapurnacarwash@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom} data-aos="fade-up">
        © {new Date().getFullYear()} Sai Annapurna Car Wash. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;


