import { adminDb } from "@/lib/firebase/admin";
import { FieldValue } from "firebase-admin/firestore";

const POINT_COST = 8;

export async function deductPoints(
  uid: string,
): Promise<{ success: boolean; balance: number }> {
  const summaryRef = adminDb.doc(`users/${uid}/rewardPoints/summary`);

  return adminDb.runTransaction(async (tx) => {
    const snap = await tx.get(summaryRef);
    const current = snap.data()?.currentBalance ?? 0;

    if (current < POINT_COST) {
      return { success: false, balance: current };
    }

    const newBalance = current - POINT_COST;
    tx.update(summaryRef, {
      currentBalance: newBalance,
      updatedAt: FieldValue.serverTimestamp(),
    });

    const txRef = adminDb.collection(`users/${uid}/pointTransactions`).doc();
    tx.set(txRef, {
      type: "spend",
      amount: POINT_COST,
      reason: "web_chat_message",
      description: "AI coach chat (web)",
      balanceAfter: newBalance,
      createdAt: FieldValue.serverTimestamp(),
    });

    return { success: true, balance: newBalance };
  });
}

export { POINT_COST };
