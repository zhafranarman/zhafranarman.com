import { useRef } from "react"
import { motion, useInView } from "framer-motion"


const AboutSection = () => {

  const content = useRef(null);
  const isInView = useInView(content);

  const wordAni = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.015 * i }
    }),
  }

  const titleAni = {
    hidden: {
      y: "100%",
      opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition : { duration: 0.5 },
    }
  }

  const phrase = `As a kid, my dad was my tech guru, opening my eyes to the magic of technology. Now, I'm on the internet, crafting digital experiences for people. Who knew the kid who thought a computer mouse was a pet would grow up to be an internet wizard?`

  return (
    <section className="about-section">
      <div className="about-content container">
        <motion.h3 ref={content} variants={titleAni} initial="hidden" animate={isInView ? "visible" : "hidden"} className="about-title">A Little Tale About Myself</motion.h3>
        <p className="about-text">
          {
            phrase.split(" ").map((word, index) => {
              return <span key={index} className="word-mask"><motion.span className="word" variants={wordAni} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={index}>{word}&nbsp;</motion.span></span>
            })
          }
        </p>
      </div>
    </section>
  );
}

export default AboutSection;