import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";

type Props = {
    navigation: StackNavigationProp<RootStackParamList, "Start">;
    route: RouteProp<RootStackParamList, "Start">;
};

// export const StartScreen: React.FC<Props> = ({ navigation, route }: Props) => {
export function StartScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../img/logo10.png')}
                />
                <TouchableOpacity
                    style={styles.Btn}
                // onPress={() =>
                //     this.props.navigation.navigate('Register')}
                >
                    {/* // onPress={() => navigation.navigate('Register')}> */}
                    <Text style={{ fontWeight: "bold" }}>初回登録</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Btn2}
                // onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ fontWeight: "bold", color: "#F5C162" }}>ログイン</Text>
                </TouchableOpacity>
                {/* <Button
                    title="初回登録"
                    // mode="contained"
                    style={styles.btn}
                    onPress={() => navigation.navigate('Register')}>
                </Button>
                <Button
                    title="ログイン"
                    // mode="outlined"
                    onPress={() => navigation.navigate('Login')}>
                </Button> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    Btn: {
        marginBottom: 20,
        backgroundColor: '#F5C162',
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
    },
    Btn2: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
        borderColor: "lightgray",
        borderWidth: 1,
    },

});