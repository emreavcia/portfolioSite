import "../css/footer.css";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <ul className="social-media-icons">
        <li className="social-media-icon">
          <a
            href="https://github.com/emreavcia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>{" "}
        </li>
        <li className="social-media-icon">
          <a
            href="https://www.linkedin.com/in/emre-avci-765888220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
