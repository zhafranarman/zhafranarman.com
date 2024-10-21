import { Helmet } from "react-helmet-async"

import WorkList from "./WorkList";
import Transition from "../../components/Transition";


const Work = () => {

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Work · Zhafran Arman</title>
        <link rel="canonical" href="https://zhafranarman.com/work" />
        <meta name="description" content="Here some of Zhafran Arman's stuff he's been working on" />

        <title>Work · Zhafran Arman</title>
        <meta name="description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
        <link rel="canonical" href="https://zhafranarman.com/work" />

        <meta property="og:title" content="Work · Zhafran Arman" />
        <meta property="og:description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
        <meta property="og:url" content="https://zhafranarman.com/work" />

        <meta name="twitter:title" content="Work · Zhafran Arman" />
        <meta name="twitter:description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
      </Helmet>
      <Transition>
        <WorkList />
      </Transition>
    </>
  );
};

export default Work;