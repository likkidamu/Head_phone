import React from 'react';
import { AiFillInstagram, AiFillProfile} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 DagadDamu All rights reserverd</p>
      <p className="icons">
      <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <AiFillInstagram style={{ fontSize: "24px", color: "#E4405F" }} />
        </a>
        <a 
          href="damodharport.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Profile"
        >
          <AiFillProfile style={{ fontSize: "24px", color: "#0077B5" }} />
        </a>
      </p>
    </div>
  )
}

export default Footer
