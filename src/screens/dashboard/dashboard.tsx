import React, {FC, useCallback} from 'react';
import {GestureResponderEvent, ScrollView} from 'react-native';
import {Button} from '../../components/Button/Button';
import {Paragraph} from '../../components/Paragraph/Paragraph';
import {useContent} from '../../config/content';
import {useStyles} from '../../config/styles';
import {dashboardStyles} from './dashboard.styles';

const DashboardScreen: FC = () => {
  const styles = useStyles(dashboardStyles);
  const content = useContent('dashboard');

  const onDemoButtonPress = useCallback((_: GestureResponderEvent) => {
    console.log('Demo button pressed');
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Paragraph
        styleOverrides={{
          paragraph: styles.demoParagraph,
        }}>
        {content.demoBody}
      </Paragraph>
      <Button
        content={content.demoButton}
        onPress={onDemoButtonPress}
        styleOverrides={{pressable: styles.demoButton}}
      />
    </ScrollView>
  );
};

export default DashboardScreen;
