import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {IMAGES, STYLES, onBoarding} from '../../../common';
import {AppText, Button} from '../../atoms';
import {useNavigation} from '@react-navigation/core';
import {calcHeight} from '../../../utils';

const OnboardingTemp = () => {
  let navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainre}>
        <Image source={IMAGES.onBoard} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <AppText style={{...STYLES.titleStyle}}>{onBoarding.title}</AppText>
        <AppText style={{}}>{onBoarding.description}</AppText>
      </View>
      <Button
        title={'Next'}
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      />
    </View>
  );
};

export {OnboardingTemp};

const styles = StyleSheet.create({
  container: {flex: 1},
  imageContainre: {
    marginTop: calcHeight(32),
    ...STYLES.shaddow,
    width: '90%',
    borderRadius: 32,
  },
  image: {},
  textContainer: {
    marginTop: calcHeight(32),
    marginBottom: calcHeight(64),
    marginHorizontal: 16,
  },
  button: {
    width: '40%',
  },
});
