import { useParams } from "react-router-dom";
import { work } from "../work/data";

const ProjectHeader = () => {

  const { id } = useParams();
  const project = work.find((project) => project.id === id);

  if (!project) {
    return (
      <div className="container">
        <h1>
          Project not found
        </h1>
      </div>
    )
  }

  return (
    <section className="project-header container">
      <div className="project-header-content inner-section"><img src={project.image} alt={project.title} />
        <div className="project-title-section">
          <h1 className="project-title">{project.title}</h1>
          <h2 className="project-subtitle">{project.subtitle}</h2>
        </div>
        <div className="project-brief">
          <p className="project-desc">
            {project.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectHeader;