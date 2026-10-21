import type { Metadata } from "next";
import CrmInquiryForm from "@/components/CrmInquiryForm";

// 웰니스 센터 CRM 소개 + 베타 도입 문의 (2026-10-21 대표 "실제로 셀링할 수 있는 수준으로. 베타 테스트인거 밝히고 문의 버튼")
// 포지셔닝(대표 10/21): 웰니스 CRM — 웰니스 전체가 확장 영역. 주간보호는 뭉뚱그리지 말고 "주간보호 운동 관리"로 정의.
// 결정: 위키 decision/vertical-wellness-crm. 화면은 가상 데모 센터(이름·번호 가상)를 실제 CRM 으로 띄워 캡처한 것.
// 문구 선: 진단·처방·치료·교정 효과 표현 금지, 측정값은 참고값·담당자 확인 / 도입 사례·숫자 지어내기 금지 / 가격은 문의 후 안내.
// 한국어 전용 페이지 — /en 도 한국어로 보여 주고 canonical 은 한국어 주소.

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export const metadata: Metadata = {
  title: "코비아 CRM — 웰니스 센터 CRM (베타) | CoreVia",
  description:
    "웰니스 센터를 위한 웹 CRM — 피트니스·PT샵, 필라테스, 주간보호 운동 관리, 재활·교정센터부터. 회원권 판매·결제 기록·예약·출석·급여 정산에 회원 앱 운동 기록과 측정 추이까지 한 화면에서. 베타 도입 센터를 모집합니다.",
  alternates: { canonical: `${siteUrl}/products/crm` },
  openGraph: { images: [{ url: `${siteUrl}/crm/today.webp`, width: 1600, height: 1000 }] },
};

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1600} height={1000} loading="lazy" className="w-full h-auto rounded-xl" />
    </figure>
  );
}

const CORE = [
  { title: "회원 대장", desc: "등록·검색·담당 배정·메모·태그. 엑셀로 한 번에 옮겨 오고, 종이 등록지는 사진을 찍으면 칸을 채워 줘요(주민번호는 가려요)." },
  { title: "회원권 판매·결제 기록", desc: "횟수권·기간권·패키지 판매, 카드 단말·현금·계좌이체 등 수단별 기록, 분할 결제와 미수금 관리." },
  { title: "홀딩·양도·업그레이드·환불", desc: "홀딩 상한, 휴관 일괄 연장, 양도와 차액 업그레이드, 공정위 표준약관 기준 환불 계산." },
  { title: "예약·시간표", desc: "PT 1:1과 그룹 수업 시간표, 정원과 대기자 자동 승격, 취소 마감과 노쇼 처리." },
  { title: "출석·체크인", desc: "태블릿에서 회원 앱 QR이나 연락처 뒷자리로 체크인. 만료·잔여 횟수 부족은 바로 경고." },
  { title: "락커", desc: "구역·번호별 배정과 만료일 관리, 곧 끝나는 락커 안내." },
  { title: "직원 권한·급여 정산", desc: "대표·관리자·매니저·트레이너 권한, 수업 수당·판매 커미션·기본급으로 월 정산표 만들기." },
  { title: "매출·리포트", desc: "일·주·월 매출, 상품별·담당별·수단별 통계, 재등록률과 가입 월별 리텐션. 엑셀로 내보내기." },
  { title: "상담·체험·재등록", desc: "문의자 관리와 체험 → 등록 전환, 만료 다가오는 회원 재등록 파이프라인." },
  { title: "전자계약", desc: "약관을 넣은 계약서를 현장 태블릿이나 회원 앱에서 서명받고 보관." },
];

const DIFF = [
  { title: "회원 앱 기록이 센터 화면으로", desc: "회원이 코비아 피트니스 앱에 남긴 운동·식단·체중계 기록이 동의를 받은 뒤 담당 트레이너 화면에 쌓여요. 수업 없는 날 무엇을 했는지 보고 상담할 수 있어요." },
  { title: "수업 완료 → 회차 차감 → 회원 확인", desc: "트레이너가 앱에서 수업을 마치면 회차가 자동으로 차감되고, 회원이 앱에서 확인해요. 차감 이의도 기록으로 남아요." },
  { title: "측정 기록과 추이", desc: "체력·체성분·기능 측정을 날짜별로 쌓고 추이를 봐요. 값은 참고값이며 담당자가 확인해 확정해요." },
  { title: "트레이너는 앱으로", desc: "담당 회원 목록, 운동 계획 보기와 수행 기록, 현장 측정 입력까지 트레이너 앱에서. 웹은 센터 관리자 화면이에요." },
];

