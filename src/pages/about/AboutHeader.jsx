import about_photos from "../../assets/images/Optimized/about-header.webp"

const AboutHeader = () => {
  return (
    <section className="container">
      <div className="inner-section about-header">
        <div className="about-header-column">
          I'm Zhafran
        </div>
        <div className="about-header-column">
          <img className="about-header-image" src={about_photos} />
          <div className="about-header-content">
            <h1 className="about-header-title">
              I'm a UI/UX Designer & Frontend Developer from Bandung, Indonesia.
            </h1>
            <p className="about-header-text">
              Over the past 9+ years, I've worked in various areas of digital design, including front-end development, email, and web UI/UX Design. I take pride in wearing many hats.
            </p>
            <p className="about-header-text">
              Before delving into the world of UI/UX Design, my journey began as a graphic designer. One of my initial jobs involved creating designs for shirts, posters, and social media posts—a time when designer apps didn't offer an abundance of free templates. It was an enjoyable experience, distinctly different from my college department.
            </p>
            <p className="about-header-text">
            The turning point in my design trajectory occurred when friends introduced me to the world of UI/UX Design. I found myself captivated by the fusion of design principles and technological innovation. This newfound passion led me to become not only a frontend developer but also a dedicated UI/UX Designer.
            </p>
            <p className="about-header-text">
            Beyond the digital canvas, I relish a good cup of coffee and groove to music—sometimes even playing tunes myself. I cherish spending time with friends and family, embarking on spontaneous adventures. Just everyday stuff, you know?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;