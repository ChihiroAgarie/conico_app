import { updateDoc, serverTimestamp, doc } from "firebase/firestore";

export type User = {
    id?: string;
    name: string;
    // updatedAt: firebase.firestore.Timestamp;
    // createdAt: firebase.firestore.Timestamp;
};

export const initialUser: User = {
    name: "",
    // uid: "",
};