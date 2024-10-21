import { Helmet } from "react-helmet-async"

import Transition from "../../components/Transition";
import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>About · Zhafran Arman</title>
        <meta name="description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
        <link rel="canonical" href="https://zhafranarman.com/about" />

        <meta property="og:title" content="About · Zhafran Arman" />
        <meta property="og:description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
        <meta property="og:url" content="https://zhafranarman.com/about" />

        <meta name="twitter:title" content="About · Zhafran Arman" />
        <meta name="twitter:description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
      </Helmet>
      <Transition>
        <AboutHeader />
        <AboutContent />
      </Transition>
    </>
  );
};

export default About;