const VERTICAL = [
  { title: "피트니스·PT샵·필라테스", items: ["PT 회차 차감과 회원 확인", "체력·체성분 측정 추이", "그룹 수업 정원·대기자", "회원 앱 운동·식단 기록 연결"] },
  { title: "주간보호 운동 관리", items: ["어르신 운동 평가(악력·의자 일어서기·TUG·4m 걷기)", "낙상·욕창·인지 위험 점수 기록", "평가 근거로 운동 계획 초안 → 담당자 확인", "오늘 운동 수행 기록·수행률과 12주 재평가", "보호자용 운동 리포트 링크·인쇄"] },
  { title: "재활·교정센터", items: ["통증 정도·가동범위·기능 검사 기록", "날짜별 추이와 담당자 확인", "회원 숙제 운동 기록(회원 앱)", "기록·안내 도구 — 판정 문구 없이"] },
];

const READY = ["회원·회원권·결제 기록·환불 계산·미수금", "예약·시간표·출석 체크인·락커", "직원 권한·급여 정산·매출 리포트", "전자계약·엑셀 가져오기·내보내기", "회원 앱 기록 연결(동의 후)·수업 완료 차감", "측정·운동 계획·보호자 리포트"];
const SOON = ["회원 온라인 카드 결제·결제 링크·정기 결제", "알림톡·문자 자동 발송", "출입문 단말(얼굴·QR) 연동", "네이버 예약 연동", "현금영수증·세금계산서 자동 발행"];

const FAQ = [
  { q: "설치가 필요한가요?", a: "아니요. 관리자 화면은 웹 브라우저로 접속하고, 트레이너는 코비아 피트니스 앱의 트레이너 모드를 씁니다." },
  { q: "지금 쓰는 프로그램의 회원 자료를 옮길 수 있나요?", a: "엑셀(CSV)로 회원과 이용권을 한 번에 가져올 수 있어요. 베타 센터는 자료 옮기는 과정을 함께 도와드려요." },
  { q: "회원 앱 기록은 누구나 볼 수 있나요?", a: "회원이 앱에서 개인정보 제공에 동의해야만 연결되고, 회원이 언제든 끌 수 있어요. 관리자가 볼 때는 2단계 인증을 거치고 열람 기록이 남습니다." },
  { q: "베타 기간 이용 조건은요?", a: "베타 참여 조건과 정식 요금은 문의를 주시면 센터 상황에 맞춰 안내해 드려요." },
];

