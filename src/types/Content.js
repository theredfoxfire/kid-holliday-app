// @flow

import type {ContentModel} from './ContentModel';

export type Content = {
  entityMap?: {[key: string]: Entity};
  blocks: Array<Block>;
};
export type Entity = {
  type: 'LINK' | 'IMAGE';
  data: {[key: string]: string};
};
export type Block = {
  type: string;
  entityNodes: Array<EntityNode>;
  depth?: number;
  data?: {textAlign: 'center' | 'right'};
};
export type EntityNode = {
  entity: null | string;
  styleNodes: Array<ContentModel>;
};
