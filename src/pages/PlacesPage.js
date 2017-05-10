// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  TitleBar,
  TextField,
} from '../core-ui';
import styles from './PlacesPage-style';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import autobind from 'class-autobind';
import backroungCover from '../images/la-background.png';
import laLogo from '../images/bg-side-menu.png';
import {LA_RED, LA_WHITE} from '../constants/color';

type State = {

};

type Props = {
  placeDetail: () => void;
  searchNameAction: (name: string) => void;
  searchNameResult: {};
  isFetchSearchNameLoading: boolean;
};

export default class PlacesPage extends Component {
  state: State;
  props: Props;

  _onKeywordChange(text: string) {
    this.setState({
      keyword: text,
    });
  }

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      keyword: '',
    };
  }

  render() {
    let {placeDetail, searchNameAction, isFetchSearchNameLoading, searchNameResult} = this.props;
    if (isFetchSearchNameLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Places"
            />
          </View>
          <View style={styles.formContainer}>
            {/*<View style={styles.field}>
              <TextField placeholder="Location" iconNamePre="room" iconStylePre={styles.iconStylePre} rootStyle={styles.rootField} />
            </View>*/}
            <View style={styles.field}>
              <TextField placeholder="Type the name of place"
                onIconPressEnd={() => searchNameAction(this.state.keyword)}
                iconNameEnd="search" iconStyleEnd={styles.iconStyleEnd}
                onChangeText={this._onKeywordChange}
                placeholderTextColor="#9a9a9a"
                value={this.state.keyword}
                rootStyle={styles.rootField} />
            </View>
            <View style={styles.lableContainer}>
              <Text style={styles.lableText}>Recomended Places:</Text>
            </View>
          </View>
          <ScrollView>
            <LoadingIndicator />
          </ScrollView>
        </View>
      );
    } else {
      let searchData = searchNameResult.place ? searchNameResult.place : {};
      let list = [];
      list.push(
        <View key={1}>
        <TouchableOpacity onPress={() => placeDetail()}>
          <View style={styles.listContainer}>
            <Image source={laLogo} style={styles.image} resizeMode="contain" />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{searchData.title}</Text>
              <Text style={styles.title}>{searchData.location}</Text>
            </View>
          </View>
        </TouchableOpacity>
        </View>
      );
      // Object.values(searchData).forEach((item, idx) => {
      //   list.push(
      //     <View key={idx}>
      //     <TouchableOpacity onPress={() => placeDetail()}>
      //       <View style={styles.listContainer}>
      //         {/*<Image source={laLogo} style={styles.image} resizeMode="contain" />*/}
      //         <View style={styles.titleContainer}>
      //           <Text style={styles.title}>{item.title}</Text>
      //           <Text style={styles.title}>{item.location}</Text>
      //         </View>
      //       </View>
      //     </TouchableOpacity>
      //     </View>
      //   );
      // });
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Places"
            />
          </View>
          <View style={styles.formContainer}>
            {/*<View style={styles.field}>
              <TextField placeholder="Location" iconNamePre="room" iconStylePre={styles.iconStylePre} rootStyle={styles.rootField} />
            </View>*/}
            <View style={styles.field}>
              <TextField placeholder="Type the name of place"
                onIconPressEnd={() => searchNameAction(this.state.keyword)}
                iconNameEnd="search" iconStyleEnd={styles.iconStyleEnd}
                onChangeText={this._onKeywordChange}
                placeholderTextColor="#9a9a9a"
                value={this.state.keyword}
                rootStyle={styles.rootField} />
            </View>
            <View style={styles.lableContainer}>
              <Text style={styles.lableText}>Recomended Places:</Text>
            </View>
          </View>
          <ScrollView>
            {!searchData.title ?
              <View style={styles.init}>
                <Text style={styles.lableText}>Try to type a name of location.</Text>
              </View>:
              list
            }
          </ScrollView>
        </View>
      );
    }
  }
}
