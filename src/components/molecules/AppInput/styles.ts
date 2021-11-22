import {StyleSheet, I18nManager} from 'react-native';
import {calcWidth, calcHeight, calcFont} from '../../../utils';
import {FONTS, COLORS} from '../../../common';

export default StyleSheet.create({
  container: {
    minHeight: calcHeight(80),
    marginBottom: calcHeight(5),
    width: '90%',
  },
  input: {
    ...FONTS.regular,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontSize: calcFont(16.7),
    color: COLORS.black,
    minHeight: calcHeight(55),
    backgroundColor: COLORS.white,
    borderRadius: calcWidth(25),
    paddingHorizontal: calcWidth(23),
  },
  labelStyle: {
    ...FONTS.bold,
    color: COLORS.mineShaft,
    fontSize: calcFont(15),
    marginBottom: calcHeight(3),
  },
  errorStyle: {
    borderBottomColor: COLORS.red,
    borderBottomWidth: 1,
  },
  errorText: {
    color: COLORS.red,
    fontSize: calcFont(14),
    height: calcHeight(20),
  },
});
