const ko = {
  nav: {
    features: "제품",
    team: "팀 소개",
    guide: "피트니스 가이드",
    pricing: "가격",
    blog: "블로그",
    contact: "문의",
    download: "앱 다운로드",
    aiChat: "AI 코치",
    menu: "메뉴",
  },
  footer: {
    product: "제품",
    fitnessGuide: "피트니스 가이드",
    company: "회사",
    tagline1: "스마트폰 하나로,",
    tagline2: "나만의 PT 선생님",
    features: "기능 소개",
    aiCoach: "AI 코치",
    pricing: "구독 플랜",
    download: "앱 다운로드",
    calorieCalc: "칼로리 계산기",
    oneRmCalc: "1RM 계산기",
    exerciseDb: "운동 도감",
    programs: "운동 프로그램",
    team: "팀 소개",
    blog: "블로그",
    contactUs: "문의하기",
  },
  hero: {
    title1: "진짜 온라인 PT,",
    title2: "코비아 피트니스",
    subtitle1: "운동 기록, AI 식단 분석, 크로스 피드백까지",
    subtitle2: "24시간 나만의 AI 코치가 운동과 식단을 같이 봐줍니다",
    subtext1:
      "사진 한 장으로 칼로리 측정, 기구 인식, 맞춤 프로그램 추천 —",
    subtext2:
      "기록할수록 정교해지는 나만의 온라인 PT를 경험하세요.",
    download: "앱 다운로드",
    explore: "어떤 앱인지 보기",
  },
  features: {
    title: "운동도 식단도, AI와 함께 제대로",
    subtitle:
      "기록, 분석, 피드백 — 대부분의 앱은 하나만 다루지만, 코비아는 전부 해요",
    trust: "",
    cards: [
      {
        title: "점진적 과부하 기록",
        desc: "지난 무게, 횟수, 볼륨을 자동 비교하면서 오늘 더 나은 기록을 세워요.\n주기화 프로그램(Linear 12주, 5·3·1, 근비대 8주)도 지원해요",
      },
      {
        title: "AI 식단 분석",
        desc: "사진 한 장이면 AI가 칼로리와 영양소를 즉시 측정해요.\n한국 음식도 정확하게. 바코드 없는 음식은 AI가 추정해줘요",
      },
      {
        title: "운동+식단 크로스 분석",
        desc: "'등 운동 했는데 단백질이 부족해요' — AI 코치가 운동과 식단을\n동시에 보고 크로스 피드백해줘요. 4가지 성격 중 골라보세요",
      },
      {
        title: "기록 → 포인트 → 코치 꾸미기",
        desc: "운동 +1pt, 식단 +1pt, 주간 +3pt, 스트릭 +5~20pt.\n꾸준히 기록하면 포인트로 코치 스킨을 구매할 수 있어요",
      },
      {
        title: "16단계 개인화 맞춤 추천",
        desc: "목표, 신체정보, 경험, 부상, 식단방식, 알레르기까지 —\n온보딩 정보로 운동 프로그램과 식사를 개인화 추천해줘요",
      },
      {
        title: "AI 기구 인식 + 바코드 스캔",
        desc: "헬스장 기구를 찍으면 AI가 식별하고 사용법과 추천 운동을 알려줘요.\n식품 바코드 스캔으로 영양정보도 즉시 확인",
      },
    ],
  },
  recording: {
    title: "운동도 식단도, 쉽고 정확하게",
    subtitle1: "운동은 지난 기록과 비교하며 점진적 과부하를,",
    subtitle2:
      "식단은 사진 한 장이면 AI가 칼로리와 영양소를 즉시 분석해줘요",
    dashboardLabel: "홈 대시보드",
    dashboardDesc: "목표 칼로리, 이번 달 운동, 체중까지 한눈에",
    dashboardAlt: "홈 대시보드 UI",
    workoutLabel: "운동 기록",
    workoutDesc: "이전 무게/횟수를 보면서 더 나은 오늘을 기록",
    workoutAlt: "운동 기록 UI",
    dietLabel: "AI 식단 분석",
    dietDesc: "사진 한 장 → AI가 칼로리/영양소 즉시 측정",
    dietAlt: "식단 기록 UI",
  },
  coach: {
    title: "4가지 성격의 AI 코치",
    subtitle: "나한테 맞는 스타일을 골라보세요",
    coachAlt: "코치",
    personalities: [
      {
        id: "tough",
        label: "독설형",
        emoji: "😤",
        chat: [
          {
            role: "coach" as const,
            text: "벤치프레스 60kg 5x5 했는데, 지난주 65kg에서 떨어졌네?",
          },
          { role: "user" as const, text: "어깨가 좀 불편해서..." },
          {
            role: "coach" as const,
            text: "어깨 불편하면 인클라인 30도로 바꿔. 60kg도 못 치면서 안 아프게 하려면 대안을 써야지. 다음 세션 인클라인으로 짜줄게.",
          },
        ],
      },
      {
        id: "warm",
        label: "격려형",
        emoji: "🤗",
        chat: [
          {
            role: "coach" as const,
            text: "오늘 단백질 120g 달성! 목표 딱 맞췄어 👏",
          },
          {
            role: "user" as const,
            text: "근데 저녁에 치킨 먹어서 칼로리 초과했어...",
          },
          {
            role: "coach" as const,
            text: "치킨이 단백질 30g이나 채워줬잖아! 덕분에 목표 달성한 거야. 내일 탄수화물만 조금 줄이면 완벽해. 잘하고 있어!",
          },
        ],
      },
      {
        id: "cool",
        label: "냉정형",
        emoji: "🧊",
        chat: [
          {
            role: "coach" as const,
            text: "이번 주 데이터: 운동 4회, 식단 기록률 86%. 크로스 분석 결과 공유할게.",
          },
          { role: "user" as const, text: "어떤 분석?" },
          {
            role: "coach" as const,
            text: "등 운동일 단백질 섭취가 목표 대비 18g 부족해. 운동 후 유청 25g 추가하면 하루 목표 충족됨. 닭가슴살 100g도 대안.",
          },
        ],
      },
      {
        id: "balance",
        label: "밸런스형",
        emoji: "⚖️",
        chat: [
          {
            role: "coach" as const,
            text: "스쿼트 볼륨 4,800kg, 지난주 대비 +12%. 좋은 진전이야!",
          },
          { role: "user" as const, text: "근데 무릎이 좀 아프던데" },
          {
            role: "coach" as const,
            text: "볼륨은 좋았지만 무릎 통증이면 풀 스쿼트 대신 패러렐까지만 해봐. 그래도 불편하면 레그프레스로 대체할게. 무릎은 무시하면 안 돼.",
          },
        ],
      },
    ],
  },
  points: {
    title: "기록이 곧 보상, 포인트로 나만의 코치를",
    subtitle:
      "운동과 식단을 기록할수록 포인트가 쌓이고, 코치 상점에서 다양한 스킨을 구매할 수 있어요",
    steps: [
      { step: "01", title: "기록", sub: "운동 +1  식단 +1" },
      { step: "02", title: "포인트", sub: "주간 +3  스트릭 보너스" },
      { step: "03", title: "꾸미기", sub: "코치 외형 커스터마이징" },
    ],
    maleCoach: "남성 코치",
    femaleCoach: "여성 코치",
    maleAlt: "남성 코치",
    femaleAlt: "여성 코치",
    collectMessage: "기록을 꾸준히 하면 더 빠르게 모을 수 있어요",
    skinGalleryTitle: "포인트로 코치의 외형을 바꿔보세요",
    comingSoon: "준비중",
    skins: [
      { name: "헤어스타일", desc: "다양한 머리 스타일" },
      { name: "의상", desc: "운동복, 캐주얼, 정장 등" },
      { name: "신발", desc: "운동화부터 부츠까지" },
      { name: "액세서리", desc: "모자, 시계, 가방 등" },
    ],
  },
  trainer: {
    badge: "트레이너 모드도 지원해요!",
    title: "실제 PT 트레이너를 위한 전용 모드",
    subtitle: "회원이 기록한 운동·식단 데이터를 트레이너가 직접 확인하고, 피드백까지 한 곳에서 관리할 수 있어요",
    cards: [
      {
        title: "회원 관리",
        desc: "클라이언트 목록 관리와 PT 캘린더로 스케줄을 한눈에",
      },
      {
        title: "운동/식단 리뷰",
        desc: "회원의 운동 기록과 식단을 날짜별로 상세 열람",
      },
      {
        title: "피드백 작성",
        desc: "회원에게 직접 피드백을 작성하면 회원 앱에 바로 노출",
      },
      {
        title: "PT 도구",
        desc: "1RM 계산, 칼로리 분석, 운동 검색 등 트레이너 전용 도구",
      },
    ],
  },
  guidePreview: {
    title: "다양한 피트니스 도구",
    subtitle: "운동과 식단에 도움이 되는 무료 도구들도 제공해요",
    tools: [
      {
        title: "칼로리 계산기",
        desc: "목표에 맞는 일일 칼로리와 매크로 계산",
      },
      { title: "1RM 계산기", desc: "반복 횟수로 예상 최대 중량 계산" },
      {
        title: "운동 도감",
        desc: "부위별 300+ 운동 검색 및 가이드",
      },
      { title: "운동 프로그램", desc: "목표별 주간 운동 루틴 추천" },
      { title: "식단 가이드", desc: "다이어트/벌크 식단 템플릿" },
      {
        title: "피트니스 핸드북",
        desc: "입문자를 위한 필수 개념 정리",
      },
    ],
  },
  blog: {
    title: "블로그",
    subtitle: "운동과 영양에 대한 유용한 이야기",
    viewAll: "전체 보기 →",
    noPosts: "아직 게시물이 없습니다.",
    back: "← 블로그 목록",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "무료인가요?",
        a: "운동/식단 기록, 진행 그래프, 포인트 적립은 모두 무료예요. AI 코치 채팅(월 10회)과 AI 음식 분석(월 3회)도 무료로 쓸 수 있어요. 더 많이 사용하려면 Pro 플랜을 추천드려요.",
      },
      {
        q: "AI가 진짜 내 기록을 분석해요?",
        a: "네. 일반 AI 챗봇과 완전히 달라요. AI 코치가 9개의 전문 도구(운동 조회, 식단 분석, 프로그램 추천 등)를 직접 사용해서 내 운동 기록과 식단을 크로스 분석하고 맞춤 피드백을 줘요.",
      },
      {
        q: "무료와 유료의 차이는?",
        a: "무료: 운동/식단 기록 무제한 + AI 코치 월 10회 + AI 음식 분석 월 3회. Pro: AI 기능 무제한 + 루틴 관리 + 바코드 스캔 + AI 기구 인식. Max: Pro 전체 + 좌우 불균형 분석 + AI 운동 평가.",
      },
      {
        q: "AI 식단 분석은 어떻게 해요?",
        a: "음식 사진을 찍으면 AI가 음식을 인식하고 칼로리와 영양소(탄/단/지)를 즉시 측정해요. 한국 음식도 정확하게 분석하고, 바코드 스캔이나 텍스트 검색으로도 입력할 수 있어요.",
      },
      {
        q: "iOS에서도 쓸 수 있나요?",
        a: "지금은 Android만 돼요. iOS는 준비 중이고, 곧 App Store에서도 만나볼 수 있어요.",
      },
      {
        q: "코치 성격을 바꿀 수 있어요?",
        a: "네. 독설형, 격려형, 냉정형, 밸런스형 4가지 중 언제든 바꿀 수 있어요. 포인트를 모아 코치 외형(스킨)도 커스터마이징할 수 있어요.",
      },
      {
        q: "오프라인 PT 대신 쓸 수 있나요?",
        a: "AI 코치가 운동과 식단을 동시에 보고 크로스 분석해주고, 16단계 온보딩으로 목표/경험/부상/알레르기까지 반영한 개인화 추천을 해줘요. 24시간 이용 가능한 온라인 PT로 좋은 대안이에요.",
      },
    ],
  },
  cta: {
    title: "지금 시작하기",
    subtitle1: "무료로 다운로드하고",
    subtitle2: "나만의 AI PT 코치를 만나보세요",
    iosComing: "iOS 준비 중",
    maleCoachAlt: "AI 코치 남성",
    femaleCoachAlt: "AI 코치 여성",
  },
  team: {
    title: "Team CoreVia",
    subtitle: "",
    missionTitle: "Our Mission",
    missionVision: "피트니스의 핵심(Core)을 집요하게 추구하고, AI를 통해(Via) 그 핵심에 도달하는 가장 완벽한 길을 만들어갑니다.",
    missionDesc: "",
    missionSteps: [
      {
        title: "점진적 과부하가 정답입니다",
        desc: "정도를 걷기 위한 최선의 전략을 추구합니다. 점진적 과부하야말로 피트니스의 정답이라고 믿습니다. 이전보다 더 나아진 나를 위한 운동 설계와 휴식, 식습관을 컨설팅하고 이를 더 잘 이루어내기 위해 AI를 접목합니다.",
      },
      {
        title: "기록할수록, 당신에게 최적화됩니다",
        desc: "기록은 그 자체로 끝이 아닙니다. 운동 볼륨, 식단 사진, 영양소 데이터가 쌓일수록 AI 코치는 당신을 더 깊이 이해합니다. 어제의 운동과 오늘의 식단을 함께 보고 피드백하는, 당신만을 위한 PT로 거듭납니다.",
      },
      {
        title: "기록이 쌓이면 포인트도 쌓입니다",
        desc: "꾸준한 기록은 보상으로 돌아옵니다. 포인트를 모아 AI 코치의 성격과 외형을 자신의 취향대로 꾸밀 수 있어요. 나만의 코치를 직접 만들어가는 재미, 그게 CoreVia의 방식입니다.",
      },
      {
        title: "우리의 비전: AI Native Fitness 생태계",
        desc: "단순한 챗봇이 아닙니다. 당신의 운동 기록을 직접 조회하고, 식단을 분석하고, 체형 변화를 추적하는 — 도구를 쓸 줄 아는 AI 에이전트. 기록할수록 정교해지는 나만의 PT, 그것이 CoreVia Fitness가 만들어가는 AI Native Fitness 생태계입니다.",
      },
    ],
    aboutTitle: "About Team",
    aboutDesc: "기술과 피트니스를 모두 이해하는 팀이 만듭니다",
    careers: [
      "4대 기업 IT 전략팀",
      "(전) 삼성전자 반도체 엔지니어",
      "기술경영 석사 · 기계공학 학사",
    ],
    fitness: [
      "생활스포츠지도자 2급 (보디빌딩)",
      "WNGP, Natural SSA 등 네추럴 보디빌딩 대회 수상 다수",
    ],
    contactCta: "궁금한 점이 있으신가요?",
    contactBtn: "문의하기",
  },
  ebook: {
    badge: "전자책",
    title: "Core of Fitness",
    subtitle: "피트니스의 핵심",
    description1:
      "다이어트는 지식보다 실행과 의지의 문제입니다. 하지만 핵심을 이해하지 못한 채 실행하면 지속하기 어렵습니다.",
    description2:
      "이 책은 다이어트와 근비대의 핵심이 무엇인지를 명확하게 하고, 이를 토대로 한 식단/운동 프로그램을 제공합니다. 알아두면 유용한 포인트들과 근본에 살을 붙여나갈 운동/영양 지식들을 수록했습니다.",
    description3:
      "이 책이 여러분들의 건강한 일상을 설계하는 데에 기여할 수 있기를 희망합니다.",
    author:
      "저자: James (생활스포츠지도자 2급 · 네추럴 보디빌딩 대회 수상)",
    highlights: [
      { number: "104+", label: "페이지" },
      { number: "5", label: "챕터" },
      { number: "40+", label: "주제" },
    ],
    tocTitle: "목차",
    chapters: [
      {
        num: "0",
        title: "들어가기에 앞서서",
        items: [
          "책에서 전하고자 하는 메시지",
          "피트니스, 단순하지만 강력한 원칙",
        ],
      },
      {
        num: "1",
        title: "식단",
        items: [
          "식단의 원칙",
          "목표 칼로리와 매크로 설정",
          "다이어트 식단 추천",
          "피해야 하는 음식들",
          "효과적인 단백질 섭취",
          "운동 후 탄수화물을 먹어야 하는 이유",
          "GI 지수의 진실",
          "다이어트 중에도 지방을 섭취해야 하는 이유",
          "다이어트 정체기를 뚫는 방법",
          "탄수화물 싸이클링",
          "간헐적 단식 / 키토제닉",
          "그 외 21개 주제",
        ],
      },
      {
        num: "2",
        title: "운동",
        items: [
          "운동의 원칙",
          "근육 운동의 중요성",
          "운동 방법과 루틴 구성",
          "부위별 운동 (하체/등/가슴/어깨/팔)",
        ],
      },
      {
        num: "3",
        title: "대회 / 바디프로필",
        items: ["대회 & 바디프로필 준비", "피크위크 전략"],
      },
      {
        num: "4",
        title: "부록 (음식 정보)",
        items: [
          "탄수화물 · 단백질 · 지방",
          "술안주 · 과일 · 외식",
          "양념/소스 · 보충제",
        ],
      },
    ],
    recommendTitle: "이런 분께 추천합니다",
    recommendations: [
      "운동을 시작했지만 뭘 먹어야 할지 모르겠는 분",
      "식단은 관리하는데 운동 프로그래밍이 막막한 분",
      "유튜브 정보가 너무 많아서 핵심만 정리해서 보고 싶은 분",
      "대회나 바디프로필을 준비하고 있는 분",
    ],
    priceLabel: "전자책 (PDF)",
    price: "₩11,000",
    deliveryNote: "결제 후 이메일로 즉시 발송",
    buyButton: "구매하기",
    comingSoon: "결제 시스템 준비 중입니다. 곧 구매하실 수 있습니다.",
    freeHandbook: "무료 핸드북 먼저 보기 →",
  },
  contact: {
    title: "문의하기",
    subtitle1: "앱 사용 중 궁금한 점, 피드백, 협업 제안",
    subtitle2: "무엇이든 편하게 연락주세요.",
    emailLabel: "이메일 문의",
    emailButton: "이메일 보내기",
    categories: [
      {
        title: "앱 피드백",
        desc: "버그 리포트, 기능 제안, 사용 후기",
      },
      {
        title: "협업 제안",
        desc: "콘텐츠 협업, 피트니스 파트너십",
      },
      {
        title: "기타 문의",
        desc: "기술 질문, 미디어, 기타 문의",
      },
    ],
    footerLabel: "다른 페이지도 둘러보세요",
    footerLinks: {
      aiCoach: "AI 코치 소개",
      guide: "피트니스 가이드",
      blog: "블로그",
    },
  },
  coachPage: {
    badge: "AI Coach",
    title1: "나만의 AI PT 코치를",
    title2: "만나보세요",
    subtitle1: "기록을 빠짐없이 할수록 더 정확한 코칭을 받을 수 있어요.",
    subtitle2: "4가지 성격 중 골라보세요.",
    diffTitle: "일반 AI 챗봇과 뭐가 달라요?",
    diffs: [
      {
        title: "내 기록을 진짜 봐요",
        desc: "운동 기록, 식단 사진, 체형 분석까지. AI가 실제로 보고 조언해줘요.",
      },
      {
        title: "운동+식단 같이 봐요",
        desc: '"등 운동 했는데 단백질이 부족해요" — 따로따로가 아니라 같이 보고 피드백해줘요.',
      },
      {
        title: "전문가가 직접 만들었어요",
        desc: "생체 2급 + 대회 수상 트레이너이자 IT 대기업 전략팀 출신 대표가 직접 AI를 튜닝했어요.",
      },
    ],
  },
  guide: {
    badge: "피트니스 가이드",
    title: "피트니스 가이드",
    subtitle1: "과학적인 운동 방법과 영양 정보를 무료로 제공합니다.",
    subtitle2: "코비아 피트니스 앱의 핵심 콘텐츠를 웹에서 만나보세요.",
    items: [
      {
        title: "1RM 계산기",
        description: "운동 중량과 반복 횟수로 1RM(최대 1회 중량)을 계산하세요",
        icon: "🏋️",
      },
      {
        title: "칼로리 계산기",
        description: "나에게 맞는 일일 칼로리와 매크로 영양소를 계산하세요",
        icon: "🔥",
      },
      {
        title: "운동 가이드",
        description: "부위별 운동 방법과 올바른 자세를 확인하세요",
        icon: "💪",
      },
      {
        title: "피트니스 핸드북",
        description: "운동과 영양에 대한 심층 가이드 아티클",
        icon: "📚",
      },
      {
        title: "식단 추천",
        description: "목표에 맞는 식단 플랜과 영양 정보",
        icon: "🥗",
      },
      {
        title: "운동 프로그램",
        description: "레벨과 목표에 맞는 맞춤 운동 프로그램",
        icon: "📋",
      },
    ],
    ebookBadge: "전자책",
    ebookTitle: "좀 더 자세한 이론이 궁금하신가요?",
    ebookDesc:
      "는 가장 핵심적이고 직관적인 피트니스의 핵심을 담았습니다. 알아두면 유용한 운동/영양 지식과 실전 노하우를 수록했습니다.",
    ctaTitle: "더 많은 기능을 원하시나요?",
    ctaDesc1: "코비아 피트니스 앱에서 AI 기반 운동 분석, 개인화된 코칭,",
    ctaDesc2: "실시간 피드백 등 더 많은 기능을 경험해보세요.",
    download: "앱 다운로드",
    contactUs: "문의하기",
  },
  guideSubpages: {
    backToGuide: "가이드로 돌아가기",
    oneRm: {
      title: "1RM 계산기",
      subtitle: "운동 중량과 반복 횟수를 입력하면 1RM(최대 1회 중량)을 계산합니다.",
      weightLabel: "운동 중량 (kg)",
      repsLabel: "반복 횟수 (1-30)",
      weightPlaceholder: "예: 60",
      repsPlaceholder: "예: 8",
      invalidInput: "올바른 값을 입력해주세요. (반복 횟수는 1-30 사이)",
      calculate: "1RM 계산하기",
      estimated: "예상 1RM",
      basedOnSuffix: "회 기준 (Epley 공식)",
      zonesTitle: "트레이닝 존 가이드",
      infoTitle: "💡 알아두세요",
      infoText: "1RM 계산은 Epley 공식(1RM = 중량 × (1 + 반복횟수/30))을 사용합니다. 실제 1RM은 개인차가 있으므로, 새로운 중량에 도전할 때는 안전을 위해 스팟터와 함께 운동하시기 바랍니다.",
      zones: [
        { name: "최대 근력", reps: "1회", desc: "최대 힘을 발휘하는 구간" },
        { name: "근력 향상", reps: "2-4회", desc: "순수 근력 발달에 최적" },
        { name: "근력/근비대", reps: "5-6회", desc: "근력과 근비대의 균형" },
        { name: "근비대", reps: "8-12회", desc: "근육 크기 증가에 최적" },
        { name: "근지구력", reps: "12-15회", desc: "근지구력 향상" },
        { name: "지구력/워밍업", reps: "15회+", desc: "가벼운 워밍업 및 지구력 향상" },
      ],
      faqTitle: "자주 묻는 질문",
      faq: [
        {
          q: "1RM이란 무엇인가요?",
          a: "1RM(One Repetition Maximum)은 올바른 자세로 1회만 들어올릴 수 있는 최대 중량입니다. 웨이트 트레이닝에서 운동 강도를 설정하는 기준이 됩니다.",
        },
        {
          q: "Epley 공식은 어떻게 계산하나요?",
          a: "Epley 공식: 1RM = 중량 x (1 + 반복횟수/30). 예를 들어 60kg으로 8회 반복하면 예상 1RM은 60 x (1 + 8/30) = 76kg입니다. 5회 이하 반복에서 가장 정확합니다.",
        },
        {
          q: "어떤 운동에 적용할 수 있나요?",
          a: "벤치프레스, 스쿼트, 데드리프트 같은 바벨 복합 운동에 가장 정확합니다. 머신 운동이나 고립 운동에서는 오차가 클 수 있으므로 참고용으로만 사용하세요.",
        },
        {
          q: "1RM 테스트를 직접 해도 되나요?",
          a: "초보자는 직접 1RM 테스트 대신 계산기를 사용하는 것이 안전합니다. 경험자라도 반드시 스팟터와 함께, 충분한 워밍업 후 시도하세요.",
        },
      ],
      aboutTitle: "1RM 계산기 사용법",
      aboutText: "운동 중량(kg)과 반복 횟수(1-30회)를 입력하면 Epley 공식을 기반으로 예상 1RM을 계산합니다. 결과에는 트레이닝 존별 권장 중량도 함께 표시되어, 근력/근비대/근지구력 목표에 맞는 훈련 강도를 바로 확인할 수 있습니다.",
    },
    calorie: {
      title: "칼로리 계산기",
      subtitle: "개인 정보와 활동량을 입력하면 일일 권장 칼로리와 매크로를 계산합니다.",
      genderLabel: "성별",
      male: "남성",
      female: "여성",
      ageLabel: "나이",
      weightLabel: "체중 (kg)",
      heightLabel: "키 (cm)",
      agePlaceholder: "예: 30",
      weightPlaceholder: "예: 70",
      heightPlaceholder: "예: 175",
      asianAdjust: "아시아인 체형 보정 적용 (서양인 대비 기초대사량 약 5% 낮음)",
      activityLabel: "활동 수준",
      goalLabel: "목표",
      calculate: "칼로리 계산하기",
      invalidInput: "올바른 값을 입력해주세요.",
      bmrLabel: "기초대사량 (BMR)",
      tdeeLabel: "총 에너지 소비량 (TDEE)",
      targetCalories: "목표 칼로리",
      kcalDay: "kcal/일",
      macrosTitle: "권장 매크로 영양소",
      protein: "단백질",
      carbs: "탄수화물",
      fat: "지방",
      infoTitle: "💡 참고사항",
      infoItems: [
        "기초대사량은 Mifflin-St Jeor 공식을 기반으로 계산됩니다.",
        "단백질은 체중 kg당 1.8g으로 계산됩니다 (운동하는 분 기준).",
        "실제 필요량은 개인차가 있으므로 2-4주 후 체중 변화를 확인하며 조절하세요.",
      ],
      activityLevels: [
        { label: "좌식 생활", desc: "운동 거의 안 함" },
        { label: "가벼운 활동", desc: "주 1-3회 가벼운 운동" },
        { label: "보통 활동", desc: "주 3-5회 중간 강도 운동" },
        { label: "활동적", desc: "주 6-7회 강도 높은 운동" },
        { label: "매우 활동적", desc: "하루 2회 이상 운동 또는 육체 노동" },
      ],
      goals: [
        { label: "체중 감량", desc: "주당 약 0.5kg 감량" },
        { label: "느린 체중 감량", desc: "주당 약 0.25kg 감량" },
        { label: "체중 유지", desc: "현재 체중 유지" },
        { label: "느린 체중 증가", desc: "주당 약 0.25kg 증가" },
        { label: "체중 증가 (벌크업)", desc: "주당 약 0.5kg 증가" },
      ],
      faqTitle: "자주 묻는 질문",
      faq: [
        {
          q: "TDEE란 무엇인가요?",
          a: "TDEE(Total Daily Energy Expenditure)는 하루 동안 소비하는 총 칼로리입니다. 기초대사량(BMR)에 활동 수준을 곱하여 계산합니다.",
        },
        {
          q: "Mifflin-St Jeor 공식은 어떻게 계산하나요?",
          a: "남성: BMR = (10 x 체중kg) + (6.25 x 키cm) - (5 x 나이) + 5. 여성: BMR = (10 x 체중kg) + (6.25 x 키cm) - (5 x 나이) - 161. TDEE = BMR x 활동계수(1.2~1.9).",
        },
        {
          q: "다이어트 시 칼로리를 얼마나 줄여야 하나요?",
          a: "일반적으로 TDEE에서 300~500kcal을 줄이면 주당 0.3~0.5kg 감량할 수 있습니다. 너무 급격한 제한은 근손실과 요요를 유발할 수 있으므로 주의하세요.",
        },
        {
          q: "아시아인 체형 보정이란?",
          a: "아시아인은 같은 BMI에서도 체지방률이 높은 경향이 있어, 기초대사량을 약 10% 낮게 보정합니다. 더 정확한 칼로리 계산을 위한 옵션입니다.",
        },
      ],
      aboutTitle: "칼로리 계산기 사용법",
      aboutText: "성별, 나이, 체중, 키, 활동 수준을 입력하면 Mifflin-St Jeor 공식을 기반으로 일일 권장 칼로리(TDEE)와 매크로 영양소(단백질, 탄수화물, 지방)를 계산합니다. 다이어트, 유지, 벌크업 등 목표에 맞는 칼로리를 확인할 수 있습니다.",
    },
    exercises: {
      title: "운동 가이드",
      subtitleTemplate: "개의 운동 방법과 올바른 자세를 확인하세요",
      searchPlaceholder: "운동 이름, 근육 부위로 검색...",
      noResults: "검색 결과가 없습니다",
      targetMuscles: "타겟 근육",
      primary: "(주동근)",
      howTo: "운동 방법",
      tips: "💡 팁",
      bodyParts: [
        { id: "all", name: "전체" },
        { id: "chest", name: "가슴" },
        { id: "back", name: "등" },
        { id: "shoulder", name: "어깨" },
        { id: "leg", name: "하체" },
        { id: "arm", name: "팔" },
        { id: "core", name: "코어" },
        { id: "cardio", name: "유산소" },
      ],
      difficulty: {
        all: "전체",
        beginner: "초급",
        intermediate: "중급",
        advanced: "고급",
      },
    },
    handbook: {
      title: "피트니스 핸드북",
      subtitleTemplate: "운동과 영양에 대한 {count}개의 심층 가이드",
    },
    mealPlans: {
      title: "식단 추천",
      subtitleTemplate: "목표에 맞는 {count}개의 한국인 맞춤 식단 플랜",
      protein: "단백질",
      carbs: "탄수화물",
      fat: "지방",
      categories: [
        { id: "all", name: "전체", icon: "📋" },
        { id: "intermittent", name: "간헐적 단식", icon: "⏰" },
        { id: "lowcarb", name: "저탄수화물", icon: "🥑" },
        { id: "bulk", name: "근비대/벌크업", icon: "💪" },
        { id: "balanced", name: "균형 식단", icon: "⚖️" },
        { id: "korean", name: "전통 한식", icon: "🍚" },
        { id: "quick", name: "간편 식단", icon: "⚡" },
      ],
    },
    programs: {
      title: "운동 프로그램",
      subtitleTemplate: "목표와 레벨에 맞는 {count}개의 맞춤 프로그램",
      goalLabel: "목표",
      levelLabel: "레벨",
      all: "전체",
      noResults: "조건에 맞는 프로그램이 없습니다",
      exerciseList: "운동 목록",
      setsReps: "세트 × {reps}회",
      mainExercise: "메인 운동",
      accessoryExercise: "보조 운동",
      exerciseCount: "{count}개의 운동",
      goalMap: {
        "근력 향상": "근력 향상",
        "근비대": "근비대",
        "체지방 감소": "체지방 감소",
      } as Record<string, string>,
      levelMap: {
        "초급": "초급",
        "중급": "중급",
        "고급": "고급",
      } as Record<string, string>,
    },
  },
  pricing: {
    badge: "구독 플랜",
    title: "나에게 맞는 플랜을 선택하세요",
    subtitle: "무료로 시작하고, 필요할 때 업그레이드하세요",
    monthly: "월간",
    yearly: "연간",
    yearlyDiscount: "2개월 무료",
    perMonth: "/월",
    perYear: "/년",
    currentPlan: "현재 플랜",
    upgradeCta: "업그레이드",
    getStarted: "무료로 시작",
    mostPopular: "인기",
    best: "최고",
    free: "무료",
    plans: [
      {
        id: "free",
        name: "Free",
        price: "0",
        priceYearly: "0",
        description: "운동과 식단, 기록부터 시작하세요",
        features: [
          "운동 기록 (무제한)",
          "식단 기록 (무제한)",
          "진행 추적 · 그래프",
          "온라인 PT (월 10회)",
          "AI 음식 분석 (월 3회)",
          "트레이너 연동 (1명)",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        price: "4,900",
        priceYearly: "39,000",
        description: "AI 코치가 기록을 분석하고 조언해줘요",
        features: [
          "Free 플랜의 모든 기능",
          "온라인 PT (무제한)",
          "AI 음식 분석 (무제한)",
          "루틴 관리",
          "바코드 스캔",
          "AI 기구 인식",
          "트레이너 연동 (무제한)",
        ],
      },
      {
        id: "max",
        name: "Max",
        price: "12,900",
        priceYearly: "99,000",
        description: "Pro의 모든 기능 + 고급 AI 분석",
        features: [
          "Pro 플랜의 모든 기능",
          "좌우 불균형 분석",
          "AI 운동 평가",
          "분석 히스토리",
        ],
      },
    ],
    maxComingSoon: "Max 전용 기능은 현재 개발 중입니다",
    comparisonTitle: "상세 기능 비교",
    categories: [
      {
        name: "기록 · 관리",
        features: [
          { name: "운동 기록", free: true, pro: true, max: true },
          { name: "식단 기록", free: true, pro: true, max: true },
          { name: "진행 추적 · 그래프", free: true, pro: true, max: true },
          { name: "루틴 관리", free: false, pro: true, max: true },
        ],
      },
      {
        name: "AI 기능",
        features: [
          { name: "온라인 PT (AI 코치 채팅)", free: "월 10회", pro: true, max: true },
          { name: "AI 음식 분석", free: "월 3회", pro: true, max: true },
          { name: "바코드 스캔", free: false, pro: true, max: true },
          { name: "AI 기구 인식", free: false, pro: true, max: true },
          { name: "좌우 불균형 분석", free: false, pro: false, max: true },
          { name: "분석 히스토리", free: false, pro: false, max: true },
        ],
      },
      {
        name: "연동",
        features: [
          { name: "트레이너/회원 연동", free: "1명", pro: "무제한", max: "무제한" },
        ],
      },
    ],
    faqTitle: "구독 관련 FAQ",
    faqs: [
      {
        q: "무료 플랜으로도 충분한가요?",
        a: "운동과 식단 기록은 무제한 무료입니다. AI 코치 채팅도 월 10회, AI 음식 분석도 월 3회까지 무료로 이용 가능해요. 더 많이 사용하고 싶으시면 Pro를 추천드려요.",
      },
      {
        q: "언제든 해지할 수 있나요?",
        a: "네, 언제든 구독을 해지할 수 있습니다. 해지하더라도 결제 기간 종료 시까지 이용 가능하며, 기록 데이터는 유지됩니다.",
      },
      {
        q: "결제는 어떻게 하나요?",
        a: "Google Play Store 앱 내 결제로 진행됩니다. 구글 계정에 등록된 결제 수단으로 자동 결제돼요.",
      },
      {
        q: "Pro와 Max의 차이가 뭔가요?",
        a: "Pro는 AI 코치 채팅, 음식 분석, 기구 인식 등 AI 기능을 무제한으로 쓸 수 있어요. Max는 Pro의 모든 기능에 좌우 불균형 분석, AI 운동 평가 등 고급 분석 기능이 추가됩니다. (Max 전용 기능은 현재 개발 중)",
      },
    ],
    ctaTitle: "지금 시작하세요",
    ctaSubtitle: "무료로 다운로드하고, 나에게 맞는 플랜을 선택하세요",
  },
  notFound: {
    message: "페이지를 찾을 수 없습니다",
    goHome: "홈으로 돌아가기",
  },
  metadata: {
    homeTitle: "CoreVia - 나만의 AI PT 코치 | 운동 식단 AI 코칭 앱",
    homeDesc:
      "스마트폰 하나로 운동+식단 AI 코칭. 기록만 하는 앱은 많지만, 기록을 보고 조언해주는 앱은 CoreVia뿐. AI가 운동과 식단을 분석하고 맞춤 피드백을 제공합니다.",
    coachTitle: "AI 코치 소개",
    coachDesc:
      "코치 케이와 코치 제인, 2명의 AI PT 코치가 4가지 성격으로 운동과 식단을 함께 관리해줍니다.",
    contactTitle: "문의하기",
    contactDesc:
      "CoreVia에 문의하세요. 앱 피드백, 제안, 협업 문의를 환영합니다.",
    pricingTitle: "구독 플랜",
    pricingDesc:
      "CoreVia의 Free, Pro, Max 플랜을 비교하고 나에게 맞는 구독 플랜을 선택하세요.",
    chatTitle: "AI PT 코치와 대화하기",
    chatDesc:
      "코치 케이 · 코치 제인과 실시간 대화. 운동, 식단, 루틴 고민을 상담하세요.",
  },
  chat: {
    metaTitle: "AI PT 코치와 대화하기 | CoreVia",
    metaDesc:
      "코치 케이 · 코치 제인, 4가지 성격으로 만나는 AI PT 코칭. 운동, 식단, 루틴 고민을 상담하세요.",
    heroBadge: "AI FITNESS COACH",
    heroTitle: "어떤 코치와 대화해볼까요?",
    heroSubtitle:
      "코치 케이와 코치 제인이 4가지 성격으로 기다리고 있어요. 골라서 바로 대화해보세요.",
    startChat: "대화하기",
    pickPersonality: "코칭 스타일을 골라보세요",
    personalityPreviews: {
      tough: "오늘도 빠질 거야? 진짜?",
      cheerful: "와 오늘도 왔어? 대단하다!",
      cool: "이번 주 달성률 68%. 목표 근접.",
      balanced: "오늘 뭐 해볼까요? 같이 짜봅시다.",
    } as Record<string, string>,
    freeNotice: "가입 시 50pt 무료 지급",
    inputPlaceholder: "메시지를 입력하세요...",
    limitReached: "포인트가 부족합니다",
    errorMessage: "죄송합니다, 응답 중 오류가 발생했어요. 다시 시도해 주세요.",
    aiDisclaimer:
      "AI 코치의 조언은 참고용이며, 의료 전문가의 조언을 대체하지 않습니다.",
    goalLoseWeight: "체중 감량하고 싶어요",
    goalBuildMuscle: "근육을 키우고 싶어요",
    goalGetFit: "체력을 늘리고 싶어요",
    limitLabels: {
      remaining: "남은 대화",
      of: "/",
      unlimited: "무제한",
    },
    ctaLabels: {
      inlineTitle: "실제 운동 데이터로 코칭 받고 싶다면?",
      inlineDesc:
        "앱에서 운동·식단을 기록하면 AI 코치가 데이터 기반 1:1 피드백을 줘요.",
      modalTitle: "포인트가 부족해요",
      modalDesc:
        "앱에서 운동·식단을 기록하면 포인트가 적립돼요. 포인트 충전도 곧 준비됩니다.",
      downloadApp: "앱 다운로드",
      maybeLater: "내일 다시 올게요",
    },
  },
};

export default ko;
