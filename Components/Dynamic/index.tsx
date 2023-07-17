import { useEffect, useRef, useState } from 'react';
import React = require('react');
// const DynamicComponent = React.lazy(() => import('./DynamicComponent'));

export const Dynamic = ({ DynamicComponent }) => {
  const [showComponent, setShowComponent] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const targetElement = targetRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { top, bottom } = targetElement.getBoundingClientRect();
        const isInView = top <= window.innerHeight;
        console.group(bottom - top);
        setShowComponent(isInView);
        // observer.disconnect();
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
