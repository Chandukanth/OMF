
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import LoadableComponent from './src/utils/loadable';
import store from './src/store';

const Stack = createStackNavigator();

// Loadable components for code-splitting
const SplashScreen1 = LoadableComponent(() => import('./src/views/splashscreen/splashScreen'));

const UserNavigation = ({ isDarkMode }) => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                 screenOptions={{
                    headerShown: false,
                  }}
                  initialRouteName="SplashScreen1"
                >
                    <Stack.Screen name="SplashScreen1"
                        component={() => <SplashScreen1 isDarkMode={isDarkMode} />} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default UserNavigation;
