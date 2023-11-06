import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";

import project1 from "../../assets/images/project/project-gcbme.webp"

const WorkSection = () => {

  const projectThumbnail = useRef(null);
  useLayoutEffect(() => {
    gsap
  })

  return (
    <section className="work-section container">
      <div className="inner-section">
        <div className="work-section-heading">
          <h3 className="work-section-title">
            Here is some of my work that I craft on the internet.
          </h3>
        </div>
        <article className="work-section-card">
          <figure className="project-content">
            <div className="project-thumbnail-wrapper">
              <img className="project-thumbnail" src={project1} height="500px" />
            </div>
            <figcaption className="project-detail">
              <h4 className="project-name">
                Web Development GCBME
              </h4>
              <p className="project-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Velit illum tenetur aliquam ipsam mollitia error. Ipsa quae facilis
                nemo blanditiis eaque officia deleniti omnis amet
              </p>
              <a className="project-cta">Learn More</a>
            </figcaption>
          </figure>
        </article>
        <article className="work-section-card">
          <figure className="project-content">
            <div className="project-thumbnail-wrapper">
              <img className="project-thumbnail" src={project1} height="500px" />
            </div>
            <figcaption className="project-detail">
              <h4 className="project-name">
                Web Development GCBME
              </h4>
              <p className="project-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Velit illum tenetur aliquam ipsam mollitia error. Ipsa quae facilis
                nemo blanditiis eaque officia deleniti omnis amet
              </p>
              <a className="project-cta">Learn More</a>
            </figcaption>
          </figure>
        </article>
        <article className="work-section-card">
          <figure className="project-content">
            <div className="project-thumbnail-wrapper">
              <img className="project-thumbnail" src={project1} height="500px" />
            </div>
            <figcaption className="project-detail">
              <h4 className="project-name">
                Web Development GCBME
              </h4>
              <p className="project-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Velit illum tenetur aliquam ipsam mollitia error. Ipsa quae facilis
                nemo blanditiis eaque officia deleniti omnis amet
              </p>
              <a className="project-cta">Learn More</a>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default WorkSection;