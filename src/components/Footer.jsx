const Footer = () => {
  return (
    <footer className="container">
      <div className="subfooter">
        <div className="label">get in touch</div>
        <a className="footer-mail" href="mailto:hi@zhafranarman.com">hi@zhafranarman.com</a>
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
        </ul>
        <div className="footer-column">Designed & Dev by Zhafran Arman</div>
      </div>
    </footer>
  );
}

export default Footer;
