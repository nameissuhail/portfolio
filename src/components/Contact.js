import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
const GithubIcon = () => <FontAwesomeIcon icon={faGithub} />;
const LinkedinIcon = () => <FontAwesomeIcon icon={faLinkedin} />;
const InstagramIcon = () => <FontAwesomeIcon icon={faInstagram} />;
const TwitterIcon = () => <FontAwesomeIcon icon={faTwitter} />;
const EmailIcon = () => <FontAwesomeIcon icon={faEnvelope} />;
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="social-icons">
        <a href="https://github.com/nameissuhail" target="_blank" rel="noopener noreferrer">
          <GithubIcon /><br></br>
        </a>
        <a href="https://www.linkedin.com/in/suhailsyed1345" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon /><br></br>
        </a>
        <a href="https://www.instagram.com/nameissuhail" target="_blank" rel="noopener noreferrer">
          <InstagramIcon /><br></br>
        </a>
        <a href="https://twitter.com/nameissuhail" target="_blank" rel="noopener noreferrer">
          <TwitterIcon /><br></br>
        </a>
        <a href="suhailsyed1345@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon /><br></br>
        </a>
      </div>
    </div>
  );
};
export default Contact;
