// @flow
import fetchJSON from '../helpers/fetchJSON';

const HomeHighlightAPI = {
  async getHighlightContent() {
    let result = await fetchJSON('/highlightcontent');
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
};

export default HomeHighlightAPI;
