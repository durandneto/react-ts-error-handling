import React = require('react');

const DynamicComponent = () => {
  // ... component logic ...

  // React.startTransition(() => {
  //   Array.from(Array(100 * 100 * 100 * 100).keys()).forEach((i) => i);
  // });
  return (
    <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.webp" />
  );
};

export default DynamicComponent;
