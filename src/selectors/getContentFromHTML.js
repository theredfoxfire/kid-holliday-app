// @flow

import {createSelector} from 'reselect';
import {parseHTML} from 'html-to-content-model';

import type {Content} from '../types/Content';

type Overview = {
  text: string;
  imageSrc?: string;
};

type ReturnType = {
  overview: Overview;
  content: Content;
};

function getHtmlContent(html: string) {
  return html;
}

export function getHtmlParsed(html: string): ReturnType {
  return getContentFromHTML(parseHTML(html));
}

export function getContentFromHTML(markdownParsed: Content): ReturnType {
  let text = [];
  let imageSrc;
  for (let block of markdownParsed.blocks) {
    for (let entityNode of block.entityNodes) {
      if (entityNode.entity != null) {
        continue;
      }
      for (let styleNode of entityNode.styleNodes) {
        text.push(styleNode.text);
      }
    }
  }

  if (markdownParsed.entityMap != null) {
    let {entityMap} = markdownParsed;
    for (let key of Object.keys(entityMap)) {
      if (entityMap[key].type === 'IMAGE') {
        imageSrc = entityMap[key].data.src;
        break;
      }
    }
  }
  let overview = (imageSrc == null) ? {text: text.join(' ')} : {
    text: text.join(' '),
    imageSrc,
  };
  return {
    overview,
    content: markdownParsed,
  };
}

export default createSelector(
  [getHtmlContent],
  getHtmlParsed,
);
