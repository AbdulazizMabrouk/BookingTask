import React from 'react';
import {Image, ImageStyle} from 'react-native';
import {IMAGES} from '../../../common';
import styles from './styles';

interface AppLogoProps {
  style?: ImageStyle;
}

let AppLogo: React.FC<AppLogoProps> = ({style}: AppLogoProps) => {
  return (
    <Image
      source={IMAGES.logo}
      style={[styles.logo, style]}
      resizeMode={'contain'}
    />
  );
};

AppLogo = React.memo(AppLogo);
export {AppLogo};
