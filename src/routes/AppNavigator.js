import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/welcome/Welcome';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const leftToRighAnimation = {
    headerShown: true,
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#365D7A',
    },
    headerTintColor: 'white',

    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [-layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={leftToRighAnimation}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={leftToRighAnimation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
