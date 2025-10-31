// import React, { useRef, useState } from "react";
// import styles from "./ContactForm.module.scss";
// import ContactAnimation from "../../pages/ContactAnimation";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [buttonText, setButtonText] = useState("Send");
//   const [isSending, setIsSending] = useState(false);
//   const [errors, setErrors] = useState({});

//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const phoneRef = useRef(null);
//   const messageRef = useRef(null);

//   // ✅ Validation
//   const validate = () => {
//     let tempErrors = {};

//     if (!formData.name || formData.name.trim().length < 2) {
//       tempErrors.name = "*Name must be at least 2 characters";
//     }

//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       tempErrors.email = "*Enter a valid email address";
//     }

//     // ✅ Phone number must not be empty and must be exactly 10 digits
//     if (!formData.phone) {
//       tempErrors.phone = "*Phone number is required";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       tempErrors.phone = "*Phone number must be exactly 10 digits";
//     }

//     if (!formData.message || formData.message.trim().length < 5) {
//       tempErrors.message = "*Message must be at least 5 characters";
//     }

//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Clear error automatically when user corrects input
//     setErrors((prevErrors) => {
//       const newErrors = { ...prevErrors };

//       if (name === "phone") {
//         if (!/^\d{10}$/.test(value))
//           newErrors.phone = "Phone number must be 10 digits";
//         else delete newErrors.phone;
//       } else if (name === "email") {
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//           newErrors.email = "Invalid email format";
//         else delete newErrors.email;
//       } else {
//         if (!value.trim()) newErrors[name] = "This field is required";
//         else delete newErrors[name];
//       }

//       return newErrors;
//     });
//   };

//   const handleKeyDown = (e, nextRef) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       if (nextRef && nextRef.current) {
//         nextRef.current.focus();
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setIsSending(true);
//     setButtonText("Sending...");

//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setButtonText("Message Sent ✅");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         setErrors({});

//         // Reset button after 5 sec
//         setTimeout(() => {
//           setButtonText("Send");
//           setIsSending(false);
//         }, 5000);
//       } else {
//         setButtonText("Error ❌");
//         setTimeout(() => {
//           setButtonText("Send");
//           setIsSending(false);
//         }, 3000);
//       }
//     } catch (err) {
//       setButtonText("Server Error ❌");
//       setTimeout(() => {
//         setButtonText("Send");
//         setIsSending(false);
//       }, 3000);
//     }
//   };

//   return (
//     <div className={styles.contactWrapper}>
//       <div className={styles.card}>
//         {/* Left Side Animation */}
//         <div className={styles.animationSection}>
//           <ContactAnimation />
//         </div>

//         {/* Right Side Form */}
//         <div className={styles.formSection}>
//           <h2>Contact Us</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               ref={nameRef}
//               value={formData.name}
//               onChange={handleChange}
//               onKeyDown={(e) => handleKeyDown(e, emailRef)}
//               disabled={isSending}
//             />
//             {errors.name && <span className={styles.error}>{errors.name}</span>}

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               ref={emailRef}
//               value={formData.email}
//               onChange={handleChange}
//               onKeyDown={(e) => handleKeyDown(e, phoneRef)}
//               disabled={isSending}
//             />
//             {errors.email && (
//               <span className={styles.error}>{errors.email}</span>
//             )}

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Your Phone"
//               ref={phoneRef}
//               value={formData.phone}
//               onChange={handleChange}
//               onKeyDown={(e) => handleKeyDown(e, messageRef)}
//               disabled={isSending}
//             />
//             {errors.phone && (
//               <span className={styles.error}>{errors.phone}</span>
//             )}

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               ref={messageRef}
//               value={formData.message}
//               onChange={handleChange}
//               onKeyDown={(e) => handleKeyDown(e, null)}
//               disabled={isSending}
//             />
//             {errors.message && (
//               <span className={styles.error}>{errors.message}</span>
//             )}

//             <button type="submit" disabled={isSending}>
//               {buttonText}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;

//.........................................

import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.scss";
import ContactAnimation from "../../pages/ContactAnimation";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false); // ✅ New: Popup state

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  // ✅ Validation
  const validate = () => {
    let tempErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      tempErrors.name = "*Name must be at least 2 characters";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = "*Enter a valid email address";
    }

    if (!formData.phone) {
      tempErrors.phone = "*Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "*Phone number must be exactly 10 digits";
    }

    if (!formData.message || formData.message.trim().length < 5) {
      tempErrors.message = "*Message must be at least 5 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "phone") {
        if (!/^\d{10}$/.test(value))
          newErrors.phone = "Phone number must be 10 digits";
        else delete newErrors.phone;
      } else if (name === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          newErrors.email = "Invalid email format";
        else delete newErrors.email;
      } else {
        if (!value.trim()) newErrors[name] = "This field is required";
        else delete newErrors[name];
      }

      return newErrors;
    });
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef && nextRef.current) nextRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSending(true);
    setButtonText("Sending...");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setButtonText("Message Sent ✅");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
        setTimeout(() => {
          setButtonText("Send");
          setIsSending(false);
        }, 4000);
      } else {
        throw new Error("Server Error");
      }
    } catch (err) {
      setButtonText("Server Error ❌");
      setShowPopup(true); // ✅ Show popup when error occurs
      setTimeout(() => {
        setButtonText("Send");
        setIsSending(false);
      }, 3000);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setButtonText("Send");
    setIsSending(false);
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.card}>
        <div className={styles.animationSection}>
          <ContactAnimation />
        </div>

        <div className={styles.formSection}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              ref={nameRef}
              value={formData.name}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
              disabled={isSending}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              ref={emailRef}
              value={formData.email}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, phoneRef)}
              disabled={isSending}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              ref={phoneRef}
              value={formData.phone}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, messageRef)}
              disabled={isSending}
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone}</span>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              ref={messageRef}
              value={formData.message}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, null)}
              disabled={isSending}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}

            <button type="submit" disabled={isSending}>
              {buttonText}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Popup Message */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h3>Something went wrong 😔</h3>
            <p>
              Unable to send your message. Please contact us via WhatsApp or
              Call.
            </p>
            <div className={styles.popupActions}>
              <div className={styles.row}>
                <a
                  href="https://wa.me/919966622822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.popupBtn} ${styles.whatsapp}`}
                >
                  WhatsApp: 99666 22822
                </a>
                <a
                  href="tel:+919966622822"
                  className={`${styles.popupBtn} ${styles.call}`}
                >
                  Call: 99666 22822
                </a>
              </div>

              <div className={styles.okRow}>
                <button
                  className={`${styles.popupBtn} ${styles.ok}`}
                  onClick={closePopup}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
