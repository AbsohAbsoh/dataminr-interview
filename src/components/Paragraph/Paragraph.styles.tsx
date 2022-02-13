import {StyleSheet, TextStyle} from 'react-native';
import {Theme} from '../../config/theme';

export const paragraphStyles = (theme: Theme): ParagraphStyles => {
  return StyleSheet.create({
    paragraph: {
      fontSize: 18,
      color: theme.textPrimary,
      lineHeight: 30,
    },
  });
};

export interface ParagraphStyles {
  paragraph: TextStyle;
}
