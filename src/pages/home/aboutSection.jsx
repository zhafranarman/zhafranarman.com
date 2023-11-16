import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import about_img from "../../assets/images/about-image.webp"
import about_img2 from "../../assets/images/about-image2.webp"

const AboutSection = () => {

  const content = useRef(null);
  const isInView = useInView(content);

  const wordAni = {
    hidden: { y: "100%", opacity: 0, transition: { duration: 0.5 } },
    visible: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.02 * i }
    }),
  }
  const wordAni2 = {
    hidden: { y: "100%", opacity: 0, transition: { duration: 0.5 } },
    visible: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 1, delay: 0.02 * i }
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

  const phrase = `During my teenage years, I was fascinated by how technology works, and the potential for human-computer interaction always amazed me. Now, I spend most of my time creating digital experiences for people.\nI am currently freelancing and on the lookout for exciting new opportunities, especially in the realms of design and frontend development. Ready to embark on the next chapter of creativity and innovation!`

  const [momiks, setMomiks] = useState([]);

  return (
    <section className="about-section container">
      <div data-scroll data-scroll-section className="about-content inner-section" ref={content}>
        <div className="about-column">
          <motion.h2 variants={titleAni} initial="hidden" animate={isInView ? "visible" : "hidden"} className="about-title"><span className="about-title-row">Here’s the</span><span className="about-title-row">tl;dr on me</span></motion.h2>
          <div className="about-text">
            {
              phrase.split('\n').map((paragraph, paragraphIndex) => {
                return (
                  <p key={paragraphIndex}>
                    {paragraph.split(' ').map((word, index) => (
                      <span key={index} className="word-mask">
                        <motion.span
                          className="word"
                          variants={wordAni}
                          initial="hidden"
                          animate={isInView ? 'visible' : 'hidden'}
                          custom={index}
                        >
                          {word}&nbsp;
                        </motion.span>
                      </span>
                    ))}
                  </p>
                );
              })
            }
          </div>
        </div>
        <div className="about-column">
          <figure data-scroll data-scroll-speed="0.15" className="about-image-frame is-inview">
            <img className="about-image" src={about_img2} />
            <figcaption className="about-image-caption">
              Me and my friends, working on self initiated project.
            </figcaption>
          </figure>
          <figure data-scroll data-scroll-speed="0.1" className="about-image-frame is-inview">
            <img className="about-image" src={about_img} />
            <figcaption className="about-image-caption">
              Sometimes, I dig <br /> working in a chill place.
            </figcaption>
          </figure>
        </div>
        <motion.div className="about-cta" variants={ctaAni} initial="hidden" animate={isInView ? "visible" : "hidden"} >
          <a className="about-cta-text" href="#">
            Read More About <br /> My Story
          </a>
          <svg width="154" height="53" viewBox="0 0 154 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M152.501 1.49756C140 40 109.5 57 69.9999 49.5C34.3565 42.7323 1.09785 6.56696 0.99986 6.5M0.99986 6.5C0.901866 6.43304 11.4999 3.5 21.4999 4.5M0.99986 6.5C0.901866 6.43304 0.999891 28 0.999891 28" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;