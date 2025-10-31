

import React, { useEffect } from "react";
import styles from "./WhyHireUs.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiTicktick } from "react-icons/si";

function WhyHireUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const listItems = [
    "100% Secured",
    "Well Disciplined",
    "Budget Oriented",
    "Eco Friendly",
    "Top Rated",
    "Fast & Clean Service",
    "Quality Products",
"Attention to Every Detail",
    "Reliable & Punctual",
    "Online Payment",
    
    "Friendly & Supportive Staff",
    "100% Satisfaction",
  ];

  return (
    <section className={styles.whyHireUs} >
      <div className={styles.card}>
        <div className={styles.content}>
          <h2 data-aos="fade-right">Why Should <span className={styles.hireus}>Hire Us</span></h2>
          <p data-aos="fade-right">
          At Sai Annapurna Car Wash, we treat every vehicle like our own. Combining expert care, eco-friendly practices, and a customer-first approach, we deliver spotless cleaning, lasting protection, and complete satisfaction. That’s why car owners in Rajahmundry trust us for premium car care.
          </p>

          <ul>
            {listItems.map((item, index) => (
              <li
                key={index}
                data-aos="fade-right"
                // data-aos-delay={50 + index * 50}
              ><SiTicktick className={styles.tic}/>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageWrapper} data-aos="fade-left" >
          <img src="/carservices.jpg" alt="Car wash service" />
        </div>
      </div>
    </section>
  );
}

export default WhyHireUs;

