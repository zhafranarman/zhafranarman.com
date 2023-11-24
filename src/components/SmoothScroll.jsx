import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function SmoothScroll({ children }) {
  const location = useLocation();
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    // Import LocomotiveScroll dynamically
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!locomotiveScrollRef.current) {
        locomotiveScrollRef.current = new LocomotiveScroll({
          lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.1,
            duration: 1.2,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1.25,
            touchMultiplier: 2,
            normalizeWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        },
        });
      }

      // Reset scroll position to top
      locomotiveScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
    })();

    // Clean up
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, [location.pathname]); // Depend on location.pathname to reset scroll on route change

  return (
    <>
      {children}
    </>
  );
}