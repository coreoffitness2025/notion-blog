// 1RM 계산 및 레벨링 시스템

// Brzycki 공식으로 1RM 계산
export const calculateOneRepMax = (weight: number, reps: number): number => {
  if (reps === 1) return weight;
  if (reps > 20) return 0;
  
  // Brzycki 공식: 1RM = weight × (36 / (37 - reps))
  return Math.round(weight * (36 / (37 - reps)));
};

// 체중 대비 1RM 비율 계산
export const calculateRelativeStrength = (oneRepMax: number, bodyWeight: number): number => {
  if (bodyWeight <= 0) return 0;
  return Math.round((oneRepMax / bodyWeight) * 10) / 10; // 소수점 1자리
};

// 운동별 레벨 판정 (체중 대비 1RM 기준)
export interface StrengthLevel {
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
  level: number;
  name: string;
  color: string;
  bgColor: string;
}

// 더 현실적인 레벨 기준표 (체중 대비 1RM 배율)
const STRENGTH_STANDARDS = {
  squat: {
    bronze: [0.5, 0.7, 0.9, 1.1, 1.3], // 브론즈 Lv1~5 (더 쉽게)
    silver: [1.5, 1.7, 1.9, 2.1, 2.3], // 실버 Lv1~5  
    gold: [2.5, 2.7, 2.9, 3.1, 3.3],   // 골드 Lv1~5
    diamond: [3.5, 3.7, 3.9, 4.1, 4.3] // 다이아 Lv1~5
  },
  deadlift: {
    bronze: [0.8, 1.0, 1.2, 1.4, 1.6], // 더 쉽게
    silver: [1.8, 2.0, 2.2, 2.4, 2.6],
    gold: [2.8, 3.0, 3.2, 3.4, 3.6],
    diamond: [3.8, 4.0, 4.2, 4.4, 4.6]
  },
  benchPress: {
    bronze: [0.4, 0.6, 0.8, 1.0, 1.2], // 더 쉽게
    silver: [1.4, 1.6, 1.8, 2.0, 2.2],
    gold: [2.4, 2.6, 2.8, 3.0, 3.2],
    diamond: [3.4, 3.6, 3.8, 4.0, 4.2]
  }
};

export const getStrengthLevel = (
  exercise: 'squat' | 'deadlift' | 'benchPress',
  relativeStrength: number
): StrengthLevel => {
  const standards = STRENGTH_STANDARDS[exercise];
  
  // 다이아몬드 등급 확인
  for (let i = 0; i < standards.diamond.length; i++) {
    if (relativeStrength >= standards.diamond[i]) {
      if (i === standards.diamond.length - 1 || relativeStrength < standards.diamond[i + 1]) {
        return {
          tier: 'diamond',
          level: i + 1,
          name: `다이아 Lv${i + 1}`,
          color: '#A855F7',
          bgColor: '#F3E8FF'
        };
      }
    }
  }
  
  // 골드 등급 확인
  for (let i = 0; i < standards.gold.length; i++) {
    if (relativeStrength >= standards.gold[i]) {
      if (i === standards.gold.length - 1 || relativeStrength < standards.gold[i + 1]) {
        return {
          tier: 'gold',
          level: i + 1,
          name: `골드 Lv${i + 1}`,
          color: '#F59E0B',
          bgColor: '#FEF3C7'
        };
      }
    }
  }
  
  // 실버 등급 확인
  for (let i = 0; i < standards.silver.length; i++) {
    if (relativeStrength >= standards.silver[i]) {
      if (i === standards.silver.length - 1 || relativeStrength < standards.silver[i + 1]) {
        return {
          tier: 'silver',
          level: i + 1,
          name: `실버 Lv${i + 1}`,
          color: '#6B7280',
          bgColor: '#F9FAFB'
        };
      }
    }
  }
  
  // 브론즈 등급 확인
  for (let i = 0; i < standards.bronze.length; i++) {
    if (relativeStrength >= standards.bronze[i]) {
      if (i === standards.bronze.length - 1 || relativeStrength < standards.bronze[i + 1]) {
        return {
          tier: 'bronze',
          level: i + 1,
          name: `브론즈 Lv${i + 1}`,
          color: '#CD7C2F',
          bgColor: '#FEF3C7'
        };
      }
    }
  }
  
  // 기본값 (브론즈 Lv1 미만)
  return {
    tier: 'bronze',
    level: 1,
    name: '브론즈 Lv1',
    color: '#CD7C2F',
    bgColor: '#FEF3C7'
  };
};

// 운동명을 표준명으로 변환
export const normalizeExerciseName = (exerciseName: string): 'squat' | 'deadlift' | 'benchPress' | null => {
  const name = exerciseName.toLowerCase().replace(/\s+/g, ''); // 공백 제거
  
  if (name.includes('스쿼트') || name.includes('squat')) {
    return 'squat';
  }
  if (name.includes('데드리프트') || name.includes('deadlift')) {
    return 'deadlift';
  }
  if (name.includes('벤치프레스') || name.includes('벤치') || name.includes('bench')) {
    return 'benchPress';
  }
  
  return null;
};

// 운동별 한글명
export const getExerciseKoreanName = (exercise: 'squat' | 'deadlift' | 'benchPress'): string => {
  const names = {
    squat: '스쿼트',
    deadlift: '데드리프트',
    benchPress: '벤치프레스'
  };
  return names[exercise];
};

// 티어별 아이콘
export const getTierIcon = (tier: 'bronze' | 'silver' | 'gold' | 'diamond'): string => {
  const icons = {
    bronze: 'medal',
    silver: 'award',
    gold: 'trophy',
    diamond: 'crown'
  };
  return icons[tier];
};


