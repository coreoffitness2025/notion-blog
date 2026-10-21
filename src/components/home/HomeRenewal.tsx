import Link from "next/link";
import CrmInquiryForm from "@/components/CrmInquiryForm";

// 메인 — 회사 사명 중심 (2026-10-22 대표 "사명이랑 슬로건을 걸어놓고 왜 제품을 걸어놔", docs/site-renewal-2026-10.md 2차)
// 순서(벤치마킹: FDE 회사들 = 미션 문장으로 열고 → FDE 정의 → 원칙·단계 → 증거 → 연락 하나):
//   사명 → 현장의 문제 → 솔루션 ① 웰니스 FDE → 솔루션 ② 영상 인식 → 보유 기술 → 직접 만든 제품 → 상담 신청
// 문구 선: 진단·처방·치료 효과 금지, 측정값 = 참고값·담당자 확인, 코치 = 'CoreVia Fitness 코치진', 고객 로고·후기·근거 없는 수치 없음.
// 숫자는 코드 기준(운동 109종 exerciseDatabase.ts · 음식 5,672 food-db-audit · CRM 화면 31 web/src/pages · 루틴 23 routineTemplates.ts).

type L = { isKo: boolean; prefix: string };

function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />;
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[28px] md:text-[38px] leading-[1.25] font-bold text-gray-900 tracking-[-0.025em] break-keep">{children}</h2>
);
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-semibold text-[var(--corevia-primary)] mb-3">{children}</p>
);

function Mission({ isKo }: L) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* 바탕: 옅은 격자 한 겹(그림 대신) */}
      <div aria-hidden="true" className="absolute inset-0 [background-image:linear-gradient(to_right,#eef2f7_1px,transparent_1px),linear-gradient(to_bottom,#eef2f7_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative max-w-[1120px] mx-auto px-5 pt-20 pb-24 md:pt-32 md:pb-36">
        <p className="text-sm font-semibold text-gray-500 mb-6">{isKo ? "코비아 · 웰니스 AX" : "CoreVia · Wellness AX"}</p>
        <h1 className="text-[44px] leading-[1.12] md:text-[76px] md:leading-[1.08] font-bold text-gray-900 tracking-[-0.035em] break-keep">
          {isKo ? <>웰니스를<br />AI로 혁신합니다</> : <>Transforming<br />wellness with AI</>}
        </h1>
        <p className="mt-7 text-[18px] md:text-[21px] leading-relaxed text-gray-600 break-keep max-w-[620px]">
          {isKo ? "웰니스 전반에 걸친 다양한 페인 포인트를 AI로 풀어냅니다." : "We solve pain points across wellness with AI."}
        </p>
        <div className="mt-10 flex flex-wrap gap-2.5">
          <a href="#contact" className="inline-flex items-center px-6 py-3.5 rounded-xl bg-gray-900 text-white text-[15px] font-semibold hover:bg-gray-800 transition-colors">{isKo ? "AI 도입 상담 신청" : "Talk to us about AI"}</a>
          <a href="#solutions" className="inline-flex items-center px-6 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-800 text-[15px] font-semibold hover:bg-gray-50 transition-colors">{isKo ? "솔루션 보기" : "Our solutions"}</a>
        </div>
      </div>
    </section>
  );
}

