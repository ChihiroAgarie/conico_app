import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";

/* types */
import { Content } from "../types/content";
/* components */
import { Stars } from "./stars";

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 2;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;

type Props = {
    content: Content;
    onPress: () => void;
};

export const ContentItem: React.FC<Props> = ({ content, onPress }: Props) => {
    // const { img_fb, age_fb, pref_fb, title_fb, score_fb } = content;
    const { img_fb, age_fb, pref_fb, title_fb } = content;
    return (
        <TouchableOpacity style={styles.container}
            onPress={onPress}>
            <Image source={{ uri: img_fb }} style={styles.image} />
            <Text style={styles.nameText}>{age_fb}歳〜</Text>
            <Text style={styles.nameText}>{pref_fb}</Text>
            <Text style={styles.placeText}>{title_fb}</Text>
            {/* <Stars score={score_fb} /> */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        padding: 16,
    },
    image: {
        width: IMAGE_WIDTH,
        height: IMAGE_WIDTH * 0.7,
    },
    nameText: {
        fontSize: 16,
        color: "#000",
        marginTop: 8,
        fontWeight: "bold",
    },
    placeText: {
        fontSize: 12,
        color: "#888",
        marginVertical: 8,
    },
});