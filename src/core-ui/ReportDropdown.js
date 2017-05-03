// @flow

import React from 'react';

import {StyleSheet} from 'react-native';
import {Dropdown} from '../core-ui';
import {connect} from 'react-redux';

import type {Value} from '../core-ui/Dropdown';
import type {Dispatch} from '../types/Store';

type Props = {
  threadID: number;
  commentID?: number;
  onSelect: (report: Value, threadID: number, commentID?: number) => void;
};

const styles = StyleSheet.create({
  noAlign: {
    alignItems: null,
  },
  noFlex: {
    flex: 0,
  },
  noUnderline: {
    borderBottomWidth: 0,
  },
  lessVerticalMargin: {
    marginVertical: -3,
  },
});

const reportThreadOptions = [
  {value: 'Saya tidak suka Topik ini', label: 'Saya tidak suka Topik ini'},
  {value: 'Topik ini spam atau penipuan', label: 'Topik ini spam atau penipuan'},
  {value: 'Topik ini tidak seharusnya ada di Karsa', label: 'Topik ini tidak seharusnya ada di Karsa'},
  {value: 'Topik ini mengandung pelanggaran hak kekayaan intelektual', label: 'Topik ini mengandung pelanggaran hak kekayaan intelektual'},
  {value: 'Topik ini mengandung pornografi, kekerasan dan simbol kebencian', label: 'Topik ini mengandung pornografi, kekerasan dan simbol kebencian'},
  {value: 'Topik ini menempatkan orang dalam resiko', label: 'Topik ini menempatkan orang dalam resiko'},
];
const reportCommentOptions = [
  {value: 'Saya tidak suka Komentar ini', label: 'Saya tidak suka Komentar ini'},
  {value: 'Komentar ini spam atau penipuan', label: 'Komentar ini spam atau penipuan'},
  {value: 'Komentar ini tidak seharusnya ada di Karsa', label: 'Komentar ini tidak seharusnya ada di Karsa'},
  {value: 'Topik ini mengandung pelanggaran hak kekayaan intelektual', label: 'Topik ini mengandung pelanggaran hak kekayaan intelektual'},
  {value: 'Topik ini mengandung pornografi, kekerasan dan simbol kebencian', label: 'Topik ini mengandung pornografi, kekerasan dan simbol kebencian'},
  {value: 'Topik ini menempatkan orang dalam resiko', label: 'Topik ini menempatkan orang dalam resiko'},
];

function ReportDropdown(props: Props) {
  let {threadID, commentID, onSelect} = props;
  let options = commentID ? reportCommentOptions : reportThreadOptions;
  let onOptionSelected = (value: Value) => {
    onSelect(value, threadID, commentID);
  };
  return (
    <Dropdown
      placeholder="Laporkan"
      options={options}
      onSelect={onOptionSelected}
      buttonStyle={[styles.noAlign, styles.noUnderline, styles.lessVerticalMargin]}
      textStyle={styles.noFlex}
      hideArrowIcon
    />
  );
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onSelect(report: Value, threadID: number, commentID?: number) {
      dispatch({
        type: 'REPORT_FORUM_ITEM_REQUESTED',
        report,
        threadID,
        commentID,
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(ReportDropdown);
