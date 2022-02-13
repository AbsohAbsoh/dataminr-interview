import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboard/dashboard';
import {defaultTheme, ThemeContext} from './src/config/theme';
import {Route} from './src/config/navigation';
import {SandboxScreen} from './src/screens/sandbox/sandbox';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <SafeAreaView style={AppStyles.safeAreaView}>
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
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;

const AppStyles = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    width: '100%',
  },
});
