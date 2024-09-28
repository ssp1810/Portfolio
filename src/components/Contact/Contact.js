import React, { useRef } from 'react'
import './Contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstaIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pdcgan8', 'template_i313dem', form.current, 'M4AMnAxceWnLVyLaW')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });

    
  };

  return (
    <section id="contactPage">
      {/* <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                  I have had the opportunity to work with a diverse group of
                  companies. Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                  <img src={Walmart} alt="" className="clientImg" />
                  <img src={Adobe} alt="" className="clientImg" />
                  <img src={Microsoft} alt="" className="clientImg" />
                  <img src={Facebook} alt="" className="clientImg" />
            </div>
      </div> */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>


        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name'/>
          <input type="text" className="email" placeholder='Your Email' name='your_email'/>
          <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
          <button type='submit' className="submitBtn" value="Send">Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="" className="link" />
            <img src={InstaIcon} alt="" className="link" />
            <img src={TwitterIcon} alt="" className="link" />
            <img src={YoutubeIcon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
