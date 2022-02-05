import { initializeApp } from 'firebase/app';

type UserRef = {
    id: string;
    name: string;
};

type ContentRef = {
    id: string;
    name: string;
};

export type Review = {
    id?: string;
    text: string;
    score: number;
    user: UserRef;
    content: ContentRef;
    // updatedAt: firebase.firestore.Timestamp;
    // createdAt: firebase.firestore.Timestamp;
};