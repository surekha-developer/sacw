


import React, { useEffect, useState } from "react";
import styles from "./Duplicate.module.scss";
import CarLoader from "../CarLoader/CarLoader";

const Duplicate = () => {
const [displayedNumber, setDisplayedNumber] = useState("");
const phoneNumber = "99666 22822";

useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    setDisplayedNumber(phoneNumber.slice(0, i + 1));
    i++;
    if (i === phoneNumber.length) clearInterval(interval);
  }, 100);

  return () => clearInterval(interval);
}, []);

  
  const [shapes, setShapes] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Pick-up & Door Delivery Available";

  useEffect(() => {
    const interval = setInterval(() => {
      const newShape = {
        id: Date.now(),
        left: Math.random() * 100,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 10 + 10,
      };
      setShapes((prev) => [...prev, newShape]);

      setTimeout(() => {
        setShapes((prev) => prev.filter((s) => s.id !== newShape.id));
      }, (newShape.duration + 2) * 1000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // 👉 Smooth letter-by-letter text animation
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 80); // speed per letter (80ms)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className={styles.heroWrapper}>
      {/* Background shapes */}
      <div className={styles.background}>
        {shapes.map((shape) => (
          <span
            key={shape.id}
            style={{
              left: `${shape.left}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              animationDuration: `${shape.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay: text + car loader */}
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1>Keep Your Car Looking New Every Day</h1>
          <p>Fast, Affordable, and Eco-Friendly Wash</p>

          <p className={styles.deliveryNote}>{displayedText}</p>
  {/* <p className={styles.callNow}>
  📞 Call: <a href="tel:+9199666 22822">99666 22822</a>
</p> */}
<p className={styles.callNow}>
  📞 Call: <a href={`tel:+919966622822`}>{displayedNumber}</a>
</p>



        </div>

        <div className={styles.carLoader}>
          <img
            src="/benjamin-child-7Cdw956mZ4w-unsplash-removebg-preview.png"
            alt="Car"
            className={styles.centerCar}
          />
        </div>
      </div>
    </section>
  );
};

export default Duplicate;

