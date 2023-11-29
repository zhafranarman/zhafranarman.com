import work1 from "../../assets/images/Optimized/work-page-gcbme.webp"
import work2 from "../../assets/images/Optimized/work-page-ta.webp"
import work3 from "../../assets/images/Optimized/work-page-Indococotama.webp"

const WorkContent = () => {
  return (
    <section className="container work-content">
      <div className="work-content-container inner-section">
        <article className="work-card-container">
          <figure className="work-card">
            <figcaption className="work-card-info">
              <h2 className="work-card-title">
                Web Development GCBME
              </h2>
              <p className="work-card-desc">
                GCBME is an annual conference hosted by Universitas Pendidikan Indonesia. I had the privilege of revamping the GCBME website, focusing on enhancing both its design and information. The goal was to create a platform that is engaging, informative, and user-friendly.
              </p>
            </figcaption>
            <div className="work-card-wrapper">
              <img src={work1} className="work-card-image" />
            </div>
          </figure>
        </article>
        <article className="work-card-container">
          <figure className="work-card">
            <figcaption className="work-card-info">
              <h2 className="work-card-title">
                Bachelor's Research
              </h2>
              <p className="work-card-desc">
                Bachelor's Research
                During the last semester of my college degree, I researched and worked on creating an enterprise architecture for an identity management system using the TOGAF framework. The goal of this research was to develop an architecture for identity management system to pave the way for a smart campus in the future.
              </p>
            </figcaption>
            <div className="work-card-wrapper">
              <img src={work2} className="work-card-image" />
            </div>
          </figure>
        </article>
        <article className="work-card-container">
          <figure className="work-card">
            <figcaption className="work-card-info">
              <h2 className="work-card-title">
                Indococotama
              </h2>
              <p className="work-card-desc">
                Bachelor's Research
                During the last semester of my college degree, I researched and worked on creating an enterprise architecture for an identity management system using the TOGAF framework. The goal of this research was to develop an architecture for identity management system to pave the way for a smart campus in the future.
              </p>
            </figcaption>
            <div className="work-card-wrapper">
              <img src={work3} className="work-card-image" />
            </div>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default WorkContent;