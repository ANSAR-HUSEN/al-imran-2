import React, {useRef} from "react";
import styles from "./ContactFormComponent.module.css";
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast';
import { blue } from "@mui/material/colors";

const ContactFormComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jom73yw', 'template_ae0tn8d', form.current, {
        publicKey: 'GnxDm1GPkTI3B4KNd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
           toast.success('Send Successfully', {
            duration: 4000,
            position: 'top-center',
          
            // Styling
            style: {backgroundColor:'#05A04B', width:'300px', color:'white',fontSize:'25px'},
            className: '',
          
            // Custom Icon
            icon: '👏',
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            }});
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.success('Failed', {
            duration: 4000,
            position: 'top-center',
          
            // Styling
            style: {backgroundColor:'#E15549', width:'300px', color:'white',fontSize:'25px'},
            className: '',
          
            // Custom Icon
            icon: '👏',
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            }});
        },
      );
  };
  return (
    <div className={styles.contactForm}>
      <Toaster/>
      <p className={styles.smallTitle}>Contact us</p>
      <h2 className={styles.largeTitle}>Get In Touch</h2>

      <form ref={form} className={styles.form} onSubmit={sendEmail}>
        <input name="from_name" type="text" placeholder="Name" className={styles.input} />
        <input name="telephone" type="tel" placeholder="Phone Number" className={styles.input} />
        <input name="email" type="email" placeholder="Email" className={styles.input} />
        <textarea name="message" placeholder="Message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.submitButton}>
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default ContactFormComponent;
