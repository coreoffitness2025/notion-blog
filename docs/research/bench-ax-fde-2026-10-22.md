# FDE · AX 컨설팅 홈페이지 벤치마크 (2026-10-22)

> 목적: CoreVia를 "웰니스 AX" 회사로 다시 세우면서 홈페이지 정보 구조(IA)와 디자인 방향을 정하기 위한 벤치마크.
> 수집 방법: WebFetch(텍스트 변환본), curl로 받은 원본 HTML에서 색상·폰트·동영상 태그 추출, WebSearch 검색 결과 요약.
> **검증 수준 표기**
> - [A] 본문 텍스트 전체 확인
> - [B] CMS 데이터 문자열만 확인, 실제 레이아웃은 못 봄
> - [C] 검색 요약만 확인, 원문 페이지는 못 받음
> - [X] 접속 실패, 준비 중 페이지, 또는 일부만 받음
>
> **시각 스타일**: WebFetch로는 색과 모션을 볼 수 없다. 원본 HTML에서 hex 코드·폰트·`<video>`·`canvas` 태그를 직접 뽑은 4곳(올거나이즈·Distyl·업스테이지·deploy.co)만 적었고, 나머지는 **미확인**으로 둔다. 썸네일 파일명 같은 것으로 짐작해서 채우지 않았다.

---

## 1. 사이트별 기록

### 1-1. OpenAI Deployment Company — https://deploy.co/  [A] ⭐ 가장 가까운 사례
- 접속 경로: `https://tomoro.ai/`가 301 리다이렉트로 `https://deploy.co/`에 연결된다. 보도된 Tomoro 인수와 맞아떨어지지만 페이지 본문에 Tomoro 언급은 없다. **인수 관계는 미확인**.
- **히어로**: "On the frontlines of AI deployment" / "Forward deployed engineering at OpenAI" / "We partner with organizations to solve high-impact problems using AI." **제품 화면 없이 미션 문장만** 있다. CTA는 "Read the announcement".
- **섹션 순서**: 히어로 → *What is forward deployed engineering (FDE)?* → *How FDE teams work* → 사례 2건(BBVA, John Deere) → *From deployment to real product solutions* → *Get in touch* → 푸터. 페이지가 짧다.
- **진행 과정 표현**: 번호 붙은 단계 대신 **일하는 원칙 4개**를 보여준다. "Build from first principles", "Prioritize speed and real-world impact", "Work directly with domain experts", "Deliver early value, then iterate toward scale". 그림은 01→02→03 화살표 하나뿐이다.
- **증거**: 사례 2건과 수치(BBVA 25개국 12만 명 확산, John Deere 농약 사용 70% 감소). 로고 벽은 없다.
- **기술 표현**: 텍스트로만 적었다(Agent SDK, 평가 시스템, 벤치마킹 도구). 아키텍처 도표는 없다.
- **CTA**: "Read the announcement", "Learn more", "Get in touch"(mailto). **대화 요청 하나로 끝낸다.**
- **시각**: 원본 HTML에 `<video>` 4개. 추상 그래픽(점과 화살표 다이어그램, 원형 4점), 파스텔·라임·파랑·회색·라벤더 포인트 색. 텍스트 중심 레이아웃이다.
- **CoreVia에 적용할 점**: IA는 거의 그대로 가져올 만하다. **색은 가져오지 않는다.** 포인트 색이 4~5개라서 대표가 정한 규칙(파랑 한 계열 + 빨강 하나, "컬러 왤케 다채로워")과 정면으로 부딪힌다.

