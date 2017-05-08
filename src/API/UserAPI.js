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
  updateUserID(token: string, playerID: string) {
    let urlEncoded = formatUrlEncoded({player_id: playerID});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/updateuserplayerid?token=${token}`, options);
  },
  loginFB() {
    return fetchJSON(`/loginfb`);
  },
  updatePassword(token: string, password: UpdatePassword) {
    let urlEncoded = formatUrlEncoded(password);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/editpassword?token=${token}`, options);
  },
  forgotPassword(email: string) {
    let urlEncoded = formatUrlEncoded({
      email: email,
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/forgotpassword`, options);
  },

  resetPassword(id: string) {
    let urlEncoded = formatUrlEncoded({
      id: id,
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/forgot/reset`, options);
  },

  getRoles() {
    return fetchJSON(`/getroles`);
  },

  registerUser(registration: Registration) {
    let {email, fullName, password} = registration;
    let urlEncoded = formatUrlEncoded({
      email: email,
      full_name: fullName,
      password: password,
      role: 'Petani',
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/registerpetani`, options);
  },

  registerWithFacebook(registration: FBUserRegistration) {
    let {id, email, name, role, avatar} = registration;
    let urlEncoded = formatUrlEncoded({
      id: id,
      email: email,
      name: name,
      role: role,
      avatar: avatar,
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/registerwithfacebook`, options);
  },

  getUserProfile(token: string, userID: string) {
    return fetchJSON(`/profile/${userID}?token=${token}`);
  },

  logout(token: string) {
    // return fetchJSON(`/logout?token=${token}`);
  },

  editUserProfile(token: string, profile: Profile) {
    let {tempImage} = profile;
    let formData = new FormData();
    if (tempImage) {
      formData.append('avatar', {
        uri: tempImage.uri,
        name: tempImage.fileName,
        type: tempImage.type,
      });
    }
    let fieldNames = ['name', 'gender', 'province', 'city', 'address', 'no_hp'];
    for (let fieldName of fieldNames) {
      formData.append(fieldName, profile[fieldName]);
    }
    formData.append('token', token);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };
    return fetch(`${SERVER_API}/updateprofile?token=${token}`, options)
      // .then((result) => ({result}))
      .then((response) => {
        if (response.result !== 'sukses') {
          throw new Error('No data from server!');
        }
      })
      .catch((error) => ({error}));
  },
};

export default UserAPI;
