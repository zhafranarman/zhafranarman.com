import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

import project1 from "../../assets/images/project/project-gcbme.webp"

const WorkSection = () => {

  const projectThumbnail = useRef();
  const projectDesc = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
        gsap.from(projectThumbnail.current, {
          scrollTrigger:{
            trigger: projectThumbnail.current,
            start: "0px bottom",
            end: "bottom+=200px bottom",
            scrub: true,
          },
          xPercent: 30,
          rotate: 0,
        });
        gsap.from(projectDesc.current, {
          scrollTrigger:{
            trigger: projectDesc.current,
            start: "0px bottom",
            end: "bottom+=200px bottom",
            scrub: true,
          },
          xPercent: -30,
          rotate: 0,
          opacity: 0.5,
        });
        
    });
    return () => ctx.revert();
    }, [projectThumbnail.current]);

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
              <img ref={projectThumbnail} className="project-thumbnail" src={project1} height="500px" />
            </div>
            <figcaption ref={projectDesc} className="project-detail">
              <h4 className="project-name">
                Web Development GCBME
              </h4>
              <p className="project-desc">
                I revamped the GCBME website in three months, enhancing both its design and information. The aim was to create an engaging, user-friendly platform.
              </p>
              {/* <a className="project-cta">Learn More</a> */}
            </figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}

export default WorkSection;