import React from 'react';
const { useState, useRef, useEffect } = React;

export const LazyImage = (imageProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!shouldLoad && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setShouldLoad(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad, placeholderRef]);

  return (shouldLoad 
    // eslint-disable-next-line
    ? <img {...imageProps}/> 
    : <div className="img-placeholder" ref={placeholderRef}/>
  );
};