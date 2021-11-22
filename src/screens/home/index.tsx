import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {FONTS, COLORS} from '../../common';
import {AppText, Spinner} from '../../components/atoms';
import {HomeList} from '../../components/templates';
import {calcHeight} from '../../utils';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
interface HomeProps {}

const Home = (props: HomeProps) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{`Good Morning,\nStephanie!`}</AppText>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.Jade,
          },
        }}>
        <Tab.Screen name="Recomended" component={HomeList} />
        <Tab.Screen name="Popular" component={Spinner} />
      </Tab.Navigator>
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 16},
  title: {
    ...FONTS.medium,
    color: COLORS.mineShaft,
    fontSize: 32,
    marginTop: calcHeight(60),
  },
});
