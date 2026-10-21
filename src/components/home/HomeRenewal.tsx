import Link from "next/link";
import Image from "next/image";
import CrmInquiryForm from "@/components/CrmInquiryForm";

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

/** 첫 화면 움직임 — 로고의 동심 사분원을 오른쪽 아래 모서리에서 그린다(10/22 대표 "웰니스와 AI, primary 색과 로고 느낌을 조합").
 *  웰니스 = 숨 쉬듯 천천히 커졌다 줄어드는 호(6초), AI = 모서리에서 퍼져 나가는 파란 신호, 데이터 = 호를 따라 움직이는 점.
 *  CSS·SVG만(스크립트 없음), 움직임 줄이기 설정이면 멈춘다. */
function HeroMotion() {
  const C = 1000; // 원의 중심 = 그림 오른쪽 아래 모서리
  const arc = (r: number) => `M ${C - r} ${C} A ${r} ${r} 0 0 1 ${C} ${C - r}`;
  const rings = [150, 270, 390, 510, 630, 750, 870, 990];
  const dots = [{ r: 390, d: 11, delay: 0 }, { r: 630, d: 15, delay: -5 }, { r: 870, d: 19, delay: -11 }, { r: 510, d: 13, delay: -8 }];
  return (
    <svg className="cv-hero-art" viewBox="0 0 1000 1000" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">
      <defs>
        <linearGradient id="cvArc" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4285F4" stopOpacity="0.05" />
          <stop offset="1" stopColor="#4285F4" stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <g className="cv-breathe">
        {rings.map((r) => <path key={r} d={arc(r)} fill="none" stroke="url(#cvArc)" strokeWidth={r < 300 ? 1.6 : 1.2} />)}
        {/* 로고의 두 조각(채운 사분원 + 띠) */}
        <path d={`M ${C - 120} ${C} A 120 120 0 0 1 ${C} ${C - 120} L ${C} ${C} Z`} fill="#0B3A8C" />
        <path d={`M ${C - 250} ${C} A 250 250 0 0 1 ${C} ${C - 250} L ${C} ${C - 175} A 175 175 0 0 0 ${C - 175} ${C} Z`} fill="#4285F4" />
      </g>
      {[0, 1, 2].map((i) => (
        <path key={i} className="cv-pulse" style={{ animationDelay: `${i * 2.6}s` }} d={arc(980)} fill="none" stroke="#4285F4" strokeWidth="2" />
      ))}
      {dots.map((x, i) => (
        <g key={i} className="cv-orbit" style={{ animationDuration: `${x.d}s`, animationDelay: `${x.delay}s` }}>
          <circle cx={C - x.r} cy={C} r="6" fill="#fff" stroke="#4285F4" strokeWidth="2.5" />
        </g>
      ))}
    </svg>
  );
}

function Mission({ isKo }: L) {
  return (
    <section className="cv-hero relative overflow-hidden bg-white min-h-[calc(100svh-73px)] flex items-center">
      <style>{`
        .cv-hero-art{position:absolute;right:0;bottom:0;width:min(78vw,860px);height:auto;pointer-events:none}
        .cv-breathe{transform-origin:1000px 1000px;animation:cvBreathe 6s ease-in-out infinite}
        .cv-pulse{transform-origin:1000px 1000px;opacity:0;animation:cvPulse 7.8s cubic-bezier(.2,.6,.3,1) infinite}
        .cv-orbit{transform-origin:1000px 1000px;animation-name:cvOrbit;animation-timing-function:linear;animation-iteration-count:infinite}
        .cv-rise{opacity:0;transform:translateY(18px);animation:cvRise .9s cubic-bezier(.2,.7,.2,1) forwards}
        @keyframes cvBreathe{0%,100%{transform:scale(1)}50%{transform:scale(1.035)}}
        @keyframes cvPulse{0%{transform:scale(.12);opacity:0}15%{opacity:.55}100%{transform:scale(1);opacity:0}}
        @keyframes cvOrbit{from{transform:rotate(0deg)}to{transform:rotate(90deg)}}
        @keyframes cvRise{to{opacity:1;transform:none}}
        @media (max-width:767px){.cv-hero-art{width:118vw;right:-18vw;bottom:-6vw;opacity:.9}}
        @media (prefers-reduced-motion:reduce){.cv-breathe,.cv-pulse,.cv-orbit,.cv-rise{animation:none}.cv-rise{opacity:1;transform:none}.cv-pulse{display:none}}
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

/** 앱 체형분석 촬영 안내에 쓰는 3D 마네킹 위에 관절점·어깨/골반 기준선을 얹은 설명 그림 (좌표계 600×900 = 원본 이미지) */
function PoseDiagram({ isKo }: { isKo: boolean }) {
  // 0 어깨L 1 어깨R 2 팔꿈치L 3 팔꿈치R 4 손목L 5 손목R 6 골반L 7 골반R 8 무릎L 9 무릎R 10 발목L 11 발목R
  const j: [number, number][] = [[217, 200], [383, 200], [205, 345], [397, 345], [200, 485], [402, 485], [256, 440], [344, 440], [248, 640], [352, 640], [232, 810], [370, 810]];
  const bones = [[0, 1], [0, 2], [2, 4], [1, 3], [3, 5], [0, 6], [1, 7], [6, 7], [6, 8], [8, 10], [7, 9], [9, 11]];
  return (
    <div className="cv-pose relative rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <Image src="/vision/mannequin-front.webp" alt="" width={600} height={900} className="w-full h-auto" />
      <svg viewBox="0 0 600 900" className="absolute inset-0 w-full h-full" role="img" aria-label={isKo ? "사람 모형 위에 관절점과 어깨·골반 기준선을 표시한 설명 그림" : "Joints and shoulder and pelvis lines over a body model"}>
        <defs>
          <linearGradient id="cvScan" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#4285F4" stopOpacity="0" />
            <stop offset="1" stopColor="#4285F4" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <rect className="cv-scan" x="0" y="-120" width="600" height="120" fill="url(#cvScan)" />
        <line x1="120" y1="200" x2="480" y2="200" stroke="#94A3B8" strokeWidth="2" strokeDasharray="8 8" />
        <line x1="150" y1="440" x2="450" y2="440" stroke="#94A3B8" strokeWidth="2" strokeDasharray="8 8" />
        {bones.map(([a, b], i) => <line key={i} x1={j[a][0]} y1={j[a][1]} x2={j[b][0]} y2={j[b][1]} stroke="#4285F4" strokeOpacity="0.75" strokeWidth="4" strokeLinecap="round" />)}
        {j.map(([x, y], i) => <circle key={i} className="cv-joint" style={{ animationDelay: `${i * 0.08}s` }} cx={x} cy={y} r="9" fill="#fff" stroke="#0B3A8C" strokeWidth="4" />)}
        <g fontSize="26" fontWeight="700" fill="#0B3A8C">
          <text x="486" y="194">{isKo ? "어깨" : "Shoulder"}</text>
          <text x="456" y="434">{isKo ? "골반" : "Pelvis"}</text>
        </g>
      </svg>
      <style>{`
        .cv-pose .cv-scan{animation:cvScan 4.5s ease-in-out infinite}
        .cv-pose .cv-joint{transform-box:fill-box;transform-origin:center;animation:cvJoint 4.5s ease-out infinite}
        @keyframes cvScan{0%{transform:translateY(0)}70%,100%{transform:translateY(1020px)}}
        @keyframes cvJoint{0%,8%{transform:scale(.4);opacity:0}18%{transform:scale(1.25);opacity:1}26%,100%{transform:scale(1);opacity:1}}
        @media (prefers-reduced-motion: reduce){.cv-pose .cv-scan{display:none}.cv-pose .cv-joint{animation:none}}
      `}</style>
    </div>
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
        <div className="max-w-[320px] w-full mx-auto">
          <PoseDiagram isKo={isKo} />
          <p className="mt-3 text-center text-xs text-gray-400">{isKo ? "설명 그림 · 체형분석 촬영 안내 모형에 관절점 표시" : "Illustration · joints on the capture-guide body model"}</p>
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
