import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/dashboard/dashboard';
import {defaultTheme, ThemeContext} from './src/config/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <SafeAreaView
        style={{
          width: '100%',
          height: '100%',
        }}>
        <StatusBar barStyle={'default'} />
        <DashboardScreen />
        {/* <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </Stack.Navigator>
        </NavigationContainer> */}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
