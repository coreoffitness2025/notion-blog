import { PDFDocument, rgb, degrees } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import path from "path";

export async function generateWatermarkedPdf(
  customerName: string,
  customerPhone: string
): Promise<Uint8Array> {
  const pdfPath = path.join(process.cwd(), "private", "ebook.pdf");
  const fontPath = path.join(
    process.cwd(),
    "private",
    "fonts",
    "NotoSansKR-Regular.ttf"
  );

  const pdfBytes = fs.readFileSync(pdfPath);
  const fontBytes = fs.readFileSync(fontPath);

  const pdfDoc = await PDFDocument.load(pdfBytes);
  pdfDoc.registerFontkit(fontkit);

  const font = await pdfDoc.embedFont(fontBytes);
  const watermarkText = `${customerName} ${customerPhone}`;

  const pages = pdfDoc.getPages();
  for (const page of pages) {
    const { width, height } = page.getSize();
    const fontSize = 12;

    // 대각선 워터마크 3곳에 반복
    const positions = [
      { x: width * 0.25, y: height * 0.25 },
      { x: width * 0.45, y: height * 0.55 },
      { x: width * 0.65, y: height * 0.8 },
    ];

    for (const pos of positions) {
      page.drawText(watermarkText, {
        x: pos.x,
        y: pos.y,
        size: fontSize,
        font,
        color: rgb(0.75, 0.75, 0.75),
        opacity: 0.25,
        rotate: degrees(-45),
      });
    }
  }

  return pdfDoc.save();
}
