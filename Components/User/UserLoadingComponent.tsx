import * as React from 'react';

export default function UserLoadingComponent({ code }) {
  return (
    <div className="contactInfoWrapper">
      <div className="contactInfoDescriptionWrapper">
        <div className="contactInfoText">
          <p className="name">Loading user id: {code}</p>
        </div>
      </div>
    </div>
  );
}
