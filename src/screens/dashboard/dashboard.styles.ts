import {StyleSheet} from 'react-native';
import {Theme} from '../../config/theme';

export const dashboardStyles = (theme: Theme) => {
  return StyleSheet.create({
    background: {
      backgroundColor: theme.background,
      flex: 1,
      padding: 25,
      width: '100%',
      alignItems: 'center',
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
