// import React from "react";
// import styles from "./Location.module.scss";

// const Location = () => {
//   return (
//     <section className={styles.locationSection}>
//       <h2 className={styles.title}>📍 Find Us</h2>
//       <p className={styles.subtitle}>Sai Annapurna Car Wash</p>
//       <p className={styles.address}>
//         Near Sai Baba Temple, Kukatpally, Hyderabad, Telangana
//       </p>

//       <div className={styles.qrBox}>
//         <img src="/dist\qrcode.jpeg" alt="Google Maps QR" />
//         <p>Scan to locate us on Google Maps</p>
//       </div>
//     </section>
//   );
// };

// export default Location;

//..........................

import React from "react";
import styles from "./Location.module.scss";

const Location = () => {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        {/* Left side – text info */}
        <div className={styles.textBox}>
          <h2> Find Us</h2>
          <h3>Sai Annapurna Car Wash</h3>
          <p>
              69-1-13,  
              Baskar Nagar,
              <br />Between Kwari Market and Lalacheruvu Road,
              <br /> Rajamahendravaram
          </p>
          <p>
            <strong>Working Hours:</strong><br />
            Monday – Sunday: 8:00 AM – 8:00 PM
          </p>

          <p >
  📞 Call: <a href={`tel:+919966622822`}>99666 22822</a>
</p>
          
          <p className={styles.note}>
            Scan the QR to find our exact location on Google Maps.
          </p>
        </div>

        {/* Right side – QR code */}
        <div className={styles.qrBox}>
          <img src="/dist\qrcode.jpeg" alt="Google Maps QR" />
          {/* <img src="/dist\qrremovebg.png" alt="google maps qr"/> */}
        </div>
      </div>
    </section>
  );
};

export default Location;

