// @flow
import React from 'react';

import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';
import Button from '../core-ui/Button';
import {
  GREEN,
  DARK_YELLOW,
} from '../constants/color';

import styles from './NewItemModal-style';
import {MyPlants, MyPage, Camera, BusinessAnalysis} from '../core-image';

type Props = {
  guestMode: boolean;
  onRequestClose: () => void;
  onAddPlantPress: () => void;
  onAddPhotoPress: () => void;
  onAddThreadPress: () => void;
  onLoginPress: () => void;
  isShown: boolean;
  onAddCostAnalysisPress: () => void;
};

function NewItemModal(props: Props) {
  let {isShown, guestMode} = props;
  let {onAddPlantPress, onRequestClose, onAddPhotoPress, onAddThreadPress, onAddCostAnalysisPress} = props;
  let {onLoginPress} = props;

  return (
    <Modal
      animationType="fade"
      visible={isShown}
      onRequestClose={onRequestClose}
      transparent={true}
      supportedOrientations={['portrait']}
    >
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.root}>
          {guestMode ? (
            <View style={styles.guestModalContainer}>
              <View style={styles.guestModalContainerText}>
                <Text>Silahkan lakukan registrasi / login jika</Text>
                <Text>ingin menggunakan fitur ini</Text>
              </View>
              <Button text="MASUK" onPress={onLoginPress} />
            </View>
          ) : (
            <View style={styles.modalContainer}>
              <View style={styles.flex} />
              <View style={[styles.flex, styles.flexRow]}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={onAddPhotoPress}>
                    <View style={styles.iconContainer}>
                      <View style={[styles.iconButton, {backgroundColor: '#2651d1'}]}>
                        <Image
                          source={Camera}
                          style={styles.imageCamera}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.text}>FOTO</Text>
                      <Text style={styles.text}>TANAMAN</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={onAddPlantPress}>
                    <View style={styles.iconContainer}>
                      <View style={[styles.iconButton, {backgroundColor: GREEN}]}>
                        <Image
                          source={MyPlants}
                          style={styles.image}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.text}>TANAMAN</Text>
                      <Text style={styles.text}>BARU</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.flex, styles.flexRow]}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={onAddThreadPress}>
                    <View style={styles.iconContainer}>
                      <View style={[styles.iconButton, {backgroundColor: DARK_YELLOW}]}>
                        <Image
                          source={MyPage}
                          style={styles.image}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.text}>TOPIK</Text>
                      <Text style={styles.text}>BARU</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={onAddCostAnalysisPress}>
                    <View style={styles.iconContainer}>
                      <View style={[styles.iconButton, {backgroundColor: '#a16754'}]}>
                        <Image
                          source={BusinessAnalysis}
                          style={styles.image}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={styles.text}>ANALISIS</Text>
                      <Text style={styles.text}>BIAYA BARU</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.flex} />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default NewItemModal;
