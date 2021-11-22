import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../../../common';

export const Spinner: React.FC = () => (
  <ActivityIndicator size={'large'} color={COLORS.orangeYellow} />
);
