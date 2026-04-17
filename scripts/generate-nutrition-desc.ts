/**
 * generate-nutrition-desc.ts
 * 피트니스 코치 관점의 영양 설명 생성기
 *
 * 각 음식의 매크로 프로파일 + 카테고리를 분석하여
 * 다이어트/근비대/건강 관점의 2~3문장 설명을 생성
 *
 * Usage: pnpm tsx scripts/generate-nutrition-desc.ts
 */

import fs from "fs";
import path from "path";

// ── Types ──
interface NutritionItem {
  id: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  sugar?: number;
  sodium?: number;
  saturated_fat?: number;
  serving_size?: number;
  source: string;
  dataQuality: string;
}

type MacroProfile =
  | "high_protein_low_fat"    // 고단백 저지방 (닭가슴살류)
  | "high_protein_high_fat"   // 고단백 고지방 (연어, 갈비 등)
  | "high_protein_balanced"   // 고단백 균형 (대부분의 고기/생선)
  | "high_carb_low_fat"       // 고탄수 저지방 (밥, 빵, 떡)
  | "high_carb_high_fat"      // 고탄수 고지방 (피자, 도넛)
  | "high_fat"                // 고지방 (견과류, 기름)
  | "very_low_cal"            // 초저칼로리 (채소, 해조류)
  | "low_cal_balanced"        // 저칼로�� 균형 (국류, 샐러드)
  | "moderate_balanced"       // 중간 균형 (한식 반찬)
  | "high_cal_dense"          // 고칼로리 고밀도 (벌크업용)
  | "sugar_heavy"             // 당류 높음 (디저트, 음료)
  | "pure_fat"                // 순수 지방 (오일류)
  | "default";

type FoodCategory =
  | "밥류" | "면류" | "빵류" | "떡류"
  | "육류" | "가금류" | "어패류" | "난류"
  | "��소류" | "과일류" | "버섯류" | "해조류"
  | "유제품" | "두류" | "견과류"
  | "국찌개류" | "볶음류" | "��이류" | "튀김류" | "전류"
  | "패스트푸드" | "디저트" | "빙과류" | "음료류"
  | "조미료" | "유지류" | "가공식품"
  | "샐러드" | "스프류" | "죽류"
  | "프로틴보충제" | "시리얼" | "과자류"
  | "기타";

// ── Data Loading ──
const DATA_DIR = path.resolve("src/data");
const APP_I18N = "/Users/corevia/corevia-fitness-app/src/i18n/locales/ko/nutrition.json";

const db: NutritionItem[] = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "nutrition-db.json"), "utf-8"));
const namesKo: Record<string, string> = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "nutrition-names-ko.json"), "utf-8"));
const namesEn: Record<string, string> = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "nutrition-names-en.json"), "utf-8"));

// comp_ 카테고리 로드
const appI18n: Record<string, { name: string; comment: string }> = JSON.parse(fs.readFileSync(APP_I18N, "utf-8"));
const compCategories: Record<string, string> = {};
for (const [id, entry] of Object.entries(appI18n)) {
  if (entry.comment) compCategories[id] = entry.comment;
}

// ── Seeded Random for reproducibility ──
let seed = 42;
function seededRandom(): number {
  seed = (seed * 1103515245 + 12345) & 0x7fffffff;
  return seed / 0x7fffffff;
}
function pick<T>(arr: T[], id: string): T {
  // Use id hash for deterministic selection
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = ((hash << 5) - hash + id.charCodeAt(i)) | 0;
  }
  return arr[Math.abs(hash) % arr.length];
}
function pickN<T>(arr: T[], n: number, id: string): T[] {
  const shuffled = [...arr];
  let h = 0;
  for (let i = 0; i < id.length; i++) h = ((h << 5) - h + id.charCodeAt(i)) | 0;
  for (let i = shuffled.length - 1; i > 0; i--) {
    h = ((h * 1103515245 + 12345) & 0x7fffffff);
    const j = h % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, n);
}

// ── Macro Profile Classification ──
function classifyMacro(item: NutritionItem): MacroProfile {
  const { calories: cal, protein: p, fat: f, carbs: c, sugar } = item;
  const pRatio = p * 4 / Math.max(cal, 1);
  const fRatio = f * 9 / Math.max(cal, 1);
  const cRatio = c * 4 / Math.max(cal, 1);

  // 순수 지방 (오일, 버터)
  if (f >= 50 && p < 5 && c < 5) return "pure_fat";

  // 초저칼로리 (채소, 해조류)
  if (cal <= 30) return "very_low_cal";

  // 당류 과다 (디저트/음료 - 당류가 탄수화물의 60% 이상)
  if (sugar && sugar > 20 && c > 0 && sugar / c > 0.6 && f >= 10) return "sugar_heavy";

  // 고���백 저지방 (다이어트 핵심)
  if (p >= 20 && f <= 5) return "high_protein_low_fat";

  // 고단백 고지방 (벌크 또는 케토)
  if (p >= 20 && f >= 15) return "high_protein_high_fat";

  // 고단백 균형
  if (p >= 15) return "high_protein_balanced";

  // 고탄수 저지방 (에너지 소스)
  if (c >= 40 && f <= 5) return "high_carb_low_fat";

  // 고탄수 고지방 (고칼로리)
  if (c >= 30 && f >= 15) return "high_carb_high_fat";

  // 고지방 (��과류 등)
  if (fRatio > 0.6) return "high_fat";

  // 고칼로리 밀도
  if (cal >= 350) return "high_cal_dense";

  // 저칼로리 균형
  if (cal <= 100) return "low_cal_balanced";

  return "moderate_balanced";
}

