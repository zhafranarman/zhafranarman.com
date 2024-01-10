import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom";
import { work } from "../work/data";
import { useEffect } from "react";


import Transition from "../../components/Transition";
import ProjectNotFound from "./ProjectNotFound";
import ProjectChallenges from "./ProjectChallanges";
import ProjectHeader from "./ProjectHeader";
import ProjectProcess from "./ProjectProcess";
import ProjectResult from "./ProjectResult";
import ProjectNextCTA from "./ProjectNextCTA";



const ProjectPage = () => {
  const { id } = useParams();
  const project = work.find((project) => project.id === id);

  const getCurrentIndex = () => {
    return work.findIndex((p) => p.id === id);
  };

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
        <Transition>  
          <ProjectNotFound />
        </Transition>
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
        <ProjectNextCTA currentProjectIndex={getCurrentIndex()} />
      </Transition>
    </>
  );
}

export default ProjectPage;