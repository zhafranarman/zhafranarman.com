const ProjectResult = ({ project }) => {

  let phrase = project.project_detail.result.result_text;

  return (
    <section className="container">
      <div className="project-result-section inner-section">
        <div className="project-result-grid">
          <figure className="grid-result-wrapper">
            <img className="gallery-result-picture" src={project.project_detail.result.result_picture1} />
            <figcaption>{project.project_detail.result.result_picture1_caption}</figcaption>
          </figure>
          <figure className="grid-result-wrapper">
            <img className="gallery-result-picture" src={project.project_detail.result.result_picture2} />
            <figcaption>{project.project_detail.result.result_picture2_caption}</figcaption>
          </figure>
          <div className="grid-result-wrapper">
            <div className="project-result-text">
              <span>The Result</span>
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
      </div>
    </section>
  );
}

export default ProjectResult;