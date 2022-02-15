import React, {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboard/dashboard';
import {defaultTheme, Theme, ThemeContext} from './src/config/theme';
import {Route} from './src/config/navigation';
import {SandboxScreen} from './src/screens/sandbox/sandbox';
import {useStyles} from './src/config/styles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <SafeArea>
        <StatusBar barStyle={'default'} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={Route.Dashboard}
              component={DashboardScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name={Route.Sandbox} component={SandboxScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeArea>
    </ThemeContext.Provider>
  );
};

export default App;

const SafeArea: FC = props => {
  const styles = useStyles(AppStyles);
  return (
    <SafeAreaView style={styles.safeAreaView}>{props.children}</SafeAreaView>
  );
};

const AppStyles = (_: Theme) =>
  StyleSheet.create({
    safeAreaView: {
      height: '100%',
      width: '100%',
    },
  });
