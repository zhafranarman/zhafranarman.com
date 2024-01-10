import Clock from "./Clock";
import resume from "../assets/document/resume-zhafran.pdf"

const Footer = () => {

  const bandungTime = Clock();

  return (
    <footer>
      <div className="container footer-wrapper">
        <div className="subfooter">
          <div className="label-wrapper">
            <div className="availibility" />
            <span className="label">
              Open to Work
            </span>
          </div>
          <div className="clock">
            <span className="time">
              {bandungTime.slice(0, 2)}
              <span className="breathing-colon">{bandungTime.slice(2, 3)}</span>
              {bandungTime.slice(3)}
            </span> in Bandung, Indonesia
          </div>
          <a className="footer-mail-wrapper" href="mailto:hi@zhafranarman.com">
            <div className="footer-mail">
              hi@zhafranarman.com
            </div>
          </a>
        </div>
        <div className="footer">
          <div className="footer-column">Zhafran Arman © 2023</div>
          <ul className="footer-column">
            <li >
              <a href="https://www.linkedin.com/in/zhafranarman/" rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/zhafranarman" rel="noreferrer" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zhafranarman" rel="noreferrer" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href={resume} target="_blank" rel="noopener noreferrer" >
                Resume
              </a>
            </li>
          </ul>
          <div className="footer-column">Designed & Developed by Zhafran Arman</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
