import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {AppText} from '../../atoms';
import {IMAGES, COLORS} from '../../../common';

interface RatingProps {
  rate: number | string;
  style: ViewStyle;
  rateStyle: TextStyle;
}

const Rating = ({rate, style, rateStyle}: RatingProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={IMAGES.star} style={styles.image} />
      <AppText style={[styles.rate, rateStyle]}>{rate}</AppText>
    </View>
  );
};

export {Rating};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: COLORS.mineShaft60,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  image: {
    resizeMode: 'contain',
    width: 10,
    height: 10,
    alignSelf: 'center',
  },
  rate: {
    color: COLORS.white,
    marginHorizontal: 8,
  },
});
