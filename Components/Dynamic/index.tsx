import { useEffect, useRef, useState } from 'react';
import React = require('react');
import DynamicComponent from './DynamicComponent';

export const Dynamic = () => {
  const [showComponent, setShowComponent] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = targetRef.current;
      if (targetElement) {
        const { top } = targetElement.getBoundingClientRect();
        const isInView = top <= window.innerHeight;
        setShowComponent(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ height: '2000px' }}>Scroll down...</div>
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
