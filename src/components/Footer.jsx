import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Head.css";
function Footer() {
  return (
    <div className="main">
      <div className="socials">
        <a href="">
          <FaFacebookSquare />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </div>
      <div className="copy">
        <p>Copyright &copy;2020 All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;
