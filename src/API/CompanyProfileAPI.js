// @flow
import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';

import type {EmailMessage} from '../types/Office';

let CompanyProfileAPI = {
  async getAbout() {
    let result = await fetchJSON(`/aboutus`);
    let data = result.data && result.data[0];
    let about = {};
    if (data) {
      about = {
        id: data.id,
        title: data.title,
        description: data.description,
        picture: data.picture,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        urlPicture: data.url_picture,
      };
    }
    return about;
  },
  getBranchOffices() {
    return fetchJSON(`/branchoffices`);
  },
  async getPrivacyPolicy() {
    let result = await fetchJSON(`/privacypolicy`);
    let privacypolicy = {};
    if (result.data) {
      privacypolicy = {
        desc: result.data.desc,
      };
    }
    return privacypolicy;
  },
  sendSuggestion(emailMessage: EmailMessage) {
    let urlEncoded = formatUrlEncoded(emailMessage);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/contactus/suggestion`, options);
  },
};

export default CompanyProfileAPI;
