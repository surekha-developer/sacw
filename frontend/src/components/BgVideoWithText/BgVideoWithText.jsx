// import React from "react";
// import styles from "./BgVideoWithText.module.scss";


// function BgVideoWithText() {
//   return (
//     <section className={styles.videoSection} id="home">
//       {/* Background Video */}
//       <video
//         className={styles.videoBg}
//         src="/bgcarvideo.mp4" // place your video inside public folder
//         autoPlay
//         loop
//         muted
//         playsInline
//       ></video>
      

//       {/* Overlay */}
//       <div className={styles.overlay}>
//         <h1>Keep Your col Looking New Every Day</h1>
//         <p>Fast, Affordable, and Eco-Friendly Wash</p>
//         <a href="#services" className={styles.ctaButton}>
//           Explore Services
//         </a>
//       </div>
//     </section>
//   );
// }

// export default BgVideoWithText;


// import React from "react";
// import styles from "./BgVideoWithText.module.scss";

// function BgVideoWithText() {
//   return (
//     <section className={styles.heroSection} id="home">
//       <div className={styles.overlay}>
//         <h1>Keep Your Car Looking New Every Day</h1>
//         <p>Fast, Affordable, and Eco-Friendly Wash</p>
//         <a href="#services" className={styles.ctaButton}>
//           Explore Services
//         </a>
//       </div>
//     </section>
//   );
// }

// export default BgVideoWithText;

//..............


//................this is for water animation with side text1

// import React from "react";
// import styles from "./BgVideoWithText.module.scss";

// function BgVideoWithText() {
//   return (
//     <section className={styles.heroSection} id="home">
//       <div className={styles.overlay}>
//         <h1>Keep Your Car Looking New Every Day</h1>
//         <p>Fast, Affordable, and Eco-Friendly Wash</p>
//         <a href="#services" className={styles.ctaButton}>
//           Explore Services
//         </a>
//       </div>
//     </section>
//   );
// }

// export default BgVideoWithText;

//..........................................................1


import React, { useEffect } from "react";
import styles from "./BgVideoWithText.module.scss";
// import Lottie from "lottie-react";
// import waterAnimation from "../../assets/waterAnimation.json"; // your downloaded Lottie JSON
import AOS from "aos";
import "aos/dist/aos.css";
// import CarLoaderanimation from "../../pages/CarLoaderanimation";
// import CarLoaderAnimation from "../CarLoader/CarLoader";

const WaterHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Floating water balls background */}
      <div className={styles.waterBalls}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.leftContent} data-aos="fade-right">
          <h1>Refresh Your Ride</h1>
          <p>Professional car wash services that make your vehicle shine like new. Fast, eco-friendly, and affordable!</p>
          <button>Book Now</button>
        </div>
        <div>
         
        </div>

        <div className={styles.rightAnimation} data-aos="fade-left">
          <Lottie animationData={waterAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default WaterHero;


