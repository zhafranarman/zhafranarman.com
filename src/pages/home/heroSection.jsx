import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect, } from "react";

import hero_image from "../../assets/images/hero.webp";


const Hero = () => {

  const FirstName = useRef();
  const LastName = useRef();
  const HeroImage = useRef();
  const HeroCTA = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(FirstName.current, {
        scrollTrigger: {
          trigger: FirstName.current,
          start: "start20%",
          end: "bottom start",
          scrub: true,

        },
        yPercent: 150,
      });
      gsap.to(LastName.current, {
        scrollTrigger: {
          trigger: LastName.current,
          start: "start20%",
          end: "start start",
          scrub: true,
        },
        yPercent: 150,
      });
      gsap.to(HeroImage.current, {
        scrollTrigger: {
          trigger: HeroImage.current,
          scrub: true,
          start: "start30%",
          end: "bottom top",
        },
        y: "-15%",
        rotate: "-7deg",
      });
      gsap.to(HeroCTA.current, {
        scrollTrigger: {
          trigger: HeroCTA.current,
          scrub: true,
          start: "start30%",
          end: "bottom center",
        },
        y: "100%",
        rotate: "5deg",
        opacity: 0,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="container hero-section">
      <div className="hero-content">
        <span ref={FirstName} className="name">Zhafran</span>
        <span ref={LastName} className="name">Arman</span>
        <div className="hero-image-wrapper">
          <figure ref={HeroImage} className="hero-image-frame">
            <img className="hero-image" src={hero_image} />
            <figcaption>
              <h1 className="hero-text">I'm a UI/UX designer & frontend developer. I make things on the internet.</h1>
            </figcaption>
          </figure>
          <div ref={HeroCTA} className="hero-cta">
          <span className="cta-text">Explore My <br/>Playground</span>
          <svg width="32" height="100" viewBox="0 0 32 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9224 1.42426C38.4224 49.9243 11.9986 95.9243 11.4224 98.4243M11.4224 98.4243C10.8461 100.924 4.20452 86.3299 0.922363 81.4243M11.4224 98.4243C10.8461 100.924 30.4224 89.4243 30.4224 89.4243" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;