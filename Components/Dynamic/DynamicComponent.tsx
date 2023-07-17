import React = require('react');

const DynamicComponent = ({ src }) => {
  // React.startTransition(() => {
  //   Array.from(Array(100 * 100 * 100 * 100).keys()).forEach((i) => i);
  // });
  return <img src={src} />;
};

export default DynamicComponent;
