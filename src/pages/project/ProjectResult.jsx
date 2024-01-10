const ProjectResult = ({ project }) => {
  let phrase = project.project_detail.result.result_text;

  const Color = {
    backgroundColor: project.color || 'defaultColor',
  };

  const isResultPicture1Empty = !project.project_detail.result.result_picture1;
  const isResultPicture2Empty = !project.project_detail.result.result_picture2;

  return (
    <section className="container">
      <div className="project-result-section inner-section">
        <div className="project-result-grid">
          <figure className="grid-result-wrapper">
            {!isResultPicture1Empty && (
              <div>
                <img className="gallery-result-picture" src={project.project_detail.result.result_picture1} />
                <figcaption>{project.project_detail.result.result_picture1_caption}</figcaption>
              </div>
            )}
          </figure>
          <figure className="grid-result-wrapper">
            {!isResultPicture2Empty && (
              <div>
                <img className="gallery-result-picture" src={project.project_detail.result.result_picture2} />
                <figcaption>{project.project_detail.result.result_picture2_caption}</figcaption>
              </div>
            )}
          </figure>
          <div className="grid-result-wrapper">
            <div className="project-result-text">
              <span>The Outcome</span>
              <h3>{project.project_detail.result.result_title}</h3>
              {
                phrase.split("\n").map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>
                })
              }
            </div>
          </div>
          <figure className="grid-result-wrapper">
            <img className="gallery-result-picture" src={project.project_detail.result.result_picture3} />
            <figcaption>{project.project_detail.result.result_picture3_caption}</figcaption>
          </figure>
        </div>
        {project.project_detail && project.project_detail.testimonial && (
          <div className="project-testimonial" style={{ backgroundColor: Color.backgroundColor }}>
            <div className="testimonial">
              <span>
                Testimonial
              </span>
              <p>
                &quot;{project.project_detail.testimonial.testimonial_text}&quot;
              </p>
              <div>
                - {project.project_detail.testimonial.testimonial_name}, {project.project_detail.testimonial.testimonial_position}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectResult;