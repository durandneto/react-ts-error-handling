import { useEffect, useRef, useState } from 'react';
import React = require('react');
// const DynamicComponent = React.lazy(() => import('./DynamicComponent'));

export const Dynamic = ({ DynamicComponent }) => {
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
        if (isInView && heightRef.current) {
          targetElement.style.height = `${bottom - top}px`;
        }
        setShowComponent(isInView);
      },
      {
        rootMargin: '-300px',
      }
    );
    observer.observe(targetElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div ref={targetRef}>
        {showComponent && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <DynamicComponent />
          </React.Suspense>
        )}
      </div>
    </div>
  );
};

export default React.memo(Dynamic);
