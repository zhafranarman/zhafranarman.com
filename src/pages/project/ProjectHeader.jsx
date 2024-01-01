const ProjectHeader = ({ project }) => {

  return (
    <section className="container project-header">
      <div className="project-header-content inner-section">
        <div className="project-thumbnail-wrapper">
          <img className="project-thumbnail" src={project.project_detail.project_header} alt={project.title} />
        </div>
        <div className="project-brief">
          <div>
            <h1 className="project-title">{project.title}</h1>
            <h2 className="project-subtitle">{project.subtitle}</h2>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tags">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="project-tldr">
            <span>TL;DR</span>
            <p className="project-desc">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectHeader;