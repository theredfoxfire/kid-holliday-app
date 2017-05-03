// @flow
import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Modal} from 'react-native';
import {connect} from 'react-redux';

import Button from '../core-ui/Button';
import IconButton from '../core-ui/IconButton';

const styles = StyleSheet.create({
  dialogWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContent: {
    justifyContent: 'space-between',
    height: 150,
    width: 200,
    borderRadius: 5,
    padding: 10,
    elevation: 1,
    backgroundColor: 'white',
  },
});

type Props = {
  id: string;
  description: string;
  savedState: Object;
  onSave: (description: string) => void;
};

type State = {
  showDialog: boolean;
  descriptionTextValue: string;
};

export class FavoriteButton extends Component {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      showDialog: false,
      descriptionTextValue: props.description,
    };
  }

  _handleIconPress() {
    this.setState({showDialog: !this.state.showDialog});
  }

  _handleSaveButtonPress() {
    this.setState({showDialog: !this.state.showDialog});
    this.props.onSave(this.state.descriptionTextValue);
  }

  render() {
    return (
      <View>
        <IconButton
          icon="bookmark-border"
          onPress={() => this._handleIconPress()}
        />
        <Modal
          visible={this.state.showDialog}
          transparent
          onRequestClose={() => this.setState({showDialog: false})}
        >
          <View style={styles.dialogWrapper}>
            <View style={styles.dialogContent}>
              <Text>Nama Favorite</Text>
              <TextInput
                value={this.state.descriptionTextValue}
                onChangeText={(text) => this.setState({descriptionTextValue: text})}
                style={{
                  borderColor: 'grey',
                  borderWidth: 1,
                  height: 40,
                  paddingHorizontal: 5,
                }}
              />
              <Button
                style={{height: 20}}
                text="Simpan"
                onPress={() => this._handleSaveButtonPress()}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    description: ownProps.description,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSave: (editedDescription) => {
      let favorite = {
        id: ownProps.id,
        description: editedDescription,
        actions: ownProps.actions,
      };
      dispatch({type: 'ADD_FAVORITE_REQUESTED', favorite});
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteButton);
