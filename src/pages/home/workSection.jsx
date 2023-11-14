import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

import project1 from "../../assets/images/project/project-gcbme.webp"

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
            Here is some of my work that I craft on the internet.
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
                I revamped the GCBME website in three months, enhancing both its design and information. The aim was to create an engaging, user-friendly platform.
              </p>
            </figcaption>
          </figure>
        </article>
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
                I revamped the GCBME website in three months, enhancing both its design and information. The aim was to create an engaging, user-friendly platform.
              </p>
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default WorkSection;