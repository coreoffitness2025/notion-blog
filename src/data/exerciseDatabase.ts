export interface Exercise {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  bodyPart: string[];
  equipment: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string[];
  instructionsEn: string[];
  tips: string[];
  tipsEn: string[];
  muscles: {
    primary: string[];
    secondary: string[];
  };
  musclesEn: {
    primary: string[];
    secondary: string[];
  };
  gifUrl?: string;
}

export const EXERCISE_DATABASE: Exercise[] = [
  {
    "id": "bench-press",
    "name": "벤치프레스",
    "nameEn": "Bench Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "barbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "벤치에 등을 대고 누워 어깨너비보다 조금 넓게 바벨을 잡습니다",
      "가슴을 내밀고 어깨날개를 뒤로 모읍니다",
      "바벨을 가슴 중앙까지 천천히 내립니다",
      "가슴근육의 힘으로 바벨을 위로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Lie on the bench and grip the barbell slightly wider than shoulder width",
      "Push your chest out and retract your shoulder blades",
      "Lower the barbell slowly to the center of your chest",
      "Press the barbell up using the strength of your chest muscles"
    ],
    "tips": [
      "호흡은 내릴 때 들이마시고 올릴 때 내쉽니다",
      "손목을 곧게 유지하세요",
      "발은 바닥에 단단히 고정합니다",
      "어깨날개를 계속 뒤로 모은 상태를 유지하세요"
    ],
    "tipsEn": [
      "Breathe in when lowering and exhale when pressing up",
      "Keep your wrists straight",
      "Keep your feet firmly planted on the floor",
      "Maintain retracted shoulder blades throughout"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "incline-bench-press",
    "name": "인클라인 벤치프레스",
    "nameEn": "Incline Bench Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "barbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "인클라인 벤치(30-45도)에 등을 대고 눕습니다",
      "바벨을 어깨너비보다 넓게 잡습니다",
      "가슴 상부까지 천천히 내립니다",
      "가슴 상부의 힘으로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Lie on an incline bench (30-45 degrees)",
      "Grip the barbell wider than shoulder width",
      "Slowly lower to the upper chest",
      "Press up using the upper chest strength"
    ],
    "tips": [
      "벤치 각도는 30-45도가 적당합니다",
      "어깨날개를 뒤로 모으세요",
      "가슴 상부의 수축을 의식하세요",
      "손목을 곧게 유지합니다"
    ],
    "tipsEn": [
      "Bench angle should be 30-45 degrees",
      "Retract your shoulder blades",
      "Focus on upper chest contraction",
      "Keep your wrists straight"
    ],
    "muscles": {
      "primary": [
        "대흉근 상부"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Upper pectoralis"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "decline-bench-press",
    "name": "디클라인 벤치프레스",
    "nameEn": "Decline Bench Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "barbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "디클라인 벤치에 누워 발을 고정합니다",
      "바벨을 어깨너비보다 넓게 잡습니다",
      "가슴 하부까지 천천히 내립니다",
      "가슴 하부의 힘으로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Lie on a decline bench and secure your feet",
      "Grip the barbell wider than shoulder width",
      "Slowly lower to the lower chest",
      "Press up using the lower chest strength"
    ],
    "tips": [
      "혈액이 머리로 몰리지 않게 주의하세요",
      "가슴 하부의 수축을 의식하세요",
      "어깨날개를 뒤로 모으고 유지합니다",
      "발 고정을 확실히 하세요"
    ],
    "tipsEn": [
      "Be careful not to rush blood to your head",
      "Focus on lower chest contraction",
      "Retract and maintain shoulder blades",
      "Secure your feet firmly"
    ],
    "muscles": {
      "primary": [
        "대흉근 하부"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Lower pectoralis"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "push-up",
    "name": "푸시업",
    "nameEn": "Push Up",
    "category": "맨몸",
    "categoryEn": "Bodyweight",
    "bodyPart": [
      "chest"
    ],
    "equipment": [],
    "difficulty": "beginner",
    "instructions": [
      "손을 어깨너비로 벌려 바닥에 댑니다",
      "몸을 일직선으로 유지합니다",
      "가슴이 바닥에 닿을 때까지 몸을 내립니다",
      "팔의 힘으로 몸을 밀어 올립니다"
    ],
    "instructionsEn": [
      "Place your hands shoulder-width apart on the floor",
      "Keep your body in a straight line",
      "Lower your body until your chest touches the floor",
      "Push your body up using your arm strength"
    ],
    "tips": [
      "코어를 단단히 유지하세요",
      "목을 자연스럽게 유지합니다",
      "무릎을 꿇고 시작해도 좋습니다",
      "엉덩이가 올라가거나 처지지 않게 하세요"
    ],
    "tipsEn": [
      "Keep your core tight",
      "Maintain a natural neck position",
      "You can start on your knees if needed",
      "Don't let your hips sag or rise up"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근",
        "삼두근",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Deltoids",
        "Triceps",
        "Core"
      ]
    }
  },
  {
    "id": "dumbbell-flye",
    "name": "덤벨 플라이",
    "nameEn": "Dumbbell Flye",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "dumbbell",
      "bench"
    ],
    "difficulty": "beginner",
    "instructions": [
      "벤치에 누워 덤벨을 가슴 위에서 잡습니다",
      "팔을 살짝 굽힌 상태로 유지합니다",
      "덤벨을 옆으로 천천히 내립니다",
      "가슴근육의 힘으로 다시 모아줍니다"
    ],
    "instructionsEn": [
      "Lie on a bench and hold dumbbells above your chest",
      "Keep your arms slightly bent",
      "Slowly lower the dumbbells to the sides",
      "Bring them back together using your chest muscles"
    ],
    "tips": [
      "팔꿈치 각도를 일정하게 유지하세요",
      "어깨에 무리가 가지 않게 주의합니다",
      "가슴근육의 스트레칭을 느끼세요",
      "무거운 중량보다는 정확한 자세가 중요합니다"
    ],
    "tipsEn": [
      "Maintain a constant elbow angle",
      "Be careful not to strain your shoulders",
      "Feel the stretch in your chest muscles",
      "Proper form is more important than heavy weight"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid"
      ]
    }
  },
  {
    "id": "conventional-deadlift",
    "name": "컨벤셔널 데드리프트",
    "nameEn": "Conventional Deadlift",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back",
      "leg"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "advanced",
    "instructions": [
      "발을 어깨너비로 벌리고 바벨 앞에 섭니다",
      "무릎을 굽혀 바벨을 어깨너비로 잡습니다",
      "가슴을 내밀고 등을 곧게 펴세요",
      "다리와 엉덩이의 힘으로 바벨을 들어올립니다",
      "몸이 완전히 펴질 때까지 올라갑니다"
    ],
    "instructionsEn": [
      "Stand in front of the barbell with feet shoulder-width apart",
      "Bend your knees and grip the barbell at shoulder width",
      "Push your chest out and straighten your back",
      "Lift the barbell using your leg and hip strength",
      "Stand up fully until your body is completely straight"
    ],
    "tips": [
      "등은 항상 중립을 유지하세요",
      "바벨은 몸에 가깝게 유지합니다",
      "발뒤꿈치로 바닥을 밀어내는 느낌으로 시작하세요",
      "어깨날개를 뒤로 모으고 가슴을 내밀어야 합니다",
      "허리가 둥글게 되면 즉시 중단하세요"
    ],
    "tipsEn": [
      "Always keep your back in a neutral position",
      "Keep the barbell close to your body",
      "Start by pushing through your heels",
      "Retract your shoulder blades and push your chest out",
      "Stop immediately if your lower back rounds"
    ],
    "muscles": {
      "primary": [
        "척추기립근",
        "둔근",
        "햄스트링"
      ],
      "secondary": [
        "광배근",
        "승모근",
        "대퇴사두근",
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Erector spinae",
        "Glutes",
        "Hamstrings"
      ],
      "secondary": [
        "Latissimus dorsi",
        "Trapezius",
        "Quadriceps",
        "Forearms"
      ]
    }
  },
  {
    "id": "romanian-deadlift",
    "name": "루마니안 데드리프트",
    "nameEn": "Romanian Deadlift",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back",
      "leg"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "바벨을 어깨너비로 잡고 곧게 선 상태에서 시작합니다",
      "무릎을 살짝 굽히고 고정합니다 (15-20도)",
      "엉덩이를 뒤로 빼며 상체를 앞으로 기울입니다",
      "햄스트링의 강한 스트레칭을 느끼며 바벨을 내립니다",
      "햄스트링과 둔근의 힘으로 다시 올라갑니다"
    ],
    "instructionsEn": [
      "Start standing straight with barbell at shoulder width",
      "Slightly bend and lock your knees (15-20 degrees)",
      "Push your hips back and lean forward",
      "Lower the barbell while feeling a strong hamstring stretch",
      "Rise back up using hamstring and glute strength"
    ],
    "tips": [
      "무릎 각도는 처음부터 끝까지 고정하세요",
      "바벨은 항상 다리에 가깝게 유지합니다",
      "햄스트링의 스트레칭을 강하게 느껴야 합니다",
      "컨벤셔널 데드리프트와 달리 햄스트링 중심 운동입니다"
    ],
    "tipsEn": [
      "Keep your knee angle fixed from start to finish",
      "Keep the barbell close to your legs",
      "You should feel a strong hamstring stretch",
      "Unlike conventional deadlift, this is hamstring-focused"
    ],
    "muscles": {
      "primary": [
        "햄스트링",
        "둔근"
      ],
      "secondary": [
        "척추기립근",
        "승모근",
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Hamstrings",
        "Glutes"
      ],
      "secondary": [
        "Erector spinae",
        "Trapezius",
        "Forearms"
      ]
    }
  },
  {
    "id": "sumo-deadlift",
    "name": "스모 데드리프트",
    "nameEn": "Sumo Deadlift",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back",
      "leg"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "advanced",
    "instructions": [
      "발을 어깨너비보다 넓게 벌리고 발끝을 밖으로 향하게 합니다",
      "무릎 사이로 팔을 넣어 바벨을 어깨너비로 잡습니다",
      "가슴을 내밀고 등을 곧게 펴세요",
      "다리를 벌리며 바벨을 들어올립니다"
    ],
    "instructionsEn": [
      "Stand with feet wider than shoulder width and toes pointed out",
      "Reach between your knees to grip the barbell at shoulder width",
      "Push your chest out and straighten your back",
      "Lift the barbell by extending your legs"
    ],
    "tips": [
      "발끝과 무릎 방향을 일치시키세요",
      "내전근의 유연성이 중요합니다",
      "컨벤셔널보다 더 수직에 가까운 자세입니다",
      "둔근과 내전근을 더 많이 사용합니다"
    ],
    "tipsEn": [
      "Align your toes and knees in the same direction",
      "Adductor flexibility is important",
      "Stance is more vertical than conventional",
      "Uses more glutes and adductors"
    ],
    "muscles": {
      "primary": [
        "둔근",
        "대퇴사두근",
        "내전근"
      ],
      "secondary": [
        "햄스트링",
        "척추기립근",
        "승모근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Glutes",
        "Quadriceps",
        "Adductors"
      ],
      "secondary": [
        "Hamstrings",
        "Erector spinae",
        "Trapezius"
      ]
    }
  },
  {
    "id": "pull-up",
    "name": "풀업",
    "nameEn": "Pull Up",
    "category": "맨몸",
    "categoryEn": "Bodyweight",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "pull-up-bar"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "철봉을 어깨너비로 잡습니다",
      "몸을 매달린 상태에서 시작합니다",
      "등 근육의 힘으로 몸을 위로 당깁니다",
      "턱이 철봉을 넘을 때까지 올라갑니다"
    ],
    "instructionsEn": [
      "Grip the pull-up bar at shoulder width",
      "Start from a hanging position",
      "Pull your body up using your back muscles",
      "Continue until your chin clears the bar"
    ],
    "tips": [
      "어깨날개를 아래로 내려 시작하세요",
      "몸의 흔들림을 최소화합니다",
      "천천히 내려가는 것도 중요합니다",
      "팔의 힘보다는 등의 힘을 사용하세요"
    ],
    "tipsEn": [
      "Start by depressing your shoulder blades",
      "Minimize body swinging",
      "Lowering slowly is also important",
      "Use back strength rather than arm strength"
    ],
    "muscles": {
      "primary": [
        "광배근"
      ],
      "secondary": [
        "이두근",
        "승모근",
        "능형근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi"
      ],
      "secondary": [
        "Biceps",
        "Trapezius",
        "Rhomboids"
      ]
    }
  },
  {
    "id": "lat-pulldown",
    "name": "랫풀다운",
    "nameEn": "Lat Pulldown",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "랫 풀다운 머신에 앉습니다",
      "바를 어깨너비보다 넓게 잡습니다",
      "가슴을 내밀고 등을 곧게 펴세요",
      "등 근육의 힘으로 바를 가슴쪽으로 당깁니다"
    ],
    "instructionsEn": [
      "Sit on the lat pulldown machine",
      "Grip the bar wider than shoulder width",
      "Push your chest out and straighten your back",
      "Pull the bar toward your chest using your back muscles"
    ],
    "tips": [
      "어깨날개를 아래로 내려 시작하세요",
      "팔의 힘보다는 등의 힘을 사용합니다",
      "목 뒤로 당기지 마세요",
      "상체가 뒤로 젖혀지지 않게 하세요"
    ],
    "tipsEn": [
      "Start by depressing your shoulder blades",
      "Use back strength rather than arm strength",
      "Don't pull behind your neck",
      "Don't let your upper body lean back"
    ],
    "muscles": {
      "primary": [
        "광배근"
      ],
      "secondary": [
        "이두근",
        "승모근 중하부"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi"
      ],
      "secondary": [
        "Biceps",
        "Mid-lower trapezius"
      ]
    }
  },
  {
    "id": "barbell-row",
    "name": "바벨 로우",
    "nameEn": "Barbell Row",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "바벨을 어깨너비로 잡고 섭니다",
      "무릎을 살짝 굽히고 상체를 앞으로 기울입니다",
      "등을 곧게 유지하며 바벨을 배꼽쪽으로 당깁니다",
      "어깨날개를 모으며 등 근육을 수축시킵니다"
    ],
    "instructionsEn": [
      "Stand and grip the barbell at shoulder width",
      "Slightly bend your knees and lean forward",
      "Pull the barbell toward your belly button while keeping your back straight",
      "Squeeze your shoulder blades together and contract your back muscles"
    ],
    "tips": [
      "등이 둥글게 되지 않게 주의하세요",
      "팔꿈치는 몸에 가깝게 유지합니다",
      "목을 과도하게 들지 마세요",
      "등 근육의 수축을 강하게 느끼세요"
    ],
    "tipsEn": [
      "Be careful not to round your back",
      "Keep your elbows close to your body",
      "Don't lift your neck excessively",
      "Feel a strong contraction in your back muscles"
    ],
    "muscles": {
      "primary": [
        "광배근",
        "승모근 중하부"
      ],
      "secondary": [
        "이두근",
        "후면 삼각근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi",
        "Mid-lower trapezius"
      ],
      "secondary": [
        "Biceps",
        "Posterior deltoid"
      ]
    }
  },
  {
    "id": "shoulder-press",
    "name": "숄더 프레스",
    "nameEn": "Shoulder Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "덤벨을 어깨 높이에서 잡습니다",
      "코어를 단단히 유지합니다",
      "덤벨을 머리 위로 밀어 올립니다",
      "천천히 시작 위치로 돌아갑니다"
    ],
    "instructionsEn": [
      "Hold dumbbells at shoulder height",
      "Keep your core tight",
      "Press the dumbbells overhead",
      "Slowly return to starting position"
    ],
    "tips": [
      "허리가 과도하게 젖혀지지 않도록 주의하세요",
      "팔꿈치가 몸 앞쪽으로 나오지 않게 합니다",
      "목 뒤로 내리지 마세요",
      "어깨 관절의 가동범위를 고려하세요"
    ],
    "tipsEn": [
      "Be careful not to hyperextend your lower back",
      "Don't let your elbows come forward",
      "Don't lower behind your neck",
      "Consider your shoulder joint range of motion"
    ],
    "muscles": {
      "primary": [
        "삼각근"
      ],
      "secondary": [
        "삼두근",
        "승모근 상부"
      ]
    },
    "musclesEn": {
      "primary": [
        "Deltoids"
      ],
      "secondary": [
        "Triceps",
        "Upper trapezius"
      ]
    }
  },
  {
    "id": "lateral-raise",
    "name": "사이드 레터럴 레이즈",
    "nameEn": "Side Lateral Raise",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "덤벨을 양손에 들고 몸 옆에 둡니다",
      "팔을 살짝 굽힌 상태로 유지합니다",
      "덤벨을 옆으로 어깨 높이까지 올립니다",
      "천천히 시작 위치로 돌아갑니다"
    ],
    "instructionsEn": [
      "Hold dumbbells at your sides",
      "Keep your arms slightly bent",
      "Raise the dumbbells to the side up to shoulder height",
      "Slowly return to starting position"
    ],
    "tips": [
      "어깨가 올라가지 않게 주의하세요",
      "덤벨을 너무 높이 올리지 마세요",
      "몸의 반동을 사용하지 않습니다",
      "어깨 측면 근육의 수축을 의식하세요"
    ],
    "tipsEn": [
      "Be careful not to shrug your shoulders",
      "Don't raise the dumbbells too high",
      "Don't use momentum",
      "Focus on contracting the side deltoids"
    ],
    "muscles": {
      "primary": [
        "삼각근 측면"
      ],
      "secondary": [
        "승모근 상부"
      ]
    },
    "musclesEn": {
      "primary": [
        "Lateral deltoid"
      ],
      "secondary": [
        "Upper trapezius"
      ]
    }
  },
  {
    "id": "reverse-pec-deck-fly",
    "name": "리버스 펙덱 플라이",
    "nameEn": "Reverse Pec Deck Fly",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "상체를 앞으로 기울이고 덤벨을 잡습니다",
      "팔을 살짝 굽힌 상태로 유지합니다",
      "덤벨을 뒤쪽으로 벌려줍니다",
      "어깨날개를 모으며 후면 삼각근을 수축시킵니다"
    ],
    "instructionsEn": [
      "Lean your upper body forward and hold dumbbells",
      "Keep your arms slightly bent",
      "Open the dumbbells to the rear",
      "Squeeze your shoulder blades and contract the rear delts"
    ],
    "tips": [
      "등을 곧게 유지하세요",
      "팔꿈치 각도를 일정하게 합니다",
      "어깨 뒤쪽 근육을 의식하세요",
      "목이 앞으로 나오지 않게 주의합니다"
    ],
    "tipsEn": [
      "Keep your back straight",
      "Maintain a constant elbow angle",
      "Focus on the rear deltoid muscles",
      "Be careful not to let your neck protrude forward"
    ],
    "muscles": {
      "primary": [
        "삼각근 후면"
      ],
      "secondary": [
        "승모근 중하부",
        "능형근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Posterior deltoid"
      ],
      "secondary": [
        "Mid-lower trapezius",
        "Rhomboids"
      ]
    }
  },
  {
    "id": "squat",
    "name": "스쿼트",
    "nameEn": "Squat",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "발을 어깨너비로 벌리고 섭니다",
      "가슴을 내밀고 등을 곧게 펴세요",
      "엉덩이를 뒤로 빼며 앉듯이 내려갑니다",
      "허벅지가 바닥과 평행할 때까지 내려갑니다"
    ],
    "instructionsEn": [
      "Stand with feet shoulder-width apart",
      "Push your chest out and straighten your back",
      "Lower down as if sitting back, pushing hips back",
      "Descend until thighs are parallel to the floor"
    ],
    "tips": [
      "무릎과 발끝 방향을 일치시킵니다",
      "코어를 단단히 유지하세요"
    ],
    "tipsEn": [
      "Align your knees and toes in the same direction",
      "Keep your core tight"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근",
        "둔근"
      ],
      "secondary": [
        "햄스트링",
        "종아리"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps",
        "Glutes"
      ],
      "secondary": [
        "Hamstrings",
        "Calves"
      ]
    }
  },
  {
    "id": "lunge",
    "name": "런지",
    "nameEn": "Lunge",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [],
    "difficulty": "beginner",
    "instructions": [
      "한 발을 크게 앞으로 내딛습니다",
      "상체를 곧게 유지합니다",
      "앞 무릎이 90도가 될 때까지 내려갑니다",
      "앞발의 힘으로 시작 위치로 돌아갑니다"
    ],
    "instructionsEn": [
      "Take a large step forward with one foot",
      "Keep your upper body straight",
      "Lower until front knee reaches 90 degrees",
      "Return to starting position using front leg strength"
    ],
    "tips": [
      "앞 무릎이 발끝을 넘지 않게 하세요",
      "뒷발 무릎이 바닥에 닿지 않게 합니다",
      "균형을 잃지 않도록 주의하세요",
      "양쪽 다리를 번갈아 가며 수행하세요"
    ],
    "tipsEn": [
      "Don't let front knee go past your toes",
      "Don't let back knee touch the floor",
      "Be careful not to lose balance",
      "Alternate between both legs"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근",
        "둔근"
      ],
      "secondary": [
        "햄스트링",
        "종아리",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps",
        "Glutes"
      ],
      "secondary": [
        "Hamstrings",
        "Calves",
        "Core"
      ]
    }
  },
  {
    "id": "leg-press",
    "name": "레그 프레스",
    "nameEn": "Leg Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "레그 프레스 머신에 앉습니다",
      "발을 어깨너비로 벌려 플레이트에 댑니다",
      "무릎을 가슴쪽으로 천천히 당깁니다",
      "다리의 힘으로 플레이트를 밀어냅니다"
    ],
    "instructionsEn": [
      "Sit on the leg press machine",
      "Place feet shoulder-width apart on the plate",
      "Slowly pull knees toward your chest",
      "Push the plate out using leg strength"
    ],
    "tips": [
      "발뒤꿈치에 힘을 주세요",
      "허리가 둥글게 되지 않게 주의합니다"
    ],
    "tipsEn": [
      "Press through your heels",
      "Be careful not to round your lower back"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근",
        "둔근"
      ],
      "secondary": [
        "햄스트링",
        "종아리"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps",
        "Glutes"
      ],
      "secondary": [
        "Hamstrings",
        "Calves"
      ]
    }
  },
  {
    "id": "bulgarian-squat",
    "name": "불가리안 스쿼트",
    "nameEn": "Bulgarian Split Squat",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [],
    "difficulty": "intermediate",
    "instructions": [
      "벤치나 의자 뒤에 서서 한 발을 뒤쪽 벤치에 올립니다",
      "앞발에 체중을 두고 무릎을 구부려 몸을 내립니다",
      "앞쪽 무릎이 발목 위에 오도록 합니다",
      "앞발로 밀어올려 시작 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Stand behind a bench or chair and place one foot on the rear bench",
      "Place weight on front foot and bend knee to lower body",
      "Position front knee over ankle",
      "Push through front foot to return to starting position"
    ],
    "tips": [
      "앞발에 체중의 대부분을 두세요",
      "뒤발은 균형을 위해서만 사용합니다",
      "무릎이 발끝을 넘지 않게 주의하세요",
      "상체를 곧게 유지합니다"
    ],
    "tipsEn": [
      "Place most of your weight on the front foot",
      "Use back foot only for balance",
      "Be careful not to let knee go past toes",
      "Keep your upper body straight"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근",
        "둔근"
      ],
      "secondary": [
        "햄스트링",
        "종아리",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps",
        "Glutes"
      ],
      "secondary": [
        "Hamstrings",
        "Calves",
        "Core"
      ]
    }
  },
  {
    "id": "dumbbell-curl",
    "name": "덤벨 컬",
    "nameEn": "Dumbbell Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "덤벨을 양손에 들고 팔을 몸 옆에 둡니다",
      "팔꿈치를 고정하고 덤벨을 어깨쪽으로 올립니다",
      "이두근의 힘으로 천천히 올립니다",
      "천천히 시작 위치로 돌아갑니다"
    ],
    "instructionsEn": [
      "Hold dumbbells with arms at your sides",
      "Keep elbows fixed and curl dumbbells toward shoulders",
      "Slowly curl up using bicep strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "팔꿈치를 몸에 붙여 고정하세요",
      "몸의 반동을 사용하지 마세요",
      "내릴 때도 천천히 조절합니다",
      "이두근의 수축을 강하게 느끼세요"
    ],
    "tipsEn": [
      "Keep elbows pinned to your sides",
      "Don't use momentum",
      "Control the weight on the way down",
      "Feel a strong bicep contraction"
    ],
    "muscles": {
      "primary": [
        "이두근"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Biceps"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "tricep-pushdown",
    "name": "트라이셉스 푸쉬다운",
    "nameEn": "Tricep Pushdown",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블 머신에서 바를 잡습니다",
      "팔꿈치를 몸에 고정합니다",
      "삼두근의 힘으로 바를 아래로 누릅니다",
      "천천히 시작 위치로 돌아갑니다"
    ],
    "instructionsEn": [
      "Grip the bar on a cable machine",
      "Keep elbows fixed to your body",
      "Push the bar down using tricep strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "팔꿈치가 앞뒤로 움직이지 않게 하세요",
      "손목을 곧게 유지합니다",
      "어깨가 올라가지 않게 주의하세요",
      "삼두근의 수축을 의식하세요"
    ],
    "tipsEn": [
      "Don't let elbows move forward or back",
      "Keep your wrists straight",
      "Be careful not to shrug shoulders",
      "Focus on tricep contraction"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "plank",
    "name": "플랭크",
    "nameEn": "Plank",
    "category": "맨몸",
    "categoryEn": "Bodyweight",
    "bodyPart": [
      "core"
    ],
    "equipment": [],
    "difficulty": "beginner",
    "instructions": [
      "팔꿈치와 발끝으로 몸을 지탱합니다",
      "머리부터 발끝까지 일직선을 유지합니다",
      "복부에 힘을 주고 자세를 유지합니다",
      "자연스럽게 호흡합니다"
    ],
    "instructionsEn": [
      "Support your body on forearms and toes",
      "Maintain a straight line from head to toes",
      "Engage your core and hold the position",
      "Breathe naturally"
    ],
    "tips": [
      "엉덩이가 위로 올라가지 않게 하세요",
      "허리가 아래로 처지지 않게 합니다",
      "목을 자연스럽게 유지하세요",
      "복부와 둔근에 계속 힘을 주세요"
    ],
    "tipsEn": [
      "Don't let your hips rise up",
      "Don't let your lower back sag",
      "Keep your neck in a neutral position",
      "Keep tension in abs and glutes"
    ],
    "muscles": {
      "primary": [
        "복직근",
        "복횡근"
      ],
      "secondary": [
        "둔근",
        "어깨",
        "등"
      ]
    },
    "musclesEn": {
      "primary": [
        "Rectus abdominis",
        "Transverse abdominis"
      ],
      "secondary": [
        "Glutes",
        "Shoulders",
        "Back"
      ]
    }
  },
  {
    "id": "crunches",
    "name": "크런치",
    "nameEn": "Crunches",
    "category": "맨몸",
    "categoryEn": "Bodyweight",
    "bodyPart": [
      "core"
    ],
    "equipment": [],
    "difficulty": "beginner",
    "instructions": [
      "등을 대고 누워 무릎을 굽힙니다",
      "손을 머리 뒤에 둡니다",
      "복부의 힘으로 상체를 올립니다",
      "천천히 시작 위치로 돌아갑니다"
    ],
    "instructionsEn": [
      "Lie on your back with knees bent",
      "Place hands behind your head",
      "Lift upper body using abdominal strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "목에 힘을 주지 마세요",
      "완전히 일어나지 않아도 됩니다",
      "복부 근육의 수축을 의식하세요",
      "허리를 바닥에 붙인 상태를 유지하세요"
    ],
    "tipsEn": [
      "Don't strain your neck",
      "You don't need to sit up completely",
      "Focus on contracting your abs",
      "Keep your lower back pressed to the floor"
    ],
    "muscles": {
      "primary": [
        "복직근"
      ],
      "secondary": [
        "복사근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Rectus abdominis"
      ],
      "secondary": [
        "Obliques"
      ]
    }
  },
  {
    "id": "bent-over-lateral-raise",
    "name": "밴트오버 레터럴 레이즈",
    "nameEn": "Bent Over Lateral Raise",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "덤벨을 양손에 들고 상체를 45도 이상 깊이 숙입니다",
      "팔을 몸 옆으로 벌려 어깨 높이까지 올립니다",
      "리어 델트를 의식하며 천천히 내립니다",
      "상체 각도를 일정하게 유지합니다"
    ],
    "instructionsEn": [
      "Hold dumbbells and bend your torso 45 degrees or more",
      "Raise arms to the sides up to shoulder height",
      "Slowly lower while focusing on rear delts",
      "Keep torso angle consistent"
    ],
    "tips": [
      "무게보다는 정확한 자세가 중요합니다",
      "리어 델트 수축을 의식하세요",
      "팔꿈치를 살짝 구부린 상태를 유지하세요",
      "허리에 무리가 가지 않도록 주의하세요"
    ],
    "tipsEn": [
      "Proper form is more important than weight",
      "Focus on rear delt contraction",
      "Keep elbows slightly bent",
      "Be careful not to strain your lower back"
    ],
    "muscles": {
      "primary": [
        "삼각근 후면"
      ],
      "secondary": [
        "승모근",
        "능형근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Posterior deltoid"
      ],
      "secondary": [
        "Trapezius",
        "Rhomboids"
      ]
    }
  },
  {
    "id": "cable-crossover",
    "name": "케이블 크로스오버",
    "nameEn": "Cable Crossover",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "케이블 머신 중앙에 서서 양손으로 핸들을 잡습니다",
      "팔을 살짝 구부린 상태로 가슴 앞에서 교차시킵니다",
      "가슴근육의 수축을 느끼며 천천히 돌아갑니다",
      "일정한 긴장을 유지합니다"
    ],
    "instructionsEn": [
      "Stand in the center of the cable machine and hold handles with both hands",
      "Cross the cables in front of your chest with arms slightly bent",
      "Slowly return while feeling chest muscle contraction",
      "Maintain constant tension"
    ],
    "tips": [
      "가슴 중앙 수축을 의식하세요",
      "팔꿈치 각도를 일정하게 유지하세요",
      "상체를 약간 앞으로 기울이세요",
      "무게보다는 수축감이 중요합니다"
    ],
    "tipsEn": [
      "Focus on contracting the center of your chest",
      "Keep elbow angle consistent",
      "Lean upper body slightly forward",
      "Contraction is more important than weight"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid"
      ]
    }
  },
  {
    "id": "t-bar-row",
    "name": "티바 로우",
    "nameEn": "T-Bar Row",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "티바 로우 머신에 가슴을 대고 핸들을 잡습니다",
      "등근육을 수축시키며 핸들을 가슴 쪽으로 당깁니다",
      "어깨날개를 모으며 등 중앙을 수축시킵니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Place chest against T-bar row machine and grip the handles",
      "Pull handles toward chest while contracting back muscles",
      "Squeeze shoulder blades together and contract mid-back",
      "Slowly return to starting position"
    ],
    "tips": [
      "가슴을 패드에 단단히 고정하세요",
      "등 중앙 수축을 의식하세요",
      "팔꿈치를 몸에 가깝게 유지하세요",
      "목을 과도하게 젖히지 마세요"
    ],
    "tipsEn": [
      "Keep chest firmly against the pad",
      "Focus on mid-back contraction",
      "Keep elbows close to your body",
      "Do not hyperextend your neck"
    ],
    "muscles": {
      "primary": [
        "광배근",
        "능형근"
      ],
      "secondary": [
        "후면 삼각근",
        "이두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi",
        "Rhomboids"
      ],
      "secondary": [
        "Posterior deltoid",
        "Biceps"
      ]
    }
  },
  {
    "id": "hammer-curl",
    "name": "해머 컬",
    "nameEn": "Hammer Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "덤벨을 양손에 들고 팔을 몸 옆에 자연스럽게 둡니다",
      "손목을 중립 위치(엄지가 위)로 유지합니다",
      "팔꿈치를 고정하고 덤벨을 어깨 쪽으로 올립니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Hold dumbbells in both hands with arms naturally at your sides",
      "Keep wrists in neutral position (thumbs up)",
      "Keep elbows fixed and curl dumbbells toward shoulders",
      "Slowly return to starting position"
    ],
    "tips": [
      "팔꿈치를 몸에 고정하세요",
      "손목 각도를 일정하게 유지하세요",
      "상완이두근과 상완근을 함께 사용합니다",
      "반동을 사용하지 마세요"
    ],
    "tipsEn": [
      "Keep elbows fixed against your body",
      "Maintain consistent wrist angle",
      "Works both biceps and brachialis",
      "Do not use momentum"
    ],
    "muscles": {
      "primary": [
        "상완이두근",
        "상완근"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Biceps brachii",
        "Brachialis"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "tricep-dips",
    "name": "딥스",
    "nameEn": "Tricep Dips",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "벤치나 딥스 바에 손을 올리고 몸을 지탱합니다",
      "다리를 앞으로 뻗거나 구부려 난이도를 조절합니다",
      "팔꿈치를 뒤로 구부리며 몸을 내립니다",
      "삼두근 힘으로 몸을 다시 밀어 올립니다"
    ],
    "instructionsEn": [
      "Place hands on bench or dip bars and support your body",
      "Extend or bend legs to adjust difficulty",
      "Bend elbows backward and lower your body",
      "Push back up using tricep strength"
    ],
    "tips": [
      "어깨를 아래로 내리고 운동하세요",
      "팔꿈치가 바깥쪽으로 벌어지지 않게 주의하세요",
      "가슴을 내밀고 등을 곧게 펴세요",
      "무릎을 구부리면 더 쉬워집니다"
    ],
    "tipsEn": [
      "Keep shoulders down during exercise",
      "Be careful not to let elbows flare out",
      "Keep chest out and back straight",
      "Bending knees makes it easier"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": [
        "대흉근 하부",
        "전면 삼각근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": [
        "Lower pectoralis",
        "Anterior deltoid"
      ]
    }
  },
  {
    "id": "arnold-press",
    "name": "아놀드 프레스",
    "nameEn": "Arnold Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "덤벨을 양손에 들고 앉거나 서서 시작합니다",
      "손바닥이 몸을 향하도록 덤벨을 어깨 높이에 둡니다",
      "덤벨을 올리면서 손목을 바깥쪽으로 회전시킵니다",
      "최고점에서 손바닥이 앞을 향하도록 합니다"
    ],
    "instructionsEn": [
      "Hold dumbbells in both hands while sitting or standing",
      "Position dumbbells at shoulder height with palms facing body",
      "Rotate wrists outward while pressing dumbbells up",
      "At top, palms should face forward"
    ],
    "tips": [
      "회전 동작을 부드럽게 하세요",
      "어깨 전체를 골고루 사용하는 운동입니다",
      "무게보다는 정확한 동작이 중요합니다",
      "어깨 부상 위험이 있으니 주의하세요"
    ],
    "tipsEn": [
      "Make the rotation movement smooth",
      "Works entire shoulder comprehensively",
      "Proper form is more important than weight",
      "Be careful of shoulder injury risk"
    ],
    "muscles": {
      "primary": [
        "삼각근 전체"
      ],
      "secondary": [
        "삼두근",
        "승모근"
      ]
    },
    "musclesEn": {
      "primary": [
        "All deltoid heads"
      ],
      "secondary": [
        "Triceps",
        "Trapezius"
      ]
    }
  },
  {
    "id": "face-pull",
    "name": "페이스 풀",
    "nameEn": "Face Pull",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블을 얼굴 높이로 설정하고 로프를 잡습니다",
      "팔꿈치를 높게 유지하며 로프를 얼굴 쪽으로 당깁니다",
      "어깨날개를 모으며 리어 델트를 수축시킵니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Set cable at face height and grip the rope",
      "Pull rope toward face keeping elbows high",
      "Squeeze shoulder blades together and contract rear delts",
      "Slowly return to starting position"
    ],
    "tips": [
      "팔꿈치를 어깨보다 높게 유지하세요",
      "어깨날개 모으기를 의식하세요",
      "목을 앞으로 빼지 마세요",
      "자세 교정에 매우 좋은 운동입니다"
    ],
    "tipsEn": [
      "Keep elbows higher than shoulders",
      "Focus on squeezing shoulder blades",
      "Do not pull neck forward",
      "Excellent exercise for posture correction"
    ],
    "muscles": {
      "primary": [
        "삼각근 후면"
      ],
      "secondary": [
        "승모근",
        "능형근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Posterior deltoid"
      ],
      "secondary": [
        "Trapezius",
        "Rhomboids"
      ]
    }
  },
  {
    "id": "seated-row",
    "name": "시티드 로우",
    "nameEn": "Seated Row",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "시티드 로우 머신에 앉아 핸들을 잡습니다",
      "등을 곧게 펴고 가슴을 내밉니다",
      "어깨날개를 모으며 핸들을 배 쪽으로 당깁니다",
      "등근육 수축을 느끼며 천천히 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on seated row machine and grip handles",
      "Keep back straight and chest out",
      "Pull handles toward abdomen while squeezing shoulder blades",
      "Slowly return while feeling back muscle contraction"
    ],
    "tips": [
      "등을 둥글게 말지 마세요",
      "어깨날개 모으기를 의식하세요",
      "팔꿈치를 몸에 가깝게 유지하세요",
      "상체를 과도하게 뒤로 젖히지 마세요"
    ],
    "tipsEn": [
      "Do not round your back",
      "Focus on squeezing shoulder blades",
      "Keep elbows close to your body",
      "Do not lean back excessively"
    ],
    "muscles": {
      "primary": [
        "광배근",
        "능형근"
      ],
      "secondary": [
        "후면 삼각근",
        "이두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi",
        "Rhomboids"
      ],
      "secondary": [
        "Posterior deltoid",
        "Biceps"
      ]
    }
  },
  {
    "id": "leg-extension",
    "name": "레그 익스텐션",
    "nameEn": "Leg Extension",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "레그 익스텐션 머신에 앉아 등받이에 등을 댑니다",
      "발목을 패드 아래에 위치시킵니다",
      "대퇴사두근 힘으로 다리를 완전히 펴줍니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on leg extension machine with back against backrest",
      "Position ankles under the pad",
      "Fully extend legs using quadriceps strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "무릎을 완전히 펴주세요",
      "대퇴사두근 수축을 의식하세요",
      "너무 무거운 중량은 피하세요",
      "등받이에 등을 완전히 대고 운동하세요"
    ],
    "tipsEn": [
      "Fully extend your knees",
      "Focus on quadriceps contraction",
      "Avoid too heavy weights",
      "Keep back fully against backrest during exercise"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Quadriceps"
      ],
      "secondary": []
    }
  },
  {
    "id": "front-squat",
    "name": "프론트 스쿼트",
    "nameEn": "Front Squat",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "바벨을 쇄골 위에 올려놓고 프론트 랙 자세를 잡습니다",
      "팔꿈치를 높이 들어 바벨이 떨어지지 않게 합니다",
      "엉덩이를 뒤로 빼며 앉듯이 내려갑니다",
      "대퇴사두근 힘으로 밀어 올라갑니다"
    ],
    "instructionsEn": [
      "Place barbell on collarbone in front rack position",
      "Keep elbows high to prevent barbell from falling",
      "Lower by pushing hips back in sitting motion",
      "Push up using quadriceps strength"
    ],
    "tips": [
      "팔꿈치를 최대한 높이 유지하세요",
      "코어를 단단히 잡아야 합니다",
      "백 스쿼트보다 대퇴사두근을 더 많이 사용합니다",
      "유연성이 부족하면 크로스 그립을 사용하세요"
    ],
    "tipsEn": [
      "Keep elbows as high as possible",
      "Core must be kept tight",
      "Uses more quadriceps than back squat",
      "Use cross grip if flexibility is insufficient"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근"
      ],
      "secondary": [
        "둔근",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps"
      ],
      "secondary": [
        "Glutes",
        "Core"
      ]
    }
  },
  {
    "id": "calf-raise",
    "name": "카프 레이즈",
    "nameEn": "Calf Raise",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "스탠딩 카프 레이즈 머신에 어깨를 대고 섭니다",
      "발 앞쪽만 플레이트에 올립니다",
      "발뒤꿈치를 최대한 높이 올립니다",
      "천천히 내려갑니다"
    ],
    "instructionsEn": [
      "Stand in standing calf raise machine with shoulders under pads",
      "Place only front of feet on platform",
      "Raise heels as high as possible",
      "Slowly lower down"
    ],
    "tips": [
      "최대 수축에서 잠시 멈추세요",
      "반동을 사용하지 마세요"
    ],
    "tipsEn": [
      "Pause briefly at peak contraction",
      "Do not use momentum"
    ],
    "muscles": {
      "primary": [
        "비복근",
        "가자미근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Gastrocnemius",
        "Soleus"
      ],
      "secondary": []
    }
  },
  {
    "id": "seated-calf-raise",
    "name": "시티드 카프 레이즈",
    "nameEn": "Seated Calf Raise",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "시티드 카프 레이즈 머신에 앉아 무릎에 패드를 올립니다",
      "발 앞쪽만 발판에 올립니다",
      "발뒤꿈치를 최대한 높이 올립니다",
      "천천히 내려갑니다"
    ],
    "instructionsEn": [
      "Sit in seated calf raise machine with pad on knees",
      "Place only front of feet on footrest",
      "Raise heels as high as possible",
      "Slowly lower down"
    ],
    "tips": [
      "가자미근을 집중적으로 자극합니다",
      "스탠딩과 함께 실시하면 종아리를 완전히 발달시킬 수 있습니다"
    ],
    "tipsEn": [
      "Intensively targets soleus muscle",
      "Complete calf development when combined with standing version"
    ],
    "muscles": {
      "primary": [
        "가자미근"
      ],
      "secondary": [
        "비복근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Soleus"
      ],
      "secondary": [
        "Gastrocnemius"
      ]
    }
  },
  {
    "id": "goblet-squat",
    "name": "고블릿 스쿼트",
    "nameEn": "Goblet Squat",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "덤벨을 가슴 앞에서 양손으로 잡습니다",
      "발을 어깨너비로 벌립니다",
      "엉덩이를 뒤로 빼며 내려갑니다",
      "다리 힘으로 밀어 올라갑니다"
    ],
    "instructionsEn": [
      "Hold dumbbell in front of chest with both hands",
      "Stand with feet shoulder-width apart",
      "Lower by pushing hips back",
      "Push up using leg strength"
    ],
    "tips": [
      "초보자에게 적합한 스쿼트 변형입니다",
      "덤벨이 상체를 곧게 유지하게 도와줍니다",
      "무릎이 발끝 방향과 일치하게 하세요"
    ],
    "tipsEn": [
      "Suitable squat variation for beginners",
      "Dumbbell helps keep torso upright",
      "Ensure knees align with toe direction"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근",
        "둔근"
      ],
      "secondary": [
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps",
        "Glutes"
      ],
      "secondary": [
        "Core"
      ]
    }
  },
  {
    "id": "hip-thrust",
    "name": "힙 쓰러스트",
    "nameEn": "Hip Thrust",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "barbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "벤치에 등 상부를 기대고 바벨을 골반 위에 올립니다",
      "발을 바닥에 단단히 고정합니다",
      "둔근 힘으로 골반을 위로 밀어 올립니다",
      "최고점에서 둔근을 강하게 수축시킵니다"
    ],
    "instructionsEn": [
      "Lean upper back against bench with barbell on pelvis",
      "Keep feet firmly planted on floor",
      "Push pelvis up using glute strength",
      "Strongly contract glutes at top"
    ],
    "tips": [
      "둔근 발달에 가장 효과적인 운동입니다",
      "턱을 당기고 허리를 과도하게 젖히지 마세요",
      "바벨에 패드를 사용하세요"
    ],
    "tipsEn": [
      "Most effective exercise for glute development",
      "Tuck chin and do not hyperextend lower back",
      "Use pad on barbell"
    ],
    "muscles": {
      "primary": [
        "둔근"
      ],
      "secondary": [
        "햄스트링",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Glutes"
      ],
      "secondary": [
        "Hamstrings",
        "Core"
      ]
    }
  },
  {
    "id": "glute-bridge",
    "name": "글루트 브릿지",
    "nameEn": "Glute Bridge",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [],
    "difficulty": "beginner",
    "instructions": [
      "등을 대고 누워 무릎을 구부립니다",
      "발을 바닥에 단단히 고정합니다",
      "둔근 힘으로 골반을 위로 밀어 올립니다",
      "천천히 내려갑니다"
    ],
    "instructionsEn": [
      "Lie on back and bend knees",
      "Keep feet firmly planted on floor",
      "Push pelvis up using glute strength",
      "Slowly lower down"
    ],
    "tips": [
      "힙 쓰러스트의 맨몸 버전입니다",
      "둔근 수축을 의식하세요",
      "허리가 과도하게 젖혀지지 않게 주의하세요"
    ],
    "tipsEn": [
      "Bodyweight version of hip thrust",
      "Focus on glute contraction",
      "Be careful not to hyperextend lower back"
    ],
    "muscles": {
      "primary": [
        "둔근"
      ],
      "secondary": [
        "햄스트링"
      ]
    },
    "musclesEn": {
      "primary": [
        "Glutes"
      ],
      "secondary": [
        "Hamstrings"
      ]
    }
  },
  {
    "id": "step-up",
    "name": "스텝업",
    "nameEn": "Step Up",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "bench"
    ],
    "difficulty": "beginner",
    "instructions": [
      "벤치나 박스 앞에 섭니다",
      "한 발을 박스 위에 올립니다",
      "올린 발로 밀어 올라갑니다",
      "천천히 내려갑니다"
    ],
    "instructionsEn": [
      "Stand in front of bench or box",
      "Place one foot on top of box",
      "Push up with raised foot",
      "Slowly lower down"
    ],
    "tips": [
      "올린 발에 체중을 충분히 실으세요",
      "뒷발로 밀지 마세요",
      "양쪽 번갈아 실시합니다"
    ],
    "tipsEn": [
      "Put enough weight on raised foot",
      "Do not push with back foot",
      "Alternate both sides"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근",
        "둔근"
      ],
      "secondary": [
        "햄스트링"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps",
        "Glutes"
      ],
      "secondary": [
        "Hamstrings"
      ]
    }
  },
  {
    "id": "hack-squat",
    "name": "핵 스쿼트",
    "nameEn": "Hack Squat",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "핵 스쿼트 머신에 등을 대고 섭니다",
      "발을 어깨너비로 벌려 플레이트에 댑니다",
      "무릎을 구부려 내려갑니다",
      "다리 힘으로 밀어 올라갑니다"
    ],
    "instructionsEn": [
      "Stand in hack squat machine with back against pad",
      "Place feet shoulder-width apart on platform",
      "Bend knees and lower down",
      "Push up using leg strength"
    ],
    "tips": [
      "프리 스쿼트보다 대퇴사두근에 더 집중할 수 있습니다",
      "발 위치에 따라 자극 부위가 달라집니다",
      "무릎을 완전히 펴지 마세요"
    ],
    "tipsEn": [
      "Can focus more on quadriceps than free squat",
      "Stimulation area varies with foot position",
      "Do not fully extend knees"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근"
      ],
      "secondary": [
        "둔근",
        "햄스트링"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps"
      ],
      "secondary": [
        "Glutes",
        "Hamstrings"
      ]
    }
  },
  {
    "id": "side-lunge",
    "name": "사이드 런지",
    "nameEn": "Side Lunge",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [],
    "difficulty": "beginner",
    "instructions": [
      "발을 모으고 섭니다",
      "한 발을 옆으로 크게 벌립니다",
      "벌린 쪽 무릎을 구부려 내려갑니다",
      "밀어서 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Stand with feet together",
      "Step one foot out to the side widely",
      "Lower down by bending the stepping leg",
      "Push back to starting position"
    ],
    "tips": [
      "내전근과 둔근을 함께 자극합니다",
      "상체를 곧게 유지하세요",
      "무릎이 발끝을 넘지 않게 주의하세요"
    ],
    "tipsEn": [
      "Targets both adductors and glutes",
      "Keep torso upright",
      "Be careful not to let knee pass toes"
    ],
    "muscles": {
      "primary": [
        "내전근",
        "대퇴사두근"
      ],
      "secondary": [
        "둔근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Adductors",
        "Quadriceps"
      ],
      "secondary": [
        "Glutes"
      ]
    }
  },
  {
    "id": "reverse-lunge",
    "name": "리버스 런지",
    "nameEn": "Reverse Lunge",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [],
    "difficulty": "beginner",
    "instructions": [
      "양발을 모으고 섭니다",
      "한 발을 뒤로 크게 내딛습니다",
      "앞 무릎이 90도가 될 때까지 내려갑니다",
      "앞발로 밀어 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Stand with feet together",
      "Step one foot back widely",
      "Lower until front knee reaches 90 degrees",
      "Push with front foot to return to starting position"
    ],
    "tips": [
      "앞으로 런지보다 무릎에 부담이 적습니다",
      "균형을 잘 잡으세요",
      "둔근 자극이 더 큽니다"
    ],
    "tipsEn": [
      "Less stress on knees than forward lunge",
      "Keep good balance",
      "Greater glute activation"
    ],
    "muscles": {
      "primary": [
        "둔근",
        "대퇴사두근"
      ],
      "secondary": [
        "햄스트링"
      ]
    },
    "musclesEn": {
      "primary": [
        "Glutes",
        "Quadriceps"
      ],
      "secondary": [
        "Hamstrings"
      ]
    }
  },
  {
    "id": "barbell-lunge",
    "name": "바벨 런지",
    "nameEn": "Barbell Lunge",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "바벨을 어깨에 올리고 섭니다",
      "한 발을 크게 앞으로 내딛습니다",
      "앞 무릎이 90도가 될 때까지 내려갑니다",
      "앞발로 밀어 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Place barbell on shoulders and stand",
      "Step one foot forward widely",
      "Lower until front knee reaches 90 degrees",
      "Push with front foot to return to starting position"
    ],
    "tips": [
      "바벨로 인한 부하가 더해져 강도가 높습니다",
      "균형 유지가 중요합니다",
      "코어를 단단히 잡으세요"
    ],
    "tipsEn": [
      "Added load from barbell increases intensity",
      "Balance maintenance is important",
      "Keep core tight"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근",
        "둔근"
      ],
      "secondary": [
        "햄스트링",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps",
        "Glutes"
      ],
      "secondary": [
        "Hamstrings",
        "Core"
      ]
    }
  },
  {
    "id": "adductor-machine",
    "name": "어덕터 머신",
    "nameEn": "Adductor Machine",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "머신에 앉아 다리를 패드에 댑니다",
      "다리를 벌린 상태에서 시작합니다",
      "내전근 힘으로 다리를 모읍니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit in machine with legs against pads",
      "Start with legs spread apart",
      "Bring legs together using adductor strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "내전근(허벅지 안쪽)을 집중적으로 자극합니다",
      "반동을 사용하지 마세요"
    ],
    "tipsEn": [
      "Intensively targets adductors (inner thighs)",
      "Do not use momentum"
    ],
    "muscles": {
      "primary": [
        "내전근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Adductors"
      ],
      "secondary": []
    }
  },
  {
    "id": "abductor-machine",
    "name": "어브덕터 머신",
    "nameEn": "Abductor Machine",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "머신에 앉아 다리를 패드에 댑니다",
      "다리를 모은 상태에서 시작합니다",
      "외전근 힘으로 다리를 벌립니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit in machine with legs against pads",
      "Start with legs together",
      "Spread legs apart using abductor strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "중둔근(엉덩이 옆)을 집중적으로 자극합니다",
      "반동을 사용하지 마세요"
    ],
    "tipsEn": [
      "Intensively targets gluteus medius (side of hips)",
      "Do not use momentum"
    ],
    "muscles": {
      "primary": [
        "중둔근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Gluteus medius"
      ],
      "secondary": []
    }
  },
  {
    "id": "leg-curl",
    "name": "레그 컬",
    "nameEn": "Leg Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "레그 컬 머신에 엎드려 패드를 발목에 위치시킵니다",
      "햄스트링 힘으로 발을 둔부 쪽으로 당깁니다",
      "햄스트링 수축을 느끼며 잠시 정지합니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Lie face down on leg curl machine with pad at ankles",
      "Curl feet toward glutes using hamstring strength",
      "Pause briefly feeling hamstring contraction",
      "Slowly return to starting position"
    ],
    "tips": [
      "햄스트링 수축을 의식하세요",
      "허리를 과도하게 젖히지 마세요",
      "발목을 굽히지 말고 일직선을 유지하세요",
      "대퇴사두근과 균형을 맞춰 운동하세요"
    ],
    "tipsEn": [
      "Focus on hamstring contraction",
      "Do not hyperextend lower back",
      "Keep ankles straight, do not flex",
      "Balance with quadriceps training"
    ],
    "muscles": {
      "primary": [
        "햄스트링"
      ],
      "secondary": [
        "종아리"
      ]
    },
    "musclesEn": {
      "primary": [
        "Hamstrings"
      ],
      "secondary": [
        "Calves"
      ]
    }
  },
  {
    "id": "dumbbell-press",
    "name": "덤벨 프레스",
    "nameEn": "Dumbbell Bench Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "dumbbell",
      "bench"
    ],
    "difficulty": "beginner",
    "instructions": [
      "벤치에 누워 덤벨을 가슴 위에서 잡습니다",
      "팔꿈치를 구부려 덤벨을 가슴 양옆으로 내립니다",
      "가슴근육 힘으로 밀어 올립니다",
      "팔이 완전히 펴질 때까지 올립니다"
    ],
    "instructionsEn": [
      "Lie on the bench and hold dumbbells above your chest",
      "Bend your elbows and lower the dumbbells to the sides of your chest",
      "Press up using your chest muscles",
      "Extend your arms fully"
    ],
    "tips": [
      "바벨보다 가동범위가 넓습니다",
      "어깨날개를 모으고 유지하세요",
      "좌우 균형 발달에 좋습니다"
    ],
    "tipsEn": [
      "Greater range of motion than barbell press",
      "Keep your shoulder blades retracted",
      "Great for balanced development"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "incline-dumbbell-press",
    "name": "인클라인 덤벨 프레스",
    "nameEn": "Incline Dumbbell Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "dumbbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "인클라인 벤치에 누워 덤벨을 가슴 위에서 잡습니다",
      "가슴 상부까지 천천히 내립니다",
      "가슴 상부 힘으로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Lie on an incline bench and hold dumbbells above your chest",
      "Slowly lower to your upper chest",
      "Press up using your upper chest muscles"
    ],
    "tips": [
      "벤치 각도는 30-45도가 적당합니다",
      "가슴 상부 수축을 의식하세요"
    ],
    "tipsEn": [
      "Bench angle of 30-45 degrees is ideal",
      "Focus on upper chest contraction"
    ],
    "muscles": {
      "primary": [
        "대흉근 상부"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Upper pectoralis"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "decline-dumbbell-press",
    "name": "디클라인 덤벨 프레스",
    "nameEn": "Decline Dumbbell Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "dumbbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "디클라인 벤치에 누워 발을 고정합니다",
      "덤벨을 가슴 양옆으로 내립니다",
      "가슴 하부 힘으로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Lie on a decline bench and secure your feet",
      "Lower the dumbbells to the sides of your chest",
      "Press up using your lower chest muscles"
    ],
    "tips": [
      "가슴 하부 수축을 의식하세요",
      "혈액이 머리로 몰리지 않게 주의하세요"
    ],
    "tipsEn": [
      "Focus on lower chest contraction",
      "Be careful of blood rushing to your head"
    ],
    "muscles": {
      "primary": [
        "대흉근 하부"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Lower pectoralis"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "close-grip-bench-press",
    "name": "클로즈그립 벤치프레스",
    "nameEn": "Close Grip Bench Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest",
      "arm"
    ],
    "equipment": [
      "barbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "벤치에 누워 바벨을 어깨너비보다 좁게 잡습니다",
      "가슴까지 천천히 내립니다",
      "삼두근 힘으로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Lie on the bench and grip the barbell narrower than shoulder width",
      "Slowly lower to your chest",
      "Press up using your triceps"
    ],
    "tips": [
      "삼두근과 가슴 내측을 함께 자극합니다",
      "손목에 무리가 가지 않게 주의하세요"
    ],
    "tipsEn": [
      "Targets both triceps and inner chest",
      "Be careful not to strain your wrists"
    ],
    "muscles": {
      "primary": [
        "삼두근",
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면"
      ]
    },
    "musclesEn": {
      "primary": [
        "Triceps",
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid"
      ]
    }
  },
  {
    "id": "wide-grip-bench-press",
    "name": "와이드그립 벤치프레스",
    "nameEn": "Wide Grip Bench Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "barbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "벤치에 누워 바벨을 어깨너비보다 넓게 잡습니다",
      "가슴까지 천천히 내립니다",
      "가슴 외측 힘으로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Lie on the bench and grip the barbell wider than shoulder width",
      "Slowly lower to your chest",
      "Press up using your outer chest muscles"
    ],
    "tips": [
      "가슴 외측 자극이 더 큽니다",
      "어깨 부상에 주의하세요"
    ],
    "tipsEn": [
      "Greater outer chest activation",
      "Be careful of shoulder injury"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "chest-press-machine",
    "name": "[머신] 체스트 프레스",
    "nameEn": "Machine Chest Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "머신에 앉아 핸들을 잡습니다",
      "가슴 높이에서 앞으로 밀어냅니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on the machine and grip the handles",
      "Press forward from chest height",
      "Slowly return to the starting position"
    ],
    "tips": [
      "초보자에게 안전한 가슴 운동입니다",
      "좌석 높이를 적절히 조절하세요"
    ],
    "tipsEn": [
      "Safe chest exercise for beginners",
      "Adjust seat height appropriately"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "cable-fly",
    "name": "케이블 플라이",
    "nameEn": "Cable Fly",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "케이블 머신 중앙에 서서 핸들을 잡습니다",
      "팔을 살짝 구부린 상태로 가슴 앞에서 모읍니다",
      "가슴 수축을 느끼며 천천히 벌립니다"
    ],
    "instructionsEn": [
      "Stand in the center of the cable machine and grip the handles",
      "Bring your arms together in front of your chest with slight bend",
      "Feel the chest contraction and slowly open your arms"
    ],
    "tips": [
      "일정한 긴장을 유지하세요",
      "가슴 중앙 수축을 의식하세요"
    ],
    "tipsEn": [
      "Maintain constant tension",
      "Focus on center chest contraction"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid"
      ]
    }
  },
  {
    "id": "incline-cable-fly",
    "name": "인클라인 케이블 플라이",
    "nameEn": "Incline Cable Fly",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "cable",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "인클라인 벤치를 케이블 머신 사이에 놓습니다",
      "로우 케이블 핸들을 잡고 위로 모읍니다",
      "가슴 상부 수축을 느끼며 천천히 돌아갑니다"
    ],
    "instructionsEn": [
      "Place an incline bench between cable machines",
      "Grab low cable handles and bring them together upward",
      "Feel the upper chest contraction and slowly return"
    ],
    "tips": [
      "가슴 상부에 집중하세요",
      "케이블의 각도를 아래에서 위로 설정합니다"
    ],
    "tipsEn": [
      "Focus on upper chest",
      "Set cable angle from low to high"
    ],
    "muscles": {
      "primary": [
        "대흉근 상부"
      ],
      "secondary": [
        "삼각근 전면"
      ]
    },
    "musclesEn": {
      "primary": [
        "Upper pectoralis"
      ],
      "secondary": [
        "Anterior deltoid"
      ]
    }
  },
  {
    "id": "pec-deck-fly",
    "name": "펙덱 플라이",
    "nameEn": "Pec Deck Fly",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "펙덱 머신에 앉아 팔을 패드에 댑니다",
      "가슴 힘으로 팔을 앞으로 모읍니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on the pec deck machine and place your arms on the pads",
      "Bring your arms together using your chest muscles",
      "Slowly return to the starting position"
    ],
    "tips": [
      "가슴 내측 수축에 집중하세요",
      "머신이라 안전하게 실시할 수 있습니다"
    ],
    "tipsEn": [
      "Focus on inner chest contraction",
      "Safe to perform with machine"
    ],
    "muscles": {
      "primary": [
        "대흉근"
      ],
      "secondary": [
        "삼각근 전면"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major"
      ],
      "secondary": [
        "Anterior deltoid"
      ]
    }
  },
  {
    "id": "dumbbell-pullover",
    "name": "덤벨 풀오버",
    "nameEn": "Dumbbell Pullover",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest",
      "back"
    ],
    "equipment": [
      "dumbbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "벤치에 등 상부를 대고 덤벨을 가슴 위에서 잡습니다",
      "팔을 살짝 구부린 채 머리 뒤로 내립니다",
      "가슴과 등 근육 힘으로 다시 올립니다"
    ],
    "instructionsEn": [
      "Place your upper back on the bench and hold a dumbbell above your chest",
      "Lower the dumbbell behind your head with slightly bent arms",
      "Raise it back up using chest and back muscles"
    ],
    "tips": [
      "가슴과 광배근을 동시에 자극합니다",
      "어깨 유연성에 따라 가동범위를 조절하세요"
    ],
    "tipsEn": [
      "Targets both chest and lats simultaneously",
      "Adjust range of motion based on shoulder flexibility"
    ],
    "muscles": {
      "primary": [
        "대흉근",
        "광배근"
      ],
      "secondary": [
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Pectoralis major",
        "Latissimus dorsi"
      ],
      "secondary": [
        "Triceps"
      ]
    }
  },
  {
    "id": "chin-up",
    "name": "친업",
    "nameEn": "Chin Up",
    "category": "맨몸",
    "categoryEn": "Bodyweight",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "pull-up-bar"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "철봉을 어깨너비로 역수(손바닥이 몸 쪽)로 잡습니다",
      "등과 이두근 힘으로 몸을 위로 당깁니다",
      "턱이 철봉을 넘을 때까지 올라갑니다",
      "천천히 내려갑니다"
    ],
    "instructionsEn": [
      "Grip the bar shoulder-width with underhand grip (palms facing you)",
      "Pull yourself up using back and biceps",
      "Pull until your chin is over the bar",
      "Slowly lower down"
    ],
    "tips": [
      "풀업보다 이두근 개입이 큽니다",
      "등 근육 수축을 의식하세요"
    ],
    "tipsEn": [
      "More bicep involvement than pull-ups",
      "Focus on back muscle contraction"
    ],
    "muscles": {
      "primary": [
        "광배근",
        "이두근"
      ],
      "secondary": [
        "승모근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi",
        "Biceps"
      ],
      "secondary": [
        "Trapezius"
      ]
    }
  },
  {
    "id": "one-arm-dumbbell-row",
    "name": "원암 덤벨 로우",
    "nameEn": "One Arm Dumbbell Row",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "dumbbell",
      "bench"
    ],
    "difficulty": "beginner",
    "instructions": [
      "한 손과 한 무릎을 벤치에 올립니다",
      "반대 손으로 덤벨을 잡습니다",
      "등 근육 힘으로 덤벨을 배 쪽으로 당깁니다",
      "어깨날개를 모으며 수축합니다"
    ],
    "instructionsEn": [
      "Place one hand and knee on the bench",
      "Hold a dumbbell in the opposite hand",
      "Pull the dumbbell to your abdomen using back muscles",
      "Squeeze shoulder blades together"
    ],
    "tips": [
      "등이 둥글게 되지 않게 주의하세요",
      "팔꿈치를 몸에 가깝게 유지합니다"
    ],
    "tipsEn": [
      "Keep your back from rounding",
      "Keep elbow close to your body"
    ],
    "muscles": {
      "primary": [
        "광배근"
      ],
      "secondary": [
        "이두근",
        "후면 삼각근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi"
      ],
      "secondary": [
        "Biceps",
        "Posterior deltoid"
      ]
    }
  },
  {
    "id": "shrug",
    "name": "슈러그",
    "nameEn": "Shrugs",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "바벨을 어깨너비로 잡고 곧게 섭니다",
      "어깨를 귀 쪽으로 최대한 올립니다",
      "승모근 수축을 느끼며 잠시 정지합니다",
      "천천히 내려갑니다"
    ],
    "instructionsEn": [
      "Hold the barbell at shoulder width and stand straight",
      "Raise your shoulders as high as possible toward your ears",
      "Hold the contraction briefly",
      "Slowly lower down"
    ],
    "tips": [
      "어깨를 앞뒤로 돌리지 마세요",
      "승모근 상부를 집중적으로 자극합니다"
    ],
    "tipsEn": [
      "Do not roll shoulders forward or backward",
      "Targets upper trapezius intensively"
    ],
    "muscles": {
      "primary": [
        "승모근 상부"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Upper trapezius"
      ],
      "secondary": []
    }
  },
  {
    "id": "hyperextension",
    "name": "하이퍼익스텐션",
    "nameEn": "Hyperextension",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "하이퍼익스텐션 벤치에 엎드립니다",
      "상체를 아래로 천천히 내립니다",
      "척추기립근 힘으로 상체를 올립니다",
      "몸이 일직선이 될 때까지 올라갑니다"
    ],
    "instructionsEn": [
      "Lie face down on the hyperextension bench",
      "Slowly lower your upper body",
      "Raise your upper body using erector spinae",
      "Raise until your body forms a straight line"
    ],
    "tips": [
      "허리를 과도하게 젖히지 마세요",
      "척추기립근 수축을 의식하세요"
    ],
    "tipsEn": [
      "Do not hyperextend your lower back",
      "Focus on erector spinae contraction"
    ],
    "muscles": {
      "primary": [
        "척추기립근"
      ],
      "secondary": [
        "둔근",
        "햄스트링"
      ]
    },
    "musclesEn": {
      "primary": [
        "Erector spinae"
      ],
      "secondary": [
        "Glutes",
        "Hamstrings"
      ]
    }
  },
  {
    "id": "reverse-fly",
    "name": "리버스 플라이",
    "nameEn": "Reverse Fly",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back",
      "shoulder"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "상체를 앞으로 기울이고 덤벨을 잡습니다",
      "팔을 뒤쪽으로 벌립니다",
      "어깨날개를 모으며 수축합니다",
      "천천히 내려갑니다"
    ],
    "instructionsEn": [
      "Bend forward and hold dumbbells",
      "Spread your arms backward",
      "Squeeze shoulder blades together",
      "Slowly lower down"
    ],
    "tips": [
      "후면 삼각근과 승모근 중하부를 자극합니다",
      "무게보다 정확한 자세가 중요합니다"
    ],
    "tipsEn": [
      "Targets rear deltoids and mid-lower traps",
      "Proper form is more important than weight"
    ],
    "muscles": {
      "primary": [
        "후면 삼각근"
      ],
      "secondary": [
        "승모근 중하부",
        "능형근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Posterior deltoid"
      ],
      "secondary": [
        "Mid-lower trapezius",
        "Rhomboids"
      ]
    }
  },
  {
    "id": "assisted-pull-up",
    "name": "어시스트 풀업",
    "nameEn": "Assisted Pull Up",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "어시스트 풀업 머신에 올라가 무릎을 패드에 올립니다",
      "바를 어깨너비로 잡습니다",
      "등 근육 힘으로 몸을 위로 당깁니다",
      "천천히 내려갑니다"
    ],
    "instructionsEn": [
      "Step onto the assisted pull-up machine and place knees on pad",
      "Grip the bar at shoulder width",
      "Pull yourself up using back muscles",
      "Slowly lower down"
    ],
    "tips": [
      "풀업이 어려운 초보자에게 적합합니다",
      "점진적으로 보조 중량을 줄여가세요"
    ],
    "tipsEn": [
      "Suitable for beginners who cannot do pull-ups",
      "Gradually reduce assistance weight"
    ],
    "muscles": {
      "primary": [
        "광배근"
      ],
      "secondary": [
        "이두근",
        "승모근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi"
      ],
      "secondary": [
        "Biceps",
        "Trapezius"
      ]
    }
  },
  {
    "id": "straight-arm-pulldown",
    "name": "스트레이트 암 풀다운",
    "nameEn": "Straight Arm Pulldown",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블 머신 앞에 서서 바를 잡습니다",
      "팔을 편 상태로 바를 허벅지까지 당깁니다",
      "광배근 수축을 느끼며 잠시 정지합니다",
      "천천히 돌아갑니다"
    ],
    "instructionsEn": [
      "Stand in front of cable machine and grip the bar",
      "Pull the bar down to your thighs with straight arms",
      "Feel the lat contraction and pause",
      "Slowly return"
    ],
    "tips": [
      "팔을 편 상태를 유지하세요",
      "광배근을 고립시켜 자극합니다"
    ],
    "tipsEn": [
      "Keep arms straight",
      "Isolates the lats"
    ],
    "muscles": {
      "primary": [
        "광배근"
      ],
      "secondary": [
        "삼두근 장두"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi"
      ],
      "secondary": [
        "Triceps long head"
      ]
    }
  },
  {
    "id": "good-morning",
    "name": "굿모닝",
    "nameEn": "Good Morning",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back",
      "leg"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "바벨을 어깨에 올리고 섭니다",
      "무릎을 살짝 굽힌 상태로 고정합니다",
      "엉덩이를 뒤로 빼며 상체를 앞으로 기울입니다",
      "햄스트링 스트레칭을 느끼며 다시 올라갑니다"
    ],
    "instructionsEn": [
      "Place barbell on shoulders and stand",
      "Keep knees slightly bent and fixed",
      "Hinge at hips and lean forward",
      "Feel hamstring stretch and return"
    ],
    "tips": [
      "등을 항상 곧게 유지하세요",
      "가벼운 무게로 시작하세요"
    ],
    "tipsEn": [
      "Always keep back straight",
      "Start with light weight"
    ],
    "muscles": {
      "primary": [
        "햄스트링",
        "척추기립근"
      ],
      "secondary": [
        "둔근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Hamstrings",
        "Erector spinae"
      ],
      "secondary": [
        "Glutes"
      ]
    }
  },
  {
    "id": "pendlay-row",
    "name": "펜들레이 로우",
    "nameEn": "Pendlay Row",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "back"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "advanced",
    "instructions": [
      "바벨을 바닥에 놓고 어깨너비로 잡습니다",
      "상체를 바닥과 평행하게 유지합니다",
      "폭발적으로 바벨을 배 쪽으로 당깁니다",
      "바닥에 내려놓고 반복합니다"
    ],
    "instructionsEn": [
      "Place barbell on floor and grip at shoulder width",
      "Keep torso parallel to floor",
      "Explosively pull barbell to abdomen",
      "Lower to floor and repeat"
    ],
    "tips": [
      "매 반복마다 바닥에서 시작합니다",
      "바벨 로우보다 더 폭발적인 동작입니다"
    ],
    "tipsEn": [
      "Each rep starts from the floor",
      "More explosive than barbell row"
    ],
    "muscles": {
      "primary": [
        "광배근",
        "승모근"
      ],
      "secondary": [
        "이두근",
        "후면 삼각근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Latissimus dorsi",
        "Trapezius"
      ],
      "secondary": [
        "Biceps",
        "Posterior deltoid"
      ]
    }
  },
  {
    "id": "overhead-press",
    "name": "오버헤드 프레스",
    "nameEn": "Overhead Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "바벨을 어깨 높이에서 어깨너비로 잡습니다",
      "코어를 단단히 잡고 바벨을 머리 위로 밀어 올립니다",
      "팔이 완전히 펴질 때까지 올립니다",
      "천천히 어깨 높이로 내립니다"
    ],
    "instructionsEn": [
      "Hold barbell at shoulder height with shoulder-width grip",
      "Brace your core and press the barbell overhead",
      "Extend arms fully",
      "Slowly lower to shoulder height"
    ],
    "tips": [
      "허리가 과도하게 젖혀지지 않게 주의하세요",
      "바벨 밀리터리 프레스와 같은 운동입니다"
    ],
    "tipsEn": [
      "Be careful not to hyperextend your lower back",
      "Same exercise as barbell military press"
    ],
    "muscles": {
      "primary": [
        "삼각근 전면"
      ],
      "secondary": [
        "삼두근",
        "승모근 상부"
      ]
    },
    "musclesEn": {
      "primary": [
        "Anterior deltoid"
      ],
      "secondary": [
        "Triceps",
        "Upper trapezius"
      ]
    }
  },
  {
    "id": "machine-shoulder-press",
    "name": "[머신] 숄더 프레스",
    "nameEn": "Machine Shoulder Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "머신에 앉아 핸들을 잡습니다",
      "어깨 높이에서 위로 밀어 올립니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on the machine and grip the handles",
      "Press upward from shoulder height",
      "Slowly return to starting position"
    ],
    "tips": [
      "초보자에게 안전한 어깨 운동입니다",
      "좌석 높이를 적절히 조절하세요"
    ],
    "tipsEn": [
      "Safe shoulder exercise for beginners",
      "Adjust seat height appropriately"
    ],
    "muscles": {
      "primary": [
        "삼각근"
      ],
      "secondary": [
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Deltoids"
      ],
      "secondary": [
        "Triceps"
      ]
    }
  },
  {
    "id": "front-raise",
    "name": "프론트 레이즈",
    "nameEn": "Front Raise",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "덤벨을 양손에 들고 몸 앞에 둡니다",
      "팔을 살짝 굽힌 상태로 앞으로 올립니다",
      "어깨 높이까지 올린 후 천천히 내립니다"
    ],
    "instructionsEn": [
      "Hold dumbbells in both hands in front of your body",
      "Raise arms forward with slight bend",
      "Raise to shoulder height then slowly lower"
    ],
    "tips": [
      "삼각근 전면을 집중적으로 자극합니다",
      "반동을 사용하지 마세요"
    ],
    "tipsEn": [
      "Targets anterior deltoids intensively",
      "Do not use momentum"
    ],
    "muscles": {
      "primary": [
        "삼각근 전면"
      ],
      "secondary": [
        "승모근 상부"
      ]
    },
    "musclesEn": {
      "primary": [
        "Anterior deltoid"
      ],
      "secondary": [
        "Upper trapezius"
      ]
    }
  },
  {
    "id": "upright-row",
    "name": "업라이트 로우",
    "nameEn": "Upright Row",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "바벨을 어깨너비보다 좁게 잡습니다",
      "팔꿈치를 위로 들며 바벨을 턱까지 당깁니다",
      "삼각근과 승모근 수축을 느끼며 잠시 정지합니다",
      "천천히 내립니다"
    ],
    "instructionsEn": [
      "Grip barbell narrower than shoulder width",
      "Pull barbell to chin raising elbows",
      "Feel deltoid and trap contraction and pause",
      "Slowly lower"
    ],
    "tips": [
      "팔꿈치를 최대한 높이 올리세요",
      "어깨 충돌증후군이 있다면 피하세요"
    ],
    "tipsEn": [
      "Raise elbows as high as possible",
      "Avoid if you have shoulder impingement"
    ],
    "muscles": {
      "primary": [
        "삼각근 측면",
        "승모근"
      ],
      "secondary": [
        "이두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Lateral deltoid",
        "Trapezius"
      ],
      "secondary": [
        "Biceps"
      ]
    }
  },
  {
    "id": "cable-lateral-raise",
    "name": "케이블 레터럴 레이즈",
    "nameEn": "Cable Lateral Raise",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블 머신 옆에 서서 반대쪽 손으로 핸들을 잡습니다",
      "팔을 옆으로 어깨 높이까지 올립니다",
      "천천히 내립니다"
    ],
    "instructionsEn": [
      "Stand beside cable machine and grip handle with opposite hand",
      "Raise arm laterally to shoulder height",
      "Slowly lower"
    ],
    "tips": [
      "케이블이 일정한 긴장을 제공합니다",
      "덤벨보다 하부에서도 자극이 유지됩니다"
    ],
    "tipsEn": [
      "Cable provides constant tension",
      "Tension maintained even in bottom position unlike dumbbells"
    ],
    "muscles": {
      "primary": [
        "삼각근 측면"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Lateral deltoid"
      ],
      "secondary": []
    }
  },
  {
    "id": "rear-delt-cable",
    "name": "리어 델트 케이블",
    "nameEn": "Rear Delt Cable",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블을 얼굴 높이에 설정합니다",
      "교차하여 케이블을 잡습니다",
      "팔을 뒤로 벌리며 후면 삼각근을 수축시킵니다",
      "천천히 돌아갑니다"
    ],
    "instructionsEn": [
      "Set cables at face height",
      "Cross-grip the cables",
      "Pull arms backward contracting rear deltoids",
      "Slowly return"
    ],
    "tips": [
      "후면 삼각근 고립에 효과적입니다",
      "가벼운 무게로 집중하세요"
    ],
    "tipsEn": [
      "Effective for rear deltoid isolation",
      "Focus with light weight"
    ],
    "muscles": {
      "primary": [
        "삼각근 후면"
      ],
      "secondary": [
        "승모근 중하부"
      ]
    },
    "musclesEn": {
      "primary": [
        "Posterior deltoid"
      ],
      "secondary": [
        "Mid-lower trapezius"
      ]
    }
  },
  {
    "id": "barbell-curl",
    "name": "바벨 컬",
    "nameEn": "Barbell Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "바벨을 어깨너비로 잡고 곧게 섭니다",
      "팔꿈치를 고정하고 바벨을 어깨 쪽으로 올립니다",
      "이두근 수축을 느끼며 잠시 정지합니다",
      "천천히 내립니다"
    ],
    "instructionsEn": [
      "Hold barbell at shoulder width and stand straight",
      "Keep elbows fixed and curl barbell toward shoulders",
      "Feel bicep contraction and pause",
      "Slowly lower"
    ],
    "tips": [
      "팔꿈치를 몸에 고정하세요",
      "반동을 사용하지 마세요"
    ],
    "tipsEn": [
      "Keep elbows fixed to your body",
      "Do not use momentum"
    ],
    "muscles": {
      "primary": [
        "이두근"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Biceps"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "cable-curl",
    "name": "케이블 컬",
    "nameEn": "Cable Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블 머신 앞에 서서 바를 잡습니다",
      "팔꿈치를 고정하고 바를 올립니다",
      "이두근 수축을 느끼며 잠시 정지합니다",
      "천천히 내립니다"
    ],
    "instructionsEn": [
      "Stand in front of cable machine and grip the bar",
      "Keep elbows fixed and curl the bar up",
      "Feel bicep contraction and pause",
      "Slowly lower"
    ],
    "tips": [
      "케이블이 일정한 긴장을 제공합니다",
      "팔꿈치를 고정하세요"
    ],
    "tipsEn": [
      "Cable provides constant tension",
      "Keep elbows fixed"
    ],
    "muscles": {
      "primary": [
        "이두근"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Biceps"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "preacher-curl",
    "name": "프리쳐 컬",
    "nameEn": "Preacher Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "프리쳐 벤치에 팔을 올립니다",
      "바벨을 잡고 이두근 힘으로 올립니다",
      "수축을 느끼며 잠시 정지합니다",
      "천천히 내립니다"
    ],
    "instructionsEn": [
      "Place arms on preacher bench",
      "Hold barbell and curl up using biceps",
      "Feel contraction and pause",
      "Slowly lower"
    ],
    "tips": [
      "팔꿈치 고정이 자동으로 되어 고립도가 높습니다",
      "이두근 하부를 효과적으로 자극합니다"
    ],
    "tipsEn": [
      "Elbows automatically fixed for high isolation",
      "Effectively targets lower biceps"
    ],
    "muscles": {
      "primary": [
        "이두근"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Biceps"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "concentration-curl",
    "name": "컨센트레이션 컬",
    "nameEn": "Concentration Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "벤치에 앉아 팔꿈치를 허벅지 안쪽에 댑니다",
      "덤벨을 잡고 이두근 힘으로 올립니다",
      "수축을 느끼며 잠시 정지합니다",
      "천천히 내립니다"
    ],
    "instructionsEn": [
      "Sit on bench and brace elbow against inner thigh",
      "Hold dumbbell and curl up using biceps",
      "Feel contraction and pause",
      "Slowly lower"
    ],
    "tips": [
      "이두근 피크 수축에 효과적입니다",
      "반동을 사용하지 마세요"
    ],
    "tipsEn": [
      "Effective for bicep peak contraction",
      "Do not use momentum"
    ],
    "muscles": {
      "primary": [
        "이두근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Biceps"
      ],
      "secondary": []
    }
  },
  {
    "id": "incline-dumbbell-curl",
    "name": "인클라인 덤벨 컬",
    "nameEn": "Incline Dumbbell Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "dumbbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "인클라인 벤치에 앉아 팔을 아래로 늘어뜨립니다",
      "덤벨을 잡고 이두근 힘으로 올립니다",
      "이두근 스트레칭이 극대화됩니다"
    ],
    "instructionsEn": [
      "Sit on incline bench with arms hanging down",
      "Hold dumbbells and curl up using biceps",
      "Maximizes bicep stretch"
    ],
    "tips": [
      "이두근 장두를 집중적으로 자극합니다",
      "가벼운 무게로 시작하세요"
    ],
    "tipsEn": [
      "Targets long head of biceps intensively",
      "Start with light weight"
    ],
    "muscles": {
      "primary": [
        "이두근 장두"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Biceps long head"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "spider-curl",
    "name": "스파이더 컬",
    "nameEn": "Spider Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "인클라인 벤치에 엎드려 팔을 앞으로 늘어뜨립니다",
      "바벨을 잡고 이두근 힘으로 올립니다",
      "수축을 느끼며 잠시 정지합니다"
    ],
    "instructionsEn": [
      "Lie face down on incline bench with arms hanging forward",
      "Hold barbell and curl up using biceps",
      "Feel contraction and pause"
    ],
    "tips": [
      "이두근 단두를 집중적으로 자극합니다",
      "반동 사용이 불가능하여 고립도가 높습니다"
    ],
    "tipsEn": [
      "Targets short head of biceps intensively",
      "High isolation as momentum cannot be used"
    ],
    "muscles": {
      "primary": [
        "이두근 단두"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Biceps short head"
      ],
      "secondary": []
    }
  },
  {
    "id": "machine-curl",
    "name": "[머신] 바이셉 컬",
    "nameEn": "Machine Bicep Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "머신에 앉아 패드에 팔을 올립니다",
      "핸들을 잡고 이두근 힘으로 당깁니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on machine and place arms on pad",
      "Grip handles and pull using biceps",
      "Slowly return to starting position"
    ],
    "tips": [
      "초보자에게 안전한 이두 운동입니다",
      "일정한 궤도로 움직입니다"
    ],
    "tipsEn": [
      "Safe bicep exercise for beginners",
      "Moves in fixed path"
    ],
    "muscles": {
      "primary": [
        "이두근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Biceps"
      ],
      "secondary": []
    }
  },
  {
    "id": "drag-curl",
    "name": "드래그 컬",
    "nameEn": "Drag Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "barbell"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "바벨을 어깨너비로 잡고 곧게 섭니다",
      "팔꿈치를 뒤로 빼며 바벨을 몸에 붙여 올립니다",
      "이두근 수축을 느끼며 잠시 정지합니다"
    ],
    "instructionsEn": [
      "Hold barbell at shoulder width and stand straight",
      "Pull elbows back and drag barbell up close to body",
      "Feel bicep contraction and pause"
    ],
    "tips": [
      "이두근 장두를 효과적으로 자극합니다",
      "일반 컬과 다른 자극을 줍니다"
    ],
    "tipsEn": [
      "Effectively targets long head of biceps",
      "Provides different stimulus than regular curls"
    ],
    "muscles": {
      "primary": [
        "이두근"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Biceps"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "cable-hammer-curl",
    "name": "케이블 해머 컬",
    "nameEn": "Cable Hammer Curl",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블 머신에 로프를 연결합니다",
      "로프를 중립 그립으로 잡습니다",
      "팔꿈치를 고정하고 올립니다"
    ],
    "instructionsEn": [
      "Attach rope to cable machine",
      "Grip rope with neutral grip",
      "Keep elbows fixed and curl up"
    ],
    "tips": [
      "상완근과 이두근을 함께 자극합니다",
      "케이블로 일정한 긴장을 유지합니다"
    ],
    "tipsEn": [
      "Targets both brachialis and biceps",
      "Cable maintains constant tension"
    ],
    "muscles": {
      "primary": [
        "상완근",
        "이두근"
      ],
      "secondary": [
        "전완근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Brachialis",
        "Biceps"
      ],
      "secondary": [
        "Forearms"
      ]
    }
  },
  {
    "id": "overhead-triceps-extension",
    "name": "오버헤드 트라이셉스 익스텐션",
    "nameEn": "Overhead Triceps Extension",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "덤벨을 양손으로 잡고 머리 위로 올립니다",
      "팔꿈치를 고정하고 머리 뒤로 내립니다",
      "삼두근 힘으로 다시 올립니다"
    ],
    "instructionsEn": [
      "Hold dumbbell with both hands overhead",
      "Keep elbows fixed and lower behind head",
      "Raise back up using triceps"
    ],
    "tips": [
      "삼두근 장두를 효과적으로 자극합니다",
      "팔꿈치가 벌어지지 않게 주의하세요"
    ],
    "tipsEn": [
      "Effectively targets long head of triceps",
      "Be careful not to flare elbows out"
    ],
    "muscles": {
      "primary": [
        "삼두근 장두"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Triceps long head"
      ],
      "secondary": []
    }
  },
  {
    "id": "lying-triceps-extension",
    "name": "라잉 트라이셉스 익스텐션",
    "nameEn": "Lying Triceps Extension",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "barbell",
      "bench"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "벤치에 누워 바벨을 좁게 잡습니다",
      "팔꿈치를 고정하고 이마 쪽으로 내립니다",
      "삼두근 힘으로 다시 올립니다"
    ],
    "instructionsEn": [
      "Lie on bench and grip barbell narrowly",
      "Keep elbows fixed and lower toward forehead",
      "Raise back up using triceps"
    ],
    "tips": [
      "스컬크러셔라고도 불립니다",
      "팔꿈치에 무리가 가지 않게 주의하세요"
    ],
    "tipsEn": [
      "Also called skull crusher",
      "Be careful not to strain elbows"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": []
    }
  },
  {
    "id": "rope-pushdown",
    "name": "로프 푸쉬다운",
    "nameEn": "Rope Pushdown",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블에 로프를 연결합니다",
      "로프를 잡고 팔꿈치를 몸에 고정합니다",
      "삼두근 힘으로 로프를 아래로 누릅니다",
      "최하점에서 로프를 벌려줍니다"
    ],
    "instructionsEn": [
      "Attach rope to cable",
      "Grip rope and fix elbows to body",
      "Push rope down using triceps",
      "Spread rope apart at bottom"
    ],
    "tips": [
      "최하점에서 벌리면 측두를 더 자극합니다",
      "팔꿈치를 고정하세요"
    ],
    "tipsEn": [
      "Spreading at bottom targets lateral head more",
      "Keep elbows fixed"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": []
    }
  },
  {
    "id": "kickback",
    "name": "킥백",
    "nameEn": "Kickback",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "dumbbell"
    ],
    "difficulty": "beginner",
    "instructions": [
      "벤치에 한 손을 짚고 상체를 숙입니다",
      "팔꿈치를 90도로 굽힌 상태에서 시작합니다",
      "삼두근 힘으로 팔을 뒤로 완전히 뻗습니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Brace one hand on bench and lean forward",
      "Start with elbow bent at 90 degrees",
      "Extend arm fully backward using triceps",
      "Slowly return to starting position"
    ],
    "tips": [
      "삼두근 수축을 의식하세요",
      "가벼운 무게로 정확하게 실시하세요"
    ],
    "tipsEn": [
      "Focus on tricep contraction",
      "Perform accurately with light weight"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": []
    }
  },
  {
    "id": "cable-kickback",
    "name": "케이블 킥백",
    "nameEn": "Cable Kickback",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블을 낮은 위치로 설정합니다",
      "핸들을 잡고 상체를 숙입니다",
      "삼두근 힘으로 팔을 뒤로 뻗습니다"
    ],
    "instructionsEn": [
      "Set cable to low position",
      "Grip handle and lean forward",
      "Extend arm backward using triceps"
    ],
    "tips": [
      "케이블로 일정한 긴장을 유지합니다",
      "덤벨 킥백보다 효과적입니다"
    ],
    "tipsEn": [
      "Cable maintains constant tension",
      "More effective than dumbbell kickback"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": []
    }
  },
  {
    "id": "diamond-pushup",
    "name": "다이아몬드 푸시업",
    "nameEn": "Diamond Push Up",
    "category": "맨몸",
    "categoryEn": "Bodyweight",
    "bodyPart": [
      "arm",
      "chest"
    ],
    "equipment": [],
    "difficulty": "intermediate",
    "instructions": [
      "손을 다이아몬드 모양으로 붙여 바닥에 댑니다",
      "몸을 일직선으로 유지합니다",
      "가슴이 바닥에 닿을 때까지 내립니다",
      "삼두근과 가슴 힘으로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Place hands in diamond shape on floor",
      "Keep body in straight line",
      "Lower until chest touches floor",
      "Push up using triceps and chest"
    ],
    "tips": [
      "삼두근을 집중적으로 자극합니다",
      "일반 푸시업보다 어렵습니다"
    ],
    "tipsEn": [
      "Targets triceps intensively",
      "More difficult than regular push-ups"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": [
        "대흉근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": [
        "Pectoralis major"
      ]
    }
  },
  {
    "id": "bench-dips",
    "name": "벤치 딥스",
    "nameEn": "Bench Dips",
    "category": "맨몸",
    "categoryEn": "Bodyweight",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "bench"
    ],
    "difficulty": "beginner",
    "instructions": [
      "벤치에 손을 올리고 다리를 앞으로 뻗습니다",
      "팔꿈치를 뒤로 구부리며 몸을 내립니다",
      "삼두근 힘으로 밀어 올립니다"
    ],
    "instructionsEn": [
      "Place hands on bench and extend legs forward",
      "Bend elbows backward to lower body",
      "Push up using triceps"
    ],
    "tips": [
      "초보자에게 적합한 삼두 운동입니다",
      "다리를 구부리면 더 쉬워집니다"
    ],
    "tipsEn": [
      "Suitable tricep exercise for beginners",
      "Easier if you bend legs"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": [
        "대흉근 하부",
        "삼각근 전면"
      ]
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": [
        "Lower pectoralis",
        "Anterior deltoid"
      ]
    }
  },
  {
    "id": "overhead-cable-extension",
    "name": "오버헤드 케이블 익스텐션",
    "nameEn": "Overhead Cable Extension",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "cable"
    ],
    "difficulty": "beginner",
    "instructions": [
      "케이블을 낮은 위치에 설정하고 로프를 잡습니다",
      "머리 위에서 시작하여 팔을 앞으로 뻗습니다",
      "삼두근 수축을 느끼며 잠시 정지합니다"
    ],
    "instructionsEn": [
      "Set cable to low position and grip rope",
      "Start overhead and extend arms forward",
      "Feel tricep contraction and pause"
    ],
    "tips": [
      "삼두근 장두를 효과적으로 자극합니다",
      "팔꿈치를 고정하세요"
    ],
    "tipsEn": [
      "Effectively targets long head of triceps",
      "Keep elbows fixed"
    ],
    "muscles": {
      "primary": [
        "삼두근 장두"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Triceps long head"
      ],
      "secondary": []
    }
  },
  {
    "id": "treadmill",
    "name": "트레드밀",
    "nameEn": "Treadmill",
    "category": "유산소",
    "categoryEn": "Cardio",
    "bodyPart": [
      "cardio"
    ],
    "equipment": [
      "treadmill"
    ],
    "difficulty": "beginner",
    "instructions": [
      "트레드밀에 올라가서 안전바를 잡고 시작합니다",
      "천천히 속도를 올려가며 적당한 페이스를 찾습니다",
      "상체를 곧게 세우고 자연스럽게 팔을 흔듭니다",
      "호흡을 일정하게 유지하며 운동합니다"
    ],
    "instructionsEn": [
      "Step onto treadmill and hold safety bar to start",
      "Gradually increase speed to find comfortable pace",
      "Keep upper body straight and swing arms naturally",
      "Maintain steady breathing while exercising"
    ],
    "tips": [
      "처음에는 천천히 시작해서 점진적으로 속도를 높이세요",
      "운동화를 제대로 착용하세요",
      "수분을 충분히 섭취하세요",
      "무리하지 말고 자신의 페이스에 맞춰 운동하세요"
    ],
    "tipsEn": [
      "Start slowly and gradually increase speed",
      "Wear proper running shoes",
      "Stay hydrated",
      "Do not overdo it, exercise at your own pace"
    ],
    "muscles": {
      "primary": [
        "심폐지구력"
      ],
      "secondary": [
        "하체 전체",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Cardiovascular endurance"
      ],
      "secondary": [
        "Full lower body",
        "Core"
      ]
    }
  },
  {
    "id": "stepmill",
    "name": "스텝밀",
    "nameEn": "Stepmill",
    "category": "유산소",
    "categoryEn": "Cardio",
    "bodyPart": [
      "cardio"
    ],
    "equipment": [
      "stepmill"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "스텝밀에 올라가서 손잡이를 가볍게 잡습니다",
      "발 전체로 스텝을 밟으며 자연스럽게 올라갑니다",
      "상체를 곧게 세우고 앞을 바라봅니다",
      "일정한 리듬으로 계단을 올라갑니다"
    ],
    "instructionsEn": [
      "Step onto stepmill and lightly grip handrails",
      "Step with full foot naturally",
      "Keep upper body straight and look forward",
      "Maintain steady rhythm while climbing"
    ],
    "tips": [
      "손잡이에 너무 의존하지 마세요",
      "발끝만으로 디디지 말고 발 전체를 사용하세요",
      "허리를 곧게 펴고 운동하세요",
      "적당한 속도로 꾸준히 운동하세요"
    ],
    "tipsEn": [
      "Do not rely too much on handrails",
      "Use full foot not just toes",
      "Keep back straight while exercising",
      "Exercise steadily at moderate pace"
    ],
    "muscles": {
      "primary": [
        "심폐지구력"
      ],
      "secondary": [
        "둔근",
        "대퇴사두근",
        "종아리"
      ]
    },
    "musclesEn": {
      "primary": [
        "Cardiovascular endurance"
      ],
      "secondary": [
        "Glutes",
        "Quadriceps",
        "Calves"
      ]
    }
  },
  {
    "id": "cycling",
    "name": "사이클",
    "nameEn": "Cycling",
    "category": "유산소",
    "categoryEn": "Cardio",
    "bodyPart": [
      "cardio"
    ],
    "equipment": [
      "bike"
    ],
    "difficulty": "beginner",
    "instructions": [
      "자전거 높이를 적절히 조절합니다",
      "핸들을 가볍게 잡고 상체를 약간 앞으로 기울입니다",
      "페달을 부드럽게 돌리며 시작합니다",
      "호흡을 일정하게 유지합니다"
    ],
    "instructionsEn": [
      "Adjust bike height appropriately",
      "Lightly grip handles and lean slightly forward",
      "Start pedaling smoothly",
      "Maintain steady breathing"
    ],
    "tips": [
      "무릎이 완전히 펴지지 않도록 높이를 조절하세요",
      "상체에 힘을 빼고 하체 중심으로 운동하세요",
      "저항을 점진적으로 높여가세요",
      "좌석 높이가 중요합니다"
    ],
    "tipsEn": [
      "Adjust height so knees do not fully extend",
      "Relax upper body and focus on lower body",
      "Gradually increase resistance",
      "Seat height is important"
    ],
    "muscles": {
      "primary": [
        "심폐지구력"
      ],
      "secondary": [
        "대퇴사두근",
        "햄스트링",
        "종아리"
      ]
    },
    "musclesEn": {
      "primary": [
        "Cardiovascular endurance"
      ],
      "secondary": [
        "Quadriceps",
        "Hamstrings",
        "Calves"
      ]
    }
  },
  {
    "id": "elliptical",
    "name": "일립티컬",
    "nameEn": "Elliptical",
    "category": "유산소",
    "categoryEn": "Cardio",
    "bodyPart": [
      "cardio"
    ],
    "equipment": [
      "elliptical"
    ],
    "difficulty": "beginner",
    "instructions": [
      "일립티컬에 올라가서 핸들을 잡습니다",
      "자연스러운 보행 동작으로 시작합니다",
      "팔과 다리를 함께 움직입니다",
      "일정한 리듬을 유지합니다"
    ],
    "instructionsEn": [
      "Step onto elliptical and grip handles",
      "Start with natural walking motion",
      "Move arms and legs together",
      "Maintain steady rhythm"
    ],
    "tips": [
      "상체를 곧게 세우고 운동하세요",
      "발이 페달에서 떨어지지 않도록 주의하세요",
      "팔 운동도 함께 활용하세요",
      "무릎에 무리가 적은 운동입니다"
    ],
    "tipsEn": [
      "Keep upper body straight while exercising",
      "Be careful feet do not leave pedals",
      "Use arm workout as well",
      "Low impact on knees"
    ],
    "muscles": {
      "primary": [
        "심폐지구력"
      ],
      "secondary": [
        "전신근육"
      ]
    },
    "musclesEn": {
      "primary": [
        "Cardiovascular endurance"
      ],
      "secondary": [
        "Full body"
      ]
    }
  },
  {
    "id": "rowing",
    "name": "로잉머신",
    "nameEn": "Rowing Machine",
    "category": "유산소",
    "categoryEn": "Cardio",
    "bodyPart": [
      "cardio"
    ],
    "equipment": [
      "rowing"
    ],
    "difficulty": "intermediate",
    "instructions": [
      "로잉머신에 앉아서 발을 고정합니다",
      "핸들을 잡고 무릎을 구부린 상태에서 시작합니다",
      "다리 힘으로 밀면서 팔을 당깁니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on rowing machine and secure feet",
      "Grip handle with knees bent at start",
      "Push with legs while pulling with arms",
      "Slowly return to starting position"
    ],
    "tips": [
      "다리 → 몸통 → 팔 순서로 힘을 사용하세요",
      "등을 곧게 펴고 운동하세요",
      "무릎이 바깥쪽으로 벌어지지 않게 주의하세요",
      "전신 운동 효과가 뛰어납니다"
    ],
    "tipsEn": [
      "Use power in sequence: legs → torso → arms",
      "Keep back straight while exercising",
      "Be careful knees do not splay outward",
      "Excellent full-body workout"
    ],
    "muscles": {
      "primary": [
        "심폐지구력"
      ],
      "secondary": [
        "등근육",
        "어깨",
        "팔",
        "다리",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Cardiovascular endurance"
      ],
      "secondary": [
        "Back muscles",
        "Shoulders",
        "Arms",
        "Legs",
        "Core"
      ]
    }
  },
  {
    "id": "machine-incline-press",
    "name": "[머신] 인클라인 프레스",
    "nameEn": "Machine Incline Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "인클라인 체스트 프레스 머신에 앉아 등을 패드에 밀착합니다",
      "핸들을 잡고 가슴 상부 힘으로 앞으로 밀어냅니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on the incline chest press machine with back against the pad",
      "Grip handles and press forward using upper chest strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "좌석 높이를 조절하여 핸들이 가슴 상부에 오도록 합니다",
      "어깨가 올라가지 않게 주의하세요"
    ],
    "tipsEn": [
      "Adjust seat height so handles align with upper chest",
      "Keep shoulders from shrugging up"
    ],
    "muscles": {
      "primary": [
        "대흉근 상부"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Upper pectoralis"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "machine-decline-press",
    "name": "[머신] 디클라인 프레스",
    "nameEn": "Machine Decline Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "chest"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "디클라인 체스트 프레스 머신에 앉아 등을 패드에 밀착합니다",
      "핸들을 잡고 가슴 하부 힘으로 앞으로 밀어냅니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on the decline chest press machine with back against the pad",
      "Grip handles and press forward using lower chest strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "가슴 하부의 수축을 의식하세요",
      "팔꿈치를 지나치게 벌리지 마세요"
    ],
    "tipsEn": [
      "Focus on lower chest contraction",
      "Do not flare elbows too wide"
    ],
    "muscles": {
      "primary": [
        "대흉근 하부"
      ],
      "secondary": [
        "삼각근 전면",
        "삼두근"
      ]
    },
    "musclesEn": {
      "primary": [
        "Lower pectoralis"
      ],
      "secondary": [
        "Anterior deltoid",
        "Triceps"
      ]
    }
  },
  {
    "id": "machine-lateral-raise",
    "name": "[머신] 레터럴 레이즈",
    "nameEn": "Machine Lateral Raise",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "shoulder"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "레터럴 레이즈 머신에 앉아 패드에 팔 바깥쪽을 댑니다",
      "어깨 힘으로 팔을 옆으로 올립니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on lateral raise machine with outer arms against pads",
      "Raise arms to the sides using shoulder strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "어깨가 으쓱 올라가지 않게 주의하세요",
      "궤도가 고정되어 초보자도 안전하게 할 수 있습니다"
    ],
    "tipsEn": [
      "Keep shoulders from shrugging up",
      "Fixed path makes it safe for beginners"
    ],
    "muscles": {
      "primary": [
        "삼각근 측면"
      ],
      "secondary": [
        "승모근 상부"
      ]
    },
    "musclesEn": {
      "primary": [
        "Lateral deltoid"
      ],
      "secondary": [
        "Upper trapezius"
      ]
    }
  },
  {
    "id": "machine-tricep-extension",
    "name": "[머신] 트라이셉 익스텐션",
    "nameEn": "Machine Tricep Extension",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "arm"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "트라이셉 익스텐션 머신에 앉아 핸들을 잡습니다",
      "삼두근 힘으로 팔을 펴며 핸들을 아래로 누릅니다",
      "천천히 원래 자세로 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on tricep extension machine and grip handles",
      "Extend arms downward using tricep strength",
      "Slowly return to starting position"
    ],
    "tips": [
      "팔꿈치를 고정한 상태에서 삼두근만 사용합니다",
      "궤도가 고정되어 삼두근에 정확히 집중할 수 있습니다"
    ],
    "tipsEn": [
      "Keep elbows fixed and use only triceps",
      "Fixed path allows precise tricep isolation"
    ],
    "muscles": {
      "primary": [
        "삼두근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Triceps"
      ],
      "secondary": []
    }
  },
  {
    "id": "machine-hip-thrust",
    "name": "[머신] 힙 쓰러스트",
    "nameEn": "Machine Hip Thrust",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "힙 쓰러스트 머신에 앉아 등을 패드에 기댑니다",
      "발을 플레이트에 단단히 고정하고 둔근 힘으로 밀어 올립니다",
      "최고점에서 둔근을 수축하고 천천히 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on hip thrust machine with back against pad",
      "Plant feet on platform and push up using glute strength",
      "Squeeze glutes at the top and slowly return"
    ],
    "tips": [
      "허리를 과도하게 젖히지 마세요",
      "바벨 세팅이 필요 없어 초보자도 쉽게 할 수 있습니다"
    ],
    "tipsEn": [
      "Do not hyperextend lower back",
      "No barbell setup needed, easy for beginners"
    ],
    "muscles": {
      "primary": [
        "둔근"
      ],
      "secondary": [
        "햄스트링",
        "코어"
      ]
    },
    "musclesEn": {
      "primary": [
        "Glutes"
      ],
      "secondary": [
        "Hamstrings",
        "Core"
      ]
    }
  },
  {
    "id": "machine-calf-press",
    "name": "[머신] 카프 프레스",
    "nameEn": "Machine Calf Press",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "레그 프레스 머신에 앉아 발 앞쪽만 플레이트에 올립니다",
      "종아리 힘으로 플레이트를 밀어냅니다",
      "최대 수축 후 천천히 돌아갑니다"
    ],
    "instructionsEn": [
      "Sit on leg press machine with only front of feet on platform",
      "Push platform using calf strength",
      "Slowly return after peak contraction"
    ],
    "tips": [
      "무릎을 완전히 펴지 말고 살짝 구부린 상태를 유지하세요",
      "카프 레이즈보다 높은 중량을 안전하게 다룰 수 있습니다"
    ],
    "tipsEn": [
      "Keep knees slightly bent, not fully locked out",
      "Allows safely handling heavier weight than calf raises"
    ],
    "muscles": {
      "primary": [
        "비복근",
        "가자미근"
      ],
      "secondary": []
    },
    "musclesEn": {
      "primary": [
        "Gastrocnemius",
        "Soleus"
      ],
      "secondary": []
    }
  },
  {
    "id": "smith-squat",
    "name": "스미스 스쿼트",
    "nameEn": "Smith Machine Squat",
    "category": "근력",
    "categoryEn": "Strength",
    "bodyPart": [
      "leg"
    ],
    "equipment": [
      "machine"
    ],
    "difficulty": "beginner",
    "instructions": [
      "스미스 머신 바를 어깨 뒤에 올리고 발을 어깨너비로 벌립니다",
      "바를 풀고 엉덩이를 뒤로 빼며 앉듯이 내려갑니다",
      "허벅지가 바닥과 평행할 때까지 내려간 후 밀어 올립니다"
    ],
    "instructionsEn": [
      "Place Smith machine bar on shoulders and stand with feet shoulder-width apart",
      "Unrack and lower down as if sitting back",
      "Descend until thighs are parallel then push back up"
    ],
    "tips": [
      "궤도가 고정되어 프리 스쿼트보다 안전합니다",
      "발 위치를 앞으로 놓으면 둔근, 뒤로 놓으면 대퇴사두에 집중됩니다"
    ],
    "tipsEn": [
      "Fixed bar path makes it safer than free squats",
      "Feet forward targets glutes, feet back targets quads"
    ],
    "muscles": {
      "primary": [
        "대퇴사두근",
        "둔근"
      ],
      "secondary": [
        "햄스트링",
        "종아리"
      ]
    },
    "musclesEn": {
      "primary": [
        "Quadriceps",
        "Glutes"
      ],
      "secondary": [
        "Hamstrings",
        "Calves"
      ]
    }
  }
];