### 1-2. Palantir — https://www.palantir.com/  [B]
- WebFetch로는 빈 페이지만 돌아왔다(JS 렌더링). curl로 HTML을 받아 CMS JSON 문자열만 뽑았다. **섹션 순서와 레이아웃은 직접 보지 못했다.**
- **확인한 문구**: "Get AI Into Operations"(헤딩), "Foundational Software of Tomorrow. Delivered Today.™", 제품 3개를 각각 "Operating System for the Modern Enterprise / for Global Decision Making / for Continuous Delivery"(Foundry·Gotham·Apollo)로 설명, "Now in over 50 sectors and industries worldwide.", 섹션 이름 "What Makes Palantir Platforms Powerful", "Category-Defining Technology".
- **증거**: 애널리스트 평가 인용(Dresner No.1, IDC 점유율 1위, Forrester Wave Leader 인용문)이 **고객 로고보다 앞에 나온다**. "Impact Studies" 목록(Airbus, Cleveland Clinic, Tampa General Hospital 등)도 있다.
- **창업자 목소리**: "Read CEO Alex Karp's Letter to Shareholders", "The Technological Republic"을 홈 블록으로 둔다.
- **CTA**: "Get Started", "Request a Demo", 서브내비 "AIP Bootcamps", "Start Building Now".
- **진행 과정(부트캠프)** [C]: Palantir 블로그 검색 요약 기준으로 "zero to use case in **1–5 days**", 실습 위주로 진행한다. 실적 발표에서는 기존 파일럿이 1~3개월 걸리던 것과 비교했다. 원문(https://blog.palantir.com/deploying-full-spectrum-ai-in-days-how-aip-bootcamps-work-21829ec8d560)은 열지 못했고, 부트캠프 페이지도 curl로 본문을 얻지 못했다.
- **시각**: **미확인**. 흑백 위주에 타이포그래피가 이끄는 화면이라는 건 기억에 기댄 인상이고 이번에 검증하지 않았다.

### 1-3. Scale AI — https://scale.com/  [A]
- **히어로**: "The world's most important decisions need reliable AI systems." / "Reliable AI has no shortcuts." / "Humans stay in the loop." **제품 스크린샷이 없다.** 분야 라벨(Research·Medicine·Energy·Robotics·Sovereignty)을 붙인 사진 타일을 쓴다.
- **섹션 순서**: 히어로 → Applications("AI systems that actually work.") → Data → 산업 태그 → 활용 사례 이미지 그리드 → 고객 사례 카드 → "Proven across every industry" → 신뢰 카드 3개(10 years 등) → 블로그·뉴스 → 마무리 CTA("Our legacy, your success.") → 푸터.
- **진행 과정**: 문장 하나로만 말한다. "use case를 찾고 → 시스템을 만들고 → 결과를 책임진다." 도표는 없다.
- **증거**: 로고 줄, "90% of leading GenAI model builders", 기여자 25%가 석·박사.
- **CTA**: "Get Started", "Book a demo today…".
- **시각**: 미확인(사진 타일 사용은 확인).

### 1-4. Claude Enterprise — https://claude.com/solutions/enterprise  [A]
- `https://www.anthropic.com/enterprise`는 301로 claude.com에 연결된다. **Anthropic에는 FDE를 따로 소개하는 마케팅 페이지가 없다.** 지원은 Platform 등급의 "Anthropic-supported onboarding / Deployment support"로만 나온다.
- **히어로**: "The frontier, on every desk" / "Put Claude to work across your organization…". CTA 2개.
- **섹션 순서**: 히어로 → 로고와 인용문(수치 포함) → Built for enterprise(보안·컴플라이언스 체크리스트) → 도입 방식 2갈래 → 제품 카드 → 커넥터 → 직무별 탭(예시 프롬프트와 결과) → 가격 → 플랫폼 계층 → 고객 사례 → 지원 등급 → FAQ → 자료 → CTA.
- **증거**: 큰 숫자 인용("10 weeks → 10 minutes"), 로고 벽, 컴플라이언스 배지.
- **CoreVia에 적용할 점**: 직무별 탭에 "예시 입력 → 결과"를 보여주는 방식은 쓸 만하다. 시설 유형별 탭(피트니스 센터, 주간보호, 물리치료)으로 바꾸면 된다. 나머지는 고객이 많은 회사의 구성이라 지금 CoreVia에는 맞지 않는다.

### 1-5. Distyl AI — https://www.distyl.ai/  [A] (Palantir 출신이 만든 FDE형 회사)
- **히어로**: 카테고리 라벨 "AI-Native Operations", 헤드라인 "Rearchitecting industries for frontier AI", 서브 "Distyl helps world institutions rearchitect their systems for abundant intelligence." 이어서 투자사 이름(Coatue, OpenAI, Lightspeed, Microsoft, Khosla).
- **섹션 순서**: Overview → What We Do → Distyl in Numbers → Solutions by Industry(Healthcare 포함) → Platform → Research → Company → Contact.
- **진행 과정**: 산문으로만 적었다(전략 → 시스템 설계 → 운영 배포 → 모니터링 → 지속 개선).
- **증거**: 숫자 블록(50개 넘는 배포, 연 10억 건 넘는 의사결정, 수작업 검토 80% 감소, 12개 산업), 투자사 이름.
- **기술**: 텍스트만("composable routines, policy-aware execution, built-in auditability").
- **시각**: HTML에서 `#0066ff` 한 색과 `canvas` 2개를 확인했다. **파랑 한 색 + 캔버스 모션**이라 CoreVia 색 규칙과 가장 잘 맞는 사례다. 그 밖의 레이아웃은 미확인.

### 1-6. 업스테이지 — https://www.upstage.ai/  [A]
- **히어로**: "Supercharge / Insurance / Finance / Healthcare / Manufacturing / with AI."(산업명이 돌아가며 바뀐다) / "Experience the future of work." CTA "Try Studio", "Developer Console". 히어로 바로 아래에 고객 로고.
- **섹션 순서**: 공지 배너 → 히어로 → 제품 카드 3개 → 산업 4개 → 고객 추천사 캐러셀 → 배포 방식(Console / AWS / 온프레미스) → "Proven excellence in AI"(수상, 논문 140편 넘음, Open LLM 리더보드 1위) → 푸터(SOC·HIPAA·ISO 배지).
- **진행 과정**: 없다. 배포 방식 3갈래가 그 자리를 대신한다.
- **증거 중 CoreVia가 빌릴 수 있는 것**: **고객이 아니라 기술 성과**(논문, 리더보드, 인증)를 내세우는 블록.
- **시각**: HTML에서 `#4d65ff` 한 색 확인. 나머지는 미확인.

### 1-7. 올거나이즈 — https://www.allganize.ai/ko/home  [A]
- **히어로**: "엔터프라이즈 AI 전환의 *새로운 기준*" / "실제 업무를 끝까지 해내는 AI Coworker…" / 진행 과정을 한 줄로: **"아이디어 → 데이터 정제 → 파일럿 → 본 도입까지, 한 흐름으로."** CTA "데모 요청하기"(주), "제품 살펴보기"(보조).
- **섹션 순서**(15개, 매우 길다): 내비 → 히어로(배지 3개) → 진행 과정 애니메이션(프롬프트 → 문서 분석 → 출처 교차 확인 → ERP 자동 입력) → 연동 로고와 데모 영상 → 문제 정의 → 차별점 카드 4개 → 증거(300개 넘는 기업, 인증, 지역별 로고) → **기술 4계층(LLM·RAG·Control·Agents)과 아키텍처 도표** → 업데이트 → 제품 블록 6개 → 배포 옵션 → 수치와 추천사 → 블로그 → CTA와 FAQ → 푸터.
- **정직한 표기**: UI 목업에 **"Concept", "예시 화면 · 가상 데이터"** 라벨을 붙인다. FAQ에는 "첫 미팅 후 몇 주 안에 PoC를 확인할 수 있다"고 적었다.
- **CTA**: "빠른 PoC, 전담 전문가와 일정 협의하기"처럼 **무엇을 받는지 구체적으로 적은** 버튼이 눈에 띈다.
- **시각**: HTML에서 보라 계열 여러 색(#7986ff, #a78bff, #3b3ba8, #7420ff, #eef0ff), 짙은 배경 #0a0b14, 모노스페이스 폰트(SF Mono / JetBrains Mono) 대량 사용, `<video>` 3개. "Layer 01" 라벨, 터미널 같은 작업 로그, 체크 표시가 있다. 개발자 도구 같은 인상이다.

### 1-8. 마키나락스 — https://www.makinarocks.ai/  [A]
- **히어로**(캐러셀 2장): "Transforming Industries with Specialized AI" / "Deploying AI, Delivering Reality". CTA "Get started", "Learn more".
- **섹션 순서**: 히어로 → 고객 로고 벽(약 40개) → 제품(Runway, DrawX 스크린샷) → 산업·에이전트 카드 → 뉴스 → CTA → 푸터(ISO 9001/27001, GS인증, 방산혁신기업100).
- **진행 과정**: 없다. **증거**는 로고와 인증, 뉴스.
- **시각**: 미확인.

### 1-9. 스켈터랩스 — https://www.skelterlabs.com/  [A]
- **히어로**: "Specialized AI for Enterprise" / "기업의 맥락을 이해하는 특화 AI 솔루션". CTA "기업 특화 AI 패키지 알아보기 →".
- **섹션 순서**: 히어로 → **4단계 진행 과정**(use case 발굴 → 개발·배포 → 기존 시스템 연동 → 성과 평가·유지보수, 24시간 모니터링과 정기 진단) → 오퍼링 카드 5개 → **문의 폼을 홈에 바로 노출**(1~3영업일 안에 회신) → 블로그 → CTA → 푸터(회사소개서 다운로드).
- **증거**: 로고와 수치 없이 사례 글 제목(금융, 경찰, 병원)과 회사소개서로 대신한다. **고객 로고 없이 짠 한국 사이트의 실제 예**다.
- **시각**: 미확인.

### 1-10. 포티투마루 — https://www.42maru.ai/  [A]
- **히어로**(슬라이더): "ANSWERING AI / SINGLE SPECIFIC ANSWER", "MATCHLESS TECHNOLOGY". CTA "Technology", "Solutions".
- **섹션 순서**: 히어로 → 솔루션 그리드 → 사례 카드 → Success Stories → 고객 로고 → 수상(SQuAD 2.0 1위 등) → 파트너 → 블로그.
- **증거**: **기술 대회 순위**(SQuAD 1위)를 앞세운다. 진행 과정은 없다.
- **시각**: 미확인.

### 1-11. SK AX — AX 컨설팅 https://www.skax.co.kr/ax-services/ax-consulting  [A]
- **히어로**: "기업의 전사적 AI 도입을 위해 AI 전략 수립부터 솔루션 구현까지 End-to-End 컨설팅을 제공합니다." 산업 현장 사진.
- **섹션 순서**: Highlights(3) → Features(3) → Experiences(STORY 사례) → Use Cases → 교육 서비스 → Insights → CTA("복잡한 기술도 쉽게, 당신의 비즈니스를 전문가와 함께 고민하세요") → 푸터.
- **진행 과정**: 이름 붙은 단계는 없다. 역량 3묶음(비전·로드맵 → 프로세스 재설계 → use case 실행·검증 → 구축 전환)으로 보여준다.
- **증거**: **고객명을 익명으로 쓴 사례**("금융 N사", "제조 D사")에 수치를 붙인다(복구 48시간 → 2시간 등).
- **CTA**: "문의하기", "자료 다운로드", "뉴스레터 구독".

### 1-12. 삼성SDS — https://www.samsungsds.com/kr/index.html  [A]
- **히어로**: "**내일**의 기술을 **내 일**의 기술로". 서브 카피는 없다. **말장난 한 줄짜리 타이포**.
- **섹션 순서**: 히어로 → 인사이트 카드 → "다차원 AI 풀스택" → 보도자료 → "무엇이든 물어보세요" → 리소스 → 회사 한눈에 보기 → 뉴스레터 → 수상 → 인사이트 → 솔루션 → 로고 → 푸터.
- **AX 정의 문장**: "AI는 업무를 바꾸지만, AX는 비즈니스를 바꿉니다." **AI와 AX를 한 문장으로 구분**한 카피라 참고할 만하다.
- 콘텐츠가 매우 많은 대기업형 구성이라 CoreVia에는 맞지 않는다.

### 1-13. LG CNS — https://www.lgcns.com/  [X 일부]
- 히어로 "새로운 세상을 기술합니다." / "기업에 최적화된 서비스로 더 나은 내일을 만들어 갑니다". 사업 카드 그리드(AI, Consulting, Smart Factory 등). 진행 과정과 증거는 받은 텍스트에 없었다. **AX 전용 페이지는 찾지 못했다.**

### 1-14. Accenture Data & AI — https://www.accenture.com/us-en/services/data-ai  [A]
- **히어로**: "AI and data" / "In the last 30 years, no technology has promised to change everything…". 일러스트.
- **섹션 순서**: 히어로와 통계 → 서비스 카드 8개 → 트렌드 → 파트너 로고(Anthropic·OpenAI·NVIDIA 등) → 수상 → 뉴스 → 리더 소개 → 채용.
- **증거**: **제3자 설문 통계**("97%가…", "9%만 완전 배포")로 문제의 크기를 보여준다. 진행 과정은 없다. CTA는 대부분 "Learn more".

### 1-15. 13Labs — AI Consulting for Fitness & Gyms https://www.13labs.au/services/consulting/for/fitness-gyms  [A] (피트니스 업종 사례)
- **히어로**: "AI Consulting for Fitness & Gyms" / "Fitness & Gyms businesses deal with managing class schedules and capacity limits. AI Consulting fixes that." 고정가 견적, 시간당 과금 없음.
- **섹션 순서**: 히어로 → 통계 3개(Deloitte·Accenture 인용) → 출처 없는 인용문 → 업종 문제 4개 → 추천 적용 3개 → 기대 성과 → **4단계**(Discovery → Scoping & quote → Build → Launch & handover) → 지역 → At a Glance 표 → FAQ 7개 → 마무리 CTA.
- **고객 없이 증거를 보여주는 방식**: "**코드와 데이터는 고객 소유**", "첫날부터 추적을 걸어 실제 숫자로 보여준다", "사례는 공개하지 않고 통화에서 보여준다", "Last updated" 날짜.
- **⚠️ 반면교사**: 업종 이름만 바꿔 끼운 **프로그램형 SEO 템플릿 페이지**다. 같은 문장이 섹션마다 반복되고, 표가 앞의 문제 목록과 맞지 않으며, 인용문에 출처가 없다. 제3자 통계가 자기 실적 자리를 대신한다. "AI 템플릿처럼 보이는" 페이지가 실제로 어떤지 보여주는 표본이다.

### 1-16. 접속 실패 / 확인하지 못한 곳
- McKinsey QuantumBlack — https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients 두 번 모두 타임아웃. https://www.quantumblack.com/ 은 DNS 실패. **미확인**.
- Alta DX(피트니스 전문 applied AI, 옛 Alta Technology Group과 DXFactor 합병) — 검색 기사(https://athletechnews.com/alta-technology-group-dxfactor-merge-to-form-applied-ai-brand-alta-dx/)로만 확인. https://www.altadx.com/ 은 이름만 같은 다른 회사의 "Coming Soon" 페이지로 보인다. **실제 홈페이지는 미확인**.
- 원티드랩 AX(엔노이아, AX 챔피언) — 기사만 확인했고 공식 AX 페이지는 찾지 못했다.
- OpenAI 헬스케어 FDE — 채용 공고만 있고 마케팅 페이지는 없다(검색 결과 [C]).

---

## 2. 가로로 비교해서 본 관찰

| 질문 | 관찰 |
|---|---|
| 제품 화면 없이 미션으로 여는가 | deploy.co, Scale, Distyl, 삼성SDS, SK AX는 **미션·문장형 히어로**다. 반면 **한국 AI 스타트업(업스테이지, 올거나이즈, 마키나락스)은 히어로 바로 아래에 제품 카드와 목업**이 나온다. FDE를 브랜드로 건 곳일수록 제품 화면을 뒤로 미룬다. |
| 진행 과정 표현 | 번호 붙인 단계: 스켈터랩스(4), 13Labs(4), 올거나이즈(한 줄 화살표와 애니메이션). **원칙형**: deploy.co(4개 원칙). **기간 약속**: Palantir "1–5 days"[C], 올거나이즈 "몇 주 안에 PoC". 글로벌 대형사는 대부분 진행 과정을 아예 그리지 않는다. |
| 고객 로고 없이 증거 보여주기 | ① **방법을 공개**(deploy.co 원칙, 스켈터 4단계, 13Labs "코드·데이터 고객 소유") ② **목업임을 밝히고 보여주기**(올거나이즈 "예시 화면 · 가상 데이터") ③ **창업자 목소리**(Palantir CEO 편지) ④ **기술 성과·인증**(업스테이지 논문과 리더보드, 42마루 SQuAD, 마키나락스 ISO) ⑤ **익명 고객 사례**(SK AX "금융 N사"; CoreVia는 지금 쓸 수 없고 나중을 위해 메모) |
| 기술 표현 | 계층 도표(올거나이즈 4계층과 아키텍처), 텍스트 3~4줄(Distyl, deploy.co), 파트너 로고(Accenture). 고객이 없는 회사에는 **계층 도표가 가장 설득력 있다.** |
| CTA | 글로벌 FDE형은 **"Get in touch" 하나**. 한국은 "데모 요청 / 문의하기 / 자료 다운로드" 여러 개. 가장 좋은 문구는 올거나이즈의 "빠른 PoC, 전담 전문가와 일정 협의하기"로, 받을 것을 구체적으로 말한다. |
| 시각 | 확인한 4곳 중 **한 색만 쓰는 곳**: Distyl #0066ff, 업스테이지 #4d65ff. **여러 색**: 올거나이즈 보라 5색, deploy.co 파스텔 4색. 모션은 `<video>`(deploy 4, 올거나이즈 3)와 `canvas`(Distyl). |

---

## 3. CoreVia가 가져올 패턴 (7)

1. **미션 문장 하나로 여는 히어로, 제품 화면은 넣지 않는다** (deploy.co, Scale, 삼성SDS). 큰 타이포 + 짧은 서브 + CTA 하나. 시각 요소는 파랑 한 계열의 추상 모션(Distyl의 canvas처럼) 하나로 충분하다. 가능하면 동작 인식 키포인트 선 같은 **CoreVia 기술 자체에서 나온 형태**를 쓴다.
2. **"FDE가 뭔가"를 한 섹션으로 정의한다** (deploy.co "What is FDE?", 삼성SDS "AI는 업무를, AX는 비즈니스를"). 예: "툴을 팔고 끝나는 컨설팅이 아니라, 센터에 들어가서 직접 붙이고 돌아가게 만든다." 웰니스 현장 버전으로 한 문장 정의를 만든다.
3. **일하는 방식은 원칙 3~4개, 진행 과정은 4단계로** (deploy.co 원칙 + 스켈터·13Labs 단계). 예: 현장 진단 → 첫 자동화 하나 → 붙여서 운영 → 넘겨주고 측정. **기간은 실제로 해본 것만 적는다.** Palantir의 1–5일은 참고 기준일 뿐 약속 문구로 옮기지 않는다.
4. **시설 유형별 탭으로 "예시 입력 → 결과"를 보여준다** (claude.com 직무 탭을 웰니스판으로). 피트니스 센터 / 주간보호 / 물리치료 탭마다 "지금 손으로 하는 일 → AX 후 모습"을 2~3줄로. 화면을 넣는다면 올거나이즈처럼 **"예시 화면 · 가상 데이터" 라벨을 반드시 붙인다.**
5. **기술은 계층 도표 한 장으로** (올거나이즈 4계층). 예: 데이터(기록·체성분·운동) → 인식(비전 동작 인식·센서 BLE) → 판단(코치 엔진·회원 맥락) → 실행(앱·CRM·알림). 계층마다 한 줄 설명을 단다.
6. **고객 로고 대신 "직접 만들어 운영 중인 것"을 증거로** (업스테이지·42마루의 기술 성과 블록을 응용). CoreVia가 실제로 가진 자산만 쓴다. 양 스토어에 출시된 Fitness·Recovery 앱, 판매 중인 체중계(KC 인증 완료), 배포된 센터 CRM. 각 카드에 "무엇을 증명하는가"(예: "BLE 기기 연동을 직접 출시했다")를 한 줄 적는다. **다운로드 수나 성과 수치는 출처가 없으면 쓰지 않는다.**
7. **창업자 노트 블록과 구체적인 CTA 하나** (Palantir CEO 편지, 올거나이즈 PoC 문구, 13Labs "코드·데이터 고객 소유"). CTA 예: "현장 진단 일정 잡기". 바로 옆에 진단에서 무엇을 받는지 한 줄을 붙인다.

## 4. "AI 템플릿처럼 보이는" 안티패턴 (5) — 실제로 본 예와 대표 기록을 근거로

1. **업종 이름만 바꿔 끼운 문장과 반복 문단** (13Labs: 섹션마다 같은 "Our approach" 문장, 문제 목록과 맞지 않는 At a Glance 표). → 섹션마다 다른 정보를 담고, 같은 형용사를 반복하지 않는다.
2. **출처 없는 인용문, 남의 통계로 내 실적 대신하기** (13Labs 무기명 인용, Deloitte·Accenture 수치; Accenture 설문 통계 나열). → 출처 없는 숫자는 "없음"으로 둔다.
3. **포인트 색이 많은 그라데이션과 파스텔** (올거나이즈 보라 5색, deploy.co 파스텔 4색). 대표 기록 "컬러 왤케 다채로워"에 걸린다. → 파랑 한 계열 + 빨강 하나.
4. **왼쪽 색 띠 + i 아이콘 + 옅은 배경색 안내 박스, "AI"를 판매 단어로 강조하기** (대표 피드백 기록: AI 티 나는 안내 박스 금지, AI 강조 금지). → 안내는 회색 한 줄로. "AI"는 슬로건에 한 번만 쓰고, 나머지는 현장 언어("수업 기록", "평가", "재방문")로 쓴다.
5. **아이콘 카드 3×N 그리드와 "Learn more" 반복, 섹션 15개짜리 긴 페이지** (Accenture 카드 8개 + Learn more, 올거나이즈 15섹션, LG CNS 카드 그리드). → 섹션 7~8개 안에서 섹션마다 다른 레이아웃을 쓰고, CTA는 하나로.

## 5. 추천 섹션 순서 (미션형 홈)

| # | 섹션 | 내용 | 근거 |
|---|---|---|---|
| 1 | **히어로** | "웰니스를 AI로 혁신합니다" + 서브 "웰니스 전반에 걸친 다양한 페인 포인트를 AI로 풀어냅니다." 타이포 중심, 파랑 한 계열 추상 모션, **제품 화면 없음**. CTA 하나 | deploy.co, Scale, 삼성SDS |
| 2 | **우리가 푸는 문제 / FDE 정의** | 웰니스 현장(센터·주간보호·물리치료)의 페인 포인트 3개, "현장에 들어가 직접 붙인다"는 한 문장 정의 | deploy.co "What is FDE", 삼성SDS AX 정의 |
| 3 | **솔루션 ① 웰니스 AX (FDE)** | 시설 유형 탭별 "지금 → AX 후" 예시와 일하는 원칙 3~4개 | claude.com 탭, deploy.co 원칙 |
| 4 | **솔루션 ② 비전 동작 인식** | 무엇을 인식하는지(자세·관절 각도·반복), 어디에 쓰는지. 화면이 필요하면 "예시" 라벨 | 올거나이즈 라벨 표기 |
| 5 | **함께 일하는 방식 (4단계)** | 현장 진단 → 첫 자동화 → 운영 연결 → 인계·측정. 기간은 실제 해본 것만 | 스켈터·13Labs 4단계, Palantir 부트캠프[C] |
| 6 | **기술 / 역량** | 4계층 도표(데이터 → 인식 → 판단 → 실행), 계층마다 한 줄 | 올거나이즈 4계층 |
| 7 | **증거 자산 = 직접 만든 제품** | Fitness 앱 · Recovery 앱 · 체중계(KC) · 센터 CRM. 카드마다 "이것이 증명하는 역량" 한 줄. 수치는 출처가 있는 것만 | 업스테이지 기술 성과 블록, 13Labs 소유권 문구 |
| 8 | **창업자 노트 + CTA** | 대표가 왜 이 일을 하는지 3~4문장, "현장 진단 일정 잡기"와 진단에서 받는 것 한 줄 | Palantir CEO 편지, 올거나이즈 PoC CTA |

- 요청한 4개 항목이 모두 들어간다. (1) 미션 히어로 → #1, (2) 솔루션 2개 → #3·#4, (3) 기술 → #6, (4) 증거로서의 제품 → #7.
- **한국 AI 스타트업 관례(히어로 바로 아래 제품 카드와 로고 벽)를 일부러 따르지 않는다.** 로고가 없는 상태에서 그 틀을 쓰면 빈자리가 오히려 눈에 띈다. 제품은 "판매 목록"이 아니라 "역량의 증거"로 #7에 둔다.

---

## 6. 방문한 URL 목록
- https://deploy.co/ (← https://tomoro.ai/ 301)
- https://www.palantir.com/ (curl 원본 HTML, CMS 문자열) · https://www.palantir.com/careers/forward-deployed-engineer/ (빈 페이지) · https://www.palantir.com/aip/bootcamp/ (curl, 본문을 얻지 못함)
- https://scale.com/
- https://www.anthropic.com/enterprise → https://claude.com/solutions/enterprise
- https://www.distyl.ai/
- https://www.upstage.ai/
- https://www.allganize.ai/ko/home
- https://www.makinarocks.ai/
- https://www.skelterlabs.com/
- https://www.42maru.ai/
- https://www.skax.co.kr/ax-services/ax-consulting
- https://www.samsungsds.com/kr/index.html
- https://www.lgcns.com/ (일부)
- https://www.accenture.com/us-en/services/data-ai
- https://www.13labs.au/services/consulting/for/fitness-gyms
- https://www.altadx.com/ (관련 없는 Coming Soon 페이지)
- 실패: https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients (타임아웃 2회), https://www.quantumblack.com/ (DNS)
- 검색 요약만 확인 [C]: Palantir 부트캠프 블로그(https://blog.palantir.com/deploying-full-spectrum-ai-in-days-how-aip-bootcamps-work-21829ec8d560), OpenAI Deployment Company 보도(https://hpcwire.com/aiwire/2026/05/11/openai-launches-deployment-company-to-scale-enterprise-ai-adoption/, https://www.techwyse.com/news/business/openai-deployment-company-launch-tomoro-acquisition), Alta DX 기사, 원티드랩 AX 기사(https://www.venturesquare.net/1082473/)
