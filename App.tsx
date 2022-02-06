import React, { useState } from "react";
import { AppNavigator } from './src/navigation/AppNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* contexts */
import { UserContext } from "./src/contexts/userContext";
import { User } from "./src/types/user";
// screens
import { StartScreen } from "./src/screens/StartScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";

export default function App() {
  const [user, setUser] = useState<User>();

  const Stack = createStackNavigator();

  return (
    // <UserContext.Provider value={{ user, setUser }}>

    // </UserContext.Provider>
    <NavigationContainer>
      {/* {!user ? <AuthScreen /> : <MainTabNavigator />} */}
      {/* <MainTabNavigator /> */}
      {/* <StartScreen /> */}
      {/* <AppNavigator /> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
