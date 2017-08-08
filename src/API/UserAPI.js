// @flow

import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';
import SERVER_API from '../constants/defaultServerAPIUrl';

type Authentication = {
  email: string;
  password: string;
};

type FetchReturn = {
  data?: Object;
  result: string;
  message: Object | string | Array<Object>;
};

const UserAPI = {
  postLogin(userAuth: Authentication): Promise<FetchReturn> {
    return fetchJSON(`/login.php?act=login&un=${userAuth.email}&pw=${userAuth.password}`);
  },
  logout(token: string) {
    // return fetchJSON(`/logout?token=${token}`);
  },
};

export default UserAPI;