// ── Food Category Classification ──
const CATEGORY_RULES: [RegExp | string, FoodCategory][] = [
  // 밥류
  [/^(밥|쌀밥|현미밥|잡곡���|흰밥|볶음밥|비빔밥|덮밥|김밥|초밥|주먹밥|오니기리|유부초밥|국밥|규동|카레라이스)/, "밥류"],
  [/밥$/, "밥류"],
  // 면류
  [/^(라면|파스타|스파게티|국수|칼국수|우동|소바|냉면|짜장면|잔치국수|쌀국수|메밀)/, "면류"],
  [/면$|국수$/, "면류"],
  // 죽류
  [/^(죽|미음)/, "죽류"],
  [/죽$/, "죽류"],
  // 빵류
  [/^(식빵|바게트|베이글|크로와상|모닝빵|번|토스트|빵|크림빵|팥빵|소보로|브리오슈|치아바타|포카치아|프레즐)/, "빵류"],
  // 떡류
  [/^(떡|경단|인절미|송편|절편|약식|찹쌀|백설기)/, "떡류"],
  [/떡$/, "떡류"],
  // 가금류
  [/^(닭|치킨|후라이드|프라이드|양념치킨|닭가슴살|닭강정|닭갈비|찜닭|닭도리탕|닭볶음|오리)/, "가금류"],
  // 육류
  [/^(소고기|돼지|삼겹살|목살|등심|안심|갈비|불고기|제육|수육|보쌈|스테이크|로스트|햄|소시지|베이컨|양고기|족발)/, "육류"],
  [/(구이|스테이크)$/, "구이류"],
  // 어패류
  [/^(연어|참치|고등어|갈치|삼치|광어|우럭|조기|대구|명태|아귀|꽃게|새우|랍스터|오징어|문어|낙지|조개|굴|홍합|전복|가리비|멍게|해삼|게|꼬막)/, "어패류"],
  [/(회|구이|조림|찜|탕|젓갈|젓)$/, "어패류"],
  // 난류
  [/^(계란|달걀|에그|오믈렛|스크램블)/, "난류"],
  // 채소류
  [/^(샐러드|야채|채소)/, "샐러드"],
  // 과일류
  [/^(사과|배|감|귤|오렌지|바나나|포도|딸기|블루베리|키위|수박|참외|멜론|복숭아|자두|살구|체리|망고|파인애플|파파야|아보카도|자몽|레몬|라임|석류)/, "과일류"],
  // 유제품
  [/^(우유|요거트|요구르트|그릭요거트|치즈|버터|크림|생크림)/, "유제품"],
  [/우유|밀크/, "유제품"],
  // 두류
  [/^(두부|콩|된장|청국장|낫또|순두부|비지|두유|에다마메|풋콩)/, "두류"],
  // 견과류
  [/^(아몬드|호두|캐슈넛|피스타치오|마카다미아|땅콩|잣|해바라기|호박씨|치아씨드|아마씨)/, "견과류"],
  // 국/찌개류
  [/^(된장찌개|김치찌개|순두부찌개|부대찌개|감자탕|설렁탕|곰탕|갈비탕|삼계탕|매운탕|추어탕|해장국|미역국|콩나물국|된장국|계란국|떡국|어묵탕|동태탕|대구탕)/, "국찌개류"],
  [/(찌개|탕|국|국밥|해장국)$/, "국찌개류"],
  // 볶음류
  [/(볶음|볶음밥)$/, "볶음류"],
  // 튀김류
  [/^(돈까스|돈카츠|돈가스|가스|튀김|텐푸라|탕수육|꿔바로우|깐풍기|너겟|프라이)/, "튀김류"],
  [/(튀김|까스|가스|프라이)$/, "튀김류"],
  // 전류
  [/^(전|부침|파전|감자전|김치전|해물전|빈대떡|동그랑땡)/, "전류"],
  [/전$/, "전류"],
  // 패스트푸드
  [/^(피자|버거|햄버거|핫도그|치즈버거|와퍼|빅맥|타코|부리또|나쵸)/, "패스트푸드"],
  // 디저트 (케이크/과자/빵과자)
  [/^(케이크|도넛|츄러스|마카롱|크로플|와플|타르트|파이|머핀|쿠키|비스킷|페이스트리|브라우니|티라미수|푸딩|젤리|초콜릿|캔디|캬라멜|카스테라|호떡|붕어빵|찐빵|만주)/, "디저트"],
  // 빙과류
  [/^(아이스크림|빙수|셔벗|젤라또|팥빙수|소르베)/, "빙과류"],
  // 음료류
  [/^(커피|라떼|스무디|에이드|주스|과ㆍ채주스|탄산|사이다|콜라|차|녹차|홍차|보리차|아메리카노|카푸치노|모카|프라푸치노|밀크티|버블티|에너지드링크|맥주|소주|와인|막걸리)/, "음료류"],
  [/(주스|에이드|스무디|라떼|차|음료|드링크)$/, "음료류"],
  // 시리얼
  [/^(시리얼|그래놀라|오트밀|뮤즐리|콘플레이크)/, "시리얼"],
  // 프로틴
  [/^(프로틴|WPC|WPI|BCAA|크레아틴|게이너|카제인|유청)/, "프로틴보충제"],
  // 조미료
  [/^(소스|드레싱|마요네즈|케첩|간장|고추장|된장|식초|설탕|꿀|잼|시럽|올리고당|물엿)/, "조미료"],
  // 유지류
  [/^(올리브오일|참기름|들기름|식용유|코코넛오일|버터|마가린|라드)/, "유지류"],
  [/오일|기름/, "유지류"],
  // 과자류
  [/^(과자|칩|스낵|팝콘|크래커|프레즐|새우깡|감자칩)/, "과자류"],
  // 가공식품
  [/^(통조림|캔|레토르트|냉동|즉석)/, "가공식품"],
];

function classifyCategory(id: string, nameKo: string): FoodCategory {
  // comp_ items: use existing category mapping
  if (compCategories[id]) {
    const cat = compCategories[id];
    const mapping: Record<string, FoodCategory> = {
      "곡류 및 그 제품": "밥류",
      "감자류 및 전분류": "밥류",
      "육류 및 그 제품": "육류",
      "어패류 및 그 제품": "어패류",
      "난류": "난류",
      "채소류": "채소류",
      "과일류": "과일류",
      "버섯류": "버섯류",
      "해조류": "해조류",
      "우유 및 그 제품": "유제품",
      "두류": "두류",
      "견과류 및 종실류": "견과류",
      "유지류": "유지류",
      "당류": "디저트",
      "음료류": "음료류",
      "차류": "음료류",
      "조미료류": "조미료",
      "조리가공식품류": "가공식품",
      "기타": "기타",
    };
    return mapping[cat] || "기타";
  }

  // Name-based rules
  const clean = nameKo.replace(/\s+/g, "");
  for (const [pattern, category] of CATEGORY_RULES) {
    if (typeof pattern === "string") {
      if (clean.includes(pattern)) return category;
    } else {
      if (pattern.test(clean)) return category;
    }
  }

  // Fallback heuristics based on name keywords (extended)
  if (/고구마|감자|옥수수|토란/.test(clean)) return "밥류";
  if (/월남쌈|또띠아|카레라이스/.test(clean)) return "밥류";
  if (/짬뽕|수제비|쫄면|당면|라멘|잡채/.test(clean)) return "면류";
  if (/베이글|샌드위치|앙금빵|치즈빵|소보로빵|카스텔라|카스테라/.test(clean)) return "빵류";
  if (/모싯잎송편/.test(clean)) return "떡류";
  if (/칠면조/.test(clean)) return "가금류";
  if (/돼지고기|곱창|순대(?!볶음)|장조림|떡갈비|편육|육포/.test(clean)) return "육류";
  if (/장어|멸치|잔멸치|건새우|어묵|꼬치구이|뱅어|방어/.test(clean)) return "어패류";
  if (/달걀/.test(clean)) return "난류";
  if (/크랜베리|라즈베리|무화과|대추|건포도/.test(clean)) return "과일류";
  if (/요구르트/.test(clean)) return "유제품";
  if (/녹두/.test(clean)) return "두류";
  if (/무국|북어국|육개장|두부찌개|청국장찌개|전골|샤브샤브|스프/.test(clean)) return "국찌개류";
  if (/볶음/.test(clean)) return "볶음류";
  if (/크로켓|고로케/.test(clean)) return "튀김류";
  if (/빈대떡|완자전|부추전|호박전/.test(clean)) return "전류";
  if (/만두/.test(clean)) return "가공식품";
  if (/식혜|수정과|매실|유자/.test(clean)) return "음료류";
  if (/김치|나물|무침|장아찌|피클|젓갈|겉절이|생채/.test(clean)) return "채소류";
  if (/잼|시럽|꿀|설탕/.test(clean)) return "조미료";

  return "기타";
}

