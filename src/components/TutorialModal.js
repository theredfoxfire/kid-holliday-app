// @flow
import React, {Component} from 'react';
import autobind from 'class-autobind';
import {
  View,
  ScrollView,
  Image,
  Modal,
  Text,
} from 'react-native';
import {
  Dialog,
  Button,
} from '../core-ui';
import styles from './TutorialModal-style';
import page1 from '../images/tutorial_page1.jpg';
import page2 from '../images/tutorial_page2.jpg';
import page3 from '../images/tutorial_page3.jpg';
import page4a from '../images/tutorial_page4a.jpg';
import page4b from '../images/tutorial_page4b.jpg';
import page5a from '../images/tutorial_page5a.jpg';
import page5b from '../images/tutorial_page5b.jpg';
import Swiper from 'react-native-swiper';
import {getScreenSize} from '../helpers/getSize';

type State = {
  currentSlideIndex: number;
};

type Props = {
  isShown: boolean;
  onRequestClose: () => void;
  onAddPlantPress: () => void;
};

export default class TutorialModal extends Component {
  state: State;
  props: Props;
  numberOfPages: number = 5;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      currentSlideIndex: 0,
    };
  }

  render() {
    let {isShown, onAddPlantPress} = this.props;
    let {currentSlideIndex} = this.state;

    let onRequestClose = () => {
      this.setState({currentSlideIndex: 0});
      this.props.onRequestClose();
    };

    return (
      <Modal
        animationType="fade"
        visible={isShown}
        onRequestClose={onRequestClose}
        transparent={true}
        supportedOrientations={['portrait']}
      >
        <View style={styles.dimScreen}>
          <Dialog
            title="Panduan Tanaman"
            onClose={onRequestClose}
          >
            <View style={styles.body}>
              <Swiper
                ref="swiper"
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                loop={false}
                style={styles.swiperStyle}
                paginationStyle={{bottom: 0}}
                onMomentumScrollEnd={this.handleMomentumScrollEnd}
                width={getScreenSize().width - 80}
                height={getScreenSize().height - 250}
              >
                <View style={styles.paddingBottom}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={page1} style={[styles.image, {height: 250}]} resizeMode="contain" />
                    <Text style={[styles.pageText, styles.marginTop]}>
                      "Teknis Budidaya" adalah menu yang membantu dan mengingatkan Anda mengenai cara budidaya tanaman mulai dari perlakuan benih, pengolahan lahan, hingga panen
                    </Text>
                  </ScrollView>
                </View>
                <View style={styles.paddingBottom}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={page2} style={[styles.image, {height: 250}]} resizeMode="contain" />
                    <Text style={[styles.pageText, styles.marginTop]}>
                      Sentuh tombol + ini untuk mendaftarkan tanaman baru Anda atau yang sudah ditanam
                    </Text>
                  </ScrollView>
                </View>
                <View style={styles.paddingBottom}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={page3} style={[styles.image, {height: 260}]} resizeMode="contain" />
                    <Text style={[styles.pageText, styles.marginVertical]}>
                      Setelah menekan tombol tambah, kemudian pilih Tanaman baru. Berikutnya anda akan diajak untuk mengisi kolom tanaman yang akan Anda tanam ataupun yang sudah tertanam.
                    </Text>
                    <Text style={styles.pageText}>
                      Anda akan diingatkan setiap satu minggu sekali mengenai kondisi tanaman Anda hingga panen
                    </Text>
                  </ScrollView>
                </View>
                <View style={styles.paddingBottom}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={page4a} style={[styles.image, {height: 260}]} resizeMode="contain" />
                    <Text style={[styles.pageText, styles.marginVertical]}>
                      Isilah kolom-kolom tersebut sesuai tanaman Anda sehingga karsa mampu memberikan informasi yang menguntungkan Anda.
                    </Text>
                    <Image source={page4b} style={[styles.image, {height: 100}]} resizeMode="contain" />
                    <Text style={[styles.pageText, styles.marginTop]}>
                      Jika di daerah Anda memiliki jaringan sinyal yang baik, Anda dapat menggunakan GPS untuk informasi lokasi yang lebih spesifik
                    </Text>
                  </ScrollView>
                </View>
                <View style={styles.paddingBottom}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={page5a} style={styles.image} resizeMode="contain" />
                    <Text style={[styles.pageText, styles.marginVertical]}>
                      Setelah kolom terisi lengkap Anda akan memiliki gambaran tanaman Anda dan info tanam.
                    </Text>
                    <Text style={[styles.pageText, styles.marginBottom]}>
                      Saran budidaya perminggu akan dapat Anda gunakan untuk acuan tanam.
                    </Text>
                    <Image source={page5b} style={[styles.image, {height: 175}]} resizeMode="contain" />
                    <Text style={[styles.pageText, styles.marginTop]}>
                      Anda dapat membagikan informasi tanaman Anda ke forum dan rekan lainnya
                    </Text>
                  </ScrollView>
                </View>
              </Swiper>
            </View>
            <View style={styles.footer}>
              {
                currentSlideIndex < 4 ?
                  <Button
                    style={styles.button}
                    text="Selanjutnya"
                    onPress={this.handleNext}
                  /> :
                    <View style={styles.flexRow}>
                      <Button
                        style={styles.button}
                        text="Selesai"
                        onPress={onRequestClose}
                        inverted
                      />
                      <Button
                        style={styles.button}
                        text="Buat Tanaman Baru"
                        onPress={onAddPlantPress}
                      />
                    </View>
              }
            </View>
          </Dialog>
        </View>
      </Modal>
    );
  }

  handleMomentumScrollEnd(event: Object, swiperState: Object) {
    this.setState({currentSlideIndex: swiperState.index});
  }

  handleNext() {
    let {currentSlideIndex} = this.state;
    if (currentSlideIndex < (this.numberOfPages - 1)) {
      let nextSlideIndex = currentSlideIndex + 1;
      this.refs.swiper.scrollBy(1, false);
      this.setState({currentSlideIndex: nextSlideIndex});
    }
    if (currentSlideIndex === (this.numberOfPages - 1)) {
    }
  }
}
