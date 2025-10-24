

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import styles from "./Carousels.module.scss";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function NextArrow(props) {
const { onClick } = props;
  return (
    <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      <MdOutlineKeyboardDoubleArrowRight data-aos="fade-right"/>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      <MdOutlineKeyboardDoubleArrowLeft data-aos="fade-left"/>
    </div>
  );
}

function Carousels() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <div className={styles.bg}>
      <section className={styles.carouselSection}>
        <h2 className={styles.heading} data-aos="fade-up">
          Car Wash <span className={styles.work}>Services</span>
        </h2>
        <p className={styles.subHeading} data-aos="fade-up">
          Sai Annapurna Car Wash between Kwari market and Lalacheruvu
          Road,Baskar Nagar, Rajahmundry
        </p>
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className={styles.card} >
            <div className={styles.image}>
              <img src="/close-up-car-care-process.jpg" alt="Quality Service" />
            </div>
            <div className={styles.content}>
              <h3>Car Washing Services</h3>
              <p>
                At Sai Annapurna, we make every car shine with care and
                attention. We focus on quality and customer satisfaction,
                keeping your vehicle clean and well-maintained.
              </p>
              <ul>
                <li>
                  <SiTicktick className={styles.tic} />
                  Classic Foam Wash
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Complete Interior Vacuum Cleaning
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Dashboard Cleaning & Polishing
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Engine Bay Cleaning
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Intense Interior Cleaning
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Teflon Coating
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Scratch Removal
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Rat Inspect & Repellant Spray
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Compound Polish
                </li>
              </ul>
            </div>
          </div>

          {/* Slide 2 */}
          <div className={styles.card} >
            <div className={styles.images}>
              <img src="/bikeunsplash.jpg" alt="Customer Care" />
            </div>
            <div className={styles.content}>
              <h3>Bike Washing Services</h3>
              <p>
                We give the same care to bikes, ensuring they look great and
                stay in top condition, with a reliable and professional touch.
              </p>
              <ul>
                <li>
                  <SiTicktick className={styles.tic} />
                  Classic Foam Wash
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Scratch Removal
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Compound Polish
                </li>
                <li>
                  <SiTicktick className={styles.tic} />
                  Teflon Coating
                </li>
              </ul>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default Carousels;
