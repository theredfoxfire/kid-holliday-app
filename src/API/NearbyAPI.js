// @flow

import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';
import SERVER_API from '../constants/defaultServerAPIUrl';

type FetchReturn = {
  data?: Object;
  result: string;
  message: Object | string | Array<Object>;
};

const NearbyAPI = {
  nearbyList(latLong: string): Promise<FetchReturn> {
    return fetchJSON(`/places.php?loc=${latLong}`);
  },
};

export default NearbyAPI;
