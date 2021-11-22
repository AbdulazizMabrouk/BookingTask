import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {COLORS, IMAGES} from '../../common';
import {useNavigation} from '@react-navigation/core';

const Splash = () => {
  let navigation = useNavigation();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IMAGES.logo} />
    </View>
  );
};

export {Splash};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Jade,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {borderRadius: 12},
});
