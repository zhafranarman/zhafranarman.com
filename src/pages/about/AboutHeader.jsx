import about_photos from "../../assets/images/Optimized/about-header.webp"
import about_photos2 from "../../assets/images/Optimized/about-header2.webp"

const AboutHeader = () => {
  return (
    <section className="container">
      <div className="inner-section about-header">
        <div className="about-header-column">
          I'm Zhafran
        </div>
        <div className="about-header-column">
          <img className="about-header-image" src={about_photos}/>
          <div className="about-header-content">
            <h1 className="about-header-title">
              I'm a UI/UX Designer & Frontend Developer working remotely from Bandung, Indonesia.
            </h1>
            <p className="about-header-text">
            Over the past 9+ years, I've worked in various areas of digital design, including front-end development, email, and web UI/UX Design. I'm proud to have worn many hats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;