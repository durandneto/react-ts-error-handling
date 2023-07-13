import * as React from 'react';
import { ErrorInterface } from '../../Types/Error';

export default function UserErrorComponent({ code, message }: ErrorInterface) {
  return (
    <div className="contactInfoWrapper">
      <div className="contactInfoDescriptionWrapper">
        <div className="contactInfoText">
          <p className="name">
            Error on load user code:{code} | {message}
          </p>
        </div>
      </div>
    </div>
  );
}
