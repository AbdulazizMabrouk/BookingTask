import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface HotelBookingProps {}

const HotelBooking = (props: HotelBookingProps) => {
  return (
    <View style={styles.container}>
      <Text>HotelBooking</Text>
    </View>
  );
};

export {HotelBooking};

const styles = StyleSheet.create({
  container: {},
});
