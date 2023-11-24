const AboutContent = () => {
  return (
    <section className="container">
      <div className="inner-section about-content-inner-section">
        <div className="about-content-paragraph">
          <p>
            Before I stepped into the world of product design, I was a web developer. One of my earliest jobs involved writing HTML emails, in a time before email linters. Lots of wishing, hoping, and finger crossing that your email arrived in a recipient's inbox in one piece.
          </p>
          <p>
            Coding emails forced me to understand how HTML and CSS play together, a skill set I've carried and kept fresh in the years since. My side project work is just an excuse to satisfy my curiosity about new technologies and understand how the web is moving forward.
          </p>
          <p>
            Outside work, I enjoy good coffee near my home by the sea, listening to and playing music, exploring the world with my partner, and playing with my Labrottie pup, Louie.
          </p>
        </div>
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
              <p className="experience-desc">At katajihiji.id and indococotama, both under the same ownership, my responsibility are, to create of an engaging landing page. Additionally, I managed the setup of their corporate email and server configuration, blending design finesse with technical optimization."</p>
            </div>
            <div className="experience-items">
              <span className="experience-title">Akselerasi Entertaintment </span>
              <span className="experience-time">( 2020 - 2021)</span>
              <p className="experience-desc">At Akselerasi Entertainment, my primary role is a part of the design team, enhancing the visual appeal of our social media pages, making digital design for their events. Additionally as a frontend developer, I also contribute to creating a platform for simulating final exams for high school students in Indonesia. (<a href="#">SimulasiEdu</a>)</p>
            </div>
          </div>
        </article>
        <article className="education">
          <div className="education-column">
            Education
          </div>
          <div className="education-column">
            <div className="education-items">
              <span className="education-title">Institut Teknologi Nasional</span>
              <span className="education-title">2016-2023</span>
              <p>I had the privilege of revamping the GCBME website, focusing on enhancing both its design and information. The goal was to create a platform that is engaging, informative, and user-friendly.</p>
            </div>
            <div className="education-items">
              <span className="education-title">TOGAF Certification</span>
              <span className="education-title">(2023-2023)</span>
              <p>I had the privilege of revamping the GCBME website, focusing on enhancing both its design and information. The goal was to create a platform that is engaging, informative, and user-friendly.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutContent;