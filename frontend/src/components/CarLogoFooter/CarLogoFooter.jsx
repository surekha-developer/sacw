


import React from "react";
import Lottie from "lottie-react";
import vehicle from "../../animations/vehicle.json";
import styles from "./CarLogoFooter.module.scss";

const CarLogoFooter = () => {
  return (
    <div className={styles.logoContainer}>
      {/* Left: Car Animation */}
      <div className={styles.carAnimation}>
        <Lottie animationData={vehicle} loop autoplay />
      </div>

      {/* Right: Text */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Sai Annapurna</h1>
        <p className={styles.subtitle}>Car Wash</p>
      </div>
    </div>
  );
};

export default CarLogoFooter;

