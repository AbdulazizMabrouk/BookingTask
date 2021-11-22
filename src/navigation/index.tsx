import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Login,
  SignUp,
  Splash,
  OnBoarding,
  Home,
  Details,
  HotelBooking,
} from '../screens';

const RootStack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      {/*intro  */}
      <RootStack.Screen
        name={'Splash'}
        component={Splash}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={'OnBoarding'}
        component={OnBoarding}
        options={{headerShown: false}}
      />
      {/* regester */}
      <RootStack.Screen
        name={'Login'}
        component={Login}
        options={{headerShown: false}}
      />

      {/*common  */}
      <RootStack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <RootStack.Screen name={'Details'} component={Details} />
      <RootStack.Screen name={'HotelBooking'} component={HotelBooking} />
    </RootStack.Navigator>
  );
};
