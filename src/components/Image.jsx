import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ReactImage = ({ src, hash, height, width, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

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
