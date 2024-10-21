import {Helmet} from "react-helmet-async"

import WorkList from "./WorkList";
import Transition from "../../components/Transition";


const Work = () => {

  return (
    <>
    <Helmet prioritizeSeoTags>
      <title>Work · Zhafran Arman</title>
      <link rel="canonical" href="https://zhafranarman.com/work" />
      <meta name="description" content="Here some of Zhafran Arman's stuff he's been working on" />
    </Helmet>
      <Transition>
        <WorkList/>
      </Transition>
    </>
  );
};

export default Work;