function Problems({ isKo }: L) {
  const rows = isKo
    ? [
        { who: "피트니스·PT샵", pain: "회원권·예약·출석·급여가 여러 프로그램에 흩어져 있고, 수업 밖에서 회원이 무엇을 했는지는 보이지 않습니다." },
        { who: "주간보호 운동 관리", pain: "어르신 운동 평가와 매일의 운동 기록을 종이와 엑셀로 옮겨 적느라 정작 운동 관리에 쓸 시간이 부족합니다." },
        { who: "물리치료·재활 센터", pain: "통증과 가동범위 변화가 사람마다 다른 곳에 적혀 있어, 날짜별 추이를 한눈에 보기 어렵습니다." },
      ]
    : [
        { who: "Fitness & PT studios", pain: "Memberships, bookings, check-ins and payroll are scattered, and what members do between sessions is invisible." },
        { who: "Day-care exercise programs", pain: "Staff copy assessments and daily exercise logs between paper and spreadsheets instead of managing exercise." },
        { who: "Physio & rehab centers", pain: "Pain and range-of-motion notes live in different places, so trends by date are hard to see." },
      ];
  return (
    <section className="bg-[var(--corevia-bg)] border-y border-gray-100">
      <div className="max-w-[1120px] mx-auto px-5 py-20 md:py-28 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>{isKo ? "현장의 문제" : "The problem"}</Eyebrow>
          <H2>{isKo ? <>웰니스 현장은 아직<br />손으로 일합니다</> : <>Wellness still runs<br />by hand</>}</H2>
        </div>
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {rows.map((r) => (
            <div key={r.who} className="py-6">
              <p className="text-[15px] font-bold text-gray-900 mb-1.5">{r.who}</p>
              <p className="text-[16px] text-gray-600 leading-relaxed break-keep">{r.pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fde({ isKo }: L) {
  const steps = isKo
    ? [
        { n: "01", t: "현장 진단", d: "센터에 직접 가서 하루 업무를 함께 보고, 시간이 새는 곳과 기록이 끊기는 곳을 찾습니다." },
        { n: "02", t: "도입 설계", d: "무엇을 AI와 자동화로 바꾸고 무엇을 사람이 계속할지, 센터에 맞는 순서를 정합니다." },
        { n: "03", t: "구축·적용", d: "이미 만들어 둔 앱·CRM·자동화를 센터에 맞게 붙이고, 없는 부분은 새로 만듭니다." },
        { n: "04", t: "운영 정착", d: "직원이 매일 쓰게 될 때까지 함께 운영하며 고칩니다." },
      ]
    : [
        { n: "01", t: "On-site diagnosis", d: "We spend a working day at the center and find where time leaks and records break." },
        { n: "02", t: "Adoption design", d: "We decide what AI and automation should take over, what stays human, and in what order." },
        { n: "03", t: "Build & apply", d: "We fit our existing apps, CRM and automations to the center and build what's missing." },
        { n: "04", t: "Settle in", d: "We run it alongside staff until it's part of the daily routine." },
      ];
  return (
    <section id="solutions" className="bg-white scroll-mt-20">
      <div className="max-w-[1120px] mx-auto px-5 py-20 md:py-28">
        <Eyebrow>{isKo ? "솔루션 01 · 웰니스 FDE" : "Solution 01 · Wellness FDE"}</Eyebrow>
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end mb-14">
          <H2>{isKo ? <>현장에 들어가<br />AI 도입을 이끕니다</> : <>We go on site and<br />lead AI adoption</>}</H2>
          <p className="text-[16px] md:text-[17px] text-gray-600 leading-relaxed break-keep">
            {isKo
              ? "FDE(Forward Deployed Engineering)는 엔지니어가 고객 현장에 들어가 문제를 직접 보고 풀어내는 방식입니다. 코비아는 피트니스 센터, 주간보호 운동 시설, 물리치료 시설을 상담하고 상황을 진단한 뒤, 우리가 만든 앱과 자동화 자산으로 AI 도입을 주도합니다."
              : "FDE (Forward Deployed Engineering) means engineers working inside the customer's site. We consult fitness centers, day-care exercise programs and physio facilities, diagnose the situation, then lead AI adoption with the apps and automations we've already built."}
          </p>
        </div>
        <ol className="grid gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-white p-6">
              <p className="text-[13px] font-bold text-[var(--corevia-primary)] mb-6 tabular-nums">{s.n}</p>
              <p className="text-[18px] font-bold text-gray-900 mb-2">{s.t}</p>
              <p className="text-[15px] text-gray-500 leading-relaxed break-keep">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm text-gray-400 break-keep">{isKo ? "기간과 범위는 진단 뒤 센터와 함께 정합니다." : "Timeline and scope are agreed with the center after diagnosis."}</p>
      </div>
    </section>
  );
}

/** 막대 인형 도식 — 관절점·어깨선 기준선. 실제 앱 캡처가 아니라 설명 그림 */
function PoseDiagram({ isKo }: { isKo: boolean }) {
  const j: [number, number][] = [[100, 40], [70, 78], [130, 82], [62, 128], [140, 130], [58, 172], [146, 172], [82, 162], [120, 164], [80, 222], [122, 222], [78, 282], [124, 282]];
  const bones = [[1, 2], [1, 3], [3, 5], [2, 4], [4, 6], [1, 7], [2, 8], [7, 8], [7, 9], [8, 10], [9, 11], [10, 12]];
  return (
    <svg viewBox="0 0 200 310" className="w-full h-auto" role="img" aria-label={isKo ? "관절점과 어깨 기준선을 표시한 설명 그림" : "Illustration of joints and shoulder line"}>
      <rect x="0" y="0" width="200" height="310" rx="16" fill="#FFFFFF" stroke="#E5E7EB" />
      <line x1="20" y1="80" x2="180" y2="80" stroke="#CBD5E1" strokeDasharray="4 4" />
      <line x1="62" y1="78" x2="138" y2="82" stroke="#4285F4" strokeWidth="2" />
      <text x="146" y="72" fontSize="10" fill="#1E40AF" fontWeight="700">3°</text>
      <circle cx="100" cy="40" r="16" fill="none" stroke="#94A3B8" strokeWidth="2" />
      {bones.map(([a, b], i) => <line key={i} x1={j[a][0]} y1={j[a][1]} x2={j[b][0]} y2={j[b][1]} stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />)}
      {j.slice(1).map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4.5" fill="#fff" stroke="#4285F4" strokeWidth="2" />)}
    </svg>
  );
}

function Vision({ isKo, prefix }: L) {
  const items = isKo
    ? [
        { t: "사진 체형분석", s: "출시", d: "정면·측면 사진 두 장에서 관절점을 찾아 어깨·골반의 좌우 기울기와 몸 비율을 잽니다. 트레이너가 점을 바로잡고 확인합니다." },
        { t: "수업 영상 분석", s: "베타", d: "수업 영상에서 반복 횟수, 가장 깊이 내려간 각도, 좌우 차이를 숫자로 뽑아 수업 리포트에 붙입니다. 영상은 폰 밖으로 보내지 않습니다." },
      ]
    : [
        { t: "Photo posture analysis", s: "Live", d: "Finds joints in a front and side photo and measures shoulder and pelvis tilt and body ratios. The trainer adjusts points and confirms." },
        { t: "Session video analysis", s: "Beta", d: "Pulls reps, lowest angle and left-right difference from a session video into the session report. Video stays on the phone." },
      ];
  return (
    <section className="bg-[var(--corevia-bg)] border-y border-gray-100">
      <div className="max-w-[1120px] mx-auto px-5 py-20 md:py-28 grid gap-12 md:grid-cols-[1.15fr_0.85fr] items-center">
        <div>
          <Eyebrow>{isKo ? "솔루션 02 · 영상 인식" : "Solution 02 · Vision"}</Eyebrow>
          <H2>{isKo ? <>스마트폰 카메라 하나로<br />자세와 운동을 숫자로</> : <>One phone camera,<br />posture and movement in numbers</>}</H2>
          <div className="mt-10 grid gap-7">
            {items.map((it) => (
              <div key={it.t}>
                <p className="text-[18px] font-bold text-gray-900 mb-1.5">{it.t} <span className="ml-1 align-middle text-xs font-semibold text-gray-500 border border-gray-300 rounded-full px-2 py-0.5">{it.s}</span></p>
                <p className="text-[15px] text-gray-600 leading-relaxed break-keep">{it.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-400 break-keep">
            {isKo ? "측정·기록 도구입니다. 진단하지 않으며, 값은 트레이너가 확인한 참고값으로 남습니다." : "A measurement and recording tool. It does not diagnose; values are reference values confirmed by a trainer."}
          </p>
          <Link href={`${prefix}/products/apps#fitness`} className="inline-block mt-6 text-sm font-semibold text-gray-700 hover:text-gray-900">{isKo ? "코비아 피트니스 트레이너 모드에서 써 보기 →" : "Try it in CoreVia Fitness trainer mode →"}</Link>
        </div>
        <div className="max-w-[280px] w-full mx-auto">
          <PoseDiagram isKo={isKo} />
          <p className="mt-3 text-center text-xs text-gray-400">{isKo ? "설명 그림 · 관절점과 어깨 기준선" : "Illustration · joints and shoulder line"}</p>
        </div>
      </div>
    </section>
  );
}

function Tech({ isKo }: L) {
  const t = isKo
    ? [
        { i: "camera", h: "AI 칼로리 분석", d: "음식 사진에서 메뉴와 양을 알아보고 공공 영양 DB로 보정합니다.", n: "음식 DB 5,672개" },
        { i: "ruler", h: "자세·동작 인식", d: "폰 안에서 관절점을 찾아 기울기·각도·반복 수를 잽니다.", n: "기기 안에서 처리" },
        { i: "feedback", h: "회원 맞춤 코칭", d: "운동·식단·건강 앱 기록을 한 페이지로 묶어, CoreVia Fitness 코치진과 트레이너가 같은 정보를 보고 피드백합니다.", n: "주간 리포트" },
        { i: "dumbbell", h: "운동 기록·주기화", d: "세트 기록부터 1RM 기반 주기화 프로그램, 목표별 루틴 추천까지.", n: "운동 109종 · 루틴 23개" },
        { i: "scale", h: "블루투스 기기 연동", d: "체중계에 올라서면 몸무게가 앱에 바로 기록됩니다.", n: "KC 인증 체중계" },
        { i: "link", h: "건강 앱 연동", d: "Health Connect·Apple 건강에서 걸음·활동·수면·심박 하루 요약을 읽어 옵니다.", n: "Android · iOS" },
        { i: "people", h: "센터 운영 CRM", d: "회원권·예약·출석·급여·전자계약에 회원 앱 기록과 측정이 이어집니다.", n: "웹 화면 31개" },
        { i: "chart", h: "기기 게이트웨이", d: "센터의 측정 장비·출입 단말이 기기별 키로 CRM에 기록을 보냅니다.", n: "연동 구조 준비" },
        { i: "calculator", h: "운영 자동화", d: "콘텐츠 발행·주문 처리·메일·알림을 정해진 시간에 사람 손 없이 돌립니다.", n: "자동 작업 약 30개" },
      ]
    : [
        { i: "camera", h: "Food photo analysis", d: "Recognizes dishes and portions from a photo, corrected with public nutrition data.", n: "5,672 foods" },
        { i: "ruler", h: "Pose & motion", d: "Finds joints on the phone to measure tilt, angles and reps.", n: "On-device" },
        { i: "feedback", h: "Member-aware coaching", d: "Workout, meal and health logs in one page so the coaching team and trainers work from the same facts.", n: "Weekly reports" },
        { i: "dumbbell", h: "Training & periodization", d: "From set logging to 1RM-based periodized programs and routine suggestions.", n: "109 exercises · 23 routines" },
        { i: "scale", h: "Bluetooth devices", d: "Step on the scale and the weight lands in the app.", n: "KC-certified scale" },
        { i: "link", h: "Health app sync", d: "Reads daily steps, activity, sleep and heart-rate summaries.", n: "Android · iOS" },
        { i: "people", h: "Center CRM", d: "Memberships, bookings, check-ins, payroll and contracts, connected to members' app logs.", n: "31 web screens" },
        { i: "chart", h: "Device gateway", d: "Center devices send measurements and check-ins to the CRM with per-device keys.", n: "Integration-ready" },
        { i: "calculator", h: "Ops automation", d: "Content publishing, orders, mail and alerts run on schedule without hands.", n: "~30 jobs" },
      ];
  return (
    <section className="bg-white">
      <div className="max-w-[1120px] mx-auto px-5 py-20 md:py-28">
        <Eyebrow>{isKo ? "보유 기술" : "Technology"}</Eyebrow>
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end mb-12">
          <H2>{isKo ? <>직접 만들어<br />매일 운영하는 기술</> : <>Technology we built<br />and run every day</>}</H2>
          <p className="text-[16px] text-gray-600 leading-relaxed break-keep">{isKo ? "솔루션은 이 기술들을 센터에 맞게 조합해 만듭니다." : "Our solutions combine these for each center."}</p>
        </div>
        <div className="grid gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {t.map((x) => (
            <div key={x.h} className="bg-white p-6 flex flex-col">
              <Img src={`/icons3d/${x.i}.webp`} alt="" className="w-12 h-12 mb-4" />
              <p className="text-[17px] font-bold text-gray-900 mb-1.5">{x.h}</p>
              <p className="text-[14px] text-gray-500 leading-relaxed break-keep flex-1">{x.d}</p>
              <p className="mt-4 text-[13px] font-semibold text-gray-700">{x.n}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products({ isKo, prefix }: L) {
  const items = [
    { t: isKo ? "코비아 CRM" : "CoreVia CRM", s: isKo ? "웰니스 센터 운영 웹 · 베타" : "Center operations web · Beta", href: `${prefix}/products/crm`, img: "/crm/today.webp", cover: true },
    { t: isKo ? "코비아 피트니스" : "CoreVia Fitness", s: isKo ? "운동·식단·몸무게 기록 앱" : "Workout, meal & weight app", href: `${prefix}/products/apps#fitness`, img: "/icon-512.png" },
    { t: isKo ? "코비아 리커버리" : "CoreVia Recovery", s: isKo ? "통증·재활 운동 기록 앱" : "Pain & rehab log app", href: `${prefix}/products/apps#recovery`, img: "/products/recovery-icon.png" },
    { t: isKo ? "코비아 스마트 체중계" : "CoreVia Smart Scale", s: isKo ? "앱에 자동 기록 · KC 인증" : "Saves to the app · KC certified", href: `${prefix}/products/scale`, img: "/products/scale-photo.jpg", cover: true },
  ];
  return (
    <section className="bg-[var(--corevia-bg)] border-y border-gray-100">
      <div className="max-w-[1120px] mx-auto px-5 py-20 md:py-24">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <Eyebrow>{isKo ? "직접 만든 제품" : "Products"}</Eyebrow>
            <H2>{isKo ? "솔루션의 바탕이 되는 제품" : "The products behind our solutions"}</H2>
          </div>
          <Link href={`${prefix}/products`} className="hidden sm:inline text-sm font-semibold text-gray-500 hover:text-gray-900 shrink-0">{isKo ? "제품 전체 →" : "All products →"}</Link>
        </div>
        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Link key={it.t} href={it.href} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 transition-colors">
              <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
                <Img src={it.img} alt={it.t} className={it.cover ? "w-full h-full object-cover object-left-top" : "w-16 h-16 sm:w-20 sm:h-20 rounded-[18px]"} />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-[15px] sm:text-[17px] font-bold text-gray-900 group-hover:text-[var(--corevia-primary)] transition-colors">{it.t}</p>
                <p className="text-[13px] sm:text-sm text-gray-500 mt-1 break-keep">{it.s}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ isKo }: L) {
  return (
    <section id="contact" className="bg-white scroll-mt-20">
      <div className="max-w-[1120px] mx-auto px-5 py-20 md:py-28 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>{isKo ? "AI 도입 상담" : "Talk to us"}</Eyebrow>
          <H2>{isKo ? <>센터의 하루를<br />먼저 들려주세요</> : <>Tell us about<br />your center&apos;s day</>}</H2>
          <p className="mt-5 text-[16px] text-gray-600 leading-relaxed break-keep">
            {isKo ? "어떤 일이 가장 손이 많이 가는지 남겨 주시면, 이메일로 현장 진단 일정을 안내해 드립니다." : "Tell us what takes the most effort and we'll email you to schedule an on-site diagnosis."}
          </p>
          <p className="mt-4 text-sm text-gray-400">support@coreviafitness.com</p>
        </div>
        {isKo ? <CrmInquiryForm kind="ax" /> : (
          <div className="rounded-2xl border border-gray-200 p-8">
            <a href="mailto:support@coreviafitness.com" className="text-lg font-bold text-[var(--corevia-primary)]">support@coreviafitness.com</a>
          </div>
        )}
      </div>
    </section>
  );
}

export default function HomeRenewal({ locale }: { locale: string; blog?: React.ReactNode }) {
  const isKo = locale === "ko";
  const l = { isKo, prefix: isKo ? "" : `/${locale}` };
  return (
    <div className="min-h-screen bg-white">
      <Mission {...l} />
      <Problems {...l} />
      <Fde {...l} />
      <Vision {...l} />
      <Tech {...l} />
      <Products {...l} />
      <Contact {...l} />
    </div>
  );
}
