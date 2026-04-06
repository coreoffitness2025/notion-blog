/**
 * sync-nutrition.ts
 * 앱(coreviafitnesstracking)의 영양 DB를 홈페이지로 복사/변환
 *
 * - nutrition-db.json 복사 (5,672개 음식)
 * - ko/en nutrition.json에서 이름만 추출 → 경량 매핑
 *
 * Usage: pnpm tsx scripts/sync-nutrition.ts
 */

import fs from "fs";
import path from "path";

const APP_ROOT = "C:/dev/coreviafitnesstracking";
const HOMEPAGE_DATA = path.resolve("src/data");

async function main() {
  // 1. nutrition-db.json 복사
  const dbSource = path.join(APP_ROOT, "src/assets/nutrition-db.json");
  const dbDest = path.join(HOMEPAGE_DATA, "nutrition-db.json");

  if (!fs.existsSync(dbSource)) {
    console.error(`[sync-nutrition] Source DB not found: ${dbSource}`);
    process.exit(1);
  }

  console.log("[sync-nutrition] Copying nutrition-db.json...");
  fs.copyFileSync(dbSource, dbDest);
  const db = JSON.parse(fs.readFileSync(dbDest, "utf-8"));
  console.log(`[sync-nutrition] Copied ${db.length} items`);

  // 2. i18n 이름 추출 (name만, comment 제거)
  for (const lang of ["ko", "en"] as const) {
    const sourcePath = path.join(APP_ROOT, `src/i18n/locales/${lang}/nutrition.json`);
    const destPath = path.join(HOMEPAGE_DATA, `nutrition-names-${lang}.json`);

    if (!fs.existsSync(sourcePath)) {
      console.error(`[sync-nutrition] Source i18n not found: ${sourcePath}`);
      process.exit(1);
    }

    console.log(`[sync-nutrition] Extracting ${lang} names...`);
    const fullI18n = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));

    // {id: {name, comment}} → {id: name}
    const names: Record<string, string> = {};
    for (const [id, entry] of Object.entries(fullI18n)) {
      names[id] = (entry as any).name || "";
    }

    fs.writeFileSync(destPath, JSON.stringify(names), "utf-8");
    const nameCount = Object.keys(names).length;
    const fileSize = (fs.statSync(destPath).size / 1024).toFixed(0);
    console.log(`[sync-nutrition] Written ${nameCount} ${lang} names (${fileSize}KB)`);
  }

  // 3. 검증: 모든 DB 항목에 이름이 있는지
  const namesKo = JSON.parse(
    fs.readFileSync(path.join(HOMEPAGE_DATA, "nutrition-names-ko.json"), "utf-8")
  );
  const namesEn = JSON.parse(
    fs.readFileSync(path.join(HOMEPAGE_DATA, "nutrition-names-en.json"), "utf-8")
  );

  let missingKo = 0;
  let missingEn = 0;
  for (const item of db) {
    if (!namesKo[item.id]) missingKo++;
    if (!namesEn[item.id]) missingEn++;
  }

  if (missingKo > 0) console.warn(`[sync-nutrition] WARNING: ${missingKo} items missing Korean name`);
  if (missingEn > 0) console.warn(`[sync-nutrition] WARNING: ${missingEn} items missing English name`);

  console.log("[sync-nutrition] Done!");
}

main().catch((err) => {
  console.error("[sync-nutrition] Error:", err);
  process.exit(1);
});
