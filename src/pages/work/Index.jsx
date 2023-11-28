import {Helmet} from "react-helmet-async"

import WorkContent from "./WorkContent";
import Transition from "../../components/Transition";


const Work = () => {
  return (
    <>
    <Helmet prioritizeSeoTags>
      <title>Work — Zhafran Arman</title>
      <link rel="canonical" href="https://zhafranarman.com/work" />
    </Helmet>
      <Transition>
        <WorkContent />
      </Transition>
    </>
  );
};

export default Work;