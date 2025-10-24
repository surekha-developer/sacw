// import React from "react";
// import styles from "./AddressCard.module.scss";

// function AddressCard() {
//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.card}>
//         <div className={styles.item}>
//           <h3>We Are Available</h3>
//           <p>Mon - Sun : 06:00AM - 09:00PM</p>
//         </div>

//         <div className={styles.item}>
//           <h3>Location</h3>
//           <p>
//             CTRI Road, Manna Church Back Side, <br />
//             Subrahmanyam Nagar, Rajamahendravaram
//           </p>
//         </div>

//         <div className={styles.item}>
//           <h3>Call Emergency</h3>
//           <p>096529 33339</p>
//         </div>

//         <div className={styles.item}>
//           <h3>Message Us</h3>
//           <p>srikanth.d2803@gmail.com</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AddressCard;

// ............................................................................................
// import React,{useEffect} from "react";
// import styles from "./AddressCard.module.scss";
// import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function AddressCard() {
//     useEffect(() => {
//       AOS.init({ duration: 1000, once: true });
//     }, []);
  
//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.card} data-aos="fade-up">
//         <div className={styles.item} data-aos="fade-right">
//           <FaClock className={styles.icon} />
//           <h3>We Are Available</h3>
//           <p>Mon - Sun : 08:00AM - 08:00PM</p>
//         </div>

//         <div className={styles.item} data-aos="fade right">
//           <FaMapMarkerAlt className={styles.icon} />
//           <h3>Location</h3>
//           <p> 69-1-13,  
//               Baskar Nagar,
           
//            <br />Between Kwari Market and Lalacheruvu Road,<br /> Rajamahendravaram
//           </p>
//         </div>

//         <div className={styles.item} data-aos="fade-left">
//           <FaPhoneAlt className={styles.icon} />
//           <h3>Call Emergency</h3>
//           <p>99666 22822</p>
//            <p>9676969140</p>
//         </div>

//         <div className={styles.item} data-aos="fade-left">
//           <FaEnvelope className={styles.icon} />
//           <h3>Message Us</h3>
//           <p>sacarwash21025@gmail.com</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AddressCard;

//................ above code is good


import React, { useEffect } from "react";
import styles from "./AddressCard.module.scss";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp } from "react-icons/fa";


function AddressCard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.contactSection} >
      <div className={styles.cardContainer} data-aos="fade-up">
        <div className={styles.card} >
          <div className={styles.item} data-aos="fade-right">
            <FaClock className={styles.icon} />
            <h3>We Are Available</h3>
            <p>Mon - Sun : 8:00 AM - 8:00 PM</p>
          </div>

          <div className={styles.item} data-aos="fade-right">
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Location</h3>
            <p>
              69-1-13, Baskar Nagar, <br />
              Between Kwari Market and Lalacheruvu Road, <br />
              Rajamahendravaram
            </p>
          </div>

          <div className={styles.item} data-aos="fade-left">
            <FaPhoneAlt className={styles.icon} />
            <h3>Call Emergency</h3>
            <p>99666 22822</p>
            <p>96769 69140</p>
          </div>

          <div className={styles.item} data-aos="fade-left">
            <FaEnvelope className={styles.icon} />
            <h3>Message Us</h3>
            <p>saiannapurnacarwash@gmail.com</p>
            
            <p className={styles.whatsappLine}>
  <FaWhatsapp className={styles.whatsappIcon} />WhatsApp:99666 22822
</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddressCard;
