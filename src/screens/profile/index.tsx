import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ProfileProps {}

const Profile = (props: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export {Profile};

const styles = StyleSheet.create({
  container: {},
});
