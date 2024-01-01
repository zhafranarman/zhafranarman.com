const AboutContent = () => {
  return (
    <section className="container">
      <div className="inner-section">
        <article className="experience">
          <div className="experience-column">
            <span className="experience-text">
              Experience
            </span>
          </div>
          <div className="experience-column">
            <div className="experience-items">
              <span className="experience-title">Digitalkultr</span>
              <span className="experience-time">( 2018 - Present )</span>
              <p className="experience-desc">Digitalkultr is a creative hub I founded with friends. We specialize in crafting websites, apps, and captivating UI/UX designs for clients. But we're not just about business; we love diving into self-initiated projects that keep our creativity buzzing. The latest projects I worked on at Digital Kultur are&nbsp;
                <span><a href="#" className="hyperlink-about">Studee.com (Web Apps)</a></span> and&nbsp;
                <span><a href="#" className="hyperlink-about">Cre for Earth (E-commerce Website).</a></span></p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Institut Teknologi Nasional</span>
              <span className="experience-time">( 2023 )</span>
              <p className="experience-desc">
                For my final project during my college years, I had the opportunity to engage in research focused on creating an enterprise architecture for an Identity Management System utilizing the TOGAF framework. The objective of this research was to design a robust architecture for identity management, laying the groundwork for a future-ready, Smart campus (<a href="#" className="hyperlink-about">See The Publication</a>).</p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Katajihiji, Indococotama</span>
              <span className="experience-time">( 2021 - 2023)</span>
              <p className="experience-desc">At katajihiji.id and indococotama, both under the same ownership, my responsibilities were, to create of an engaging landing page. Additionally, I managed the setup of their corporate email and server configuration, blending design finesse with technical optimization.</p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Akselerasi Entertaintment </span>
              <span className="experience-time">( 2020 - 2021)</span>
              <p className="experience-desc">At Akselerasi Entertainment, my primary role is a part of the design team, enhancing the visual appeal of our social media pages, making digital design for their events. Additionally as a frontend developer, I also contribute to creating a platform for simulating final exams for high school students in Indonesia. (<a href="#" className="hyperlink-about">SimulasiEdu</a>)</p>
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