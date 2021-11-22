import {StyleSheet} from 'react-native';
import {calcWidth} from '../utils';
import {COLORS} from './Colors';
import {FONTS} from './Fonts';

export const STYLES = StyleSheet.create({
  shaddow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 8,

    elevation: 2,
    backgroundColor: COLORS.white,
  },

  headerHorizontal: {
    paddingHorizontal: calcWidth(20),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    ...FONTS.bold,
    fontSize: 24,
  },
});
