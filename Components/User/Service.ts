export default class UserAPIService {
  static URL = 'https://randomuser.me/api/?results=1';

  static get = () => {
    console.log('get');
    return fetch(UserAPIService.URL)
      .then((resp) => resp.json())
      .then((data) => {
        const {
          results: [user],
        } = data;
        if (!user) {
          throw Error('Empty user');
        }
        return {
          name: user.name.first,
          thumbnail: user.picture.thumbnail,
          email: user.email,
          phone: user.phone,
          id: `${user.id.name}-${user.id.value}`,
        };
      })
      .catch((e) => {
        throw Error(e.message);
      });
  };
}
