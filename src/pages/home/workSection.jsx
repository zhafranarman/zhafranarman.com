import project1 from "../../assets/images/project/project-gcbme.webp"
import project2 from "../../assets/images/project/project-ta.webp"
import project3 from "../../assets/images/project/project-studee.webp"
import project4 from "../../assets/images/project/project-indococotama.webp"
import project5 from "../../assets/images/project/project-bellrock.webp"
import project6 from "../../assets/images/project/project-simulasiedu.webp"


const WorkSection = () => {
  return (
    <section className="work-section container">
        <div className="inner-section">
          <div className="work-section-heading">
            <h3 className="work-section-title">
              Here some of the stuff I've been working on.
            </h3>
          </div>
          <div className="work-section-list">
            <article className="work-section-card">
              <img className="work-card-thumbnail" src={project1} />
              <div className="work-card-overlay">
                <div className="work-card-cover">
                  <h3 className="work-card-title">
                    GCBME
                  </h3>
                  <ul className="work-card-categories">
                    <li className="categories">Web Development</li>
                    <li className="categories">UI/UX Design</li>
                  </ul>
                </div>
                <div className="work-card-info">
                  <p className="work-card-desc">
                    GCBME is an annual conference hosted by Universitas Pendidikan Indonesia. I had the privilege of revamping the GCBME website, focusing on enhancing both its design and information. The goal was to create a platform that is engaging, informative, and user-friendly.
                  </p>
                </div>
              </div>
            </article>
            <article className="work-section-card">
              <img className="work-card-thumbnail" src={project2} />
              <div className="work-card-overlay">
                <div className="work-card-cover">
                  <h3 className="work-card-title">
                    Bachelor's Research
                  </h3>
                  <ul className="work-card-categories">
                    <li className="categories">Enterprise Architecture</li>
                    <li className="categories">TOGAF</li>
                  </ul>
                </div>
                <div className="work-card-info">
                  <p className="work-card-desc">
                    Bachelor's Research During the last semester of my college degree, I researched and worked on creating an enterprise architecture for an identity management system using the TOGAF framework. The goal of this research was to develop an architecture for identity management system to pave the way for a smart campus in the future.
                  </p>
                </div>
              </div>
            </article>
            <article className="work-section-card">
              <img className="work-card-thumbnail" src={project3} />
              <div className="work-card-overlay">
                <div className="work-card-cover">
                  <h3 className="work-card-title">
                    Studee
                  </h3>
                  <ul className="work-card-categories">
                    <li className="categories">Web Development</li>
                    <li className="categories">UI/UX Design</li>
                  </ul>
                </div>
                <div className="work-card-info">
                  <p className="work-card-desc">
                    Studee, a concept for a web-based application I worked on, aims to adapt the learning experience for students in Indonesia through a dynamic learning management system. The project is about making studying more accessible and enjoyable. Studee is designed to fit the educational process in Indonesia, offering a practical approach to learning and growth.
                  </p>
                </div>
              </div>
            </article>
            <article className="work-section-card">
              <img className="work-card-thumbnail" src={project4} />
              <div className="work-card-overlay">
                <div className="work-card-cover">
                  <h3 className="work-card-title">
                    Indococotama
                  </h3>
                  <ul className="work-card-categories">
                    <li className="categories">Web Development</li>
                    <li className="categories">UI/UX Design</li>
                  </ul>
                </div>
                <div className="work-card-info">
                  <p className="work-card-desc">
                    At indococotama, my responsibilies were, to create of an engaging landing page. Additionally, I managed the setup of their corporate email and server configuration, blending design finesse with technical optimization.
                  </p>
                </div>
              </div>
            </article>
            <article className="work-section-card">
              <img className="work-card-thumbnail" src={project5} />
              <div className="work-card-overlay">
                <div className="work-card-cover">
                  <h3 className="work-card-title">
                    Bellrock Artisan Coffee
                  </h3>
                  <ul className="work-card-categories">
                    <li className="categories">Brand Design</li>
                    <li className="categories">UI/UX Design</li>
                  </ul>
                </div>
                <div className="work-card-info">
                  <p className="work-card-desc">
                    At Bellrock Artisan, I got to dive into the cool world of designing a brand identity for Bellrock Artisan Coffee. The vibe? Creating a coffee brand that's like a good friend - perfect for everyone, no matter the age. It's not just coffee; it's about blending flavors and vibes to make Bellrock Artisan Coffee the go-to for all the cool coffee lovers out there, young and not-so-young!
                  </p>
                </div>
              </div>
            </article>
            <article className="work-section-card">
              <img className="work-card-thumbnail" src={project6} />
              <div className="work-card-overlay">
                <div className="work-card-cover">
                  <h3 className="work-card-title">
                    SimulasiEdu
                  </h3>
                  <ul className="work-card-categories">
                    <li className="categories">Brand Design</li>
                    <li className="categories">UI/UX Design</li>
                  </ul>
                </div>
                <div className="work-card-info">
                  <p className="work-card-desc">
                  As a designer and frontend developer at Akselerasi Entertainment, I played a key role in creating a brand and designing the UI/UX for a platform that simulates final exams for high school students in Indonesia. It's been a rewarding blend of design and technical finesse, ensuring an engaging experience for students preparing for exams.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
  );
}

export default WorkSection;