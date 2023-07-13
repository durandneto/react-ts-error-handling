import * as React from 'react';
import { ErrorInterface } from '../../Types/Error';
export function ImageErrorComponent({ code, message }: ErrorInterface) {
  return (
    <img
      width={100}
      height={60}
      src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
      alt=""
    />
  );
}
