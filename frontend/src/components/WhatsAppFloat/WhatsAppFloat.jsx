// WhatsAppFloat.jsx
import React from "react";
import styles from "./WhatsAppFloat.module.scss";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/9199666 22822"
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={styles.icon} />
      <span className={styles.text}>Message Us</span>
    </a>
  );
}

export default WhatsAppFloat;
