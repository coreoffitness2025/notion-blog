import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getClientAuth } from "./client";

const provider = new GoogleAuthProvider();

// 앱은 구글·애플·이메일 세 가지로 가입받는다(src/features/auth). 웹에서 코드를 등록하려면
// 같은 세 가지를 다 받아야 한다 — 하나라도 빠지면 그 방식으로 가입한 사람은 사은품을 못 쓴다.
const appleProvider = new OAuthProvider("apple.com");
appleProvider.addScope("email");

export const signInWithGoogle = () => signInWithPopup(getClientAuth(), provider);
export const signInWithApple = () => signInWithPopup(getClientAuth(), appleProvider);
export const signInWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(getClientAuth(), email, password);
export const logOut = () => signOut(getClientAuth());
