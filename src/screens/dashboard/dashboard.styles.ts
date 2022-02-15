import {StyleSheet} from 'react-native';
import {Theme} from '../../config/theme';

export const dashboardStyles = (theme: Theme) => {
  return StyleSheet.create({
    background: {
      padding: 25,
      width: '100%',
      alignItems: 'center',
    },
    backgroundWrapper: {
      flex: 1,
      backgroundColor: theme.background,
    },
    demoParagraph: {
      marginTop: 150,
      textAlign: 'center',
    },
    demoButton: {
      marginTop: 150,
    },
  });
};