// ── Helper functions ──

export function getExerciseById(id: string): Exercise | undefined {
  return EXERCISE_DATABASE.find((e) => e.id === id);
}

export function getAllExerciseIds(): string[] {
  return EXERCISE_DATABASE.map((e) => e.id);
}

// ── 운동 검색 동의어 ──
const EXERCISE_SYNONYMS: Record<string, string[]> = {
  // 한글 별칭
  "턱걸이": ["풀업", "친업", "pull up", "chin up"],
  "팔굽혀펴기": ["푸시업", "push up"],
  "푸쉬업": ["푸시업", "push up"],
  "푸샵": ["푸시업", "push up"],
  "윗몸일으키기": ["크런치", "시트업", "sit up"],
  "렛풀": ["랫 풀다운", "lat pulldown"],
  "랫풀": ["랫 풀다운", "lat pulldown"],
  "레그프레스": ["레그 프레스", "leg press"],
  "레그컬": ["레그 컬", "leg curl"],
  "레그익스텐션": ["레그 익스텐션", "leg extension"],
  "숄더프레스": ["숄더 프레스", "shoulder press"],
  "벤치프레스": ["벤치 프레스", "bench press"],
  "인클라인벤치": ["인클라인 벤치프레스", "incline bench"],
  "바벨로우": ["바벨 로우", "barbell row"],
  "덤벨프레스": ["덤벨 프레스", "dumbbell press"],
  "사이드레터럴": ["래터럴 레이즈", "lateral raise"],
  "사레레": ["래터럴 레이즈", "lateral raise"],
  // 영문 별칭 (띄어쓰기 변형)
  "pullup": ["pull up", "풀업"],
  "pushup": ["push up", "푸시업"],
  "pullups": ["pull up", "풀업"],
  "pushups": ["push up", "푸시업"],
  "chinup": ["chin up", "친업"],
  "situp": ["sit up", "시트업"],
  // 근육명 → 관련 운동 bodyPart 매핑
  "이두": ["arm"],
  "삼두": ["arm"],
  "이두근": ["arm"],
  "삼두근": ["arm"],
  "bicep": ["arm"],
  "tricep": ["arm"],
  "가슴": ["chest"],
  "chest": ["chest"],
  "등": ["back"],
  "back": ["back"],
  "어깨": ["shoulder"],
  "shoulder": ["shoulder"],
  "하체": ["leg"],
  "다리": ["leg"],
  "legs": ["leg"],
  "복근": ["core"],
  "abs": ["core"],
  "코어": ["core"],
  "유산소": ["cardio"],
  "cardio": ["cardio"],
};

