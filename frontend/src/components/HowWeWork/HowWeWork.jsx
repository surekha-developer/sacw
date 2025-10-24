

import React, { useEffect } from "react";
import styles from "./HowWeWork.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function HowWeWork() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.howWeWork}>
      <h2 className={styles.heading} data-aos="fade-up">
        How We <span className={styles.work}>Work</span>
      </h2>
      <p className={styles.subHeading} data-aos="fade-up">
        At Sai Annapurna Car Wash, we follow a simple yet effective process to ensure every vehicle gets the best care and a spotless shine.
      </p>

      <div className={styles.grid}>
        {/* Card 1: Service */}
        <div className={styles.card} data-aos="fade-up">
          <div className={styles.icon}>🚗</div>
          <h3>Full Car Wash</h3>
          <p className={styles.subtitle}>Complete exterior and interior cleaning</p>
          <p>
            Our team cleans every corner of your vehicle, from body to interiors, leaving it sparkling like new.
          </p>
        </div>

        {/* Card 2: Workflow Stage */}
        <div className={styles.card} data-aos="fade-up" >
          <div className={styles.icon}>🧽</div>
          <h3>Detailed Polishing</h3>
          <p className={styles.subtitle}>Shine and protection for your car</p>
          <p>
            We apply specialized products to polish and protect your car’s paint, ensuring long-lasting shine.
          </p>
        </div>

        {/* Card 3: Workflow Stage */}
        <div className={styles.card} data-aos="fade-up">
          <div className={styles.icon}>✨</div>
          <h3>Final Touch & Inspection</h3>
          <p className={styles.subtitle}>Perfect finish for every vehicle</p>
          <p>
            Before handing over, we inspect the car carefully to make sure it meets our quality standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;

