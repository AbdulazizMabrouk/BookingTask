import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import DetailsCard from '../../components/organisms/DetailsCard';
import { AppText } from '../../components/atoms';
import { useNavigation } from '@react-navigation/core';


const Details = ({item}:any) => {
 let navigation= useNavigation();
 React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'description',
      headerRight: () => (
        <View style={{backgroundColor:'red'}}>
          
        </View>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <DetailsCard />
      <AppText> {item?.description}</AppText>
    </View>
  );
};

export {Details};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    
  },
});
