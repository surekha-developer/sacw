

// import React, { useEffect } from "react";
// import styles from "./Footer.module.scss";
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import CarLogo from "../CarLogo/CarLogo";
// import CarLogoFooter from "../CarLogoFooter/CarLogoFooter";


// function Footer() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container} >
//         {/* Column 1: Logo + Description */}
//         <div className={styles.column} data-aos="fade-up">
//      <div className={styles.logo}>
//   <div className={styles.logoLeft}>
//     <div className={styles.carWrapper}>
//       <CarLogoFooter />
//       {/* <p className={styles.subTitle}>Sai Annapurna</p> */}
//     </div>
//     {/* <h2 className={styles.title}>Car Wash</h2> */}
//   </div>
// </div>


//           <p>
//            Sai Annapurna Car Care delivers meticulous care to every vehicle, ensuring it shines and performs at its best.  </p>
//         </div>

//         {/* Column 2: Wash & Interior */}
//         <div className={styles.column} data-aos="fade-up">
//           <h3>Wash & Interior</h3>
//           <ul>
//             <li>Classic Foam Wash</li>
//             <li>Complete Interior Vacuum Cleaning</li>
//             <li>Dashboard Cleaning & Polishing</li>
//             <li>Engine Bay Cleaning</li>
//             <li>Intense Interior Cleaning</li>
//           </ul>
//         </div>

//         {/* Column 3: Coatings & Polishing */}
//         <div className={styles.column} data-aos="fade-up">
//           <h3>Coatings & Polishing</h3>
//           <ul>
//             <li>Teflon Coating</li>
//             <li>Scratch Removal</li>
//             <li>Rat Inspect & Repellant Spray</li>
//             <li>Compound Polish</li>
//             <li>Ceramic Coating</li>
//           </ul>
//         </div>

//         {/* Column 4: Contact Info */}
//         <div className={styles.column} data-aos="fade-up">
//           <h3>Contact Us</h3>
//           <div className={styles.contactItem}>
//             <FaClock className={styles.icon}/>
//             <span>Mon - Sun: 08:00 AM - 08:00 PM</span>
//           </div>

//           <div className={styles.contactItem} >
//             <FaMapMarkerAlt className={styles.icon}/>
//             <span style={{textAlign:"left"}}>
//               69-1-13,  
//               Baskar Nagar,
//               <br />Between Kwari Market and Lalacheruvu Road,
//               <br /> Rajamahendravaram
//             </span>
//           </div>

//           <div className={styles.contactItem}>
//             <FaPhoneAlt className={styles.icon}/>
          
//             <span>99666 22822
//                <br/>9676969140
//             </span>
           
//             {/* <span>9676969140</span> */}
//           </div>

//           <div className={styles.contactItem}>
//             <FaEnvelope className={styles.icon}/>
//             <span>saiannapurnacarwash@gmail.com</span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className={styles.bottom} data-aos="fade-up">
//         © {new Date().getFullYear()} Sai Annapurna Car Wash. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

//.........................................

import React, { useEffect } from "react";
import styles from "./Footer.module.scss";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import CarLogoFooter from "../CarLogoFooter/CarLogoFooter";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Logo + Description */}
        <div className={styles.column} data-aos="fade-up">
          <div className={styles.logo}>
            <div className={styles.logoLeft}>
              <div className={styles.carWrapper}>
                <CarLogoFooter />
              </div>
            </div>
          </div>
          <p>
            Sai Annapurna Car Care delivers meticulous care to every vehicle,
            ensuring it shines and performs at its best.
          </p>
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
            <FaClock className={styles.icon} />
            <span>Mon - Sun: 08:00 AM - 08:00 PM</span>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span style={{ textAlign: "left" }}>
              69-1-13,
              Baskar Nagar,
              <br />
              Between Kwari Market and Lalacheruvu Road,
              <br /> Rajamahendravaram
            </span>
          </div>

          {/* ✅ Clickable Phone Numbers */}
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <span>
              <a href="tel:9966622822" className={styles.phoneLink}>
                99666 22822
              </a>
              <br />
              <a href="tel:9676969140" className={styles.phoneLink}>
                96769 69140
              </a>
            </span>
          </div>

          {/* ✅ Clickable Email */}
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <a
              href="mailto:saiannapurnacarwash@gmail.com"
              className={styles.emailLink}
            >
              saiannapurnacarwash@gmail.com
            </a>
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



