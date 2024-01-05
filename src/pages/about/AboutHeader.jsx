import resume from "../../assets/document/resume-zhafran.pdf"

const AboutHeader = () => {
  return (
    <section className="container">
      <div className="inner-section about-header">
        <div className="about-header-column">
          <img className="about-header-image" src="https://res.cloudinary.com/djvq4m3mz/image/upload/v1704107961/about3.webp" alt="Photo of Muhammad Zhafran Arman and friends working on a project" height="350" width="350" loading="eager" title="About Photo Header" />
          <a href={resume}
            target="_blank" rel="noopener noreferrer" className="cta-resume">
            <span>Résumé</span>
            <svg className="cta-resume-icon" width="100%" height="100%" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 21C6.5 18.3585 10 12 21.5 1M21.5 1C20.1087 7.94929 20.1997 10.3802 21.5 17M21.5 1C14.2688 1.96061 11.9012 2.05341 5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="about-header-column">

          <h1 className="about-header-title">
            I'm Zhafran a UI/UX Designer & Frontend Developer from Bandung, Indonesia.
          </h1>
          <p className="about-header-text">
            Over the past 5+ years, I've worked in various areas of digital design, including front-end development, email, and web UI/UX Design. I take pride in wearing many hats.
          </p>
          <p className="about-header-text">
            Before delving into the world of UI/UX Design, my journey began as a graphic designer. One of my initial jobs involved creating designs for shirts, posters, and social media posts—a time when designer apps didn't offer an abundance of free templates. It was an enjoyable experience.
          </p>
          <p className="about-header-text">
            The turning point in my design trajectory occurred when friends introduced me to the world of UI/UX Design. I found myself captivated by the fusion of design principles and technological innovation. This newfound passion led me to become not only a UI/UX Designer but also a dedicated frontend developer.
          </p>
          <p className="about-header-text">
            Beyond the digital canvas, I relish a good cup of coffee and groove to music—sometimes even playing tunes myself. I cherish spending time with friends and family, embarking on spontaneous adventures. Just everyday stuff, you know?
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;