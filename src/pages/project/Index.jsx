import {Helmet} from "react-helmet-async"
import { useParams } from "react-router-dom";

import Transition from "../../components/Transition";
import ProjectHeader from "./ProjectHeader";

const ProjectPage = () => {
  const {id} = useParams();
  return (  
    <>
     <Helmet>
      <title>Work - {id}</title>
    </Helmet>
    <Transition>
      <ProjectHeader/>
    </Transition>
    </>
  );
}
 
export default ProjectPage;