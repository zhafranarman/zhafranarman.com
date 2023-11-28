import { useState, useEffect } from "react";
import { motion as m } from "framer-motion"
import { NavLink } from "react-router-dom";

import NavbarButton from "./NavbarButton";
import NavbarMobile from "./NavbarMobile";

function useScrollDirection() {

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 1 ? scrollY : 1;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
}
const Navbar = () => {

  const [menuActive, setSidebarState] = useState(true);

  const navbarAni = {
    hidden: { y: "-100%", opacity: 0, transition: { duration: 0.5 } },
    visible: {
      y: "0",
      opacity: 1,
      transition: { duration: 0.5 },
    }
  }

  const scrollDirection = useScrollDirection();

  return (
    <header className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
      <m.nav className="container navbar" variants={navbarAni} initial="hidden" animate="visible">
        <NavLink to="/" className="logo-wrapper">
          <svg className="logo" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" width="100%" height="100%" viewBox="0 0 163 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.1004 2.35514C43.7425 2.89491 43.5635 3.57389 43.5635 4.39207V5.90911H41.5351V7.95457H43.5635V19H46.1118V7.95457H48.9328V5.90911H46.1118V4.73298C46.1118 4.15343 46.2425 3.71025 46.5038 3.40343C46.7709 3.09661 47.2141 2.9432 47.8334 2.9432C48.1004 2.9432 48.3277 2.96877 48.5152 3.01991C48.7027 3.06536 48.8561 3.10514 48.9754 3.13923L49.572 1.07673C49.3959 1.00855 49.126 0.934682 48.7624 0.855137C48.3987 0.769909 47.9612 0.727295 47.4499 0.727295C46.7567 0.727295 46.1146 0.863659 45.5237 1.13639C44.9328 1.40343 44.4584 1.80968 44.1004 2.35514Z" />
            <path d="M9.64484 3.81252L0.465865 17.2443V19H12.9431V16.733H3.68746L12.8664 3.30116V1.54548H0.38916V3.81252H9.64484Z" />
            <path d="M19.6435 6.36082C19.0129 6.77559 18.5441 7.33525 18.2373 8.0398H18.0754V1.54548H15.5611V19H18.1094V11.2273C18.1094 10.5341 18.243 9.9432 18.51 9.45457C18.7827 8.96025 19.1549 8.58525 19.6265 8.32957C20.1038 8.07389 20.6435 7.94605 21.2458 7.94605C22.1265 7.94605 22.814 8.21309 23.3083 8.74718C23.8026 9.27559 24.0498 10.0199 24.0498 10.9801V19H26.5981V10.6733C26.5981 9.58241 26.4106 8.67332 26.0356 7.94605C25.6663 7.21309 25.1435 6.66195 24.4674 6.29264C23.7969 5.92332 23.0129 5.73866 22.1151 5.73866C21.0981 5.73866 20.2742 5.94605 19.6435 6.36082Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M33.3283 19.2898C32.4988 19.2898 31.7488 19.1364 31.0783 18.8296C30.4079 18.5171 29.8766 18.0654 29.4846 17.4745C29.0982 16.8835 28.905 16.1591 28.905 15.3012C28.905 14.5625 29.0471 13.9546 29.3312 13.4773C29.6152 13 29.9988 12.6222 30.4817 12.3438C30.9647 12.0654 31.5044 11.8551 32.101 11.7131C32.6976 11.571 33.3056 11.4631 33.9249 11.3892C34.709 11.2983 35.3454 11.2245 35.834 11.1676C36.3226 11.1051 36.6777 11.0057 36.8993 10.8693C37.1209 10.733 37.2317 10.5114 37.2317 10.2046V10.1449C37.2317 9.40059 37.0215 8.82389 36.601 8.4148C36.1863 8.0057 35.5669 7.80116 34.7431 7.80116C33.8851 7.80116 33.209 7.9915 32.7147 8.37218C32.226 8.74718 31.888 9.16479 31.7005 9.62502L29.3056 9.07957C29.5897 8.28411 30.0044 7.64207 30.5499 7.15343C31.101 6.65911 31.7346 6.30116 32.4505 6.07957C33.1664 5.8523 33.9192 5.73866 34.709 5.73866C35.2317 5.73866 35.7857 5.80116 36.3709 5.92616C36.9618 6.04548 37.513 6.26707 38.0243 6.59093C38.5414 6.9148 38.9647 7.37786 39.2942 7.98014C39.6238 8.57673 39.7885 9.3523 39.7885 10.3068V19H37.2999V17.2103H37.1976C37.0329 17.5398 36.7857 17.8637 36.4562 18.1818C36.1266 18.5 35.7033 18.7642 35.1863 18.9745C34.6692 19.1847 34.0499 19.2898 33.3283 19.2898ZM33.8823 17.2443C34.5868 17.2443 35.1891 17.1051 35.6891 16.8267C36.1948 16.5483 36.5783 16.1847 36.8397 15.7358C37.1067 15.2813 37.2402 14.7955 37.2402 14.2784V12.5909C37.1493 12.6818 36.9732 12.7671 36.7118 12.8466C36.4562 12.9205 36.1635 12.9858 35.834 13.0426C35.5044 13.0938 35.1834 13.1421 34.8709 13.1875C34.5584 13.2273 34.2971 13.2614 34.0868 13.2898C33.5925 13.3523 33.1408 13.4574 32.7317 13.6051C32.3283 13.7529 32.0044 13.9659 31.7601 14.2443C31.5215 14.5171 31.4022 14.8807 31.4022 15.3353C31.4022 15.9659 31.6351 16.4432 32.101 16.7671C32.5669 17.0853 33.1607 17.2443 33.8823 17.2443Z" />
            <path d="M54.0395 9.48866C53.7667 9.93184 53.6304 10.4375 53.6304 11.0057V19H51.0821V5.90911H53.5452V7.98866H53.6815C53.9202 7.28411 54.3406 6.73014 54.9429 6.32673C55.5508 5.91764 56.2383 5.71309 57.0054 5.71309C57.1645 5.71309 57.352 5.71877 57.5679 5.73014C57.7895 5.7415 57.9628 5.7557 58.0878 5.77275V8.21025C57.9855 8.18184 57.8037 8.15059 57.5423 8.1165C57.281 8.07673 57.0196 8.05684 56.7582 8.05684C56.156 8.05684 55.619 8.18468 55.1474 8.44036C54.6815 8.69036 54.3122 9.03979 54.0395 9.48866Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M61.2555 18.8296C61.9259 19.1364 62.6759 19.2898 63.5055 19.2898C64.2271 19.2898 64.8464 19.1847 65.3634 18.9745C65.8805 18.7642 66.3038 18.5 66.6333 18.1818C66.9629 17.8637 67.21 17.5398 67.3748 17.2103H67.4771V19H69.9657V10.3068C69.9657 9.3523 69.8009 8.57673 69.4714 7.98014C69.1419 7.37786 68.7186 6.9148 68.2015 6.59093C67.6902 6.26707 67.139 6.04548 66.5481 5.92616C65.9629 5.80116 65.4089 5.73866 64.8862 5.73866C64.0964 5.73866 63.3436 5.8523 62.6277 6.07957C61.9117 6.30116 61.2782 6.65911 60.7271 7.15343C60.1816 7.64207 59.7669 8.28411 59.4828 9.07957L61.8777 9.62502C62.0652 9.16479 62.4032 8.74718 62.8919 8.37218C63.3862 7.9915 64.0623 7.80116 64.9203 7.80116C65.7441 7.80116 66.3634 8.0057 66.7782 8.4148C67.1987 8.82389 67.4089 9.40059 67.4089 10.1449V10.2046C67.4089 10.5114 67.2981 10.733 67.0765 10.8693C66.8549 11.0057 66.4998 11.1051 66.0112 11.1676C65.5225 11.2245 64.8862 11.2983 64.1021 11.3892C63.4828 11.4631 62.8748 11.571 62.2782 11.7131C61.6816 11.8551 61.1419 12.0654 60.6589 12.3438C60.1759 12.6222 59.7924 13 59.5083 13.4773C59.2242 13.9546 59.0822 14.5625 59.0822 15.3012C59.0822 16.1591 59.2754 16.8835 59.6617 17.4745C60.0538 18.0654 60.585 18.5171 61.2555 18.8296ZM65.8663 16.8267C65.3663 17.1051 64.764 17.2443 64.0595 17.2443C63.3379 17.2443 62.7441 17.0853 62.2782 16.7671C61.8123 16.4432 61.5794 15.9659 61.5794 15.3353C61.5794 14.8807 61.6987 14.5171 61.9373 14.2443C62.1816 13.9659 62.5055 13.7529 62.9089 13.6051C63.318 13.4574 63.7697 13.3523 64.264 13.2898C64.4742 13.2614 64.7356 13.2273 65.0481 13.1875C65.3606 13.1421 65.6816 13.0938 66.0112 13.0426C66.3407 12.9858 66.6333 12.9205 66.889 12.8466C67.1504 12.7671 67.3265 12.6818 67.4174 12.5909V14.2784C67.4174 14.7955 67.2839 15.2813 67.0169 15.7358C66.7555 16.1847 66.372 16.5483 65.8663 16.8267Z" />
            <path d="M75.8202 9.45457C75.5589 9.9432 75.4282 10.5341 75.4282 11.2273V19H72.8799V5.90911H75.3259V8.0398H75.4879C75.789 7.34661 76.2606 6.7898 76.9026 6.36934C77.5504 5.94889 78.3657 5.73866 79.3486 5.73866C80.2407 5.73866 81.0219 5.92616 81.6924 6.30116C82.3629 6.67048 82.8827 7.22161 83.2521 7.95457C83.6214 8.68752 83.806 9.59377 83.806 10.6733V19H81.2577V10.9801C81.2577 10.0313 81.0106 9.2898 80.5163 8.7557C80.0219 8.21593 79.343 7.94605 78.4793 7.94605C77.8884 7.94605 77.3629 8.07389 76.9026 8.32957C76.4481 8.58525 76.0873 8.96025 75.8202 9.45457Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M97.78 1.54548L91.4987 19H94.2942L95.8928 14.3807H102.713L104.308 19H107.104L100.823 1.54548H97.78ZM101.947 12.1648L99.3737 4.71593H99.2374L96.6596 12.1648H101.947Z" />
            <path d="M111.897 9.48866C111.625 9.93184 111.488 10.4375 111.488 11.0057V19H108.94V5.90911H111.403V7.98866H111.539C111.778 7.28411 112.198 6.73014 112.801 6.32673C113.409 5.91764 114.096 5.71309 114.863 5.71309C115.022 5.71309 115.21 5.71877 115.426 5.73014C115.647 5.7415 115.821 5.7557 115.946 5.77275V8.21025C115.843 8.18184 115.661 8.15059 115.4 8.1165C115.139 8.07673 114.877 8.05684 114.616 8.05684C114.014 8.05684 113.477 8.18468 113.005 8.44036C112.539 8.69036 112.17 9.03979 111.897 9.48866Z" />
            <path d="M121.617 6.3523C120.998 6.75571 120.552 7.31821 120.279 8.0398H120.117V5.90911H117.671V19H120.219V10.929C120.219 10.3381 120.341 9.8182 120.586 9.36934C120.836 8.92048 121.162 8.57105 121.566 8.32105C121.975 8.06536 122.421 7.93752 122.904 7.93752C123.614 7.93752 124.191 8.15343 124.634 8.58525C125.077 9.01707 125.299 9.58809 125.299 10.2983V19H127.838V10.6563C127.838 9.86082 128.069 9.21025 128.529 8.70457C128.989 8.19321 129.634 7.93752 130.463 7.93752C131.134 7.93752 131.711 8.13639 132.194 8.53411C132.677 8.93184 132.918 9.57389 132.918 10.4603V19H135.466V10.2216C135.466 8.72161 135.088 7.59945 134.333 6.85514C133.583 6.11082 132.614 5.73866 131.427 5.73866C130.483 5.73866 129.671 5.94889 128.989 6.36934C128.307 6.78411 127.81 7.34093 127.498 8.0398H127.361C127.077 7.32389 126.637 6.76139 126.04 6.3523C125.449 5.94321 124.716 5.73866 123.841 5.73866C122.978 5.73866 122.236 5.94321 121.617 6.3523Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M142.211 19.2898C141.382 19.2898 140.632 19.1364 139.961 18.8296C139.291 18.5171 138.76 18.0654 138.368 17.4745C137.981 16.8835 137.788 16.1591 137.788 15.3012C137.788 14.5625 137.93 13.9546 138.214 13.4773C138.498 13 138.882 12.6222 139.365 12.3438C139.848 12.0654 140.388 11.8551 140.984 11.7131C141.581 11.571 142.189 11.4631 142.808 11.3892C143.592 11.2983 144.228 11.2245 144.717 11.1676C145.206 11.1051 145.561 11.0057 145.782 10.8693C146.004 10.733 146.115 10.5114 146.115 10.2046V10.1449C146.115 9.40059 145.905 8.82389 145.484 8.4148C145.069 8.0057 144.45 7.80116 143.626 7.80116C142.768 7.80116 142.092 7.9915 141.598 8.37218C141.109 8.74718 140.771 9.16479 140.584 9.62502L138.189 9.07957C138.473 8.28411 138.888 7.64207 139.433 7.15343C139.984 6.65911 140.618 6.30116 141.334 6.07957C142.049 5.8523 142.802 5.73866 143.592 5.73866C144.115 5.73866 144.669 5.80116 145.254 5.92616C145.845 6.04548 146.396 6.26707 146.907 6.59093C147.424 6.9148 147.848 7.37786 148.177 7.98014C148.507 8.57673 148.672 9.3523 148.672 10.3068V19H146.183V17.2103H146.081C145.916 17.5398 145.669 17.8637 145.339 18.1818C145.01 18.5 144.586 18.7642 144.069 18.9745C143.552 19.1847 142.933 19.2898 142.211 19.2898ZM142.765 17.2443C143.47 17.2443 144.072 17.1051 144.572 16.8267C145.078 16.5483 145.461 16.1847 145.723 15.7358C145.99 15.2813 146.123 14.7955 146.123 14.2784V12.5909C146.032 12.6818 145.856 12.7671 145.595 12.8466C145.339 12.9205 145.047 12.9858 144.717 13.0426C144.388 13.0938 144.067 13.1421 143.754 13.1875C143.442 13.2273 143.18 13.2614 142.97 13.2898C142.476 13.3523 142.024 13.4574 141.615 13.6051C141.211 13.7529 140.888 13.9659 140.643 14.2443C140.405 14.5171 140.285 14.8807 140.285 15.3353C140.285 15.9659 140.518 16.4432 140.984 16.7671C141.45 17.0853 142.044 17.2443 142.765 17.2443Z" />
            <path d="M155.609 6.36934C154.967 6.7898 154.495 7.34661 154.194 8.0398H154.032V5.90911H151.586V19H154.134V11.2273C154.134 10.5341 154.265 9.9432 154.526 9.45457C154.793 8.96025 155.154 8.58525 155.609 8.32957C156.069 8.07389 156.594 7.94605 157.185 7.94605C158.049 7.94605 158.728 8.21593 159.222 8.7557C159.717 9.2898 159.964 10.0313 159.964 10.9801V19H162.512V10.6733C162.512 9.59377 162.327 8.68752 161.958 7.95457C161.589 7.22161 161.069 6.67048 160.398 6.30116C159.728 5.92616 158.947 5.73866 158.055 5.73866C157.072 5.73866 156.256 5.94889 155.609 6.36934Z" />
          </svg>
        </NavLink>
        <ul className="nav-menu">
          <li><NavLink className="nav-links" to="/about">About</NavLink></li>
          <li><NavLink className="nav-links" to="/work">Work</NavLink></li>
          <li><NavLink className="nav-links" to="/blog">Thoughts</NavLink></li>
          <li>
            <a className="nav-links" href="mailto:hi@zhafranarman.com">Let's Talk</a>
          </li>
        </ul>
        <NavbarButton
          menuActive={menuActive}
          onClick={() => setSidebarState((a) => !a)}
        />
      <NavbarMobile menuActive={menuActive} />
      </m.nav>
    </header>
  );
}

export default Navbar;
