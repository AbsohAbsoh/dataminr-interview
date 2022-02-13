import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View} from 'react-native';
import {NavigationParams} from '../../config/navigation';

export const SandboxScreen: FC<
  NativeStackScreenProps<NavigationParams, 'Sandbox'>
> = () => {
  return <View />;
};
