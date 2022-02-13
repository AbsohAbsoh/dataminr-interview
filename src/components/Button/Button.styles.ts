import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from './../../config/theme';

export const buttonStyles = (theme: Theme): ButtonStyles => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.primary,
      alignItems: 'center',
      marginHorizontal: 0,
      padding: 10,
      borderRadius: 40,
      width: 200,
      shadowRadius: 1,
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowOffset: {
        height: 1,
        width: 0,
      },
    },
    text: {
      fontSize: 30,
      color: theme.textSecondary,
    },
  });
};

export interface ButtonStyles {
  container: ViewStyle;
  text: TextStyle;
}
