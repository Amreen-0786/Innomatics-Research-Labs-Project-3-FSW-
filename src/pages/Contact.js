import "../pages/PageStyles.css";
import contactBg from "../assets/contact_bg.jpeg";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <div className="page" style={{ backgroundImage: `url(${contactBg})` }}>
      <h1>Contact Me</h1>
      
      <p>
        <FaEnvelope /> Email: 
        <a href="mailto:amreenshaikh6303@gmail.com" className="contact-link"> amreenshaikh6303@gmail.com</a>
      </p>

      <p>
        <FaPhone /> Phone: 
        <a href="tel:+916303425607" className="contact-link"> +91 6303425607</a>
      </p>

      <div className="contact-buttons">
        <a 
          href="www.linkedin.com/in/amreenshaik

" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn linkedin"
        >
          <FaLinkedin /> Connect on LinkedIn
        </a>

        <a 
          href="https://github.com/Amreen-0786" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn github"
        >
          <FaGithub /> View My GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
