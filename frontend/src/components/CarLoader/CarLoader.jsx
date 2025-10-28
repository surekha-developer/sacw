import React from "react";
import Lottie from "lottie-react";
import carLoaderAnimation from "../../animations/carloaderanimation.json";
import styles from "./CarLoader.module.scss";

const CarLoader = () => {
  return (
    <div className={styles.lottieWrapper}>
      <Lottie 
        animationData={carLoaderAnimation} 
        loop={true} 
        autoplay={true} 
        className={styles.lottie} 
      />
    </div>
  );
};

export default CarLoader;