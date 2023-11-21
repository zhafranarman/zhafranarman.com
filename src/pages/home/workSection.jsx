import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

import project1 from "../../assets/images/project/project-gcbme.webp"
import project2 from "../../assets/images/project/project-ta.webp"

const WorkSection = () => {

  const projectThumbnail = useRef([]);
  projectThumbnail.current = [];

  const projectDesc = useRef([]);
  projectDesc.current = [];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      projectThumbnail.current.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "0px bottom",
            end: "bottom+=200px bottom",
            scrub: true,
          },
          xPercent: 30,
          rotate: 0,
        })
      })
      projectDesc.current.forEach((el2) => {
        gsap.from(el2, {
          scrollTrigger: {
            trigger: el2,
            start: "0px bottom",
            end: "bottom+=200px bottom",
            scrub: true,
          },
          xPercent: -30,
          rotate: 0,
          opacity: 0.5,
        })
      })
    });
    return () => ctx.revert();
  }, []);

  const addtoRefThumb = (el) => {
    if (el && !projectThumbnail.current.includes(el)) {
      projectThumbnail.current.push(el);
    }
  }

  const addtoRefsDesc = (el2) => {
    if (el2 && !projectDesc.current.includes(el2)) {
      projectDesc.current.push(el2);
    }
  }

  return (
    <section className="work-section container">
      <div className="inner-section">
        <div className="work-section-heading">
          <h3 className="work-section-title">
            Here some of the cool stuff I've been working on lately.
          </h3>
        </div>
        <article className="work-section-card">
          <figure className="project-content">
            <div className="project-thumbnail-wrapper">
              <img ref={addtoRefThumb} className="project-thumbnail" src={project1} height="500px" />
            </div>
            <figcaption ref={addtoRefsDesc} className="project-detail">
              <h4 className="project-name">
                Web Development GCBME
              </h4>
              <p className="project-desc">
                GCBME is an annual conference hosted by Universitas Pendidikan Indonesia. I had the privilege of revamping the GCBME website, focusing on enhancing both its design and information. The goal was to create a platform that is engaging, informative, and user-friendly.
              </p>
              <a className="project-cta" href="#">Read Case Study </a>
            </figcaption>
          </figure>
        </article>
        <article className="work-section-card">
          <figure className="project-content">
            <div className="project-thumbnail-wrapper">
              <img ref={addtoRefThumb} className="project-thumbnail" src={project2} height="500px" />
            </div>
            <figcaption ref={addtoRefsDesc} className="project-detail">
              <h4 className="project-name">
                Bachelor's Research
              </h4>
              <p className="project-desc">
              During the last semester of my college degree, I researched and worked on creating an enterprise architecture for an identity management system using the TOGAF framework. The goal of this research was to develop an architecture for identity management system to pave the way for a smart campus in the future.
              </p>
              <a className="project-cta" href="#">Read Case Study </a>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default WorkSection;