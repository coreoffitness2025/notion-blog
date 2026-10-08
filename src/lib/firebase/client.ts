import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (_app) return _app;
  // 6개는 Vercel 환경변수(Production)로만 번들에 들어간다 — README "Vercel 배포" 참고.
  // 2026-10-08: 2월 도입 때 등록이 빠져 /redeem 이 'internal' 로만 실패했다(함수 주소가
  // `asia-northeast3-undefined` 가 됨). 원인이 화면에 보이도록 여기서 먼저 막는다.
  if (!config.projectId || !config.apiKey) {
    throw new Error("사이트 설정 오류로 지금은 처리할 수 없습니다. 잠시 후 다시 시도하시거나 문의해 주세요.");
  }
  _app = getApps().length ? getApp() : initializeApp(config);
  return _app;
}

export function getClientAuth(): Auth {
  if (_auth) return _auth;
  _auth = getAuth(getFirebaseApp());
  return _auth;
}

export function getClientDb(): Firestore {
  if (_db) return _db;
  _db = getFirestore(getFirebaseApp());
  return _db;
}
