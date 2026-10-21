import Link from "next/link";

// 메인 리뉴얼 (2026-10-21, docs/site-renewal-2026-10.md) — 'AI 티' 걷어내기
// 원칙: 사실로 쓴 문장 · 파랑 한 계열 + 그레이 · 진짜 그림만(CRM 실제 화면·체중계 사진·전자책 표지·앱 아이콘·Icon3D) · 움직임 효과 없음.
// 코치는 'CoreVia Fitness 코치진'(policy/no-ai-emphasis, decision/coach-single-tone). 앱 받기는 /go 로 추적.

type L = { isKo: boolean; prefix: string };

function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}

function StoreButtons({ isKo, c, dark = false }: { isKo: boolean; c: string; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      <a href={`/go?app=fitness&p=ios&c=${c}`} target="_blank" rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-[15px] font-semibold px-5 py-3 rounded-xl transition-colors ${dark ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"}`}>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
        App Store
      </a>
      <a href={`/go?app=fitness&p=android&c=${c}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[var(--corevia-primary)] text-white text-[15px] font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.6 1.8 13.8 12 3.6 22.2a1.4 1.4 0 0 1-.6-1.2V3c0-.5.2-.9.6-1.2zm11.6 11.6 2.4 2.4-11.1 6.3 8.7-8.7zm3.8-3.4 2.6 1.5c.9.5.9 1.8 0 2.3L19 15.3 16.2 12.5 19 10zM6.5 1.9l11.1 6.3-2.4 2.4-8.7-8.7z" /></svg>
        Google Play
      </a>
    </div>
  );
}

function Hero({ isKo, prefix }: L) {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-[1120px] mx-auto px-5 pt-14 pb-16 md:pt-20 md:pb-24 grid gap-12 md:grid-cols-[1fr_1.05fr] items-center">
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-4">{isKo ? "코비아 · 운동 기록에서 센터 운영까지" : "CoreVia · From workout logs to center operations"}</p>
          <h1 className="text-[34px] leading-[1.25] md:text-[46px] md:leading-[1.2] font-bold text-gray-900 tracking-[-0.02em] break-keep mb-5">
            {isKo ? <>운동, 식단, 몸무게를<br />한 앱에 기록합니다</> : <>Workouts, meals and weight<br />in one app</>}
          </h1>
          <p className="text-[17px] leading-relaxed text-gray-600 break-keep mb-8 max-w-[460px]">
            {isKo
              ? "코비아 피트니스에 남긴 기록은 체중계와 이어지고, 회원이 동의하면 담당 트레이너와 센터에서도 같은 기록을 봅니다."
              : "What you log in CoreVia Fitness connects to the scale, and with your consent your trainer and center see the same record."}
          </p>
          <StoreButtons isKo={isKo} c="site-home-hero" />
          <p className="mt-3 text-sm text-gray-400">{isKo ? "무료 · iPhone·Android" : "Free · iPhone & Android"}</p>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-gray-200 bg-white p-1.5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]">
            <Img src="/crm/member-measure.webp" alt={isKo ? "코비아 CRM 회원 카드 — 날짜별 측정 기록" : "CoreVia CRM member card — measurements by date"} className="w-full h-auto rounded-xl" />
          </div>
          <div className="absolute -bottom-8 -left-4 md:-left-10 w-[42%] max-w-[220px] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.3)]">
            <Img src="/products/scale-photo.jpg" alt={isKo ? "코비아 스마트 체중계" : "CoreVia Smart Scale"} className="w-full aspect-square object-cover rounded-xl" />
            <p className="mt-2 text-xs font-semibold text-gray-700">{isKo ? "올라서면 앱에 자동 기록" : "Step on, saved to the app"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lines({ isKo, prefix }: L) {
  const items = [
    { group: isKo ? "코비아 SW" : "CoreVia SW", title: isKo ? "코비아 CRM" : "CoreVia CRM", desc: isKo ? "웰니스 센터 운영 웹. 회원권·예약·출석·급여에 회원 앱 기록까지." : "Web CRM for wellness centers — memberships to payroll, plus members' app logs.", href: `${prefix}/products/crm`, img: "/crm/today.webp", cover: true, tag: isKo ? "베타" : "Beta" },
    { group: isKo ? "애플리케이션" : "Apps", title: isKo ? "코비아 피트니스" : "CoreVia Fitness", desc: isKo ? "운동·식단·몸무게 기록과 코치진 피드백." : "Workout, meal and weight logs with coaching team feedback.", href: `${prefix}/products/apps#fitness`, img: "/icon-512.png" },
    { group: isKo ? "애플리케이션" : "Apps", title: isKo ? "코비아 리커버리" : "CoreVia Recovery", desc: isKo ? "통증 일지·재활 운동·가동범위 사진 기록." : "Pain journal, rehab exercises and range-of-motion photos.", href: `${prefix}/products/apps#recovery`, img: "/products/recovery-icon.png" },
    { group: isKo ? "커머스" : "Commerce", title: isKo ? "코비아 스마트 체중계" : "CoreVia Smart Scale", desc: isKo ? "올라서면 몸무게가 앱에 날짜별로. 24,000원." : "Step on and it's saved by date. ₩24,000.", href: `${prefix}/products/scale`, img: "/products/scale-photo.jpg", cover: true },
  ];
  return (
    <section className="bg-[var(--corevia-bg)]">
      <div className="max-w-[1120px] mx-auto px-5 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 tracking-[-0.02em]">{isKo ? "코비아가 만드는 것" : "What we make"}</h2>
          <Link href={`${prefix}/products`} className="text-sm font-semibold text-gray-500 hover:text-gray-900 shrink-0">{isKo ? "제품 전체 →" : "All products →"}</Link>
        </div>
        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Link key={it.title} href={it.href} className="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 transition-colors">
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center">
                <Img src={it.img} alt={it.title} className={it.cover ? "w-full h-full object-cover object-left-top" : "w-16 h-16 sm:w-24 sm:h-24 rounded-[18px] sm:rounded-[22px]"} />
              </div>
              <div className="p-4 sm:p-5 flex-1">
                <p className="text-xs font-semibold text-gray-400 mb-1.5">{it.group}{it.tag ? ` · ${it.tag}` : ""}</p>
                <h3 className="text-[15px] sm:text-[17px] font-bold text-gray-900 mb-1.5 group-hover:text-[var(--corevia-primary)] transition-colors">{it.title}</h3>
                <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed break-keep">{it.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppFeatures({ isKo }: L) {
  const items = isKo
    ? [
        { icon: "dumbbell", title: "운동 기록", desc: "세트마다 무게와 횟수를 남기면 지난 기록과 나란히 보여 줍니다. 주기화 프로그램도 들어 있어요." },
        { icon: "camera", title: "식단 기록", desc: "음식 사진 한 장으로 칼로리와 영양소를 기록합니다. 직접 검색해 넣을 수도 있어요." },
        { icon: "scale", title: "체중계 연동", desc: "코비아 스마트 체중계에 올라서면 몸무게가 그날 날짜로 저장됩니다." },
        { icon: "feedback", title: "코치진 피드백", desc: "운동과 식단 기록을 함께 보고 CoreVia Fitness 코치진이 피드백합니다." },
      ]
    : [
        { icon: "dumbbell", title: "Workout log", desc: "Log weight and reps per set and see them next to your last session. Periodized programs included." },
        { icon: "camera", title: "Meal log", desc: "Log calories and nutrients from one food photo, or search and add foods yourself." },
        { icon: "scale", title: "Scale sync", desc: "Step on the CoreVia Smart Scale and your weight is saved to today." },
        { icon: "feedback", title: "Coaching team feedback", desc: "The CoreVia Fitness coaching team looks at workouts and meals together." },
      ];
  return (
    <section className="bg-white">
      <div className="max-w-[1120px] mx-auto px-5 py-16 md:py-24 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 tracking-[-0.02em] leading-snug mb-4 break-keep">{isKo ? <>코비아 피트니스로<br />하는 일</> : "What CoreVia Fitness does"}</h2>
          <p className="text-gray-500 leading-relaxed break-keep mb-6">{isKo ? "운동과 식단을 따로 보지 않고, 한 화면에서 같이 봅니다." : "Workouts and meals, looked at together."}</p>
          <Link href={isKo ? "/products/apps" : "/en/products/apps"} className="text-sm font-semibold text-[var(--corevia-primary)] hover:underline">{isKo ? "앱 자세히 보기 →" : "More about the app →"}</Link>
        </div>
        <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
          {items.map((f) => (
            <div key={f.title}>
              <Img src={`/icons3d/${f.icon}.webp`} alt="" className="w-14 h-14 mb-3" />
              <h3 className="text-[17px] font-bold text-gray-900 mb-1.5">{f.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed break-keep">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Connected({ isKo, prefix }: L) {
  const rows = isKo
    ? ["회원이 동의하면 담당 트레이너가 앱 기록을 봅니다", "수업을 마치면 회차가 차감되고 회원이 앱에서 확인합니다", "센터에서 잰 측정값이 날짜별로 쌓입니다"]
    : ["With consent, the trainer sees the member's app logs", "Finishing a session deducts it and the member confirms in the app", "Measurements taken at the center build up by date"];
  return (
    <section className="bg-[var(--corevia-bg)]">
      <div className="max-w-[1120px] mx-auto px-5 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1 rounded-2xl border border-gray-200 bg-white p-1.5">
          <Img src="/crm/member.webp" alt={isKo ? "코비아 CRM 회원 카드 — 이용권과 앱 연결" : "CoreVia CRM member card"} className="w-full h-auto rounded-xl" />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold text-gray-500 mb-3">{isKo ? "트레이너 · 센터" : "Trainers · Centers"}</p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 tracking-[-0.02em] leading-snug mb-6 break-keep">
            {isKo ? "수업 밖의 기록까지 트레이너와 센터가 함께 봅니다" : "Trainers and centers see what happens between sessions"}
          </h2>
          <ul className="grid gap-3 mb-8">
            {rows.map((r) => (
              <li key={r} className="flex gap-3 text-[15px] text-gray-700 leading-relaxed break-keep">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--corevia-primary)]" />{r}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2.5">
            <Link href={`${prefix}/products/crm`} className="inline-flex items-center px-5 py-3 rounded-xl bg-gray-900 text-white text-[15px] font-semibold hover:bg-gray-800 transition-colors">{isKo ? "코비아 CRM 보기" : "See CoreVia CRM"}</Link>
            <Link href={`${prefix}/products/crm#inquiry`} className="inline-flex items-center px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 text-[15px] font-semibold hover:bg-gray-50 transition-colors">{isKo ? "베타 도입 문의" : "Beta inquiry"}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guides({ isKo, prefix }: L) {
  const links = isKo
    ? [
        { icon: "dumbbell", t: "운동 가이드", d: "99개 운동의 자세와 주의할 점", href: "/guide/workout/exercises" },
        { icon: "book", t: "영양성분 사전", d: "음식 5,672개의 칼로리·탄단지", href: "/guide/nutrition" },
        { icon: "calculator", t: "칼로리 계산기", d: "하루 필요 열량과 탄단지 비율", href: "/guide/nutrition/calorie" },
        { icon: "chart", t: "1RM 계산기", d: "들어 본 무게로 최대 중량 추정", href: "/guide/workout/1rm" },
      ]
    : [
        { icon: "dumbbell", t: "Exercise guide", d: "Form and cues for 99 exercises", href: "/en/guide/workout/exercises" },
        { icon: "book", t: "Food database", d: "Calories and macros for 5,672 foods", href: "/en/guide/nutrition" },
        { icon: "calculator", t: "Calorie calculator", d: "Daily calories and macro split", href: "/en/guide/nutrition/calorie" },
        { icon: "chart", t: "1RM calculator", d: "Estimate your one-rep max", href: "/en/guide/workout/1rm" },
      ];
  return (
    <section className="bg-white">
      <div className="max-w-[1120px] mx-auto px-5 py-16 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 tracking-[-0.02em] mb-2">{isKo ? "무료 가이드" : "Free guides"}</h2>
            <p className="text-gray-500">{isKo ? "앱 없이도 볼 수 있어요." : "No app needed."}</p>
          </div>
          <Link href={`${prefix}/guide`} className="text-sm font-semibold text-gray-500 hover:text-gray-900 shrink-0">{isKo ? "가이드 전체 →" : "All guides →"}</Link>
        </div>
        <div className="grid gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden sm:grid-cols-2">
          {links.map((l) => (
            <Link key={l.t} href={l.href} className="flex items-center gap-4 bg-white p-5 hover:bg-gray-50 transition-colors">
              <Img src={`/icons3d/${l.icon}.webp`} alt="" className="w-11 h-11 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="block text-[16px] font-bold text-gray-900">{l.t}</span>
                <span className="block text-sm text-gray-500 mt-0.5">{l.d}</span>
              </span>
              <span className="text-gray-300" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
        {isKo && (
          <Link href="/ebook?from=home" className="mt-4 flex items-center gap-5 rounded-2xl border border-gray-200 p-4 sm:p-5 hover:bg-gray-50 transition-colors">
            <Img src="/ebook-cover.png" alt="Core of Fitness 전자책 표지" className="w-14 h-[72px] object-contain shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block text-xs font-semibold text-gray-400 mb-1">전자책</span>
              <span className="block text-[16px] font-bold text-gray-900">Core of Fitness — 가이드의 원리를 한 권으로</span>
              <span className="block text-sm text-gray-500 mt-0.5">체중 감량과 근비대의 핵심, 식단·운동 프로그램 · 20,000원</span>
            </span>
            <span className="text-gray-300" aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}

function FinalCta({ isKo }: L) {
  return (
    <section className="bg-gray-900">
      <div className="max-w-[1120px] mx-auto px-5 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-[24px] md:text-[28px] font-bold text-white tracking-[-0.02em] mb-1.5">{isKo ? "코비아 피트니스는 무료로 시작합니다" : "CoreVia Fitness is free to start"}</h2>
          <p className="text-gray-400">{isKo ? "기록이 쌓이면 Pro로 더 자세한 분석을 볼 수 있어요." : "Upgrade to Pro for deeper analysis when you're ready."}</p>
        </div>
        <StoreButtons isKo={isKo} c="site-home-bottom" dark />
      </div>
    </section>
  );
}

export default function HomeRenewal({ locale, blog }: { locale: string; blog: React.ReactNode }) {
  const isKo = locale === "ko";
  const l = { isKo, prefix: isKo ? "" : `/${locale}` };
  return (
    <div className="min-h-screen bg-white">
      <Hero {...l} />
      <Lines {...l} />
      <AppFeatures {...l} />
      <Connected {...l} />
      <Guides {...l} />
      {blog}
      <FinalCta {...l} />
    </div>
  );
}
