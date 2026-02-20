import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { FieldValue } from "firebase-admin/firestore";

const SIGNUP_BONUS = 50;

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const token = authHeader.slice(7);
    const decoded = await adminAuth.verifyIdToken(token);
    const uid = decoded.uid;

    const userRef = adminDb.doc(`users/${uid}`);
    const userSnap = await userRef.get();

    if (!userSnap.exists) {
      // New user — create profile + grant signup bonus
      const batch = adminDb.batch();

      batch.set(userRef, {
        displayName: decoded.name || "",
        email: decoded.email || "",
        photoURL: decoded.picture || "",
        tier: "FREE",
        webOnboardingCompleted: false,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });

      const summaryRef = adminDb.doc(
        `users/${uid}/rewardPoints/summary`,
      );
      batch.set(summaryRef, {
        currentBalance: SIGNUP_BONUS,
        totalPoints: SIGNUP_BONUS,
        updatedAt: FieldValue.serverTimestamp(),
      });

      const txRef = adminDb
        .collection(`users/${uid}/pointTransactions`)
        .doc();
      batch.set(txRef, {
        type: "earn",
        amount: SIGNUP_BONUS,
        reason: "web_signup_bonus",
        description: "Web signup bonus",
        balanceAfter: SIGNUP_BONUS,
        createdAt: FieldValue.serverTimestamp(),
      });

      await batch.commit();

      return NextResponse.json({
        isNew: true,
        balance: SIGNUP_BONUS,
        profile: {
          displayName: decoded.name || "",
          email: decoded.email || "",
          photoURL: decoded.picture || "",
        },
      });
    }

    // Existing user — return profile + balance
    const summarySnap = await adminDb
      .doc(`users/${uid}/rewardPoints/summary`)
      .get();
    const balance = summarySnap.data()?.currentBalance ?? 0;

    const userData = userSnap.data()!;
    return NextResponse.json({
      isNew: false,
      balance,
      profile: {
        displayName: userData.displayName || decoded.name || "",
        email: userData.email || decoded.email || "",
        photoURL: userData.photoURL || decoded.picture || "",
      },
      webPersonalization: userData.webPersonalization || null,
      webOnboardingCompleted: userData.webOnboardingCompleted || false,
    });
  } catch (error) {
    console.error("Session API error:", error);
    return NextResponse.json({ error: "auth_failed" }, { status: 401 });
  }
}
