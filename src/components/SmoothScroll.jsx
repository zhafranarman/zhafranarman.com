import { useEffect } from "react";

export default function SmoothScroll ({ children }){
  useEffect (() =>{
    (
      async () =>{
        const LocomotiveScroll = (await import ("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll(
          {
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

          }
        );
      }
    )()
  },[])
  
  return (
    <>
      {children}
    </>
  );
}