import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
/* components */
import { Stars } from "./stars";
/* types */
import { Content } from "../types/content";

type Props = {
    content: Content;
};

export const ContentDetail: React.FC<Props> = ({ content }: Props) => {
    const { img_fb, age_fb, pref_fb, title_fb, score_fb, place_fb, detail_fb } = content;

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.image} source={{ uri: img_fb }}></Image>
                {/* <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={styles.gradient}
                /> */}
                <View>
                    <Text style={styles.name}>{title_fb}</Text>
                    <Text style={styles.place}>{age_fb}歳〜</Text>
                    <Text style={styles.place}>{pref_fb}</Text>
                    <Text style={styles.place}>{place_fb}</Text>
                    <Text style={styles.place}>{detail_fb}</Text>
                </View>
            </View>
            {/* <View style={styles.starContainer}>
                <Stars score={score_fb} starSize={28} textSize={20} />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
    },
    // nameContainer: {
    //     position: "absolute",
    //     left: 16,
    //     bottom: 16,
    //     flexDirection: "row",
    //     justifyContent: "flex-start",
    //     alignItems: "flex-end",
    // },
    starContainer: {
        margin: 16,
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
    },
    name: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
        marginLeft: 16,
    },
    place: {
        fontSize: 16,
        color: "#000",
        // fontWeight: "bold",
        marginLeft: 16,
    },
    gradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 250,
    },
});