import { Link } from "react-router-dom";
import { work } from "../work/data";


const ProjectNextCTA = ({ currentProjectIndex }) => {

  const nextIndex = (currentProjectIndex + 1) % work.length;
  const nextProject = work[nextIndex];

  return (
    <section className="container">
      <div className="inner-section next-project-section">
        <Link className="next-project-cta" to={`/work/${nextProject.id}`}>
          <span>
            See Other Project ?
          </span>
          <div>
            {nextProject.title}
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ProjectNextCTA;