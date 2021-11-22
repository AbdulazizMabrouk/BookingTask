import * as React from 'react';
import {View} from 'react-native';
import {LoginFormTem, SignUpTemp} from '../../../components/templates';

import {AppLogo} from '../../../components/atoms';
import {STYLES, COLORS} from '../../../common';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

interface LoginProps {}

const Login = (props: LoginProps) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <View style={{...STYLES.center, flex: 0.2}}>
        <AppLogo />
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.Jade,
          },
        }}>
        <Tab.Screen name="Login " component={LoginFormTem} />
        <Tab.Screen name="Sign Up" component={SignUpTemp} />
      </Tab.Navigator>
    </>
  );
};

export {Login};