// bodyPart 값인지 확인
const BODY_PARTS = new Set(["chest", "back", "shoulder", "arm", "leg", "core", "cardio"]);

export function searchExercises(
  query: string,
  filters?: { bodyPart?: string; difficulty?: string }
): Exercise[] {
  const q = query.toLowerCase().trim();
  const qNoSpace = q.replace(/[\s_-]/g, "");

  return EXERCISE_DATABASE.filter((exercise) => {
    if (filters?.bodyPart && !exercise.bodyPart.includes(filters.bodyPart)) return false;
    if (filters?.difficulty && exercise.difficulty !== filters.difficulty) return false;
    if (!q) return true;

    const name = exercise.name.toLowerCase();
    const nameEn = exercise.nameEn.toLowerCase();
    const nameNoSpace = name.replace(/[\s_-]/g, "");
    const nameEnNoSpace = nameEn.replace(/[\s_-]/g, "");

    // 1. 직접 매칭 (띄어쓰기 무시)
    if (name.includes(q) || nameEn.includes(q) ||
        nameNoSpace.includes(qNoSpace) || nameEnNoSpace.includes(qNoSpace)) {
      return true;
    }

    // 2. 동의어 매칭
    const synonyms = EXERCISE_SYNONYMS[q] || [];
    for (const syn of synonyms) {
      // bodyPart 매핑인 경우
      if (BODY_PARTS.has(syn)) {
        if (exercise.bodyPart.includes(syn)) return true;
      } else {
        const synNoSpace = syn.replace(/[\s_-]/g, "").toLowerCase();
        if (name.includes(syn.toLowerCase()) || nameEn.includes(syn.toLowerCase()) ||
            nameNoSpace.includes(synNoSpace) || nameEnNoSpace.includes(synNoSpace)) {
          return true;
        }
      }
    }

    // 3. 근육명 검색 (주동근/보조근에 포함되면 매칭)
    const muscles = [...exercise.muscles.primary, ...exercise.muscles.secondary].join(" ").toLowerCase();
    const musclesEn = [...exercise.musclesEn.primary, ...exercise.musclesEn.secondary].join(" ").toLowerCase();
    if (muscles.includes(q) || musclesEn.includes(q)) return true;

    return false;
  });
}
