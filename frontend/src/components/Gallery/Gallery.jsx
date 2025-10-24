


import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./Gallery.module.scss";

const images = [
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqNeO9OSdW2JSBoWvC-Q5KB-lO4u-n8jVa7b7JqHeKjC6f2w4e-nkE8SJvyGNocwWzF6vMHFNtHiNgL2XonMDNX8wStruos9r-cb4hnwedQfz-X3-Wv7TLUwDpmLQlFg7sh8gOdbEO8fV_I=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nprhs1TY64VGJOdhJ7dsjc2CtL9feUKQqLzhyZOXLdoC4SOd-dpWDflOGxOZUDvD8-1JUlkMOUkis29ZQ-XfTlKaTOcjZqugtXY-YDxis1egETV1UKCANg2srm91phpA2hFNbRy_zsp4ss=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrWiYlzOuWc1qvSciHwr47klGR7cvyijtF4sOHZ1jtvYw-xexs6DpWtbOvXmaQamhht-dK5lflzvVz1018JaCkFhCI-vaH6dOTwhYTIk3EwsD4CkGs0fWyQQDehlripj54okFa97lnW6cv0=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npmmxGY--0Q1ZfPzixbuWHP_vjCe0Yg2SAWjyrzgxRjSWes7ZxE3_Ys5Tw-UMBuwR6KuJ5qW-NHlJdePLdYfTJRc63FNL05vveiIXJe591XQ0rWjkuXBHalTSHI-b-ca52ifuYp7SOFmACC=w141-h101-n-k-no-nu",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npA369KLnNy0qoXQBJZ4cahzwtuFhE_M6VEKkkQ4gkoz4FXtZwUdBsGGoNq8ADVTNhlfUa2vr8ldxWGU4G3lnDAbrzcIa3JsA3EE6pnlf4nyBxg7YtDpD-ENPOZIBJEBXuyMiP2XNSEGtcR=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrS8z8ugjH6lVQKLhsnslebH2eOlEHjuFHytrk68SlI8FQhfKe0CpdnulyJ82W11vGb4ARihPiA29QZjIo4Pu176zfZeO7uRCJ_6wd9htZmTR9mkSXM5rLTprZ7skB5mcb1FWr6U4uQ2h0=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMeFqOc6KfoXremOrarCctvgtPR0ZMvUf35iJcf=w141-h118-n-k-no-nu",
];

const Gallery = () => {
  const swiperRef = useRef(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Go to section using dots
  const goToSection = (index) => {
    if (!swiperRef.current) return;
    const totalSlides = images.length;
    const perSection = Math.ceil(totalSlides / 3);
    swiperRef.current.slideToLoop(index * perSection, 500);
  };

  return (
    <div className={styles.carouselSection}>
      <h2>
        Our Recent <span className={styles.work}>Work</span>
      </h2>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className={styles.swiper}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`car-${i}`}
              className={styles.carouselImage}
              onClick={() => setFullscreenImage(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className={styles.dots}>
        <button onClick={() => goToSection(0)}></button>
        <button onClick={() => goToSection(1)}></button>
        <button onClick={() => goToSection(2)}></button>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className={styles.fullscreenOverlay}
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className={styles.closeBtn}
            onClick={() => setFullscreenImage(null)}
          >
            ✕
          </button>
          <img
            src={fullscreenImage}
            alt="fullscreen"
            className={styles.fullscreenImage}
            onClick={(e) => e.stopPropagation()} // prevent overlay close on image click
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;


