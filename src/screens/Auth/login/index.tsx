import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {LoginFormTem, SignUpTemp} from '../../../components/templates';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {AppLogo} from '../../../components/atoms';
import {STYLES, COLORS} from '../../../common';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

interface LoginProps {}

const renderScene = SceneMap({
  first: LoginFormTem,
  second: SignUpTemp,
});

const Login = (props: LoginProps) => {
  const Tab = createMaterialTopTabNavigator();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Login'},
    {key: 'second', title: 'Sign Up'},
  ]);

  return (
    <>
      <View style={{...STYLES.center, flex: 0.2}}>
        <AppLogo />
      </View>
      {/* 
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('screen').width}}
        // renderTabBar={() => (
        //   <TabBar
        //     {...props}
        //     indicatorStyle={{backgroundColor: 'white'}}
        //     style={{backgroundColor: 'pink'}}
        //   />
        // )}
      /> */}

      <Tab.Navigator
        // tabBarIndicator={() => {
        //   return (
        //     <View style={{backgroundColor: 'red', width: 50, height: 30}} />
        //   );
        // }}
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.Jade,
          },
        }}>
        <Tab.Screen name="Home" component={LoginFormTem} />
        <Tab.Screen name="Settings" component={SignUpTemp} />
      </Tab.Navigator>
    </>
  );
};

export {Login};
