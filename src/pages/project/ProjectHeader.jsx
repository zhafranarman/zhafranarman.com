import { useParams } from "react-router-dom";
import project_header from "../../assets/images/project/project-header-ta.webp"

const ProjectHeader = () => {

  const {id} = useParams ();

  return (  
    <section className="project-header container">
      <div className="project-header-content inner-section">
        <img src={project_header} />
        <h1 className="project-name">{id}</h1>
      </div>
    </section>
  );
}
 
export default ProjectHeader;