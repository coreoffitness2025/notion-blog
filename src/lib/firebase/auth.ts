import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getClientAuth } from "./client";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(getClientAuth(), provider);
export const logOut = () => signOut(getClientAuth());
