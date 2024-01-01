
const ProjectChallenges = ({ project }) => {

  return (
    <section className="container">
      <div className="challenges-section inner-section">
        <figure className="challenges-section-picture-wrapper">
          <img className="challenges-section-picture" src={project.project_detail.challenges.challenges_picture} />
          <figcaption>{project.project_detail.challenges.challenges_picture_caption}</figcaption>
        </figure>
        <div className="challenges-section-text">
          <div className="the challanges">
            <span>The Challenges</span>
            <p>{project.project_detail.challenges.challenges_text}</p>
          </div>
          <div className="the challanges">
            <span>The Solution</span>
            <p>{project.project_detail.challenges.solution_text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectChallenges;