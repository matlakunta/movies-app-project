import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <button type="button" className="footer-btn">
        <FaGoogle className="icon" />
      </button>
      <button type="button" className="footer-btn">
        <FaTwitter className="icon" />
      </button>
      <button type="button" className="footer-btn">
        <FaInstagram className="icon" />
      </button>
      <button type="button" className="footer-btn">
        <FaYoutube className="icon" />
      </button>
    </div>
    <a href="https://www.linkedin.com/in/matlakunta-satya-nikhil/overlay/contact-info/">
      <p className="contact-us">Contact us</p>
    </a>
  </>
)
export default Footer