export default function CrmPage() {
  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* 첫 화면 */}
      <section className="pt-20 pb-10 px-4">
        <div className="max-w-[1100px] mx-auto text-center">
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-semibold text-[var(--corevia-primary)]">
            베타 테스트 중 · 도입 센터 모집
          </span>
          <p className="text-sm font-semibold text-gray-500 mb-2">코비아 CRM · 웰니스 센터 CRM</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight mb-5">
            센터 운영과 회원 운동 기록을
            <br />
            한 화면에서
          </h1>
          <p className="text-lg text-gray-500 max-w-[680px] mx-auto mb-8">
            웰니스 센터를 위한 웹 CRM입니다. 피트니스·PT샵, 필라테스, 주간보호 운동 관리, 재활·교정센터부터 시작해요. 회원권 판매부터 급여 정산까지 센터 운영에 필요한 기능에, 회원 앱의 운동 기록과 측정 추이를 더했어요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#inquiry" className="px-8 py-3.5 bg-[var(--corevia-primary)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
              베타 도입 문의하기
            </a>
            <a href="#features" className="px-8 py-3.5 bg-white border border-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              기능 살펴보기
            </a>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto mt-12">
          <Shot src="/crm/today.webp" alt="오늘 관리 화면 — 오늘 매출, 이용 중 회원, 미수금, 오늘 수업, 재등록·만료 안내" />
          <p className="mt-3 text-center text-sm text-gray-400">오늘 관리 화면 · 가상의 데모 센터 자료로 찍은 실제 화면이에요</p>
        </div>
      </section>

      {/* 차별점 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">수업 밖의 시간까지 보이는 CRM</h2>
          <p className="text-gray-500 mb-10">센터 안에서 일어난 일만 남는 기존 CRM과 달리, 회원이 앱에 남긴 기록과 센터에서 잰 값이 같은 회원 카드에 모여요.</p>
          <div className="grid gap-4 md:grid-cols-2 mb-12">
            {DIFF.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Shot src="/crm/member.webp" alt="회원 카드 — 이용 중 수강권, 잔여 횟수, 차감·홀딩·양도·환불, 앱 연결" />
              <p className="mt-3 text-sm text-gray-400">회원 카드 — 이용권·차감·앱 연결</p>
            </div>
            <div>
              <Shot src="/crm/member-measure.webp" alt="회원 카드 측정 탭 — 체중·체지방률·골격근량·악력 등 날짜별 측정값과 담당자 확인" />
              <p className="mt-3 text-sm text-gray-400">측정 기록 — 날짜별 추이와 담당자 확인</p>
            </div>
          </div>
        </div>
      </section>

      {/* 기본 기능 */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">센터 CRM 기본 기능은 전부</h2>
          <p className="text-gray-500 mb-10">지금 쓰는 프로그램을 바꿔도 빠지는 기능이 없도록 만들었어요.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {CORE.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="text-base font-bold text-gray-800 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Shot src="/crm/schedule.webp" alt="예약·시간표 — 주간 PT와 그룹 수업, 정원과 대기자" />
              <p className="mt-3 text-sm text-gray-400">예약·시간표</p>
            </div>
            <div>
              <Shot src="/crm/reports.webp" alt="리포트 — 재등록률, 가입 월별 리텐션, 방문 빈도, 상품별 재등록률" />
              <p className="mt-3 text-sm text-gray-400">리포트 — 재등록률·리텐션</p>
            </div>
          </div>
        </div>
      </section>

      {/* 업종별 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">업종에 맞춰 달라지는 화면</h2>
          <p className="text-gray-500 mb-10">몸을 돌보는 웰니스 센터라면 어디든 쓸 수 있도록 넓혀 가고 있어요. 지금은 아래 업종부터 지원해요.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {VERTICAL.map((v) => (
              <div key={v.title} className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{v.title}</h3>
                <ul className="grid gap-2.5">
                  {v.items.map((i) => (
                    <li key={i} className="flex gap-2 text-[15px] text-gray-600 leading-snug">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--corevia-primary)]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400">측정값은 참고값이에요. 상태를 판정하지 않고, 담당자가 확인한 기록으로 운영합니다.</p>
        </div>
      </section>

      {/* 베타 현황 */}
      <section className="py-16 px-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">지금은 베타 테스트 기간이에요</h2>
          <p className="text-gray-500 mb-10">함께 써 보며 다듬어 갈 센터를 모집하고 있어요. 지금 되는 것과 준비 중인 것을 그대로 알려 드려요.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">지금 쓸 수 있어요</h3>
              <ul className="grid gap-2.5">
                {READY.map((i) => (
                  <li key={i} className="flex gap-2 text-[15px] text-gray-600"><span className="text-[var(--corevia-primary)] font-bold">✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">준비 중이에요</h3>
              <ul className="grid gap-2.5">
                {SOON.map((i) => (
                  <li key={i} className="flex gap-2 text-[15px] text-gray-500"><span className="text-gray-400">·</span>{i}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-400">결제는 지금도 카드 단말·현금·이체로 받은 내역을 같은 화면에 기록할 수 있어요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 개인정보·보안 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto grid gap-4 md:grid-cols-3">
          {[
            { t: "회원 동의가 먼저", d: "회원 앱 기록은 회원이 개인정보 제공에 동의해야 센터에 연결되고, 회원이 언제든 끌 수 있어요." },
            { t: "열람은 기록이 남아요", d: "관리자가 회원 앱 기록을 열 때 2단계 인증을 거치고, 누가 언제 봤는지 접속 기록이 남아요." },
            { t: "필요한 사람만", d: "트레이너는 담당 회원만, 매니저 이상은 센터 전체. 직원이 나가면 접근도 바로 끊겨요." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-base font-bold text-gray-800 mb-1.5">{x.t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section className="py-16 px-4">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">자주 묻는 질문</h2>
          <div className="grid gap-3">
            {FAQ.map((f) => (
              <details key={f.q} className="group bg-white border border-gray-200 rounded-2xl p-5">
                <summary className="cursor-pointer list-none font-semibold text-gray-800 flex justify-between items-center">
                  {f.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 */}
      <section id="inquiry" className="py-16 px-4 pb-24 bg-white scroll-mt-20">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">베타 도입 문의</h2>
          <p className="text-gray-500 mb-8 text-center">센터 상황을 남겨 주시면 이메일로 베타 참여 방법과 조건을 안내해 드려요.</p>
          <CrmInquiryForm />
        </div>
      </section>
    </main>
  );
}
