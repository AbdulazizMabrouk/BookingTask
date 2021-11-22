import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AuthTabsProps {}

const AuthTabs = (props: AuthTabsProps) => {
  return (
    <View style={styles.container}>
      <Text>AuthTabs</Text>
    </View>
  );
};

export default AuthTabs;

const styles = StyleSheet.create({
  container: {},
});
