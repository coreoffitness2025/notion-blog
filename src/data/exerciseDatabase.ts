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
  // 유산소 운동
  {
    id: 'treadmill',
    name: '트레드밀',
    nameEn: 'Treadmill',
    category: '유산소',
    categoryEn: 'Cardio',
    bodyPart: ['cardio'],
    equipment: ['treadmill'],
    difficulty: 'beginner',
    instructions: [
      '트레드밀에 올라가서 안전바를 잡고 시작합니다',
      '천천히 속도를 올려가며 적당한 페이스를 찾습니다',
      '상체를 곧게 세우고 자연스럽게 팔을 흔듭니다',
      '호흡을 일정하게 유지하며 운동합니다'
    ],
    instructionsEn: [
      'Step onto the treadmill and hold the safety bar to begin',
      'Gradually increase speed to find a comfortable pace',
      'Keep your torso upright and swing your arms naturally',
      'Maintain steady, consistent breathing throughout'
    ],
    tips: [
      '처음에는 천천히 시작해서 점진적으로 속도를 높이세요',
      '운동화를 제대로 착용하세요',
      '수분을 충분히 섭취하세요',
      '무리하지 말고 자신의 페이스에 맞춰 운동하세요'
    ],
    tipsEn: [
      'Start slow and progressively increase your speed',
      'Wear proper athletic footwear',
      'Stay well hydrated throughout your session',
      'Do not overexert yourself — work at your own comfortable pace'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['하체 전체', '코어']
    },
    musclesEn: {
      primary: ['Cardiovascular endurance'],
      secondary: ['Full lower body', 'Core']
    }
  },
  {
    id: 'stepmill',
    name: '스텝밀',
    nameEn: 'Stepmill',
    category: '유산소',
    categoryEn: 'Cardio',
    bodyPart: ['cardio'],
    equipment: ['stepmill'],
    difficulty: 'intermediate',
    instructions: [
      '스텝밀에 올라가서 손잡이를 가볍게 잡습니다',
      '발 전체로 스텝을 밟으며 자연스럽게 올라갑니다',
      '상체를 곧게 세우고 앞을 바라봅니다',
      '일정한 리듬으로 계단을 올라갑니다'
    ],
    instructionsEn: [
      'Step onto the stepmill and lightly grip the handles',
      'Plant your full foot on each step as you climb naturally',
      'Keep your torso upright and look straight ahead',
      'Maintain a steady, consistent rhythm as you step'
    ],
    tips: [
      '손잡이에 너무 의존하지 마세요',
      '발끝만으로 디디지 말고 발 전체를 사용하세요',
      '허리를 곧게 펴고 운동하세요',
      '적당한 속도로 꾸준히 운동하세요'
    ],
    tipsEn: [
      'Avoid leaning too heavily on the handles',
      'Use your full foot on each step, not just your toes',
      'Keep your back straight throughout the movement',
      'Maintain a moderate, sustainable pace'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['둔근', '대퇴사두근', '종아리']
    },
    musclesEn: {
      primary: ['Cardiovascular endurance'],
      secondary: ['Glutes', 'Quadriceps', 'Calves']
    }
  },
  {
    id: 'cycling',
    name: '사이클',
    nameEn: 'Cycling',
    category: '유산소',
    categoryEn: 'Cardio',
    bodyPart: ['cardio'],
    equipment: ['bike'],
    difficulty: 'beginner',
    instructions: [
      '자전거 높이를 적절히 조절합니다',
      '핸들을 가볍게 잡고 상체를 약간 앞으로 기울입니다',
      '페달을 부드럽게 돌리며 시작합니다',
      '호흡을 일정하게 유지합니다'
    ],
    instructionsEn: [
      'Adjust the seat height to the appropriate level',
      'Lightly grip the handlebars and lean your torso slightly forward',
      'Begin pedaling with smooth, controlled strokes',
      'Maintain steady, even breathing'
    ],
    tips: [
      '무릎이 완전히 펴지지 않도록 높이를 조절하세요',
      '상체에 힘을 빼고 하체 중심으로 운동하세요',
      '저항을 점진적으로 높여가세요',
      '좌석 높이가 중요합니다'
    ],
    tipsEn: [
      'Adjust seat height so your knees do not fully lock out at the bottom',
      'Relax your upper body and focus the effort on your lower body',
      'Progressively increase resistance over time',
      'Proper seat height is essential for efficiency and joint health'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['대퇴사두근', '햄스트링', '종아리']
    },
    musclesEn: {
      primary: ['Cardiovascular endurance'],
      secondary: ['Quadriceps', 'Hamstrings', 'Calves']
    }
  },
  {
    id: 'elliptical',
    name: '일립티컬',
    nameEn: 'Elliptical',
    category: '유산소',
    categoryEn: 'Cardio',
    bodyPart: ['cardio'],
    equipment: ['elliptical'],
    difficulty: 'beginner',
    instructions: [
      '일립티컬에 올라가서 핸들을 잡습니다',
      '자연스러운 보행 동작으로 시작합니다',
      '팔과 다리를 함께 움직입니다',
      '일정한 리듬을 유지합니다'
    ],
    instructionsEn: [
      'Step onto the elliptical and grip the handles',
      'Begin with a natural walking motion',
      'Move your arms and legs in coordinated, synchronized motion',
      'Maintain a consistent, even rhythm'
    ],
    tips: [
      '상체를 곧게 세우고 운동하세요',
      '발이 페달에서 떨어지지 않도록 주의하세요',
      '팔 운동도 함께 활용하세요',
      '무릎에 무리가 적은 운동입니다'
    ],
    tipsEn: [
      'Keep your torso upright throughout the movement',
      'Ensure your feet stay flat on the pedals at all times',
      'Actively push and pull the handles to engage your upper body',
      'The elliptical is a low-impact option that is easy on the knees'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['전신근육']
    },
    musclesEn: {
      primary: ['Cardiovascular endurance'],
      secondary: ['Full body']
    }
  },
  {
    id: 'rowing',
    name: '로잉머신',
    nameEn: 'Rowing Machine',
    category: '유산소',
    categoryEn: 'Cardio',
    bodyPart: ['cardio'],
    equipment: ['rowing'],
    difficulty: 'intermediate',
    instructions: [
      '로잉머신에 앉아서 발을 고정합니다',
      '핸들을 잡고 무릎을 구부린 상태에서 시작합니다',
      '다리 힘으로 밀면서 팔을 당깁니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    instructionsEn: [
      'Sit on the rowing machine and secure your feet in the straps',
      'Grip the handle and start with your knees bent in the catch position',
      'Drive through your legs, then lean back and pull the handle toward your torso',
      'Slowly return to the starting position in the reverse sequence'
    ],
    tips: [
      '다리 → 몸통 → 팔 순서로 힘을 사용하세요',
      '등을 곧게 펴고 운동하세요',
      '무릎이 바깥쪽으로 벌어지지 않게 주의하세요',
      '전신 운동 효과가 뛰어납니다'
    ],
    tipsEn: [
      'Follow the power sequence: legs first, then torso, then arms',
      'Keep your back straight and avoid rounding throughout the stroke',
      'Keep your knees tracking in line with your feet — do not let them flare out',
      'Rowing is an excellent full-body workout with both cardio and strength benefits'
    ],
    muscles: {
      primary: ['심폐지구력'],
      secondary: ['등근육', '어깨', '팔', '다리', '코어']
    },
    musclesEn: {
      primary: ['Cardiovascular endurance'],
      secondary: ['Back muscles', 'Shoulders', 'Arms', 'Legs', 'Core']
    }
  },

  // 가슴 운동
  {
    id: 'bench-press',
    name: '벤치프레스',
    nameEn: 'Bench Press',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['chest'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    instructions: [
      '벤치에 등을 대고 누워 어깨너비보다 조금 넓게 바벨을 잡습니다',
      '가슴을 내밀고 어깨날개를 뒤로 모읍니다',
      '바벨을 가슴 중앙까지 천천히 내립니다',
      '가슴근육의 힘으로 바벨을 위로 밀어 올립니다'
    ],
    instructionsEn: [
      'Lie flat on the bench and grip the barbell slightly wider than shoulder width',
      'Puff your chest up and retract your shoulder blades',
      'Lower the bar slowly to the center of your chest',
      'Drive the bar back up using your chest muscles'
    ],
    tips: [
      '호흡은 내릴 때 들이마시고 올릴 때 내쉽니다',
      '손목을 곧게 유지하세요',
      '발은 바닥에 단단히 고정합니다',
      '어깨날개를 계속 뒤로 모은 상태를 유지하세요'
    ],
    tipsEn: [
      'Inhale as you lower the bar and exhale as you press it up',
      'Keep your wrists straight and stacked over your elbows',
      'Keep your feet firmly planted on the floor throughout',
      'Maintain retracted shoulder blades for the entire set'
    ],
    muscles: {
      primary: ['대흉근'],
      secondary: ['삼각근 전면', '삼두근']
    },
    musclesEn: {
      primary: ['Pectoralis major'],
      secondary: ['Anterior deltoid', 'Triceps']
    }
  },
  {
    id: 'incline-bench-press',
    name: '인클라인 벤치프레스',
    nameEn: 'Incline Bench Press',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['chest'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    instructions: [
      '인클라인 벤치(30-45도)에 등을 대고 눕습니다',
      '바벨을 어깨너비보다 넓게 잡습니다',
      '가슴 상부까지 천천히 내립니다',
      '가슴 상부의 힘으로 밀어 올립니다'
    ],
    instructionsEn: [
      'Lie back on an incline bench set to 30-45 degrees',
      'Grip the barbell slightly wider than shoulder width',
      'Lower the bar slowly to your upper chest',
      'Press the bar back up using your upper chest muscles'
    ],
    tips: [
      '벤치 각도는 30-45도가 적당합니다',
      '어깨날개를 뒤로 모으세요',
      '가슴 상부의 수축을 의식하세요',
      '손목을 곧게 유지합니다'
    ],
    tipsEn: [
      'A bench angle of 30-45 degrees is optimal for upper chest activation',
      'Retract your shoulder blades before and throughout the lift',
      'Focus on feeling the contraction in your upper chest',
      'Keep your wrists straight at all times'
    ],
    muscles: {
      primary: ['대흉근 상부'],
      secondary: ['삼각근 전면', '삼두근']
    },
    musclesEn: {
      primary: ['Upper pectoralis'],
      secondary: ['Anterior deltoid', 'Triceps']
    }
  },
  {
    id: 'decline-bench-press',
    name: '디클라인 벤치프레스',
    nameEn: 'Decline Bench Press',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['chest'],
    equipment: ['barbell', 'bench'],
    difficulty: 'intermediate',
    instructions: [
      '디클라인 벤치에 누워 발을 고정합니다',
      '바벨을 어깨너비보다 넓게 잡습니다',
      '가슴 하부까지 천천히 내립니다',
      '가슴 하부의 힘으로 밀어 올립니다'
    ],
    instructionsEn: [
      'Lie on the decline bench and secure your feet under the pads',
      'Grip the barbell slightly wider than shoulder width',
      'Lower the bar slowly to your lower chest',
      'Press the bar back up using your lower chest muscles'
    ],
    tips: [
      '혈액이 머리로 몰리지 않게 주의하세요',
      '가슴 하부의 수축을 의식하세요',
      '어깨날개를 뒤로 모으고 유지합니다',
      '발 고정을 확실히 하세요'
    ],
    tipsEn: [
      'Be mindful of blood rushing to your head in the decline position',
      'Focus on contracting your lower chest throughout the movement',
      'Keep your shoulder blades retracted for stability',
      'Ensure your feet are securely locked in before lifting'
    ],
    muscles: {
      primary: ['대흉근 하부'],
      secondary: ['삼각근 전면', '삼두근']
    },
    musclesEn: {
      primary: ['Lower pectoralis'],
      secondary: ['Anterior deltoid', 'Triceps']
    }
  },
  {
    id: 'push-up',
    name: '푸시업',
    nameEn: 'Push Up',
    category: '맨몸',
    categoryEn: 'Bodyweight',
    bodyPart: ['chest'],
    equipment: [],
    difficulty: 'beginner',
    instructions: [
      '손을 어깨너비로 벌려 바닥에 댑니다',
      '몸을 일직선으로 유지합니다',
      '가슴이 바닥에 닿을 때까지 몸을 내립니다',
      '팔의 힘으로 몸을 밀어 올립니다'
    ],
    instructionsEn: [
      'Place your hands on the floor shoulder-width apart',
      'Hold your body in a straight line from head to heels',
      'Lower your chest until it nearly touches the floor',
      'Push through your hands to press your body back up'
    ],
    tips: [
      '코어를 단단히 유지하세요',
      '목을 자연스럽게 유지합니다',
      '무릎을 꿇고 시작해도 좋습니다',
      '엉덩이가 올라가거나 처지지 않게 하세요'
    ],
    tipsEn: [
      'Brace your core tightly throughout the movement',
      'Keep your neck in a neutral position — do not crane or drop it',
      'Knee push-ups are a great starting modification for beginners',
      'Do not let your hips rise up or sag down'
    ],
    muscles: {
      primary: ['대흉근'],
      secondary: ['삼각근', '삼두근', '코어']
    },
    musclesEn: {
      primary: ['Pectoralis major'],
      secondary: ['Deltoids', 'Triceps', 'Core']
    }
  },
  {
    id: 'dumbbell-flye',
    name: '덤벨 플라이',
    nameEn: 'Dumbbell Flye',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['chest'],
    equipment: ['dumbbell', 'bench'],
    difficulty: 'beginner',
    instructions: [
      '벤치에 누워 덤벨을 가슴 위에서 잡습니다',
      '팔을 살짝 굽힌 상태로 유지합니다',
      '덤벨을 옆으로 천천히 내립니다',
      '가슴근육의 힘으로 다시 모아줍니다'
    ],
    instructionsEn: [
      'Lie on the bench and hold a dumbbell in each hand above your chest',
      'Maintain a slight bend in your elbows throughout',
      'Slowly lower the dumbbells out to the sides in a wide arc',
      'Squeeze your chest to bring the dumbbells back together'
    ],
    tips: [
      '팔꿈치 각도를 일정하게 유지하세요',
      '어깨에 무리가 가지 않게 주의합니다',
      '가슴근육의 스트레칭을 느끼세요',
      '무거운 중량보다는 정확한 자세가 중요합니다'
    ],
    tipsEn: [
      'Keep your elbow angle fixed — do not let them straighten',
      'Be careful not to overstretch and stress the shoulder joint',
      'Feel the deep stretch in your chest at the bottom of each rep',
      'Use a lighter weight with perfect form rather than heavy weight with poor form'
    ],
    muscles: {
      primary: ['대흉근'],
      secondary: ['삼각근 전면']
    },
    musclesEn: {
      primary: ['Pectoralis major'],
      secondary: ['Anterior deltoid']
    }
  },

  // 등 운동
  {
    id: 'conventional-deadlift',
    name: '컨벤셔널 데드리프트',
    nameEn: 'Conventional Deadlift',
    category: '근력',
    categoryEn: 'Strength',
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
    instructionsEn: [
      'Stand with feet shoulder-width apart with the barbell over your mid-foot',
      'Bend down and grip the barbell shoulder-width apart',
      'Puff your chest up and set your back in a neutral position',
      'Drive through your legs and hips to lift the bar off the floor',
      'Continue until your body is fully upright with hips locked out'
    ],
    tips: [
      '등은 항상 중립을 유지하세요',
      '바벨은 몸에 가깝게 유지합니다',
      '발뒤꿈치로 바닥을 밀어내는 느낌으로 시작하세요',
      '어깨날개를 뒤로 모으고 가슴을 내밀어야 합니다',
      '허리가 둥글게 되면 즉시 중단하세요'
    ],
    tipsEn: [
      'Always maintain a neutral spine — avoid rounding your lower back',
      'Keep the bar as close to your body as possible throughout the lift',
      'Think of pushing the floor away with your heels rather than pulling the bar up',
      'Retract your shoulder blades and lift your chest before initiating the pull',
      'Stop immediately if your lower back begins to round'
    ],
    muscles: {
      primary: ['척추기립근', '둔근', '햄스트링'],
      secondary: ['광배근', '승모근', '대퇴사두근', '전완근']
    },
    musclesEn: {
      primary: ['Erector spinae', 'Glutes', 'Hamstrings'],
      secondary: ['Latissimus dorsi', 'Trapezius', 'Quadriceps', 'Forearms']
    }
  },
  {
    id: 'romanian-deadlift',
    name: '루마니안 데드리프트',
    nameEn: 'Romanian Deadlift',
    category: '근력',
    categoryEn: 'Strength',
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
    instructionsEn: [
      'Stand upright holding the barbell with a shoulder-width grip',
      'Soften your knees to a slight bend (15-20 degrees) and hold that angle',
      'Push your hips back and hinge forward at the waist',
      'Lower the bar along your legs, feeling a strong stretch in your hamstrings',
      'Drive your hips forward to return to the starting position using your hamstrings and glutes'
    ],
    tips: [
      '무릎 각도는 처음부터 끝까지 고정하세요',
      '바벨은 항상 다리에 가깝게 유지합니다',
      '햄스트링의 스트레칭을 강하게 느껴야 합니다',
      '컨벤셔널 데드리프트와 달리 햄스트링 중심 운동입니다'
    ],
    tipsEn: [
      'Lock your knee angle and keep it constant from start to finish',
      'Keep the bar dragging close to your legs throughout',
      'You should feel a strong, deep stretch in your hamstrings',
      'Unlike the conventional deadlift, the RDL is a hamstring-dominant exercise'
    ],
    muscles: {
      primary: ['햄스트링', '둔근'],
      secondary: ['척추기립근', '승모근', '전완근']
    },
    musclesEn: {
      primary: ['Hamstrings', 'Glutes'],
      secondary: ['Erector spinae', 'Trapezius', 'Forearms']
    }
  },
  {
    id: 'sumo-deadlift',
    name: '스모 데드리프트',
    nameEn: 'Sumo Deadlift',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['back', 'leg'],
    equipment: ['barbell'],
    difficulty: 'advanced',
    instructions: [
      '발을 어깨너비보다 넓게 벌리고 발끝을 밖으로 향하게 합니다',
      '무릎 사이로 팔을 넣어 바벨을 어깨너비로 잡습니다',
      '가슴을 내밀고 등을 곧게 펴세요',
      '다리를 벌리며 바벨을 들어올립니다'
    ],
    instructionsEn: [
      'Stand with your feet wider than shoulder width and toes pointed outward',
      'Reach down between your knees and grip the barbell at shoulder width',
      'Puff your chest up and set your back flat',
      'Push your knees out and drive through your legs to lift the bar'
    ],
    tips: [
      '발끝과 무릎 방향을 일치시키세요',
      '내전근의 유연성이 중요합니다',
      '컨벤셔널보다 더 수직에 가까운 자세입니다',
      '둔근과 내전근을 더 많이 사용합니다'
    ],
    tipsEn: [
      'Make sure your knees track in the same direction as your toes',
      'Hip and adductor flexibility are key to a solid sumo stance',
      'Your torso will be more upright compared to the conventional deadlift',
      'The sumo variation places greater emphasis on glutes and adductors'
    ],
    muscles: {
      primary: ['둔근', '대퇴사두근', '내전근'],
      secondary: ['햄스트링', '척추기립근', '승모근']
    },
    musclesEn: {
      primary: ['Glutes', 'Quadriceps', 'Adductors'],
      secondary: ['Hamstrings', 'Erector spinae', 'Trapezius']
    }
  },
  {
    id: 'pull-up',
    name: '풀업',
    nameEn: 'Pull Up',
    category: '맨몸',
    categoryEn: 'Bodyweight',
    bodyPart: ['back'],
    equipment: ['pull-up-bar'],
    difficulty: 'intermediate',
    instructions: [
      '철봉을 어깨너비로 잡습니다',
      '몸을 매달린 상태에서 시작합니다',
      '등 근육의 힘으로 몸을 위로 당깁니다',
      '턱이 철봉을 넘을 때까지 올라갑니다'
    ],
    instructionsEn: [
      'Grip the pull-up bar at shoulder width with an overhand grip',
      'Start from a dead hang with your arms fully extended',
      'Pull yourself up by engaging your back muscles',
      'Continue until your chin clears the bar'
    ],
    tips: [
      '어깨날개를 아래로 내려 시작하세요',
      '몸의 흔들림을 최소화합니다',
      '천천히 내려가는 것도 중요합니다',
      '팔의 힘보다는 등의 힘을 사용하세요'
    ],
    tipsEn: [
      'Depress your shoulder blades before initiating the pull',
      'Minimize body swing and kipping',
      'Control the descent — the lowering phase is equally important',
      'Focus on driving with your back, not just pulling with your arms'
    ],
    muscles: {
      primary: ['광배근'],
      secondary: ['이두근', '승모근', '능형근']
    },
    musclesEn: {
      primary: ['Latissimus dorsi'],
      secondary: ['Biceps', 'Trapezius', 'Rhomboids']
    }
  },
  {
    id: 'lat-pulldown',
    name: '랫 풀다운',
    nameEn: 'Lat Pulldown',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['back'],
    equipment: ['cable'],
    difficulty: 'beginner',
    instructions: [
      '랫 풀다운 머신에 앉습니다',
      '바를 어깨너비보다 넓게 잡습니다',
      '가슴을 내밀고 등을 곧게 펴세요',
      '등 근육의 힘으로 바를 가슴쪽으로 당깁니다'
    ],
    instructionsEn: [
      'Sit at the lat pulldown machine and secure your thighs under the pads',
      'Grip the bar wider than shoulder width',
      'Puff your chest up and set your back at a slight lean',
      'Pull the bar down toward your upper chest using your back muscles'
    ],
    tips: [
      '어깨날개를 아래로 내려 시작하세요',
      '팔의 힘보다는 등의 힘을 사용합니다',
      '목 뒤로 당기지 마세요',
      '상체가 뒤로 젖혀지지 않게 하세요'
    ],
    tipsEn: [
      'Depress your shoulder blades before pulling',
      'Lead with your elbows and focus on your back, not your arms',
      'Never pull the bar behind your neck',
      'Avoid excessive backward lean — keep your torso relatively upright'
    ],
    muscles: {
      primary: ['광배근'],
      secondary: ['이두근', '승모근 중하부']
    },
    musclesEn: {
      primary: ['Latissimus dorsi'],
      secondary: ['Biceps', 'Mid-lower trapezius']
    }
  },
  {
    id: 'barbell-row',
    name: '바벨 로우',
    nameEn: 'Barbell Row',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['back'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    instructions: [
      '바벨을 어깨너비로 잡고 섭니다',
      '무릎을 살짝 굽히고 상체를 앞으로 기울입니다',
      '등을 곧게 유지하며 바벨을 배꼽쪽으로 당깁니다',
      '어깨날개를 모으며 등 근육을 수축시킵니다'
    ],
    instructionsEn: [
      'Stand and grip the barbell at shoulder width',
      'Soften your knees and hinge your torso forward to roughly parallel with the floor',
      'Keeping your back flat, pull the bar toward your navel',
      'Squeeze your shoulder blades together as you row to fully contract your back'
    ],
    tips: [
      '등이 둥글게 되지 않게 주의하세요',
      '팔꿈치는 몸에 가깝게 유지합니다',
      '목을 과도하게 들지 마세요',
      '등 근육의 수축을 강하게 느끼세요'
    ],
    tipsEn: [
      'Do not let your back round — maintain a flat, neutral spine',
      'Keep your elbows close to your torso as you pull',
      'Do not crane your neck upward excessively',
      'Focus on a strong, deliberate contraction in your back muscles'
    ],
    muscles: {
      primary: ['광배근', '승모근 중하부'],
      secondary: ['이두근', '후면 삼각근']
    },
    musclesEn: {
      primary: ['Latissimus dorsi', 'Mid-lower trapezius'],
      secondary: ['Biceps', 'Posterior deltoid']
    }
  },

  // 어깨 운동
  {
    id: 'shoulder-press',
    name: '숄더프레스',
    nameEn: 'Shoulder Press',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    instructions: [
      '덤벨을 어깨 높이에서 잡습니다',
      '코어를 단단히 유지합니다',
      '덤벨을 머리 위로 밀어 올립니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    instructionsEn: [
      'Hold the dumbbells at shoulder height with palms facing forward',
      'Brace your core tightly',
      'Press the dumbbells straight overhead until your arms are fully extended',
      'Slowly lower them back to the starting position'
    ],
    tips: [
      '허리가 과도하게 젖혀지지 않도록 주의하세요',
      '팔꿈치가 몸 앞쪽으로 나오지 않게 합니다',
      '목 뒤로 내리지 마세요',
      '어깨 관절의 가동범위를 고려하세요'
    ],
    tipsEn: [
      'Avoid excessive arching in your lower back — keep your core tight',
      'Do not let your elbows drift too far forward',
      'Never press or lower behind the neck',
      'Work within a comfortable range of motion for your shoulder joints'
    ],
    muscles: {
      primary: ['삼각근'],
      secondary: ['삼두근', '승모근 상부']
    },
    musclesEn: {
      primary: ['Deltoids'],
      secondary: ['Triceps', 'Upper trapezius']
    }
  },
  {
    id: 'lateral-raise',
    name: '래터럴 레이즈',
    nameEn: 'Lateral Raise',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    instructions: [
      '덤벨을 양손에 들고 몸 옆에 둡니다',
      '팔을 살짝 굽힌 상태로 유지합니다',
      '덤벨을 옆으로 어깨 높이까지 올립니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    instructionsEn: [
      'Hold a dumbbell in each hand at your sides',
      'Maintain a slight bend in your elbows throughout',
      'Raise the dumbbells out to the sides until they reach shoulder height',
      'Slowly lower them back to the starting position'
    ],
    tips: [
      '어깨가 올라가지 않게 주의하세요',
      '덤벨을 너무 높이 올리지 마세요',
      '몸의 반동을 사용하지 않습니다',
      '어깨 측면 근육의 수축을 의식하세요'
    ],
    tipsEn: [
      'Keep your shoulders from shrugging up toward your ears',
      'Do not raise the dumbbells above shoulder height',
      'Avoid using body momentum or swinging to lift the weight',
      'Focus on feeling the contraction in your lateral deltoids'
    ],
    muscles: {
      primary: ['삼각근 측면'],
      secondary: ['승모근 상부']
    },
    musclesEn: {
      primary: ['Lateral deltoid'],
      secondary: ['Upper trapezius']
    }
  },
  {
    id: 'rear-delt-flye',
    name: '리어 델트 플라이',
    nameEn: 'Rear Delt Flye',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    instructions: [
      '상체를 앞으로 기울이고 덤벨을 잡습니다',
      '팔을 살짝 굽힌 상태로 유지합니다',
      '덤벨을 뒤쪽으로 벌려줍니다',
      '어깨날개를 모으며 후면 삼각근을 수축시킵니다'
    ],
    instructionsEn: [
      'Hinge forward at the hips and hold a dumbbell in each hand',
      'Maintain a slight bend in your elbows throughout',
      'Raise the dumbbells out and back in a wide arc',
      'Squeeze your shoulder blades together as you contract your rear deltoids'
    ],
    tips: [
      '등을 곧게 유지하세요',
      '팔꿈치 각도를 일정하게 합니다',
      '어깨 뒤쪽 근육을 의식하세요',
      '목이 앞으로 나오지 않게 주의합니다'
    ],
    tipsEn: [
      'Keep your back flat and neutral throughout the movement',
      'Maintain a consistent elbow angle on each rep',
      'Concentrate on feeling your rear deltoids working',
      'Do not let your head and neck jut forward'
    ],
    muscles: {
      primary: ['삼각근 후면'],
      secondary: ['승모근 중하부', '능형근']
    },
    musclesEn: {
      primary: ['Posterior deltoid'],
      secondary: ['Mid-lower trapezius', 'Rhomboids']
    }
  },

  // 하체 운동
  {
    id: 'squat',
    name: '스쿼트',
    nameEn: 'Squat',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['leg'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    instructions: [
      '발을 어깨너비로 벌리고 섭니다',
      '가슴을 내밀고 등을 곧게 펴세요',
      '엉덩이를 뒤로 빼며 앉듯이 내려갑니다',
      '허벅지가 바닥과 평행할 때까지 내려갑니다'
    ],
    instructionsEn: [
      'Stand with your feet shoulder-width apart',
      'Puff your chest up and keep your back straight',
      'Push your hips back and bend your knees to lower into a squat',
      'Descend until your thighs are parallel to the floor'
    ],
    tips: [
      '무릎이 발끝을 넘지 않게 하세요',
      '무릎과 발끝 방향을 일치시킵니다',
      '발뒤꿈치에 무게중심을 둡니다',
      '코어를 단단히 유지하세요'
    ],
    tipsEn: [
      'Try to keep your knees from traveling far past your toes',
      'Make sure your knees track in the same direction as your toes',
      'Keep your weight centered through your heels',
      'Brace your core throughout the entire movement'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리']
    },
    musclesEn: {
      primary: ['Quadriceps', 'Glutes'],
      secondary: ['Hamstrings', 'Calves']
    }
  },
  {
    id: 'lunge',
    name: '런지',
    nameEn: 'Lunge',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['leg'],
    equipment: [],
    difficulty: 'beginner',
    instructions: [
      '한 발을 크게 앞으로 내딛습니다',
      '상체를 곧게 유지합니다',
      '앞 무릎이 90도가 될 때까지 내려갑니다',
      '앞발의 힘으로 시작 위치로 돌아갑니다'
    ],
    instructionsEn: [
      'Step one foot forward into a wide stride',
      'Keep your torso upright throughout',
      'Lower your body until your front knee reaches a 90-degree angle',
      'Push through your front foot to return to the starting position'
    ],
    tips: [
      '앞 무릎이 발끝을 넘지 않게 하세요',
      '뒷발 무릎이 바닥에 닿지 않게 합니다',
      '균형을 잃지 않도록 주의하세요',
      '양쪽 다리를 번갈아 가며 수행하세요'
    ],
    tipsEn: [
      'Keep your front knee from traveling too far past your toes',
      'Lower your back knee toward the floor without letting it touch',
      'Stay balanced and controlled throughout the movement',
      'Alternate legs each rep for an even workout'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리', '코어']
    },
    musclesEn: {
      primary: ['Quadriceps', 'Glutes'],
      secondary: ['Hamstrings', 'Calves', 'Core']
    }
  },
  {
    id: 'leg-press',
    name: '레그 프레스',
    nameEn: 'Leg Press',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['leg'],
    equipment: ['machine'],
    difficulty: 'beginner',
    instructions: [
      '레그 프레스 머신에 앉습니다',
      '발을 어깨너비로 벌려 플레이트에 댑니다',
      '무릎을 가슴쪽으로 천천히 당깁니다',
      '다리의 힘으로 플레이트를 밀어냅니다'
    ],
    instructionsEn: [
      'Sit in the leg press machine with your back flat against the pad',
      'Place your feet shoulder-width apart on the platform',
      'Slowly lower the platform by bending your knees toward your chest',
      'Press through your legs to push the platform back up'
    ],
    tips: [
      '무릎이 안쪽으로 모이지 않게 하세요',
      '발뒤꿈치에 힘을 주세요',
      '무릎을 완전히 펴지 마세요',
      '허리가 둥글게 되지 않게 주의합니다'
    ],
    tipsEn: [
      'Do not let your knees cave inward during the press',
      'Drive through your heels for maximum leg activation',
      'Do not fully lock out your knees at the top',
      'Keep your lower back pressed flat against the seat — do not let it round'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리']
    },
    musclesEn: {
      primary: ['Quadriceps', 'Glutes'],
      secondary: ['Hamstrings', 'Calves']
    }
  },
  {
    id: 'bulgarian-squat',
    name: '불가리안 스쿼트',
    nameEn: 'Bulgarian Split Squat',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['leg'],
    equipment: [],
    difficulty: 'intermediate',
    instructions: [
      '벤치나 의자 뒤에 서서 한 발을 뒤쪽 벤치에 올립니다',
      '앞발에 체중을 두고 무릎을 구부려 몸을 내립니다',
      '앞쪽 무릎이 발목 위에 오도록 합니다',
      '앞발로 밀어올려 시작 자세로 돌아갑니다'
    ],
    instructionsEn: [
      'Stand in front of a bench and place one foot behind you on the bench',
      'Shift your weight onto your front foot and lower your body by bending your front knee',
      'Keep your front knee aligned over your ankle',
      'Drive through your front foot to return to the starting position'
    ],
    tips: [
      '앞발에 체중의 대부분을 두세요',
      '뒤발은 균형을 위해서만 사용합니다',
      '무릎이 발끝을 넘지 않게 주의하세요',
      '상체를 곧게 유지합니다'
    ],
    tipsEn: [
      'Load the majority of your weight through your front foot',
      'Use your rear foot only for balance, not for pushing',
      'Keep your front knee from traveling too far past your toes',
      'Keep your torso upright throughout the movement'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리', '코어']
    },
    musclesEn: {
      primary: ['Quadriceps', 'Glutes'],
      secondary: ['Hamstrings', 'Calves', 'Core']
    }
  },

  // 팔 운동
  {
    id: 'bicep-curl',
    name: '바이셉 컬',
    nameEn: 'Bicep Curl',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['arm'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    instructions: [
      '덤벨을 양손에 들고 팔을 몸 옆에 둡니다',
      '팔꿈치를 고정하고 덤벨을 어깨쪽으로 올립니다',
      '이두근의 힘으로 천천히 올립니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    instructionsEn: [
      'Hold a dumbbell in each hand with your arms hanging at your sides',
      'Pin your elbows to your sides and curl the dumbbells up toward your shoulders',
      'Lift using your biceps with full control',
      'Slowly lower back to the starting position'
    ],
    tips: [
      '팔꿈치를 몸에 붙여 고정하세요',
      '몸의 반동을 사용하지 마세요',
      '내릴 때도 천천히 조절합니다',
      '이두근의 수축을 강하게 느끼세요'
    ],
    tipsEn: [
      'Keep your elbows pinned against your sides throughout',
      'Do not use body swing or momentum to lift the weight',
      'Control the lowering phase — do not just let the weight drop',
      'Focus on a strong, deliberate squeeze at the top of each rep'
    ],
    muscles: {
      primary: ['이두근'],
      secondary: ['전완근']
    },
    musclesEn: {
      primary: ['Biceps'],
      secondary: ['Forearms']
    }
  },
  {
    id: 'tricep-pushdown',
    name: '트라이셉스 푸시다운',
    nameEn: 'Tricep Pushdown',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['arm'],
    equipment: ['cable'],
    difficulty: 'beginner',
    instructions: [
      '케이블 머신에서 바를 잡습니다',
      '팔꿈치를 몸에 고정합니다',
      '삼두근의 힘으로 바를 아래로 누릅니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    instructionsEn: [
      'Stand at a cable machine and grip the bar with an overhand grip',
      'Pin your elbows firmly against your sides',
      'Push the bar down using your triceps until your arms are fully extended',
      'Slowly allow the bar to rise back to the starting position'
    ],
    tips: [
      '팔꿈치가 앞뒤로 움직이지 않게 하세요',
      '손목을 곧게 유지합니다',
      '어깨가 올라가지 않게 주의하세요',
      '삼두근의 수축을 의식하세요'
    ],
    tipsEn: [
      'Keep your elbows stationary — they should not move forward or back',
      'Maintain straight, neutral wrists throughout',
      'Do not let your shoulders shrug up',
      'Consciously squeeze your triceps at the bottom of each rep'
    ],
    muscles: {
      primary: ['삼두근'],
      secondary: ['전완근']
    },
    musclesEn: {
      primary: ['Triceps'],
      secondary: ['Forearms']
    }
  },

  // 코어 운동
  {
    id: 'plank',
    name: '플랭크',
    nameEn: 'Plank',
    category: '맨몸',
    categoryEn: 'Bodyweight',
    bodyPart: ['core'],
    equipment: [],
    difficulty: 'beginner',
    instructions: [
      '팔꿈치와 발끝으로 몸을 지탱합니다',
      '머리부터 발끝까지 일직선을 유지합니다',
      '복부에 힘을 주고 자세를 유지합니다',
      '자연스럽게 호흡합니다'
    ],
    instructionsEn: [
      'Support your body on your forearms and the balls of your feet',
      'Hold a straight line from your head to your heels',
      'Brace your abdominals and hold the position',
      'Breathe naturally throughout the hold'
    ],
    tips: [
      '엉덩이가 위로 올라가지 않게 하세요',
      '허리가 아래로 처지지 않게 합니다',
      '목을 자연스럽게 유지하세요',
      '복부와 둔근에 계속 힘을 주세요'
    ],
    tipsEn: [
      'Do not let your hips pike up toward the ceiling',
      'Do not let your lower back sag toward the floor',
      'Keep your neck in a neutral position — look at the floor',
      'Continuously engage both your abdominals and glutes'
    ],
    muscles: {
      primary: ['복직근', '복횡근'],
      secondary: ['둔근', '어깨', '등']
    },
    musclesEn: {
      primary: ['Rectus abdominis', 'Transverse abdominis'],
      secondary: ['Glutes', 'Shoulders', 'Back']
    }
  },
  {
    id: 'crunches',
    name: '크런치',
    nameEn: 'Crunches',
    category: '맨몸',
    categoryEn: 'Bodyweight',
    bodyPart: ['core'],
    equipment: [],
    difficulty: 'beginner',
    instructions: [
      '등을 대고 누워 무릎을 굽힙니다',
      '손을 머리 뒤에 둡니다',
      '복부의 힘으로 상체를 올립니다',
      '천천히 시작 위치로 돌아갑니다'
    ],
    instructionsEn: [
      'Lie on your back with your knees bent and feet flat on the floor',
      'Place your hands loosely behind your head',
      'Curl your upper body up using your abdominal muscles',
      'Slowly lower back to the starting position'
    ],
    tips: [
      '목에 힘을 주지 마세요',
      '완전히 일어나지 않아도 됩니다',
      '복부 근육의 수축을 의식하세요',
      '허리를 바닥에 붙인 상태를 유지하세요'
    ],
    tipsEn: [
      'Do not pull on your neck — your hands are just resting behind your head',
      'You do not need to sit all the way up — a partial curl is sufficient',
      'Focus on consciously contracting your abdominal muscles',
      'Keep your lower back pressed flat against the floor throughout'
    ],
    muscles: {
      primary: ['복직근'],
      secondary: ['복사근']
    },
    musclesEn: {
      primary: ['Rectus abdominis'],
      secondary: ['Obliques']
    }
  },

  // 추가 어깨 운동들
  {
    id: 'bent-over-lateral-raise',
    name: '밴트오버 레터럴 레이즈',
    nameEn: 'Bent Over Lateral Raise',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    instructions: [
      '덤벨을 양손에 들고 허리를 45도 정도 구부립니다',
      '팔을 몸 옆으로 벌려 어깨 높이까지 올립니다',
      '리어 델트를 의식하며 천천히 내립니다',
      '상체 각도를 일정하게 유지합니다'
    ],
    instructionsEn: [
      'Hold a dumbbell in each hand and hinge your torso forward to about 45 degrees',
      'Raise the dumbbells out to the sides until they reach shoulder height',
      'Lower them slowly while focusing on your rear deltoids',
      'Maintain a consistent torso angle throughout each rep'
    ],
    tips: [
      '무게보다는 정확한 자세가 중요합니다',
      '리어 델트 수축을 의식하세요',
      '팔꿈치를 살짝 구부린 상태를 유지하세요',
      '허리에 무리가 가지 않도록 주의하세요'
    ],
    tipsEn: [
      'Prioritize correct form over heavy weight',
      'Concentrate on feeling your rear deltoids contract on each rep',
      'Maintain a slight bend in your elbows throughout',
      'Be mindful of lower back stress in the bent-over position'
    ],
    muscles: {
      primary: ['삼각근 후면'],
      secondary: ['승모근', '능형근']
    },
    musclesEn: {
      primary: ['Posterior deltoid'],
      secondary: ['Trapezius', 'Rhomboids']
    }
  },

  // 추가 가슴 운동들
  {
    id: 'cable-crossover',
    name: '케이블 크로스오버',
    nameEn: 'Cable Crossover',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['chest'],
    equipment: ['cable'],
    difficulty: 'intermediate',
    instructions: [
      '케이블 머신 중앙에 서서 양손으로 핸들을 잡습니다',
      '팔을 살짝 구부린 상태로 가슴 앞에서 교차시킵니다',
      '가슴근육의 수축을 느끼며 천천히 돌아갑니다',
      '일정한 긴장을 유지합니다'
    ],
    instructionsEn: [
      'Stand in the center of a cable crossover machine and grip a handle in each hand',
      'With a slight bend in your elbows, bring your hands together and cross them in front of your chest',
      'Slowly return to the starting position while feeling your chest muscles stretch',
      'Maintain constant tension in the cables throughout'
    ],
    tips: [
      '가슴 중앙 수축을 의식하세요',
      '팔꿈치 각도를 일정하게 유지하세요',
      '상체를 약간 앞으로 기울이세요',
      '무게보다는 수축감이 중요합니다'
    ],
    tipsEn: [
      'Focus on squeezing the center of your chest at the point of crossover',
      'Keep a consistent elbow bend throughout the movement',
      'Lean slightly forward from the hips for better chest activation',
      'The quality of the contraction matters more than the weight used'
    ],
    muscles: {
      primary: ['대흉근'],
      secondary: ['삼각근 전면']
    },
    musclesEn: {
      primary: ['Pectoralis major'],
      secondary: ['Anterior deltoid']
    }
  },

  // 추가 등 운동들
  {
    id: 't-bar-row',
    name: '티바 로우',
    nameEn: 'T-Bar Row',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['back'],
    equipment: ['barbell'],
    difficulty: 'intermediate',
    instructions: [
      '티바 로우 머신에 가슴을 대고 핸들을 잡습니다',
      '등근육을 수축시키며 핸들을 가슴 쪽으로 당깁니다',
      '어깨날개를 모으며 등 중앙을 수축시킵니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    instructionsEn: [
      'Lie chest-down on the T-bar row pad and grip the handles',
      'Pull the handles toward your chest by contracting your back muscles',
      'Squeeze your shoulder blades together to fully engage your mid-back',
      'Slowly lower the weight back to the starting position'
    ],
    tips: [
      '가슴을 패드에 단단히 고정하세요',
      '등 중앙 수축을 의식하세요',
      '팔꿈치를 몸에 가깝게 유지하세요',
      '목을 과도하게 젖히지 마세요'
    ],
    tipsEn: [
      'Keep your chest firmly pressed against the pad throughout',
      'Focus on contracting your mid-back muscles at the top of each pull',
      'Keep your elbows close to your torso as you row',
      'Do not hyperextend your neck'
    ],
    muscles: {
      primary: ['광배근', '능형근'],
      secondary: ['후면 삼각근', '이두근']
    },
    musclesEn: {
      primary: ['Latissimus dorsi', 'Rhomboids'],
      secondary: ['Posterior deltoid', 'Biceps']
    }
  },

  // 추가 하체 운동들
  {
    id: 'bulgarian-split-squat',
    name: '불가리안 스쿼트',
    nameEn: 'Bulgarian Split Squat',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['leg'],
    equipment: ['bench'],
    difficulty: 'intermediate',
    instructions: [
      '벤치에서 2-3걸음 떨어진 곳에 서서 한 발을 벤치에 올립니다',
      '앞다리에 체중을 실으며 무릎을 90도까지 구부립니다',
      '앞다리 힘으로 밀어 올려 원래 자세로 돌아갑니다',
      '한쪽이 끝나면 다른 쪽도 같은 방식으로 실시합니다'
    ],
    instructionsEn: [
      'Stand 2-3 steps in front of a bench and place one foot behind you on the bench',
      'Load your weight onto your front leg and bend your knee down to 90 degrees',
      'Drive through your front leg to press back up to the starting position',
      'Complete all reps on one side, then repeat on the other'
    ],
    tips: [
      '앞다리에 체중의 90%를 실으세요',
      '상체를 곧게 세우고 운동하세요',
      '무릎이 발끝을 넘지 않게 주의하세요',
      '균형감각이 중요한 운동입니다'
    ],
    tipsEn: [
      'Place roughly 90% of your weight on your front leg',
      'Keep your torso upright throughout the movement',
      'Prevent your front knee from traveling too far past your toes',
      'Balance and stability are key — take your time to find your footing'
    ],
    muscles: {
      primary: ['대퇴사두근', '둔근'],
      secondary: ['햄스트링', '종아리']
    },
    musclesEn: {
      primary: ['Quadriceps', 'Glutes'],
      secondary: ['Hamstrings', 'Calves']
    }
  },

  // 추가 팔 운동들
  {
    id: 'hammer-curl',
    name: '해머 컬',
    nameEn: 'Hammer Curl',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['arm'],
    equipment: ['dumbbell'],
    difficulty: 'beginner',
    instructions: [
      '덤벨을 양손에 들고 팔을 몸 옆에 자연스럽게 둡니다',
      '손목을 중립 위치(엄지가 위)로 유지합니다',
      '팔꿈치를 고정하고 덤벨을 어깨 쪽으로 올립니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    instructionsEn: [
      'Hold a dumbbell in each hand with your arms hanging naturally at your sides',
      'Keep your wrists in a neutral position with thumbs pointing up',
      'Pin your elbows to your sides and curl the dumbbells up toward your shoulders',
      'Slowly lower back to the starting position'
    ],
    tips: [
      '팔꿈치를 몸에 고정하세요',
      '손목 각도를 일정하게 유지하세요',
      '상완이두근과 상완근을 함께 사용합니다',
      '반동을 사용하지 마세요'
    ],
    tipsEn: [
      'Keep your elbows pinned to your sides throughout',
      'Maintain a consistent neutral wrist angle on every rep',
      'The hammer grip targets both your biceps brachii and brachialis',
      'Avoid using body momentum — lift with control'
    ],
    muscles: {
      primary: ['상완이두근', '상완근'],
      secondary: ['전완근']
    },
    musclesEn: {
      primary: ['Biceps brachii', 'Brachialis'],
      secondary: ['Forearms']
    }
  },

  {
    id: 'tricep-dips',
    name: '딥스',
    nameEn: 'Tricep Dips',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['arm'],
    equipment: ['bench'],
    difficulty: 'intermediate',
    instructions: [
      '벤치나 딥스 바에 손을 올리고 몸을 지탱합니다',
      '다리를 앞으로 뻗거나 구부려 난이도를 조절합니다',
      '팔꿈치를 뒤로 구부리며 몸을 내립니다',
      '삼두근 힘으로 몸을 다시 밀어 올립니다'
    ],
    instructionsEn: [
      'Place your hands on a bench or dip bars and support your body weight',
      'Extend your legs forward for more difficulty or bend them for an easier variation',
      'Bend your elbows and lower your body in a controlled descent',
      'Press back up to the starting position using your triceps'
    ],
    tips: [
      '어깨를 아래로 내리고 운동하세요',
      '팔꿈치가 바깥쪽으로 벌어지지 않게 주의하세요',
      '가슴을 내밀고 등을 곧게 펴세요',
      '무릎을 구부리면 더 쉬워집니다'
    ],
    tipsEn: [
      'Keep your shoulders depressed — do not let them shrug up',
      'Keep your elbows tracking backward, not flaring outward',
      'Keep your chest up and your back straight',
      'Bending your knees and keeping feet on the floor makes the exercise easier'
    ],
    muscles: {
      primary: ['삼두근'],
      secondary: ['대흉근 하부', '전면 삼각근']
    },
    musclesEn: {
      primary: ['Triceps'],
      secondary: ['Lower pectoralis', 'Anterior deltoid']
    }
  },

  // 추가 어깨 운동들
  {
    id: 'arnold-press',
    name: '아놀드 프레스',
    nameEn: 'Arnold Press',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['shoulder'],
    equipment: ['dumbbell'],
    difficulty: 'intermediate',
    instructions: [
      '덤벨을 양손에 들고 앉거나 서서 시작합니다',
      '손바닥이 몸을 향하도록 덤벨을 어깨 높이에 둡니다',
      '덤벨을 올리면서 손목을 바깥쪽으로 회전시킵니다',
      '최고점에서 손바닥이 앞을 향하도록 합니다'
    ],
    instructionsEn: [
      'Sit or stand holding a dumbbell in each hand at shoulder height',
      'Start with your palms facing toward you',
      'As you press the dumbbells overhead, rotate your wrists outward',
      'At the top, your palms should be facing forward with arms extended'
    ],
    tips: [
      '회전 동작을 부드럽게 하세요',
      '어깨 전체를 골고루 사용하는 운동입니다',
      '무게보다는 정확한 동작이 중요합니다',
      '어깨 부상 위험이 있으니 주의하세요'
    ],
    tipsEn: [
      'Make the rotation smooth and controlled — do not jerk the weight',
      'The Arnold press is one of the most complete shoulder exercises, targeting all three deltoid heads',
      'Prioritize controlled technique over heavy weight',
      'Be cautious if you have a history of shoulder injuries'
    ],
    muscles: {
      primary: ['삼각근 전체'],
      secondary: ['삼두근', '승모근']
    },
    musclesEn: {
      primary: ['All deltoid heads'],
      secondary: ['Triceps', 'Trapezius']
    }
  },

  {
    id: 'face-pull',
    name: '페이스 풀',
    nameEn: 'Face Pull',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['shoulder'],
    equipment: ['cable'],
    difficulty: 'beginner',
    instructions: [
      '케이블을 얼굴 높이로 설정하고 로프를 잡습니다',
      '팔꿈치를 높게 유지하며 로프를 얼굴 쪽으로 당깁니다',
      '어깨날개를 모으며 리어 델트를 수축시킵니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    instructionsEn: [
      'Set the cable pulley to face height and grip the rope attachment',
      'Keep your elbows high as you pull the rope toward your face',
      'Retract your shoulder blades and squeeze your rear deltoids',
      'Slowly return to the starting position with control'
    ],
    tips: [
      '팔꿈치를 어깨보다 높게 유지하세요',
      '어깨날개 모으기를 의식하세요',
      '목을 앞으로 빼지 마세요',
      '자세 교정에 매우 좋은 운동입니다'
    ],
    tipsEn: [
      'Keep your elbows above shoulder height throughout the pull',
      'Consciously focus on squeezing your shoulder blades together',
      'Do not jut your head forward to meet the rope',
      'Face pulls are excellent for posture correction and shoulder health'
    ],
    muscles: {
      primary: ['삼각근 후면'],
      secondary: ['승모근', '능형근']
    },
    musclesEn: {
      primary: ['Posterior deltoid'],
      secondary: ['Trapezius', 'Rhomboids']
    }
  },

  // 추가 등 운동들
  {
    id: 'seated-row',
    name: '시티드 로우',
    nameEn: 'Seated Row',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['back'],
    equipment: ['cable'],
    difficulty: 'beginner',
    instructions: [
      '시티드 로우 머신에 앉아 핸들을 잡습니다',
      '등을 곧게 펴고 가슴을 내밉니다',
      '어깨날개를 모으며 핸들을 배 쪽으로 당깁니다',
      '등근육 수축을 느끼며 천천히 돌아갑니다'
    ],
    instructionsEn: [
      'Sit at the seated row machine and grip the handle',
      'Keep your back straight and chest up',
      'Pull the handle toward your abdomen while squeezing your shoulder blades together',
      'Slowly return the handle forward, feeling your back muscles stretch'
    ],
    tips: [
      '등을 둥글게 말지 마세요',
      '어깨날개 모으기를 의식하세요',
      '팔꿈치를 몸에 가깝게 유지하세요',
      '상체를 과도하게 뒤로 젖히지 마세요'
    ],
    tipsEn: [
      'Do not round your lower back — maintain a neutral spine',
      'Focus on retracting your shoulder blades as you pull',
      'Keep your elbows close to your body throughout the row',
      'Avoid leaning too far back — your torso should remain mostly upright'
    ],
    muscles: {
      primary: ['광배근', '능형근'],
      secondary: ['후면 삼각근', '이두근']
    },
    musclesEn: {
      primary: ['Latissimus dorsi', 'Rhomboids'],
      secondary: ['Posterior deltoid', 'Biceps']
    }
  },

  // 추가 하체 운동들
  {
    id: 'leg-extension',
    name: '레그 익스텐션',
    nameEn: 'Leg Extension',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['leg'],
    equipment: ['machine'],
    difficulty: 'beginner',
    instructions: [
      '레그 익스텐션 머신에 앉아 등받이에 등을 댑니다',
      '발목을 패드 아래에 위치시킵니다',
      '대퇴사두근 힘으로 다리를 완전히 펴줍니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    instructionsEn: [
      'Sit in the leg extension machine with your back flat against the pad',
      'Position your ankles under the lower pad',
      'Extend your legs fully using your quadriceps',
      'Slowly lower back to the starting position'
    ],
    tips: [
      '무릎을 완전히 펴주세요',
      '대퇴사두근 수축을 의식하세요',
      '너무 무거운 중량은 피하세요',
      '등받이에 등을 완전히 대고 운동하세요'
    ],
    tipsEn: [
      'Extend your legs all the way to a full lockout for maximum quad activation',
      'Consciously squeeze your quadriceps at the top of each rep',
      'Avoid using excessively heavy weight — this can stress the knee joint',
      'Keep your back fully in contact with the seat pad throughout'
    ],
    muscles: {
      primary: ['대퇴사두근'],
      secondary: []
    },
    musclesEn: {
      primary: ['Quadriceps'],
      secondary: []
    }
  },

  {
    id: 'leg-curl',
    name: '레그 컬',
    nameEn: 'Leg Curl',
    category: '근력',
    categoryEn: 'Strength',
    bodyPart: ['leg'],
    equipment: ['machine'],
    difficulty: 'beginner',
    instructions: [
      '레그 컬 머신에 엎드려 패드를 발목에 위치시킵니다',
      '햄스트링 힘으로 발을 둔부 쪽으로 당깁니다',
      '햄스트링 수축을 느끼며 잠시 정지합니다',
      '천천히 원래 자세로 돌아갑니다'
    ],
    instructionsEn: [
      'Lie face down on the leg curl machine and position the pad against your ankles',
      'Curl your feet toward your glutes using your hamstrings',
      'Pause briefly at the top and feel the hamstring contraction',
      'Slowly lower back to the starting position'
    ],
    tips: [
      '햄스트링 수축을 의식하세요',
      '허리를 과도하게 젖히지 마세요',
      '발목을 굽히지 말고 일직선을 유지하세요',
      '대퇴사두근과 균형을 맞춰 운동하세요'
    ],
    tipsEn: [
      'Focus on deliberately contracting your hamstrings throughout the curl',
      'Avoid excessively arching your lower back during the movement',
      'Keep your ankles in a neutral position — do not dorsiflex',
      'Train leg curls in balance with leg extensions for overall leg health'
    ],
    muscles: {
      primary: ['햄스트링'],
      secondary: ['종아리']
    },
    musclesEn: {
      primary: ['Hamstrings'],
      secondary: ['Calves']
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
