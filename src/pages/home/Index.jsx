import {Helmet} from "react-helmet-async"

import Transition from "../../components/Transition";
import AboutSection from "./aboutSection";
import Hero from "./heroSection";
import WorkList from "../work/WorkList";

const Home = () => {


  return (
    <>
    <Helmet>
      <title>Zhafran Arman, I make digital things on the internet.</title>
    </Helmet>
    <Transition>
      <Hero />
      <AboutSection />
      <WorkList />
    </Transition>
    </>
  );
}

export default Home;