// ── Description Generation ──

function generateKo(item: NutritionItem, profile: MacroProfile, category: FoodCategory, nameKo: string): string {
  const { calories: cal, protein: p, fat: f, carbs: c, sugar, sodium, saturated_fat: sf } = item;
  const id = item.id;

  // 매크로 비율 계산
  const totalMacro = p + f + c || 1;
  const pPct = Math.round((p / totalMacro) * 100);
  const fPct = Math.round((f / totalMacro) * 100);
  const cPct = Math.round((c / totalMacro) * 100);

  const sentences: string[] = [];

  // ── 첫 번째 문장: 매크로 특성 요약 ──
  switch (profile) {
    case "high_protein_low_fat":
      sentences.push(pick([
        `100g당 ${p}g의 단백질을 함유하면서 지방은 ${f}g에 불과해, 다이어트와 린매스 증가에 최적화된 식품입니다.`,
        `${cal}kcal에 단백질 ${p}g, 지방 ${f}g으로 구성된 대표적인 고단백 저지방 식품으로, 체중 감량기 식단의 핵심 재료입니다.`,
        `단백질 함량이 ${p}g으로 높으면서 지방이 ${f}g에 불과해, 칼로리 부담 없이 근육 합성에 필요한 아미노산을 공급합니다.`,
        `지방 ${f}g의 깔끔한 매크로 구성에 단백질이 ${p}g이나 들어 있어, 커팅기 선수들이 즐겨 찾는 단백질원입니다.`,
        `100g 기준 ${cal}kcal로 가볍지만 단백질은 ${p}g이나 확보할 수 있어, 체중 관리 중에도 근손실을 막아줍니다.`,
      ], id));
      break;

    case "high_protein_high_fat":
      sentences.push(pick([
        `단백질 ${p}g과 지방 ${f}g을 동시에 공급하는 고영양 식품으로, 벌크업 시기에 효율적인 칼로리 섭취가 가능합니다.`,
        `${cal}kcal에 단백질 ${p}g을 제공하며, 지방 ${f}g에서 오는 포만감이 오래 지속되어 식단 관리에 활용도가 높습니다.`,
        `단백질과 지방이 각각 ${p}g, ${f}g으로 풍부해 근성장기에 필요한 열량과 영양소를 한 번에 채울 수 있습니다.`,
        `100g당 단백질 ${p}g의 우수한 ��백질원이지만, 지방이 ${f}g으로 높아 칼로리 계산 시 주의가 필요합니다.`,
        `고단백(${p}g) 고지방(${f}g) 조합으로, 증량기에는 효율적���지만 체중 감량기에는 섭취량 조절이 중요합니다.`,
      ], id));
      break;

    case "high_protein_balanced":
      sentences.push(pick([
        `100g당 단백질 ${p}g을 함유한 양질의 단백질 공급원으로, 근육 회복과 성장에 효과적입니다.`,
        `${cal}kcal에 단백질 ${p}g의 균형 잡힌 매크로 구성으로, 운동 후 식사로 활용하기 좋습니다.`,
        `단백질이 ${p}g으로 풍부하고 탄수화물 ${c}g, 지방 ${f}g의 균형 잡힌 영양 구성을 갖추고 있습니다.`,
        `${p}g의 단백질을 기반으로 한 균형 잡힌 매크로 비율로, 일상적인 근력 운동 식단에 적합합니다.`,
        `100g 기준 단백질 ${p}g을 확보할 수 있어, 하루 단백질 목표량 달성에 기여하는 식품입니다.`,
      ], id));
      break;

    case "high_carb_low_fat":
      sentences.push(pick([
        `100g당 탄수화물 ${c}g에 지방은 ${f}g에 불과해, 운동 전 글리코겐 저장에 이상적인 에너지원입니다.`,
        `${cal}kcal의 에너지 대부분이 탄수���물 ${c}g에서 나오며, 고강도 운동 전 에너지 로딩에 효과적입니다.`,
        `탄수화물이 ${c}g으로 풍부하고 지방이 ${f}g으로 낮아, 운동 수행능력을 높이는 클린 카브 소스입니다.`,
        `지방 ${f}g의 깔끔한 탄수화물 소스로, 100g당 ${c}g의 탄수화물이 운동 시 즉각���인 에너지를 공급합니다.`,
        `${c}g의 탄수화물을 지방 부담(${f}g) 없이 섭취할 수 있어, 다이어트 중에도 활용 가능한 에너지원입니다.`,
      ], id));
      break;

    case "high_carb_high_fat":
      sentences.push(pick([
        `100g당 ${cal}kcal로 열량 밀도가 높으며, 탄수화물 ${c}g과 지방 ${f}g이 함께 들어 있어 벌크업 식단에 활용할 수 있습니다.`,
        `탄수화물 ${c}g과 지방 ${f}g으로 ${cal}kcal의 높은 열량을 내는 식품으로, 체중 증량이 목표일 때 효율적입니다.`,
        `${cal}kcal에 탄수화물 ${c}g, 지방 ${f}g의 고열량 구성으로, 소량으로도 상당한 칼로리를 섭취하게 됩니다.`,
        `탄수화물(${c}g)과 지방(${f}g)이 모두 높은 고칼로리 식품(${cal}kcal)으로, 체중 관리 시 섭취량 조절이 필수입니다.`,
        `${cal}kcal의 높은 에너지 밀도를 가지며, 탄수화물과 지방 비율이 높아 운동량이 많은 날 에너지 보충에 적합합니다.`,
      ], id));
      break;

    case "high_fat":
      sentences.push(pick([
        `100g당 지방 ${f}g으로 열량 밀도(${cal}kcal)가 높아, 소량으로도 효율적인 칼로리 섭취가 가능합니다.`,
        `지방 함량이 ${f}g으로 높아 ${cal}kcal의 농축된 에너지를 제공하며, 벌크업이나 에너지 보충에 유용합니다.`,
        `${f}g의 지��에서 대부분의 열량(${cal}kcal)이 나오는 고지방 식품으로, 케토 식단이나 증량기에 활용됩니다.`,
        `100g당 ${cal}kcal로 열량이 높고 지방이 ${f}g으로 풍부해, 하루 칼로리 목표 달성이 어려운 벌크업 시기에 도움이 됩니다.`,
      ], id));
      break;

    case "very_low_cal":
      sentences.push(pick([
        `100g당 ${cal}kcal에 불과해, 다이어트 시 부피감 있는 식사를 구성하는 데 이상적인 볼륨 푸드입니다.`,
        `${cal}kcal의 극히 낮은 열량으로 포만감 대비 칼로�� 효율이 뛰어나, 체중 감량기 식단의 필수 재료입니다.`,
        `칼로리가 100g당 ${cal}kcal로 매우 낮아, 먹는 양의 제한 없이 식단에 풍성함을 더할 수 있습니다.`,
        `100g 기준 ${cal}kcal의 초저칼로리 식품으로, 다이어트 식단에서 볼륨을 채우면서 칼���리를 절약할 수 있습니다.`,
      ], id));
      break;

    case "low_cal_balanced":
      sentences.push(pick([
        `100g당 ${cal}kcal로 가벼우면서 단백질 ${p}g, 탄수화물 ${c}g의 균형 잡힌 영양소를 제공합니다.`,
        `${cal}kcal의 낮은 열량에 단백질 ${p}g을 포함하고 있어, 칼로리 관리 중에도 영양 균형을 유지할 수 있습니다.`,
        `열량이 ${cal}kcal로 부담 없으면서 필요한 영양소가 고루 들어 있어, 체중 관리 식단에 자주 활용됩니다.`,
        `100g 기준 ${cal}kcal의 저칼로리 식품으로, 다이어트 식단에 부담 없이 포함시킬 수 있습니다.`,
      ], id));
      break;

    case "sugar_heavy":
      sentences.push(pick([
        `100g당 ${cal}kcal에 당류가 ${sugar}g으로 높아, 운동 직후 빠른 글리코겐 회복에는 유용하지만 일상 섭취 시 주의가 필요합니다.`,
        `탄수화물 ${c}g 중 당류가 ${sugar}g을 차지하는 고당 식품으로, 혈당 급등을 유발할 수 있어 섭취 타이밍 관리가 중요합니다.`,
        `${cal}kcal에 당류 ${sugar}g이 포함되어 있어, 운동 직후 단순당 보충 외에는 과량 섭취를 지양하는 것이 좋습니다.`,
        `당류가 ${sugar}g으로 높은 편이라 혈당 관리가 필요하며, ${cal}kcal의 열량을 감안해 간식으로 소량만 즐기는 것이 바람직합니다.`,
      ], id));
      break;

    case "pure_fat":
      sentences.push(pick([
        `거의 순수한 지방(${f}g/100g)으로 구성되어 ${cal}kcal의 매우 높�� 열량을 가지며, 조리 시 소량만 사용하는 것이 칼로리 관리의 핵심입니다.`,
        `100g당 ${cal}kcal로 칼로리 밀도가 극도로 높은 순수 지방원이며, 1큰술(약 15ml) 기준으로 계량하여 사용하는 것을 권장합니다.`,
        `지방 ${f}g에서 나오는 ${cal}kcal의 농축된 에너지원으로, 다이어트 시 눈에 띄지 않는 칼로리 주범이 되기 쉬우므로 정확한 계량이 필수입니다.`,
      ], id));
      break;

    case "high_cal_dense":
      sentences.push(pick([
        `100g당 ${cal}kcal의 높은 에너지 밀도를 가져, 체중 증량이 목표인 벌크업 식단에서 효율적인 칼로리원입니다.`,
        `${cal}kcal로 칼로리 밀도��� 높아 소량으로도 상당한 에너지를 섭취할 수 있으며, 증량기나 고강도 훈련 시기에 적합합니다.`,
        `100g 기준 ${cal}kcal의 고칼로리 식품으로, 하루 필요 열량이 높은 운동 선수나 벌크업 중인 분들에게 유용합니다.`,
        `${cal}kcal의 열량 밀도가 높은 식품으로, 체중 감량기에는 섭취량을 엄격히 관리해야 합니다.`,
      ], id));
      break;

    default: // moderate_balanced
      sentences.push(pick([
        `100g당 ${cal}kcal에 단백질 ${p}g, 탄수화물 ${c}g, 지방 ${f}g의 균형 잡힌 영양 구성을 가지고 있습니다.`,
        `${cal}kcal에 주요 영양소가 고루 분포되어 있어, 균형 잡힌 식단 구성 시 활용하기 좋은 식품입니다.`,
        `탄수화물 ${c}g, 단백질 ${p}g, 지방 ${f}g이 적절히 배분된 ${cal}kcal의 식품으로, 일상 식단에 무리 없이 포함됩니다.`,
        `100g 기준 ${cal}kcal로, 매크로 영양소가 비교적 균형 있게 분포되어 다양한 식단 목표에 맞춰 활용 가능합니다.`,
      ], id));
      break;
  }

  // ── 두 번째 문장: 카테고리 + 피트니스 맥락 ──
  const fitnessTips: Record<string, string[]> = {
    "밥류": [
      "운동 1~2시간 전에 섭취하면 훈련 중 안정적인 에너지 공급이 가능합니다.",
      "웨이트 트레이닝 전 탄수화물 로딩 식사로 적합하며, 근글리코겐 충전에 도움을 줍니다.",
      "다이어트 시에는 한 끼 탄수화물량을 조절하여 포함하면 에너지 고갈 없이 운동 퍼포먼스를 유지할 수 있습니다.",
      "고강도 운동 후 탄수화물 보충에 활용하면 글리코겐 재합성 속도를 높일 수 있습니다.",
    ],
    "면류": [
      "소화가 빠른 탄수화물원으로, 운동 전 가벼운 식사에 적합하지만 과식 시 졸음을 유발할 수 있습니다.",
      "단백질 반찬과 함께 구성하면 운동 전후 균형 잡힌 식사가 됩니다.",
      "GI 지수가 비교적 높은 편이라, 체중 관리 시 섭취 타이밍을 운동 전후로 집중시키는 것이 효과적입니다.",
    ],
    "빵류": [
      "운동 전 간편한 탄수화물 보충에 유용하지만, 버터나 크림이 첨가된 제품은 지방 함량을 확인해야 합니다.",
      "통곡물 제품을 선택하면 식이섬유가 포만감을 높여 다이어트 식단에서도 활용할 수 있습니다.",
      "운동 1시간 전 빠른 에너지 공급원으로 활용 가능하며, 단백질 보충제와 함께 섭취하면 시너지 효과가 있습니다.",
    ],
    "떡류": [
      "소화 흡수가 빠른 탄수화물원으로, 운동 직전이나 직후 에너지 보충에 적합합니다.",
      "글리코겐 보충 속도가 빨라 고강도 훈련 전후 간식으로 활용되며, 프로틴과 함께 섭취하면 회복에 효과적입니다.",
    ],
    "가금류": [
      "근육 합성에 필수적인 류신 함량이 높아, 웨이트 트레이닝 후 식사의 핵심 단백질원으로 추천됩니다.",
      "다양한 조리법으로 활용 가능해 식단 지속성을 높이며, 체중 관리와 근성장 모두에 기여합니다.",
      "지방 부위를 제거하면 더 깔끔한 매크로 구성이 가능하며, 다이어트 식단의 주력 단백질원으로 적합합니다.",
    ],
    "육류": [
      "크레아틴과 철분이 풍부해 근력 향상과 산소 운반 능력에 도움을 주며, 근비대 식단에서 중요한 역할을 합니다.",
      "포화지방 함량을 확인하고 부위를 선택하면, 근성장에 필요한 단백질과 미량 ��양소를 효율적으로 섭취할 수 있습니다.",
      "동물성 단백질의 아미노산 스코어가 높아 근육 합성 효율이 우수하며, 운동 후 회복 식사에 적합합니다.",
    ],
    "어패류": [
      "양질의 단백질과 함께 오메가-3 지방산을 공급하여, 운동 후 근육 회복과 항염증 효과를 동시에 기대할 수 있습니다.",
      "저지방 고단백 수산물은 다이어트 식단의 핵심 단백질원이며, 포만감 대비 칼로리가 낮아 체중 감량에 유리합니다.",
      "EPA와 DHA 같은 오메가-3 지방산이 근육 단백질 합성을 촉진하고 관절 건강을 지원합니다.",
    ],
    "난류": [
      "완전 단백질 식품으로 필수 아미노산을 모두 함유���고 있어, 근육 ���성의 기본이 되는 식재료입니다.",
      "가성비 높은 단백질원으로, 다양한 조리법과 간편한 준비로 꾸준한 식단 관리에 도움을 줍니다.",
    ],
    "채소류": [
      "식이섬유와 미량 영양소가 풍부하여, 다이어트 식단에서 포만감을 높이고 장 건강을 개선하는 데 기여합니다.",
      "칼로리 부담 없이 비타민과 미네랄을 보충할 수 있어, 체중 감량기 볼륨 식단의 핵심 구성 요소입니다.",
      "항산화 성분이 운동으로 인한 산화 스트레스를 줄이고, 면역력 유지에 도움을 줍니다.",
    ],
    "과일류": [
      "천연 과당과 비타민이 풍부해 운동 후 빠른 에너지 회복과 면역력 유지에 도움을 줍니다.",
      "운동 직후 단순당 보충원으로 활용하면 글리코겐 재합성에 효과적이며, 프로틴과 함께 셰이크로 만들면 회복 식사가 됩니다.",
      "항산화 비타민이 고강도 운동 후 발생하는 활성산소를 제거하여 근육 회복을 촉진합니다.",
    ],
    "버섯류": [
      "저칼로리에 식이섬유와 베타글루칸이 풍부해, 다이어트 중 면역력 유지와 포만감 향상에 도움을 줍니다.",
    ],
    "해조류": [
      "미네랄과 식이섬유가 풍부한 초저칼로리 식품으로, 다이어트 식단에서 빠지기 쉬운 미량 영양소를 보충해줍니다.",
    ],
    "유제품": [
      "카제인과 유청 단백질이 혼합되어 빠른 흡수와 지속적인 아미노산 공급이 모두 가능한 단백질원입니다.",
      "칼슘이 풍부해 뼈 건강과 근수축 기능을 지원하며, 취침 전 섭취 시 야간 근육 회복에 도움을 줍니다.",
    ],
    "두류": [
      "식물성 단백질과 식이섬유를 동시에 공급하며, 포만감이 오래 지속되어 체중 관리에 효과적입니다.",
      "이소플라본과 식이섬유가 풍부해 소화 건강과 호르몬 균형에 도움을 주며, 식물성 식단의 핵심 단백질원입니다.",
    ],
    "견과류": [
      "불포화지방산과 미량 영양소가 풍부한 고밀도 에너지원으로, 벌크업 시 간식으로 소량씩 섭취하면 효과적입니다.",
      "칼로리 밀도가 높아 한 줌(약 25~30g) 단위로 계량하여 섭취하는 것이 체중 관리의 핵심입니다.",
    ],
    "국찌개류": [
      "수분이 많아 포만감이 높고, 다양한 식재료에서 오는 영양소가 균형 잡힌 한 끼 식사를 만들어줍니다.",
      "나트륨 함량이 높을 수 있으므로 국물 섭취를 조절하면, 칼로리 대비 포만감이 좋은 다이어트 식사가 됩니다.",
    ],
    "볶음류": [
      "조리용 유지 사용량에 따라 칼로리가 크게 달라지므로, 정확한 기름 계량이 체중 관리의 포인트입니다.",
    ],
    "구이류": [
      "기름 없이 굽는 조리법으로 추가 지방 섭취를 최소화할 수 있어, 다이어트 ��단에서 선호되는 조리 방식입니다.",
    ],
    "튀김류": [
      "튀김 과정에서 기름 흡수로 칼로리가 크게 상승하므로, 체중 관리 시에는 섭취 빈도와 양을 신중히 결정해야 합니다.",
      "치트밀로 활용하되, 주간 칼로리 예산 내에서 계획적으로 즐기면 식단 스트레스를 줄일 수 있습니다.",
    ],
    "전류": [
      "기름에 부치는 조리법으로 지방이 추가되지만, 적당량 섭취 시 탄수화물과 단백질을 함께 보충할 수 있는 식사입니다.",
    ],
    "패스트푸드": [
      "고열량·고나트륨 식품이므로 치트밀로 계획적으로 활용하고, 해당 끼니의 단백질 섭취량을 확인하여 부족분을 보충하는 것이 좋습니다.",
      "칼로리 밀도가 높아 체중 관리 시 주의가 필요하지만, 벌크업 시기에는 간편한 고칼로리원으로 전략적 활용이 가능합니다.",
    ],
    "디저트": [
      "당류와 지방이 높은 고칼로리 식품으로, 식단 관리 시 소량만 허용하거나 치트밀로 계획적으로 즐기는 것이 바람직합니다.",
      "완전히 제한하기보다 주간 칼로리 예산 ���에서 소량 포함시키면, 식단 순응도를 높이고 폭식을 예방할 수 있습니다.",
    ],
    "빙과류": [
      "��류 함량이 높은 편이라, 운동 직후 당 보충 외에는 소량 섭취를 권장하며, 저칼로리 대체품을 활용하는 것도 방법입니다.",
    ],
    "음료류": [
      "액상 칼로리는 포만감 없이 열량을 추가하므로, 다이어트 시 무가당·블랙 옵션을 선택하는 것이 칼로리 절약의 핵심입니다.",
      "설탕이 첨가된 음료는 공복 혈당을 급격히 올릴 수 있으므로, 운동 직후가 아니라면 무가당 옵션을 권장합니다.",
    ],
    "시리얼": [
      "운동 전 간편한 탄수화물 보충에 적합하며, 우유나 그릭요거트와 함께 먹으면 단백질을 보충한 균형 잡힌 식사가 됩니다.",
    ],
    "프로틴보충제": [
      "빠른 아미��산 공급으로 운동 직후 근단백질 합성을 극대화하며, 식사로 단백질 목표를 채우기 어려울 때 효율적인 보충 수단입니다.",
    ],
    "샐러드": [
      "볼륨 대비 칼로리가 매우 낮아 다이어트의 핵심 식사이며, 닭가슴살이나 계란을 추가하면 단백질까지 충족됩니다.",
    ],
    "죽류": [
      "소화 흡수가 빨라 위장 부담이 적으며, 컨디션이 좋지 않은 날이나 경기 전 가벼운 탄수화물 로딩에 활용할 수 있습니다.",
    ],
    "조미료": [
      "소량 사용되지만 나트륨과 당류가 누적될 수 있으므로, 식단 기록 시 조미료 칼로리도 함께 트래킹하는 것이 정확한 관리법입니다.",
    ],
    "유지류": [
      "필수지방산을 공급하지만 칼로리 밀도가 극도로 높아, 1큰술 단위로 정확히 계량하여 사용하는 습관이 체중 관리의 기본입니다.",
    ],
    "과자류": [
      "빈 칼로리(영양소 대비 높은 열량)의 대표적인 식품이므로, 체중 관리 시 대안 간식(그릭요거트, 과일, 견과류 등)으로 대체하는 것이 효과적입니다.",
    ],
    "가공식품": [
      "나트륨과 첨가물 함량을 확인하고, 단백질 함량이 충분한 제품을 선택하면 바쁜 일상에서도 매크로 관리가 가능합니다.",
    ],
    "스프류": [
      "수분이 많아 포만감이 높은 편이며, 크림 베이스보다 맑은 국물 베이스를 선택하면 칼로리를 절약할 수 있습니다.",
    ],
  };

  const categoryTip = fitnessTips[category];
  if (categoryTip && categoryTip.length > 0) {
    sentences.push(pick(categoryTip, id + "_tip"));
  } else {
    // Fallback: general fitness tip based on macro profile
    const generalTips = [
      "체중 관리 시 정확한 식사량 기록이 중요하며, CoreVia 앱을 활용하면 간편하게 매크로를 트래킹할 수 있습니다.",
      "하루 총 칼로리와 단백질 목표를 고려하여 적절한 양을 배분하는 것이 효과적인 식단 관리의 핵심입니다.",
      "운동 목표(감량/유지/증량)에 맞춰 섭취량을 조절하면 원하는 체형 변화에 한 걸음 더 가까워질 수 있습니다.",
    ];
    sentences.push(pick(generalTips, id + "_gen"));
  }

  // ── 세 번째 ���장 (선택적): 나트륨/포화지방 경고 또는 추가 팁 ──
  if (sodium && sodium >= 600) {
    sentences.push(pick([
      `나트륨이 ${sodium}mg으로 높은 편이므로, 수분 섭취를 충분히 하고 나머지 식사에서 저염식을 병행하는 것이 좋습니다.`,
      `나트륨 함량(${sodium}mg)이 높아 부종이나 혈압 관리가 필요한 경우 섭취 빈도에 주의해야 합니다.`,
    ], id + "_na"));
  } else if (sf && sf >= 10) {
    sentences.push(pick([
      `포화지방이 ${sf}g으로 높은 편이므로, 심혈��� 건강을 고려해 주간 섭취 빈도를 관리하는 것이 바람직합니다.`,
      `포화지방 ${sf}g이 포함되어 있어, 불포화지방이 풍부한 식품과 번갈아 섭취하면 건강한 지방 밸런스를 유지할 수 있습니다.`,
    ], id + "_sf"));
  }

  return sentences.join(" ");
}

