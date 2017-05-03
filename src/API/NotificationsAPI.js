// @flow

import fetchJSON from '../helpers/fetchJSON';

const NotificationsAPI = {
  getNotifications(token: string, page: number) {
    return fetchJSON(`/notifications?token=${token}&page=${page}`);
  },
};

export default NotificationsAPI;
