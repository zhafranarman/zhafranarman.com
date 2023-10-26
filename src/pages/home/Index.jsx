import { useState, useEffect } from "react"


import hero1 from "../../assets/images/hero1.webp"
import hero2 from "../../assets/images/hero2.webp"
import hero3 from "../../assets/images/hero3.webp"

const Home = () => {

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
  return (
    <>
      <section data-scroll data-scroll-section className="hero-section container">
        <div className="hero-text-container">
          <span className="hero-text">Wilujeng Tepang. </span>
          <h1 className="hero-text">
            I&apos;m Muhammad Zhafran Arman, a UI & UX Designer and frontend developer.
          </h1>
        </div>
        <figure data-scroll data-scroll-speed="0.1" className="hero-image-wrapper image-1">
          <img src={hero1} width="100%" height="100%" alt="" className="hero-image"/>
        </figure>
        <figure data-scroll data-scroll-speed="0.2" className="hero-image-wrapper image-2">
          <img src={hero3} width="100%" height="100%" alt="" className="hero-image"/>
        </figure>
        <figure data-scroll data-scroll-speed="0.3" className="hero-image-wrapper image-3">
          <img src={hero2} width="100%" height="100%" alt="" className="hero-image"/>
        </figure>
        <div className="scroll-to">
        <div className={`scroll-to ${scrolledClass}`}>
          <span className="scroll-to-text">Explore Playground</span>
          <span className="scroll-to-line grow" />
        </div>
      </div>
      </section>
    </>
  );
}

export default Home;