import {Helmet} from "react-helmet-async"

import Transition from "../../components/Transition";
import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <>
    <Helmet prioritizeSeoTags>
      <title>About · Zhafran Arman</title>
      <link rel="canonical" href="https://zhafranarman.com/about" />
    </Helmet>
      <Transition>
        <AboutHeader />
        <AboutContent />
      </Transition>
    </>
  );
};

export default About;