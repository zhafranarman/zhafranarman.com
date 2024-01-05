import { Link, useLocation } from "react-router-dom"
import { work } from "./data";

const WorkCard = ({ project }) => {

  const location = useLocation();

  // Determine the correct 'to' value based on the current pathname
  let toValue;
  if (location.pathname === '/') {
    toValue = `work/${project.id}`;
  } else if (location.pathname === '/work') {
    toValue = `${project.id}`;
  }

  return (
    <article className="work-card" key={project.id}>
      <img className="work-card-thumbnail" src={project.thumbnail} alt={project.title} />
      <div className="work-card-overlay">
        <div className="work-card-cover">
          <h3 className="work-card-title">{project.title}</h3>
          <p className="work-card-subtitle">{project.subtitle}</p>
          <ul className="work-card-categories">
            {project.tags.map((tag, index) => (
              <li key={index} className="categories">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="work-card-info">
          <div>
            <span>TL;DR</span>
            <p className="work-card-desc">{project.description}</p>
          </div>
          <Link className="work-cta" to={toValue}>
            <span>Read More</span>
            <span className="cta-icon-wrapper">
              <svg className="work-cta-icon" width="100%" height="100%" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 21C6.5 18.3585 10 12 21.5 1M21.5 1C20.1087 7.94929 20.1997 10.3802 21.5 17M21.5 1C14.2688 1.96061 11.9012 2.05341 5 1" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

const WorkList = () => {
  return (
    <section className="container">
      <div className="inner-section work-content">
        <div className="work-section-heading">
          <h3 className="work-section-title">
            Here some of the stuff I've been working on.
          </h3>
        </div>
        <div className="work-section-list">
          {work.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkList;