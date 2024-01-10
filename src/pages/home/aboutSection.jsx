import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import resume from "../../assets/document/resume-zhafran.pdf"

const AboutSection = () => {

  const content = useRef(null);
  const isInView = useInView(content);

  const wordAni = {
    hidden: { y: "100%", opacity: 0, transition: { duration: 0.5 } },
    visible: (i) => ({
      y: "20%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.015 * i }
    }),
  }
  const titleAni = {
    hidden: {
      y: "30%",
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: { duration: 1 },
    }
  }
  const ctaResAni = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    }
  }
  const ctaAni = {
    hidden: {
      y: "20%",
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
    }
  }

  const phrase = `Over the past 4 years, I've worked in various areas of digital design, including front-end development and UI/UX Design. I take pride in wearing many hats. I am currently freelancing and on the lookout for new opportunities, especially in the realms of design and frontend development. Ready to embark on the next chapter of creativity and innovation!`

  return (
    <section className="about-section container">
      <motion.a href={resume} target="_blank" rel="noopener noreferrer" className="about-resume-cta"
        variants={ctaResAni} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.svg width="100%" height="100%" viewBox="0 0 113 82" fill="none" xmlns="http://www.w3.org/2000/svg"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <path d="M40.9169 7.66516C11.9201 17.7722 -3.69854 37.2659 2.25457 57.6681C8.20768 78.0704 46.5782 82.6205 64.7965 80.5419C88.1076 77.8823 114.35 59.7307 111.832 36.1069C109.313 12.4831 92.6562 -7.22934 30.1142 4.47351" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
        </motion.svg>
        <div>
          <div>Read Résumé</div>
        </div>
      </motion.a>
      <div data-scroll data-scroll-section className="about-content inner-section" ref={content}>
        <div className="about-column">
          <motion.h2 variants={titleAni} initial="hidden" animate={isInView ? "visible" : "hidden"} className="about-title">
            <span className="about-title-row">Here’s the</span>
            <span className="about-title-row">tl;dr on me</span>
          </motion.h2>
          <div className="about-text">
            {
              phrase.split(" ").map((word, index) => {
                return <span key={index} className="word-mask"><motion.span className="word" variants={wordAni} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={index}>{word}&nbsp;</motion.span></span>
              })
            }
          </div>
          <motion.div className="about-cta" variants={ctaAni} initial="hidden" animate={isInView ? "visible" : "hidden"} >
            <Link to="/about" className="about-cta-text" href="#">
              Read My Story
            </Link>
          </motion.div>
        </div>
        <div className="about-column">
          <figure data-scroll data-scroll-speed="0.08" className="about-image-frame is-inview">
            <img className="about-image" src="https://res.cloudinary.com/djvq4m3mz/image/upload/v1704107885/about1.webp" alt="Photo of Muhammad Zhafran Arman and friends working on a project" height="325" width="325" loading="lazy" title="About Photo" />
            <figcaption className="about-image-caption">
              Me and my friends, working on self initiated project.
            </figcaption>
          </figure>
          <figure data-scroll data-scroll-speed="0.09" className="about-image-frame is-inview">
            <img className="about-image" src="https://res.cloudinary.com/djvq4m3mz/image/upload/v1704107885/about2.webp" alt="Photo of Muhammad Zhafran Arman and working on a chill place" height="325" width="325" loading="lazy" title="About Photo" />
            <figcaption className="about-image-caption">
              Sometimes, I dig <br /> working in a chill place.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;