function generateEn(item: NutritionItem, profile: MacroProfile, category: FoodCategory, nameEn: string): string {
  const { calories: cal, protein: p, fat: f, carbs: c, sugar, sodium, saturated_fat: sf } = item;
  const id = item.id;
  const sentences: string[] = [];

  // ��─ First sentence: Macro profile summary ──
  switch (profile) {
    case "high_protein_low_fat":
      sentences.push(pick([
        `With ${p}g of protein and only ${f}g of fat per 100g, this is an ideal lean protein source for cutting phases and building lean muscle mass.`,
        `At ${cal}kcal with ${p}g protein and just ${f}g fat, this is a go-to food for anyone focused on fat loss while preserving muscle.`,
        `Packing ${p}g of protein with minimal fat (${f}g), this food delivers maximum muscle-building amino acids with minimal caloric impact.`,
        `A standout high-protein, low-fat option at ${cal}kcal per 100g, perfect for hitting daily protein targets during a calorie deficit.`,
        `Only ${cal}kcal yet delivering ${p}g of protein, this is one of the most efficient protein sources for weight management and muscle recovery.`,
      ], id));
      break;

    case "high_protein_high_fat":
      sentences.push(pick([
        `Providing ${p}g of protein alongside ${f}g of fat per 100g, this nutrient-dense food is well-suited for bulking phases and caloric surplus goals.`,
        `At ${cal}kcal with ${p}g protein, the higher fat content (${f}g) offers sustained satiety, making it effective for both muscle gain and appetite control.`,
        `A calorie-dense source of ${p}g protein and ${f}g fat, ideal for athletes needing high energy intake during mass-building phases.`,
        `With ${p}g protein per 100g, this is an excellent protein source, though the ${f}g of fat means portion control matters during cutting.`,
        `The combination of ${p}g protein and ${f}g fat (${cal}kcal) makes this efficient for bulking, but requires careful tracking during a deficit.`,
      ], id));
      break;

    case "high_protein_balanced":
      sentences.push(pick([
        `With ${p}g of protein per 100g and a balanced macro profile, this is a reliable choice for post-workout meals and daily protein goals.`,
        `At ${cal}kcal with ${p}g protein, ${c}g carbs, and ${f}g fat, this offers well-rounded nutrition for consistent muscle recovery.`,
        `Delivering ${p}g of protein alongside balanced macros, this food supports steady muscle repair and overall training recovery.`,
        `A solid ${p}g of protein per 100g with balanced carbs (${c}g) and fat (${f}g), suitable for any training phase.`,
        `Providing ${p}g of protein with a well-distributed macro profile at ${cal}kcal, this is a versatile addition to any fitness-focused meal plan.`,
      ], id));
      break;

    case "high_carb_low_fat":
      sentences.push(pick([
        `With ${c}g of carbs and only ${f}g of fat per 100g, this is a clean carbohydrate source ideal for pre-workout glycogen loading.`,
        `At ${cal}kcal, the high carb content (${c}g) paired with minimal fat (${f}g) makes this an efficient fuel source before intense training sessions.`,
        `A lean energy source with ${c}g carbs and just ${f}g fat, perfect for fueling high-intensity workouts without excess lipid intake.`,
        `The ${c}g of carbs with negligible fat (${f}g) provides quick, clean energy — ideal for topping off glycogen stores before training.`,
        `Delivering ${c}g of carbohydrates at only ${cal}kcal, this is a practical carb source that even fits calorie-controlled diets when timed around workouts.`,
      ], id));
      break;

    case "high_carb_high_fat":
      sentences.push(pick([
        `At ${cal}kcal per 100g with ${c}g carbs and ${f}g fat, this is a calorie-dense food best utilized during bulking or high-volume training phases.`,
        `The combination of ${c}g carbs and ${f}g fat packs ${cal}kcal into each 100g, making portion control essential for those managing body composition.`,
        `With ${cal}kcal from ${c}g carbs and ${f}g fat, this energy-dense option delivers substantial calories in small servings — strategic for mass gain, cautious for cutting.`,
        `High in both carbs (${c}g) and fat (${f}g) at ${cal}kcal, this food can serve bulking goals but demands strict tracking during fat loss phases.`,
      ], id));
      break;

    case "high_fat":
      sentences.push(pick([
        `With ${f}g of fat per 100g and ${cal}kcal, this calorie-dense food provides concentrated energy — useful during bulking but requiring careful portioning during cuts.`,
        `The high fat content (${f}g) delivers ${cal}kcal per 100g, making this an efficient energy source for those needing a caloric surplus.`,
        `At ${cal}kcal with ${f}g fat, most of the energy comes from lipids — suitable for keto approaches or calorie-surplus phases.`,
        `A high-fat food (${f}g per 100g) packing ${cal}kcal, valuable for hitting high calorie targets during bulking but easily overcounted during a deficit.`,
      ], id));
      break;

    case "very_low_cal":
      sentences.push(pick([
        `At just ${cal}kcal per 100g, this is a perfect volume food for dieting — fill your plate without filling your calorie budget.`,
        `With only ${cal}kcal per 100g, this is one of the lowest-calorie options available, ideal for creating satisfying, high-volume meals during a cut.`,
        `Extremely low in calories (${cal}kcal/100g), this food allows generous portions during weight loss without meaningful caloric impact.`,
        `Just ${cal}kcal per 100g makes this a dieter's best friend — add bulk to any meal while keeping calories in check.`,
      ], id));
      break;

    case "low_cal_balanced":
      sentences.push(pick([
        `At ${cal}kcal per 100g with ${p}g protein and ${c}g carbs, this light yet balanced option fits easily into calorie-controlled meal plans.`,
        `Light at ${cal}kcal but still providing ${p}g protein, this is a practical choice for maintaining nutritional balance during a calorie deficit.`,
        `With only ${cal}kcal per 100g and a balanced nutrient profile, this food supports weight management without sacrificing nutritional variety.`,
        `A low-calorie option at ${cal}kcal with modest but balanced macros, useful for diet phases where every calorie counts.`,
      ], id));
      break;

    case "sugar_heavy":
      sentences.push(pick([
        `With ${sugar}g of sugar per 100g and ${cal}kcal total, this is best reserved for post-workout glycogen replenishment rather than regular snacking.`,
        `The high sugar content (${sugar}g) makes this a fast-acting carb source — useful immediately after training, but a blood sugar risk at other times.`,
        `At ${cal}kcal with ${sugar}g sugar, this causes rapid blood glucose spikes — time consumption around workouts for optimal use.`,
        `High in sugar (${sugar}g) at ${cal}kcal, best consumed strategically post-exercise for quick recovery rather than as a daily indulgence.`,
      ], id));
      break;

    case "pure_fat":
      sentences.push(pick([
        `Nearly pure fat (${f}g/100g) at ${cal}kcal, this requires precise measuring — a single tablespoon (≈15ml) adds significant calories to any dish.`,
        `At ${cal}kcal per 100g of almost pure fat, this is the most calorie-dense food category — accurate measuring by the tablespoon is essential for any diet goal.`,
        `With ${f}g fat delivering ${cal}kcal per 100g, this concentrated energy source can silently derail calorie goals without careful portion control.`,
      ], id));
      break;

    case "high_cal_dense":
      sentences.push(pick([
        `At ${cal}kcal per 100g, this calorie-dense food makes hitting surplus targets easier during bulking and high-training-volume phases.`,
        `Packing ${cal}kcal per 100g, this is an efficient way to increase daily caloric intake for athletes and hard gainers.`,
        `With ${cal}kcal per 100g, this high-energy food is strategic for mass gain but demands strict portion awareness during cutting phases.`,
        `The ${cal}kcal density per 100g means small servings deliver significant energy — powerful for bulking, risky for fat loss.`,
      ], id));
      break;

    default:
      sentences.push(pick([
        `At ${cal}kcal per 100g with ${p}g protein, ${c}g carbs, and ${f}g fat, this offers a balanced nutritional profile for general fitness goals.`,
        `With a well-distributed macro profile (P:${p}g, C:${c}g, F:${f}g) at ${cal}kcal, this food fits flexibly into most meal plans.`,
        `Providing ${cal}kcal with balanced macronutrients, this is a versatile food that can be incorporated into various dietary approaches.`,
        `A ${cal}kcal food with proportionate macros — suitable as part of a balanced diet whether cutting, maintaining, or bulking.`,
      ], id));
      break;
  }

  // ── Second sentence: Category-specific fitness context ──
  const enTips: Record<string, string[]> = {
    "밥류": [
      "Consuming 1-2 hours before training ensures steady energy release during your workout and supports glycogen replenishment afterward.",
      "An excellent carb-loading option before weight training that helps maximize glycogen stores for peak performance.",
      "During a cut, controlling portion size allows you to maintain workout intensity without excess calorie intake.",
    ],
    "면류": [
      "A fast-digesting carb source that works well as a pre-workout meal, though overeating may cause sluggishness during training.",
      "Pair with a lean protein source for a balanced pre or post-workout meal that covers both recovery and energy needs.",
    ],
    "빵류": [
      "A convenient carb source before training, but check for added butter or cream that can significantly increase fat content.",
      "Choosing whole grain options adds fiber for better satiety, making it more diet-friendly during weight management phases.",
    ],
    "떡류": [
      "A rapidly absorbed carb source ideal for quick energy before or after intense workouts, especially when paired with protein.",
    ],
    "가금류": [
      "Rich in leucine — the key amino acid triggering muscle protein synthesis — making it a staple protein source for post-workout meals.",
      "Its versatility in cooking methods helps maintain diet adherence, supporting both fat loss and muscle growth goals long-term.",
      "Removing the skin significantly reduces fat content, making it an even leaner option for cutting phases.",
    ],
    "육류": [
      "Naturally rich in creatine and iron, supporting strength gains and oxygen delivery to muscles during high-intensity training.",
      "The high amino acid score of animal protein ensures efficient muscle protein synthesis — a cornerstone of any hypertrophy-focused diet.",
    ],
    "어패류": [
      "Provides omega-3 fatty acids alongside quality protein, supporting both muscle recovery and joint health after intense training.",
      "A lean protein source with anti-inflammatory benefits from omega-3s, making it ideal for athletes focused on recovery and longevity.",
    ],
    "난류": [
      "A complete protein containing all essential amino acids, making it one of the most bioavailable and cost-effective muscle-building foods.",
      "Versatile and easy to prepare, making consistent meal prep more sustainable — a key factor in long-term fitness results.",
    ],
    "채소류": [
      "Packed with fiber and micronutrients, these are essential for high-volume dieting — filling your plate while keeping calories minimal.",
      "The antioxidants help combat exercise-induced oxidative stress, supporting immune function and faster recovery between sessions.",
    ],
    "과일류": [
      "Natural sugars and vitamins make this ideal for post-workout recovery — blend with protein powder for a convenient recovery shake.",
      "The antioxidant content helps neutralize free radicals generated during intense exercise, promoting faster muscle recovery.",
    ],
    "버섯류": [
      "Low in calories with beta-glucans that support immune function — especially valuable during heavy training blocks when immunity can dip.",
    ],
    "해조류": [
      "Rich in minerals and fiber at virtually zero calories, this fills micronutrient gaps that often appear in restrictive dieting phases.",
    ],
    "유제품": [
      "The casein-whey protein blend provides both immediate and sustained amino acid release, making it effective before sleep for overnight recovery.",
      "Rich in calcium for bone health and muscle contraction function, with protein that supports recovery around training sessions.",
    ],
    "두류": [
      "A plant-based protein source with substantial fiber, offering prolonged satiety that's particularly valuable during calorie-restricted phases.",
    ],
    "견과류": [
      "Rich in healthy unsaturated fats and micronutrients, best consumed in measured portions (25-30g) as a calorie-dense snack during bulking.",
    ],
    "국찌개류": [
      "The high water content provides excellent satiety per calorie, though sodium levels may be elevated — reduce broth intake to manage this.",
    ],
    "패스트푸드": [
      "High in calories and sodium, best used as a planned treat meal — check the protein content and supplement any shortfall in your remaining meals.",
      "Strategic for hard gainers during bulking phases as a convenient high-calorie option, but too calorie-dense for regular use during cutting.",
    ],
    "디저트": [
      "High in sugar and fat, making strict portion control essential — plan these as occasional treat meals within your weekly calorie budget to maintain diet adherence.",
    ],
    "빙과류": [
      "High in sugar, best limited to post-workout recovery or occasional treats — consider lower-calorie frozen alternatives for regular cravings.",
    ],
    "음료류": [
      "Liquid calories bypass satiety signals, so choosing sugar-free or black options is one of the easiest calorie savings during a diet.",
    ],
    "시리얼": [
      "A convenient pre-workout carb source — combine with milk or Greek yogurt for a balanced meal with added protein.",
    ],
    "프로틴보충제": [
      "Provides rapid amino acid delivery to maximize muscle protein synthesis post-workout, and fills protein gaps when whole food intake falls short.",
    ],
    "샐러드": [
      "The cornerstone of high-volume dieting — add lean protein sources like chicken breast or eggs to create a complete, low-calorie meal.",
    ],
    "죽류": [
      "Easy on digestion with quick carb absorption, suitable for light pre-competition meals or when appetite is limited during hard training blocks.",
    ],
    "튀김류": [
      "The frying process significantly increases calorie content through oil absorption — budget these carefully within your weekly calorie plan.",
    ],
    "구이류": [
      "Grilling without added oil minimizes extra fat intake, making this one of the preferred cooking methods for lean meal preparation.",
    ],
    "볶음류": [
      "Calorie content varies significantly with cooking oil — precise oil measurement is key to accurate tracking and body composition management.",
    ],
    "전류": [
      "Pan-frying adds fat, but moderate portions can still fit into a balanced diet providing both carbs and protein in one dish.",
    ],
    "조미료": [
      "Used in small amounts but sodium and sugar can add up — track condiment calories for truly accurate dietary monitoring.",
    ],
    "유지류": [
      "Provides essential fatty acids but at extreme calorie density — measuring by the tablespoon rather than pouring freely is fundamental to any diet plan.",
    ],
    "과자류": [
      "A classic example of 'empty calories' — high energy with minimal nutritional value. Swap for Greek yogurt, fruit, or nuts for more fitness-aligned snacking.",
    ],
    "가공식품": [
      "Check sodium and protein content carefully — choosing high-protein, lower-sodium options makes convenience foods compatible with macro-conscious meal plans.",
    ],
  };

  const categoryTip = enTips[category];
  if (categoryTip && categoryTip.length > 0) {
    sentences.push(pick(categoryTip, id + "_tip"));
  } else {
    const generalTips = [
      "Track your intake accurately using a food scale and the CoreVia app to ensure your daily macros align with your fitness goals.",
      "Adjust portion sizes based on your current goal — deficit for cutting, surplus for bulking, maintenance for recomposition.",
      "Consider your total daily calories and protein target when incorporating this food into your meal plan for optimal results.",
    ];
    sentences.push(pick(generalTips, id + "_gen"));
  }

  // ── Third sentence (optional): sodium/saturated fat warning ──
  if (sodium && sodium >= 600) {
    sentences.push(pick([
      `Note: sodium content is ${sodium}mg per 100g — stay well-hydrated and balance with lower-sodium meals throughout the day.`,
      `With ${sodium}mg sodium, monitor fluid intake and compensate with low-sodium food choices in other meals to manage water retention.`,
    ], id + "_na"));
  } else if (sf && sf >= 10) {
    sentences.push(pick([
      `The saturated fat content (${sf}g) is notable — alternate with unsaturated fat sources to maintain a heart-healthy fat balance.`,
      `With ${sf}g of saturated fat, moderating weekly intake frequency supports long-term cardiovascular health alongside your training.`,
    ], id + "_sf"));
  }

  return sentences.join(" ");
}

// ── Main ──
function main() {
  console.log(`[generate-desc] Loading ${db.length} nutrition items...`);

  const descKo: Record<string, string> = {};
  const descEn: Record<string, string> = {};

  let profileStats: Record<string, number> = {};
  let categoryStats: Record<string, number> = {};

  for (const item of db) {
    const nameKo = namesKo[item.id] || item.id;
    const nameEn = namesEn[item.id] || item.id;
    const profile = classifyMacro(item);
    const category = classifyCategory(item.id, nameKo);

    profileStats[profile] = (profileStats[profile] || 0) + 1;
    categoryStats[category] = (categoryStats[category] || 0) + 1;

    descKo[item.id] = generateKo(item, profile, category, nameKo);
    descEn[item.id] = generateEn(item, profile, category, nameEn);
  }

  // Write output
  const koPath = path.join(DATA_DIR, "nutrition-desc-ko.json");
  const enPath = path.join(DATA_DIR, "nutrition-desc-en.json");

  fs.writeFileSync(koPath, JSON.stringify(descKo, null, 2), "utf-8");
  fs.writeFileSync(enPath, JSON.stringify(descEn, null, 2), "utf-8");

  const koSize = (fs.statSync(koPath).size / 1024).toFixed(0);
  const enSize = (fs.statSync(enPath).size / 1024).toFixed(0);

  console.log(`\n[generate-desc] Written:`);
  console.log(`  ${koPath} (${koSize}KB)`);
  console.log(`  ${enPath} (${enSize}KB)`);

  console.log(`\n[generate-desc] Macro Profile Distribution:`);
  for (const [k, v] of Object.entries(profileStats).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}: ${v}`);
  }

  console.log(`\n[generate-desc] Category Distribution:`);
  for (const [k, v] of Object.entries(categoryStats).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}: ${v}`);
  }

  // Validation
  const koKeys = Object.keys(descKo);
  const enKeys = Object.keys(descEn);
  const koEmpty = koKeys.filter((k) => !descKo[k].trim());
  const enEmpty = enKeys.filter((k) => !descEn[k].trim());

  console.log(`\n[generate-desc] Validation:`);
  console.log(`  Total KO: ${koKeys.length}, Empty: ${koEmpty.length}`);
  console.log(`  Total EN: ${enKeys.length}, Empty: ${enEmpty.length}`);

  // Check uniqueness
  const koVals = new Set(Object.values(descKo));
  const enVals = new Set(Object.values(descEn));
  console.log(`  Unique KO descriptions: ${koVals.size}/${koKeys.length}`);
  console.log(`  Unique EN descriptions: ${enVals.size}/${enKeys.length}`);

  // Sample output
  const sampleIds = ["kfda_00001", "kfda_00100", "comp_00001", "usda_00001"];
  console.log(`\n[generate-desc] Samples:`);
  for (const sid of sampleIds) {
    if (descKo[sid]) {
      console.log(`\n  ${sid} (${namesKo[sid]}):`);
      console.log(`  KO: ${descKo[sid]}`);
      console.log(`  EN: ${descEn[sid]}`);
    }
  }

  console.log(`\n[generate-desc] Done!`);
}

main();
