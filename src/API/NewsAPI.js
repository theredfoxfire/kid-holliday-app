//@flow
import fetchJSON from '../helpers/fetchJSON';

export function getNews(page: string) {
  return fetchJSON(`/news?page=${page}`);
}

export function getNewsHighlights() {
  return fetchJSON(`/newshighlight`);
}

export function getNewsDetail(id: number) {
  return fetchJSON(`/news/${id}`);
}
