import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import SplashImage from '../Assets/Images/Expenselogo.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function SplashScreen() {
  return (
    <View style={styles.conatiner}>
      <Image resizeMode="contain" style={styles.image} source={SplashImage} />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  image: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
  },
});
