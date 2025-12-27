export interface Exercise {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  bodyPart: string[];
  equipment: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string[];
  tips: string[];
  muscles: {
    primary: string[];
    secondary: string[];
  };
  gifUrl?: string;
}

export const EXERCISE_DATABASE: Exercise[] = [
  // 유산소 운동
  {
    id: 'treadmill',
    name: '트레드밀',
    nameEn: 'Treadmill',
    category: '유산소',
    bodyPart: ['cardio'],
    equipment: ['treadmill'],
    difficulty: 'beginner',
    instructions: [
      '트레드밀에 올라가서 안전바를 잡고 시작합니다',
      '천천히 속도를 올려가며 적당한 페이스를 찾습니다',
      '상체를 곧게 세우고 자연스럽게 팔을 흔듭니다',
      '호흡을 일정하게 유지하며 운동합니다'
    ],
    tips: [
      '처음에는 천천히 시작해서 점진적으로 속도를 높이세요',
      '운동화를 제대로 착용하세요',
      '수분을 충분히 섭취하세요',
      '무리하지 말고 자신의 페이스에 맞춰 운동하세요'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['하체 전체', '코어']
    }
  },
  {
    id: 'stepmill',
    name: '스텝밀',
    nameEn: 'Stepmill',
    category: '유산소',
    bodyPart: ['cardio'],
    equipment: ['stepmill'],
    difficulty: 'intermediate',
    instructions: [
      '스텝밀에 올라가서 손잡이를 가볍게 잡습니다',
      '발 전체로 스텝을 밟으며 자연스럽게 올라갑니다',
      '상체를 곧게 세우고 앞을 바라봅니다',
      '일정한 리듬으로 계단을 올라갑니다'
    ],
    tips: [
      '손잡이에 너무 의존하지 마세요',
      '발끝만으로 디디지 말고 발 전체를 사용하세요',
      '허리를 곧게 펴고 운동하세요',
      '적당한 속도로 꾸준히 운동하세요'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['둔근', '대퇴사두근', '종아리']
    }
  },
  {
    id: 'cycling',
    name: '사이클',
    nameEn: 'Cycling',
    category: '유산소',
    bodyPart: ['cardio'],
    equipment: ['bike'],
    difficulty: 'beginner',
    instructions: [
      '자전거 높이를 적절히 조절합니다',
      '핸들을 가볍게 잡고 상체를 약간 앞으로 기울입니다',
      '페달을 부드럽게 돌리며 시작합니다',
      '호흡을 일정하게 유지합니다'
    ],
    tips: [
      '무릎이 완전히 펴지지 않도록 높이를 조절하세요',
      '상체에 힘을 빼고 하체 중심으로 운동하세요',
      '저항을 점진적으로 높여가세요',
      '좌석 높이가 중요합니다'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['대퇴사두근', '햄스트링', '종아리']
    }
  },
  {
    id: 'elliptical',
    name: '일립티컬',
    nameEn: 'Elliptical',
    category: '유산소',
    bodyPart: ['cardio'],
    equipment: ['elliptical'],
    difficulty: 'beginner',
    instructions: [
      '일립티컬에 올라가서 핸들을 잡습니다',
      '자연스러운 보행 동작으로 시작합니다',
      '팔과 다리를 함께 움직입니다',
      '일정한 리듬을 유지합니다'
    ],
    tips: [
      '상체를 곧게 세우고 운동하세요',
      '발이 페달에서 떨어지지 않도록 주의하세요',
      '팔 운동도 함께 활용하세요',
      '무릎에 무리가 적은 운동입니다'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['전신근육']
    }
  },
  {
    id: 'rowing',
    name: '로잉머신',
    nameEn: 'Rowing Machine',
    category: '유산소',
    bodyPart: ['cardio'],
    equipment: ['rowing'],
    difficulty: 'intermediate',
    instructions: [
      '로잉머신에 앉아서 발을 고정합니다',
      '핸들을 잡고 무릎을 구부린 상태에서 시작합니다',
      '다리 힘으로 밀면서 팔을 당깁니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    tips: [
      '다리 → 몸통 → 팔 순서로 힘을 사용하세요',
      '등을 곧게 펴고 운동하세요',
      '무릎이 바깥쪽으로 벌어지지 않게 주의하세요',
      '전신 운동 효과가 뛰어납니다'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['등근육', '어깨', '팔', '다리', '코어']
    }
  },

  // 가슴 운동
  {
    id: 'bench-press',
    name: '벤치프레스',
    nameEn: 'Bench Press',
    category: '근력',
    bodyPart: ['chest'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    instructions: [
      '벤치에 등을 대고 누워 어깨너비보다 조금 넓게 바벨을 잡습니다',
      '가슴을 내밀고 어깨날개를 뒤로 모읍니다',
      '바벨을 가슴 중앙까지 천천히 내립니다',
      '가슴근육의 힘으로 바벨을 위로 밀어 올립니다'
    ],
    tips: [
      '호흡은 내릴 때 들이마시고 올릴 때 내쉽니다',
      '손목을 곧게 유지하세요',
      '발은 바닥에 단단히 고정합니다',
      '어깨날개를 계속 뒤로 모은 상태를 유지하세요'
    ],
    muscles: {
      primary: ['대흉근'],
      secondary: ['삼각근 전면', '삼두근']
    }
  },
  {
    id: 'incline-bench-press',
    name: '인클라인 벤치프레스',
    nameEn: 'Incline Bench Press',
    category: '근력',
    bodyPart: ['chest'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    instructions: [
      '인클라인 벤치(30-45도)에 등을 대고 눕습니다',
      '바벨을 어깨너비보다 넓게 잡습니다',
      '가슴 상부까지 천천히 내립니다',
      '가슴 상부의 힘으로 밀어 올립니다'
    ],
    tips: [
      '벤치 각도는 30-45도가 적당합니다',
      '어깨날개를 뒤로 모으세요',
      '가슴 상부의 수축을 의식하세요',
      '손목을 곧게 유지합니다'
    ],
    muscles: {
      primary: ['대흉근 상부'],
      secondary: ['삼각근 전면', '삼두근']
    }
  },
  {
    id: 'decline-bench-press',
    name: '디클라인 벤치프레스',
    nameEn: 'Decline Bench Press',
    category: '근력',
    bodyPart: ['chest'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    instructions: [
      '디클라인 벤치에 누워 발을 고정합니다',
      '바벨을 어깨너비보다 넓게 잡습니다',
      '가슴 하부까지 천천히 내립니다',
      '가슴 하부의 힘으로 밀어 올립니다'
    ],
    tips: [
      '혈액이 머리로 몰리지 않게 주의하세요',
      '가슴 하부의 수축을 의식하세요',
      '어깨날개를 뒤로 모으고 유지합니다',
      '발 고정을 확실히 하세요'
    ],
    muscles: {
      primary: ['대흉근 하부'],
      secondary: ['삼각근 전면', '삼두근']
    }
  },
  {
    id: 'push-up',
    name: '푸시업',
    nameEn: 'Push Up',
    category: '맨몸',
    bodyPart: ['chest'],
    equipment: [],
    difficulty: 'beginner',
    instructions: [
      '손을 어깨너비로 벌려 바닥에 댑니다',
      '몸을 일직선으로 유지합니다',
      '가슴이 바닥에 닿을 때까지 몸을 내립니다',
      '팔의 힘으로 몸을 밀어 올립니다'
    ],
    tips: [
      '코어를 단단히 유지하세요',
      '목을 자연스럽게 유지합니다',
      '무릎을 꿇고 시작해도 좋습니다',
      '엉덩이가 올라가거나 처지지 않게 하세요'
    ],
    muscles: {
      primary: ['대흉근'],
      secondary: ['삼각근', '삼두근', '코어']
    }
  },
  {
    id: 'dumbbell-flye',
    name: '덤벨 플라이',
    nameEn: 'Dumbbell Flye',
    category: '근력',
    bodyPart: ['chest'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner',
    instructions: [
      '벤치에 누워 덤벨을 가슴 위에서 잡습니다',
      '팔을 살짝 굽힌 상태로 유지합니다',
      '덤벨을 옆으로 천천히 내립니다',
      '가슴근육의 힘으로 다시 모아줍니다'
    ],
    tips: [
      '팔꿈치 각도를 일정하게 유지하세요',
      '어깨에 무리가 가지 않게 주의합니다',
      '가슴근육의 스트레칭을 느끼세요',
      '무거운 중량보다는 정확한 자세가 중요합니다'
    ],
    muscles: {
      primary: ['대흉근'],
      secondary: ['삼각근 전면']
    }
  },

  // 등 운동
  {
    id: 'conventional-deadlift',
    name: '컨벤셔널 데드리프트',
    nameEn: 'Conventional Deadlift',
    category: '근력',
    bodyPart: ['back', 'leg'],
    equipment: ['barbell'],
    difficulty: 'advanced',
    instructions: [
      '발을 어깨너비로 벌리고 바벨 앞에 섭니다',
      '무릎을 굽혀 바벨을 어깨너비로 잡습니다',
      '가슴을 내밀고 등을 곧게 펴세요',
      '다리와 엉덩이의 힘으로 바벨을 들어올립니다',
      '몸이 완전히 펴질 때까지 올라갑니다'
    ],
    tips: [
      '등은 항상 중립을 유지하세요',
      '바벨은 몸에 가깝게 유지합니다',
      '발뒤꿈치로 바닥을 밀어내는 느낌으로 시작하세요',
      '어깨날개를 뒤로 모으고 가슴을 내밀어야 합니다',
      '허리가 둥글게 되면 즉시 중단하세요'
    ],
    muscles: {
      primary: ['척추기립근', '둔근', '햄스트링'],
      secondary: ['광배근', '승모근', '대퇴사두근', '전완근']
    }
  },
  {
    id: 'romanian-deadlift',
    name: '루마니안 데드리프트',
    nameEn: 'Romanian Deadlift',
    category: '근력',
    bodyPart: ['back', 'leg'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    instructions: [
      '바벨을 어깨너비로 잡고 곧게 선 상태에서 시작합니다',
      '무릎을 살짝 굽히고 고정합니다 (15-20도)',
      '엉덩이를 뒤로 빼며 상체를 앞으로 기울입니다',
      '햄스트링의 강한 스트레칭을 느끼며 바벨을 내립니다',
      '햄스트링과 둔근의 힘으로 다시 올라갑니다'
    ],
    tips: [
      '무릎 각도는 처음부터 끝까지 고정하세요',
      '바벨은 항상 다리에 가깝게 유지합니다',
      '햄스트링의 스트레칭을 강하게 느껴야 합니다',
      '컨벤셔널 데드리프트와 달리 햄스트링 중심 운동입니다'
    ],
    muscles: {
      primary: ['햄스트링', '둔근'],
      secondary: ['척추기립근', '승모근', '전완근']
    }
  },
  {
    id: 'sumo-deadlift',
    name: '스모 데드리프트',
    nameEn: 'Sumo Deadlift',
    category: '근력',
    bodyPart: ['back', 'leg'],
    equipment: ['barbell'],
    difficulty: 'advanced',
    instructions: [
      '발을 어깨너비보다 넓게 벌리고 발끝을 밖으로 향하게 합니다',
      '무릎 사이로 팔을 넣어 바벨을 어깨너비로 잡습니다',
      '가슴을 내밀고 등을 곧게 펴세요',
      '다리를 벌리며 바벨을 들어올립니다'
    ],
    tips: [
      '발끝과 무릎 방향을 일치시키세요',
      '내전근의 유연성이 중요합니다',
      '컨벤셔널보다 더 수직에 가까운 자세입니다',
      '둔근과 내전근을 더 많이 사용합니다'
    ],
    muscles: {
      primary: ['둔근', '대퇴사두근', '내전근'],
      secondary: ['햄스트링', '척추기립근', '승모근']
    }
  },
  {
    id: 'pull-up',
    name: '풀업',
    nameEn: 'Pull Up',
    category: '맨몸',
    bodyPart: ['back'],
    equipment: ['pull-up-bar'],
    difficulty: 'intermediate',
    instructions: [
      '철봉을 어깨너비로 잡습니다',
      '몸을 매달린 상태에서 시작합니다',
      '등 근육의 힘으로 몸을 위로 당깁니다',
      '턱이 철봉을 넘을 때까지 올라갑니다'
    ],
    tips: [
      '어깨날개를 아래로 내려 시작하세요',
      '몸의 흔들림을 최소화합니다',
      '천천히 내려가는 것도 중요합니다',
      '팔의 힘보다는 등의 힘을 사용하세요'
    ],
    muscles: {
      primary: ['광배근'],
      secondary: ['이두근', '승모근', '능형근']
    }
  },
  {
    id: 'lat-pulldown',
    name: '랫 풀다운',
    nameEn: 'Lat Pulldown',
    category: '근력',
    bodyPart: ['back'],
    equipment: ['cable'],
    difficulty: 'beginner',
    instructions: [
      '랫 풀다운 머신에 앉습니다',
      '바를 어깨너비보다 넓게 잡습니다',
      '가슴을 내밀고 등을 곧게 펴세요',
      '등 근육의 힘으로 바를 가슴쪽으로 당깁니다'
    ],
    tips: [
      '어깨날개를 아래로 내려 시작하세요',
      '팔의 힘보다는 등의 힘을 사용합니다',
      '목 뒤로 당기지 마세요',
      '상체가 뒤로 젖혀지지 않게 하세요'
    ],
    muscles: {
      primary: ['광배근'],
      secondary: ['이두근', '승모근 중하부']
    }
  },
  {
    id: 'barbell-row',
    name: '바벨 로우',
    nameEn: 'Barbell Row',
    category: '근력',
    bodyPart: ['back'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    instructions: [
      '바벨을 어깨너비로 잡고 섭니다',
      '무릎을 살짝 굽히고 상체를 앞으로 기울입니다',
      '등을 곧게 유지하며 바벨을 배꼽쪽으로 당깁니다',
      '어깨날개를 모으며 등 근육을 수축시킵니다'
    ],
    tips: [
      '등이 둥글게 되지 않게 주의하세요',
      '팔꿈치는 몸에 가깝게 유지합니다',
      '목을 과도하게 들지 마세요',
      '등 근육의 수축을 강하게 느끼세요'
    ],
    muscles: {
      primary: ['광배근', '승모근 중하부'],
      secondary: ['이두근', '후면 삼각근']
    }
  },

  // 어깨 운동
  {
    id: 'shoulder-press',
    name: '숄더프레스',
    nameEn: 'Shoulder Press',
    category: '근력',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    instructions: [
      '덤벨을 어깨 높이에서 잡습니다',
      '코어를 단단히 유지합니다',
      '덤벨을 머리 위로 밀어 올립니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    tips: [
      '허리가 과도하게 젖혀지지 않도록 주의하세요',
      '팔꿈치가 몸 앞쪽으로 나오지 않게 합니다',
      '목 뒤로 내리지 마세요',
      '어깨 관절의 가동범위를 고려하세요'
    ],
    muscles: {
      primary: ['삼각근'],
      secondary: ['삼두근', '승모근 상부']
    }
  },
  {
    id: 'lateral-raise',
    name: '래터럴 레이즈',
    nameEn: 'Lateral Raise',
    category: '근력',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    instructions: [
      '덤벨을 양손에 들고 몸 옆에 둡니다',
      '팔을 살짝 굽힌 상태로 유지합니다',
      '덤벨을 옆으로 어깨 높이까지 올립니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    tips: [
      '어깨가 올라가지 않게 주의하세요',
      '덤벨을 너무 높이 올리지 마세요',
      '몸의 반동을 사용하지 않습니다',
      '어깨 측면 근육의 수축을 의식하세요'
    ],
    muscles: {
      primary: ['삼각근 측면'],
      secondary: ['승모근 상부']
    }
  },
  {
    id: 'rear-delt-flye',
    name: '리어 델트 플라이',
    nameEn: 'Rear Delt Flye',
    category: '근력',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    instructions: [
      '상체를 앞으로 기울이고 덤벨을 잡습니다',
      '팔을 살짝 굽힌 상태로 유지합니다',
      '덤벨을 뒤쪽으로 벌려줍니다',
      '어깨날개를 모으며 후면 삼각근을 수축시킵니다'
    ],
    tips: [
      '등을 곧게 유지하세요',
      '팔꿈치 각도를 일정하게 합니다',
      '어깨 뒤쪽 근육을 의식하세요',
      '목이 앞으로 나오지 않게 주의합니다'
    ],
    muscles: {
      primary: ['삼각근 후면'],
      secondary: ['승모근 중하부', '능형근']
    }
  },

  // 하체 운동
  {
    id: 'squat',
    name: '스쿼트',
    nameEn: 'Squat',
    category: '근력',
    bodyPart: ['leg'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    instructions: [
      '발을 어깨너비로 벌리고 섭니다',
      '가슴을 내밀고 등을 곧게 펴세요',
      '엉덩이를 뒤로 빼며 앉듯이 내려갑니다',
      '허벅지가 바닥과 평행할 때까지 내려갑니다'
    ],
    tips: [
      '무릎이 발끝을 넘지 않게 하세요',
      '무릎과 발끝 방향을 일치시킵니다',
      '발뒤꿈치에 무게중심을 둡니다',
      '코어를 단단히 유지하세요'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리']
    }
  },
  {
    id: 'lunge',
    name: '런지',
    nameEn: 'Lunge',
    category: '근력',
    bodyPart: ['leg'],
    equipment: [],
    difficulty: 'beginner',
    instructions: [
      '한 발을 크게 앞으로 내딛습니다',
      '상체를 곧게 유지합니다',
      '앞 무릎이 90도가 될 때까지 내려갑니다',
      '앞발의 힘으로 시작 위치로 돌아갑니다'
    ],
    tips: [
      '앞 무릎이 발끝을 넘지 않게 하세요',
      '뒷발 무릎이 바닥에 닿지 않게 합니다',
      '균형을 잃지 않도록 주의하세요',
      '양쪽 다리를 번갈아 가며 수행하세요'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리', '코어']
    }
  },
  {
    id: 'leg-press',
    name: '레그 프레스',
    nameEn: 'Leg Press',
    category: '근력',
    bodyPart: ['leg'],
    equipment: ['machine'],
    difficulty: 'beginner',
    instructions: [
      '레그 프레스 머신에 앉습니다',
      '발을 어깨너비로 벌려 플레이트에 댑니다',
      '무릎을 가슴쪽으로 천천히 당깁니다',
      '다리의 힘으로 플레이트를 밀어냅니다'
    ],
    tips: [
      '무릎이 안쪽으로 모이지 않게 하세요',
      '발뒤꿈치에 힘을 주세요',
      '무릎을 완전히 펴지 마세요',
      '허리가 둥글게 되지 않게 주의합니다'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리']
    }
  },
  {
    id: 'bulgarian-squat',
    name: '불가리안 스쿼트',
    nameEn: 'Bulgarian Split Squat',
    category: '근력',
    bodyPart: ['leg'],
    equipment: [],
    difficulty: 'intermediate',
    instructions: [
      '벤치나 의자 뒤에 서서 한 발을 뒤쪽 벤치에 올립니다',
      '앞발에 체중을 두고 무릎을 구부려 몸을 내립니다',
      '앞쪽 무릎이 발목 위에 오도록 합니다',
      '앞발로 밀어올려 시작 자세로 돌아갑니다'
    ],
    tips: [
      '앞발에 체중의 대부분을 두세요',
      '뒤발은 균형을 위해서만 사용합니다',
      '무릎이 발끝을 넘지 않게 주의하세요',
      '상체를 곧게 유지합니다'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리', '코어']
    }
  },

  // 팔 운동
  {
    id: 'bicep-curl',
    name: '바이셉 컬',
    nameEn: 'Bicep Curl',
    category: '근력',
    bodyPart: ['arm'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    instructions: [
      '덤벨을 양손에 들고 팔을 몸 옆에 둡니다',
      '팔꿈치를 고정하고 덤벨을 어깨쪽으로 올립니다',
      '이두근의 힘으로 천천히 올립니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    tips: [
      '팔꿈치를 몸에 붙여 고정하세요',
      '몸의 반동을 사용하지 마세요',
      '내릴 때도 천천히 조절합니다',
      '이두근의 수축을 강하게 느끼세요'
    ],
    muscles: {
      primary: ['이두근'],
      secondary: ['전완근']
    }
  },
  {
    id: 'tricep-pushdown',
    name: '트라이셉스 푸시다운',
    nameEn: 'Tricep Pushdown',
    category: '근력',
    bodyPart: ['arm'],
    equipment: ['cable'],
    difficulty: 'beginner',
    instructions: [
      '케이블 머신에서 바를 잡습니다',
      '팔꿈치를 몸에 고정합니다',
      '삼두근의 힘으로 바를 아래로 누릅니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    tips: [
      '팔꿈치가 앞뒤로 움직이지 않게 하세요',
      '손목을 곧게 유지합니다',
      '어깨가 올라가지 않게 주의하세요',
      '삼두근의 수축을 의식하세요'
    ],
    muscles: {
      primary: ['삼두근'],
      secondary: ['전완근']
    }
  },

  // 코어 운동
  {
    id: 'plank',
    name: '플랭크',
    nameEn: 'Plank',
    category: '맨몸',
    bodyPart: ['core'],
    equipment: [],
    difficulty: 'beginner',
    instructions: [
      '팔꿈치와 발끝으로 몸을 지탱합니다',
      '머리부터 발끝까지 일직선을 유지합니다',
      '복부에 힘을 주고 자세를 유지합니다',
      '자연스럽게 호흡합니다'
    ],
    tips: [
      '엉덩이가 위로 올라가지 않게 하세요',
      '허리가 아래로 처지지 않게 합니다',
      '목을 자연스럽게 유지하세요',
      '복부와 둔근에 계속 힘을 주세요'
    ],
    muscles: {
      primary: ['복직근', '복횡근'],
      secondary: ['둔근', '어깨', '등']
    }
  },
  {
    id: 'crunches',
    name: '크런치',
    nameEn: 'Crunches',
    category: '맨몸',
    bodyPart: ['core'],
    equipment: [],
    difficulty: 'beginner',
    instructions: [
      '등을 대고 누워 무릎을 굽힙니다',
      '손을 머리 뒤에 둡니다',
      '복부의 힘으로 상체를 올립니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    tips: [
      '목에 힘을 주지 마세요',
      '완전히 일어나지 않아도 됩니다',
      '복부 근육의 수축을 의식하세요',
      '허리를 바닥에 붙인 상태를 유지하세요'
    ],
    muscles: {
      primary: ['복직근'],
      secondary: ['복사근']
    }
  },

  // 추가 어깨 운동들
  {
    id: 'bent-over-lateral-raise',
    name: '밴트오버 레터럴 레이즈',
    nameEn: 'Bent Over Lateral Raise',
    category: '근력',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    instructions: [
      '덤벨을 양손에 들고 허리를 45도 정도 구부립니다',
      '팔을 몸 옆으로 벌려 어깨 높이까지 올립니다',
      '리어 델트를 의식하며 천천히 내립니다',
      '상체 각도를 일정하게 유지합니다'
    ],
    tips: [
      '무게보다는 정확한 자세가 중요합니다',
      '리어 델트 수축을 의식하세요',
      '팔꿈치를 살짝 구부린 상태를 유지하세요',
      '허리에 무리가 가지 않도록 주의하세요'
    ],
    muscles: {
      primary: ['삼각근 후면'],
      secondary: ['승모근', '능형근']
    }
  },

  // 추가 가슴 운동들
  {
    id: 'cable-crossover',
    name: '케이블 크로스오버',
    nameEn: 'Cable Crossover',
    category: '근력',
    bodyPart: ['chest'],
    equipment: ['cable'],
    difficulty: 'intermediate',
    instructions: [
      '케이블 머신 중앙에 서서 양손으로 핸들을 잡습니다',
      '팔을 살짝 구부린 상태로 가슴 앞에서 교차시킵니다',
      '가슴근육의 수축을 느끼며 천천히 돌아갑니다',
      '일정한 긴장을 유지합니다'
    ],
    tips: [
      '가슴 중앙 수축을 의식하세요',
      '팔꿈치 각도를 일정하게 유지하세요',
      '상체를 약간 앞으로 기울이세요',
      '무게보다는 수축감이 중요합니다'
    ],
    muscles: {
      primary: ['대흉근'],
      secondary: ['삼각근 전면']
    }
  },

  // 추가 등 운동들
  {
    id: 't-bar-row',
    name: '티바 로우',
    nameEn: 'T-Bar Row',
    category: '근력',
    bodyPart: ['back'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    instructions: [
      '티바 로우 머신에 가슴을 대고 핸들을 잡습니다',
      '등근육을 수축시키며 핸들을 가슴 쪽으로 당깁니다',
      '어깨날개를 모으며 등 중앙을 수축시킵니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    tips: [
      '가슴을 패드에 단단히 고정하세요',
      '등 중앙 수축을 의식하세요',
      '팔꿈치를 몸에 가깝게 유지하세요',
      '목을 과도하게 젖히지 마세요'
    ],
    muscles: {
      primary: ['광배근', '능형근'],
      secondary: ['후면 삼각근', '이두근']
    }
  },

  // 추가 하체 운동들
  {
    id: 'bulgarian-split-squat',
    name: '불가리안 스쿼트',
    nameEn: 'Bulgarian Split Squat',
    category: '근력',
    bodyPart: ['leg'],
    equipment: ['bench'],
    difficulty: 'intermediate',
    instructions: [
      '벤치에서 2-3걸음 떨어진 곳에 서서 한 발을 벤치에 올립니다',
      '앞다리에 체중을 실으며 무릎을 90도까지 구부립니다',
      '앞다리 힘으로 밀어 올려 원래 자세로 돌아갑니다',
      '한쪽이 끝나면 다른 쪽도 같은 방식으로 실시합니다'
    ],
    tips: [
      '앞다리에 체중의 90%를 실으세요',
      '상체를 곧게 세우고 운동하세요',
      '무릎이 발끝을 넘지 않게 주의하세요',
      '균형감각이 중요한 운동입니다'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리']
    }
  },

  // 추가 팔 운동들
  {
    id: 'hammer-curl',
    name: '해머 컬',
    nameEn: 'Hammer Curl',
    category: '근력',
    bodyPart: ['arm'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    instructions: [
      '덤벨을 양손에 들고 팔을 몸 옆에 자연스럽게 둡니다',
      '손목을 중립 위치(엄지가 위)로 유지합니다',
      '팔꿈치를 고정하고 덤벨을 어깨 쪽으로 올립니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    tips: [
      '팔꿈치를 몸에 고정하세요',
      '손목 각도를 일정하게 유지하세요',
      '상완이두근과 상완근을 함께 사용합니다',
      '반동을 사용하지 마세요'
    ],
    muscles: {
      primary: ['상완이두근', '상완근'],
      secondary: ['전완근']
    }
  },

  {
    id: 'tricep-dips',
    name: '딥스',
    nameEn: 'Tricep Dips',
    category: '근력',
    bodyPart: ['arm'],
    equipment: ['bench'],
    difficulty: 'intermediate',
    instructions: [
      '벤치나 딥스 바에 손을 올리고 몸을 지탱합니다',
      '다리를 앞으로 뻗거나 구부려 난이도를 조절합니다',
      '팔꿈치를 뒤로 구부리며 몸을 내립니다',
      '삼두근 힘으로 몸을 다시 밀어 올립니다'
    ],
    tips: [
      '어깨를 아래로 내리고 운동하세요',
      '팔꿈치가 바깥쪽으로 벌어지지 않게 주의하세요',
      '가슴을 내밀고 등을 곧게 펴세요',
      '무릎을 구부리면 더 쉬워집니다'
    ],
    muscles: {
      primary: ['삼두근'],
      secondary: ['대흉근 하부', '전면 삼각근']
    }
  },

  // 추가 어깨 운동들
  {
    id: 'arnold-press',
    name: '아놀드 프레스',
    nameEn: 'Arnold Press',
    category: '근력',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    instructions: [
      '덤벨을 양손에 들고 앉거나 서서 시작합니다',
      '손바닥이 몸을 향하도록 덤벨을 어깨 높이에 둡니다',
      '덤벨을 올리면서 손목을 바깥쪽으로 회전시킵니다',
      '최고점에서 손바닥이 앞을 향하도록 합니다'
    ],
    tips: [
      '회전 동작을 부드럽게 하세요',
      '어깨 전체를 골고루 사용하는 운동입니다',
      '무게보다는 정확한 동작이 중요합니다',
      '어깨 부상 위험이 있으니 주의하세요'
    ],
    muscles: {
      primary: ['삼각근 전체'],
      secondary: ['삼두근', '승모근']
    }
  },

  {
    id: 'face-pull',
    name: '페이스 풀',
    nameEn: 'Face Pull',
    category: '근력',
    bodyPart: ['shoulder'],
    equipment: ['cable'],
    difficulty: 'beginner',
    instructions: [
      '케이블을 얼굴 높이로 설정하고 로프를 잡습니다',
      '팔꿈치를 높게 유지하며 로프를 얼굴 쪽으로 당깁니다',
      '어깨날개를 모으며 리어 델트를 수축시킵니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    tips: [
      '팔꿈치를 어깨보다 높게 유지하세요',
      '어깨날개 모으기를 의식하세요',
      '목을 앞으로 빼지 마세요',
      '자세 교정에 매우 좋은 운동입니다'
    ],
    muscles: {
      primary: ['삼각근 후면'],
      secondary: ['승모근', '능형근']
    }
  },

  // 추가 등 운동들
  {
    id: 'seated-row',
    name: '시티드 로우',
    nameEn: 'Seated Row',
    category: '근력',
    bodyPart: ['back'],
    equipment: ['cable'],
    difficulty: 'beginner',
    instructions: [
      '시티드 로우 머신에 앉아 핸들을 잡습니다',
      '등을 곧게 펴고 가슴을 내밉니다',
      '어깨날개를 모으며 핸들을 배 쪽으로 당깁니다',
      '등근육 수축을 느끼며 천천히 돌아갑니다'
    ],
    tips: [
      '등을 둥글게 말지 마세요',
      '어깨날개 모으기를 의식하세요',
      '팔꿈치를 몸에 가깝게 유지하세요',
      '상체를 과도하게 뒤로 젖히지 마세요'
    ],
    muscles: {
      primary: ['광배근', '능형근'],
      secondary: ['후면 삼각근', '이두근']
    }
  },

  // 추가 하체 운동들
  {
    id: 'leg-extension',
    name: '레그 익스텐션',
    nameEn: 'Leg Extension',
    category: '근력',
    bodyPart: ['leg'],
    equipment: ['machine'],
    difficulty: 'beginner',
    instructions: [
      '레그 익스텐션 머신에 앉아 등받이에 등을 댑니다',
      '발목을 패드 아래에 위치시킵니다',
      '대퇴사두근 힘으로 다리를 완전히 펴줍니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    tips: [
      '무릎을 완전히 펴주세요',
      '대퇴사두근 수축을 의식하세요',
      '너무 무거운 중량은 피하세요',
      '등받이에 등을 완전히 대고 운동하세요'
    ],
    muscles: {
      primary: ['대퇴사두근'],
      secondary: []
    }
  },

  {
    id: 'leg-curl',
    name: '레그 컬',
    nameEn: 'Leg Curl',
    category: '근력',
    bodyPart: ['leg'],
    equipment: ['machine'],
    difficulty: 'beginner',
    instructions: [
      '레그 컬 머신에 엎드려 패드를 발목에 위치시킵니다',
      '햄스트링 힘으로 발을 둔부 쪽으로 당깁니다',
      '햄스트링 수축을 느끼며 잠시 정지합니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    tips: [
      '햄스트링 수축을 의식하세요',
      '허리를 과도하게 젖히지 마세요',
      '발목을 굽히지 말고 일직선을 유지하세요',
      '대퇴사두근과 균형을 맞춰 운동하세요'
    ],
    muscles: {
      primary: ['햄스트링'],
      secondary: ['종아리']
    }
  }
];

export const searchExercises = (query: string, filters?: {
  bodyPart?: string;
  difficulty?: string;
  equipment?: string;
}): Exercise[] => {
  let results = EXERCISE_DATABASE;

  // 텍스트 검색
  if (query.trim()) {
    const searchTerm = query.toLowerCase();
    results = results.filter(exercise => 
      exercise.name.toLowerCase().includes(searchTerm) ||
      exercise.nameEn.toLowerCase().includes(searchTerm) ||
      exercise.category.toLowerCase().includes(searchTerm) ||
      exercise.muscles.primary.some(muscle => muscle.toLowerCase().includes(searchTerm)) ||
      exercise.muscles.secondary.some(muscle => muscle.toLowerCase().includes(searchTerm))
    );
  }

  // 필터 적용
  if (filters?.bodyPart) {
    results = results.filter(exercise => exercise.bodyPart.includes(filters.bodyPart!));
  }

  if (filters?.difficulty) {
    results = results.filter(exercise => exercise.difficulty === filters.difficulty);
  }

  if (filters?.equipment) {
    results = results.filter(exercise => 
      filters.equipment === 'none' 
        ? exercise.equipment.length === 0
        : exercise.equipment.includes(filters.equipment!)
    );
  }

  return results;
};

export const getExerciseById = (id: string): Exercise | undefined => {
  return EXERCISE_DATABASE.find(exercise => exercise.id === id);
};