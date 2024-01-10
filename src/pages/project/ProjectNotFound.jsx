import { Link } from "react-router-dom";
import not_found_illu from "../../assets/images/project_notfound.webp"

const ProjectNotFound = () => {
  return (
    <section className="container">
      <div className="inner-section not-found-section">
        <div className="not-found-illu-wrapper">
          <img className="not-found-illu" height="100%" width="100%" src={not_found_illu} />
        </div>
        <div className="not-found-text">
          <h1>
            Oops! I haven't created that project yet.
          </h1>
          <p>
            Here's an idea: why don't you tell me about the project you've been looking for? Maybe we can make it happen.
          </p>
          <Link className="not-found-cta" to="/">Go To Homepage</Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectNotFound;