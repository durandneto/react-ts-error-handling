import { useEffect, useRef, useState } from 'react';
import React = require('react');
// const DynamicComponent = React.lazy(() => import('./DynamicComponent'));

export const Dynamic = ({ DynamicComponent }) => {
  const [showComponent, setShowComponent] = useState(false);
  const targetRef = useRef(null);

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        const { top } = targetElement.getBoundingClientRect();
        const isInView = top <= window.innerHeight;
        console.log('Showing', isInView);
        setShowComponent(true);
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
      {/* <div style={{ height: '2000px' }}>Scroll down...</div> */}
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

export default Dynamic;
