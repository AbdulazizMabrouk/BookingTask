import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {STYLES, FONTS} from '../../common';
import {AppText} from '../../components/atoms';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Home</AppText>
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {},
  title: {
    ...FONTS.medium,
    fontSize: 44,
  },
});
