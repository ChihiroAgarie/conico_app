import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* screens */
import { StartScreen } from "../screens/StartScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen";
import { CreateReviewScreen } from "../screens/CreateReviewScreen";
/* types */
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const MainStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerTintColor: "#000",
        }}>
        <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{ headerShown: false }} />
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} />
        <Stack.Screen
            name="Content"
            component={DetailScreen} />
    </Stack.Navigator>
);

export const HomeStackNavigator = () => (
    <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
            name="Main"
            component={MainStack}
            options={{ headerShown: false }}
        />
        <RootStack.Screen
            name="CreateReview"
            component={CreateReviewScreen} />
    </RootStack.Navigator>
);