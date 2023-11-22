import about_photos from "../../assets/images/Optimized/about-header.webp"
import about_photos2 from "../../assets/images/Optimized/about-header2.webp"

const AboutHeader = () => {
  return (
    <section className="container">
      <div className="inner-section about-header">
        <div className="about-header-column">
          <p className="about-sub-sub">The Story About</p>
          <h1 className="about-header-text">
            Muhammad Zhafran<br /> Arman <span className="about-header-subtitle">/zhàfroon/</span>
          </h1>
        </div>
        <div className="about-header-column">
          <img className="about-header-image" src={about_photos} />
          <img className="about-header-image" src={about_photos2} />
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;