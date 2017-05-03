//@flow
import React, {Component} from 'react';
import autobind from 'class-autobind';
import {TouchableOpacity, View, Text, Modal, ScrollView, TouchableWithoutFeedback} from 'react-native';
import styles from './Dropdown-style';
import {Icon} from '../core-ui';

export type Value = number | string;

export type Option = {
  value: Value;
  label: string;
  description?: string;
};

type Props = {
  onSelect: (value: Value) => void;
  label?: string;
  selectedValue?: ?Value;
  options?: Array<Option>;
  emptyOptionsText?: string;
  animationType?: 'none' | 'fade' | 'slide';
  textStyle?: StyleSet;
  buttonStyle?: StyleSet;
  placeholder?: string;
  hideArrowIcon?: boolean;
};

type State = {
  isShowingOptions: boolean;
};

export default class Dropdown extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      isShowingOptions: false,
    };
  }

  render() {
    let {label, options, selectedValue, textStyle, buttonStyle, placeholder, animationType, hideArrowIcon, ...otherProps} = this.props;
    let {isShowingOptions} = this.state;
    let selectedOption = (options) ? options.find((option) => option.value === selectedValue) : null;
    let selectedOptionLabel = selectedOption ? selectedOption.label : placeholder;
    let defaultOptionTextStyle = (selectedOptionLabel === placeholder) ? styles.placeholder : styles.defaultOptionText;
    let arrowIcon = hideArrowIcon ? null : (
      <Icon name="expand-more" style={[styles.icon, textStyle]} />
    );
    return (
      <View style={styles.container}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={this._onShow}>
          <View style={styles.option}>
            <Text style={[defaultOptionTextStyle, textStyle]}>{selectedOptionLabel}</Text>
            {arrowIcon}
          </View>
        </TouchableOpacity>
        <OptionsModal
          {...otherProps}
          animationType={animationType ? animationType : 'none'}
          onSelect={this._onSelect}
          onHide={this._onHide}
          isShowing={isShowingOptions}
          options={options}
        />
      </View>
    );
  }

  _onShow() {
    this.setState({
      isShowingOptions: true,
    });
  }

  _onHide() {
    this.setState({
      isShowingOptions: false,
    });
  }

  _onSelect(value: Value) {
    this._onHide();
    this.props.onSelect(value);
  }
}

type OptionsModalProps = {
  onHide: () => void;
  onSelect: (value: Value) => void;
  options?: Array<Option>;
  emptyOptionsText?: string;
  isShowing: boolean;
  animationType: 'none' | 'fade' | 'slide';
};

const DEFAULT_MODAL_ANIMATION = 'fade';

export function OptionsModal(props: OptionsModalProps): any {
  let {options, onSelect, onHide, animationType, isShowing, emptyOptionsText} = props;
  if (emptyOptionsText == null) {
    emptyOptionsText = 'Tidak ada data tersedia'; //TODO move this to constant file
  }
  let dropdownOptions = (options == null || (Array.isArray(options) && options.length === 0)) ?
    (
      <View style={styles.optionItem}>
        <Text style={styles.optionText}>{emptyOptionsText}</Text>
      </View>
    ) : (
      options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.optionItem} onPress={() => onSelect(item.value)}>
          <Text style={styles.optionText}>{item.label}</Text>
          {item.description ? (
            <Text style={styles.descriptionText}>{item.description}</Text>
          ) : null }
        </TouchableOpacity>
      ))
    );
  return (
    <Modal
      animationType={animationType || DEFAULT_MODAL_ANIMATION}
      visible={isShowing}
      onRequestClose={onHide}
      transparent={true}
      supportedOrientations={['portrait']}
      style={{backgroundColor: 'red'}}
    >
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={styles.backdrop}>
          <ScrollView style={styles.modalScrollView}>
            {dropdownOptions}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
