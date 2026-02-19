const ko = {
  nav: {
    features: "기능 소개",
    team: "팀 소개",
    guide: "피트니스 가이드",
    blog: "블로그",
    contact: "문의",
    download: "앱 다운로드",
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
    subtitle1: "다이어트? 근성장? 목표가 뭐든,",
    subtitle2: "완전히 개인화된 진짜 온라인 PT를 경험해보세요.",
    subtext1:
      "선수 출신 개발자가 직접 설계한 쉽고 직관적인 운동/식단 기록과",
    subtext2:
      "이를 연결하는 진짜 온라인 PT, 코비아 피트니스가 만들어나갑니다.",
    download: "앱 다운로드",
    explore: "어떤 앱인지 보기",
  },
  features: {
    title: "운동도 식단도, 제대로",
    subtitle: "대부분의 앱은 하나만 다룹니다. 둘 다 봐야 진짜 온라인 PT입니다",
    trust:
      "생체 2급 + 대회 수상 트레이너이자 IT 대기업 전략팀 출신 대표가 직접 튜닝한 AI",
    cards: [
      {
        title: "점진적 과부하 운동 기록",
        desc: "이전 기록을 보면서 더 나은 오늘을 기록해요. 무게, 횟수, 볼륨까지 자동 비교",
      },
      {
        title: "AI 식단 분석",
        desc: "사진 한 장이면 AI가 칼로리와 영양소를 바로 측정. 목표에 맞게 식단을 관리해줘요",
      },
      {
        title: "AI 코치가 같이 봐줘요",
        desc: "내 운동과 식단 기록을 분석해서 크로스 피드백. 4가지 성격 중 나에게 맞는 코치를 골라보세요",
      },
      {
        title: "기록 → 포인트 → 꾸미기",
        desc: "꾸준히 기록하면 포인트가 쌓이고, 포인트로 나만의 코치 외형을 커스터마이징할 수 있어요",
      },
    ],
  },
  recording: {
    title: "이전의 나를 넘는 기록",
    subtitle1: "운동은 점진적 과부하를 위해 지난 기록과 비교하며,",
    subtitle2: "식단은 AI가 사진 한 장으로 칼로리를 바로 측정해줘요",
    workoutLabel: "운동 기록",
    workoutDesc: "지난 무게/횟수 확인 → 오늘 더 나은 기록",
    workoutAlt: "운동 기록 UI",
    dietLabel: "식단 기록",
    dietDesc: "사진 한 장 → AI가 칼로리/영양소 즉시 분석",
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
          { role: "coach" as const, text: "오늘 운동 빠졌네? 또?" },
          { role: "user" as const, text: "오늘 좀 피곤해서..." },
          {
            role: "coach" as const,
            text: "피곤한 건 운동 안 해서야. 15분만 해. 안 하면 내일 더 귀찮아짐.",
          },
        ],
      },
      {
        id: "warm",
        label: "격려형",
        emoji: "🤗",
        chat: [
          { role: "coach" as const, text: "오늘 식단 기록 완벽이네! 대단해 👏" },
          { role: "user" as const, text: "근데 저녁에 치킨 먹었어..." },
          {
            role: "coach" as const,
            text: "괜찮아! 점심까지 잘 했으니까. 내일 단백질 좀 더 채우면 돼. 넌 잘하고 있어!",
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
            text: "이번 주 운동 3회, 식단 기록률 71%. 분석 결과 공유할게.",
          },
          { role: "user" as const, text: "어떤 분석?" },
          {
            role: "coach" as const,
            text: "등 운동 후 단백질 섭취가 평균 15g 부족해. 운동 후 30분 내 보충하면 근합성 효율 올라감.",
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
            text: "오늘 하체 운동 했네. 스쿼트 볼륨 좋았어!",
          },
          { role: "user" as const, text: "근데 무릎이 좀 아프던데" },
          {
            role: "coach" as const,
            text: "무릎 통증이면 깊이를 좀 줄여봐. 풀 스쿼트 대신 패러렐까지만. 다음에도 아프면 말해줘, 대체 운동 짜줄게.",
          },
        ],
      },
    ],
  },
  points: {
    title: "기록하면 포인트, 포인트로 코치 꾸미기",
    subtitle: "꾸준히 기록할수록 포인트가 쌓여요",
    steps: [
      { step: "01", title: "기록", sub: "운동 +1  식단 +1" },
      { step: "02", title: "포인트", sub: "주간 +3  스트릭 보너스" },
      { step: "03", title: "꾸미기", sub: "코치 외형 커스터마이징" },
    ],
    maleCoach: "남성 코치",
    femaleCoach: "여성 코치",
    maleAlt: "남성 코치",
    femaleAlt: "여성 코치",
    collectMessage: "포인트를 모아서 나만의 코치를 만들어보세요",
  },
  guidePreview: {
    title: "무료 피트니스 도구",
    subtitle: "앱 없이도 바로 쓸 수 있는 무료 도구들",
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
        a: "운동/식단 기록은 무료예요. AI 코치 채팅은 Pro/Max 플랜에서 쓸 수 있어요. 기록만으로도 포인트가 쌓이고, 코치 캐릭터를 꾸밀 수 있어요.",
      },
      {
        q: "AI가 진짜 내 기록을 보고 조언해요?",
        a: "네. 일반 AI 챗봇이랑 달라요. 내 운동 기록, 식단 사진, 체형 분석까지 실제로 보고 피드백해줘요. 생체 2급 + 대회 수상 트레이너이자 IT 대기업 전략팀 출신 대표가 직접 AI를 튜닝해서, 진짜 PT 받는 느낌이에요.",
      },
      {
        q: "iOS에서도 쓸 수 있나요?",
        a: "지금은 Android만 돼요. iOS는 준비 중이고, 곧 App Store에서도 만나볼 수 있어요.",
      },
      {
        q: "코치 성격 바꿀 수 있어요?",
        a: "물론이죠. 설정에서 언제든 바꿀 수 있어요. 독설형이 안 맞으면 격려형으로 바꿔보세요.",
      },
      {
        q: "오프라인 PT 대신 쓸 수 있나요?",
        a: "생체 2급 트레이너이자 IT 대기업 출신 대표가 직접 튜닝한 AI가 24시간 운동+식단을 같이 봐줘요. PT 갈 시간이나 비용이 부담될 때 좋은 대안이에요.",
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
    title: "만든 사람",
    subtitle: "운동도 개발도 직접 합니다",
    careers: [
      "4대 기업 IT 전략팀",
      "(전) 삼성전자 반도체 엔지니어",
      "기술경영 석사 · 기계공학 학사",
    ],
    fitness: [
      "생활스포츠지도자 2급 (보디빌딩)",
      "WNGP, Natural SSA 등 네추럴 보디빌딩 대회 수상 다수",
    ],
    whyTitle: "왜 이 앱을 만드는가",
    values: [
      {
        title: "직접 경험한 사람이 만듭니다",
        description:
          "직접 대회를 뛰면서 얻은 다이어트와 벌크업 노하우를 앱에 풀었습니다. 운동 기록의 어떤 숫자가 중요한지, 식단 분석에서 뭘 봐야 하는지를 체감으로 알고 있습니다.",
      },
      {
        title: "기술과 비즈니스를 모두 이해합니다",
        description:
          "기계공학을 전공하고 반도체 엔지니어로 근무하였고, 기술경영으로 석사 학위를 취득해 IT 전략팀에서 근무하며 AI와 IT에 대해 깊게 이해하고 있습니다. 어떻게 해야 피트니스에 가장 완성도 있게 AI를 접목시킬지 누구보다 치열하게 고민합니다.",
      },
      {
        title: "운동과 식단, 둘 다 진심입니다",
        description:
          "대부분의 피트니스 앱은 운동이면 운동, 식단이면 식단만 다룹니다. CoreVia는 처음부터 둘 다 제대로 다루겠다는 원칙으로 만들었습니다.",
      },
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
      "4가지 성격의 AI PT 코치가 운동과 식단을 함께 관리해줍니다. 독설형, 격려형, 냉정형, 밸런스형 중 나에게 맞는 코치를 골라보세요.",
    contactTitle: "문의하기",
    contactDesc:
      "CoreVia에 문의하세요. 앱 피드백, 제안, 협업 문의를 환영합니다.",
  },
};

export default ko;
