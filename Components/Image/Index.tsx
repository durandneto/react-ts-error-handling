import * as React from 'react';
import { ImageErrorType } from '../../Error/ImageError';
export default function ImageComponent({ error = false }) {
  if (error) throw new ImageErrorType({ message: 'oops', code: 11 });
  return (
    <img
      className="Img"
      width={100}
      height={60}
      src={`https://cataas.com/cat?${Math.random()}`}
      alt=""
    />
  );
}
