//@flow
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './Table-style';
import formatNumber from '../helpers/formatNumber';

type Record = {
  commodity: string;
  prevPrice: number;
  currPrice: number;
};

type Props = {
  dataSource: Array<Record>;
  children?: Array<Label>;
};

export default function Table({dataSource, children}: Props) {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        {children}
      </View>
      <ScrollView>
        <RecordList dataSource={dataSource} />
      </ScrollView>
    </View>
  );
}

type LabelProps = {
  title: string;
  isIndex?: boolean;
};

export function Label(props: LabelProps) {
  let {title, isIndex} = props;
  return (
    <View style={[(isIndex ? styles.indexFlex : styles.defaultFlex), styles.headerItem]}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

type RecordProps = {
  dataSource: Array<Record>;
};

type RenderRow = {
  commodity: string;
  prevPrice: number;
  currPrice: number;
  index: number;
};

function RecordList(props: RecordProps) {
  let {dataSource} = props;
  return (
    <View>
      {dataSource.map((rowItem, i) => <TableRow key={i} {...rowItem} index={i} />)}
    </View>
  );
}

function TableRow({commodity, prevPrice, currPrice, index}: RenderRow) {
  index = index + 1;

  let priceIncrease = currPrice - prevPrice;
  let isPriceChanged = (priceIncrease !== 0);
  let isPriceIncreased = (priceIncrease > 0);
  let percentageChange = (priceIncrease / prevPrice * 100).toFixed(1);
  let triangle = null;
  if (isPriceChanged) {
    let style = isPriceIncreased ? styles.triangleUp : styles.triangleDown;
    triangle = (
      <View style={styles.triangleWrapper}>
        <View style={style} />
        <Text style={styles.percentage}>({percentageChange}%)</Text>
      </View>
    );
  }

  let prevPriceString = formatNumber(prevPrice + '', {prefix: 'Rp', separator: '.'});
  let currPriceString = formatNumber(currPrice + '', {prefix: 'Rp', separator: '.'});
  let isOdd = (index % 2 === 1);
  let style = isOdd ? styles.oddWrapper : styles.evenWrapper;

  return (
    <View style={[styles.recordRow, style]}>
      <View style={styles.indexWrapper}>
        <Text style={styles.recordText}>{index}</Text>
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.textWrapperAdvanced}>
          <Text style={[styles.recordText, styles.greenText]}>{commodity}</Text>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.recordText}>{prevPriceString}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.recordText}>
          {currPriceString}
        </Text>
        {triangle}
      </View>
    </View>
  );
}
