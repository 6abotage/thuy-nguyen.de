import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useState, useCallback } from "react";

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

type PropType = {
  imgSrc: StaticImageData;
  inView: boolean;
  index: number;
};

export const LazyLoadImage: React.FC<PropType> = (props) => {
  const { imgSrc, inView } = props;
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <div className="embla__slide">
      <div
        className={`embla__lazy-load${
          hasLoaded ? " embla__lazy-load--has-loaded" : ""
        }`}
      >
        {!hasLoaded && <span className="embla__lazy-load__spinner" />}
        <Image
          className="embla__slide__img embla__lazy-load__img"
          onLoad={setLoaded}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt="Your alt text"
          width={imgSrc.width}
          height={imgSrc.height}
        />
      </div>
    </div>
  );
};
