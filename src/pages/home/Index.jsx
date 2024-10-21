import { Helmet } from "react-helmet-async"

import Transition from "../../components/Transition";
import AboutSection from "./aboutSection";
import Hero from "./heroSection";
import WorkList from "../work/WorkList";
import OG_Image from "../../assets/images/SEO/og_image.webp"

const Home = () => {

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Zhafran Arman · I make digital things on the internet.</title>
        <meta name="description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
        <link rel="canonical" href="https://zhafranarman.com/" />

        <meta property="og:title" content="Zhafran Arman · I make digital things on the internet." />
        <meta property="og:description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
        <meta property="og:url" content="https://zhafranarman.com/" />

        <meta name="twitter:title" content="Zhafran Arman · I make digital things on the internet." />
        <meta name="twitter:description" content="Muhammad Zhafran Arman is a UI/UX designer & frontend developer. making digital experiences for people." />
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