import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useCallback} from 'react';
import {GestureResponderEvent, ScrollView, View} from 'react-native';
import {Button} from '../../components/Button/Button';
import {Paragraph} from '../../components/Paragraph/Paragraph';
import {useContent} from '../../config/content';
import {NavigationParams} from '../../config/navigation';
import {useStyles} from '../../config/styles';
import {dashboardStyles} from './dashboard.styles';
import {dashboardTags} from './dashboard.tags';

const DashboardScreen: FC<
  NativeStackScreenProps<NavigationParams, 'Dashboard'>
> = ({}) => {
  const styles = useStyles(dashboardStyles);
  const content = useContent('dashboard');

  const onDemoButtonPress = useCallback((_: GestureResponderEvent) => {}, []);

  return (
    <View style={styles.backgroundWrapper}>
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
          styleOverrides={{container: styles.demoButton}}
          testID={dashboardTags.demoButton}
        />
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
