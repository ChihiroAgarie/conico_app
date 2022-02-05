import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
// navigator
import { MainTabNavigator } from './MainTabNavigator';
// screen
import { AuthScreen } from '../screens/AuthScreen';
/* contexts */
import { UserContext } from "../contexts/userContext";

export const AppNavigator = () => {
    //ユーザーログイン認証の条件
    const { user } = useContext(UserContext);

    return (
        <NavigationContainer>
            {/* {!user ? <AuthScreen /> : <MainTabNavigator />} */}
            <MainTabNavigator />
        </NavigationContainer>
    );
};