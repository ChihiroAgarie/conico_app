import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// navigator
import { MainTabNavigator } from './MainTabNavigator';
// screen
import { AuthScreen } from '../screens/AuthScreen';
import { StartScreen } from "../screens/StartScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
/* contexts */
import { UserContext } from "../contexts/userContext";



export const AppNavigator = () => {
    //ユーザーログイン認証の条件
    const { user } = useContext(UserContext);

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            {/* {!user ? <AuthScreen /> : <MainTabNavigator />} */}
            {/* <MainTabNavigator /> */}
            {/* <StartScreen /> */}
            <Stack.Navigator>
                <Stack.Screen
                    name="Start"
                    component={StartScreen}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};