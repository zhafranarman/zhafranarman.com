import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import about_img from "../../assets/images/about-rizz.webp"

const AboutSection = () => {

  const content = useRef(null);
  const isInView = useInView(content);

  const wordAni = {
    hidden: { y: "100%", opacity: 0, transition: { duration: 0.5 } },
    visible: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.015 * i }
    }),
  }

  const titleAni = {
    hidden: {
      y: "100%",
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
      y: "100%",
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4 },
    }
  }

  const phrase = "During my teenage years, I was fascinated by how technology works, and the potential for human-computer interaction always amazed me. Now, I spend most of my time creating digital experiences for people."
  const phrase2 = "I am currently freelancing and on the lookout for exciting new opportunities, especially in the realms of design and frontend development. Ready to embark on the next chapter of creativity and innovation!"

  return (
    <section className="about-section container">
      <div data-scroll data-scroll-section className="about-content inner-section" ref={content}>
        <div className="about-heading">
          <motion.h2 variants={titleAni} initial="hidden" animate={isInView ? "visible" : "hidden"} className="about-title"><span className="about-title-row">Here’s the</span><span className="about-title-row">tl;dr on me</span></motion.h2>
          <figure data-scroll data-scroll-speed="0.15" data-scroll-position="end, start" className="about-image-frame is-inview">
            <img className="about-image" src={about_img} />
            <figcaption className="about-image-caption">
              Sometimes, I dig <br /> working in a chill place.
            </figcaption>
          </figure>
        </div>
        <div>
          <p className="about-text">
            {
              phrase.split(" ").map((word, index) => {
                return <span key={index} className="word-mask"><motion.span className="word" variants={wordAni} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={index}>{word}&nbsp;</motion.span></span>
              })
            }
          </p>
          <p className="about-text">
            {
              phrase2.split(" ").map((word, index) => {
                return <span key={index} className="word-mask"><motion.span className="word" variants={wordAni} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={index}>{word}&nbsp;</motion.span></span>
              })
            }
          </p>
        </div>
        {/* <motion.a variants={ctaAni} initial="hidden" animate={isInView ? "visible" : "hidden"} className="about-me-cta" href="#">
            Read My Story
          </motion.a> */}
      </div>
    </section>
  );
}

export default AboutSection;