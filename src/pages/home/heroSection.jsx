import { useState, useEffect } from "react"

import hero1 from "../../assets/images/hero1.webp"
import hero2 from "../../assets/images/hero2-rizz.webp"
import hero3 from "../../assets/images/hero2.webp"

const Hero = () => {

  const [scrolledClass, setScrolledClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', fadeScroll);
    return () => window.removeEventListener('scroll', fadeScroll);
  }, []);

  const fadeScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 1 ? setScrolledClass('is-scrolled') : setScrolledClass('');
    }
  };

  const phrase = "Wilujeng Tepang. I'm Muhammad Zhafran Arman, a UI & UX Designer and frontend developer."

  return (
    <section data-scroll data-scroll-section className="hero-section container">
      <div className="hero-text-container">
        <h1 className="hero-text">
          {
            phrase.split(" ").map((word, index) => {
              return <span key={index} className="word">{word}&nbsp;</span>
            })
          }
        </h1>
      </div>
      <figure data-scroll data-scroll-speed="0.1" className="hero-image-wrapper">
        {/* <figcaption className="hero-image-caption">this is me and<br />damn i look good :)</figcaption> */}
        <img src={hero1} width="100%" height="100%" alt="" className="hero-image" />
      </figure>
      <figure data-scroll data-scroll-speed="0.2" className="hero-image-wrapper">
        <img src={hero2} width="100%" height="100%" alt="" className="hero-image" />
        {/* <figcaption className="hero-image-caption">this is one of<br />my latest work.</figcaption> */}
      </figure>
      <figure data-scroll data-scroll-speed="0.3" className="hero-image-wrapper">
        <img src={hero3} width="100%" height="100%" alt="" className="hero-image" />
        {/* <figcaption className="hero-image-caption">this is one of<br />my self initiated<br />project.</figcaption> */}
      </figure>
      <div className="scroll-to">
        <div className={`scroll-to ${scrolledClass}`}>
          <span className="scroll-to-text">explore my playground</span>
          <span className="scroll-to-line grow" />
        </div>
      </div>
    </section>
  );
}

export default Hero;