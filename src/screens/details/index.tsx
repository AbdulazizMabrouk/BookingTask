import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface DetailsProps {}

const Details = (props: DetailsProps) => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
};

export {Details};

const styles = StyleSheet.create({
  container: {},
});
