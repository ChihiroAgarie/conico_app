import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView
} from 'react-native';
// lib
import { getContents } from '../lib/firebase';
// components
import { ContentItem } from '../components/contentItem';
// types
import { Content } from '../types/content';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export const HomeScreen: React.FC<Props> = ({ navigation }: Props) => {
    const [contents, setContents] = useState<Content[]>([]);

    useEffect(() => {
        getFirebaseItems();
    }, []);

    const getFirebaseItems = async () => {
        const contents = await getContents();
        setContents(contents);
        // console.log(contents);
    }

    const onPressContent = (content: Content) => {
        navigation.navigate("Content", { content });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={contents}
                renderItem={({ item }: { item: Content }) => (
                    <ContentItem content={item} onPress={() => onPressContent(item)} />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
