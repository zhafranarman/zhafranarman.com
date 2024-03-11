import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ReactImage = ({ src, hash, height, width, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 10000); // Simulating a 3-second delay

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, []); // No dependency needed since it's just a one-time effect

  return (
    <div className={className}>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          height={`${height}px`}
          width={`${width}px`}
        />
      )}
      {imageLoaded && (
        <img
          className={className}
          src={src}
          height={`${height}px`}
          width={`${width}px`}
          alt={alt}
        />
      )}
    </div>
  );
};

export default ReactImage;
