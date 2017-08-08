// @flow

import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import styles from './ContentView-style';

import type {Content, EntityNode, Entity} from '../types/Content';
import type {ContentModel} from '../types/ContentModel';

type Props = {
  onLinkPress?: (uri: string) => void;
  content: Content;
  textInput?: ReactNode;
  imageStyle?: {
    style: {width: number; height: number};
    resizeMode: string;
  };
  CloseButton?: ReactNode;
};

let EMPTY_ENTITY_MAP = {};
let EMPTY_ENTITY = {type: ''};

export function ContentView(props: Props) {
  let {content, onLinkPress, textInput, imageStyle, CloseButton} = props;
  let onLinkPressProps = onLinkPress ? onLinkPress : () => {};
  let defaultImageStyle = (imageStyle) ? imageStyle : {style: {width: 250, height: 250}, resizeMode: 'cover'};
  let {entityMap = EMPTY_ENTITY_MAP, blocks} = content;
  return (
    <ScrollView style={styles.container}>
      {
        blocks.map((block, blockIndex) => {
          return (
            <View key={blockIndex}>
              {
                block.entityNodes.map((entityNode, entityNodeIndex) => {
                  return (
                    <View key={entityNodeIndex}>
                      <EntityView
                        entityNode={entityNode}
                        entityMap={entityMap}
                        onLinkPress={onLinkPressProps}
                        textInput={textInput}
                        imageStyle={defaultImageStyle}
                      />
                      {
                        (entityNode.entity == null) ?
                        entityNode.styleNodes.map((styleNode, index) => {
                          return (
                            <View key={index} style={styles.textBlock}>
                              <Text><StyleNode key={index} styleNode={styleNode} /></Text>
                            </View>
                          );
                        })
                        : null
                      }
                    </View>
                  );
                }
              )
            }
            </View>
          );
        })
      }
      {
        (CloseButton) ? CloseButton : null
      }
    </ScrollView>
  );
}

type EntityViewProps = {
  entityNode: EntityNode;
  entityMap: {[key: string]: Entity};
  onLinkPress: (uri: string) => void;
  textInput: any;
  imageStyle: {
    style: {width: number; height: number};
    resizeMode: string;
  };
};

export function EntityView(props: EntityViewProps) {
  let {entityNode, entityMap, imageStyle} = props;
  let entityKey = entityNode.entity;
  if (entityKey != null) {
    let entity = entityKey && entityMap[entityKey] || EMPTY_ENTITY;
    if (entity.type === 'IMAGE') {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={imageStyle.style}
            resizeMode={imageStyle.resizeMode}
            source={{uri: entity.data.src}}
          />
        </View>
      );
    } else if (entity.type === 'LINK') {
      let {styleNodes} = entityNode;
      return (
        <View style={styles.textBlock}>
          <Text>
            {styleNodes[0].text}
          </Text>
        </View>
      );
    } else if (entity.type === 'INPUT') {
      let {textInput} = props;
      return textInput;
    }
  }
  return null;
}

type StyleNodeProps = {
  styleNode: ContentModel;
};

export function StyleNode(props: StyleNodeProps) {
  let {styleNode} = props;
  let textStyles = [styles.textRegular];
  if (styleNode.styles != null) {
    textStyles = styleNode.styles.map((style) => {
      if (style === 'BOLD') {
        return styles.textBold;
      } else if (style === 'ITALIC') {
        return styles.textItalic;
      } else {
        return styles.textRegular;
      }
    });
  }
  return <Text style={textStyles}>{styleNode.text}</Text>;
}
