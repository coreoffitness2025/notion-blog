import { NextRequest, NextResponse } from "next/server";
import { generateWatermarkedPdf } from "@/lib/watermark";

export async function POST(request: NextRequest) {
  try {
    const { paymentKey, customerName, customerPhone } = await request.json();

    if (!paymentKey || !customerName || !customerPhone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const secretKey = process.env.TOSS_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Payment not configured" },
        { status: 500 }
      );
    }

    // 결제 상태 검증
    const response = await fetch(
      `https://api.tosspayments.com/v1/payments/${encodeURIComponent(paymentKey)}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(secretKey + ":").toString("base64")}`,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Invalid payment" },
        { status: 400 }
      );
    }

    const payment = await response.json();
    if (payment.status !== "DONE") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 }
      );
    }

    // 워터마크 PDF 생성
    const pdfBytes = await generateWatermarkedPdf(customerName, customerPhone);

    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Core-of-Fitness.pdf"',
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
