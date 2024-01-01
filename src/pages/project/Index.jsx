import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";
import { work } from "../work/data";
import { useEffect } from "react";


import ProjectNotFound from "./ProjectNotFound";
import Transition from "../../components/Transition";
import ProjectChallenges from "./ProjectChallanges";
import ProjectHeader from "./ProjectHeader";
import ProjectProcess from "./ProjectProcess";
import ProjectResult from "./ProjectResult";


const ProjectPage = () => {
  const { id } = useParams();
  const project = work.find((project) => project.id === id);

  useEffect(() => {
    // Check if the viewport width is less than or equal to 768 pixels (adjust as needed)
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Perform actions or add scripts specific to mobile devices
      console.log("User is on a mobile device!");
    }
  }, []);

  if (!project) {
    return (
      <>
        <Helmet>
          <title>Project Not Found</title>
        </Helmet>
        <ProjectNotFound />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Work - {project.title}</title>
      </Helmet>
      <Transition>  
        <ProjectHeader project={project} />
        <ProjectChallenges project={project} />
        <ProjectProcess project={project} />
        <ProjectResult project={project} />
      </Transition>
    </>
  );
}

export default ProjectPage;