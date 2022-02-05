import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
/* components */
import { IconButton } from "../components/IconButton";
import { TextArea } from "../components/TextArea";
import { StarInput } from "../components/StarInput";
import { Button } from "../components/Button";
import { addReview } from "../lib/firebase";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { Review } from "../types/review";
import { UserContext } from "../contexts/userContext";

type Props = {
    navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
    route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({
    navigation,
    route,
}: Props) => {
    const { content } = route.params;
    const [text, setText] = useState<string>("");
    const [score, setScore] = useState<number>(3);
    const { user } = useContext(UserContext);

    useEffect(() => {
        navigation.setOptions({
            title: content.title_fb,
            headerLeft: () => (
                <IconButton onPress={() => navigation.goBack()} name="x" />
            ),
        });
    }, [navigation, content]);

    const onSubmit = async () => {
        const review = {
            // user: {
            //     name: user.name,
            // id:user.id,
            // },
            content: {
                name: content.title_fb,
                id: content.id,
            },
            text,
            score,
            // updatedAt: firebase.firestore.Timestamp.now(),
            // createdAt: firebase.firestore.Timestamp.now(),
        } as Review;
        await addReview(content.id, review);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{
                margin: 16,
                fontWeight: "bold",
                color: "gray",
            }}>レビュー</Text>
            <StarInput
                score={score}
                onChangeScore={(value) => setScore(value)}
            />
            <TextArea
                value={text}
                onChangeText={(value) => setText(value)}
                label="メモ"
                placeholder="お子さんの様子はどうでしたか？メモしましょう！"
            />
            <Button
                text="記録する"
                onPress={onSubmit}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});