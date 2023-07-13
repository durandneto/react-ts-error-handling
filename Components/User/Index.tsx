import * as React from 'react';
import UserAPIService from './Service';
import UserType from './Model';
import { UserErrorType } from '../../Error/UsetError';

export default function UserComponent({ error = false }) {
  const [user, setUser] = React.useState<UserType>();
  if (error)
    throw new UserErrorType({ code: 10, message: 'error on load user' });

  // React.startTransition(() => {
  //   Array.from(Array(100 * 100 * 100 * 100).keys()).forEach((i) => i);
  // });

  React.useEffect(() => {
    React.startTransition(() => {
      UserAPIService.get()
        .then((user) => setUser(user))
        .catch((e) => {
          throw new UserErrorType({ code: 11, message: e.message });
        });
    });
  }, []);

  return user ? (
    <div className="contactInfoWrapper">
      <div className="contactInfoDescriptionWrapper">
        <div className="contactInfoThumbnail">
          <img className="avatar" src={user?.thumbnail} />
        </div>
        <div className="contactInfoText">
          <p className="name">{user?.name}</p>
          <p className="name">{user?.phone}</p>
        </div>
      </div>
    </div>
  ) : (
    <div>fetching user</div>
  );
}
