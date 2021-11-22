import {StyleSheet} from 'react-native';
import {calcFont, calcHeight, calcWidth} from '../../../utils';
import {COLORS, FONTS} from '../../../common';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.Jade,
    height: calcHeight(56),
    width: '100%',
    paddingHorizontal: calcWidth(8),
    borderRadius: calcHeight(615),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledStyle: {
    opacity: 0.7,
  },
  text: {
    color: COLORS.white,
    ...FONTS.bold,
    fontSize: calcFont(16.7),
  },

  bottomButton: {
    position: 'absolute',
    borderRadius: undefined,
    width: undefined,
    bottom: calcHeight(32),
  },

  horizontalButton: {
    flexDirection: 'row',
  },
});

export default styles;
