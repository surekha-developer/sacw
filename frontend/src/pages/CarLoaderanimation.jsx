// import React from "react";
// import Lottie from "lottie-react";
// import carLoader from "../animations/carLoader.json";
// // import styles from  "../ContactForm.module.scss";
// // import styles from '../components/ContactForm/ContactForm.module.scss';

// function CarLoaderanimation() {
//   return (
//     <div className={styles.lottieWrapper}   >
//       <Lottie 
//         animationData={carLoader} 
//         loop={true}   // true = animation repeats
//         autoplay={true} // starts automatically
//       style={{ width: "100%", height: "100%" }}
//       />
//     </div>
//   );
// }

// export default CarLoaderanimation;

import React from "react";
import Lottie from "lottie-react";
import carLoader from "../animations/carLoader.json";
// import styles from "./CarLoaderAnimation.module.scss"; // optional SCSS for styling

function CarLoaderAnimation() {
  return (
    <div className={styles.lottieWrapper}>
      <Lottie 
        animationData={carLoader} 
        loop={true}        // animation repeats
        autoplay={true}    // starts automatically
      />
    </div>
  );
}

export default CarLoaderAnimation;

