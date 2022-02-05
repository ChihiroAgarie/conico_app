import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
/* components */
import { ContentDetail } from "../components/ContentDetail";
import { FloatingActionButton } from "../components/FloatingActionButton";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";

type Props = {
    navigation: StackNavigationProp<RootStackParamList, "Content">;
    route: RouteProp<RootStackParamList, "Content">;
};

export const DetailScreen: React.FC<Props> = ({ navigation, route }: Props) => {
    const { content } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: content.title_fb });
    }, [content]);

    return (
        <SafeAreaView style={styles.container}>
            <ContentDetail content={content} />
            <FloatingActionButton
                iconName="plus"
                onPress={() => navigation.navigate("CreateReview", { content })}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
    },
});