import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <section className="container">
      <div className="inner-section">
        <article className="experience">
          <div className="experience-column">
            <span className="experience-text">
              Work<br />Experience
            </span>
          </div>
          <div className="experience-column">
            <div className="experience-items">
              <span className="experience-title">IT Consultant</span>
              <div>
                <span> PT. Sharing Vision Indonesia</span>
                <span className="experience-time">(2024 - Present)</span>
              </div>
              <p className="experience-desc">
                At PT. Sharing Vision Indonesia, my role as a consultant involves planning IT Strategic Plans, developing enterprise architectures, and providing comprehensive IT consulting services to meet the diverse needs of businesses.
              </p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Frontend Developer & UI/UX Designer</span>
              <div>
                <span>Digitalkultr</span>
                <span className="experience-time">(2021 - Present)</span>
              </div>
              <p className="experience-desc">Digitalkultr is a creative hub I founded with friends. We specialize in crafting websites, apps, and captivating UI/UX designs for clients. But we're not just about business; we love diving into self-initiated projects that keep our creativity buzzing. The latest projects I worked on at Digital Kultur are&nbsp;
                <span><Link to="/work/studee" className="hyperlink-about">Studee LMS Concept</Link></span> and&nbsp;
                <span><Link to="/work/GCBME" className="hyperlink-about">GCBME.</Link></span>
              </p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Graphic Designer</span>
              <div>
                <span>Akselerasi Entertaintment</span>
                <span className="experience-time">(2020 - 2021)</span>
              </div>
              <p className="experience-desc">At Akselerasi Entertainment, my primary role is a part of the design team, enhancing the visual appeal of our social media pages, making digital design for their events. Additionally as a frontend developer, I also contribute to creating a platform for simulating final exams for high school students in Indonesia. (<Link to="/work/simulasiedu" className="hyperlink-about">Simulasiedu</Link>)</p>
            </div>
          </div>
        </article>
      </div>
      <article className="inner-section education">
        <div className="education-column">
          <span className="education-text">
            Education
          </span>
        </div>
        <div className="education-column">
          <div className="education-items">
            <span className="education-title">Institut Teknologi Nasional</span>
            <span className="education-time">(Bachelor of Information System)</span>
            <p className="education-desc">I graduated with a Bachelor's in Information Systems and have since excelled as a frontend developer, system analyst, and UI/UX designer.</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutContent;