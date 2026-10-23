import Link from "next/link";
import CrmInquiryForm from "@/components/CrmInquiryForm";
import VisionDemoVideo from "@/components/home/VisionDemoVideo";

// 메인 — 회사 사명 중심 (2026-10-22 대표 "사명이랑 슬로건을 걸어놓고 왜 제품을 걸어놔", docs/site-renewal-2026-10.md 2차)
// 순서(벤치마킹: FDE 회사들 = 미션 문장으로 열고 → FDE 정의 → 원칙·단계 → 증거 → 연락 하나):
//   사명(슬로건만, 움직임) → 현장의 문제 → 보유 기술 → 직접 만든 제품 → 앞으로 만들 솔루션 ① FDE ② 영상 인식(준비 중) → 먼저 함께할 센터
// 10/22 대표 3차: "솔루션 1·2는 미래의 일, 첫 장에는 웰니스를 AI로 혁신합니다만, 애니메이션 효과(웰니스·AI·primary·로고)"
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

/** 첫 화면 움직임 — 로고 마크를 오른쪽 아래 모서리에 실제 비율 그대로 놓는다(10/22 대표 2차 "로고에 맞춰서, 좀 더 색감있게").
 *  로고 = 작은 사분원(사람·코어) + 그 둘레를 감싸고 비스듬히 위로 뻗는 띠(돌봄·성장). 비율은 public/logo-horizontal.png 실측.
 *  이야기: 일상의 기록(여러 색 점 = 체중·운동·통증·식단)이 코어로 모여들고(AI가 모은다),
 *          코어가 숨 쉬면 로고의 바깥 윤곽이 같은 모양으로 겹겹이 퍼져 나간다(AI가 넓힌 웰니스).
 *  색: 로고 남색 → primary 파랑 → 하늘·민트(웰니스)·보라(AI) 오로라, 따뜻한 산호색은 사람 쪽 점 둘에만.
 *  CSS·SVG만(스크립트 없음), 움직임 줄이기 설정이면 멈춘다. */
function HeroMotion() {
  const C = 850; // 로고 모서리 = 원의 중심(그림 오른쪽 아래에서 조금 안쪽 — 마크 전체가 보이게)
  const U = 200; // 띠 안쪽 반지름(로고 실측 비율: 코어 0.59 · 띠 바깥 꼭짓점 (-1.55,0)(-1.19,1.17)(0,1.56))
  const pt = (x: number, y: number, k = 1) => `${(C - x * U * k).toFixed(1)} ${(C - y * U * k).toFixed(1)}`;
  // 로고 바깥 윤곽 — 양 끝을 그림 밖(1100)까지 같은 기울기로 늘려 선이 허공에서 끊기지 않게
  const edge = (k: number) => {
    const u = U * k;
    const t0 = (1100 - C) / (1.17 * u), t2 = (1100 - C) / (1.19 * u);
    const sx = C - 1.55 * u - t0 * 0.36 * u, ex = C + t2 * 1.19 * u, ey = C - 1.56 * u - t2 * 0.39 * u;
    return `M ${sx.toFixed(1)} 1100 L ${pt(1.19, 1.17, k)} L ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  };
  const coreR = 0.59 * U;
  const core = `M ${C - coreR} ${C} A ${coreR} ${coreR} 0 0 1 ${C} ${C - coreR} L ${C} ${C} Z`;
  const band = `M ${pt(1.55, 0)} L ${pt(1.19, 1.17)} L ${pt(0, 1.56)} L ${C} ${C - U} A ${U} ${U} 0 0 0 ${C - U} ${C} Z`;
  const contours = [1.8, 2.5, 3.2];
  // 모여드는 기록 점: 시작 위치(모서리 기준 왼쪽·위로 떨어진 거리), 색, 길이, 시작 지연
  const flows = [
    { x: 560, y: 90, c: "#4285F4", d: 9, t: 0 }, { x: 470, y: 380, c: "#22C3E6", d: 8, t: -2 },
    { x: 230, y: 560, c: "#34D399", d: 10, t: -4 }, { x: 600, y: 300, c: "#8B5CF6", d: 11, t: -6 },
    { x: 400, y: 600, c: "#FF7A6B", d: 9.5, t: -1 }, { x: 120, y: 650, c: "#22C3E6", d: 12, t: -8 },
    { x: 330, y: 440, c: "#4285F4", d: 8.5, t: -5 }, { x: 520, y: 560, c: "#8B5CF6", d: 10.5, t: -3 },
    { x: 300, y: 200, c: "#34D399", d: 11.5, t: -9 }, { x: 620, y: 180, c: "#FF7A6B", d: 13, t: -7 },
    { x: 180, y: 360, c: "#8B5CF6", d: 9, t: -6.5 }, { x: 440, y: 120, c: "#4285F4", d: 12.5, t: -10 },
  ];
  return (
    <svg className="cv-hero-art" viewBox="0 0 1000 1000" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">
      <defs>
        <linearGradient id="cvBand" gradientUnits="userSpaceOnUse" x1="540" y1="850" x2="850" y2="540">
          <stop offset="0" stopColor="#1D4ED8" />
          <stop offset=".45" stopColor="#4285F4" />
          <stop offset=".8" stopColor="#22C3E6" />
          <stop offset="1" stopColor="#34D399" />
          <animateTransform attributeName="gradientTransform" type="rotate" values="0 720 720;360 720 720" dur="16s" repeatCount="indefinite" />
        </linearGradient>
        <linearGradient id="cvCore" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#0B2E7A" />
          <stop offset="1" stopColor="#5B4BDB" />
        </linearGradient>
        <linearGradient id="cvLine" gradientUnits="userSpaceOnUse" x1="0" y1="1000" x2="1000" y2="0">
          <stop offset="0" stopColor="#34D399" stopOpacity=".05" />
          <stop offset=".5" stopColor="#4285F4" stopOpacity=".4" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity=".5" />
        </linearGradient>
        {[["cvGlowA", "#22C3E6"], ["cvGlowB", "#8B5CF6"], ["cvGlowC", "#34D399"]].map(([id, c]) => (
          <radialGradient key={id} id={id}>
            <stop offset="0" stopColor={c} stopOpacity=".32" />
            <stop offset="1" stopColor={c} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>
      {/* 오로라 — 마크 뒤 번지는 색 */}
      <circle className="cv-drift" cx="700" cy="720" r="320" fill="url(#cvGlowA)" />
      <circle className="cv-drift" style={{ animationDelay: "-6s", animationDuration: "17s" }} cx="860" cy="480" r="260" fill="url(#cvGlowB)" />
      <circle className="cv-drift" style={{ animationDelay: "-11s", animationDuration: "21s" }} cx="500" cy="880" r="240" fill="url(#cvGlowC)" />
      {/* 로고 윤곽 등고선 — 바깥으로 갈수록 점선(데이터) */}
      {contours.map((k, i) => (
        <path key={k} d={edge(k)} fill="none" stroke="url(#cvLine)" strokeWidth="1.4" strokeLinejoin="round" strokeDasharray={i === 2 ? "2 9" : undefined} strokeLinecap="round" />
      ))}
      {/* 퍼지는 윤곽 — 로고 바깥선과 같은 모양 */}
      {[0, 1, 2].map((i) => (
        <path key={i} className="cv-echo" style={{ animationDelay: `${i * 2.4}s` }} d={edge(1)} fill="none" stroke="#4285F4" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      ))}
      {/* 모여드는 기록 */}
      {flows.map((f, i) => (
        <circle key={i} className="cv-flow" cx={C} cy={C} r={i % 3 === 0 ? 7 : 5} fill={f.c}
          style={{ "--fx": `${-f.x}px`, "--fy": `${-f.y}px`, animationDuration: `${f.d}s`, animationDelay: `${f.t}s` } as React.CSSProperties} />
      ))}
      {/* 로고 마크 */}
      <g className="cv-breathe">
        <path d={band} fill="url(#cvBand)" />
        <path className="cv-core" d={core} fill="url(#cvCore)" />
      </g>
    </svg>
  );
}

function Mission({ isKo }: L) {
  return (
    <section className="cv-hero relative overflow-hidden bg-white min-h-[calc(100svh-73px)] flex items-center">
      <style>{`
        .cv-hero-art{position:absolute;right:0;bottom:0;width:min(80vw,900px);height:auto;pointer-events:none}
        .cv-breathe{transform-origin:850px 850px;animation:cvBreathe 6s ease-in-out infinite}
        .cv-core{transform-origin:850px 850px;animation:cvCore 6s ease-in-out infinite}
        .cv-echo{transform-origin:850px 850px;opacity:0;animation:cvEcho 7.2s cubic-bezier(.2,.6,.3,1) infinite}
        .cv-flow{opacity:0;animation-name:cvFlow;animation-timing-function:cubic-bezier(.55,0,.8,.45);animation-iteration-count:infinite}
        .cv-drift{transform-box:fill-box;transform-origin:center;animation:cvDrift 13s ease-in-out infinite}
        .cv-rise{opacity:0;transform:translateY(18px);animation:cvRise .9s cubic-bezier(.2,.7,.2,1) forwards}
        @keyframes cvBreathe{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
        @keyframes cvCore{0%,100%{transform:scale(1)}50%{transform:scale(1.09)}}
        @keyframes cvEcho{0%{transform:scale(1);opacity:0}12%{opacity:.6}100%{transform:scale(3.6);opacity:0}}
        @keyframes cvFlow{0%{transform:translate(var(--fx),var(--fy));opacity:0}15%{opacity:.9}80%{opacity:.9}100%{transform:translate(-60px,-60px) scale(.3);opacity:0}}
        @keyframes cvDrift{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-40px,-30px) scale(1.12)}}
        @keyframes cvRise{to{opacity:1;transform:none}}
        @media (max-width:767px){.cv-hero-art{width:118vw;right:-18vw;bottom:-6vw;opacity:.9}}
        @media (prefers-reduced-motion:reduce){.cv-breathe,.cv-core,.cv-echo,.cv-flow,.cv-drift,.cv-rise{animation:none}.cv-rise{opacity:1;transform:none}.cv-echo,.cv-flow{display:none}}
      `}</style>
      <HeroMotion />
      <div className="relative w-full max-w-[1120px] mx-auto px-5 py-24">
        <h1 className="text-[52px] leading-[1.1] sm:text-[72px] md:text-[96px] md:leading-[1.04] font-bold text-gray-900 tracking-[-0.04em] break-keep">
          <span className="cv-rise block">{isKo ? "웰니스를" : "Transforming"}</span>
          <span className="cv-rise block" style={{ animationDelay: ".18s" }}>{isKo ? "AI로 혁신합니다" : "wellness with AI"}</span>
        </h1>
      </div>
      <a href="#problems" aria-label={isKo ? "아래로" : "Scroll"} className="absolute left-1/2 bottom-7 -translate-x-1/2 text-gray-400 hover:text-gray-700 transition-colors">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 9l6 6 6-6" /></svg>
      </a>
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
    <section id="problems" className="bg-[var(--corevia-bg)] border-y border-gray-100 scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-5 py-20 md:py-28 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>{isKo ? "현장의 문제" : "The problem"}</Eyebrow>
          <H2>{isKo ? <>웰니스 현장은 아직<br />손으로 일합니다</> : <>Wellness still runs<br />by hand</>}</H2>
          <p className="mt-5 text-[16px] md:text-[17px] text-gray-600 leading-relaxed break-keep">{isKo ? "코비아는 웰니스 전반에 걸친 다양한 페인 포인트를 AI로 풀어냅니다." : "CoreVia solves pain points across wellness with AI."}</p>
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
        <Eyebrow>{isKo ? "앞으로 만들 솔루션 01 · 웰니스 FDE · 준비 중" : "Coming · Solution 01 · Wellness FDE"}</Eyebrow>
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end mb-14">
          <H2>{isKo ? <>현장에 들어가<br />AI 도입을 이끌려 합니다</> : <>We will go on site and<br />lead AI adoption</>}</H2>
          <p className="text-[16px] md:text-[17px] text-gray-600 leading-relaxed break-keep">
            {isKo
              ? "FDE(Forward Deployed Engineering)는 엔지니어가 고객 현장에 들어가 문제를 직접 보고 풀어내는 방식입니다. 코비아는 피트니스 센터, 주간보호 운동 시설, 물리치료 시설을 상담하고 상황을 진단한 뒤, 우리가 만든 앱과 자동화 자산으로 AI 도입을 주도하는 일을 준비하고 있습니다."
              : "FDE (Forward Deployed Engineering) means engineers working inside the customer's site. We consult fitness centers, day-care exercise programs and physio facilities, diagnose the situation, and we are preparing to lead AI adoption with the apps and automations we've already built."}
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
        <p className="mt-5 text-sm text-gray-400 break-keep">{isKo ? "지금은 함께할 센터를 찾고 있습니다. 기간과 범위는 진단 뒤 센터와 함께 정합니다." : "We are looking for first partner centers. Scope is agreed after diagnosis."}</p>
      </div>
    </section>
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
          <Eyebrow>{isKo ? "앞으로 만들 솔루션 02 · 영상 인식 · 준비 중" : "Coming · Solution 02 · Vision"}</Eyebrow>
          <H2>{isKo ? <>스마트폰 카메라 하나로<br />자세와 운동을 숫자로</> : <>One phone camera,<br />posture and movement in numbers</>}</H2>
          <p className="mt-5 text-[16px] text-gray-600 leading-relaxed break-keep">{isKo ? "코비아 피트니스 트레이너 모드에 들어 있는 인식 기술을 센터와 기기에 붙일 수 있는 솔루션으로 만들고 있습니다." : "We are turning the recognition built into CoreVia Fitness trainer mode into a solution centers and devices can use."}</p>
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
          <VisionDemoVideo label={isKo ? "코비아 피트니스 트레이너 모드 체형분석 화면 녹화" : "Screen recording of posture analysis in CoreVia Fitness trainer mode"} />
          <p className="mt-3 text-center text-xs text-gray-400 break-keep">{isKo ? "실제 앱 화면 · 트레이너가 점을 옮기면 값이 다시 계산됩니다 · 인물은 AI로 만든 시연용 사진" : "Actual app screen · values update when the trainer moves a point · demo person is AI-generated"}</p>
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
          <Eyebrow>{isKo ? "먼저 함께할 센터" : "First partners"}</Eyebrow>
          <H2>{isKo ? <>센터의 하루를<br />먼저 들려주세요</> : <>Tell us about<br />your center&apos;s day</>}</H2>
          <p className="mt-5 text-[16px] text-gray-600 leading-relaxed break-keep">
            {isKo ? "준비 중인 솔루션을 먼저 써 보고 싶은 센터를 찾고 있습니다. 어떤 일이 가장 손이 많이 가는지 남겨 주시면 이메일로 연락드립니다." : "We're looking for centers to try our solutions first. Tell us what takes the most effort and we'll email you."}
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
      <Tech {...l} />
      <Products {...l} />
      <Fde {...l} />
      <Vision {...l} />
      <Contact {...l} />
    </div>
  );
}
