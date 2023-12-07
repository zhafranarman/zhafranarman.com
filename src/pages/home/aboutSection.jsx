import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import about_img from "../../assets/images/Optimized/about1.webp"
import about_img2 from "../../assets/images/Optimized/about2.webp"

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

  const phrase = `Over the past 9+ years, I've worked in various areas of digital design, including front-end development and UI/UX Design. I take pride in wearing many hats. I am currently freelancing and on the lookout for new opportunities, especially in the realms of design and frontend development. Ready to embark on the next chapter of creativity and innovation!`

  return (
    <section className="about-section container">
      <div data-scroll data-scroll-section className="about-content inner-section" ref={content}>
        <div className="about-column">
          <motion.h2 variants={titleAni} initial="hidden" animate={isInView ? "visible" : "hidden"} className="about-title">
            <span className="about-title-row">Here’s the</span>
            <span className="about-title-row">
              <span className="color-accent">tl;dr </span>on me
            </span>
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
            <img className="about-image" src={about_img} alt="Photo of Muhammad Zhafran Arman and friends working on a project" height="325" width="325" loading="lazy" title="About Photo" />
            <figcaption className="about-image-caption">
              Me and my friends, working on self initiated project.
            </figcaption>
          </figure>
          <figure data-scroll data-scroll-speed="0.09" className="about-image-frame is-inview">
            <img className="about-image" src={about_img2} alt="Photo of Muhammad Zhafran Arman and working on a chill place" height="325" width="325" loading="lazy" title="About Photo" />
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