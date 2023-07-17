import { useEffect, useRef, useState } from 'react';
import React = require('react');
// const DynamicComponent = React.lazy(() => import('./DynamicComponent'));

export const Dynamic = ({ DynamicComponent }) => {
  const [showComponent, setShowComponent] = useState(false);
  const targetRef = useRef(null);
  const targetWdithRef = useRef(null);
  console.log('render');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const targetElement = targetRef.current;
  //     if (targetElement) {
  // const { top } = targetElement.getBoundingClientRect();
  // const isInView = top <= window.innerHeight;
  // setShowComponent(isInView);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const targetElement = targetRef.current;
    const targetWElement = targetWdithRef.current;
    targetWElement.style.height = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const { top } = targetElement.getBoundingClientRect();
        const isInView = top <= window.innerHeight;
        console.log('Showing', isInView);
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
      <div ref={targetWdithRef} style={{ height: '100vh' }}>
        Scroll down...
      </div>
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
