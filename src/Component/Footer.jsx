
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSquareTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div>
          <h1>Tour</h1>
          <p>Choose your destination</p>
        </div>
        <div className="social-icons">
          <a href="/" className="social-link">
            <FontAwesomeIcon icon={faFacebook} className="i" />
          </a>
          <a href="/" className="social-link">
            <FontAwesomeIcon icon={faInstagram} className="i"/>
          </a>
          <a href="/" className="social-link">
            <FontAwesomeIcon icon={faSquareTwitter} className="i" />
          </a>
          <a href="/" className="social-link">
            <FontAwesomeIcon icon={faGithub} className="i"/>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="footer-column">
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">License</a>
          <a href="/">Status</a>
          <a href="/">All Versions</a>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <a href="/">Documentation</a>
          <a href="/">Tutorials</a>
          <a href="/">Support</a>
          <a href="/">Blog</a>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Discussions</a>
          <a href="/">Events</a>
          <a href="/">Meetups</a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Press</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
