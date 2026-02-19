// 웹 버전용 프로그램 데이터 (React Native 의존성 제거)

export interface ProgramExercise {
  id: string;
  name: string;
  nameEn: string;
  type: 'main' | 'accessory';
  targetSets: number;
  targetReps: number;
  order: number;
  notes?: string;
  notesEn?: string;
}

export interface RecommendedProgram {
  name: string;
  nameEn: string;
  description?: string;
  descriptionEn?: string;
  goal: '근력 향상' | '근비대' | '체지방 감소';
  level: '초급' | '중급' | '고급';
  duration: string;
  durationEn: string;
  exercises: ProgramExercise[];
}

export const RECOMMENDED_PROGRAMS: RecommendedProgram[] = [
    {
        name: '초급자를 위한 전신 근력 프로그램',
        nameEn: 'Full Body Strength Program for Beginners',
        goal: '근력 향상',
        level: '초급',
        duration: '8주',
        durationEn: '8 weeks',
        description: '이제 막 헬스를 시작한 분들을 위한 기본 근력 프로그램입니다. 주요 다관절 운동을 통해 전신의 근육을 균형있게 발달시킵니다.',
        descriptionEn: 'A foundational strength program designed for those just starting their fitness journey. Develops balanced, full-body muscle through compound multi-joint movements.',
        exercises: [
            { id: 'squat', name: '스쿼트', nameEn: 'Squat', type: 'main', targetSets: 3, targetReps: 8, order: 0 },
            { id: 'benchPress', name: '벤치 프레스', nameEn: 'Bench Press', type: 'main', targetSets: 3, targetReps: 8, order: 1 },
            { id: 'barbellRow', name: '바벨 로우', nameEn: 'Barbell Row', type: 'main', targetSets: 3, targetReps: 8, order: 2 },
            { id: 'overheadPress', name: '오버헤드 프레스', nameEn: 'Overhead Press', type: 'accessory', targetSets: 3, targetReps: 10, order: 3 },
            { id: 'latPulldown', name: '랫 풀다운', nameEn: 'Lat Pulldown', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
        ]
    },
    {
        name: '4분할 근비대 프로그램',
        nameEn: '4-Day Split Hypertrophy Program',
        goal: '근비대',
        level: '중급',
        duration: '12주',
        durationEn: '12 weeks',
        description: '각 부위를 주 2회 효과적으로 자극하여 근육 사이즈를 키우는 것을 목표로 하는 중급자용 4분할 프로그램입니다.',
        descriptionEn: 'An intermediate 4-day split program aimed at maximizing muscle size by hitting each muscle group twice per week for optimal hypertrophy stimulus.',
        exercises: [
            { id: 'dumbbellBenchPress', name: '덤벨 벤치 프레스', nameEn: 'Dumbbell Bench Press', type: 'main', targetSets: 4, targetReps: 12, order: 0 },
            { id: 'inclineDumbbellPress', name: '인클라인 덤벨 프레스', nameEn: 'Incline Dumbbell Press', type: 'accessory', targetSets: 3, targetReps: 12, order: 1 },
            { id: 'cableCrossover', name: '케이블 크로스오버', nameEn: 'Cable Crossover', type: 'accessory', targetSets: 3, targetReps: 15, order: 2 },
            { id: 'dips', name: '딥스', nameEn: 'Dips', type: 'main', targetSets: 3, targetReps: 15, order: 3 },
            { id: 'tricepsPushdown', name: '트라이셉스 푸시다운', nameEn: 'Triceps Pushdown', type: 'accessory', targetSets: 3, targetReps: 15, order: 4 },
        ]
    },
    {
        name: '고강도 인터벌 체지방 감소 프로그램',
        nameEn: 'High Intensity Interval Fat Loss Program',
        goal: '체지방 감소',
        level: '고급',
        duration: '6주',
        durationEn: '6 weeks',
        description: '서킷 트레이닝과 HIIT를 결합하여 짧은 시간 안에 최대한의 칼로리를 소모하고 운동 후에도 대사를 활성화시키는 고급자용 프로그램입니다.',
        descriptionEn: 'An advanced program combining circuit training and HIIT to maximize calorie burn in minimal time while keeping your metabolism elevated long after the session ends.',
        exercises: [
            { id: 'burpee', name: '버피 테스트', nameEn: 'Burpees', type: 'main', targetSets: 5, targetReps: 15, order: 0 },
            { id: 'kettlebellSwing', name: '케틀벨 스윙', nameEn: 'Kettlebell Swing', type: 'main', targetSets: 5, targetReps: 20, order: 1 },
            { id: 'battleRope', name: '배틀 로프', nameEn: 'Battle Rope', type: 'main', targetSets: 5, targetReps: 30, order: 2, notes: "30초 수행", notesEn: "30 seconds" },
            { id: 'boxJump', name: '박스 점프', nameEn: 'Box Jump', type: 'main', targetSets: 5, targetReps: 12, order: 3 },
        ]
    },
    {
        name: '가슴 집중 루틴',
        nameEn: 'Chest Focus Routine',
        goal: '근비대',
        level: '중급',
        duration: '4주',
        durationEn: '4 weeks',
        description: '가슴 근육을 집중적으로 발달시키는 루틴입니다. 다양한 각도에서 가슴을 자극하여 전체적인 가슴 발달을 목표로 합니다.',
        descriptionEn: 'A routine dedicated to building a well-developed chest. Targets the pectorals from multiple angles to promote complete, balanced chest growth.',
        exercises: [
            { id: 'benchPress', name: '벤치 프레스', nameEn: 'Bench Press', type: 'main', targetSets: 4, targetReps: 8, order: 0 },
            { id: 'inclineBenchPress', name: '인클라인 벤치 프레스', nameEn: 'Incline Bench Press', type: 'main', targetSets: 4, targetReps: 10, order: 1 },
            { id: 'declineBenchPress', name: '디클라인 벤치 프레스', nameEn: 'Decline Bench Press', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'dumbbellFlye', name: '덤벨 플라이', nameEn: 'Dumbbell Flye', type: 'accessory', targetSets: 3, targetReps: 12, order: 3 },
            { id: 'cableCrossover', name: '케이블 크로스오버', nameEn: 'Cable Crossover', type: 'accessory', targetSets: 3, targetReps: 15, order: 4 },
            { id: 'pushups', name: '푸시업', nameEn: 'Push-ups', type: 'accessory', targetSets: 3, targetReps: 20, order: 5 }
        ]
    },
    {
        name: '등 집중 루틴',
        nameEn: 'Back Focus Routine',
        goal: '근비대',
        level: '중급',
        duration: '4주',
        durationEn: '4 weeks',
        description: '넓고 두꺼운 등을 만들기 위한 루틴입니다. 광배근과 승모근, 중하부승모근을 균형있게 발달시킵니다.',
        descriptionEn: 'A routine built to develop a wide, thick back. Balances lat, upper trap, and mid-lower trap development for a complete, powerful posterior.',
        exercises: [
            { id: 'deadlift', name: '데드리프트', nameEn: 'Deadlift', type: 'main', targetSets: 4, targetReps: 6, order: 0 },
            { id: 'pullup', name: '풀업', nameEn: 'Pull-up', type: 'main', targetSets: 4, targetReps: 8, order: 1 },
            { id: 'barbellRow', name: '바벨 로우', nameEn: 'Barbell Row', type: 'main', targetSets: 4, targetReps: 10, order: 2 },
            { id: 'latPulldown', name: '랫 풀다운', nameEn: 'Lat Pulldown', type: 'accessory', targetSets: 3, targetReps: 12, order: 3 },
            { id: 'seatedCableRow', name: '시티드 케이블 로우', nameEn: 'Seated Cable Row', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'facepull', name: '페이스 풀', nameEn: 'Face Pull', type: 'accessory', targetSets: 3, targetReps: 15, order: 5 }
        ]
    },
    {
        name: '하체 집중 루틴',
        nameEn: 'Lower Body Focus Routine',
        goal: '근력 향상',
        level: '중급',
        duration: '6주',
        durationEn: '6 weeks',
        description: '하체 전체 근육을 강화하는 루틴입니다. 대퇴사두근, 햄스트링, 둔근을 골고루 발달시켜 균형잡힌 하체를 만듭니다.',
        descriptionEn: 'A comprehensive lower body strengthening routine. Develops quads, hamstrings, and glutes in equal measure for a balanced, powerful lower body.',
        exercises: [
            { id: 'squat', name: '스쿼트', nameEn: 'Squat', type: 'main', targetSets: 4, targetReps: 8, order: 0 },
            { id: 'romanianDeadlift', name: '루마니안 데드리프트', nameEn: 'Romanian Deadlift', type: 'main', targetSets: 4, targetReps: 10, order: 1 },
            { id: 'bulgarianSplitSquat', name: '불가리안 스플릿 스쿼트', nameEn: 'Bulgarian Split Squat', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'legPress', name: '레그 프레스', nameEn: 'Leg Press', type: 'accessory', targetSets: 3, targetReps: 15, order: 3 },
            { id: 'legCurl', name: '레그 컬', nameEn: 'Leg Curl', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'calfRaise', name: '카프 레이즈', nameEn: 'Calf Raise', type: 'accessory', targetSets: 4, targetReps: 20, order: 5 }
        ]
    },
    {
        name: '어깨 집중 루틴',
        nameEn: 'Shoulder Focus Routine',
        goal: '근비대',
        level: '초급',
        duration: '4주',
        durationEn: '4 weeks',
        description: '삼각근 전면, 측면, 후면을 균형있게 발달시키는 루틴입니다. 어깨 부상 예방을 위해 점진적으로 강도를 높입니다.',
        descriptionEn: 'A routine that develops the front, side, and rear deltoids in proportion. Intensity is increased gradually to build shoulder strength safely and prevent injury.',
        exercises: [
            { id: 'overheadPress', name: '오버헤드 프레스', nameEn: 'Overhead Press', type: 'main', targetSets: 4, targetReps: 10, order: 0 },
            { id: 'lateralRaise', name: '래터럴 레이즈', nameEn: 'Lateral Raise', type: 'accessory', targetSets: 4, targetReps: 12, order: 1 },
            { id: 'frontRaise', name: '프론트 레이즈', nameEn: 'Front Raise', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'rearDeltFlye', name: '리어 델트 플라이', nameEn: 'Rear Delt Flye', type: 'accessory', targetSets: 4, targetReps: 15, order: 3 },
            { id: 'uprightRow', name: '업라이트 로우', nameEn: 'Upright Row', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'shrugs', name: '슈러그', nameEn: 'Shrugs', type: 'accessory', targetSets: 3, targetReps: 15, order: 5 }
        ]
    },
    {
        name: '팔 집중 루틴 (이두+삼두)',
        nameEn: 'Arms Focus Routine (Biceps + Triceps)',
        goal: '근비대',
        level: '초급',
        duration: '4주',
        durationEn: '4 weeks',
        description: '팔 근육을 집중적으로 발달시키는 루틴입니다. 이두근과 삼두근을 슈퍼셋으로 구성하여 효율적인 운동이 가능합니다.',
        descriptionEn: 'A routine focused on building arm size. Pairs bicep and tricep movements as supersets for maximum efficiency and a great pump.',
        exercises: [
            { id: 'barbellCurl', name: '바벨 컬', nameEn: 'Barbell Curl', type: 'main', targetSets: 4, targetReps: 10, order: 0 },
            { id: 'closegripBenchPress', name: '클로즈 그립 벤치프레스', nameEn: 'Close Grip Bench Press', type: 'main', targetSets: 4, targetReps: 10, order: 1 },
            { id: 'dumbbellCurl', name: '덤벨 컬', nameEn: 'Dumbbell Curl', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'tricepsDips', name: '트라이셉스 딥스', nameEn: 'Triceps Dips', type: 'accessory', targetSets: 3, targetReps: 12, order: 3 },
            { id: 'hammerCurl', name: '해머 컬', nameEn: 'Hammer Curl', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'tricepsExtension', name: '트라이셉스 익스텐션', nameEn: 'Triceps Extension', type: 'accessory', targetSets: 3, targetReps: 12, order: 5 }
        ]
    },
    {
        name: '복근 집중 루틴',
        nameEn: 'Core/Abs Focus Routine',
        goal: '근력 향상',
        level: '초급',
        duration: '6주',
        durationEn: '6 weeks',
        description: '코어 근육을 강화하는 루틴입니다. 복직근, 복사근, 복횡근을 모두 자극하여 탄탄한 코어를 만듭니다.',
        descriptionEn: 'A core-strengthening routine that targets all layers of the abdominals — rectus abdominis, obliques, and transverse abdominis — to build a solid, functional core.',
        exercises: [
            { id: 'plank', name: '플랭크', nameEn: 'Plank', type: 'main', targetSets: 3, targetReps: 60, order: 0, notes: "60초 유지", notesEn: "Hold 60 seconds" },
            { id: 'crunches', name: '크런치', nameEn: 'Crunches', type: 'accessory', targetSets: 3, targetReps: 20, order: 1 },
            { id: 'russianTwist', name: '러시안 트위스트', nameEn: 'Russian Twist', type: 'accessory', targetSets: 3, targetReps: 30, order: 2 },
            { id: 'bicycleCrunches', name: '바이시클 크런치', nameEn: 'Bicycle Crunches', type: 'accessory', targetSets: 3, targetReps: 20, order: 3 },
            { id: 'legRaise', name: '레그 레이즈', nameEn: 'Leg Raise', type: 'accessory', targetSets: 3, targetReps: 15, order: 4 },
            { id: 'mountainClimbers', name: '마운틴 클라이머', nameEn: 'Mountain Climbers', type: 'accessory', targetSets: 3, targetReps: 30, order: 5 }
        ]
    },
    {
        name: '초급자 홈트레이닝',
        nameEn: 'Beginner Home Training',
        goal: '체지방 감소',
        level: '초급',
        duration: '4주',
        durationEn: '4 weeks',
        description: '집에서 기구 없이 할 수 있는 전신 운동 루틴입니다. 체중을 이용한 운동으로 기초 체력을 기르고 체지방을 감소시킵니다.',
        descriptionEn: 'A full-body workout routine you can do at home with no equipment. Builds foundational fitness and reduces body fat using only your own bodyweight.',
        exercises: [
            { id: 'bodyweightSquat', name: '맨몸 스쿼트', nameEn: 'Bodyweight Squat', type: 'main', targetSets: 3, targetReps: 20, order: 0 },
            { id: 'pushups', name: '푸시업', nameEn: 'Push-ups', type: 'main', targetSets: 3, targetReps: 15, order: 1 },
            { id: 'lunges', name: '런지', nameEn: 'Lunges', type: 'accessory', targetSets: 3, targetReps: 16, order: 2, notes: "각 다리 8회씩", notesEn: "8 reps each leg" },
            { id: 'plank', name: '플랭크', nameEn: 'Plank', type: 'accessory', targetSets: 3, targetReps: 45, order: 3, notes: "45초 유지", notesEn: "Hold 45 seconds" },
            { id: 'jumpingJacks', name: '점핑잭', nameEn: 'Jumping Jacks', type: 'accessory', targetSets: 3, targetReps: 30, order: 4 },
            { id: 'burpee', name: '버피', nameEn: 'Burpees', type: 'accessory', targetSets: 3, targetReps: 10, order: 5 }
        ]
    },
    {
        name: '파워리프팅 입문 루틴',
        nameEn: 'Powerlifting Intro Routine',
        goal: '근력 향상',
        level: '중급',
        duration: '12주',
        durationEn: '12 weeks',
        description: '스쿼트, 벤치프레스, 데드리프트 3대 운동을 중심으로 한 파워리프팅 입문 루틴입니다. 최대근력 향상에 중점을 둡니다.',
        descriptionEn: 'An introductory powerlifting routine built around the big three: squat, bench press, and deadlift. Focuses on progressive overload to develop maximal strength.',
        exercises: [
            { id: 'squat', name: '스쿼트', nameEn: 'Squat', type: 'main', targetSets: 5, targetReps: 5, order: 0 },
            { id: 'benchPress', name: '벤치 프레스', nameEn: 'Bench Press', type: 'main', targetSets: 5, targetReps: 5, order: 1 },
            { id: 'deadlift', name: '데드리프트', nameEn: 'Deadlift', type: 'main', targetSets: 5, targetReps: 5, order: 2 },
            { id: 'overheadPress', name: '오버헤드 프레스', nameEn: 'Overhead Press', type: 'accessory', targetSets: 3, targetReps: 8, order: 3 },
            { id: 'barbellRow', name: '바벨 로우', nameEn: 'Barbell Row', type: 'accessory', targetSets: 3, targetReps: 8, order: 4 }
        ]
    },
    {
        name: '상체 집중 루틴',
        nameEn: 'Upper Body Focus Routine',
        goal: '근비대',
        level: '중급',
        duration: '8주',
        durationEn: '8 weeks',
        description: '상체 근육 발달에 집중하는 프로그램입니다. 가슴, 등, 어깨, 팔 근육을 균형있게 발달시킵니다.',
        descriptionEn: 'A program dedicated to upper body development. Builds chest, back, shoulders, and arms in a balanced way for a proportional, strong upper physique.',
        exercises: [
            { id: 'benchPress', name: '벤치 프레스', nameEn: 'Bench Press', type: 'main', targetSets: 4, targetReps: 8, order: 0 },
            { id: 'inclinePress', name: '인클라인 프레스', nameEn: 'Incline Press', type: 'main', targetSets: 3, targetReps: 10, order: 1 },
            { id: 'barbellRow', name: '바벨 로우', nameEn: 'Barbell Row', type: 'main', targetSets: 4, targetReps: 8, order: 2 },
            { id: 'latPulldown', name: '랫 풀다운', nameEn: 'Lat Pulldown', type: 'accessory', targetSets: 3, targetReps: 12, order: 3 },
            { id: 'shoulderPress', name: '숄더 프레스', nameEn: 'Shoulder Press', type: 'accessory', targetSets: 3, targetReps: 10, order: 4 },
            { id: 'lateralRaise', name: '사이드 레터럴 레이즈', nameEn: 'Side Lateral Raise', type: 'accessory', targetSets: 3, targetReps: 15, order: 5 },
            { id: 'bicepCurl', name: '바이셉 컬', nameEn: 'Bicep Curl', type: 'accessory', targetSets: 3, targetReps: 12, order: 6 },
            { id: 'tricepDip', name: '트라이셉 딥스', nameEn: 'Tricep Dips', type: 'accessory', targetSets: 3, targetReps: 12, order: 7 }
        ]
    },
    {
        name: '하체 파워 루틴',
        nameEn: 'Lower Body Power Routine',
        goal: '근력 향상',
        level: '고급',
        duration: '10주',
        durationEn: '10 weeks',
        description: '하체 근력과 파워를 극대화하는 고강도 프로그램입니다. 스쿼트와 데드리프트 중심의 강력한 루틴입니다.',
        descriptionEn: 'A high-intensity program designed to maximize lower body strength and power. Built around squat and deadlift variations for serious lower body gains.',
        exercises: [
            { id: 'backSquat', name: '백 스쿼트', nameEn: 'Back Squat', type: 'main', targetSets: 5, targetReps: 5, order: 0 },
            { id: 'romanianDeadlift', name: '루마니안 데드리프트', nameEn: 'Romanian Deadlift', type: 'main', targetSets: 4, targetReps: 6, order: 1 },
            { id: 'frontSquat', name: '프론트 스쿼트', nameEn: 'Front Squat', type: 'main', targetSets: 3, targetReps: 8, order: 2 },
            { id: 'bulgariaSplit', name: '불가리안 스플릿 스쿼트', nameEn: 'Bulgarian Split Squat', type: 'accessory', targetSets: 3, targetReps: 10, order: 3, notes: "각 다리", notesEn: "Each leg" },
            { id: 'legCurl', name: '레그 컬', nameEn: 'Leg Curl', type: 'accessory', targetSets: 3, targetReps: 12, order: 4 },
            { id: 'calfRaise', name: '카프 레이즈', nameEn: 'Calf Raise', type: 'accessory', targetSets: 4, targetReps: 20, order: 5 }
        ]
    },
    {
        name: '바디빌딩 스타일 PPL',
        nameEn: 'Bodybuilding Style PPL',
        goal: '근비대',
        level: '고급',
        duration: '16주',
        durationEn: '16 weeks',
        description: '전문 보디빌더들이 사용하는 Push/Pull/Legs 분할 프로그램입니다. 최대 근비대를 위한 고볼륨 훈련입니다.',
        descriptionEn: 'A Push/Pull/Legs split used by competitive bodybuilders. High-volume training structured to maximize muscle hypertrophy across all major muscle groups.',
        exercises: [
            { id: 'benchPress', name: '벤치 프레스', nameEn: 'Bench Press', type: 'main', targetSets: 4, targetReps: 8, order: 0 },
            { id: 'inclinePress', name: '인클라인 프레스', nameEn: 'Incline Press', type: 'main', targetSets: 4, targetReps: 10, order: 1 },
            { id: 'dips', name: '딥스', nameEn: 'Dips', type: 'accessory', targetSets: 3, targetReps: 12, order: 2 },
            { id: 'shoulderPress', name: '숄더 프레스', nameEn: 'Shoulder Press', type: 'accessory', targetSets: 4, targetReps: 10, order: 3 },
            { id: 'lateralRaise', name: '사이드 레이즈', nameEn: 'Side Raise', type: 'accessory', targetSets: 4, targetReps: 15, order: 4 },
            { id: 'tricepExtension', name: '트라이셉 익스텐션', nameEn: 'Tricep Extension', type: 'accessory', targetSets: 4, targetReps: 12, order: 5 }
        ]
    },
    {
        name: '여성 하체 집중 루틴',
        nameEn: "Women's Lower Body Focus Routine",
        goal: '근비대',
        level: '초급',
        duration: '8주',
        durationEn: '8 weeks',
        description: '여성들에게 인기 있는 하체 라인 만들기 프로그램입니다. 둔근과 허벅지 근육을 집중적으로 발달시킵니다.',
        descriptionEn: "A popular lower body shaping program for women. Focuses intensively on developing the glutes and thighs to create toned, defined lower body lines.",
        exercises: [
            { id: 'squat', name: '스쿼트', nameEn: 'Squat', type: 'main', targetSets: 4, targetReps: 12, order: 0 },
            { id: 'hipThrust', name: '힙 쓰러스트', nameEn: 'Hip Thrust', type: 'main', targetSets: 4, targetReps: 12, order: 1 },
            { id: 'lunges', name: '런지', nameEn: 'Lunges', type: 'accessory', targetSets: 3, targetReps: 12, order: 2, notes: "각 다리", notesEn: "Each leg" },
            { id: 'legCurl', name: '레그 컬', nameEn: 'Leg Curl', type: 'accessory', targetSets: 3, targetReps: 15, order: 3 },
            { id: 'calfRaise', name: '카프 레이즈', nameEn: 'Calf Raise', type: 'accessory', targetSets: 3, targetReps: 20, order: 4 },
            { id: 'gluteBridge', name: '글루트 브릿지', nameEn: 'Glute Bridge', type: 'accessory', targetSets: 3, targetReps: 20, order: 5 }
        ]
    }
];

export const PROGRAM_GOALS = [
  { id: '근력 향상', name: '근력 향상', nameEn: 'Strength', icon: '🏋️', color: '#3b82f6' },
  { id: '근비대', name: '근비대', nameEn: 'Hypertrophy', icon: '💪', color: '#22c55e' },
  { id: '체지방 감소', name: '체지방 감소', nameEn: 'Fat Loss', icon: '🔥', color: '#ef4444' },
];

export const PROGRAM_LEVELS = [
  { id: '초급', name: '초급', nameEn: 'Beginner', color: '#22c55e' },
  { id: '중급', name: '중급', nameEn: 'Intermediate', color: '#3b82f6' },
  { id: '고급', name: '고급', nameEn: 'Advanced', color: '#a855f7' },
];
