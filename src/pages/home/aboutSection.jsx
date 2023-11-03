import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import illu_about1 from "../../assets/images/illu_about.webp"
import illu_about2 from "../../assets/images/illu_about2.webp"


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
      transition: { duration: 0.5 },
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
      transition: { duration: 0.5, delay: 0.8 },
    }
  }

  const phrase = `As a kid, my dad was my tech guru, opening my eyes to the magic of technology. Now, I'm on the internet, crafting digital experiences for people. Who knew the kid who thought a computer mouse was a pet would grow up to be an internet wizard?`

  return (
    <section className="about-section">
      <div ref={content} className="about-content">
        <motion.h3  variants={titleAni} initial="hidden" animate={isInView ? "visible" : "hidden"} className="about-title">A Little Tale About Myself</motion.h3>
        <p className="about-text">
          {
            phrase.split(" ").map((word, index) => {
              return <span key={index} className="word-mask"><motion.span className="word" variants={wordAni} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={index}>{word}&nbsp;</motion.span></span>
            })
          }
        </p>
        <motion.a variants={ctaAni} initial="hidden" animate={isInView ? "visible" : "hidden"} className="about-me-cta" href="#">
          Learn More
        </motion.a>
      <img className="illu_about" src={illu_about1}/>
      <img className="illu_about2" src={illu_about2}/>
      </div>
    </section>
  );
}

export default AboutSection;