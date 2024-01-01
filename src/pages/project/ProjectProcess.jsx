const ProjectProcess = ({ project }) => {

  let phrase = project.project_detail.process.process_text;
  
  return (
    <section className="container">
      <div className="inner-section project-process-section">
        <div className="project-process-gallery">
          <figure className="gallery-process-wrapper">
            <img className="gallery-process-picture" src={project.project_detail.process.process_picture1} />
            <figcaption>{project.project_detail.process.process_picture1_caption}</figcaption>
          </figure>
          <figure className="gallery-process-wrapper">
            <img className="gallery-process-picture" src={project.project_detail.process.process_picture2} />
            <figcaption>{project.project_detail.process.process_picture2_caption}</figcaption>
          </figure>
          <figure className="gallery-process-wrapper">
            <img className="gallery-process-picture" src={project.project_detail.process.process_picture3} />
            <figcaption>{project.project_detail.process.process_picture3_caption}</figcaption>
          </figure>
          <figure className="gallery-process-wrapper">
            <img className="gallery-process-picture" src={project.project_detail.process.process_picture4} />
            <figcaption>{project.project_detail.process.process_picture4_caption}</figcaption>
          </figure>
        </div>
        <div className="project-process-text">
          <span>The Process</span>
          <h3>{project.project_detail.process.process_title}</h3>
          {
            phrase.split("\n").map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default ProjectProcess;