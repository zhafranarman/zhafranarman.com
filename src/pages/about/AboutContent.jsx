const AboutContent = () => {
  return (
    <section className="container">
      <div className="inner-section">
        <article className="experience">
          <div className="experience-column">
            Experience
          </div>
          <div className="experience-column">
            <div className="experience-items">
              <span className="experience-title">Digitalkultr</span>
              <span className="experience-time">( 2018 - Present )</span>
              <p className="experience-desc">Digitalkultr is a creative hub I founded with friends. We specialize in crafting websites, apps, and captivating UI/UX designs for clients. But we're not just about business; we love diving into self-initiated projects that keep our creativity buzzing. The latest projects I worked on at Digital Kultur are <span><a href="#">Studee.com (Web Apps)</a></span> and <span><a href="#">Cre for Earth (E-commerce Website).</a></span></p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Institut Teknologi Nasional</span>
              <span className="experience-time">( 2023 )</span>
              <p className="experience-desc">
                For my final project during my college years, I had the opportunity to engage in research focused on creating an enterprise architecture for an Identity Management System utilizing the TOGAF framework. The objective of this research was to design a robust architecture for identity management, laying the groundwork for a future-ready, Smart campus (<a href="#">See The Publication</a>).</p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Katajihiji, Indococotama</span>
              <span className="experience-time">( 2021 - 2023)</span>
              <p className="experience-desc">At katajihiji.id and indococotama, both under the same ownership, my responsibilies were, to create of an engaging landing page. Additionally, I managed the setup of their corporate email and server configuration, blending design finesse with technical optimization."</p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Akselerasi Entertaintment </span>
              <span className="experience-time">( 2020 - 2021)</span>
              <p className="experience-desc">At Akselerasi Entertainment, my primary role is a part of the design team, enhancing the visual appeal of our social media pages, making digital design for their events. Additionally as a frontend developer, I also contribute to creating a platform for simulating final exams for high school students in Indonesia. (<a href="#">SimulasiEdu</a>)</p>
            </div>
          </div>
        </article>
      </div>
      <div className="inner-section">
        <article className="education">
          <div className="education-column">
            Education
          </div>
          <div className="education-column">
            <div className="education-items">
              <span className="education-title">Institut Teknologi Nasional</span>
              <span className="education-time">(Bachelor of Information System)</span>
              <p className="education-desc">During my college years, my academic focus was on Information Systems. This dynamic field taught me the art of blending business with technology, emphasizing the creation of enterprise architecture and the design of holistic systems. Beyond textbooks, I gained hands-on experience in applying these concepts to craft innovative solutions at the intersection of business and technology.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutContent;