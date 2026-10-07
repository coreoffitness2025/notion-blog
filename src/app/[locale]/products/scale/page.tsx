import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 스마트 체중계 소개 (2026-10-08)
// 문구·수치는 판매 중인 스마트스토어 상세 v8.1(corevia-fitness-app docs/assets/scale-detail/v8) 그대로 — 새 수치 만들지 않는다.
// 판매·반품 조건은 스마트스토어 값만(policy/commerce-sale-terms): 24,000 · 무료배송 · 변심 반품·교환 배송비 0원(반품안심케어).
// 이미지로 굽지 않고 텍스트로 둔다(네이버 검색이 실제 유입원).

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

const SS_SCALE = "https://smartstore.naver.com/coreviafitness_store/products/13779186739";
const SS_START_PACK = "https://smartstore.naver.com/coreviafitness_store/products/13795017188";
const track = (url: string, detail: string) =>
  `${url}?nt_source=site&nt_medium=products&nt_detail=${detail}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/products/scale";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "코비아 스마트 체중계 — 체성분 15가지 앱 자동 기록 | CoreVia"
      : "CoreVia Smart Scale — 15 body composition metrics, saved to the app | CoreVia",
    description: isKo
      ? "올라서면 몸무게와 체성분 15가지가 코비아 피트니스 앱에 날짜별로 쌓입니다. 24,000원 · 무료배송 · KC 인증 · 블루투스 앱 연동."
      : "Step on and your weight plus 15 body composition metrics are saved by date in the CoreVia Fitness app. ₩24,000 · Bluetooth · KC certified.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: isKo ? "코비아 스마트 체중계" : "CoreVia Smart Scale",
      url: pageUrl,
      siteName: "CoreVia",
      images: [{ url: `${siteUrl}/products/scale-photo.jpg`, width: 1000, height: 1000 }],
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function ScalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isKo = locale === "ko";
  const prefix = isKo ? "" : `/${locale}`;

  const t = isKo
    ? {
        badge: "스마트 체중계",
        title: "코비아 스마트 체중계",
        headline: "올라서면, 기록은 끝.",
        sub: "몸무게와 체성분 15가지가 코비아 피트니스 앱에 날짜별로 쌓입니다.",
        price: "24,000원",
        priceNote: "무료배송 · KC 인증",
        buy: "스마트스토어에서 구매하기",
        specs: [
          { n: "15", l: "체성분 지표" },
          { n: "180kg", l: "최대 측정" },
          { n: "AAA×2", l: "건전지" },
          { n: "1년", l: "품질보증" },
        ],
        whyTitle: "'재는 것' 다음을 만들었습니다",
        whySub: "운동·식단 기록 앱 코비아 피트니스가 만든 체중계입니다.",
        points: [
          { k: "01 · 기록이 끊기지 않게", t: "손으로 적지 않아도 오늘이 남습니다", d: "앱 홈에서 '체중계 연결'을 누르고 올라서면 몸무게와 체성분이 오늘 날짜로 바로 저장됩니다." },
          { k: "02 · 숫자에 흔들리지 않게", t: "하루 숫자 말고 방향을 봅니다", d: "쌓인 기록은 1주·1개월·3개월 그래프로 이어집니다. 오늘 오른 숫자보다 몸이 가는 방향이 먼저 보입니다." },
          { k: "03 · 숫자 다음이 보이게", t: "몸무게 뒤에 있는 15가지", d: "체지방률·골격근량·내장지방 등 주요 지표가 지금 어느 구간인지(표준·경계 등) 함께 표시됩니다." },
        ],
        estimate: "가정용 체성분은 추정값입니다. 절댓값보다 같은 조건(아침 공복)에서의 변화로 보세요.",
        shotPair: "실제 앱 화면 · 체중계 등록",
        shotBody: "실제 앱 화면 · 체성분 결과",
        planTitle: "체중계 기능은 무료입니다",
        free: "무료",
        freeDesc: "체중계 측정 · 자동 기록 · 체성분 15지표 · 추이 그래프",
        pro: "Pro (선택)",
        proDesc: "코치진의 주간 종합 분석",
        bonus: "구매하면 앱 Pro 1개월 이용권을 함께 드립니다. 주문할 때 옵션칸에 이메일을 적어 주시면 등록 링크를 메일로 보내 드립니다(1개월 뒤 자동 종료 · 자동 결제 없음).",
        packTitle: "체중계 + 전자책을 함께",
        packDesc: "체중계, 전자책 Core of Fitness, 앱 Pro 이용권을 묶은 다이어트 스타트 팩도 있습니다.",
        packCta: "스타트 팩 보기",
        stepsTitle: "연결은 처음 한 번이면 끝",
        steps: [
          { t: "앱 설치", d: "App Store·Google Play에서 '코비아 피트니스'. 체중계를 받기 전에 미리 둘러보셔도 됩니다." },
          { t: "'체중계 연결' 누르기", d: "홈 몸무게 카드에서. 블루투스를 켜고 권한을 허용해 주세요." },
          { t: "60초 안에 올라서기", d: "첫 측정값으로 체중계가 자동 등록됩니다. 다음부터는 같은 버튼을 누르고 올라서기만 하면 됩니다." },
        ],
        trouble: "연결이 안 된다면: 블루투스 껐다 켜기 → 안드로이드는 앱 위치 권한 허용 → 건전지 다시 넣기. 그래도 안 되면 support@coreviafitness.com 또는 스토어 문의 게시판에 남겨 주세요.",
        infoTitle: "제품 정보",
        info: [
          ["품명", "전자체중계"],
          ["모델명", "ZH-S1402-V02"],
          ["최대 측정 중량", "180kg"],
          ["상판", "강화유리"],
          ["전원", "DC 3V (AAA 건전지 2개)"],
          ["통신", "블루투스(BLE) · 코비아 피트니스 앱 연동"],
          ["앱 지원", "iOS 15.1 이상 · Android 7.0 이상"],
          ["크기 · 무게", "포장 기준 30 × 30 × 4.5cm, 약 950g"],
          ["제조자 / 수입자", "Zhejiang Tiansheng Electronic Co., Ltd. / 코비아 피트니스"],
          ["제조국", "중국"],
          ["품질보증", "구입일로부터 1년 (소비자분쟁해결기준)"],
          ["A/S", "코비아 피트니스 070-8018-7468"],
          ["KC", "방송통신기자재 적합등록 · 인증번호 R-R-CVF8-ZH-S1402-V02"],
        ],
        cautionTitle: "사용 전 꼭 확인하세요",
        cautions: [
          "심장박동기 등 체내 삽입형 의료기기를 사용하는 분은 사용하지 마세요. 측정할 때 미세한 전류가 몸을 통과합니다.",
          "의료기기가 아니며, 질병의 진단·치료 목적으로 사용할 수 없습니다.",
          "계량법상 거래·증명용 저울이 아닙니다.",
          "젖은 발이나 미끄러운 바닥에서는 넘어질 수 있으니 사용하지 마세요.",
          "강화유리 제품이므로 떨어뜨리거나 강한 충격을 주지 마세요.",
        ],
        shipTitle: "배송 · 반품 (스마트스토어 기준)",
        ship: [
          { n: "무료", l: "배송비 · CJ대한통운" },
          { n: "7일", l: "단순 변심 반품·교환 (받은 날부터)" },
          { n: "0원", l: "변심 반품·교환 배송비 (반품안심케어)" },
          { n: "0원", l: "불량·오배송 배송비" },
        ],
        appLink: "코비아 피트니스 앱 소개 보기",
      }
    : {
        badge: "Smart scale",
        title: "CoreVia Smart Scale",
        headline: "Step on. It's recorded.",
        sub: "Your weight and 15 body composition metrics are saved by date in the CoreVia Fitness app.",
        price: "₩24,000",
        priceNote: "Free shipping · KC certified · Sold in Korea via Naver Smart Store",
        buy: "Buy on Naver Smart Store",
        specs: [
          { n: "15", l: "Body composition metrics" },
          { n: "180kg", l: "Max capacity" },
          { n: "AAA×2", l: "Batteries" },
          { n: "1 yr", l: "Warranty" },
        ],
        whyTitle: "We built what comes after the measurement",
        whySub: "Made by CoreVia Fitness, the workout and meal logging app.",
        points: [
          { k: "01 · Never miss a record", t: "Today is saved without writing it down", d: "Tap 'Connect scale' on the app home and step on — your weight and body composition are saved to today's date." },
          { k: "02 · Don't chase daily swings", t: "See the direction, not one number", d: "Your records become 1-week, 1-month and 3-month graphs, so the direction your body is heading comes first." },
          { k: "03 · See what's behind the number", t: "15 metrics behind your weight", d: "Key metrics such as body fat, skeletal muscle and visceral fat show which range you're in (standard, borderline, etc.)." },
        ],
        estimate: "Home body composition values are estimates. Compare changes under the same conditions (morning, before eating) rather than absolute values.",
        shotPair: "Actual app screen · Scale pairing",
        shotBody: "Actual app screen · Body composition",
        planTitle: "Scale features are free",
        free: "Free",
        freeDesc: "Measurement · Auto logging · 15 metrics · Trend graphs",
        pro: "Pro (optional)",
        proDesc: "Weekly analysis from the coaching team",
        bonus: "Every scale comes with a 1-month CoreVia Pro pass. Enter your email in the order option field and we'll email you the activation link (ends automatically after 1 month · no auto-renewal).",
        packTitle: "Scale + ebook together",
        packDesc: "The Diet Start Pack bundles the scale, the Core of Fitness ebook and a Pro pass.",
        packCta: "See the Start Pack",
        stepsTitle: "Connect once, that's it",
        steps: [
          { t: "Install the app", d: "Search 'CoreVia Fitness' on the App Store or Google Play. Feel free to look around before the scale arrives." },
          { t: "Tap 'Connect scale'", d: "On the weight card on the home screen. Turn on Bluetooth and allow the permission." },
          { t: "Step on within 60 seconds", d: "The first measurement registers the scale. After that, just tap the same button and step on." },
        ],
        trouble: "Can't connect? Toggle Bluetooth off and on → on Android, allow location permission for the app → reinsert the batteries. Still stuck? Email support@coreviafitness.com.",
        infoTitle: "Product information",
        info: [
          ["Product", "Digital body scale"],
          ["Model", "ZH-S1402-V02"],
          ["Max capacity", "180kg"],
          ["Top", "Tempered glass"],
          ["Power", "DC 3V (2 × AAA batteries)"],
          ["Connectivity", "Bluetooth (BLE) · CoreVia Fitness app"],
          ["App support", "iOS 15.1+ · Android 7.0+"],
          ["Size · Weight", "Package 30 × 30 × 4.5cm, approx. 950g"],
          ["Manufacturer / Importer", "Zhejiang Tiansheng Electronic Co., Ltd. / CoreVia Fitness"],
          ["Made in", "China"],
          ["Warranty", "1 year from purchase"],
          ["Support", "CoreVia Fitness +82 70-8018-7468"],
          ["KC", "Broadcasting & communication equipment conformity · R-R-CVF8-ZH-S1402-V02"],
        ],
        cautionTitle: "Before you use it",
        cautions: [
          "Do not use if you have an implanted medical device such as a pacemaker. A small current passes through the body during measurement.",
          "Not a medical device; not for diagnosing or treating any condition.",
          "Not a scale for trade or certification.",
          "Do not use with wet feet or on slippery floors.",
          "Tempered glass — do not drop or strike it.",
        ],
        shipTitle: "Shipping · Returns (Naver Smart Store)",
        ship: [
          { n: "Free", l: "Shipping · CJ Logistics (Korea)" },
          { n: "7 days", l: "Change-of-mind return/exchange" },
          { n: "₩0", l: "Change-of-mind return shipping (Return Care)" },
          { n: "₩0", l: "Defect or wrong item" },
        ],
        appLink: "About the CoreVia Fitness app",
      };

  const buyUrl = track(SS_SCALE, "scale");

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Hero */}
      <section className="pt-16 pb-12 px-4">
        <div className="max-w-[1000px] mx-auto grid gap-10 md:grid-cols-2 items-center">
          <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white">
            <Image src="/products/scale-photo.jpg" alt={t.title} width={1000} height={1000} className="w-full h-auto" priority />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-xs font-semibold mb-4">
              {t.badge}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-2">{t.title}</h1>
            <p className="text-2xl font-bold text-[var(--corevia-primary)] mb-3">{t.headline}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{t.sub}</p>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {t.specs.map((s) => (
                <div key={s.l} className="bg-white border border-gray-200 rounded-xl p-3 text-center">
                  <p className="text-base font-bold text-gray-800">{s.n}</p>
                  <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
            <p className="text-3xl font-bold text-gray-800">{t.price}</p>
            <p className="text-sm text-gray-500 mb-5">{t.priceNote}</p>
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl transition-opacity hover:opacity-90 text-center"
            >
              {t.buy}
            </a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-14 px-4 bg-white border-y border-gray-100">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">{t.whyTitle}</h2>
          <p className="text-gray-500 text-center mb-10">{t.whySub}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {t.points.map((p) => (
              <div key={p.k} className="rounded-2xl bg-[var(--corevia-bg)] p-6">
                <p className="text-xs font-semibold text-[var(--corevia-primary)] mb-2">{p.k}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{p.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">{t.estimate}</p>
        </div>
      </section>

      {/* App screens + plan */}
      <section className="py-14 px-4">
        <div className="max-w-[1000px] mx-auto grid gap-10 md:grid-cols-2 items-center">
          <div className="grid grid-cols-2 gap-4">
            <figure>
              <Image src="/products/scale-app-scale-pairing.jpg" alt={t.shotPair} width={552} height={1200} className="w-full h-auto rounded-2xl border border-gray-200" />
              <figcaption className="text-xs text-gray-400 mt-2 text-center">{t.shotPair}</figcaption>
            </figure>
            <figure>
              <Image src="/products/scale-app-bodycomp-result.jpg" alt={t.shotBody} width={552} height={1200} className="w-full h-auto rounded-2xl border border-gray-200" />
              <figcaption className="text-xs text-gray-400 mt-2 text-center">{t.shotBody}</figcaption>
            </figure>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-5">{t.planTitle}</h2>
            <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 mb-5">
              <div className="p-5">
                <p className="text-sm font-semibold text-[var(--corevia-primary)] mb-1">{t.free}</p>
                <p className="text-gray-700">{t.freeDesc}</p>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-gray-500 mb-1">{t.pro}</p>
                <p className="text-gray-700">{t.proDesc}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{t.bonus}</p>
            <Link href={`${prefix}/products/apps#fitness`} className="text-sm font-medium text-[var(--corevia-primary)]">
              {t.appLink} →
            </Link>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="py-14 px-4 bg-white border-y border-gray-100">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">{t.stepsTitle}</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {t.steps.map((s, i) => (
              <li key={s.t} className="rounded-2xl bg-[var(--corevia-bg)] p-6">
                <p className="text-sm font-bold text-[var(--corevia-primary)] mb-2">STEP {i + 1}</p>
                <h3 className="text-base font-bold text-gray-800 mb-1.5">{s.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-gray-500 leading-relaxed mt-6">{t.trouble}</p>
        </div>
      </section>

      {/* Start pack */}
      {isKo && (
        <section className="py-10 px-4">
          <div className="max-w-[1000px] mx-auto bg-[var(--corevia-primary)]/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-bold text-gray-800 mb-1">{t.packTitle}</p>
              <p className="text-sm text-gray-600">{t.packDesc}</p>
            </div>
            <a
              href={track(SS_START_PACK, "start-pack")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[var(--corevia-primary)] text-[var(--corevia-primary)] text-sm font-semibold hover:bg-white transition-colors"
            >
              {t.packCta}
            </a>
          </div>
        </section>
      )}

      {/* Info / caution / shipping */}
      <section className="py-14 px-4">
        <div className="max-w-[1000px] mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">{t.infoTitle}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {t.info.map(([k, v]) => (
                    <tr key={k}>
                      <th className="text-left font-medium text-gray-500 py-2.5 pr-4 align-top whitespace-nowrap">{k}</th>
                      <td className="text-gray-700 py-2.5">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">{t.shipTitle}</h2>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {t.ship.map((s) => (
                <div key={s.l} className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-lg font-bold text-gray-800">{s.n}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{t.cautionTitle}</h2>
            <ul className="space-y-2">
              {t.cautions.map((c) => (
                <li key={c} className="text-sm text-gray-600 leading-relaxed pl-3 relative before:content-['·'] before:absolute before:left-0">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-[500px] mx-auto text-center">
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl transition-opacity hover:opacity-90"
          >
            {t.buy}
          </a>
        </div>
      </section>
    </main>
  );
}
