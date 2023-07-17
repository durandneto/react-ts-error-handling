import { useEffect, useRef, useState } from 'react';
import React = require('react');

export const Dynamic = ({ DynamicComponent, data }) => {
  const [showComponent, setShowComponent] = useState(false);
  const targetRef = useRef(null);
  const heightRef = useRef(false);

  useEffect(() => {
    const targetElement = targetRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { top, bottom } = targetElement.getBoundingClientRect();
        const isInView = top <= window.innerHeight;
        heightRef.current = bottom - top > 0;
        console.log(heightRef.current, bottom - top);
        if (heightRef.current) {
          targetElement.style.height = `${bottom - top}px`;
        }
        setShowComponent(isInView);
      },
      {
        rootMargin: '-100px',
      }
    );
    observer.observe(targetElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={targetRef}>
      {showComponent && (
        <React.Suspense>
          <DynamicComponent {...data} />
        </React.Suspense>
      )}
    </div>
  );
};

export default React.memo(Dynamic);
