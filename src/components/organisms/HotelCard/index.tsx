import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {AppText} from '../../atoms';
import {FONTS, COLORS} from '../../../common';
import {calcWidth, calcHeight} from '../../../utils';
import {Rating} from '../../molecules';
import {useNavigation} from '@react-navigation/core';

interface HotelCardProps {
  item: {
    title: string;
    description: string;
    image: string;
    rating: 4.5;
  };
}

const HotelCard = ({item}: HotelCardProps) => {
  let navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.container}
      imageStyle={{
        resizeMode: 'cover',
        borderRadius: 18,
      }}
      source={{
        uri: `https://lh3.googleusercontent.com/places/AAcXr8puBI6TFbTDL_hP4F5tC32BQjr9mH3sAtGArqN0tpquZebTwkMi5GAMDMSGz58DZI-qhREyYscDXdL89y7PBOl-U9I8j1S1aIc=s1600-w400`,
      }}>
      <View style={{position: 'absolute', top: 10, right: 10}}>
        <Rating rate={item.rating} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
        <View
          style={{
            backgroundColor: COLORS.mineShaft20,
            padding: 8,
            paddingBottom: 16,
            borderRadius: 18,
          }}>
          <AppText style={{...FONTS.medium, fontSize: 18, color: COLORS.white}}>
            {item.name}
          </AppText>
          <AppText
            style={{...FONTS.medium, fontSize: 12, color: COLORS.white80}}>
            {item.location}
          </AppText>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  container: {
    width: calcWidth(300),
    marginEnd: calcWidth(16),
    borderRadius: 18,
    height: calcHeight(400),
    marginTop: 32,
    justifyContent: 'flex-end',
  },
});
