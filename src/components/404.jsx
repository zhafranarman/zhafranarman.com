import { Helmet } from "react-helmet-async"

import Transition from "../components/Transition";
import not_found_illu from "../assets/images/404.webp"

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <Helmet prioritizeSeoTags>
      <title>Page Not Found</title>
      <link rel="canonical" href="https://zhafranarman.com/about" />
    </Helmet>
    <Transition>
      <section className="container">
        <div className="inner-section not-found-section">
          <div className="not-found-illu-wrapper">
            <img className="not-found-illu" height="100%" width="100%" src={not_found_illu} />
          </div>
          <div className="not-found-text">
            <h1>
              Oops! Page Not Found.
            </h1>
            <p>
              OMG this is embarassing, this shouldn't happen. let me guide you to the homepage.
            </p>
            <Link className="not-found-cta" to="/">Go To Homepage</Link>
          </div>
        </div>
      </section>
      </Transition>
    </>
  );
}

export default NotFound;