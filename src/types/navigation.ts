import { Content } from "./content";

export type RootStackParamList = {
    Main: undefined;
    Start: undefined;
    Register: undefined;
    Home: undefined;
    Content: { content: Content };
    User: undefined;
    CreateReview: { content: Content };
};