import { Helmet } from "react-helmet-async"

import Transition from "../../components/Transition";
import AboutSection from "./aboutSection";
import Hero from "./heroSection";
import WorkList from "../work/WorkList";
import OG_Image from "../../assets/images/SEO/og_image.webp"

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Zhafran Arman · I make digital things on the internet.</title>
        <meta name="description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
        <meta name="keywords" content="UI/UX Designer, Frontend Developer, Web Developer, Designer, Developer" />
        <meta name="author" content="Muhammad Zhafran Arman" />
        <link rel="canonical" href="https://zhafranarman.com/" />
        
        <meta property="og:title" content="Zhafran Arman, I make digital things on the internet." />
        <meta property="og:description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
        <meta property="og:image" content={OG_Image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zhafranarman.com/" />
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