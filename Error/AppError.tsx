import * as React from 'react';
import { ErrorInterface } from '../Types/Error';

import GenericErrorType from './Error';

export class AppErrorType extends GenericErrorType {
  constructor(error: ErrorInterface) {
    super(error);
    Object.setPrototypeOf(this, AppErrorType.prototype);
  }
}

export function AppErrorComponent({ code, message }: ErrorInterface) {
  return (
    <div>
      <h1>AppErrorComponent</h1>
      <p>Error during loading the APP Component</p>
      <p>
        Message: <code>{message}</code> Code {code}
      </p>
    </div>
  );
}
