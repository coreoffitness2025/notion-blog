import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const token = authHeader.slice(7);
    const decoded = await adminAuth.verifyIdToken(token);

    const snap = await adminDb
      .doc(`users/${decoded.uid}/rewardPoints/summary`)
      .get();
    const balance = snap.data()?.currentBalance ?? 0;

    return NextResponse.json({ balance });
  } catch {
    return NextResponse.json({ error: "auth_failed" }, { status: 401 });
  }
}
