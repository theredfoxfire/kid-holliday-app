//@flow
import {StyleSheet} from 'react-native';
import {SECONDARY_GREEN} from '../constants/color';

let flexRow = {
  flex: 1,
  flexDirection: 'row',
};

let icon = {
  color: '#777777',
  marginRight: 5,
  fontSize: 12,
};

export default StyleSheet.create({
  root: {
    marginTop: 10,
    marginHorizontal: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  headerWrapper: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headingWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  creatorName: {
    fontSize: 20,
    color: '#139E13',
  },
  thumbnailPicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  thumbnailIcon: {
    fontSize: 50,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: '#CECECE',
  },
  titleWrapper: {
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  picture: {
    marginHorizontal: 10,
  },
  contentFooterWrapper: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  categoryWrapper: {
    flexDirection: 'row',
  },
  categoryText: {
    color: 'black',
  },
  lastCommentWrapper: {
    flexDirection: 'row',
  },
  lastCommentResultWrapper: {
    ...flexRow,
  },
  lastCommentResult: {
    flex: 1,
  },
  engageWrapper: {
    ...flexRow,
    justifyContent: 'flex-end',
    paddingTop: 10,
  },
  amount: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'flex-end',
  },
  amountIcon: {
    ...icon,
    paddingTop: 2,
  },
  amountFont: {
    fontSize: 12,
    color: '#6E6E6E',
  },
  footerWrapper: {
    ...flexRow,
    backgroundColor: '#EDEDED',
    padding: 10,
    alignItems: 'center',
  },
  actionWrapper: {
    ...flexRow,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 5,
  },
  actionIcon: {
    ...icon,
    paddingTop: 4,
  },
  actionIconLiked: {
    ...icon,
    paddingTop: 4,
    color: SECONDARY_GREEN,
  },
  actionFont: {
    fontWeight: '500',
    color: '#6E6E6E',
  },
  actionFontLiked: {
    fontWeight: '500',
    color: SECONDARY_GREEN,
  },
  greenFont: {
    color: SECONDARY_GREEN,
  },
  footerItemWrapper: {
    flexDirection: 'row',
  },
  reportRow: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: -10,
  },
  spacer: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbtack: {
    width: 20,
    height: 20,
  },
});
