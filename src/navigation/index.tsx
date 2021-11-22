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
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {/*intro  */}
      {/* <RootStack.Screen name={'Splash'} component={Splash} /> */}
      {/* <RootStack.Screen name={'OnBoarding'} component={OnBoarding} /> */}
      {/* regester */}
      {/* <RootStack.Screen name={'Login'} component={Login} />
      <RootStack.Screen name={'SignUp'} component={SignUp} /> */}

      {/*common  */}
      <RootStack.Screen name={'Home'} component={Home} />
      <RootStack.Screen name={'Details'} component={Details} />
      <RootStack.Screen name={'HotelBooking'} component={HotelBooking} />
    </RootStack.Navigator>
  );
};
