import { Content } from "./content";

export type RootStackParamList = {
    Main: undefined;
    Home: undefined;
    Content: { content: Content };
    User: undefined;
    CreateReview: { content: Content };
};