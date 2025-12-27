// 웹 버전용 프로그램 데이터 (React Native 의존성 제거)

export interface ProgramExercise {
  id: string;
  name: string;
  type: 'main' | 'accessory';
  targetSets: number;
  targetReps: number;
  order: number;
  notes?: string;
}

export interface RecommendedProgram {
  name: string;
  description?: string;
  goal: '근력 향상' | '근비대' | '체지방 감소';
  level: '초급' | '중급' | '고급';
  duration: string;
  exercises: ProgramExercise[];
}

export const RECOMMENDED_PROGRAMS: RecommendedProgram[] = [
    {
        name: '초급자를 위한 전신 근력 프로그램',
        goal: '근력 향상',
        level: '초급',
        duration: '8주',
        description: '이제 막 헬스를 시작한 분들을 위한 기본 근력 프로그램입니다. 주요 다관절 운동을 통해 전신의 근육을 균형있게 발달시킵니다.',
        exercises: [
            { id: 'squat', name: '스쿼트', type: 'main', targetSets: 3, targetReps: 8, order: 0 },
            { id: 'benchPress', name: '벤치 프레스', type: 'main', targetSets: 3, targetReps: 8, order: 1 },
            { id: 'barbellRow', name: '바벨 로우', type: 'main', targetSets: 3, targetReps: 8, order: 2 },
            { id: 'overheadPress', name: '오버헤드 프레스', type: 'accessory', targetSets: 3, targetReps: 10, order: 3 },
            { id: 'latPulldown', name: '랫 풀다운', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
        ]
    },
    {
        name: '4분할 근비대 프로그램',
        goal: '근비대',
        level: '중급',
        duration: '12주',
        description: '각 부위를 주 2회 효과적으로 자극하여 근육 사이즈를 키우는 것을 목표로 하는 중급자용 4분할 프로그램입니다.',
        exercises: [
            { id: 'dumbbellBenchPress', name: '덤벨 벤치 프레스', type: 'main', targetSets: 4, targetReps: 12, order: 0 },
            { id: 'inclineDumbbellPress', name: '인클라인 덤벨 프레스', type: 'accessory', targetSets: 3, targetReps: 12, order: 1 },
            { id: 'cableCrossover', name: '케이블 크로스오버', type: 'accessory', targetSets: 3, targetReps: 15, order: 2 },
            { id: 'dips', name: '딥스', type: 'main', targetSets: 3, targetReps: 15, order: 3 },
            { id: 'tricepsPushdown', name: '트라이셉스 푸시다운', type: 'accessory', targetSets: 3, targetReps: 15, order: 4 },
        ]
    },
    {
        name: '고강도 인터벌 체지방 감소 프로그램',
        goal: '체지방 감소',
        level: '고급',
        duration: '6주',
        description: '서킷 트레이닝과 HIIT를 결합하여 짧은 시간 안에 최대한의 칼로리를 소모하고 운동 후에도 대사를 활성화시키는 고급자용 프로그램입니다.',
        exercises: [
            { id: 'burpee', name: '버피 테스트', type: 'main', targetSets: 5, targetReps: 15, order: 0 },
            { id: 'kettlebellSwing', name: '케틀벨 스윙', type: 'main', targetSets: 5, targetReps: 20, order: 1 },
            { id: 'battleRope', name: '배틀 로프', type: 'main', targetSets: 5, targetReps: 30, order: 2, notes: "30초 수행" },
            { id: 'boxJump', name: '박스 점프', type: 'main', targetSets: 5, targetReps: 12, order: 3 },
        ]
    },
    {
        name: '가슴 집중 루틴',
        goal: '근비대',
        level: '중급',
        duration: '4주',
        description: '가슴 근육을 집중적으로 발달시키는 루틴입니다. 다양한 각도에서 가슴을 자극하여 전체적인 가슴 발달을 목표로 합니다.',
        exercises: [
            { id: 'benchPress', name: '벤치 프레스', type: 'main', targetSets: 4, targetReps: 8, order: 0 },
            { id: 'inclineBenchPress', name: '인클라인 벤치 프레스', type: 'main', targetSets: 4, targetReps: 10, order: 1 },
            { id: 'declineBenchPress', name: '디클라인 벤치 프레스', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'dumbbellFlye', name: '덤벨 플라이', type: 'accessory', targetSets: 3, targetReps: 12, order: 3 },
            { id: 'cableCrossover', name: '케이블 크로스오버', type: 'accessory', targetSets: 3, targetReps: 15, order: 4 },
            { id: 'pushups', name: '푸시업', type: 'accessory', targetSets: 3, targetReps: 20, order: 5 }
        ]
    },
    {
        name: '등 집중 루틴',
        goal: '근비대',
        level: '중급',
        duration: '4주',
        description: '넓고 두꺼운 등을 만들기 위한 루틴입니다. 광배근과 승모근, 중하부승모근을 균형있게 발달시킵니다.',
        exercises: [
            { id: 'deadlift', name: '데드리프트', type: 'main', targetSets: 4, targetReps: 6, order: 0 },
            { id: 'pullup', name: '풀업', type: 'main', targetSets: 4, targetReps: 8, order: 1 },
            { id: 'barbellRow', name: '바벨 로우', type: 'main', targetSets: 4, targetReps: 10, order: 2 },
            { id: 'latPulldown', name: '랫 풀다운', type: 'accessory', targetSets: 3, targetReps: 12, order: 3 },
            { id: 'seatedCableRow', name: '시티드 케이블 로우', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'facepull', name: '페이스 풀', type: 'accessory', targetSets: 3, targetReps: 15, order: 5 }
        ]
    },
    {
        name: '하체 집중 루틴',
        goal: '근력 향상',
        level: '중급',
        duration: '6주',
        description: '하체 전체 근육을 강화하는 루틴입니다. 대퇴사두근, 햄스트링, 둔근을 골고루 발달시켜 균형잡힌 하체를 만듭니다.',
        exercises: [
            { id: 'squat', name: '스쿼트', type: 'main', targetSets: 4, targetReps: 8, order: 0 },
            { id: 'romanianDeadlift', name: '루마니안 데드리프트', type: 'main', targetSets: 4, targetReps: 10, order: 1 },
            { id: 'bulgarianSplitSquat', name: '불가리안 스플릿 스쿼트', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'legPress', name: '레그 프레스', type: 'accessory', targetSets: 3, targetReps: 15, order: 3 },
            { id: 'legCurl', name: '레그 컬', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'calfRaise', name: '카프 레이즈', type: 'accessory', targetSets: 4, targetReps: 20, order: 5 }
        ]
    },
    {
        name: '어깨 집중 루틴',
        goal: '근비대',
        level: '초급',
        duration: '4주',
        description: '삼각근 전면, 측면, 후면을 균형있게 발달시키는 루틴입니다. 어깨 부상 예방을 위해 점진적으로 강도를 높입니다.',
        exercises: [
            { id: 'overheadPress', name: '오버헤드 프레스', type: 'main', targetSets: 4, targetReps: 10, order: 0 },
            { id: 'lateralRaise', name: '래터럴 레이즈', type: 'accessory', targetSets: 4, targetReps: 12, order: 1 },
            { id: 'frontRaise', name: '프론트 레이즈', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'rearDeltFlye', name: '리어 델트 플라이', type: 'accessory', targetSets: 4, targetReps: 15, order: 3 },
            { id: 'uprightRow', name: '업라이트 로우', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'shrugs', name: '슈러그', type: 'accessory', targetSets: 3, targetReps: 15, order: 5 }
        ]
    },
    {
        name: '팔 집중 루틴 (이두+삼두)',
        goal: '근비대',
        level: '초급',
        duration: '4주',
        description: '팔 근육을 집중적으로 발달시키는 루틴입니다. 이두근과 삼두근을 슈퍼셋으로 구성하여 효율적인 운동이 가능합니다.',
        exercises: [
            { id: 'barbellCurl', name: '바벨 컬', type: 'main', targetSets: 4, targetReps: 10, order: 0 },
            { id: 'closegripBenchPress', name: '클로즈 그립 벤치프레스', type: 'main', targetSets: 4, targetReps: 10, order: 1 },
            { id: 'dumbbellCurl', name: '덤벨 컬', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'tricepsDips', name: '트라이셉스 딥스', type: 'accessory', targetSets: 3, targetReps: 12, order: 3 },
            { id: 'hammerCurl', name: '해머 컬', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'tricepsExtension', name: '트라이셉스 익스텐션', type: 'accessory', targetSets: 3, targetReps: 12, order: 5 }
        ]
    },
    {
        name: '복근 집중 루틴',
        goal: '근력 향상',
        level: '초급',
        duration: '6주',
        description: '코어 근육을 강화하는 루틴입니다. 복직근, 복사근, 복횡근을 모두 자극하여 탄탄한 코어를 만듭니다.',
        exercises: [
            { id: 'plank', name: '플랭크', type: 'main', targetSets: 3, targetReps: 60, order: 0, notes: "60초 유지" },
            { id: 'crunches', name: '크런치', type: 'accessory', targetSets: 3, targetReps: 20, order: 1 },
            { id: 'russianTwist', name: '러시안 트위스트', type: 'accessory', targetSets: 3, targetReps: 30, order: 2 },
            { id: 'bicycleCrunches', name: '바이시클 크런치', type: 'accessory', targetSets: 3, targetReps: 20, order: 3 },
            { id: 'legRaise', name: '레그 레이즈', type: 'accessory', targetSets: 3, targetReps: 15, order: 4 },
            { id: 'mountainClimbers', name: '마운틴 클라이머', type: 'accessory', targetSets: 3, targetReps: 30, order: 5 }
        ]
    },
    {
        name: '초급자 홈트레이닝',
        goal: '체지방 감소',
        level: '초급',
        duration: '4주',
        description: '집에서 기구 없이 할 수 있는 전신 운동 루틴입니다. 체중을 이용한 운동으로 기초 체력을 기르고 체지방을 감소시킵니다.',
        exercises: [
            { id: 'bodyweightSquat', name: '맨몸 스쿼트', type: 'main', targetSets: 3, targetReps: 20, order: 0 },
            { id: 'pushups', name: '푸시업', type: 'main', targetSets: 3, targetReps: 15, order: 1 },
            { id: 'lunges', name: '런지', type: 'accessory', targetSets: 3, targetReps: 16, order: 2, notes: "각 다리 8회씩" },
            { id: 'plank', name: '플랭크', type: 'accessory', targetSets: 3, targetReps: 45, order: 3, notes: "45초 유지" },
            { id: 'jumpingJacks', name: '점핑잭', type: 'accessory', targetSets: 3, targetReps: 30, order: 4 },
            { id: 'burpee', name: '버피', type: 'accessory', targetSets: 3, targetReps: 10, order: 5 }
        ]
    },
    {
        name: '파워리프팅 입문 루틴',
        goal: '근력 향상',
        level: '중급',
        duration: '12주',
        description: '스쿼트, 벤치프레스, 데드리프트 3대 운동을 중심으로 한 파워리프팅 입문 루틴입니다. 최대근력 향상에 중점을 둡니다.',
        exercises: [
            { id: 'squat', name: '스쿼트', type: 'main', targetSets: 5, targetReps: 5, order: 0 },
            { id: 'benchPress', name: '벤치 프레스', type: 'main', targetSets: 5, targetReps: 5, order: 1 },
            { id: 'deadlift', name: '데드리프트', type: 'main', targetSets: 5, targetReps: 5, order: 2 },
            { id: 'overheadPress', name: '오버헤드 프레스', type: 'accessory', targetSets: 3, targetReps: 8, order: 3 },
            { id: 'barbellRow', name: '바벨 로우', type: 'accessory', targetSets: 3, targetReps: 8, order: 4 }
        ]
    },
    {
        name: '상체 집중 루틴',
        goal: '근비대',
        level: '중급',
        duration: '8주',
        description: '상체 근육 발달에 집중하는 프로그램입니다. 가슴, 등, 어깨, 팔 근육을 균형있게 발달시킵니다.',
        exercises: [
            { id: 'benchPress', name: '벤치 프레스', type: 'main', targetSets: 4, targetReps: 8, order: 0 },
            { id: 'inclinePress', name: '인클라인 프레스', type: 'main', targetSets: 3, targetReps: 10, order: 1 },
            { id: 'barbellRow', name: '바벨 로우', type: 'main', targetSets: 4, targetReps: 8, order: 2 },
            { id: 'latPulldown', name: '랫 풀다운', type: 'accessory', targetSets: 3, targetReps: 12, order: 3 },
            { id: 'shoulderPress', name: '숄더 프레스', type: 'accessory', targetSets: 3, targetReps: 10, order: 4 },
            { id: 'lateralRaise', name: '사이드 레터럴 레이즈', type: 'accessory', targetSets: 3, targetReps: 15, order: 5 },
            { id: 'bicepCurl', name: '바이셉 컬', type: 'accessory', targetSets: 3, targetReps: 12, order: 6 },
            { id: 'tricepDip', name: '트라이셉 딥스', type: 'accessory', targetSets: 3, targetReps: 12, order: 7 }
        ]
    },
    {
        name: '하체 파워 루틴',
        goal: '근력 향상',
        level: '고급',
        duration: '10주',
        description: '하체 근력과 파워를 극대화하는 고강도 프로그램입니다. 스쿼트와 데드리프트 중심의 강력한 루틴입니다.',
        exercises: [
            { id: 'backSquat', name: '백 스쿼트', type: 'main', targetSets: 5, targetReps: 5, order: 0 },
            { id: 'romanianDeadlift', name: '루마니안 데드리프트', type: 'main', targetSets: 4, targetReps: 6, order: 1 },
            { id: 'frontSquat', name: '프론트 스쿼트', type: 'main', targetSets: 3, targetReps: 8, order: 2 },
            { id: 'bulgariaSplit', name: '불가리안 스플릿 스쿼트', type: 'accessory', targetSets: 3, targetReps: 10, order: 3, notes: "각 다리" },
            { id: 'legCurl', name: '레그 컬', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'calfRaise', name: '카프 레이즈', type: 'accessory', targetSets: 4, targetReps: 20, order: 5 }
        ]
    },
    {
        name: '바디빌딩 스타일 PPL',
        goal: '근비대',
        level: '고급',
        duration: '16주',
        description: '전문 보디빌더들이 사용하는 Push/Pull/Legs 분할 프로그램입니다. 최대 근비대를 위한 고볼륨 훈련입니다.',
        exercises: [
            { id: 'benchPress', name: '벤치 프레스', type: 'main', targetSets: 4, targetReps: 8, order: 0 },
            { id: 'inclinePress', name: '인클라인 프레스', type: 'main', targetSets: 4, targetReps: 10, order: 1 },
            { id: 'dips', name: '딥스', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'shoulderPress', name: '숄더 프레스', type: 'accessory', targetSets: 4, targetReps: 10, order: 3 },
            { id: 'lateralRaise', name: '사이드 레이즈', type: 'accessory', targetSets: 4, targetReps: 15, order: 4 },
            { id: 'tricepExtension', name: '트라이셉 익스텐션', type: 'accessory', targetSets: 4, targetReps: 12, order: 5 }
        ]
    },
    {
        name: '여성 하체 집중 루틴',
        goal: '근비대',
        level: '초급',
        duration: '8주',
        description: '여성들에게 인기 있는 하체 라인 만들기 프로그램입니다. 둔근과 허벅지 근육을 집중적으로 발달시킵니다.',
        exercises: [
            { id: 'squat', name: '스쿼트', type: 'main', targetSets: 4, targetReps: 12, order: 0 },
            { id: 'hipThrust', name: '힙 쓰러스트', type: 'main', targetSets: 4, targetReps: 12, order: 1 },
            { id: 'lunges', name: '런지', type: 'accessory', targetSets: 3, targetReps: 12, order: 2, notes: "각 다리" },
            { id: 'legCurl', name: '레그 컬', type: 'accessory', targetSets: 3, targetReps: 15, order: 3 },
            { id: 'calfRaise', name: '카프 레이즈', type: 'accessory', targetSets: 3, targetReps: 20, order: 4 },
            { id: 'gluteBridge', name: '글루트 브릿지', type: 'accessory', targetSets: 3, targetReps: 20, order: 5 }
        ]
    }
];

export const PROGRAM_GOALS = [
  { id: '근력 향상', name: '근력 향상', icon: '🏋️', color: '#3b82f6' },
  { id: '근비대', name: '근비대', icon: '💪', color: '#22c55e' },
  { id: '체지방 감소', name: '체지방 감소', icon: '🔥', color: '#ef4444' },
];

export const PROGRAM_LEVELS = [
  { id: '초급', name: '초급', color: '#22c55e' },
  { id: '중급', name: '중급', color: '#3b82f6' },
  { id: '고급', name: '고급', color: '#a855f7' },
];
