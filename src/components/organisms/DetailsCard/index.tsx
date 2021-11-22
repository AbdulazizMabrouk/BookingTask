import * as React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import {STYLES, COLORS, IMAGES, FONTS} from '../../../common';
import { calcHeight} from '../../../utils';
import {AppText} from '../../atoms';
import {Rating} from '../../molecules';
import {useRoute} from '@react-navigation/core';

interface DetailsCardProps {}

const DetailsCard = ({item}: DetailsCardProps) => {
  const {params} = useRoute();
  console.log('params', params);

  return (
    <View style={styles.container}>
      <Image source={IMAGES.onBoard} style={styles.image} />
      <View style={styles.textcontainer}>
        <AppText style={styles.header}>{params?.item.name}</AppText>
        <AppText style={styles.description} numberOfLines={5}>{params?.item.location}</AppText>
       <View>
       <Rating
          rate={params?.item.rating}
          style={{backgroundColor: COLORS.white}}
          rateStyle={{color: COLORS.orange}}
        />
       </View>
        
      </View>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    ...STYLES.shaddow,
    backgroundColor: COLORS.white,
    padding: 8,
    borderRadius: 12,
    flexDirection: 'row',
    marginTop:calcHeight(32)
  },
  textcontainer: {marginHorizontal: 8,width:'70%', justifyContent: 'space-between'},
  header: {
    ...FONTS.medium,
    fontSize: 18,
  },
  description: {
    color: COLORS.mineShaft60,
    flexWrap:'wrap',
    
  },
  image: {
    width: '30%',
    height: calcHeight(120),
    resizeMode: 'contain',
    borderRadius: 16,
  },
});
