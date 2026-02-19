export interface HandbookArticle {
  id: string;
  category: '운동' | '영양' | '부상 방지' | '마인드셋' | '근비대' | '다이어트' | '보충제' | '부위별 운동' | '초보자';
  categoryEn: 'Exercise' | 'Nutrition' | 'Injury Prevention' | 'Mindset' | 'Hypertrophy' | 'Diet' | 'Supplements' | 'Body Part Training' | 'Beginner';
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  content: string; // 마크다운 형식으로 작성될 수 있음
  contentEn: string;
  author: string;
  publishedDate: string;
}

export const HANDBOOK_DATA: HandbookArticle[] = [
  {
    id: 'progressive-overload',
    category: '운동',
    categoryEn: 'Exercise',
    title: '점진적 과부하의 모든 것',
    titleEn: 'Everything About Progressive Overload',
    summary: '근성장을 위한 핵심 원리, 점진적 과부하를 어떻게 적용해야 할까요?',
    summaryEn: 'The fundamental principle behind muscle growth — how should you apply progressive overload?',
    content: `
# 점진적 과부하의 모든 것

근육을 성장시키고 힘을 키우기 위한 가장 기본적인 원리는 바로 **점진적 과부하(Progressive Overload)**입니다. 우리 몸은 놀랍도록 잘 적응하기 때문에, 어제보다 조금 더 강한 자극을 주지 않으면 성장할 이유를 찾지 못합니다.

## 점진적 과부하를 적용하는 5가지 방법

1.  **중량 늘리기:** 가장 대표적인 방법입니다. 지난주에 벤치 프레스를 60kg으로 8회 성공했다면, 이번 주에는 62.5kg으로 도전해보세요.
2.  **반복 횟수 늘리기:** 같은 무게로 더 많은 횟수를 드는 것도 훌륭한 과부하입니다. 60kg으로 8회가 아닌, 9회나 10회를 목표로 해보세요.
3.  **세트 수 늘리기:** 3세트를 성공했다면, 다음번엔 4세트에 도전하여 총 볼륨을 늘릴 수 있습니다.
4.  **휴식 시간 줄이기:** 세트 사이의 휴식 시간을 90초에서 75초로 줄이는 것은 근지구력과 심혈관계에 더 큰 자극을 줍니다.
5.  **운동 빈도 늘리기:** 주 1회 하던 등 운동을 주 2회로 늘리는 것도 총 훈련량을 증가시키는 좋은 방법입니다.

## 주의사항

점진적 과부하는 무작정 무겁게 드는 것만을 의미하지 않습니다. 항상 **올바른 자세**를 유지하는 것이 최우선이며, 부상의 위험이 없는 선에서 점진적으로 도전해야 합니다. 몸의 소리를 듣고 충분한 휴식과 영양을 공급하는 것을 잊지 마세요.
    `,
    contentEn: `
# Everything About Progressive Overload

The most fundamental principle for building muscle and increasing strength is **Progressive Overload**. Our bodies adapt remarkably well, which means if you don't provide a slightly greater stimulus than the day before, your body has no reason to grow.

## 5 Ways to Apply Progressive Overload

1.  **Increase the weight:** The most common method. If you completed 8 reps of bench press at 60 kg last week, challenge yourself with 62.5 kg this week.
2.  **Increase the reps:** Performing more repetitions with the same weight is also excellent overload. Instead of 8 reps at 60 kg, aim for 9 or 10.
3.  **Increase the sets:** If you successfully completed 3 sets, try 4 sets next time to increase your total volume.
4.  **Decrease rest time:** Shortening your rest between sets from 90 seconds to 75 seconds places greater demand on muscular endurance and your cardiovascular system.
5.  **Increase training frequency:** Going from one back session per week to two is a great way to increase total training volume.

## Important Notes

Progressive overload does not simply mean lifting heavier at all costs. Maintaining **proper form** is always the top priority — challenge yourself progressively within a safe range. Listen to your body and never forget adequate rest and nutrition.
    `,
    author: 'Corevia Fitness',
    publishedDate: '2025-09-16',
  },
  {
    id: 'muscle-building-fundamentals',
    category: '근비대',
    categoryEn: 'Hypertrophy',
    title: '근비대를 위한 핵심 원칙',
    titleEn: 'Core Principles of Muscle Hypertrophy',
    summary: '근육량 증가를 위해 반드시 알아야 할 운동, 영양, 휴식의 3대 원칙',
    summaryEn: 'The three essential pillars — training, nutrition, and rest — you must understand to build muscle mass.',
    content: `
# 근비대를 위한 핵심 원칙

근육량을 늘리고 싶다면 운동만으로는 부족합니다. **운동, 영양, 휴식**의 3박자가 모두 맞아야 근비대가 일어납니다.

## 1. 운동: 근비대에 최적화된 훈련

### 반복 횟수 (Rep Range)
- **8-12회**: 근비대에 가장 효과적인 구간
- **6-8회**: 근력과 근비대 동시 발달
- **12-15회**: 근지구력과 함께 근비대 효과

### 세트 수와 빈도
- **부위별 주 2-3회** 훈련이 최적
- **부위당 10-20세트** (주간 총 볼륨)
- **48-72시간** 휴식 후 같은 부위 재훈련

### 핵심 운동 우선순위
1. **복합 운동**: 스쿼트, 데드리프트, 벤치프레스, 로우
2. **보조 운동**: 부족한 부위 집중 공략
3. **고립 운동**: 마무리 및 세부 조각

## 2. 영양: 근육 성장의 연료

### 칼로리 잉여 (Caloric Surplus)
- 기초대사량보다 **300-500kcal 더** 섭취
- 너무 많으면 지방 증가, 너무 적으면 근성장 제한

### 단백질 섭취
- **체중 1kg당 1.6-2.2g** 섭취
- **끼니마다 20-40g씩** 균등 분배
- **류신 함량 높은** 완전 단백질 우선

### 탄수화물과 지방
- **탄수화물**: 운동 에너지원, 체중 1kg당 4-7g
- **지방**: 호르몬 생성, 총 칼로리의 20-30%

## 3. 휴식: 성장이 일어나는 시간

### 수면의 중요성
- **7-9시간** 양질의 수면
- **성장호르몬** 분비 최적화
- **근육 회복** 가속화

### 휴식일 활용
- **완전 휴식** vs **가벼운 활동** 선택
- **스트레스 관리**로 코르티솔 조절
- **충분한 수분** 섭취 (하루 2-3L)

## 현실적인 기대치

- **초보자**: 월 1-2kg 근육량 증가 가능
- **중급자**: 월 0.5-1kg 근육량 증가
- **고급자**: 월 0.25-0.5kg 근육량 증가

꾸준함이 가장 중요합니다. 완벽하지 않아도 꾸준히 하는 것이 완벽하게 한 번 하는 것보다 낫습니다.
    `,
    contentEn: `
# Core Principles of Muscle Hypertrophy

Building muscle mass requires more than just exercise. **Training, nutrition, and rest** — all three must work together for hypertrophy to occur.

## 1. Training: Optimized for Hypertrophy

### Rep Range
- **8–12 reps**: The most effective range for hypertrophy
- **6–8 reps**: Develops both strength and hypertrophy simultaneously
- **12–15 reps**: Promotes hypertrophy alongside muscular endurance

### Sets and Frequency
- **2–3 sessions per muscle group per week** is optimal
- **10–20 sets per muscle group** (weekly total volume)
- Allow **48–72 hours** of rest before training the same muscle group again

### Exercise Priority
1. **Compound movements**: Squats, deadlifts, bench press, rows
2. **Accessory movements**: Target lagging muscle groups
3. **Isolation movements**: Finishing and detail work

## 2. Nutrition: Fuel for Muscle Growth

### Caloric Surplus
- Consume **300–500 kcal above** your basal metabolic rate
- Too much leads to fat gain; too little limits muscle growth

### Protein Intake
- **1.6–2.2 g per kg of bodyweight**
- Distribute **20–40 g evenly across each meal**
- Prioritize **complete proteins high in leucine**

### Carbohydrates and Fats
- **Carbohydrates**: Primary exercise fuel, 4–7 g per kg of bodyweight
- **Fats**: Essential for hormone production, 20–30% of total calories

## 3. Rest: When Growth Actually Happens

### The Importance of Sleep
- **7–9 hours** of quality sleep
- Optimizes **growth hormone** secretion
- Accelerates **muscle recovery**

### Making the Most of Rest Days
- Choose between **full rest** vs. **light activity**
- Manage **stress** to regulate cortisol
- Stay **well hydrated** (2–3 L per day)

## Realistic Expectations

- **Beginners**: 1–2 kg of muscle gain per month possible
- **Intermediate**: 0.5–1 kg of muscle gain per month
- **Advanced**: 0.25–0.5 kg of muscle gain per month

Consistency is everything. Showing up imperfectly every day beats executing one perfect session.
    `,
    author: 'Corevia Fitness',
    publishedDate: '2025-09-16',
  },
  {
    id: 'fat-loss-science',
    category: '다이어트',
    categoryEn: 'Diet',
    title: '체지방 감량의 과학적 접근',
    titleEn: 'The Science of Fat Loss',
    summary: '다이어트의 핵심은 칼로리 적자. 건강하고 지속가능한 체지방 감량 전략',
    summaryEn: 'The key to any diet is a caloric deficit. Healthy and sustainable strategies for losing body fat.',
    content: `
# 체지방 감량의 과학적 접근

다이어트에는 수많은 방법론이 있지만, 핵심은 단 하나입니다: **칼로리 적자(Caloric Deficit)**

## 칼로리 적자의 기본 원리

### 1. 에너지 수지 균형
- **섭취 칼로리 < 소모 칼로리** = 체중 감량
- **1kg 체지방** = 약 7,700kcal
- **주 0.5kg 감량** = 일일 550kcal 적자 필요

### 2. 적정 적자 범위
- **보수적**: 일일 300-500kcal 적자 (주 0.3-0.7kg 감량)
- **적극적**: 일일 500-750kcal 적자 (주 0.7-1kg 감량)
- **위험**: 일일 1000kcal 이상 적자 (근손실 위험)

## 다이어트 중 근손실 방지법

### 단백질 섭취량 증가
- **체중 1kg당 2.0-2.5g** (벌크업 때보다 더 많이)
- **류신 풍부한** 동물성 단백질 우선
- **끼니마다 25-35g씩** 균등 분배

### 근력 운동 유지
- **중량 유지**에 집중 (늘리려 하지 말고)
- **복합 운동** 위주로 구성
- **주 3-4회** 꾸준한 훈련

### 유산소 운동 활용
- **저강도 장시간** (심박수 120-140bpm, 30-60분)
- **고강도 인터벌** (HIIT, 15-20분)
- **일상 활동량** 증가 (걷기, 계단 이용)

## 다이어트 플래토 극복법

### 대사 적응 대응
- **2주마다 칼로리 재계산**
- **리피드 데이** 주 1회 (탄수화물 증가)
- **다이어트 브레이크** 1-2주 (유지 칼로리)

### 측정 방법 다양화
- **체중**: 매일 같은 시간, 주간 평균
- **둘레**: 허리, 팔, 허벅지 측정
- **체지방률**: InBody, 캘리퍼 활용
- **사진**: 같은 조건에서 주간 촬영

## 지속가능한 다이어트 팁

### 식단 관리
- **80/20 법칙**: 80%는 건강식, 20%는 좋아하는 음식
- **포만감 높은 음식**: 단백질, 섬유질, 물
- **가공식품 제한**: 설탕, 트랜스지방 최소화

### 심리적 접근
- **완벽주의 버리기**: 하루 실수해도 괜찮음
- **장기적 관점**: 6개월-1년 계획 수립
- **작은 성공 축하**: 주간 목표 달성 시 보상

기억하세요. 빠른 다이어트는 빠른 요요를 부릅니다. 천천히, 꾸준히 가는 것이 결국 승리합니다.
    `,
    contentEn: `
# The Science of Fat Loss

There are countless diet methodologies out there, but the core principle is just one: **Caloric Deficit**.

## The Basic Principle of a Caloric Deficit

### 1. Energy Balance
- **Calories in < Calories out** = Weight loss
- **1 kg of body fat** ≈ 7,700 kcal
- **Losing 0.5 kg per week** requires a daily deficit of ~550 kcal

### 2. Appropriate Deficit Range
- **Conservative**: 300–500 kcal/day deficit (0.3–0.7 kg/week loss)
- **Aggressive**: 500–750 kcal/day deficit (0.7–1 kg/week loss)
- **Dangerous**: 1,000+ kcal/day deficit (risk of muscle loss)

## Preventing Muscle Loss During a Diet

### Increase Protein Intake
- **2.0–2.5 g per kg of bodyweight** (more than during a bulk)
- Prioritize **animal protein rich in leucine**
- Distribute **25–35 g evenly across each meal**

### Maintain Strength Training
- Focus on **maintaining weights** (don't try to increase them)
- Center your program around **compound movements**
- Train consistently **3–4 times per week**

### Utilize Cardio
- **Low-intensity steady-state** (heart rate 120–140 bpm, 30–60 min)
- **High-intensity interval training** (HIIT, 15–20 min)
- Increase **daily non-exercise activity** (walking, taking stairs)

## Breaking Through a Diet Plateau

### Combating Metabolic Adaptation
- **Recalculate calories every 2 weeks**
- **Refeed day** once per week (increase carbohydrates)
- **Diet break** for 1–2 weeks (eat at maintenance calories)

### Diversify Your Measurements
- **Weight**: Same time daily, track weekly average
- **Circumference**: Measure waist, arms, and thighs
- **Body fat %**: Use InBody scanner or calipers
- **Photos**: Weekly photos under identical conditions

## Tips for Sustainable Dieting

### Diet Management
- **80/20 rule**: 80% whole foods, 20% foods you enjoy
- **High-satiety foods**: Protein, fiber, and water
- **Limit processed foods**: Minimize sugar and trans fats

### Psychological Approach
- **Drop perfectionism**: One bad day is fine
- **Long-term perspective**: Plan for 6 months to 1 year
- **Celebrate small wins**: Reward yourself for weekly goals

Remember — rapid dieting leads to rapid rebound. Slow and steady wins in the end.
    `,
    author: 'Corevia Nutrition',
    publishedDate: '2025-09-16',
  },
  {
    id: 'compound-vs-isolation',
    category: '운동',
    categoryEn: 'Exercise',
    title: '복합운동 vs 고립운동: 언제 무엇을?',
    titleEn: 'Compound vs. Isolation Exercises: When to Use Each',
    summary: '효율적인 운동을 위한 복합운동과 고립운동의 올바른 활용법',
    summaryEn: 'How to correctly use compound and isolation exercises for a more efficient training program.',
    content: `
# 복합운동 vs 고립운동: 언제 무엇을?

헬스장에서 시간을 효율적으로 사용하려면 복합운동과 고립운동을 언제, 어떻게 사용할지 알아야 합니다.

## 복합운동 (Compound Exercises)

### 정의와 특징
- **여러 관절**이 동시에 움직이는 운동
- **여러 근육군**이 함께 작용
- **기능적 움직임** 패턴과 유사

### 대표적인 복합운동
1. **스쿼트**: 하체 전체 + 코어
2. **데드리프트**: 후면 사슬 전체
3. **벤치프레스**: 가슴, 어깨, 삼두
4. **로우**: 등, 이두, 후면 어깨
5. **오버헤드프레스**: 어깨, 삼두, 코어

### 복합운동의 장점
- **시간 효율성**: 한 번에 여러 근육 단련
- **기능적 근력**: 실생활 동작 향상
- **칼로리 소모**: 많은 에너지 소모
- **호르몬 반응**: 성장호르몬, 테스토스테론 분비 촉진

## 고립운동 (Isolation Exercises)

### 정의와 특징
- **단일 관절** 움직임
- **특정 근육**에 집중
- **세밀한 조각** 가능

### 대표적인 고립운동
1. **바이셉 컬**: 이두근 집중
2. **라터럴 레이즈**: 측면 어깨 집중
3. **레그 익스텐션**: 대퇴사두근 집중
4. **레그 컬**: 햄스트링 집중
5. **케이블 플라이**: 가슴 집중

### 고립운동의 장점
- **약점 보완**: 부족한 부위 집중 발달
- **부상 재활**: 특정 근육 강화
- **세밀한 조각**: 근육 모양 다듬기
- **마무리 운동**: 복합운동 후 추가 자극

## 효과적인 조합 전략

### 초보자 (0-1년)
- **복합운동 80% + 고립운동 20%**
- 기본기 다지기에 집중
- 전신 균형 발달 우선

### 중급자 (1-3년)
- **복합운동 60% + 고립운동 40%**
- 약점 부위 보완 시작
- 전문성 있는 프로그램 도입

### 고급자 (3년+)
- **복합운동 50% + 고립운동 50%**
- 세밀한 근육 조각
- 개인 맞춤 특화 훈련

## 운동 순서의 원칙

1. **복합운동 먼저**: 에너지가 충분할 때
2. **고립운동 나중**: 마무리 및 보완
3. **큰 근육 → 작은 근육** 순서
4. **어려운 운동 → 쉬운 운동** 순서

기억하세요. 복합운동이 근력과 근량의 기초를 만들고, 고립운동이 세밀한 완성도를 높입니다.
    `,
    contentEn: `
# Compound vs. Isolation Exercises: When to Use Each

To use your gym time efficiently, you need to know when and how to use compound and isolation exercises.

## Compound Exercises

### Definition and Characteristics
- Involve **multiple joints** moving simultaneously
- Engage **multiple muscle groups** at once
- Mimic **functional movement** patterns

### Classic Compound Exercises
1. **Squat**: Entire lower body + core
2. **Deadlift**: Entire posterior chain
3. **Bench Press**: Chest, shoulders, triceps
4. **Row**: Back, biceps, rear delts
5. **Overhead Press**: Shoulders, triceps, core

### Advantages of Compound Exercises
- **Time efficiency**: Train multiple muscles at once
- **Functional strength**: Improves real-world movement
- **Calorie burn**: High energy expenditure
- **Hormonal response**: Stimulates growth hormone and testosterone release

## Isolation Exercises

### Definition and Characteristics
- **Single-joint** movement
- Target a **specific muscle**
- Allow for **detailed sculpting**

### Classic Isolation Exercises
1. **Bicep Curl**: Focuses on biceps
2. **Lateral Raise**: Focuses on lateral deltoid
3. **Leg Extension**: Focuses on quadriceps
4. **Leg Curl**: Focuses on hamstrings
5. **Cable Fly**: Focuses on chest

### Advantages of Isolation Exercises
- **Address weak points**: Develop lagging muscle groups
- **Injury rehabilitation**: Strengthen specific muscles
- **Fine-tuning**: Refine muscle shape
- **Finishing work**: Add extra stimulus after compounds

## Effective Combination Strategy

### Beginners (0–1 year)
- **80% compound + 20% isolation**
- Focus on building foundational movement patterns
- Prioritize balanced, full-body development

### Intermediate (1–3 years)
- **60% compound + 40% isolation**
- Begin addressing weak points
- Introduce more structured programming

### Advanced (3+ years)
- **50% compound + 50% isolation**
- Detailed muscle sculpting
- Highly individualized specialty training

## Principles of Exercise Order

1. **Compound exercises first**: When energy levels are highest
2. **Isolation exercises last**: For finishing and supplemental work
3. **Large muscle groups → small muscle groups**
4. **Harder exercises → easier exercises**

Remember — compound exercises build the foundation of strength and mass, while isolation exercises refine the details.
    `,
    author: 'Corevia Fitness',
    publishedDate: '2025-09-16',
  },
  {
    id: 'diet-macros-guide',
    category: '다이어트',
    categoryEn: 'Diet',
    title: '다이어트 매크로 설정 가이드',
    titleEn: 'A Guide to Setting Your Diet Macros',
    summary: '탄단지 비율을 어떻게 설정해야 효과적인 다이어트가 될까요?',
    summaryEn: 'How should you set your carbohydrate, protein, and fat ratios for an effective diet?',
    content: `
# 다이어트 매크로 설정 가이드

다이어트의 성공은 단순히 칼로리만의 문제가 아닙니다. **탄수화물, 단백질, 지방의 비율**을 어떻게 설정하느냐가 다이어트의 질을 결정합니다.

## 다이어트용 매크로 비율

### 기본 권장 비율
- **단백질**: 30-35% (체중 1kg당 2.0-2.5g)
- **지방**: 25-30% (총 칼로리의 25-30%)
- **탄수화물**: 35-45% (나머지)

### 활동량별 조정
**높은 활동량** (주 5회 이상 운동)
- 탄수화물 40-45% (운동 에너지 확보)

**보통 활동량** (주 3-4회 운동)
- 탄수화물 35-40% (기본 권장)

**낮은 활동량** (주 2회 이하)
- 탄수화물 30-35% (지방 비율 증가)

## 단백질: 근손실 방지의 핵심

### 왜 더 많이 먹어야 하나?
- **근육 보호**: 칼로리 적자 시 근손실 방지
- **포만감**: 식욕 억제 효과
- **열 효과**: 소화 시 칼로리 소모 증가

### 좋은 단백질 소스
**동물성**: 닭가슴살, 계란, 생선, 저지방 우유
**식물성**: 두부, 콩, 퀴노아, 견과류
**보충제**: 웨이 프로틴, 카제인 프로틴

## 탄수화물: 똑똑하게 선택하기

### 좋은 탄수화물
- **복합 탄수화물**: 현미, 고구마, 귀리, 퀴노아
- **섬유질 풍부**: 포만감과 소화 건강
- **낮은 GI**: 혈당 급상승 방지

### 피해야 할 탄수화물
- **단순당**: 설탕, 과자, 음료수
- **정제 탄수화물**: 흰쌀, 흰빵, 면류
- **고GI 식품**: 혈당 스파이크 유발

## 지방: 필수 영양소

### 건강한 지방
- **불포화지방**: 올리브오일, 아보카도, 견과류
- **오메가-3**: 연어, 고등어, 아마씨
- **MCT**: 코코넛오일 (에너지 전환 빠름)

### 제한해야 할 지방
- **트랜스지방**: 마가린, 가공식품
- **과도한 포화지방**: 튀김, 버터

## 실전 적용 팁

### 매크로 계산 순서
1. **총 칼로리** 설정 (기초대사량 - 300-500kcal)
2. **단백질** 먼저 계산 (체중 × 2.2g)
3. **지방** 다음 계산 (총 칼로리의 25%)
4. **탄수화물** 마지막 (나머지 칼로리)

### 실패하지 않는 다이어트
- **80% 준수**만 해도 성공
- **치팅 밀** 주 1회 허용
- **사회적 상황** 유연하게 대처
- **장기적 관점** 유지

다이어트는 마라톤입니다. 빠른 결과보다는 지속가능한 변화에 집중하세요.
    `,
    contentEn: `
# A Guide to Setting Your Diet Macros

Diet success isn't just about calories. **How you distribute carbohydrates, protein, and fat** determines the quality of your diet.

## Recommended Macro Ratios for Dieting

### Base Recommendations
- **Protein**: 30–35% (2.0–2.5 g per kg of bodyweight)
- **Fat**: 25–30% of total calories
- **Carbohydrates**: 35–45% (the remainder)

### Adjusting by Activity Level
**High activity** (5+ workouts per week)
- Carbohydrates 40–45% (secure energy for training)

**Moderate activity** (3–4 workouts per week)
- Carbohydrates 35–40% (standard recommendation)

**Low activity** (2 or fewer workouts per week)
- Carbohydrates 30–35% (increase fat proportion)

## Protein: The Key to Preventing Muscle Loss

### Why Do You Need More?
- **Muscle protection**: Prevents muscle loss during a caloric deficit
- **Satiety**: Suppresses appetite
- **Thermic effect**: Burns more calories during digestion

### Quality Protein Sources
**Animal**: Chicken breast, eggs, fish, low-fat dairy
**Plant-based**: Tofu, legumes, quinoa, nuts
**Supplements**: Whey protein, casein protein

## Carbohydrates: Choose Wisely

### Good Carbohydrates
- **Complex carbs**: Brown rice, sweet potato, oats, quinoa
- **High in fiber**: Promotes satiety and digestive health
- **Low GI**: Prevents blood sugar spikes

### Carbohydrates to Avoid
- **Simple sugars**: Refined sugar, sweets, sugary drinks
- **Refined carbs**: White rice, white bread, refined noodles
- **High-GI foods**: Cause rapid blood glucose spikes

## Fat: An Essential Nutrient

### Healthy Fats
- **Unsaturated fats**: Olive oil, avocado, nuts
- **Omega-3**: Salmon, mackerel, flaxseed
- **MCT**: Coconut oil (rapidly converted to energy)

### Fats to Limit
- **Trans fats**: Margarine, processed foods
- **Excessive saturated fat**: Fried foods, butter

## Practical Application Tips

### Macro Calculation Order
1. Set **total calories** (BMR minus 300–500 kcal)
2. Calculate **protein** first (bodyweight × 2.2 g)
3. Calculate **fat** next (25% of total calories)
4. Assign **carbohydrates** last (remaining calories)

### A Diet You Won't Fail
- **80% adherence** is enough to succeed
- Allow **one cheat meal** per week
- Handle **social situations** with flexibility
- Maintain a **long-term perspective**

Dieting is a marathon. Focus on sustainable change rather than quick results.
    `,
    author: 'Corevia Nutrition',
    publishedDate: '2025-09-16',
  },
  {
    id: 'sleep-and-recovery',
    category: '부상 방지',
    categoryEn: 'Injury Prevention',
    title: '수면과 회복: 숨겨진 근성장 비밀',
    titleEn: 'Sleep and Recovery: The Hidden Secret to Muscle Growth',
    summary: '운동만큼 중요한 수면과 회복. 성장호르몬 분비를 최대화하는 방법',
    summaryEn: 'Sleep and recovery are just as important as training. How to maximize growth hormone secretion.',
    content: `
# 수면과 회복: 숨겨진 근성장 비밀

많은 사람들이 운동과 식단에만 집중하지만, **수면과 회복**이야말로 근성장의 숨겨진 핵심입니다.

## 수면이 근성장에 미치는 영향

### 성장호르몬 분비
- **깊은 잠** 중 성장호르몬 80% 분비
- **22시-02시** 분비 피크 시간
- **7-9시간** 수면이 최적

### 근육 회복 과정
- **단백질 합성** 수면 중 활발
- **염증 감소** 및 손상 조직 복구
- **글리코겐 재합성** (에너지 저장)

### 호르몬 균형
- **테스토스테론** 분비 증가
- **코르티솔** (스트레스 호르몬) 감소
- **인슐린 감수성** 개선

## 양질의 수면을 위한 전략

### 수면 환경 최적화
- **온도**: 18-20도 서늘하게
- **빛**: 완전 차단 (암막 커튼, 아이마스크)
- **소음**: 최소화 (귀마개, 백색소음)
- **침구**: 편안한 매트리스와 베개

### 수면 루틴 구축
- **정해진 시간**에 잠자리에 들기
- **카페인** 오후 2시 이후 금지
- **전자기기** 잠들기 1시간 전 차단
- **가벼운 스트레칭** 또는 명상

### 운동 타이밍 고려
- **고강도 운동**: 잠들기 3시간 전까지
- **가벼운 운동**: 잠들기 1시간 전까지
- **저녁 늦은 운동** 시 쿨다운 충분히

## 회복을 촉진하는 방법

### 적극적 회복 (Active Recovery)
- **가벼운 산책** 20-30분
- **요가나 스트레칭** 15-20분
- **폼롤링** 근막 이완
- **가벼운 수영** 또는 자전거

### 영양적 회복 지원
- **항염 식품**: 생강, 강황, 체리, 블루베리
- **마그네슘**: 근육 이완 및 수면 질 향상
- **오메가-3**: 염증 감소 및 회복 촉진
- **충분한 수분**: 하루 2-3L

### 스트레스 관리
- **명상**: 하루 10-15분
- **호흡법**: 4-7-8 호흡법
- **자연 노출**: 햇빛 쬐기, 산책
- **사회적 연결**: 가족, 친구와 시간

## 회복 부족의 신호들

### 신체적 신호
- 지속적인 근육통
- 운동 능력 저하
- 자주 걸리는 감기
- 부상 증가

### 정신적 신호
- 운동 의욕 저하
- 집중력 감소
- 짜증, 예민함 증가
- 식욕 변화

이런 신호들이 나타나면 과감히 휴식을 취하세요. 하루 이틀 쉬는 것이 몇 주간 부상으로 고생하는 것보다 낫습니다.

## 회복 최적화 체크리스트

- [ ] 매일 7-9시간 수면
- [ ] 규칙적인 수면 패턴
- [ ] 스트레스 관리 실천
- [ ] 충분한 수분 섭취
- [ ] 항염 식품 포함 식단
- [ ] 주 1-2회 완전 휴식일
- [ ] 가벼운 활동으로 적극적 회복

회복은 게으름이 아닙니다. 더 강해지기 위한 필수 과정입니다.
    `,
    contentEn: `
# Sleep and Recovery: The Hidden Secret to Muscle Growth

Many people focus solely on training and diet, but **sleep and recovery** are truly the hidden keys to muscle growth.

## How Sleep Affects Muscle Growth

### Growth Hormone Secretion
- **80% of growth hormone** is released during deep sleep
- Peak secretion occurs between **10 PM and 2 AM**
- **7–9 hours** of sleep is optimal

### Muscle Recovery Process
- **Protein synthesis** is highly active during sleep
- **Inflammation decreases** and damaged tissue is repaired
- **Glycogen resynthesis** restores energy stores

### Hormonal Balance
- **Testosterone** secretion increases
- **Cortisol** (stress hormone) decreases
- **Insulin sensitivity** improves

## Strategies for Quality Sleep

### Optimizing Your Sleep Environment
- **Temperature**: Cool room at 18–20°C (64–68°F)
- **Light**: Complete darkness (blackout curtains, eye mask)
- **Sound**: Minimize noise (earplugs, white noise)
- **Bedding**: Comfortable mattress and pillow

### Building a Sleep Routine
- Go to bed at a **fixed time** each night
- Avoid **caffeine** after 2 PM
- Avoid **screens** 1 hour before bed
- Light **stretching or meditation** before sleep

### Considering Exercise Timing
- **High-intensity training**: Finish at least 3 hours before bed
- **Light exercise**: Finish at least 1 hour before bed
- If training late, do a **thorough cool-down**

## Methods to Promote Recovery

### Active Recovery
- **Light walking** for 20–30 minutes
- **Yoga or stretching** for 15–20 minutes
- **Foam rolling** for myofascial release
- **Light swimming** or cycling

### Nutritional Recovery Support
- **Anti-inflammatory foods**: Ginger, turmeric, cherries, blueberries
- **Magnesium**: Promotes muscle relaxation and better sleep quality
- **Omega-3**: Reduces inflammation and accelerates recovery
- **Adequate hydration**: 2–3 L per day

### Stress Management
- **Meditation**: 10–15 minutes daily
- **Breathing techniques**: 4-7-8 breathing method
- **Nature exposure**: Sunlight and outdoor walks
- **Social connection**: Time with family and friends

## Warning Signs of Insufficient Recovery

### Physical Signals
- Persistent muscle soreness
- Declining exercise performance
- Frequent illnesses
- Increased injury occurrence

### Mental Signals
- Loss of motivation to train
- Decreased concentration
- Increased irritability and sensitivity
- Changes in appetite

If these signs appear, take a bold rest. Taking a day or two off is far better than being sidelined for weeks with an injury.

## Recovery Optimization Checklist

- [ ] 7–9 hours of sleep every night
- [ ] Consistent sleep schedule
- [ ] Active stress management
- [ ] Adequate daily hydration
- [ ] Anti-inflammatory foods in your diet
- [ ] 1–2 complete rest days per week
- [ ] Light activity for active recovery

Recovery is not laziness. It is an essential step toward becoming stronger.
    `,
    author: 'Corevia Fitness',
    publishedDate: '2025-09-16',
  },
  {
    id: 'plateau-breaking',
    category: '운동',
    categoryEn: 'Exercise',
    title: '정체기 극복 전략',
    titleEn: 'Strategies for Breaking Through Plateaus',
    summary: '운동 효과가 멈췄을 때, 정체기를 돌파하는 과학적 방법들',
    summaryEn: 'Scientific methods for breaking through a plateau when your training progress has stalled.',
    content: `
# 정체기 극복 전략

운동을 꾸준히 하다 보면 누구나 정체기를 경험합니다. 더 이상 무게가 늘지 않고, 근육도 커지지 않는 것 같은 답답한 시기. 하지만 정체기는 성장의 신호일 수도 있습니다.

## 정체기가 생기는 이유

### 신경계 적응
- **운동 패턴**에 신경계가 완전 적응
- **효율성 증가**로 자극 감소
- **새로운 자극** 필요

### 근육 적응
- **같은 반복 구간**에 근육이 적응
- **같은 운동**의 반복으로 자극 감소
- **변화 필요** 신호

### 회복 부족
- **과훈련** 증후군
- **수면 부족**
- **영양 부족**
- **스트레스 과다**

## 정체기 극복 방법

### 1. 운동 변수 조작

**강도 변화**
- 고중량 저반복 (3-5회) 2주
- 중중량 중반복 (8-12회) 2주
- 저중량 고반복 (15-20회) 2주

**볼륨 변화**
- 세트 수 증가/감소
- 운동 개수 조정
- 훈련 빈도 변경

**운동 종류 변화**
- 바벨 → 덤벨 전환
- 머신 → 프리웨이트 전환
- 새로운 운동 도입

### 2. 디로드 주간 (Deload Week)

**목적**: 누적 피로 해소 및 신경계 회복

**방법**:
- 평소 중량의 **60-70%**로 훈련
- 세트 수 **30% 감소**
- **새로운 운동** 가볍게 시도
- **스트레칭과 이완**에 집중

### 3. 영양 재점검

**칼로리 재계산**
- 체중 변화에 따른 기초대사량 조정
- 활동량 변화 반영
- 적자/잉여 재설정

**매크로 조정**
- 단백질 섭취량 점검 (체중 × 2.0g 이상)
- 탄수화물 타이밍 최적화
- 미량 영양소 보충

### 4. 회복 최적화

**수면 질 개선**
- 7-9시간 충분한 수면
- 수면 환경 최적화
- 규칙적인 수면 패턴

**스트레스 관리**
- 명상, 요가 등 이완 활동
- 취미 활동으로 정신적 휴식
- 사회적 지지 체계 활용

## 정체기별 대응 전략

### 근력 정체기
- **신경계 적응**: 새로운 운동 패턴 도입
- **1RM 테스트**: 현재 능력 재평가
- **보조 운동 강화**: 약점 근육 집중 훈련

### 근비대 정체기
- **볼륨 증가**: 세트 수, 운동 수 증가
- **반복 구간 변경**: 8-12회 → 12-15회
- **고립 운동 추가**: 특정 부위 집중

### 체중 감량 정체기
- **칼로리 재계산**: 줄어든 체중 반영
- **운동 강도 증가**: 유산소 추가 또는 강화
- **리피드 데이**: 주 1회 탄수화물 증가

## 정체기 극복 체크리스트

- [ ] 4주 이상 진전이 없는가?
- [ ] 운동 강도/볼륨을 기록하고 있는가?
- [ ] 수면의 질은 좋은가?
- [ ] 스트레스 수준은 어떤가?
- [ ] 영양 섭취가 목표에 맞는가?
- [ ] 새로운 자극을 주고 있는가?

## 마음가짐

정체기는 **실패가 아닌 성장의 과정**입니다. 몸이 더 강해지기 위해 잠시 멈춰서 준비하는 시간이라고 생각하세요. 

조급해하지 말고, 체계적으로 하나씩 점검하며 극복해나가면 반드시 돌파할 수 있습니다.
    `,
    contentEn: `
# Strategies for Breaking Through Plateaus

Anyone who trains consistently will eventually hit a plateau. Weights stop going up, muscles seem to stop growing — it's a frustrating period. But a plateau can also be a signal of growth.

## Why Plateaus Happen

### Neural Adaptation
- Your nervous system has **fully adapted** to the movement pattern
- **Increased efficiency** means less stimulus
- Your body needs **new stimulation**

### Muscular Adaptation
- Muscles have adapted to the **same rep range**
- Repetition of the **same exercises** reduces the training stimulus
- A signal that **change is needed**

### Insufficient Recovery
- **Overtraining** syndrome
- **Sleep deprivation**
- **Inadequate nutrition**
- **Excessive stress**

## Methods to Break Through a Plateau

### 1. Manipulate Training Variables

**Intensity Change**
- Heavy/low-rep (3–5 reps) for 2 weeks
- Moderate/moderate-rep (8–12 reps) for 2 weeks
- Light/high-rep (15–20 reps) for 2 weeks

**Volume Change**
- Increase or decrease number of sets
- Adjust number of exercises
- Modify training frequency

**Exercise Variation**
- Switch from barbell to dumbbell
- Switch from machines to free weights
- Introduce new exercises

### 2. Deload Week

**Purpose**: Clear accumulated fatigue and allow nervous system recovery

**Method**:
- Train at **60–70%** of your normal weight
- Reduce sets by **30%**
- Try **new exercises** at a light intensity
- Focus on **stretching and relaxation**

### 3. Reassess Nutrition

**Recalculate Calories**
- Adjust BMR based on body weight changes
- Account for changes in activity level
- Reset your surplus or deficit

**Adjust Macros**
- Verify protein intake (at least bodyweight × 2.0 g)
- Optimize carbohydrate timing
- Supplement micronutrients

### 4. Optimize Recovery

**Improve Sleep Quality**
- 7–9 hours of adequate sleep
- Optimize your sleep environment
- Maintain a consistent sleep schedule

**Manage Stress**
- Relaxation activities such as meditation and yoga
- Mental rest through hobbies
- Utilize your social support network

## Plateau-Specific Strategies

### Strength Plateau
- **Neural adaptation**: Introduce new movement patterns
- **1RM test**: Re-evaluate your current capacity
- **Strengthen accessory muscles**: Focus on weak links

### Hypertrophy Plateau
- **Increase volume**: More sets and exercises
- **Change rep range**: 8–12 → 12–15 reps
- **Add isolation work**: Target specific muscles

### Weight Loss Plateau
- **Recalculate calories**: Reflect your reduced bodyweight
- **Increase exercise intensity**: Add or intensify cardio
- **Refeed day**: One high-carb day per week

## Plateau Breakthrough Checklist

- [ ] Has there been no progress for 4+ weeks?
- [ ] Are you logging your training intensity and volume?
- [ ] Is your sleep quality good?
- [ ] What is your stress level?
- [ ] Is your nutrition aligned with your goals?
- [ ] Are you providing new stimulus?

## Mindset

A plateau is **not failure — it's part of the growth process**. Think of it as your body pausing to prepare before getting stronger.

Don't rush. Check each variable systematically and you will always find a way through.
    `,
    author: 'Corevia Fitness',
    publishedDate: '2025-09-16',
  },
  {
    id: 'intermittent-fasting',
    category: '다이어트',
    categoryEn: 'Diet',
    title: '간헐적 단식: 다이어트 도구인가 라이프스타일인가?',
    titleEn: 'Intermittent Fasting: Diet Tool or Lifestyle?',
    summary: '16:8, 5:2 등 간헐적 단식의 실제 효과와 올바른 실천 방법',
    summaryEn: 'The real effects of intermittent fasting protocols like 16:8 and 5:2, and how to do them correctly.',
    content: `
# 간헐적 단식: 다이어트 도구인가 라이프스타일인가?

간헐적 단식(Intermittent Fasting, IF)이 다이어트계의 핫이슈가 된 지 오래입니다. 과연 실제 효과가 있을까요?

## 간헐적 단식의 종류

### 16:8 방법 (가장 인기)
- **16시간 단식** + **8시간 식사**
- 예: 오후 8시 ~ 다음날 오후 12시 단식
- **초보자 친화적**이고 지속하기 쉬움

### 5:2 방법
- **주 5일 정상 식사** + **주 2일 칼로리 제한** (500-600kcal)
- 단식일은 연속되지 않게 배치
- **사회생활 유지** 가능

### 24시간 단식
- **주 1-2회** 24시간 완전 단식
- **고급자용** 방법
- 의료진 상담 권장

### OMAD (One Meal A Day)
- **하루 한 끼**만 섭취
- **극단적 방법**으로 주의 필요
- 영양 불균형 위험

## 간헐적 단식의 실제 효과

### 과학적으로 입증된 효과
- **칼로리 섭취 감소**: 식사 시간 제한으로 자연스러운 칼로리 제한
- **인슐린 감수성 개선**: 혈당 조절 능력 향상
- **세포 재생**: 오토파지(autophagy) 활성화
- **염증 감소**: 만성 염증 지표 개선

### 체중 감량 효과
- **직접 효과**: 칼로리 제한을 통한 체중 감소
- **간접 효과**: 식습관 개선, 야식 방지
- **개인차 존재**: 모든 사람에게 효과적이지 않음

## 간헐적 단식 vs 일반 칼로리 제한

### 연구 결과
- **체중 감량**: 큰 차이 없음 (칼로리가 같다면)
- **근손실**: 단백질 충분 시 차이 없음
- **지속성**: 개인 선호도에 따라 다름
- **편의성**: IF가 더 간단할 수 있음

### IF의 장점
- **단순함**: 언제 먹을지만 정하면 됨
- **사회적 편의**: 저녁 식사 중심 가능
- **식욕 조절**: 그렐린(배고픔 호르몬) 패턴 조절

### IF의 단점
- **사회적 제약**: 아침/점심 약속 어려움
- **운동 타이밍**: 공복 운동 시 성능 저하 가능
- **영양 밀도**: 짧은 시간에 충분한 영양소 섭취 어려움

## 성공적인 간헐적 단식 가이드

### 시작 단계 (1-2주)
- **12:12**부터 시작 (12시간 단식)
- 몸의 적응 시간 확보
- 수분 충분히 섭취

### 적응 단계 (3-4주)
- **14:10** 또는 **16:8**로 확장
- 단식 시간 중 **블랙커피, 차** 허용
- **전해질 보충** (나트륨, 칼륨, 마그네슘)

### 유지 단계 (1개월 이후)
- 개인에게 맞는 패턴 정착
- **유연성 확보**: 사회적 상황에 맞춰 조정
- **장기적 지속가능성** 평가

## 주의사항 및 금기 대상

### 피해야 할 사람들
- **당뇨병** 환자 (의료진 상담 필수)
- **섭식장애** 병력이 있는 경우
- **임신, 수유** 중인 여성
- **성장기** 청소년
- **저체중**인 경우

### 부작용 대처법
- **두통**: 수분과 전해질 보충
- **어지러움**: 점진적 적응, 무리하지 않기
- **변비**: 섬유질과 수분 증가
- **집중력 저하**: 적응 기간 후 개선

## 결론: 도구일 뿐, 만능이 아니다

간헐적 단식은 **효과적인 다이어트 도구** 중 하나입니다. 하지만 마법은 아닙니다.

**성공의 핵심**은 여전히:
1. **칼로리 적자** 유지
2. **충분한 단백질** 섭취  
3. **꾸준한 운동**
4. **양질의 수면**

간헐적 단식이 이 4가지를 더 쉽게 실천할 수 있게 도와준다면 시도해볼 가치가 있습니다. 하지만 스트레스가 된다면 굳이 고집할 필요는 없습니다.

자신에게 맞는 방법을 찾는 것이 가장 중요합니다.
    `,
    contentEn: `
# Intermittent Fasting: Diet Tool or Lifestyle?

Intermittent Fasting (IF) has been a hot topic in the diet world for years. Does it actually work?

## Types of Intermittent Fasting

### 16:8 Method (Most Popular)
- **16 hours fasting** + **8 hours eating window**
- Example: Fast from 8 PM to 12 PM the next day
- **Beginner-friendly** and easy to maintain

### 5:2 Method
- **5 days of normal eating** + **2 days of calorie restriction** (500–600 kcal)
- Fast days are non-consecutive
- Allows you to **maintain a normal social life**

### 24-Hour Fast
- **Full 24-hour fast** 1–2 times per week
- An **advanced method**
- Medical consultation recommended

### OMAD (One Meal A Day)
- Only **one meal per day**
- An **extreme approach** — use with caution
- Risk of nutritional imbalance

## The Real Effects of Intermittent Fasting

### Scientifically Supported Effects
- **Reduced calorie intake**: Time-restricted eating naturally limits total calories
- **Improved insulin sensitivity**: Better blood glucose regulation
- **Cellular renewal**: Activation of autophagy
- **Reduced inflammation**: Improvement in chronic inflammation markers

### Weight Loss Effects
- **Direct effect**: Weight loss through calorie restriction
- **Indirect effect**: Improved eating habits, prevention of late-night snacking
- **Individual variation**: Not effective for everyone

## Intermittent Fasting vs. Standard Calorie Restriction

### Research Findings
- **Weight loss**: No significant difference (if calories are equal)
- **Muscle loss**: No significant difference when protein is adequate
- **Adherence**: Depends on personal preference
- **Convenience**: IF can be simpler to follow

### Advantages of IF
- **Simplicity**: Just decide when to eat
- **Social convenience**: Can center eating around dinner
- **Appetite regulation**: Manages ghrelin (hunger hormone) patterns

### Disadvantages of IF
- **Social limitations**: Difficult to accommodate morning/lunch plans
- **Exercise timing**: Fasted training may impair performance
- **Nutrient density**: Challenging to get all nutrients in a short window

## Successful Intermittent Fasting Guide

### Starting Phase (1–2 weeks)
- Begin with **12:12** (12-hour fast)
- Allow your body time to adapt
- Stay well hydrated

### Adaptation Phase (3–4 weeks)
- Extend to **14:10** or **16:8**
- **Black coffee and tea** are permitted during the fast
- **Replenish electrolytes** (sodium, potassium, magnesium)

### Maintenance Phase (1 month+)
- Establish the pattern that suits you best
- Build in **flexibility** for social situations
- Evaluate **long-term sustainability**

## Precautions and Contraindications

### Who Should Avoid It
- People with **diabetes** (mandatory medical consultation)
- People with a history of **eating disorders**
- **Pregnant or breastfeeding** women
- **Adolescents** in growth stages
- Anyone who is **underweight**

### Managing Side Effects
- **Headaches**: Increase fluids and electrolytes
- **Dizziness**: Adapt gradually, don't push too hard
- **Constipation**: Increase fiber and fluid intake
- **Brain fog**: Typically improves after the adaptation period

## Conclusion: A Tool, Not a Magic Solution

Intermittent fasting is one **effective dieting tool** among many. But it is not magic.

**The real keys to success** remain:
1. Maintaining a **caloric deficit**
2. Eating **sufficient protein**
3. **Consistent exercise**
4. **Quality sleep**

If intermittent fasting makes these four things easier to achieve, it's worth trying. But if it causes stress, there's no reason to force it.

Finding what works for you is what matters most.
    `,
    author: 'Corevia Nutrition',
    publishedDate: '2025-09-16',
  },
  {
    id: 'motivation-psychology',
    category: '마인드셋',
    categoryEn: 'Mindset',
    title: '운동 동기부여의 심리학',
    titleEn: 'The Psychology of Exercise Motivation',
    summary: '의지력에만 의존하지 마세요. 과학적인 동기부여 유지 전략',
    summaryEn: "Don't rely on willpower alone. Science-backed strategies for sustaining your motivation to train.",
    content: `
# 운동 동기부여의 심리학

"내일부터 다시 시작해야지..." 몇 번이나 이런 말을 했나요? 의지력만으로는 한계가 있습니다. 과학적인 접근이 필요합니다.

## 동기부여가 실패하는 이유

### 의지력의 한계
- **의지력은 유한한 자원**: 하루 종일 쓰면 고갈됨
- **스트레스 상황**에서 가장 먼저 무너짐
- **감정 상태**에 크게 좌우됨

### 비현실적 기대
- **빠른 결과** 기대 → 실망 → 포기
- **완벽주의**: 하루 빠뜨리면 전체 포기
- **타인과 비교**: SNS 속 완벽한 몸매와 비교

### 환경적 요인
- **운동 접근성** 부족
- **사회적 지지** 부족
- **시간 관리** 실패

## 지속가능한 동기부여 전략

### 1. 시스템 구축 (습관화)

**환경 설계**
- **운동복 미리 준비**: 의사결정 피로 감소
- **헬스장 가까운 곳**: 접근성 최대화
- **홈트 공간 확보**: 날씨/시간 제약 해결

**루틴 자동화**
- **같은 시간** 운동 (뇌가 자동으로 인식)
- **같은 요일** 같은 운동
- **운동 전 의식**: 음악, 커피 등

### 2. 목표 설정의 과학

**SMART 목표**
- **구체적**: "살 빼기" → "3개월 내 5kg 감량"
- **측정 가능**: 체중, 둘레, 운동 기록
- **달성 가능**: 현실적 범위 내
- **관련성**: 개인 가치와 연결
- **시한성**: 명확한 데드라인

**과정 목표 vs 결과 목표**
- **과정 목표**: "주 3회 운동하기" (통제 가능)
- **결과 목표**: "5kg 빼기" (통제 어려움)
- **과정 목표**에 더 집중하기

### 3. 심리적 전략

**작은 성공 축적**
- **2분 운동**부터 시작
- **연속 달성일** 기록
- **마일스톤 보상** 시스템

**정체성 변화**
- "운동하는 사람"이라는 정체성 형성
- "운동을 해야 하는 사람" → "운동하는 사람"
- 행동이 정체성을 강화

**사회적 지지 활용**
- **운동 파트너** 만들기
- **SNS 인증**: 긍정적 피드백 받기
- **커뮤니티 참여**: 같은 목표를 가진 사람들과 교류

## 슬럼프 극복법

### 동기 저하 시 대처
1. **원점 돌아가기**: 왜 시작했는지 기억
2. **작게 시작**: 10분이라도 움직이기
3. **환경 바꾸기**: 새로운 운동, 새로운 장소
4. **전문가 도움**: PT, 온라인 코칭 활용

### 부상이나 아플 때
- **완전 휴식**도 과정의 일부
- **대체 활동** 찾기 (스트레칭, 산책)
- **복귀 계획** 미리 세우기
- **자책하지 않기**

### 결과가 안 나올 때
- **과정에 집중**: 결과는 나중에 따라옴
- **측정 방법 다양화**: 체중 외 다른 지표들
- **전문가 조언**: 프로그램 점검
- **장기적 관점**: 6개월-1년 단위로 생각

## 실전 적용 팁

### 동기부여 도구들
- **운동 일지**: 성취감과 진전 확인
- **사진 기록**: 시각적 변화 추적
- **음악 플레이리스트**: 감정 끌어올리기
- **명언 모음**: 힘들 때 읽기

### 환경 최적화
- **운동 장비 보이는 곳에**: 시각적 리마인더
- **건강한 음식 접근성**: 냉장고 앞쪽 배치
- **방해 요소 제거**: 침대에서 폰 멀리 두기

기억하세요. 동기부여는 시작을 도와주지만, **습관이 목표를 달성**시켜줍니다. 

완벽한 동기가 생길 때까지 기다리지 말고, 작은 행동부터 시작하세요.
    `,
    contentEn: `
# The Psychology of Exercise Motivation

"I'll start again tomorrow..." How many times have you said that? Willpower alone has its limits. A scientific approach is what you need.

## Why Motivation Fails

### The Limits of Willpower
- **Willpower is a finite resource**: It depletes throughout the day
- It's the **first thing to collapse** under stress
- Heavily influenced by **emotional state**

### Unrealistic Expectations
- Expecting **quick results** → disappointment → quitting
- **Perfectionism**: Missing one day means abandoning everything
- **Comparing yourself to others**: Measuring against idealized bodies on social media

### Environmental Factors
- **Lack of accessibility** to exercise
- **Insufficient social support**
- **Poor time management**

## Sustainable Motivation Strategies

### 1. Build Systems (Create Habits)

**Environmental Design**
- **Lay out your workout clothes the night before**: Reduce decision fatigue
- **Gym close to home**: Maximize accessibility
- **Secure a home workout space**: Eliminate weather and time barriers

**Automate Your Routine**
- Exercise at the **same time every day** (your brain will recognize it as automatic)
- **Same days, same workout**
- **Pre-workout ritual**: Music, coffee, etc.

### 2. The Science of Goal Setting

**SMART Goals**
- **Specific**: "Lose weight" → "Lose 5 kg in 3 months"
- **Measurable**: Body weight, circumference, workout logs
- **Achievable**: Within realistic reach
- **Relevant**: Connected to your personal values
- **Time-bound**: A clear deadline

**Process Goals vs. Outcome Goals**
- **Process goal**: "Work out 3 times a week" (within your control)
- **Outcome goal**: "Lose 5 kg" (harder to control directly)
- Focus **more on process goals**

### 3. Psychological Strategies

**Stack Small Wins**
- Start with **just 2 minutes of exercise**
- Track your **streak of consecutive days**
- Build a **milestone reward system**

**Identity Shift**
- Form the identity of "someone who exercises"
- Shift from "I have to work out" → "I am a person who works out"
- Behavior reinforces identity

**Leverage Social Support**
- Find a **workout partner**
- **Post on social media**: Receive positive feedback
- **Join a community**: Connect with people sharing the same goals

## Overcoming Slumps

### When Motivation Drops
1. **Return to basics**: Remember why you started
2. **Start small**: Even 10 minutes of movement counts
3. **Change your environment**: New exercise, new location
4. **Seek professional help**: Personal trainer, online coaching

### When Injured or Sick
- **Complete rest** is also part of the process
- **Find alternative activities** (stretching, walking)
- **Plan your return** in advance
- **Don't blame yourself**

### When Results Aren't Coming
- **Focus on the process**: Results will follow
- **Diversify measurements**: Look beyond the scale
- **Consult a professional**: Review your program
- **Long-term perspective**: Think in 6-month to 1-year increments

## Practical Tips

### Motivation Tools
- **Training journal**: Build a sense of achievement and track progress
- **Photo log**: Track visual changes over time
- **Music playlist**: Elevate your emotional state
- **Collection of quotes**: Read them when things get hard

### Environmental Optimization
- **Keep workout gear visible**: Visual reminder
- **Keep healthy food accessible**: Front of the fridge
- **Remove distractions**: Keep your phone away from your bed

Remember — motivation gets you started, but **habits get you to the finish line**.

Don't wait for perfect motivation. Start with a small action right now.
    `,
    author: 'Corevia Mindset',
    publishedDate: '2025-09-16',
  },
  {
    id: 'injury-prevention',
    category: '부상 방지',
    categoryEn: 'Injury Prevention',
    title: '부상 예방: 평생 운동하기 위한 필수 가이드',
    titleEn: 'Injury Prevention: An Essential Guide to Training for Life',
    summary: '부상은 예방이 최고의 치료. 안전하고 지속가능한 운동을 위한 핵심 원칙들',
    summaryEn: 'Prevention is the best cure. Core principles for safe and sustainable training throughout your life.',
    content: `
# 부상 예방: 평생 운동하기 위한 필수 가이드

운동으로 인한 부상은 단순히 몇 주 쉬는 것으로 끝나지 않습니다. 자신감 상실, 운동 중단, 장기적 후유증까지 이어질 수 있습니다.

## 가장 흔한 운동 부상들

### 1. 허리 부상
**원인**: 잘못된 데드리프트/스쿼트 자세, 코어 약화
**예방**: 코어 강화, 점진적 중량 증가, 완벽한 폼 우선

### 2. 어깨 충돌증후군
**원인**: 과도한 오버헤드 운동, 라운드 숄더
**예방**: 후면 어깨 강화, 가슴 스트레칭, 운동 순서 조정

### 3. 무릎 부상
**원인**: 잘못된 스쿼트 자세, 급작스러운 방향 전환
**예방**: 고관절 가동성 확보, 올바른 스쿼트 패턴

### 4. 손목/팔꿈치 부상
**원인**: 과도한 반복, 잘못된 그립
**예방**: 손목 스트레칭, 그립 다양화, 적절한 휴식

## 부상 예방의 핵심 원칙

### 1. 워밍업의 중요성

**동적 워밍업 (5-10분)**
- 관절 가동범위 확보
- 심박수 점진적 증가
- 신경계 활성화

**운동별 특화 워밍업**
- **스쿼트 전**: 고관절 원형 돌리기, 레그 스윙
- **벤치프레스 전**: 어깨 돌리기, 밴드 풀 어파트
- **데드리프트 전**: 고관절 힌지 연습, 햄스트링 스트레칭

### 2. 점진적 부하 증가

**10% 룰**
- 주간 훈련량을 **10% 이상 급증시키지 않기**
- 중량, 볼륨, 빈도 모두 적용
- 몸의 적응 시간 확보

**신호 감지**
- **좋은 피로**: 운동 후 2-3일 내 회복
- **나쁜 피로**: 지속적 통증, 성능 저하
- **조기 경고**: 관절 불편함, 수면 장애

### 3. 폼의 절대성

**중량보다 자세**
- 완벽한 자세로 가벼운 중량 > 나쁜 자세로 무거운 중량
- **거울 활용**: 자세 실시간 확인
- **영상 촬영**: 객관적 자세 분석

**ROM (Range of Motion) 확보**
- **전체 가동범위** 활용
- **스트레칭**: 운동 전후 필수
- **가동성 운동**: 요가, 필라테스 병행

### 4. 균형 잡힌 훈련

**근육 불균형 방지**
- **밀기:당기기 = 1:1** 비율 유지
- **전면:후면** 균형 (가슴:등, 어깨 전면:후면)
- **좌우 대칭** 확인

**약한 고리 강화**
- **코어**: 모든 운동의 기초
- **둔근**: 하체 운동의 핵심
- **후면 어깨**: 현대인의 약점

## 부상 발생 시 대처법

### 즉시 대응 (RICE 원칙)
- **Rest**: 즉시 운동 중단
- **Ice**: 15-20분 냉찜질
- **Compression**: 압박 붕대
- **Elevation**: 높이 올리기

### 복귀 전략
1. **완전 회복** 확인 (통증 0/10)
2. **가벼운 중량**부터 재시작 (기존의 50%)
3. **점진적 증가** (주 10% 이내)
4. **전문가 상담** (지속적 불편 시)

## 평생 운동을 위한 마인드셋

### 장기적 관점
- **80세까지 운동**할 수 있는 몸 만들기
- **지금의 무게**보다 **미래의 건강**
- **부상 없는 운동**이 최고의 운동

### 현실적 접근
- **완벽한 운동** 월 1회 < **적당한 운동** 주 3회
- **ego lifting** 버리기
- **꾸준함**이 강도보다 중요

부상은 예방이 최고의 치료입니다. 조금 느려도, 조금 가벼워도, 안전하게 꾸준히 하는 것이 결국 가장 빠른 길입니다.
    `,
    contentEn: `
# Injury Prevention: An Essential Guide to Training for Life

A training injury doesn't just mean a few weeks of rest. It can lead to a loss of confidence, training interruption, and long-term complications.

## The Most Common Training Injuries

### 1. Lower Back Injury
**Cause**: Improper deadlift or squat form, weakened core
**Prevention**: Core strengthening, gradual weight increases, prioritizing perfect form

### 2. Shoulder Impingement Syndrome
**Cause**: Excessive overhead pressing, rounded shoulders
**Prevention**: Strengthen the rear delts, chest stretching, adjust exercise order

### 3. Knee Injury
**Cause**: Improper squat mechanics, sudden changes of direction
**Prevention**: Improve hip mobility, establish correct squat movement pattern

### 4. Wrist/Elbow Injury
**Cause**: Excessive repetition, improper grip
**Prevention**: Wrist stretching, vary your grip, take adequate rest

## Core Principles of Injury Prevention

### 1. The Importance of Warming Up

**Dynamic Warm-Up (5–10 minutes)**
- Establish full range of motion in the joints
- Gradually increase heart rate
- Activate the nervous system

**Exercise-Specific Warm-Up**
- **Before squats**: Hip circles, leg swings
- **Before bench press**: Shoulder circles, band pull-aparts
- **Before deadlifts**: Hip hinge practice, hamstring stretching

### 2. Progressive Load Increases

**The 10% Rule**
- Never increase weekly training volume by **more than 10%**
- Applies to weight, volume, and frequency
- Allow your body time to adapt

**Detecting Warning Signals**
- **Good fatigue**: Recovered within 2–3 days post-workout
- **Bad fatigue**: Persistent pain, declining performance
- **Early warnings**: Joint discomfort, sleep disturbances

### 3. The Supremacy of Form

**Form Over Weight**
- Perfect form at a light weight > sloppy form at a heavy weight
- **Use a mirror**: Check your form in real time
- **Record yourself**: Objective form analysis

**Establishing Range of Motion (ROM)**
- Utilize the **full range of motion**
- **Stretching**: Essential before and after training
- **Mobility work**: Supplement with yoga or Pilates

### 4. Balanced Training

**Preventing Muscle Imbalances**
- Maintain a **push-to-pull ratio of 1:1**
- Balance **anterior and posterior** (chest-to-back, front-to-rear delt)
- Confirm **left-right symmetry**

**Strengthen Your Weak Links**
- **Core**: The foundation of all movement
- **Glutes**: The cornerstone of lower body training
- **Rear delts**: A common weakness in modern lifters

## What to Do When Injury Occurs

### Immediate Response (RICE Principle)
- **Rest**: Stop exercising immediately
- **Ice**: Apply cold pack for 15–20 minutes
- **Compression**: Apply compression bandage
- **Elevation**: Elevate the injured area

### Return-to-Training Strategy
1. Confirm **full recovery** (pain level 0/10)
2. Restart with **light weight** (50% of previous)
3. **Gradually increase** (within 10% per week)
4. **Consult a professional** if discomfort persists

## The Mindset for Training for Life

### Long-Term Perspective
- Build a body that can train **until age 80**
- **Future health** matters more than today's numbers
- **Injury-free training** is the best training

### A Realistic Approach
- **One perfect workout per month** < **decent workouts three times per week**
- Drop **ego lifting**
- **Consistency** matters more than intensity

Prevention is the best cure. Moving a little slower or lifting a little lighter — done safely and consistently — is ultimately the fastest path forward.
    `,
    author: 'Corevia Safety',
    publishedDate: '2025-09-16',
  },
  {
    id: 'protein-timing',
    category: '영양',
    categoryEn: 'Nutrition',
    title: '단백질, 언제 먹어야 가장 효과적일까?',
    titleEn: 'When Is the Best Time to Eat Protein?',
    summary: '운동 직후? 자기 전? 단백질 섭취의 골든 타임에 대한 진실을 알려드립니다.',
    summaryEn: 'Right after training? Before bed? The truth about protein timing and the so-called anabolic window.',
    content: `
# 단백질, 언제 먹어야 가장 효과적일까?

많은 사람들이 운동 후 30분 안에 단백질을 섭취해야 하는 '기회의 창'이 열린다고 믿습니다. 과연 사실일까요?

## 연구 결과가 말하는 진실

결론부터 말하자면, '기회의 창'은 생각보다 훨씬 깁니다. 최근 연구들은 운동 후 몇 시간 이내에만 충분한 단백질을 섭취해주면 근합성에 큰 차이가 없다고 말합니다.

하지만 더 중요한 것은 **하루 총 단백질 섭취량**과 **꾸준함**입니다.

## 효과적인 단백질 섭취 전략

1.  **총 섭취량을 맞춰라:** 자신의 체중 1kg당 1.6g ~ 2.2g의 단백질을 하루에 섭취하는 것을 목표로 하세요.
2.  **균등하게 분배하라:** 한 끼에 몰아먹기보다는, 하루 3~5끼에 걸쳐 단백질을 20~40g씩 꾸준히 공급해주는 것이 근합성 효율을 높입니다.
3.  **운동 전후를 활용하라:** '기회의 창'이 절대적인 것은 아니지만, 운동 전후에 단백질을 포함한 식사를 하는 것은 근육 회복과 성장에 분명 도움이 됩니다.

## 시간대별 단백질 전략

### 아침 (기상 후)
- **카제인 또는 그리스 요거트**: 밤새 분해된 근육 보충
- **계란**: 완전 단백질로 하루 시작

### 운동 전 (1-2시간 전)
- **소화 빠른 단백질**: 웨이 프로틴, 바나나+땅콩버터
- **적당한 탄수화물**: 운동 에너지 확보

### 운동 후 (2시간 이내)
- **빠른 흡수**: 웨이 프로틴 + 단순 탄수화물
- **근합성 최적화**: 류신 함량 높은 단백질

### 잠들기 전
- **카제인 프로틴**: 밤새 지속적 아미노산 공급
- **그리스 요거트**: 천연 카제인 공급원

기억하세요. 타이밍보다 **총량**이 더 중요합니다.
    `,
    contentEn: `
# When Is the Best Time to Eat Protein?

Many people believe there is an "anabolic window" — a critical 30-minute period right after training when you must consume protein. Is this actually true?

## What Research Actually Says

The short answer: the anabolic window is much wider than you think. Recent studies show that as long as you consume sufficient protein within a few hours of training, there is no significant difference in muscle protein synthesis.

What matters far more is your **total daily protein intake** and **consistency**.

## Effective Protein Intake Strategy

1.  **Hit your total intake:** Aim for 1.6–2.2 g of protein per kg of bodyweight per day.
2.  **Distribute it evenly:** Rather than consuming it all in one sitting, spreading 20–40 g of protein across 3–5 meals throughout the day optimizes muscle protein synthesis efficiency.
3.  **Utilize the pre- and post-workout window:** While not absolute, having a protein-containing meal before and after training clearly supports muscle recovery and growth.

## Protein Strategy by Time of Day

### Morning (Upon Waking)
- **Casein or Greek yogurt**: Replenish muscle protein broken down overnight
- **Eggs**: Start the day with a complete protein source

### Pre-Workout (1–2 Hours Before)
- **Fast-digesting protein**: Whey protein, banana with peanut butter
- **Moderate carbohydrates**: Secure energy for your training session

### Post-Workout (Within 2 Hours)
- **Fast absorption**: Whey protein + simple carbohydrates
- **Optimize muscle protein synthesis**: Protein high in leucine

### Before Bed
- **Casein protein**: Provides a sustained supply of amino acids throughout the night
- **Greek yogurt**: A natural source of casein

Remember — **total daily intake** matters more than timing.
    `,
    author: 'Corevia Nutrition',
    publishedDate: '2025-09-15',
  },
  {
    id: 'cardio-vs-weights',
    category: '운동',
    categoryEn: 'Exercise',
    title: '유산소 vs 근력운동: 다이어트에 더 효과적인 것은?',
    titleEn: 'Cardio vs. Weight Training: Which Is Better for Fat Loss?',
    summary: '체지방 감량을 위해서는 유산소와 근력운동 중 무엇이 더 중요할까요?',
    summaryEn: 'Between cardio and strength training, which is more important for losing body fat?',
    content: `
# 유산소 vs 근력운동: 다이어트에 더 효과적인 것은?

다이어트를 시작하면 가장 먼저 고민되는 것이 "유산소를 할까, 근력운동을 할까?"입니다. 정답은 **둘 다**이지만, 우선순위는 있습니다.

## 근력운동이 다이어트에 더 중요한 이유

### 1. 기초대사량 증가
- **근육 1kg 증가** = 일일 기초대사량 13-15kcal 증가
- **24시간 지속**: 잠들어도 칼로리 소모
- **장기적 효과**: 몇 년간 지속되는 투자

### 2. 애프터번 효과 (EPOC)
- **운동 후 12-24시간** 동안 대사량 증가
- **고강도 근력운동**이 유산소보다 효과 큰
- **추가 칼로리 소모**: 50-200kcal

### 3. 근손실 방지
- **다이어트 중 근손실** 방지
- **기초대사량 유지**: 요요 방지
- **몸매 만들기**: 탄탄한 라인 형성

## 유산소 운동의 역할

### 즉시적 칼로리 소모
- **운동 중**: 분당 5-15kcal 소모
- **즉시 효과**: 당일 칼로리 적자 확대
- **심혈관 건강**: 전반적 건강 개선

### 유산소 운동 종류별 효과
**저강도 장시간 (LISS)**
- 심박수 120-140bpm, 30-60분
- 지방 연료 사용 비율 높음
- 회복 부담 적음

**고강도 인터벌 (HIIT)**
- 심박수 80-90% 최대치, 15-25분
- 애프터번 효과 극대화
- 시간 효율성 높음

## 최적의 조합 전략

### 초보자 (0-6개월)
- **근력운동 70% + 유산소 30%**
- 주 3회 근력 + 주 2회 유산소
- 기초 근량 확보 우선

### 중급자 (6개월-2년)
- **근력운동 60% + 유산소 40%**
- 주 4회 근력 + 주 3회 유산소
- 근량 유지하며 체지방 감소

### 고급자 (2년+)
- **개인 목표에 따라 조정**
- 컨테스트 준비 시 유산소 비중 증가
- 벌크업 시 유산소 최소화

## 실전 적용 가이드

### 시간이 부족할 때
**30분 있다면**: 근력운동 우선
**45분 있다면**: 근력 30분 + 유산소 15분
**60분 있다면**: 근력 40분 + 유산소 20분

### 운동 순서
1. **근력운동 먼저**: 에너지 충분할 때 고강도
2. **유산소 나중**: 근력운동으로 글리코겐 소모 후 지방 연소 극대화

### 같은 날 vs 다른 날
**같은 날**: 근력 → 유산소 (2-3시간 간격 이상)
**다른 날**: 근력 3일 + 유산소 2일 분리

## 다이어트 단계별 전략

### 초기 (체지방 25% 이상)
- **근력운동 중심**: 기초대사량 높이기
- **가벼운 유산소**: 걷기, 자전거
- **식단이 80%**: 운동보다 칼로리 제한 중요

### 중기 (체지방 15-25%)
- **근력 + 유산소 균형**: 둘 다 중요
- **HIIT 도입**: 효율성 극대화
- **주기화**: 2주 근력 집중 → 1주 유산소 집중

### 후기 (체지방 15% 이하)
- **유산소 비중 증가**: 마지막 체지방 제거
- **근력운동 유지**: 근손실 방지
- **정밀한 칼로리 관리**: 매일 체중 측정

## 흔한 실수들

### 유산소만 하는 경우
- **근손실**: 기초대사량 감소
- **요요 현상**: 다이어트 종료 후 급속 체중 증가
- **스키니 팻**: 체중은 줄었지만 체지방률 높음

### 근력운동만 하는 경우
- **느린 체지방 감소**: 칼로리 적자 부족
- **심혈관 건강**: 유산소 운동의 이점 놓침
- **플래토**: 다양성 부족으로 정체

## 결론

다이어트에서 **근력운동이 더 중요**하지만, **유산소도 필요**합니다.

**우선순위**:
1. **식단 관리** (70%)
2. **근력운동** (20%)  
3. **유산소 운동** (10%)

하지만 개인의 상황, 선호도, 시간적 제약을 고려해서 자신만의 최적 조합을 찾는 것이 가장 중요합니다.
    `,
    contentEn: `
# Cardio vs. Weight Training: Which Is Better for Fat Loss?

When starting a diet, one of the first questions is "Should I do cardio or lift weights?" The answer is **both**, but there is a priority order.

## Why Weight Training Is More Important for Fat Loss

### 1. Increased Basal Metabolic Rate
- **1 kg of muscle gained** = 13–15 additional kcal burned daily at rest
- **24-hour effect**: Burns calories even while you sleep
- **Long-term investment**: An effect that lasts for years

### 2. Afterburn Effect (EPOC)
- Elevated metabolism for **12–24 hours after training**
- **High-intensity strength training** produces a greater afterburn than cardio
- **Additional calorie burn**: 50–200 kcal

### 3. Preventing Muscle Loss
- Prevents **muscle loss during a diet**
- **Preserves basal metabolic rate**: Prevents rebound weight gain
- **Builds shape**: Creates a toned, defined physique

## The Role of Cardio

### Immediate Calorie Burn
- **During exercise**: Burns 5–15 kcal per minute
- **Immediate effect**: Increases your caloric deficit on the day
- **Cardiovascular health**: Improves overall health markers

### Types of Cardio and Their Effects
**Low-Intensity Steady State (LISS)**
- Heart rate 120–140 bpm, 30–60 minutes
- Higher proportion of fat used as fuel
- Low recovery burden

**High-Intensity Interval Training (HIIT)**
- Heart rate at 80–90% of max, 15–25 minutes
- Maximizes afterburn effect
- High time efficiency

## Optimal Combination Strategy

### Beginners (0–6 months)
- **70% strength + 30% cardio**
- 3 strength sessions + 2 cardio sessions per week
- Priority: building foundational muscle mass

### Intermediate (6 months–2 years)
- **60% strength + 40% cardio**
- 4 strength sessions + 3 cardio sessions per week
- Reduce body fat while maintaining muscle

### Advanced (2+ years)
- **Adjust based on individual goals**
- Increase cardio proportion when preparing for a contest
- Minimize cardio during a bulk

## Practical Application Guide

### When Time Is Limited
**30 minutes available**: Prioritize strength training
**45 minutes available**: 30 min strength + 15 min cardio
**60 minutes available**: 40 min strength + 20 min cardio

### Exercise Order
1. **Strength training first**: High intensity when energy is high
2. **Cardio after**: Maximize fat burning after glycogen is depleted by strength training

### Same Day vs. Different Days
**Same day**: Strength → Cardio (at least 2–3 hours apart)
**Different days**: 3 strength days + 2 cardio days separated

## Phase-Based Fat Loss Strategy

### Early Phase (Body fat 25%+)
- **Strength training focus**: Elevate basal metabolic rate
- **Light cardio**: Walking, cycling
- **Diet is 80%**: Calorie restriction matters more than exercise volume

### Middle Phase (Body fat 15–25%)
- **Balance strength + cardio**: Both are important
- **Introduce HIIT**: Maximize efficiency
- **Periodization**: 2 weeks strength-focused → 1 week cardio-focused

### Late Phase (Body fat under 15%)
- **Increase cardio proportion**: Remove the last layer of fat
- **Maintain strength training**: Prevent muscle loss
- **Precise calorie management**: Daily weigh-ins

## Common Mistakes

### Doing Only Cardio
- **Muscle loss**: Basal metabolic rate decreases
- **Rebound weight gain**: Rapid regain after diet ends
- **Skinny-fat**: Lower weight but high body fat percentage

### Doing Only Strength Training
- **Slow fat loss**: Insufficient caloric deficit
- **Cardiovascular health**: Missing the benefits of aerobic exercise
- **Plateau**: Lack of variety leads to stagnation

## Conclusion

**Strength training is more important** for fat loss, but **cardio is also necessary**.

**Priority order**:
1. **Diet management** (70%)
2. **Strength training** (20%)
3. **Cardio** (10%)

That said, finding your own optimal combination based on your individual situation, preferences, and time constraints is what matters most.
    `,
    author: 'Corevia Fitness',
    publishedDate: '2025-09-14',
  },
  {
    id: 'metabolism-myths',
    category: '영양',
    categoryEn: 'Nutrition',
    title: '신진대사에 대한 오해와 진실',
    titleEn: 'Metabolism Myths and Facts',
    summary: '신진대사를 높이는 마법의 음식은 없습니다. 과학적 사실만 알려드려요.',
    summaryEn: "There's no magic food that boosts your metabolism. Here are the scientific facts.",
    content: `
# 신진대사에 대한 오해와 진실

"신진대사를 높이는 음식", "대사량 증가 비법" 같은 광고를 자주 보셨을 텐데요. 과연 신진대사를 획기적으로 높일 수 있을까요?

## 신진대사의 구성 요소

### 기초대사량 (BMR) - 60-70%
- **생명 유지**에 필요한 최소 에너지
- **근육량**에 비례해서 증가
- **나이, 성별, 유전**에 크게 좌우

### 활동 대사량 - 15-25%
- **의도적 운동**으로 소모되는 에너지
- **가장 조절하기 쉬운** 부분
- **근력운동 > 유산소** 순으로 효과적

### 음식 열효과 (TEF) - 8-12%
- **음식 소화**에 드는 에너지
- **단백질 > 탄수화물 > 지방** 순
- **전체 대사량의 10% 수준**

### 비운동 활동 (NEAT) - 15-30%
- **일상 활동**으로 소모 (걷기, 서 있기, 손 움직임)
- **개인차 매우 큼** (하루 350-800kcal 차이)
- **의외로 중요한** 요소

## 신진대사 관련 미신들

### 미신 1: "특정 음식이 대사량을 높인다"
**진실**: 고추, 녹차, 계피 등의 효과는 **미미함** (하루 50kcal 이하)
**현실**: 마케팅일 뿐, 기대하지 말 것

### 미신 2: "소식 다식이 대사량을 높인다"
**진실**: 식사 횟수는 **총 칼로리가 같다면** 대사량에 영향 없음
**현실**: 개인 편의에 따라 2끼든 6끼든 상관없음

### 미신 3: "아침을 굶으면 대사량이 떨어진다"
**진실**: 12-24시간 단식으로는 **대사량 변화 없음**
**현실**: 간헐적 단식도 문제없음

### 미신 4: "근육이 지방보다 칼로리를 10배 더 소모한다"
**진실**: 근육 1kg = 일일 13kcal, 지방 1kg = 일일 4kcal (**3배 차이**)
**현실**: 과장된 수치, 하지만 여전히 의미 있음

## 실제로 신진대사를 높이는 방법

### 1. 근육량 늘리기 (가장 효과적)
- **근력운동**: 주 3-4회 꾸준히
- **단백질**: 체중 × 1.6-2.2g
- **점진적 과부하**: 지속적 자극

### 2. NEAT 늘리기 (의외로 중요)
- **서서 일하기**: 앉기 vs 서기 (시간당 50kcal 차이)
- **계단 이용**: 엘리베이터 대신
- **걸어서 이동**: 가까운 거리는 도보
- **피젯팅**: 손가락 까딱, 다리 떨기도 도움

### 3. 운동 강도 높이기
- **고강도 인터벌**: HIIT 효과
- **복합 운동**: 여러 근육 동시 사용
- **짧은 휴식**: 세트 간 휴식 시간 단축

### 4. 충분한 수면
- **수면 부족** = 대사량 감소
- **7-9시간** 적정 수면
- **수면의 질** 개선

## 대사량 감소를 막는 방법

### 다이어트 중 주의사항
- **급격한 칼로리 제한** 피하기 (주 0.5-1kg 감량)
- **근력운동 유지**: 근손실 방지
- **단백질 충분히**: 체중 × 2.0-2.5g
- **리피드 데이**: 주 1회 탄수화물 증가

### 나이에 따른 대사량 변화
- **20대 이후**: 10년마다 2-3% 감소
- **주원인**: 근육량 감소, 활동량 저하
- **대응**: 근력운동으로 근육량 유지

## 현실적인 기대치

### 신진대사 개선 효과
- **근육 5kg 증가**: 일일 65-75kcal 추가 소모
- **NEAT 개선**: 일일 100-300kcal 추가 소모
- **총 효과**: 월 체중 감소 0.5-1kg 정도

### 시간적 투자
- **즉시 효과**: NEAT, 운동 강도
- **단기 효과** (1-3개월): 운동 습관, 활동량
- **장기 효과** (6개월+): 근육량 증가

## 실전 적용 팁

### 일상에서 NEAT 늘리기
- **알람 설정**: 1시간마다 5분 걷기
- **전화 통화**: 서서 하기
- **TV 시청**: 광고 시간에 스쿼트
- **대중교통**: 한 정거장 먼저 내리기

### 대사량 모니터링
- **활동량 밴드**: 일일 소모 칼로리 추정
- **체성분 분석**: 근육량 변화 추적
- **운동 일지**: 강도와 볼륨 기록

결론: 신진대사를 극적으로 높이는 마법은 없습니다. 하지만 **근육량 늘리기, 활동량 증가, 운동 강도 높이기**를 통해 분명한 개선이 가능합니다.

꾸준함이 핵심입니다.
    `,
    contentEn: `
# Metabolism Myths and Facts

You've probably seen ads for "metabolism-boosting foods" and "secrets to increasing your metabolic rate." Can you really dramatically raise your metabolism?

## The Components of Metabolism

### Basal Metabolic Rate (BMR) — 60–70%
- The minimum energy needed to **sustain life**
- Increases **proportionally with muscle mass**
- Heavily influenced by **age, sex, and genetics**

### Activity Energy Expenditure — 15–25%
- Energy burned through **deliberate exercise**
- The **most controllable** component
- **Strength training > cardio** in terms of effect

### Thermic Effect of Food (TEF) — 8–12%
- Energy used to **digest food**
- **Protein > carbohydrates > fat** in thermic effect
- Accounts for **roughly 10% of total metabolism**

### Non-Exercise Activity Thermogenesis (NEAT) — 15–30%
- Calories burned through **daily non-exercise movement** (walking, standing, fidgeting)
- **Enormous individual variation** (350–800 kcal difference per day)
- A **surprisingly significant** factor

## Metabolism Myths

### Myth 1: "Certain foods boost your metabolism"
**Truth**: The effect of chili peppers, green tea, cinnamon, etc., is **negligible** (under 50 kcal/day)
**Reality**: It's mostly marketing — don't get your hopes up

### Myth 2: "Eating small, frequent meals boosts your metabolism"
**Truth**: Meal frequency has no effect on metabolism **if total calories are equal**
**Reality**: Whether you eat 2 meals or 6 meals doesn't matter

### Myth 3: "Skipping breakfast slows your metabolism"
**Truth**: **No change in metabolic rate** from a 12–24 hour fast
**Reality**: Intermittent fasting is perfectly fine

### Myth 4: "Muscle burns 10 times more calories than fat"
**Truth**: 1 kg of muscle = 13 kcal/day; 1 kg of fat = 4 kcal/day (**3x difference**)
**Reality**: The common claim is exaggerated, but the effect is still meaningful

## What Actually Raises Your Metabolism

### 1. Build Muscle (Most Effective)
- **Strength training**: 3–4 sessions per week consistently
- **Protein**: Bodyweight × 1.6–2.2 g
- **Progressive overload**: Continual stimulus

### 2. Increase NEAT (Surprisingly Important)
- **Stand while working**: Sitting vs. standing (~50 kcal/hour difference)
- **Take the stairs**: Skip the elevator
- **Walk short distances**: Go on foot when possible
- **Fidgeting**: Even small movements add up

### 3. Increase Exercise Intensity
- **High-intensity intervals**: HIIT effect
- **Compound movements**: Multiple muscles engaged simultaneously
- **Shorter rest periods**: Reduce rest between sets

### 4. Get Adequate Sleep
- **Sleep deprivation** = reduced metabolic rate
- **7–9 hours** of appropriate sleep
- Improve **sleep quality**

## Preventing Metabolic Slowdown

### Cautions During Dieting
- Avoid **drastic calorie restriction** (aim for 0.5–1 kg/week loss)
- **Maintain strength training**: Prevent muscle loss
- **Sufficient protein**: Bodyweight × 2.0–2.5 g
- **Refeed day**: One high-carb day per week

### Age-Related Metabolic Changes
- **After age 20**: 2–3% decrease per decade
- **Primary cause**: Loss of muscle mass, decreased activity
- **Response**: Maintain muscle through strength training

## Realistic Expectations

### Metabolic Improvement Effects
- **5 kg of muscle gained**: 65–75 additional kcal burned daily
- **NEAT improvement**: 100–300 additional kcal burned daily
- **Total effect**: ~0.5–1 kg of additional weight loss per month

### Time Investment
- **Immediate effect**: NEAT, exercise intensity
- **Short-term effect** (1–3 months): Exercise habit, activity level
- **Long-term effect** (6 months+): Muscle mass increase

## Practical Tips

### Increasing NEAT in Daily Life
- **Set alarms**: 5 minutes of walking every hour
- **Phone calls**: Take them standing up
- **TV time**: Do squats during commercial breaks
- **Public transit**: Get off one stop early

### Tracking Your Metabolic Rate
- **Activity tracker**: Estimate daily calorie expenditure
- **Body composition analysis**: Track muscle mass changes
- **Training journal**: Log intensity and volume

Conclusion: There is no magic to dramatically raising your metabolism. However, meaningful improvement is absolutely possible through **building muscle, increasing daily activity, and intensifying your workouts**.

Consistency is the key.
    `,
    author: 'Corevia Science',
    publishedDate: '2025-09-13',
  },
  {
    id: 'supplements-guide',
    category: '보충제',
    categoryEn: 'Supplements',
    title: '보충제 가이드: 정말 필요한 것들만',
    titleEn: 'Supplement Guide: Only What You Actually Need',
    summary: '수많은 보충제 중에서 정말 효과가 입증된 것들만 골라드립니다.',
    summaryEn: 'From the vast world of supplements, we select only those with real, proven scientific evidence.',
    content: `
# 보충제 가이드: 정말 필요한 것들만

보충제 시장은 매년 수조원 규모로 성장하고 있습니다. 하지만 대부분은 마케팅일 뿐, 실제 효과가 입증된 것은 몇 개 되지 않습니다.

## 과학적으로 입증된 보충제들

### Tier 1: 필수 보충제

**1. 웨이 프로틴**
- **효과**: 근합성 촉진, 편의성
- **복용법**: 운동 후 20-40g
- **주의사항**: 음식으로 충분하면 불필요

**2. 크레아틴 모노하이드레이트**
- **효과**: 근력 3-15% 증가, 근량 증가
- **복용법**: 매일 3-5g (타이밍 무관)
- **부작용**: 수분 저류 (2-3kg 체중 증가)

**3. 비타민 D**
- **효과**: 뼈 건강, 면역력, 테스토스테론
- **복용법**: 하루 1000-4000IU
- **필요성**: 한국인 80% 부족

### Tier 2: 상황별 유용

**4. 카페인**
- **효과**: 운동 능력 향상, 지방 연소
- **복용법**: 운동 30분 전 100-400mg
- **주의사항**: 내성, 수면 방해

**5. 베타 알라닌**
- **효과**: 근지구력 향상 (1-4분 운동)
- **복용법**: 하루 3-5g (분할 복용)
- **부작용**: 얼굴 따끔거림 (무해)

**6. 오메가-3**
- **효과**: 염증 감소, 심혈관 건강
- **복용법**: EPA+DHA 1-3g
- **필요성**: 생선 섭취 부족 시

### Tier 3: 특수 상황

**7. ZMA (아연, 마그네슘, 비타민 B6)**
- **효과**: 수면 질 개선, 회복 촉진
- **복용법**: 잠들기 30분 전
- **대상**: 수면 장애가 있는 경우

**8. HMB**
- **효과**: 근손실 방지 (다이어트 중)
- **복용법**: 하루 3g (식사와 함께)
- **대상**: 극단적 다이어트 시에만

## 불필요한 보충제들

### 과대광고 제품들
**테스토스테론 부스터**: 대부분 효과 없음
**지방 연소제**: 카페인 외에는 효과 미미
**아미노산**: 단백질 충분하면 불필요
**글루타민**: 건강한 사람에게는 효과 없음

### 비싼 것들
**브랜드 프리미엄**: 성분 같으면 저렴한 것도 OK
**복합 제품**: 개별 구매가 더 경제적
**"천연" 제품**: 화학적으로 동일함

## 보충제 우선순위

### 예산별 추천
**월 3만원**: 웨이 프로틴 + 크레아틴
**월 5만원**: 위 + 비타민 D + 오메가-3
**월 10만원**: 위 + 카페인 + 베타 알라닌

### 목표별 추천
**근비대**: 웨이 프로틴, 크레아틴, 비타민 D
**다이어트**: 카페인, 웨이 프로틴, HMB
**운동 능력**: 크레아틴, 카페인, 베타 알라닌
**회복**: ZMA, 오메가-3, 비타민 D

## 보충제 복용 시 주의사항

### 기본 원칙
- **음식이 우선**: 보충제는 말 그대로 '보충'
- **단일 성분**: 복합 제품보다 개별 구매
- **신뢰할 수 있는 브랜드**: 제3자 검증 제품

### 안전 수칙
- **권장량 준수**: 많이 먹는다고 더 효과적이지 않음
- **의료진 상담**: 질병이 있거나 약물 복용 시
- **점진적 도입**: 한 번에 여러 개 시작하지 말기

### 효과 평가
- **최소 4-6주** 복용 후 효과 판단
- **객관적 지표**: 운동 기록, 체성분 변화
- **주관적 느낌**: 컨디션, 회복 속도

## 결론

보충제는 **마법이 아닙니다**. 올바른 운동과 식단이 95%이고, 보충제는 나머지 5%를 채워주는 역할입니다.

**진짜 필요한 것들**:
1. 웨이 프로틴 (편의성)
2. 크레아틴 (효과 확실)
3. 비타민 D (부족하기 쉬움)

나머지는 여유가 있을 때 고려하세요. 보충제에 쓸 돈이 있다면 **좋은 음식**을 사는 것이 더 현명할 수 있습니다.
    `,
    contentEn: `
# Supplement Guide: Only What You Actually Need

The supplement market grows by hundreds of billions of dollars every year. But most of it is just marketing — very few products have genuine scientific backing.

## Scientifically Proven Supplements

### Tier 1: Essential Supplements

**1. Whey Protein**
- **Effect**: Stimulates muscle protein synthesis, convenient
- **How to use**: 20–40 g post-workout
- **Note**: Unnecessary if you're hitting your protein target through food alone

**2. Creatine Monohydrate**
- **Effect**: 3–15% increase in strength, promotes muscle gain
- **How to use**: 3–5 g daily (timing doesn't matter)
- **Side effect**: Water retention (1–3 kg temporary weight increase)

**3. Vitamin D**
- **Effect**: Bone health, immune function, testosterone
- **How to use**: 1,000–4,000 IU per day
- **Relevance**: The majority of people are deficient

### Tier 2: Situationally Useful

**4. Caffeine**
- **Effect**: Improves exercise performance, supports fat oxidation
- **How to use**: 100–400 mg, 30 minutes before training
- **Note**: Tolerance builds over time; can disrupt sleep

**5. Beta-Alanine**
- **Effect**: Improves muscular endurance (1–4 minute efforts)
- **How to use**: 3–5 g daily (split into multiple doses)
- **Side effect**: Tingling sensation on skin (harmless)

**6. Omega-3**
- **Effect**: Reduces inflammation, supports cardiovascular health
- **How to use**: 1–3 g EPA+DHA combined
- **Relevance**: Especially if your fish intake is low

### Tier 3: Special Circumstances

**7. ZMA (Zinc, Magnesium, Vitamin B6)**
- **Effect**: Improves sleep quality, promotes recovery
- **How to use**: 30 minutes before bed
- **For**: Those experiencing poor sleep quality

**8. HMB**
- **Effect**: Prevents muscle loss (during a caloric deficit)
- **How to use**: 3 g daily with meals
- **For**: Only during extreme dieting phases

## Supplements You Don't Need

### Over-Hyped Products
**Testosterone boosters**: Most are ineffective
**Fat burners**: Effects beyond caffeine are negligible
**Amino acid supplements**: Unnecessary if protein intake is sufficient
**Glutamine**: No meaningful effect in healthy individuals

### Expensive but Unnecessary
**Brand premiums**: Same ingredients at a fraction of the cost elsewhere
**Combination products**: Buying individual supplements is more economical
**"Natural" products**: Chemically identical to standard supplements

## Supplement Priority by Budget

### ~$25/month: Whey protein + creatine
### ~$40/month: Above + Vitamin D + omega-3
### ~$80/month: Above + caffeine + beta-alanine

## Supplement Priority by Goal
**Hypertrophy**: Whey protein, creatine, Vitamin D
**Fat loss**: Caffeine, whey protein, HMB
**Performance**: Creatine, caffeine, beta-alanine
**Recovery**: ZMA, omega-3, Vitamin D

## Safety Guidelines

### Fundamental Principles
- **Food first**: Supplements are literally supplemental
- **Single ingredients**: Buy individual products over blends
- **Reputable brands**: Look for third-party tested products

### Safety Rules
- **Follow recommended doses**: More is not better
- **Consult a physician**: If you have medical conditions or take medications
- **Introduce gradually**: Don't start multiple new supplements simultaneously

### Evaluating Effectiveness
- Take for a **minimum of 4–6 weeks** before judging results
- Use **objective metrics**: Training records, body composition changes
- Track **subjective feel**: Energy levels, recovery speed

## Conclusion

Supplements are **not magic**. Proper training and diet account for 95%; supplements fill the remaining 5%.

**What you actually need**:
1. Whey protein (convenience)
2. Creatine (proven effectiveness)
3. Vitamin D (easy to be deficient)

Consider the rest only when budget allows. If you have money to spend on supplements, **buying better quality food** might be the wiser choice.
    `,
    author: 'Corevia Science',
    publishedDate: '2025-09-12',
  },
  {
    id: 'form-technique',
    category: '운동',
    categoryEn: 'Exercise',
    title: '운동 폼의 중요성: 무게보다 자세',
    titleEn: 'The Importance of Exercise Form: Technique Over Weight',
    summary: '완벽한 자세로 50kg 드는 것이 엉성한 자세로 100kg 드는 것보다 낫습니다.',
    summaryEn: 'Lifting 50 kg with perfect form is better than lifting 100 kg with sloppy technique.',
    content: `
# 운동 폼의 중요성: 무게보다 자세

헬스장에서 가장 흔히 보는 실수가 바로 **무게에 대한 집착**입니다. 하지만 운동에서 가장 중요한 것은 무게가 아닌 **올바른 자세**입니다.

## 왜 폼이 중요한가?

### 1. 부상 예방
- **관절 보호**: 올바른 움직임 패턴
- **인대/건 보호**: 과도한 스트레스 방지
- **장기적 건강**: 평생 운동할 수 있는 몸

### 2. 효율성 극대화
- **타겟 근육 집중**: 원하는 근육에 정확한 자극
- **에너지 효율**: 불필요한 보상 작용 방지
- **빠른 발달**: 정확한 자극으로 더 빠른 성장

### 3. 진정한 강함
- **기능적 근력**: 실생활에 도움되는 힘
- **균형 발달**: 전체적 조화
- **자신감**: 올바른 동작에서 나오는 확신

## 주요 운동별 폼 체크포인트

### 스쿼트
**올바른 자세**:
- 발끝 살짝 바깥쪽 (15-30도)
- 무릎이 발끝 방향으로
- 가슴 펴고 등 곧게
- 고관절부터 앉기 시작

**흔한 실수**:
- 무릎이 안쪽으로 모임
- 상체가 앞으로 기움
- 발뒤꿈치 들림
- 깊이 부족

### 데드리프트
**올바른 자세**:
- 바벨이 정강이에 가깝게
- 어깨가 바벨 위에
- 등 중립 자세 유지
- 고관절 힌지 동작

**흔한 실수**:
- 등 굽힘 (라운딩)
- 바벨이 몸에서 멀어짐
- 무릎부터 굽히기
- 과도한 상체 젖히기

### 벤치프레스
**올바른 자세**:
- 어깨뼈 모으고 고정
- 자연스러운 등 아치
- 손목 곧게 세우기
- 가슴까지 완전히 내리기

**흔한 실수**:
- 어깨가 앞으로 나옴
- 바운싱 (가슴에서 튕기기)
- 부분 동작 (하프 렙)
- 과도한 아치

## 올바른 폼 습득 방법

### 1. 기본기부터
- **맨몸 동작** 완벽히 익히기
- **가벼운 중량**으로 패턴 학습
- **거울 활용**: 실시간 자세 확인
- **영상 촬영**: 객관적 분석

### 2. 점진적 발전
- **중량보다 반복 횟수** 먼저 늘리기
- **완벽한 10회** > **엉성한 15회**
- **컨트롤**: 천천히 올리고 천천히 내리기
- **풀 레인지**: 전체 가동범위 활용

### 3. 전문가 도움
- **PT 세션**: 초기 폼 교정
- **온라인 코칭**: 영상 피드백
- **운동 파트너**: 서로 체크
- **지속적 학습**: 유튜브, 책 활용

## 폼 vs 무게의 균형

### 언제 무게를 늘릴까?
- **완벽한 자세**로 목표 횟수 달성
- **여유 있게** 2-3회 더 할 수 있을 때
- **컨트롤** 유지하며 전체 동작 가능
- **다음 날 컨디션** 좋을 때

### 언제 무게를 줄일까?
- **폼이 무너질** 때 즉시
- **관절 불편감** 느낄 때
- **컨트롤 불가능**할 때
- **피로 누적**으로 집중력 저하 시

## ego lifting의 위험성

### 심리적 함정
- **남들 시선** 의식
- **숫자에 대한 집착**
- **빠른 발전** 욕구
- **자존감과 중량** 연결

### 현실적 피해
- **부상 위험** 급증
- **실제 발전** 더딤
- **장기적 퇴보**
- **자신감 상실**

## 마음가짐

### 진정한 강함
- **자세가 완벽한** 50kg > **엉성한** 100kg
- **꾸준한 발전** > **일회성 기록**
- **부상 없는 운동** = **최고의 운동**

### 장기적 관점
- **10년 후**에도 운동할 수 있는 몸
- **평생 건강**이 목표
- **지속가능성**이 핵심

기억하세요. 헬스장은 경쟁하는 곳이 아닙니다. 어제의 나보다 나은 오늘의 나를 만드는 곳입니다.

폼을 완벽하게 하세요. 무게는 자연스럽게 따라옵니다.
    `,
    contentEn: `
# The Importance of Exercise Form: Technique Over Weight

The most common mistake in the gym is an **obsession with heavy weights**. But in training, the most important thing is not the weight — it's **correct form**.

## Why Form Matters

### 1. Injury Prevention
- **Joint protection**: Proper movement patterns
- **Ligament/tendon protection**: Prevents excessive stress
- **Long-term health**: A body that can train for life

### 2. Maximizing Efficiency
- **Target muscle activation**: Precise stimulus to the intended muscle
- **Energy efficiency**: Prevents unnecessary compensatory movements
- **Faster development**: Accurate stimulus leads to faster growth

### 3. True Strength
- **Functional strength**: Translates to real-world capability
- **Balanced development**: Overall harmony
- **Confidence**: Conviction that comes from correct execution

## Form Checkpoints for Key Exercises

### Squat
**Correct form**:
- Toes slightly outward (15–30 degrees)
- Knees track in the direction of the toes
- Chest up, back straight
- Initiate the descent by sitting back at the hips

**Common mistakes**:
- Knees caving inward
- Excessive forward lean of the torso
- Heels rising off the floor
- Insufficient depth

### Deadlift
**Correct form**:
- Bar close to the shins
- Shoulders directly over or slightly in front of the bar
- Neutral spine throughout
- Hip hinge movement pattern

**Common mistakes**:
- Rounding the back
- Bar drifting away from the body
- Starting the pull by bending the knees first
- Hyperextending at the top

### Bench Press
**Correct form**:
- Scapulae retracted and depressed
- Natural arch in the lower back
- Wrists stacked straight above elbows
- Lower the bar fully to the chest

**Common mistakes**:
- Shoulders rolling forward
- Bouncing the bar off the chest
- Partial range of motion
- Excessive arch

## How to Develop Correct Form

### 1. Start with the Basics
- Master the **bodyweight version** of the movement first
- Learn the pattern **with light weight**
- **Use a mirror**: Check your form in real time
- **Record yourself**: Objective analysis

### 2. Gradual Progression
- Increase **reps before weight**
- **10 perfect reps** > **15 sloppy reps**
- **Controlled tempo**: Lift and lower with intention
- **Full range**: Utilize the complete range of motion

### 3. Seek Expert Guidance
- **Personal training sessions**: Early-stage form correction
- **Online coaching**: Video feedback
- **Training partner**: Spot each other's form
- **Continuous learning**: YouTube, books, reputable resources

## Balancing Form and Weight

### When Should You Increase the Weight?
- When you can complete the target reps **with perfect form**
- When you have **2–3 reps left in the tank**
- When you can maintain **full control** throughout the movement
- When your **next-day recovery** feels good

### When Should You Reduce the Weight?
- **Immediately** when your form breaks down
- When you feel **joint discomfort**
- When the weight is **uncontrollable**
- When **accumulated fatigue** compromises your focus

## The Danger of Ego Lifting

### The Psychological Trap
- **Caring what others think**
- **Fixation on numbers**
- **Desire for rapid progress**
- **Tying self-worth to how much you lift**

### The Real Consequences
- **Dramatically increased injury risk**
- **Slower actual progress**
- **Long-term regression**
- **Loss of confidence**

## Mindset

### True Strength
- **50 kg with perfect form** > **100 kg with sloppy form**
- **Consistent progress** > **one-off records**
- **Injury-free training** = **the best training**

### Long-Term View
- A body that can still train **10 years from now**
- **Lifelong health** is the goal
- **Sustainability** is the core principle

Remember — the gym is not a place for competition. It is a place to become a better version of yourself than you were yesterday.

Perfect your form. The weight will follow naturally.
    `,
    author: 'Corevia Technique',
    publishedDate: '2025-09-11',
  },
  {
    id: 'hydration-importance',
    category: '영양',
    categoryEn: 'Nutrition',
    title: '수분 섭취의 숨겨진 중요성',
    titleEn: 'The Hidden Importance of Hydration',
    summary: '물만 충분히 마셔도 운동 능력이 20% 향상됩니다. 수분의 과학적 효과',
    summaryEn: 'Simply drinking enough water can improve exercise performance by 20%. The science of hydration.',
    content: `
# 수분 섭취의 숨겨진 중요성

물은 생명의 근본이지만, 운동하는 사람들에게는 **성능 향상의 비밀 무기**이기도 합니다.

## 탈수가 운동에 미치는 영향

### 체중의 2% 탈수 시
- **근력 감소**: 10-15%
- **근지구력 감소**: 20-30%
- **집중력 저하**: 판단력 흐려짐
- **체온 조절 장애**: 열사병 위험

### 체중의 3-4% 탈수 시
- **운동 능력**: 25-30% 감소
- **심박수 증가**: 심혈관 부담 가중
- **현기증, 메스꺼움**
- **근경련** 위험 증가

## 수분의 운동 생리학적 역할

### 1. 영양소 운반
- **혈액의 90%**가 물
- **산소와 영양소** 근육으로 운반
- **노폐물 제거**: 젖산, 요소 배출

### 2. 체온 조절
- **땀**: 체온 1도 상승 방지에 500ml 필요
- **혈관 확장**: 열 방출 촉진
- **운동 지속성**: 오버히팅 방지

### 3. 관절 윤활
- **관절액**: 90% 이상이 물
- **연골 보호**: 충격 흡수
- **부상 방지**: 관절 건강 유지

### 4. 근육 기능
- **근수축**: 전해질 균형 필요
- **에너지 생산**: 모든 대사 과정에 물 필요
- **단백질 합성**: 수분 충분해야 효율적

## 올바른 수분 섭취 전략

### 일반인 기준량
- **기본**: 체중 × 30-35ml (70kg = 2.1-2.5L)
- **운동 시**: 위 + 운동 시간 × 500-750ml
- **더운 날씨**: 위 + 추가 500ml

### 운동 전후 수분 관리

**운동 2-3시간 전**
- 500ml 충분히 마시기
- 소변 색깔로 확인 (연한 노란색)

**운동 중**
- **15-20분마다** 150-200ml
- **갈증 느끼기 전**에 마시기
- **전해질 보충**: 1시간 이상 운동 시

**운동 후**
- **체중 감소량의 150%** 보충
- 예: 1kg 감소 시 1.5L 마시기
- **점진적 보충**: 한 번에 몰아마시지 말기

## 수분 섭취 최적화 팁

### 흡수율 높이기
- **상온 또는 미지근한 물**: 차가운 물보다 흡수 빠름
- **소량씩 자주**: 한 번에 많이보다 조금씩
- **전해질 추가**: 나트륨, 칼륨으로 흡수 촉진

### 맛있게 마시기
- **레몬, 라임**: 비타민 C 추가
- **오이, 민트**: 상쾌한 맛
- **베리류**: 항산화 효과
- **탄산수**: 변화를 위해

### 습관 만들기
- **물병 항상 휴대**: 시각적 리마인더
- **알람 설정**: 2시간마다 물 마시기
- **식사 전**: 30분 전 물 한 잔
- **기상 후**: 공복에 물 500ml

## 전해질의 중요성

### 주요 전해질
**나트륨**: 수분 균형, 근수축
**칼륨**: 근육 기능, 혈압 조절
**마그네슘**: 근육 이완, 에너지 생산
**칼슘**: 근수축, 뼈 건강

### 전해질 부족 증상
- 근경련, 근육 떨림
- 현기증, 두통
- 심박수 이상
- 극심한 피로감

### 천연 전해질 공급원
- **바나나**: 칼륨 풍부
- **코코넛 워터**: 자연 스포츠 음료
- **소금**: 나트륨 보충
- **견과류**: 마그네슘

## 수분 섭취 체크리스트

### 충분한 수분 섭취 신호
- [ ] 소변 색깔이 연한 노란색
- [ ] 갈증을 거의 느끼지 않음
- [ ] 피부 탄력성 좋음 (손등 꼬집기 테스트)
- [ ] 입술과 입안이 촉촉함
- [ ] 운동 중 땀이 적절히 남

### 탈수 경고 신호
- [ ] 진한 노란색 소변
- [ ] 지속적인 갈증
- [ ] 두통, 현기증
- [ ] 피로감, 집중력 저하
- [ ] 근경련 자주 발생

## 특수 상황별 수분 관리

### 다이어트 중
- **더 많은 수분** 필요 (신진대사 증가)
- **포만감 효과**: 식사 30분 전 물 마시기
- **노폐물 배출**: 케톤체 등 배출 촉진

### 근비대 기간
- **단백질 대사**: 충분한 수분 필요
- **크레아틴 복용 시**: 추가 500ml
- **근육 볼륨**: 수분이 근육 크기에 영향

### 여름철 운동
- **사전 수분 충전**: 운동 2시간 전부터
- **시원한 환경**: 에어컨, 선풍기 활용
- **휴식 늘리기**: 세트 간 충분한 휴식

기억하세요. 목이 마를 때는 이미 늦습니다. **미리미리 충분한 수분**을 섭취하는 것이 최고의 성능 향상 전략입니다.

물은 가장 저렴하고 효과적인 '보충제'입니다.
    `,
    contentEn: `
# The Hidden Importance of Hydration

Water is the foundation of life, but for those who train, it is also a **secret weapon for performance enhancement**.

## The Effects of Dehydration on Exercise

### At 2% Bodyweight Dehydration
- **Strength loss**: 10–15%
- **Muscular endurance loss**: 20–30%
- **Reduced concentration**: Impaired judgment
- **Impaired thermoregulation**: Risk of heat stroke

### At 3–4% Bodyweight Dehydration
- **Exercise capacity**: 25–30% decrease
- **Elevated heart rate**: Increased cardiovascular strain
- **Dizziness and nausea**
- **Increased risk of muscle cramps**

## The Exercise Physiology Role of Water

### 1. Nutrient Transport
- **90% of blood** is water
- Transports **oxygen and nutrients** to muscles
- **Removes waste**: Excretes lactic acid, urea

### 2. Thermoregulation
- **Sweating**: ~500 ml needed to prevent a 1°C temperature rise
- **Vasodilation**: Promotes heat dissipation
- **Exercise sustainability**: Prevents overheating

### 3. Joint Lubrication
- **Synovial fluid**: Over 90% water
- **Cartilage protection**: Absorbs shock
- **Injury prevention**: Maintains joint health

### 4. Muscle Function
- **Muscle contraction**: Requires electrolyte balance
- **Energy production**: Water required for all metabolic processes
- **Protein synthesis**: Functions optimally when well hydrated

## Proper Hydration Strategy

### Daily Baseline
- **Base**: Bodyweight × 30–35 ml (70 kg = 2.1–2.5 L)
- **During exercise**: Add 500–750 ml per hour of training
- **Hot weather**: Add another 500 ml

### Pre- and Post-Workout Hydration Management

**2–3 Hours Before Exercise**
- Drink 500 ml
- Check urine color (pale yellow is ideal)

**During Exercise**
- **150–200 ml every 15–20 minutes**
- Drink **before you feel thirsty**
- **Replenish electrolytes**: For sessions over 1 hour

**After Exercise**
- Replace **150% of bodyweight lost**
- Example: If you lost 1 kg, drink 1.5 L
- **Rehydrate gradually**: Don't chug it all at once

## Tips to Optimize Hydration

### Improving Absorption
- **Room temperature or slightly warm water**: Absorbs faster than cold water
- **Small sips, frequently**: Better than large amounts at once
- **Add electrolytes**: Sodium and potassium enhance absorption

### Making It Enjoyable
- **Lemon or lime**: Adds Vitamin C
- **Cucumber or mint**: Refreshing flavor
- **Berries**: Antioxidant boost
- **Sparkling water**: Mix things up

### Building the Habit
- **Carry a water bottle at all times**: Visual reminder
- **Set alarms**: Drink water every 2 hours
- **Before meals**: One glass of water 30 minutes before eating
- **Upon waking**: 500 ml of water on an empty stomach

## The Importance of Electrolytes

### Key Electrolytes
**Sodium**: Fluid balance, muscle contraction
**Potassium**: Muscle function, blood pressure regulation
**Magnesium**: Muscle relaxation, energy production
**Calcium**: Muscle contraction, bone health

### Symptoms of Electrolyte Deficiency
- Muscle cramps and twitching
- Dizziness and headaches
- Irregular heartbeat
- Extreme fatigue

### Natural Electrolyte Sources
- **Banana**: Rich in potassium
- **Coconut water**: Natural sports drink
- **Salt**: Sodium replenishment
- **Nuts**: Magnesium

## Hydration Checklist

### Signs of Adequate Hydration
- [ ] Urine is pale yellow in color
- [ ] Rarely feeling thirsty
- [ ] Good skin elasticity (pinch test on back of hand)
- [ ] Lips and mouth feel moist
- [ ] Sweating appropriately during exercise

### Dehydration Warning Signs
- [ ] Dark yellow urine
- [ ] Persistent thirst
- [ ] Headaches and dizziness
- [ ] Fatigue and reduced concentration
- [ ] Frequent muscle cramps

## Hydration Management for Specific Situations

### During a Diet
- **More fluids needed** (increased metabolic activity)
- **Satiety effect**: Drink a glass of water 30 minutes before meals
- **Flush waste**: Helps excrete ketone bodies and other byproducts

### During a Muscle-Building Phase
- **Protein metabolism**: Requires adequate hydration
- **When taking creatine**: Add another 500 ml
- **Muscle volume**: Hydration directly influences muscle size

### Summer Training
- **Pre-hydrate**: Start drinking 2 hours before training
- **Cool environment**: Use air conditioning or fans
- **Increase rest**: Take longer breaks between sets

Remember — by the time you feel thirsty, it's already too late. **Staying ahead of thirst with consistent hydration** is the best performance strategy available.

Water is the cheapest and most effective "supplement" there is.
    `,
    author: 'Corevia Health',
    publishedDate: '2025-09-10',
  },
  {
    id: 'mindful-eating',
    category: '마인드셋',
    categoryEn: 'Mindset',
    title: '마음챙김 식사법: 다이어트의 새로운 접근',
    titleEn: 'Mindful Eating: A New Approach to Dieting',
    summary: '칼로리 계산보다 중요할 수 있는 것. 어떻게 먹느냐가 무엇을 먹느냐만큼 중요합니다.',
    summaryEn: 'Something that might matter more than counting calories. How you eat is just as important as what you eat.',
    content: `
# 마음챙김 식사법: 다이어트의 새로운 접근

다이어트 실패의 가장 큰 원인은 **폭식**과 **스트레스 이팅**입니다. 칼로리만 계산한다고 해결되지 않습니다. **어떻게 먹느냐**가 핵심입니다.

## 마음챙김 식사법이란?

### 정의
- **현재 순간**에 집중하며 식사
- **배고픔과 포만감** 신호 인식
- **음식의 맛, 향, 질감** 온전히 경험
- **감정과 식사** 분리

### 현대인의 식사 문제
- **멀티태스킹**: TV, 폰 보며 식사
- **빠른 속도**: 포만감 신호 놓침
- **스트레스 이팅**: 감정으로 먹기
- **습관적 과식**: 배부른데도 계속 먹기

## 마음챙김 식사의 과학적 효과

### 체중 관리
- **자연스러운 칼로리 감소**: 20-30% 줄어듦
- **포만감 증가**: 같은 양으로도 더 만족
- **폭식 감소**: 90% 이상 개선
- **요요 방지**: 지속가능한 식습관

### 소화 개선
- **침 분비 증가**: 소화 효소 활성화
- **위산 분비 정상화**: 소화불량 개선
- **장 건강**: 스트레스 감소로 장내 환경 개선

### 심리적 효과
- **음식과의 건강한 관계**: 죄책감 없는 식사
- **스트레스 감소**: 코르티솔 수치 개선
- **자기 인식 향상**: 진짜 배고픔 vs 가짜 배고픔 구분

## 실천 방법

### 1. 환경 조성
- **전자기기 끄기**: TV, 폰, 컴퓨터 OFF
- **조용한 공간**: 방해받지 않는 곳
- **정리된 식탁**: 시각적 산만함 제거
- **적절한 조명**: 너무 밝거나 어둡지 않게

### 2. 식사 전 준비
- **3번 깊게 숨쉬기**: 마음 안정
- **배고픔 정도 확인**: 1-10점 척도
- **감사 표현**: 음식과 만들어준 사람에게
- **식사 의도 설정**: 영양 공급이 목적

### 3. 식사 중 실천
- **첫 입 집중**: 맛, 향, 질감 온전히 경험
- **천천히 씹기**: 한 입에 20-30번
- **젓가락 내려놓기**: 한 입 삼킨 후 잠시 휴식
- **중간 점검**: 포만감 정도 확인

### 4. 식사 후 정리
- **포만감 평가**: 1-10점 척도
- **만족도 체크**: 음식에 대한 만족감
- **감정 확인**: 죄책감 없이 만족스러운가?
- **다음 식사 계획**: 언제쯤 배고플지 예상

## 감정적 식사 극복법

### 감정 vs 배고픔 구별
**진짜 배고픔**:
- 점진적으로 증가
- 다양한 음식 생각남
- 위장에서 느껴짐
- 식사 후 만족감

**감정적 배고픔**:
- 갑작스럽게 나타남
- 특정 음식 갈망 (단 것, 짠 것)
- 머리에서 느껴짐
- 식사 후 죄책감

### 대처 전략
**일시정지 기법**
1. **10분 기다리기**: 충동적 식사 방지
2. **물 한 잔**: 갈증과 배고픔 구별
3. **감정 확인**: 스트레스, 지루함, 슬픔?
4. **대안 활동**: 산책, 음악, 통화

**스트레스 관리**
- **운동**: 최고의 스트레스 해소
- **명상**: 하루 10분
- **취미 활동**: 음식 외 즐거움 찾기
- **충분한 수면**: 스트레스 호르몬 조절

## 실전 적용 팁

### 외식 시 마음챙김
- **메뉴 미리 정하기**: 충동적 선택 방지
- **애피타이저 피하기**: 진짜 배고픔인지 확인
- **대화에 집중**: 음식보다 사람과의 시간
- **남기기 연습**: 포만감 느끼면 그만

### 집에서 실천
- **작은 그릇 사용**: 시각적 포만감
- **음식 미리 준비**: 건강한 선택 쉽게
- **간식 숨기기**: 눈에 보이지 않는 곳에
- **식사 일기**: 감정과 음식 패턴 파악

### 직장에서 실천
- **점심 시간 확보**: 최소 20분
- **동료와 함께**: 사회적 식사
- **건강한 간식 준비**: 견과류, 과일
- **스트레스 관리**: 업무 중 짧은 휴식

## 마음챙김 식사 체크리스트

### 식사 전
- [ ] 전자기기 끄기
- [ ] 배고픔 정도 확인 (1-10점)
- [ ] 3번 깊게 숨쉬기
- [ ] 음식에 감사 표현

### 식사 중
- [ ] 첫 입에 집중하기
- [ ] 천천히 씹기 (20-30번)
- [ ] 젓가락 내려놓고 휴식
- [ ] 중간에 포만감 체크

### 식사 후
- [ ] 포만감 평가 (1-10점)
- [ ] 만족도 확인
- [ ] 감정 상태 점검
- [ ] 다음 식사 시간 예상

## 장기적 효과

### 체중 관리
- **자연스러운 칼로리 감소**
- **요요 없는 체중 유지**
- **건강한 식습관 정착**

### 전반적 웰빙
- **스트레스 감소**
- **소화 기능 개선**
- **음식과의 건강한 관계**
- **자기 인식 향상**

마음챙김 식사는 **일시적인 다이어트 방법이 아닌 평생의 라이프스타일**입니다.

천천히, 의식적으로, 감사하며 먹는 습관을 기르세요. 몸과 마음이 모두 건강해집니다.
    `,
    contentEn: `
# Mindful Eating: A New Approach to Dieting

The biggest causes of diet failure are **binge eating** and **emotional eating**. Counting calories alone won't solve these problems. **How you eat** is what matters.

## What Is Mindful Eating?

### Definition
- Eating with full attention in the **present moment**
- Recognizing signals of **hunger and fullness**
- Fully experiencing the **taste, aroma, and texture** of food
- Separating **emotions from eating**

### Modern Eating Problems
- **Multitasking**: Eating while watching TV or scrolling your phone
- **Eating too fast**: Missing the fullness signal
- **Emotional eating**: Eating in response to feelings
- **Habitual overeating**: Continuing to eat when already full

## The Science Behind Mindful Eating

### Weight Management
- **Natural calorie reduction**: 20–30% fewer calories consumed
- **Increased satiety**: Greater satisfaction from the same amount of food
- **Reduced binge eating**: Over 90% improvement
- **Prevents rebound**: Supports sustainable eating habits

### Improved Digestion
- **Increased saliva production**: Activates digestive enzymes
- **Normalized stomach acid**: Reduces indigestion
- **Gut health**: Improved gut environment through stress reduction

### Psychological Benefits
- **Healthy relationship with food**: Eating without guilt
- **Reduced stress**: Improved cortisol levels
- **Better self-awareness**: Distinguishing true hunger from false hunger

## How to Practice

### 1. Set the Environment
- **Turn off devices**: TV, phone, computer OFF
- **Quiet space**: Free from interruptions
- **Tidy table**: Remove visual clutter
- **Appropriate lighting**: Not too bright or too dim

### 2. Before Eating
- **3 deep breaths**: Settle the mind
- **Check hunger level**: On a 1–10 scale
- **Express gratitude**: For the food and whoever prepared it
- **Set an intention**: Nourishment is the purpose

### 3. During the Meal
- **Focus on the first bite**: Fully experience taste, aroma, and texture
- **Chew slowly**: 20–30 chews per bite
- **Put your utensils down**: Brief pause after swallowing
- **Mid-meal check**: Assess your level of fullness

### 4. After the Meal
- **Evaluate fullness**: On a 1–10 scale
- **Check satisfaction**: Did the food satisfy you?
- **Assess emotions**: Do you feel satisfied without guilt?
- **Plan next meal**: Anticipate when you'll next be hungry

## Overcoming Emotional Eating

### Distinguishing Emotion from Hunger
**True hunger**:
- Builds gradually
- Various foods sound appealing
- Felt in the stomach
- Followed by satisfaction after eating

**Emotional hunger**:
- Appears suddenly
- Craving specific foods (sweet, salty)
- Felt in the head
- Followed by guilt after eating

### Coping Strategies
**The Pause Technique**
1. **Wait 10 minutes**: Prevent impulsive eating
2. **Drink a glass of water**: Distinguish thirst from hunger
3. **Check your emotions**: Stressed, bored, or sad?
4. **Find an alternative activity**: Walk, music, phone a friend

**Stress Management**
- **Exercise**: The best stress reliever
- **Meditation**: 10 minutes a day
- **Hobbies**: Find enjoyment outside of food
- **Adequate sleep**: Regulates stress hormones

## Practical Tips

### Mindful Eating When Dining Out
- **Choose your meal in advance**: Avoid impulsive decisions
- **Skip appetizers**: Confirm whether you're truly hungry
- **Focus on conversation**: The people matter more than the food
- **Practice leaving food**: Stop when you feel full

### At Home
- **Use smaller plates**: Create visual fullness
- **Meal prep in advance**: Make healthy choices easier
- **Hide snacks**: Keep them out of sight
- **Food journal**: Identify emotional eating patterns

### At Work
- **Secure lunch time**: At least 20 minutes
- **Eat with colleagues**: Social dining
- **Prepare healthy snacks**: Nuts, fruit
- **Manage stress**: Short breaks during the workday

## Mindful Eating Checklist

### Before the Meal
- [ ] Turn off all devices
- [ ] Check hunger level (1–10)
- [ ] Take 3 deep breaths
- [ ] Express gratitude for the food

### During the Meal
- [ ] Focus on the first bite
- [ ] Chew slowly (20–30 times)
- [ ] Put utensils down and pause
- [ ] Mid-meal fullness check

### After the Meal
- [ ] Evaluate fullness (1–10)
- [ ] Assess satisfaction
- [ ] Check emotional state
- [ ] Estimate time until next hunger

## Long-Term Benefits

### Weight Management
- Natural calorie reduction
- Sustained weight maintenance without rebound
- Healthy eating habits established for life

### Overall Wellbeing
- Reduced stress
- Improved digestive function
- A healthy relationship with food
- Enhanced self-awareness

Mindful eating is **not a temporary diet method — it is a lifelong lifestyle**.

Cultivate the habit of eating slowly, consciously, and with gratitude. Both your body and mind will thrive.
    `,
    author: 'Corevia Mindset',
    publishedDate: '2025-09-09',
  },
  {
    id: 'beginner-workout-plan',
    category: '초보자',
    categoryEn: 'Beginner',
    title: '초보자를 위한 12주 운동 계획',
    titleEn: 'A 12-Week Workout Plan for Beginners',
    summary: '헬스장에 처음 가는 사람들을 위한 단계별 운동 프로그램',
    summaryEn: 'A step-by-step training program for people walking into the gym for the first time.',
    content: `
# 초보자를 위한 12주 운동 계획

헬스장에 처음 가면 어디서부터 시작해야 할지 막막합니다. 체계적인 12주 계획으로 안전하고 효과적으로 시작하세요.

## 1-4주차: 적응 단계

### 목표
- 기본 동작 패턴 학습
- 근육과 관절 적응
- 운동 습관 형성

### 운동 구성
**주 3회 (월, 수, 금)**
- 전신 운동 (Full Body)
- 세트당 12-15회
- 세트 간 휴식 60-90초

**Day 1 & 3: 상체 중심**
1. 푸시업 (무릎) 3x10-12
2. 랫풀다운 3x12-15  
3. 숄더프레스 머신 3x10-12
4. 시티드 로우 3x12-15
5. 플랭크 3x20-30초

**Day 2: 하체 중심**
1. 스쿼트 (체중) 3x10-12
2. 레그프레스 3x12-15
3. 레그컬 3x10-12
4. 카프레이즈 3x15-20
5. 글루트브릿지 3x12-15

## 5-8주차: 발전 단계

### 목표
- 중량 점진적 증가
- 동작 완성도 향상
- 근력 기초 다지기

### 운동 구성
**주 4회 (월, 화, 목, 금)**
- 상체/하체 분할
- 세트당 8-12회
- 세트 간 휴식 90-120초

**상체 (월, 목)**
1. 벤치프레스 3x8-10
2. 바벨로우 3x8-10
3. 숄더프레스 3x10-12
4. 랫풀다운 3x10-12
5. 바이셉컬 3x12-15
6. 트라이셉 푸시다운 3x12-15

**하체 (화, 금)**
1. 스쿼트 3x8-10
2. 루마니안 데드리프트 3x8-10
3. 레그프레스 3x10-12
4. 레그컬 3x12-15
5. 카프레이즈 4x15-20
6. 플랭크 3x30-45초

## 9-12주차: 강화 단계

### 목표
- 근비대 자극 증가
- 운동 다양성 확보
- 개인 약점 보완

### 운동 구성
**주 5회 (월~금)**
- 부위별 분할 훈련
- 세트당 6-12회 (강도별)
- 세트 간 휴식 120-180초

**월요일: 가슴 + 삼두**
1. 벤치프레스 4x6-8
2. 인클라인 덤벨프레스 3x8-10
3. 딥스 3x8-12
4. 케이블플라이 3x10-12
5. 트라이셉딥스 3x10-12
6. 오버헤드익스텐션 3x12-15

**화요일: 등 + 이두**
1. 데드리프트 4x6-8
2. 바벨로우 3x8-10
3. 랫풀다운 3x8-10
4. 시티드로우 3x10-12
5. 바벨컬 3x10-12
6. 해머컬 3x12-15

**수요일: 하체**
1. 스쿼트 4x6-8
2. 루마니안 데드리프트 3x8-10
3. 레그프레스 3x12-15
4. 레그컬 3x12-15
5. 레그익스텐션 3x12-15
6. 카프레이즈 4x15-20

**목요일: 어깨**
1. 숄더프레스 4x8-10
2. 사이드레터럴레이즈 3x10-12
3. 리어델트플라이 3x12-15
4. 업라이트로우 3x10-12
5. 페이스풀 3x12-15
6. 슈러그 3x12-15

**금요일: 팔 + 코어**
1. 클로즈그립벤치프레스 3x8-10
2. 바벨컬 3x8-10
3. 트라이셉딥스 3x10-12
4. 해머컬 3x10-12
5. 플랭크 3x45-60초
6. 러시안트위스트 3x20

## 진행 가이드라인

### 중량 증가 원칙
- **목표 횟수 달성** 시 다음 주에 2.5-5kg 증가
- **폼이 무너지면** 즉시 중량 감소
- **관절 불편감** 느끼면 휴식

### 주의사항
- **워밍업 필수**: 5-10분 가벼운 유산소
- **쿨다운**: 운동 후 스트레칭 10분
- **휴식일 준수**: 연속 3일 이상 운동 금지
- **수면과 영양**: 운동만큼 중요

### 진전 측정
- **운동 일지**: 중량, 횟수, 세트 기록
- **체중 측정**: 주 1회 같은 시간
- **사진 촬영**: 2주마다 같은 조건
- **체감 변화**: 일상 활동 수월함

12주 후에는 중급자 프로그램으로 진행하거나, 개인 목표에 맞는 전문 프로그램을 선택하세요.
    `,
    contentEn: `
# A 12-Week Workout Plan for Beginners

Walking into the gym for the first time can feel overwhelming — where do you even start? Follow this structured 12-week plan to get started safely and effectively.

## Weeks 1–4: Adaptation Phase

### Goals
- Learn fundamental movement patterns
- Allow muscles and joints to adapt
- Build the habit of regular training

### Program Design
**3 days per week (Monday, Wednesday, Friday)**
- Full body training
- 12–15 reps per set
- 60–90 seconds rest between sets

**Day 1 & 3: Upper Body Focus**
1. Knee push-ups 3x10–12
2. Lat pulldown 3x12–15
3. Shoulder press machine 3x10–12
4. Seated cable row 3x12–15
5. Plank 3x20–30 seconds

**Day 2: Lower Body Focus**
1. Bodyweight squat 3x10–12
2. Leg press 3x12–15
3. Leg curl 3x10–12
4. Calf raise 3x15–20
5. Glute bridge 3x12–15

## Weeks 5–8: Development Phase

### Goals
- Gradually increase weights
- Improve movement quality
- Build a strength foundation

### Program Design
**4 days per week (Monday, Tuesday, Thursday, Friday)**
- Upper/lower body split
- 8–12 reps per set
- 90–120 seconds rest between sets

**Upper Body (Monday, Thursday)**
1. Bench press 3x8–10
2. Barbell row 3x8–10
3. Shoulder press 3x10–12
4. Lat pulldown 3x10–12
5. Bicep curl 3x12–15
6. Tricep pushdown 3x12–15

**Lower Body (Tuesday, Friday)**
1. Squat 3x8–10
2. Romanian deadlift 3x8–10
3. Leg press 3x10–12
4. Leg curl 3x12–15
5. Calf raise 4x15–20
6. Plank 3x30–45 seconds

## Weeks 9–12: Intensification Phase

### Goals
- Increase hypertrophy stimulus
- Add exercise variety
- Address individual weak points

### Program Design
**5 days per week (Monday–Friday)**
- Body-part split training
- 6–12 reps per set (varies by intensity)
- 120–180 seconds rest between sets

**Monday: Chest + Triceps**
1. Bench press 4x6–8
2. Incline dumbbell press 3x8–10
3. Dips 3x8–12
4. Cable fly 3x10–12
5. Tricep dips 3x10–12
6. Overhead extension 3x12–15

**Tuesday: Back + Biceps**
1. Deadlift 4x6–8
2. Barbell row 3x8–10
3. Lat pulldown 3x8–10
4. Seated row 3x10–12
5. Barbell curl 3x10–12
6. Hammer curl 3x12–15

**Wednesday: Legs**
1. Squat 4x6–8
2. Romanian deadlift 3x8–10
3. Leg press 3x12–15
4. Leg curl 3x12–15
5. Leg extension 3x12–15
6. Calf raise 4x15–20

**Thursday: Shoulders**
1. Shoulder press 4x8–10
2. Side lateral raise 3x10–12
3. Rear delt fly 3x12–15
4. Upright row 3x10–12
5. Face pull 3x12–15
6. Shrugs 3x12–15

**Friday: Arms + Core**
1. Close-grip bench press 3x8–10
2. Barbell curl 3x8–10
3. Tricep dips 3x10–12
4. Hammer curl 3x10–12
5. Plank 3x45–60 seconds
6. Russian twist 3x20

## Progress Guidelines

### Weight Progression Rules
- **Increase by 2.5–5 kg** the following week when you achieve the target reps
- **Immediately reduce weight** if your form breaks down
- **Rest** when you feel joint discomfort

### Important Notes
- **Warm-up is mandatory**: 5–10 minutes of light cardio
- **Cool-down**: 10 minutes of stretching after training
- **Respect rest days**: Never train the same muscle group 3 days in a row
- **Sleep and nutrition**: Just as important as training

### Tracking Progress
- **Training log**: Record weights, reps, and sets
- **Weekly weigh-in**: Same time, same conditions
- **Progress photos**: Every 2 weeks under identical conditions
- **How you feel**: Notice when daily activities feel easier

After 12 weeks, move on to an intermediate program or choose a specialized program aligned with your personal goals.
    `,
    author: 'Corevia Program',
    publishedDate: '2025-09-08',
  },
  {
    id: 'home-workout-guide',
    category: '운동',
    categoryEn: 'Exercise',
    title: '홈트레이닝 완전 가이드',
    titleEn: 'The Complete Home Workout Guide',
    summary: '집에서도 충분히 효과적인 운동이 가능합니다. 장비 없이 할 수 있는 운동들',
    summaryEn: 'Effective workouts are absolutely possible at home. Exercises you can do without any equipment.',
    content: `
# 홈트레이닝 완전 가이드

헬스장에 갈 수 없는 상황이라도 걱정하지 마세요. 집에서도 충분히 효과적인 운동이 가능합니다.

## 홈트의 장점

### 편의성
- **시간 절약**: 이동 시간 불필요
- **24시간**: 언제든 운동 가능
- **프라이버시**: 남의 시선 신경 안 써도 됨
- **비용 절약**: 헬스장 회비 불필요

### 지속성
- **날씨 무관**: 비, 눈와도 운동 가능
- **의상 자유**: 편한 옷으로 운동
- **위생적**: 개인 공간에서 안전

## 장비 없는 전신 운동

### 상체 운동

**푸시업 변형**
1. **일반 푸시업**: 가슴, 어깨, 삼두
2. **다이아몬드 푸시업**: 삼두 집중
3. **와이드 푸시업**: 가슴 외측
4. **인클라인 푸시업**: 초보자용 (의자 이용)
5. **디클라인 푸시업**: 고급자용 (발 높이)

**등 운동**
1. **슈퍼맨**: 척추기립근 강화
2. **리버스 플라이**: 후면 어깨
3. **플랭크 로우**: 코어와 등 동시
4. **월 핸드스탠드**: 어깨와 등

### 하체 운동

**스쿼트 변형**
1. **에어 스쿼트**: 기본 하체 운동
2. **점프 스쿼트**: 폭발력 향상
3. **싱글레그 스쿼트**: 균형과 근력
4. **코삭 스쿼트**: 고관절 가동성

**런지 변형**
1. **포워드 런지**: 대퇴사두근 중심
2. **리버스 런지**: 둔근 중심
3. **사이드 런지**: 내전근 강화
4. **워킹 런지**: 기능적 움직임

### 코어 운동

**플랭크 변형**
1. **기본 플랭크**: 30초-2분
2. **사이드 플랭크**: 옆구리 강화
3. **플랭크 업다운**: 동적 코어
4. **마운틴 클라이머**: 유산소 + 코어

**복근 운동**
1. **크런치**: 상복부
2. **레그레이즈**: 하복부
3. **러시안 트위스트**: 옆구리
4. **데드버그**: 코어 안정성

## 최소 장비로 효과 극대화

### 저항밴드 활용
**상체**
- 밴드 풀어파트 (후면 어깨)
- 밴드 로우 (등)
- 밴드 프레스 (가슴)

**하체**
- 밴드 스쿼트 (둔근 활성화)
- 밴드 사이드스텝 (중둔근)
- 밴드 킥백 (둔근)

### 덤벨 1-2개 활용
**전신 운동**
- 덤벨 스러스터 (전신)
- 덤벨 스윙 (후면사슬)
- 덤벨 컴플렉스 (연속 동작)

## 홈트 프로그램 예시

### 초보자 (주 3회, 30분)
**Day 1: 상체**
1. 푸시업 3x8-12
2. 파이크 푸시업 3x5-8
3. 플랭크 3x30초
4. 마운틴 클라이머 3x30초

**Day 2: 하체**
1. 스쿼트 3x12-15
2. 런지 3x10 (각 다리)
3. 글루트 브릿지 3x12-15
4. 월시트 3x30초

**Day 3: 전신**
1. 버피 3x5-8
2. 플랭크 투 푸시업 3x5-8
3. 점프 스쿼트 3x8-10
4. 마운틴 클라이머 3x30초

### 중급자 (주 4-5회, 45분)
**상하체 분할 + HIIT 추가**

### 고급자 (주 5-6회, 60분)
**부위별 분할 + 고강도 운동**

## 홈트 성공 팁

### 환경 조성
- **운동 공간 확보**: 2m x 2m 정도
- **매트 준비**: 바닥 보호 및 안전
- **거울 설치**: 자세 확인용
- **음악 준비**: 동기부여용

### 동기부여 유지
- **운동 시간 고정**: 매일 같은 시간
- **운동복 착용**: 의식적 준비
- **목표 설정**: 주간/월간 목표
- **기록 유지**: 운동 일지 작성

### 한계 극복
- **강도 조절**: 속도, 각도, 시간 변화
- **운동 조합**: 서킷 트레이닝
- **휴식 조절**: 짧은 휴식으로 강도 증가
- **창의적 변형**: 새로운 동작 시도

## 헬스장 vs 홈트 비교

### 홈트의 한계
- **중량 제한**: 점진적 과부하 어려움
- **장비 부족**: 운동 다양성 제한
- **동기부여**: 혼자 하는 어려움

### 홈트의 극복법
- **고반복**: 근지구력과 근비대 동시
- **시간 조절**: TUT (Time Under Tension) 활용
- **복합 운동**: 여러 근육 동시 자극
- **온라인 활용**: 유튜브, 앱 활용

## 홈트 vs 헬스장 전환

### 홈트 → 헬스장
- **기본기 완성**: 홈트로 기초 체력 확보
- **자신감**: 기본 동작 숙지 후 이동
- **목표 명확**: 더 큰 목표 설정

### 헬스장 → 홈트
- **유지 목적**: 기존 근력 유지
- **보조 운동**: 헬스장 운동 보완
- **휴식일 활용**: 가벼운 활동

홈트도 충분히 효과적입니다. 꾸준함이 장소보다 중요합니다.
    `,
    contentEn: `
# The Complete Home Workout Guide

Don't worry if you can't make it to the gym. Effective workouts are absolutely possible at home.

## Advantages of Home Workouts

### Convenience
- **Time savings**: No commute required
- **24/7 access**: Train whenever you want
- **Privacy**: No one watching you
- **Cost savings**: No gym membership needed

### Consistency
- **Weather-proof**: Rain or snow won't stop you
- **Dress code**: Work out in whatever feels comfortable
- **Hygienic**: Your personal space is safe and clean

## Full-Body Workouts Without Equipment

### Upper Body

**Push-Up Variations**
1. **Standard push-up**: Chest, shoulders, triceps
2. **Diamond push-up**: Triceps focus
3. **Wide push-up**: Outer chest focus
4. **Incline push-up**: Beginner-friendly (using a chair)
5. **Decline push-up**: Advanced (feet elevated)

**Back Exercises**
1. **Superman**: Erector spinae strengthening
2. **Reverse fly**: Rear deltoids
3. **Plank row**: Core and back simultaneously
4. **Wall handstand**: Shoulders and upper back

### Lower Body

**Squat Variations**
1. **Air squat**: Foundational lower body exercise
2. **Jump squat**: Develops explosive power
3. **Single-leg squat**: Balance and strength
4. **Cossack squat**: Hip mobility and inner thigh

**Lunge Variations**
1. **Forward lunge**: Quadriceps emphasis
2. **Reverse lunge**: Glute emphasis
3. **Side lunge**: Adductor strengthening
4. **Walking lunge**: Functional movement

### Core

**Plank Variations**
1. **Standard plank**: 30 seconds–2 minutes
2. **Side plank**: Oblique strengthening
3. **Plank up-down**: Dynamic core
4. **Mountain climber**: Cardio + core

**Abdominal Exercises**
1. **Crunch**: Upper abs
2. **Leg raise**: Lower abs
3. **Russian twist**: Obliques
4. **Dead bug**: Core stability

## Maximizing Results with Minimal Equipment

### Resistance Bands

**Upper Body**
- Band pull-apart (rear delts)
- Band row (back)
- Band press (chest)

**Lower Body**
- Band squat (glute activation)
- Band side step (gluteus medius)
- Band kickback (glutes)

### 1–2 Dumbbells

**Full-Body Exercises**
- Dumbbell thruster (full body)
- Dumbbell swing (posterior chain)
- Dumbbell complex (continuous movements)

## Sample Home Workout Programs

### Beginner (3x/week, 30 minutes)
**Day 1: Upper Body**
1. Push-ups 3x8–12
2. Pike push-ups 3x5–8
3. Plank 3x30 seconds
4. Mountain climbers 3x30 seconds

**Day 2: Lower Body**
1. Squat 3x12–15
2. Lunge 3x10 (each leg)
3. Glute bridge 3x12–15
4. Wall sit 3x30 seconds

**Day 3: Full Body**
1. Burpee 3x5–8
2. Plank to push-up 3x5–8
3. Jump squat 3x8–10
4. Mountain climbers 3x30 seconds

### Intermediate (4–5x/week, 45 minutes)
**Upper/lower split + HIIT added**

### Advanced (5–6x/week, 60 minutes)
**Body-part split + high-intensity training**

## Home Workout Success Tips

### Setting Up Your Space
- **Secure a workout area**: Approximately 2m x 2m
- **Get a mat**: Protects the floor and ensures safety
- **Install a mirror**: For form checks
- **Set up music**: For motivation

### Maintaining Motivation
- **Fix a training time**: Work out at the same time every day
- **Put on workout clothes**: A conscious preparation ritual
- **Set goals**: Weekly and monthly targets
- **Keep records**: Maintain a training journal

### Overcoming Limitations
- **Adjust intensity**: Change speed, angle, or duration
- **Combine exercises**: Circuit training style
- **Control rest time**: Shorter rests for higher intensity
- **Creative variations**: Explore new movements

## Gym vs. Home Workout

### Limitations of Home Training
- **Weight ceiling**: Progressive overload is harder
- **Limited equipment**: Restricts exercise variety
- **Motivation**: The challenge of training solo

### How to Overcome Home Limitations
- **High rep ranges**: Build muscular endurance and hypertrophy simultaneously
- **Time under tension (TUT)**: Make lighter exercises harder
- **Compound movements**: Stimulate multiple muscles at once
- **Use online resources**: YouTube, apps, virtual classes

## Transitioning Between Home and Gym

### Home Workout → Gym
- **Build a foundation**: Use home training to develop base fitness
- **Build confidence**: Learn the basics before stepping in
- **Set bigger goals**: A more ambitious target motivates the switch

### Gym → Home Workout
- **Maintenance purpose**: Preserve existing strength
- **Supplementary training**: Complement gym sessions
- **Rest day activity**: Light movement on off days

Home workouts are fully effective. Consistency matters more than location.
    `,
    author: 'Corevia Home',
    publishedDate: '2025-09-07',
  },
  {
    id: 'nutrition-timing',
    category: '영양',
    categoryEn: 'Nutrition',
    title: '운동 전후 영양 섭취 타이밍',
    titleEn: 'Pre- and Post-Workout Nutrition Timing',
    summary: '언제 무엇을 먹어야 운동 효과를 극대화할 수 있을까요?',
    summaryEn: 'What should you eat, and when, to maximize your training results?',
    content: `
# 운동 전후 영양 섭취 타이밍

운동 효과를 극대화하려면 **무엇을 먹느냐**만큼 **언제 먹느냐**도 중요합니다.

## 운동 전 영양 전략

### 운동 2-3시간 전 (정식 식사)
**목표**: 에너지 저장 및 소화 완료

**추천 식단**:
- **탄수화물**: 현미밥, 고구마, 오트밀
- **단백질**: 닭가슴살, 생선, 계란
- **지방**: 적당량 (견과류, 아보카도)
- **수분**: 500ml 이상

**피해야 할 것**:
- 기름진 음식 (소화 부담)
- 섬유질 과다 (복부 불편)
- 과도한 양 (소화 불량)

### 운동 30분-1시간 전 (간식)
**목표**: 즉시 사용 가능한 에너지 공급

**추천 간식**:
- 바나나 + 땅콩버터
- 오트밀 + 베리
- 그리스 요거트 + 꿀
- 토스트 + 잼

**피해야 할 것**:
- 지방 많은 음식
- 단백질 과다
- 새로운 음식 (알레르기 위험)

### 운동 직전 (15분 전)
**목표**: 혈당 유지 및 수분 보충

**추천**:
- 물 200-300ml
- 스포츠 드링크 (1시간 이상 운동 시)
- 바나나 반 개
- 대추 2-3개

## 운동 중 영양 관리

### 수분 보충
- **15-20분마다** 150-200ml
- **갈증 느끼기 전**에 마시기
- **전해질 보충**: 1시간 이상 운동 시

### 에너지 보충 (장시간 운동)
- **90분 이상** 운동 시 필요
- **스포츠 드링크**: 6-8% 탄수화물
- **바나나, 대추**: 자연 당분

## 운동 후 영양 전략

### 운동 직후 (30분 이내)
**목표**: 근육 회복 시작 및 글리코겐 재충전

**골든 비율**: 탄수화물 3-4 : 단백질 1

**추천 조합**:
- 초콜릿 우유 (완벽한 비율)
- 바나나 + 웨이 프로틴
- 토스트 + 계란
- 고구마 + 닭가슴살

### 운동 후 2시간 이내 (정식 식사)
**목표**: 완전한 회복 및 근합성 최적화

**식단 구성**:
- **단백질**: 체중 × 0.3-0.5g
- **탄수화물**: 체중 × 0.5-1.0g  
- **지방**: 적당량
- **항산화**: 베리, 녹색 채소

## 목표별 영양 타이밍

### 근비대 목표
**운동 전**:
- 충분한 탄수화물 (에너지 확보)
- 적당한 단백질 (근분해 방지)

**운동 후**:
- 빠른 탄수화물 + 단백질
- 칼로리 잉여 유지

### 다이어트 목표
**운동 전**:
- 최소한의 탄수화물 (에너지만)
- 카페인 활용 (지방 연소)

**운동 후**:
- 단백질 우선 (근손실 방지)
- 탄수화물 조절 (칼로리 적자 유지)

### 지구력 목표
**운동 전**:
- 충분한 탄수화물 (글리코겐 저장)
- 수분 충전

**운동 중**:
- 지속적 에너지 공급
- 전해질 보충

**운동 후**:
- 빠른 회복 (탄수화물 우선)

## 실전 적용 예시

### 아침 운동 (6-7시)
**전날 밤**: 충분한 수면 + 수분
**기상 후**: 물 + 바나나 반 개
**운동 후**: 단백질 쉐이크 + 아침 식사

### 점심 운동 (12-1시)
**운동 전**: 가벼운 간식 (11시)
**운동 후**: 정상적인 점심 식사
**오후**: 충분한 수분 유지

### 저녁 운동 (6-8시)
**운동 전**: 오후 간식으로 에너지 확보
**운동 후**: 단백질 중심 저녁 식사
**잠들기 전**: 카제인 또는 그리스 요거트

## 주의사항

### 개인차 고려
- **소화 속도**: 개인마다 다름
- **선호도**: 맞지 않는 음식 피하기
- **알레르기**: 새로운 음식 주의
- **컨디션**: 몸 상태에 따라 조절

### 실험과 적응
- **2주 시도**: 새로운 타이밍 적응 기간
- **기록 유지**: 컨디션 변화 관찰
- **점진적 조정**: 급격한 변화 피하기

기억하세요. 영양 타이밍은 **운동과 식단의 기본**이 갖춰진 후에 고려할 세부사항입니다.

기본기가 중요합니다.
    `,
    contentEn: `
# Pre- and Post-Workout Nutrition Timing

To maximize training results, **when you eat** matters just as much as **what you eat**.

## Pre-Workout Nutrition Strategy

### 2–3 Hours Before (Full Meal)
**Goal**: Store energy and complete digestion

**Recommended foods**:
- **Carbohydrates**: Brown rice, sweet potato, oatmeal
- **Protein**: Chicken breast, fish, eggs
- **Fat**: Moderate amounts (nuts, avocado)
- **Fluids**: 500 ml or more

**What to avoid**:
- Fatty foods (digestive burden)
- Excessive fiber (abdominal discomfort)
- Eating too much (indigestion)

### 30 Minutes to 1 Hour Before (Snack)
**Goal**: Provide immediately usable energy

**Recommended snacks**:
- Banana + peanut butter
- Oatmeal + berries
- Greek yogurt + honey
- Toast + jam

**What to avoid**:
- High-fat foods
- Excessive protein
- Unfamiliar foods (allergy risk)

### 15 Minutes Before Training
**Goal**: Maintain blood glucose and hydrate

**Recommended**:
- 200–300 ml of water
- Sports drink (for sessions over 1 hour)
- Half a banana
- 2–3 dates (jujubes)

## Mid-Workout Nutrition Management

### Fluid Replacement
- **150–200 ml every 15–20 minutes**
- Drink **before you feel thirsty**
- **Electrolyte replenishment**: For sessions over 1 hour

### Energy Replenishment (Extended Sessions)
- Necessary for **sessions over 90 minutes**
- **Sports drink**: 6–8% carbohydrate solution
- **Banana or dates**: Natural sugars

## Post-Workout Nutrition Strategy

### Within 30 Minutes After Training
**Goal**: Initiate muscle recovery and replenish glycogen

**Golden ratio**: Carbohydrates 3–4 : Protein 1

**Recommended combinations**:
- Chocolate milk (near-perfect ratio)
- Banana + whey protein
- Toast + eggs
- Sweet potato + chicken breast

### Within 2 Hours After Training (Full Meal)
**Goal**: Complete recovery and optimize muscle protein synthesis

**Meal composition**:
- **Protein**: Bodyweight × 0.3–0.5 g
- **Carbohydrates**: Bodyweight × 0.5–1.0 g
- **Fat**: Moderate amount
- **Antioxidants**: Berries, leafy greens

## Goal-Specific Nutrition Timing

### For Muscle Building
**Pre-workout**:
- Ample carbohydrates (secure energy)
- Adequate protein (prevent muscle breakdown)

**Post-workout**:
- Fast-digesting carbs + protein
- Maintain caloric surplus

### For Fat Loss
**Pre-workout**:
- Minimal carbohydrates (energy only)
- Utilize caffeine (fat oxidation)

**Post-workout**:
- Protein first (prevent muscle loss)
- Moderate carbohydrates (maintain caloric deficit)

### For Endurance
**Pre-workout**:
- Ample carbohydrates (fill glycogen stores)
- Hydrate well

**During workout**:
- Continuous energy supply
- Electrolyte replenishment

**Post-workout**:
- Rapid recovery (carbohydrates first)

## Real-World Examples

### Morning Training (6–7 AM)
**Night before**: Adequate sleep + hydration
**Upon waking**: Water + half a banana
**After training**: Protein shake + breakfast

### Lunchtime Training (12–1 PM)
**Pre-workout**: Light snack around 11 AM
**After training**: Normal lunch
**Afternoon**: Maintain adequate fluid intake

### Evening Training (6–8 PM)
**Pre-workout**: Afternoon snack to secure energy
**After training**: Protein-centered dinner
**Before bed**: Casein or Greek yogurt

## Important Notes

### Individual Variation
- **Digestion rate**: Varies from person to person
- **Preferences**: Avoid foods that don't agree with you
- **Allergies**: Be cautious with unfamiliar foods
- **Current condition**: Adjust based on how your body feels

### Experimentation and Adaptation
- **2-week trial**: Allow time to adapt to a new timing approach
- **Keep records**: Observe changes in how you feel
- **Gradual adjustments**: Avoid drastic changes

Remember — nutrition timing is a **fine detail to consider after the fundamentals of training and diet are in place**.

The basics always come first.
    `,
    author: 'Corevia Nutrition',
    publishedDate: '2025-09-06',
  },
  {
    id: 'female-fitness-guide',
    category: '운동',
    categoryEn: 'Exercise',
    title: '여성을 위한 피트니스 가이드',
    titleEn: "A Fitness Guide for Women",
    summary: '여성의 생리적 특성을 고려한 운동과 영양 전략',
    summaryEn: "Exercise and nutrition strategies that account for women's unique physiological characteristics.",
    content: `
# 여성을 위한 피트니스 가이드

여성의 몸은 남성과 다른 생리적 특성을 가지고 있습니다. 이를 이해하고 활용하면 더 효과적인 운동이 가능합니다.

## 여성의 생리적 특성

### 호르몬 차이
- **테스토스테론**: 남성의 1/10-1/15 수준
- **에스트로겐**: 지방 저장 촉진, 인대 유연성 증가
- **프로게스테론**: 기초대사량 변화

### 신체 구조 차이
- **근육량**: 남성의 60-80% 수준
- **체지방률**: 남성보다 5-10% 높음
- **골밀도**: 낮아서 골다공증 위험
- **관절**: 더 유연하지만 불안정

## 여성 운동의 특별 고려사항

### 근력 운동의 중요성
**오해**: "근력 운동하면 우락부락해진다"
**진실**: 테스토스테론 부족으로 **거의 불가능**

**여성 근력 운동의 이점**:
- **기초대사량 증가**: 다이어트 효과
- **골밀도 향상**: 골다공증 예방
- **기능적 근력**: 일상 활동 수월
- **바디라인**: 탄탄하고 건강한 몸매

### 추천 운동 구성
**하체 중심** (여성의 장점 활용)
- 스쿼트, 데드리프트, 런지
- 둔근 강화 운동
- 하체 근력이 상체보다 강함

**코어 강화** (여성 특화)
- 골반저근 강화
- 복직근 분리 예방
- 허리 건강 유지

## 생리 주기와 운동

### 생리 주기별 특성

**월경기 (1-5일)**
- **컨디션**: 피로감, 복부 불편
- **운동**: 가벼운 유산소, 스트레칭
- **영양**: 철분 보충, 수분 충분히

**난포기 (6-14일)**
- **컨디션**: 에너지 증가, 컨디션 좋음
- **운동**: 고강도 근력 운동 최적
- **영양**: 탄수화물 활용 능력 높음

**배란기 (14-16일)**
- **컨디션**: 최고 컨디션
- **운동**: 1RM 테스트, 고강도 훈련
- **영양**: 단백질 합성 효율 높음

**황체기 (17-28일)**
- **컨디션**: 점진적 저하, PMS
- **운동**: 중강도, 회복 중심
- **영양**: 지방 연소 효율 높음

### 주기에 맞는 운동 계획
**1-2주**: 고강도 근력 + 적당한 유산소
**3-4주**: 중강도 근력 + 많은 유산소

## 여성 특화 영양 전략

### 철분 관리
- **필요량**: 남성의 2배 (18mg vs 8mg)
- **흡수 촉진**: 비타민 C와 함께
- **방해 요소**: 카페인, 칼슘과 분리

### 칼슘과 비타민 D
- **골건강**: 특히 30대 이후 중요
- **근기능**: 칼슘 부족 시 근경련
- **추천량**: 칼슘 1000mg, 비타민 D 1000IU

### 엽산과 B비타민
- **에너지 대사**: B군 비타민 중요
- **가임기**: 엽산 400-800mcg
- **스트레스**: B군으로 신경계 지원

## 임신 전후 운동

### 임신 준비기
- **코어 강화**: 임신 중 허리 보호
- **골밀도**: 칼슘 저장 최대화
- **심폐지구력**: 임신 중 체력 확보

### 임신 중 (의료진 상담 필수)
- **저강도 유산소**: 걷기, 수영
- **근력 유지**: 가벼운 중량
- **코어 주의**: 복직근 분리 방지

### 산후 회복
- **점진적 복귀**: 6주 후부터
- **코어 재활**: 복직근 분리 회복
- **골반저근**: 요실금 예방

## 여성 운동 성공 팁

### 현실적 목표
- **체중**: 근육 증가로 체중 증가 가능
- **체지방률**: 18-25% 건강 범위
- **근력**: 개인 기록 갱신에 집중

### 사회적 지지
- **운동 파트너**: 같은 목표 여성과
- **온라인 커뮤니티**: 정보 공유
- **가족 지지**: 운동 시간 확보

### 지속가능성
- **완벽주의 버리기**: 80% 실천도 성공
- **라이프스타일**: 평생 할 수 있는 운동
- **즐거움**: 스트레스가 아닌 즐거움

## 여성 운동 Q&A

**Q: 근력운동하면 살이 안 빠져요**
A: 근육 증가로 체중은 늘 수 있지만, 체지방은 감소합니다. 체중보다 바디라인과 체지방률에 집중하세요.

**Q: 생리 중에도 운동해야 하나요?**
A: 컨디션이 괜찮다면 가벼운 운동은 오히려 도움이 됩니다. 무리하지 말고 몸의 신호를 들으세요.

**Q: 단백질을 많이 먹으면 살찔까요?**
A: 단백질은 포만감이 높고 열효과가 커서 오히려 다이어트에 도움됩니다. 걱정하지 마세요.

여성도 충분히 강해질 수 있습니다. 자신의 몸을 이해하고 존중하며 운동하세요.
    `,
    contentEn: `
# A Fitness Guide for Women

The female body has distinct physiological characteristics compared to the male body. Understanding and working with these differences leads to more effective training.

## Female Physiological Characteristics

### Hormonal Differences
- **Testosterone**: 1/10 to 1/15 of male levels
- **Estrogen**: Promotes fat storage, increases ligament flexibility
- **Progesterone**: Causes fluctuations in basal metabolic rate

### Structural Differences
- **Muscle mass**: Approximately 60–80% of male levels
- **Body fat percentage**: 5–10% higher than men on average
- **Bone density**: Lower, raising the risk of osteoporosis
- **Joints**: More flexible but also less stable

## Special Considerations for Women's Training

### The Importance of Strength Training
**Myth**: "Lifting weights will make me bulky"
**Truth**: With low testosterone levels, significant bulk is **virtually impossible**

**Benefits of strength training for women**:
- **Increased BMR**: More effective fat loss
- **Improved bone density**: Prevention of osteoporosis
- **Functional strength**: Easier daily life
- **Body composition**: A toned, healthy physique

### Recommended Training Structure
**Lower body focus** (leveraging women's natural strengths)
- Squats, deadlifts, lunges
- Glute-specific exercises
- Women tend to have proportionally stronger lower bodies

**Core strengthening** (women-specific focus)
- Pelvic floor strengthening
- Prevention of diastasis recti
- Lower back health

## The Menstrual Cycle and Training

### Characteristics by Cycle Phase

**Menstruation (Days 1–5)**
- **How you feel**: Fatigue, abdominal discomfort
- **Training**: Light cardio, stretching
- **Nutrition**: Iron supplementation, stay well hydrated

**Follicular Phase (Days 6–14)**
- **How you feel**: Rising energy, good condition
- **Training**: Optimal for high-intensity strength work
- **Nutrition**: Better carbohydrate utilization capacity

**Ovulation (Days 14–16)**
- **How you feel**: Peak condition
- **Training**: 1RM testing, high-intensity sessions
- **Nutrition**: High protein synthesis efficiency

**Luteal Phase (Days 17–28)**
- **How you feel**: Gradual decline, PMS symptoms
- **Training**: Moderate intensity, recovery-focused
- **Nutrition**: Higher fat-burning efficiency

### Cycle-Aligned Training Plan
**Weeks 1–2**: High-intensity strength + moderate cardio
**Weeks 3–4**: Moderate-intensity strength + more cardio

## Women-Specific Nutrition Strategy

### Iron Management
- **Requirement**: Twice that of men (18 mg vs. 8 mg)
- **Enhance absorption**: Take with Vitamin C
- **Inhibitors**: Separate from caffeine and calcium

### Calcium and Vitamin D
- **Bone health**: Especially critical after age 30
- **Muscle function**: Calcium deficiency can cause cramps
- **Recommended**: 1,000 mg calcium, 1,000 IU Vitamin D

### Folate and B Vitamins
- **Energy metabolism**: B-group vitamins are important
- **Childbearing age**: 400–800 mcg of folate
- **Stress**: B-group supports the nervous system

## Pre- and Post-Pregnancy Exercise

### Before Pregnancy
- **Core strengthening**: Protect the lower back during pregnancy
- **Bone density**: Maximize calcium stores
- **Cardiovascular fitness**: Build stamina for pregnancy

### During Pregnancy (Medical consultation required)
- **Low-intensity cardio**: Walking, swimming
- **Maintain strength**: With lighter weights
- **Core caution**: Prevent diastasis recti

### Postpartum Recovery
- **Gradual return**: Starting after 6 weeks
- **Core rehabilitation**: Recovery from diastasis recti
- **Pelvic floor**: Prevention of urinary incontinence

## Tips for Women's Fitness Success

### Realistic Expectations
- **Body weight**: May increase as muscle is gained
- **Body fat %**: 18–25% is a healthy range
- **Strength**: Focus on personal records

### Social Support
- **Training partner**: Someone with similar goals
- **Online communities**: Share information and encouragement
- **Family support**: Carve out dedicated training time

### Sustainability
- **Drop perfectionism**: 80% adherence still equals success
- **Lifestyle approach**: Exercise you can do for life
- **Enjoyment**: Something that brings joy, not stress

## Women's Fitness Q&A

**Q: I'm not losing weight even though I'm strength training.**
A: Gaining muscle may cause the scale to rise, but body fat is decreasing. Focus on body composition and how your clothes fit rather than the number on the scale.

**Q: Should I exercise during my period?**
A: If you're feeling okay, light exercise can actually help. Listen to your body's signals and don't push too hard.

**Q: Will eating a lot of protein make me gain weight?**
A: Protein has a high satiety factor and a strong thermic effect, meaning it actually supports fat loss. Don't worry about it.

Women are fully capable of becoming strong. Train with an understanding and respect for your own body.
    `,
    author: 'Corevia Women',
    publishedDate: '2025-09-05',
  },
  // 부위별 운동 - 스쿼트
  {
    id: 'squat-master-guide',
    category: '부위별 운동',
    categoryEn: 'Body Part Training',
    title: '스쿼트 마스터 가이드: 하체의 왕',
    titleEn: 'The Squat Master Guide: King of Lower Body Training',
    summary: '올바른 스쿼트 자세부터 고급 변형까지, 하체 근력의 핵심 운동',
    summaryEn: 'From proper squat technique to advanced variations — the definitive guide to the king of lower body exercises.',
    content: `
# 스쿼트 마스터 가이드: 하체의 왕

스쿼트는 **하체 운동의 왕**이라 불립니다. 올바르게 하면 전신 근력 향상의 핵심이 되지만, 잘못하면 부상의 원인이 됩니다.

## 스쿼트가 특별한 이유

### 다관절 복합 운동
- **대퇴사두근**: 무릎 신전
- **둔근**: 고관절 신전  
- **햄스트링**: 고관절 굴곡 지원
- **코어**: 척추 안정성
- **종아리**: 발목 안정성

### 기능적 움직임
- **일상 생활**: 앉기, 일어서기의 기본
- **스포츠**: 점프, 방향 전환의 기초
- **노화 방지**: 하체 근력 유지

## 완벽한 스쿼트 자세

### 1. 시작 자세
- **발 위치**: 어깨너비, 발끝 15-30도 바깥
- **바벨 위치**: 승모근 위쪽 (하이바) 또는 후면 어깨 (로우바)
- **그립**: 어깨너비보다 넓게, 좌우 대칭
- **코어**: 복압 높여 척추 중립

### 2. 하강 동작
- **고관절부터**: 엉덩이를 뒤로 빼며 시작
- **무릎 방향**: 발끝과 같은 방향으로
- **깊이**: 고관절이 무릎보다 낮게
- **상체**: 가슴 펴고 등 곧게

### 3. 상승 동작
- **발바닥 전체**: 균등하게 힘 전달
- **무릎과 고관절**: 동시에 신전
- **시선**: 정면 또는 살짝 위
- **호흡**: 올라오며 내쉬기

## 흔한 실수와 교정법

### 무릎이 안쪽으로 모임 (Knee Valgus)
**원인**: 둔근 약화, 내전근 긴장
**교정**: 
- 밴드 스쿼트로 외전근 강화
- 폼롤링으로 내전근 이완
- 발끝 방향 의식하며 연습

### 발뒤꿈치 들림
**원인**: 발목 가동성 부족, 종아리 경직
**교정**:
- 종아리 스트레칭 (벽 푸시업)
- 발목 가동성 운동
- 뒤꿈치 패드 임시 사용

### 상체 앞으로 기울어짐
**원인**: 코어 약화, 흉추 가동성 부족
**교정**:
- 코어 강화 운동 (플랭크, 데드버그)
- 흉추 모빌리티 운동
- 프론트 스쿼트 연습

### 깊이 부족
**원인**: 고관절 가동성 부족, 두려움
**교정**:
- 고관절 스트레칭 (90/90)
- 박스 스쿼트로 깊이 연습
- 점진적 깊이 증가

## 스쿼트 변형 운동

### 초보자용
**고블릿 스쿼트**
- 덤벨이나 케틀벨 가슴에 안고
- 자세 교정에 최적
- 균형감 향상

**박스 스쿼트**
- 박스에 앉았다 일어서기
- 깊이 연습에 좋음
- 안전성 확보

### 중급자용
**프론트 스쿼트**
- 바벨을 앞쪽에 위치
- 코어 강화 효과 극대
- 상체 자세 교정

**불가리안 스플릿 스쿼트**
- 한 발을 뒤쪽 벤치에
- 단일 다리 근력 향상
- 좌우 불균형 교정

### 고급자용
**오버헤드 스쿼트**
- 바벨을 머리 위로
- 전신 안정성 요구
- 가동성 극대화

**점프 스쿼트**
- 폭발적 파워 개발
- 플라이오메트릭 효과
- 운동능력 향상

## 프로그래밍 가이드

### 초보자 (0-6개월)
- **빈도**: 주 2-3회
- **세트**: 3-4세트
- **횟수**: 8-12회
- **중량**: 체중 → 체중의 0.5배

### 중급자 (6개월-2년)
- **빈도**: 주 2-3회
- **세트**: 4-5세트  
- **횟수**: 5-8회 (근력), 8-12회 (근비대)
- **중량**: 체중의 0.5-1.5배

### 고급자 (2년+)
- **빈도**: 주 2-4회
- **세트**: 5-8세트
- **횟수**: 1-5회 (근력), 6-12회 (근비대)
- **중량**: 체중의 1.5배 이상

## 스쿼트 보조 운동

### 약점 보완
**둔근 강화**: 힙 스러스트, 클램셸
**대퇴사두근**: 레그 프레스, 레그 익스텐션
**햄스트링**: 루마니안 데드리프트, 레그 컬
**종아리**: 카프 레이즈

### 가동성 향상
**고관절**: 90/90 스트레치, 피geon 포즈
**발목**: 벽 스트레치, 카프 스트레치
**흉추**: 캣-카우, 흉추 익스텐션

## 안전 수칙

### 워밍업 (10-15분)
1. **일반적 워밍업**: 5분 가벼운 유산소
2. **동적 스트레칭**: 레그 스윙, 하이니
3. **특화 워밍업**: 체중 스쿼트 10-15회
4. **점진적 로딩**: 빈 바 → 목표 중량의 50% → 80%

### 세이프티 설정
- **세이프티 바**: 최저점보다 5cm 아래
- **스포터**: 고중량 시 필수
- **탈출 경로**: 바벨을 뒤로 떨어뜨리기

### 부상 예방
- **점진적 증가**: 주 2.5-5kg씩
- **폼 우선**: 중량보다 자세
- **충분한 휴식**: 48-72시간 간격
- **컨디션 체크**: 관절 상태 확인

스쿼트는 평생 함께할 운동입니다. 완벽한 자세를 만드는 데 시간을 투자하세요. 그 투자는 반드시 보답받을 것입니다.
    `,
    contentEn: `
# The Squat Master Guide: King of Lower Body Training

The squat is called **the king of lower body exercises** for good reason. Done correctly, it is the cornerstone of full-body strength development; done incorrectly, it becomes a source of injury.

## Why the Squat Is Special

### Multi-Joint Compound Movement
- **Quadriceps**: Knee extension
- **Glutes**: Hip extension
- **Hamstrings**: Support hip flexion
- **Core**: Spinal stability
- **Calves**: Ankle stability

### Functional Movement
- **Daily life**: The foundation of sitting down and standing up
- **Sports**: The basis of jumping and change of direction
- **Anti-aging**: Preserves lower body strength over time

## The Perfect Squat Technique

### 1. Starting Position
- **Foot placement**: Shoulder-width apart, toes 15–30 degrees outward
- **Bar position**: Upper trapezius (high bar) or rear delts (low bar)
- **Grip**: Wider than shoulder width, symmetrical left and right
- **Core**: Brace the abs to maintain a neutral spine

### 2. Descent
- **Hips first**: Begin by pushing your hips back
- **Knee direction**: Track in line with the toes
- **Depth**: Hip crease below the knee
- **Upper body**: Chest up, back flat

### 3. Ascent
- **Full foot contact**: Push evenly through the entire foot
- **Knees and hips**: Extend simultaneously
- **Gaze**: Forward or slightly upward
- **Breathing**: Exhale as you rise

## Common Mistakes and Corrections

### Knee Valgus (Knees Caving Inward)
**Cause**: Weak glutes, tight adductors
**Correction**:
- Band squats to strengthen the abductors
- Foam roll the adductors to release tightness
- Practice consciously tracking knees over toes

### Heel Rise
**Cause**: Limited ankle mobility, tight calves
**Correction**:
- Calf stretching (wall push)
- Ankle mobility drills
- Temporarily use heel elevation

### Excessive Forward Lean
**Cause**: Weak core, limited thoracic mobility
**Correction**:
- Core strengthening (plank, dead bug)
- Thoracic mobility exercises
- Practice front squats

### Insufficient Depth
**Cause**: Limited hip mobility, fear
**Correction**:
- Hip stretching (90/90 stretch)
- Box squats to practice depth
- Gradually increase depth over time

## Squat Variations

### Beginner
**Goblet Squat**
- Hold a dumbbell or kettlebell at chest height
- Excellent for form correction
- Improves balance

**Box Squat**
- Sit to a box and stand up
- Great for practicing depth
- Provides added safety

### Intermediate
**Front Squat**
- Barbell positioned in front
- Maximizes core strengthening effect
- Corrects upper body positioning

**Bulgarian Split Squat**
- Rear foot elevated on a bench
- Develops unilateral leg strength
- Corrects left-right imbalances

### Advanced
**Overhead Squat**
- Barbell held overhead
- Demands total-body stability
- Maximizes mobility demands

**Jump Squat**
- Develops explosive power
- Plyometric training effect
- Enhances athletic performance

## Programming Guide

### Beginner (0–6 months)
- **Frequency**: 2–3 sessions per week
- **Sets**: 3–4 sets
- **Reps**: 8–12
- **Weight**: Bodyweight → 0.5x bodyweight

### Intermediate (6 months–2 years)
- **Frequency**: 2–3 sessions per week
- **Sets**: 4–5 sets
- **Reps**: 5–8 (strength) or 8–12 (hypertrophy)
- **Weight**: 0.5x–1.5x bodyweight

### Advanced (2+ years)
- **Frequency**: 2–4 sessions per week
- **Sets**: 5–8 sets
- **Reps**: 1–5 (strength) or 6–12 (hypertrophy)
- **Weight**: 1.5x bodyweight and above

## Squat Accessory Exercises

### Addressing Weak Points
**Glutes**: Hip thrust, clamshell
**Quadriceps**: Leg press, leg extension
**Hamstrings**: Romanian deadlift, leg curl
**Calves**: Calf raise

### Improving Mobility
**Hips**: 90/90 stretch, pigeon pose
**Ankles**: Wall ankle stretch, calf stretch
**Thoracic spine**: Cat-cow, thoracic extension

## Safety Guidelines

### Warm-Up (10–15 minutes)
1. **General warm-up**: 5 minutes of light cardio
2. **Dynamic stretching**: Leg swings, high knees
3. **Specific warm-up**: 10–15 bodyweight squats
4. **Progressive loading**: Empty bar → 50% → 80% of working weight

### Safety Equipment Setup
- **Safety bars**: Set 5 cm below your lowest point
- **Spotter**: Essential for heavy singles
- **Emergency exit**: Know how to safely dump the barbell

### Injury Prevention
- **Progressive increases**: 2.5–5 kg per week
- **Form first**: Technique over load
- **Adequate rest**: 48–72 hours between squat sessions
- **Check your joints**: Monitor for any discomfort

The squat is a lifetime exercise. Invest time in building perfect technique. That investment will always pay off.
    `,
    author: 'Corevia Technique',
    publishedDate: '2025-09-17',
  },
  // 부위별 운동 - 데드리프트
  {
    id: 'deadlift-complete-guide',
    category: '부위별 운동',
    categoryEn: 'Body Part Training',
    title: '데드리프트 완전 정복: 후면 사슬의 제왕',
    titleEn: 'The Complete Deadlift Guide: King of the Posterior Chain',
    summary: '가장 기능적인 운동 데드리프트의 모든 것. 올바른 자세와 안전한 수행법',
    summaryEn: 'Everything about the deadlift — the most functional of all exercises. Proper technique and safe execution.',
    content: `
# 데드리프트 완전 정복: 후면 사슬의 제왕

데드리프트는 **가장 기능적인 운동** 중 하나입니다. 바닥에서 무거운 것을 들어 올리는 것은 일상생활의 기본 동작이기 때문입니다.

## 데드리프트의 효과

### 주동근
- **척추기립근**: 척추 안정성
- **둔근**: 고관절 신전의 주역
- **햄스트링**: 고관절 굴곡근
- **승모근**: 견갑골 안정성

### 보조근
- **광배근**: 바벨을 몸에 가깝게
- **능형근**: 견갑골 내전
- **전완근**: 그립 유지
- **코어**: 전체 안정성

## 컨벤셔널 데드리프트 자세

### 1. 셋업
- **발 위치**: 바벨 아래, 어깨너비
- **바벨 위치**: 정강이 중앙, 발등 위
- **그립**: 어깨너비, 믹스드 또는 더블 오버핸드
- **시선**: 정면 또는 바닥 2-3m 앞

### 2. 시작 자세
- **고관절 힌지**: 엉덩이를 뒤로 빼며 앉기
- **등 중립**: 자연스러운 S커브 유지
- **어깨**: 바벨 바로 위 또는 살짝 앞
- **팔**: 자연스럽게 늘어뜨린 상태

### 3. 리프트 동작
**1단계: 바닥에서 무릎까지**
- 다리 힘으로 바닥을 밀어내기
- 바벨을 정강이에 붙여서
- 무릎과 고관절 동시 신전

**2단계: 무릎에서 락아웃까지**
- 고관절 주도로 상체 일으키기
- 둔근 수축으로 마무리
- 어깨 뒤로, 가슴 펴기

### 4. 하강 동작
- 고관절부터 굽히기
- 바벨을 허벅지를 따라 내리기
- 무릎 지나면서 무릎도 굽히기
- 컨트롤하며 바닥에 터치

## 데드리프트 변형

### 스모 데드리프트
**특징**:
- 발 간격 넓게 (1.5-2배)
- 발끝 45도 바깥쪽
- 손은 다리 사이

**장점**:
- 이동 거리 짧음
- 둔근 활성화 높음
- 허리 부담 적음

**단점**:
- 고관절 가동성 요구
- 내전근 유연성 필요

### 루마니안 데드리프트 (RDL)
**특징**:
- 바닥에 내려놓지 않음
- 무릎 각도 고정
- 햄스트링 중심

**장점**:
- 햄스트링 집중 발달
- 고관절 힌지 학습
- 부상 위험 낮음

**단점**:
- 중량 제한적
- 전신 효과 적음

### 트랩바 데드리프트
**특징**:
- 육각형 바벨 사용
- 몸 중앙에서 잡기
- 스쿼트+데드리프트 혼합

**장점**:
- 허리 부담 최소
- 초보자 친화적
- 높은 안전성

**단점**:
- 특수 장비 필요
- 기술 발달 제한

## 흔한 실수와 교정

### 등 굽힘 (라운딩)
**원인**: 코어 약화, 과도한 중량
**위험**: 척추 부상
**교정**: 
- 중량 줄이기
- 코어 강화 운동
- 데드버그, 플랭크 추가

### 바벨이 몸에서 멀어짐
**원인**: 광배근 약화, 그립 문제
**위험**: 허리 부담 증가
**교정**:
- 광배근 강화 (풀업, 로우)
- 그립 연습
- 바벨을 정강이에 붙이기

### 과도한 상체 젖히기
**원인**: 잘못된 마무리 동작
**위험**: 요추 과신전
**교정**:
- 둔근 수축으로 마무리
- 상체는 수직으로만
- 과도한 젖히기 금지

### 무릎 먼저 굽히기
**원인**: 스쿼트와 혼동
**위험**: 바벨이 무릎에 걸림
**교정**:
- 고관절 힌지 연습
- RDL로 패턴 학습
- 거울 보며 연습

## 그립 종류와 선택

### 더블 오버핸드
- **장점**: 균형적 발달, 그립 강화
- **단점**: 중량 제한
- **권장**: 초중급자, 웜업 세트

### 믹스드 그립
- **장점**: 높은 중량 가능
- **단점**: 불균형, 이두 부상 위험
- **권장**: 고급자, 맥스 세트

### 훅 그립
- **장점**: 안전성, 높은 중량
- **단점**: 초기 불편함, 학습 필요
- **권장**: 전 수준, 장기적 목표

### 스트랩 사용
- **장점**: 그립 제한 해결
- **단점**: 그립 발달 저해
- **권장**: 보조 운동, 고반복 시

## 프로그래밍 예시

### 초보자
**주 1-2회**
- 워밍업: 5세트 (빈바 → 50% → 70% → 80% → 90%)
- 메인: 3x5 @ 85-90%
- 보조: RDL 3x8-10

### 중급자
**주 1-2회**
- 메인: 5x3 @ 90-95%
- 백오프: 2x5 @ 80%
- 보조: 굿모닝, 하이퍼익스텐션

### 고급자
**주 1-2회**
- 메인: 8x1 @ 95-105%
- 변형: 스모, 디피싯, 블록풀
- 보조: 약점 보완 운동

## 안전 수칙

### 워밍업 중요성
1. **일반 워밍업**: 5-10분 유산소
2. **동적 스트레칭**: 레그 스윙, 힙 서클
3. **활성화**: 글루트 브릿지, 밴드 풀어파트
4. **점진적 로딩**: 10-15세트에 걸쳐

### 부상 예방
- **점진적 증가**: 주 2.5-5kg
- **완벽한 폼**: 중량보다 자세
- **충분한 휴식**: 최소 48시간
- **보조 운동**: 약점 보완

### 응급 상황 대처
- **허리 통증**: 즉시 중단, 의료진 상담
- **그립 실패**: 스트랩 사용 고려
- **폼 붕괴**: 중량 줄이고 자세 교정

데드리프트는 **진짜 힘**을 기르는 운동입니다. 조급해하지 말고 기본기부터 탄탄히 다져나가세요.
    `,
    contentEn: `
# The Complete Deadlift Guide: King of the Posterior Chain

The deadlift is one of the **most functional exercises** in existence. Picking something heavy up off the ground is a fundamental movement of everyday life.

## The Benefits of Deadlifts

### Primary Movers
- **Erector spinae**: Spinal stability
- **Glutes**: Primary hip extensors
- **Hamstrings**: Hip flexion assistance
- **Trapezius**: Scapular stability

### Secondary Movers
- **Lats**: Keep the bar close to the body
- **Rhomboids**: Scapular retraction
- **Forearms**: Grip maintenance
- **Core**: Total-body stability

## Conventional Deadlift Technique

### 1. Setup
- **Foot position**: Under the bar, shoulder-width apart
- **Bar position**: Mid-shin, over the mid-foot
- **Grip**: Shoulder-width, mixed or double overhand
- **Eyes**: Looking forward or at a point 2–3 m ahead on the floor

### 2. Starting Position
- **Hip hinge**: Push hips back and bend into the bar
- **Neutral spine**: Maintain the natural S-curve of the spine
- **Shoulders**: Directly over or slightly in front of the bar
- **Arms**: Hanging naturally straight

### 3. The Pull

**Phase 1: Floor to Knee**
- Push the floor away with your legs
- Keep the bar against your shins
- Extend knees and hips simultaneously

**Phase 2: Knee to Lockout**
- Drive hips through to complete extension
- Squeeze the glutes at the top
- Shoulders back, chest up

### 4. The Descent
- Begin the descent by hinging at the hips
- Slide the bar down the thighs
- Bend the knees once the bar passes them
- Lower with control until it touches the floor

## Deadlift Variations

### Sumo Deadlift
**Characteristics**:
- Wide stance (1.5–2x shoulder width)
- Toes angled 45 degrees outward
- Hands inside the legs

**Advantages**:
- Shorter range of motion
- Higher glute activation
- Less lower back stress

**Disadvantages**:
- Requires hip mobility
- Demands adductor flexibility

### Romanian Deadlift (RDL)
**Characteristics**:
- Bar never returns to the floor
- Fixed knee angle throughout
- Hamstring-dominant

**Advantages**:
- Targeted hamstring development
- Teaches the hip hinge pattern
- Lower injury risk

**Disadvantages**:
- Weight is limited compared to conventional
- Less total-body stimulus

### Trap Bar Deadlift
**Characteristics**:
- Uses a hexagonal bar
- Grip is on either side of the body
- A hybrid of squat and deadlift mechanics

**Advantages**:
- Minimizes lower back stress
- Beginner-friendly
- High safety margin

**Disadvantages**:
- Requires specialized equipment
- Limits transfer of conventional deadlift skill

## Common Mistakes and Corrections

### Rounding the Back
**Cause**: Weak core, excessive weight
**Risk**: Spinal injury
**Correction**:
- Reduce the weight
- Core strengthening exercises
- Add dead bugs and planks

### Bar Drifting Away from the Body
**Cause**: Weak lats, grip issues
**Risk**: Increased lower back strain
**Correction**:
- Lat strengthening (pull-ups, rows)
- Grip training
- Keep the bar dragging against the shins

### Hyperextending at the Top
**Cause**: Incorrect lockout mechanics
**Risk**: Lumbar hyperextension
**Correction**:
- Finish with glute squeeze, not a back bend
- The torso should only reach vertical
- Avoid any lean back beyond vertical

### Squatting Instead of Hinging
**Cause**: Confusing it with a squat pattern
**Risk**: Bar catching on the knees
**Correction**:
- Practice the hip hinge in isolation
- Use RDLs to groove the pattern
- Practice in front of a mirror

## Grip Types and Selection

### Double Overhand
- **Advantage**: Balanced development, improves grip strength
- **Disadvantage**: Limits maximum weight
- **Recommended for**: Beginners/intermediate, warm-up sets

### Mixed Grip
- **Advantage**: Allows heavier weights
- **Disadvantage**: Asymmetrical stress, bicep injury risk
- **Recommended for**: Advanced lifters, max effort sets

### Hook Grip
- **Advantage**: Safe and allows heavy weights
- **Disadvantage**: Initially uncomfortable, requires practice
- **Recommended for**: All levels as a long-term goal

### Straps
- **Advantage**: Solves grip limitations
- **Disadvantage**: Reduces grip development
- **Recommended for**: Accessory work, high-rep sets

## Programming Examples

### Beginner
**1–2 times per week**
- Warm-up: 5 progressively heavier sets (empty bar → 50% → 70% → 80% → 90%)
- Main: 3x5 @ 85–90%
- Accessory: RDL 3x8–10

### Intermediate
**1–2 times per week**
- Main: 5x3 @ 90–95%
- Back-off: 2x5 @ 80%
- Accessory: Good morning, hyperextension

### Advanced
**1–2 times per week**
- Main: 8x1 @ 95–105%
- Variations: Sumo, deficit, block pulls
- Accessory: Exercises targeting weak links

## Safety Guidelines

### The Importance of Warm-Up
1. **General warm-up**: 5–10 minutes of cardio
2. **Dynamic stretching**: Leg swings, hip circles
3. **Activation**: Glute bridge, band pull-apart
4. **Progressive loading**: 10–15 sets of gradually increasing weight

### Injury Prevention
- **Gradual increases**: 2.5–5 kg per week
- **Form first**: Technique over load
- **Adequate rest**: Minimum 48 hours between sessions
- **Accessory work**: Address weak points

### Emergency Response
- **Lower back pain**: Stop immediately, consult a physician
- **Grip failure**: Consider using straps
- **Form breakdown**: Reduce weight and correct technique

The deadlift builds **real strength**. Don't rush — build your fundamentals from the ground up.
    `,
    author: 'Corevia Technique',
    publishedDate: '2025-09-17',
  },
  // 보충제 - 크레아틴
  {
    id: 'creatine-complete-guide',
    category: '보충제',
    categoryEn: 'Supplements',
    title: '크레아틴 완전 가이드: 가장 검증된 보충제',
    titleEn: 'The Complete Creatine Guide: The Most Proven Supplement',
    summary: '가장 많은 연구로 입증된 보충제 크레아틴의 모든 것',
    summaryEn: 'Everything about creatine — the supplement with the most research-backed evidence of any product on the market.',
    content: `
# 크레아틴 완전 가이드: 가장 검증된 보충제

크레아틴은 **가장 많은 연구**로 효과가 입증된 보충제입니다. 30년 넘는 연구 결과, 안전성과 효과 모두 확실합니다.

## 크레아틴이란?

### 정의
- **자연 발생 화합물**: 근육과 뇌에 저장
- **에너지 시스템**: ATP-PC 시스템의 핵심
- **아미노산 유래**: 아르기닌, 글리신, 메티오닌

### 체내 역할
- **즉시 에너지**: 고강도 운동 시 ATP 재합성
- **근육 수축**: 폭발적 파워 제공
- **뇌 기능**: 신경계 에너지 공급

## 크레아틴의 효과

### 과학적으로 입증된 효과

**근력 향상**
- **3-15% 증가**: 1-5RM 구간
- **폭발적 파워**: 점프, 스프린트
- **반복 능력**: 같은 중량으로 더 많은 횟수

**근비대 촉진**
- **근육량 증가**: 4-8주 내 1-2kg
- **세포 부피**: 수분 저류로 근육 팽창
- **단백질 합성**: 근성장 신호 증가

**회복 개선**
- **근손상 감소**: 염증 지표 개선
- **글리코겐 재합성**: 탄수화물과 함께 시
- **피로 감소**: 운동 간 회복 빨라짐

### 추가적 효과

**인지 기능**
- **뇌 에너지**: 정신적 피로 감소
- **집중력**: 특히 수면 부족 시
- **기억력**: 단기 기억 향상

**노화 방지**
- **근감소증**: 노인의 근량 유지
- **골밀도**: 간접적 골 건강 개선
- **신경 보호**: 뇌 건강 지원

## 크레아틴 종류

### 크레아틴 모노하이드레이트
**장점**:
- 가장 많은 연구
- 저렴한 가격
- 높은 안전성

**단점**:
- 약간의 소화 불편
- 물에 잘 안 녹음

### 크레아틴 HCl
**장점**:
- 높은 용해도
- 소화 편함
- 적은 용량

**단점**:
- 비싼 가격
- 연구 부족

### 기타 형태
**크레아틴 에틸 에스터**: 연구 부족, 효과 의문
**버퍼드 크레아틴**: 모노하이드레이트와 비슷
**크레아틴 나이트레이트**: 마케팅 위주

**결론**: **크레아틴 모노하이드레이트**가 최선의 선택

## 복용 방법

### 로딩 프로토콜
**1주차 (로딩)**: 
- 하루 20g (5g x 4회)
- 식사와 함께
- 물 충분히 (하루 3-4L)

**2주차 이후 (유지)**:
- 하루 3-5g
- 타이밍 무관
- 꾸준한 복용

### 비로딩 프로토콜
**전 기간**:
- 하루 3-5g
- 3-4주 후 최대 효과
- 더 편안한 방법

### 복용 타이밍
**언제든 OK**: 크레아틴은 타이밍보다 꾸준함이 중요
**운동 후 추천**: 탄수화물과 함께 시 흡수 향상
**나누어 복용**: 소화 불편 시 2-3회 분할

## 크레아틴과 함께 복용하면 좋은 것들

### 탄수화물
- **흡수 향상**: 인슐린 반응 이용
- **권장량**: 30-50g 단순 탄수화물
- **타이밍**: 운동 후 함께

### 단백질
- **근합성 시너지**: 상호 보완 효과
- **권장량**: 20-40g 웨이 프로틴
- **타이밍**: 운동 후 함께

### 베타 알라닌
- **다른 에너지 시스템**: 상호 보완
- **지구력 향상**: 1-4분 운동에 효과
- **복용법**: 하루 3-5g 분할

## 부작용과 주의사항

### 일반적 부작용
**수분 저류**:
- 근육 내 수분 증가
- 체중 1-3kg 증가
- 정상적 반응

**소화 불편**:
- 복통, 설사 가능
- 용량 줄이거나 분할 복용
- 식사와 함께

### 드문 부작용
**근경련**: 수분 부족 시, 충분한 수분 섭취로 예방
**신장 부담**: 건강한 사람에게는 문제없음
**탈모**: 과학적 근거 부족

### 주의 대상
- **신장 질환자**: 의사 상담 필수
- **당뇨 환자**: 혈당 모니터링
- **18세 미만**: 필요성 의문

## 크레아틴 Q&A

**Q: 크레아틴을 끊으면 근육이 빠지나요?**
A: 수분 저류 효과는 사라지지만, 실제 근육량은 유지됩니다.

**Q: 여성도 복용해도 되나요?**
A: 네, 남녀 구분 없이 안전하고 효과적입니다.

**Q: 카페인과 함께 먹어도 되나요?**
A: 네, 상호작용 없습니다. 함께 복용해도 문제없어요.

**Q: 크레아틴을 복용하면 물을 많이 마셔야 하나요?**
A: 네, 하루 최소 3L 이상 마시는 것을 권장합니다.

**Q: 언제까지 복용할 수 있나요?**
A: 장기 복용 연구에서 안전성이 확인되었습니다. 평생 복용해도 문제없습니다.

## 구매 가이드

### 선택 기준
1. **크레아틴 모노하이드레이트** 확인
2. **순도**: 99% 이상
3. **제3자 검증**: NSF, Informed Choice 등
4. **가격**: 1kg당 3-5만원 적정

### 피해야 할 제품
- 복합 제품 (다른 성분 혼합)
- 과대광고 제품
- 너무 저렴한 제품
- 출처 불명 제품

크레아틴은 **가성비 최고의 보충제**입니다. 복잡하게 생각하지 말고, 모노하이드레이트 형태로 꾸준히 복용하세요.
    `,
    contentEn: `
# The Complete Creatine Guide: The Most Proven Supplement

Creatine is the supplement with the **most research** supporting its effectiveness. Over 30 years of studies confirm both its safety and results.

## What Is Creatine?

### Definition
- **Naturally occurring compound**: Stored in muscles and the brain
- **Energy system**: The core of the ATP-PC energy system
- **Derived from amino acids**: Arginine, glycine, and methionine

### Role in the Body
- **Immediate energy**: Resynthesizes ATP during high-intensity exercise
- **Muscle contraction**: Provides explosive power
- **Brain function**: Supplies energy to the nervous system

## The Effects of Creatine

### Scientifically Proven Effects

**Strength Gains**
- **3–15% increase**: In 1–5 rep max efforts
- **Explosive power**: Jumps, sprints
- **Increased rep capacity**: More reps at the same weight

**Hypertrophy Enhancement**
- **Muscle mass increase**: 1–2 kg within 4–8 weeks
- **Cell volumization**: Muscle swelling from water retention
- **Protein synthesis**: Increased anabolic signaling

**Improved Recovery**
- **Reduced muscle damage**: Better inflammation markers
- **Faster glycogen resynthesis**: When taken with carbohydrates
- **Less fatigue**: Faster inter-set recovery

### Additional Benefits

**Cognitive Function**
- **Brain energy**: Reduced mental fatigue
- **Focus**: Especially during sleep deprivation
- **Memory**: Short-term memory enhancement

**Anti-Aging**
- **Sarcopenia**: Helps maintain muscle mass in older adults
- **Bone density**: Indirect support for bone health
- **Neuroprotection**: Supports brain health

## Types of Creatine

### Creatine Monohydrate
**Advantages**:
- The most researched form
- Affordable price
- High safety profile

**Disadvantages**:
- Mild digestive discomfort for some
- Doesn't dissolve as easily in water

### Creatine HCl
**Advantages**:
- High solubility
- Easier on digestion
- Smaller dose required

**Disadvantages**:
- More expensive
- Less research available

### Other Forms
**Creatine ethyl ester**: Insufficient research, effectiveness questionable
**Buffered creatine**: Similar to monohydrate
**Creatine nitrate**: Primarily marketing-driven

**Conclusion**: **Creatine monohydrate** remains the best choice

## How to Take It

### Loading Protocol
**Week 1 (Loading)**:
- 20 g per day (5 g x 4 doses)
- Take with meals
- Drink plenty of water (3–4 L per day)

**Week 2 onwards (Maintenance)**:
- 3–5 g per day
- Timing doesn't matter
- Take consistently

### No-Loading Protocol
**Throughout**:
- 3–5 g per day
- Reach full saturation after 3–4 weeks
- A more comfortable approach for most people

### Dosing Timing
**Anytime works**: With creatine, consistency matters more than timing
**Post-workout recommended**: Taking with carbohydrates improves uptake
**Split dosing**: If you experience digestive issues, divide into 2–3 doses

## What Pairs Well with Creatine

### Carbohydrates
- **Enhanced absorption**: Utilizes the insulin response
- **Recommended**: 30–50 g of simple carbohydrates
- **Timing**: Together post-workout

### Protein
- **Muscle-building synergy**: Complementary effects
- **Recommended**: 20–40 g of whey protein
- **Timing**: Together post-workout

### Beta-Alanine
- **Different energy system**: Complementary mechanism
- **Endurance boost**: Effective for 1–4 minute efforts
- **How to take**: 3–5 g per day, split doses

## Side Effects and Precautions

### Common Side Effects
**Water Retention**:
- Increased intramuscular water content
- 1–3 kg temporary weight increase
- A normal and expected response

**Digestive Discomfort**:
- Possible bloating or loose stool
- Reduce dose or split into smaller portions
- Take with food

### Rare Side Effects
**Muscle cramps**: Related to dehydration — prevent by drinking adequate water
**Kidney stress**: No concern in healthy individuals
**Hair loss**: Insufficient scientific evidence

### Who Should Use Caution
- **Kidney disease**: Mandatory physician consultation
- **Diabetes**: Monitor blood glucose levels
- **Under 18**: Necessity is questionable

## Creatine Q&A

**Q: Will I lose muscle if I stop taking creatine?**
A: The water retention effect disappears, but actual muscle mass is retained.

**Q: Is it safe for women to take?**
A: Yes, it is safe and effective for both men and women.

**Q: Can I take it with caffeine?**
A: Yes, there is no negative interaction. You can take them together.

**Q: Do I need to drink more water while taking creatine?**
A: Yes, a minimum of 3 L of water per day is recommended.

**Q: How long can I take it?**
A: Long-term studies have confirmed its safety. Lifelong use presents no known issues.

## Buying Guide

### Selection Criteria
1. Confirm it is **creatine monohydrate**
2. **Purity**: 99% or higher
3. **Third-party testing**: NSF, Informed Choice, etc.
4. **Price**: $20–40 per kg is reasonable

### Products to Avoid
- Proprietary blends (mixed with other ingredients)
- Overly hyped products
- Suspiciously cheap products
- Products with unknown sourcing

Creatine is **the best value-for-money supplement** available. Don't overthink it — just get the monohydrate form and take it consistently.
    `,
    author: 'Corevia Science',
    publishedDate: '2025-09-17',
  },
  // 벌크업 가이드
  {
    id: 'bulking-complete-guide',
    category: '근비대',
    categoryEn: 'Hypertrophy',
    title: '벌크업 완전 가이드: 근육량 극대화 전략',
    titleEn: 'The Complete Bulking Guide: Strategies to Maximize Muscle Mass',
    summary: '효과적인 벌크업을 위한 운동, 식단, 라이프스타일 전략',
    summaryEn: 'Training, nutrition, and lifestyle strategies for an effective muscle-building phase.',
    content: `
# 벌크업 완전 가이드: 근육량 극대화 전략

벌크업은 **근육량 증가**를 최우선 목표로 하는 시기입니다. 올바른 벌크업으로 1년에 5-10kg의 순근육량 증가가 가능합니다.

## 벌크업의 기본 원리

### 칼로리 잉여 (Caloric Surplus)
- **기본 원칙**: 섭취 > 소모
- **권장 범위**: 기초대사량 + 300-500kcal
- **개인차**: 체질, 나이, 성별에 따라 조절

### 점진적 과부하
- **중량 증가**: 주 2.5-5kg씩
- **볼륨 증가**: 세트, 횟수, 빈도
- **강도 증가**: RPE 8-9 수준 유지

## 벌크업 식단 전략

### 매크로 영양소 비율

**단백질**: 체중 × 1.6-2.2g
- **근합성**: 충분한 아미노산 공급
- **분배**: 끼니마다 20-40g
- **소스**: 닭가슴살, 계란, 생선, 유제품

**탄수화물**: 체중 × 4-7g
- **에너지**: 고강도 운동 연료
- **타이밍**: 운동 전후 집중
- **소스**: 현미, 고구마, 귀리, 바나나

**지방**: 총 칼로리의 25-35%
- **호르몬**: 테스토스테론 생성
- **포만감**: 식욕 조절
- **소스**: 견과류, 올리브오일, 아보카도

### 식사 타이밍

**아침 (기상 후)**
- 대량의 탄수화물 + 단백질
- 밤새 고갈된 글리코겐 보충
- 예: 오트밀 + 바나나 + 프로틴

**운동 전 (1-2시간 전)**
- 소화 쉬운 탄수화물 + 적당한 단백질
- 운동 에너지 확보
- 예: 토스트 + 잼 + 우유

**운동 후 (30분 이내)**
- 빠른 탄수화물 + 단백질 (3:1 비율)
- 근합성 최적화
- 예: 바나나 + 웨이 프로틴

**저녁 (잠들기 2시간 전)**
- 카제인 단백질 + 건강한 지방
- 밤새 근합성 지원
- 예: 그리스 요거트 + 견과류

### 벌크업 식단 예시 (70kg 남성)

**목표 칼로리**: 3200kcal
**단백질**: 140g (560kcal)
**탄수화물**: 400g (1600kcal)  
**지방**: 115g (1040kcal)

**아침**:
- 오트밀 80g + 바나나 1개 + 아몬드 20g
- 계란 3개 + 토스트 2장

**간식 1**:
- 웨이 프로틴 30g + 우유 300ml

**점심**:
- 닭가슴살 150g + 현미밥 150g + 야채

**간식 2**:
- 고구마 200g + 땅콩버터 20g

**저녁**:
- 연어 120g + 퀴노아 100g + 아보카도 반개

**간식 3**:
- 그리스 요거트 200g + 견과류 30g

## 벌크업 운동 프로그램

### 기본 원칙
- **빈도**: 각 부위 주 2-3회
- **볼륨**: 부위당 주 10-20세트
- **강도**: 6-12RM 구간 중심
- **휴식**: 세트 간 2-4분

### 상하체 분할 (주 4회)

**상체 A (월, 목)**
1. 벤치프레스 4x6-8
2. 바벨로우 4x6-8  
3. 인클라인 덤벨프레스 3x8-10
4. 랫풀다운 3x8-10
5. 딥스 3x8-12
6. 바이셉컬 3x10-12
7. 트라이셉 익스텐션 3x10-12

**하체 (화, 금)**
1. 스쿼트 4x6-8
2. 루마니안 데드리프트 4x6-8
3. 레그프레스 3x10-12
4. 레그컬 3x10-12
5. 불가리안 스플릿 스쿼트 3x8-10
6. 카프레이즈 4x12-15
7. 플랭크 3x45-60초

### Push/Pull/Legs (주 6회)

**Push (월, 목)**
1. 벤치프레스 4x6-8
2. 숄더프레스 4x8-10
3. 인클라인 덤벨프레스 3x8-10
4. 딥스 3x8-12
5. 사이드 레터럴 레이즈 3x12-15
6. 트라이셉 푸시다운 3x10-12

**Pull (화, 금)**
1. 데드리프트 4x5-6
2. 풀업/랫풀다운 4x6-8
3. 바벨로우 3x8-10
4. 시티드 로우 3x8-10
5. 페이스 풀 3x12-15
6. 바벨컬 3x10-12

**Legs (수, 토)**
1. 스쿼트 4x6-8
2. 루마니안 데드리프트 3x8-10
3. 레그프레스 3x10-12
4. 레그컬 3x10-12
5. 레그 익스텐션 3x12-15
6. 카프레이즈 4x12-15

## 벌크업 중 유산소 운동

### 최소한으로 유지
- **목적**: 심혈관 건강 유지
- **빈도**: 주 2-3회
- **강도**: 저강도 (심박수 120-140bpm)
- **시간**: 20-30분

### 추천 유산소
- **걷기**: 가장 안전하고 쉬운 방법
- **자전거**: 관절 부담 적음
- **수영**: 전신 운동, 회복 효과

### 피해야 할 유산소
- **장시간 러닝**: 근손실 위험
- **고강도 인터벌**: 회복 방해
- **과도한 빈도**: 칼로리 과다 소모

## 벌크업 성공 팁

### 체중 모니터링
- **매일 측정**: 같은 시간, 같은 조건
- **주간 평균**: 일일 변동 무시
- **목표**: 주 0.2-0.5kg 증가

### 진전 추적
- **운동 일지**: 중량, 횟수, 세트 기록
- **사진 촬영**: 2주마다 같은 조건
- **둘레 측정**: 팔, 가슴, 허벅지
- **체성분 분석**: 월 1회

### 수면과 회복
- **수면 시간**: 7-9시간
- **수면 질**: 깊은 잠, 규칙적 패턴
- **스트레스 관리**: 명상, 취미 활동
- **휴식일**: 주 1-2일 완전 휴식

## 벌크업 vs 더티 벌크업

### 클린 벌크업 (추천)
**특징**:
- 칼로리 잉여 300-500kcal
- 건강한 음식 위주
- 체지방 증가 최소화

**장점**:
- 근육 대비 지방 비율 좋음
- 건강 유지
- 컷팅 시 수월함

**단점**:
- 느린 체중 증가
- 엄격한 식단 관리

### 더티 벌크업 (비추천)
**특징**:
- 칼로리 잉여 1000kcal+
- 음식 종류 무관
- 빠른 체중 증가

**장점**:
- 빠른 근육 증가
- 식단 관리 쉬움
- 심리적 만족감

**단점**:
- 과도한 지방 축적
- 건강 악화 위험
- 컷팅 기간 연장

## 벌크업 중 주의사항

### 과도한 체지방 증가
- **모니터링**: 허리둘레, 체지방률
- **조절**: 칼로리 잉여 줄이기
- **목표**: 남성 15%, 여성 25% 이하 유지

### 운동 강도 저하
- **원인**: 과도한 칼로리, 나태함
- **해결**: 점진적 과부하 원칙 유지
- **목표**: 지속적인 기록 갱신

### 소화 문제
- **원인**: 급격한 식사량 증가
- **해결**: 점진적 증가, 소화 효소
- **예방**: 충분한 수분, 섬유질

벌크업은 **마라톤**입니다. 조급해하지 말고 꾸준히 진행하세요. 1년 후의 몸을 상상하며 오늘 한 끼, 오늘 한 세트에 집중하세요.
    `,
    contentEn: `
# The Complete Bulking Guide: Strategies to Maximize Muscle Mass

A bulk is a phase where **increasing muscle mass** is the primary objective. With a proper approach, gaining 5–10 kg of lean muscle in a year is achievable.

## The Basic Principles of Bulking

### Caloric Surplus
- **Core principle**: Intake > Expenditure
- **Recommended range**: BMR + 300–500 kcal
- **Individual variation**: Adjust for body type, age, and sex

### Progressive Overload
- **Weight increases**: 2.5–5 kg per week
- **Volume increases**: More sets, reps, and frequency
- **Intensity**: Maintain RPE 8–9 during working sets

## Bulking Nutrition Strategy

### Macronutrient Ratios

**Protein**: Bodyweight × 1.6–2.2 g
- **Muscle protein synthesis**: Adequate amino acid supply
- **Distribution**: 20–40 g per meal
- **Sources**: Chicken breast, eggs, fish, dairy

**Carbohydrates**: Bodyweight × 4–7 g
- **Energy**: Fuel for high-intensity training
- **Timing**: Concentrate around workouts
- **Sources**: Brown rice, sweet potato, oats, banana

**Fat**: 25–35% of total calories
- **Hormones**: Testosterone production
- **Satiety**: Appetite regulation
- **Sources**: Nuts, olive oil, avocado

### Meal Timing

**Morning (After Waking)**
- Large carbohydrates + protein
- Replenish glycogen depleted overnight
- Example: Oatmeal + banana + protein shake

**Pre-Workout (1–2 Hours Before)**
- Easy-to-digest carbs + moderate protein
- Secure training energy
- Example: Toast + jam + milk

**Post-Workout (Within 30 Minutes)**
- Fast carbs + protein (3:1 ratio)
- Optimize muscle protein synthesis
- Example: Banana + whey protein

**Evening (2 Hours Before Bed)**
- Casein protein + healthy fats
- Support overnight muscle protein synthesis
- Example: Greek yogurt + nuts

### Sample Bulking Diet (70 kg Male)

**Target Calories**: 3,200 kcal
**Protein**: 140 g (560 kcal)
**Carbohydrates**: 400 g (1,600 kcal)
**Fat**: 115 g (1,040 kcal)

**Breakfast**:
- Oatmeal 80 g + banana + almonds 20 g
- 3 eggs + 2 slices toast

**Snack 1**:
- Whey protein 30 g + milk 300 ml

**Lunch**:
- Chicken breast 150 g + brown rice 150 g + vegetables

**Snack 2**:
- Sweet potato 200 g + peanut butter 20 g

**Dinner**:
- Salmon 120 g + quinoa 100 g + half avocado

**Snack 3**:
- Greek yogurt 200 g + nuts 30 g

## Bulking Training Program

### Basic Principles
- **Frequency**: Each muscle group 2–3 times per week
- **Volume**: 10–20 sets per muscle group per week
- **Intensity**: Focus on 6–12 RM range
- **Rest**: 2–4 minutes between sets

### Upper/Lower Split (4 days/week)

**Upper Body A (Monday, Thursday)**
1. Bench press 4x6–8
2. Barbell row 4x6–8
3. Incline dumbbell press 3x8–10
4. Lat pulldown 3x8–10
5. Dips 3x8–12
6. Bicep curl 3x10–12
7. Tricep extension 3x10–12

**Lower Body (Tuesday, Friday)**
1. Squat 4x6–8
2. Romanian deadlift 4x6–8
3. Leg press 3x10–12
4. Leg curl 3x10–12
5. Bulgarian split squat 3x8–10
6. Calf raise 4x12–15
7. Plank 3x45–60 seconds

### Push/Pull/Legs (6 days/week)

**Push (Monday, Thursday)**
1. Bench press 4x6–8
2. Shoulder press 4x8–10
3. Incline dumbbell press 3x8–10
4. Dips 3x8–12
5. Side lateral raise 3x12–15
6. Tricep pushdown 3x10–12

**Pull (Tuesday, Friday)**
1. Deadlift 4x5–6
2. Pull-up/Lat pulldown 4x6–8
3. Barbell row 3x8–10
4. Seated row 3x8–10
5. Face pull 3x12–15
6. Barbell curl 3x10–12

**Legs (Wednesday, Saturday)**
1. Squat 4x6–8
2. Romanian deadlift 3x8–10
3. Leg press 3x10–12
4. Leg curl 3x10–12
5. Leg extension 3x12–15
6. Calf raise 4x12–15

## Cardio During a Bulk

### Keep It Minimal
- **Purpose**: Maintain cardiovascular health
- **Frequency**: 2–3 times per week
- **Intensity**: Low (heart rate 120–140 bpm)
- **Duration**: 20–30 minutes

### Recommended Cardio
- **Walking**: Safest and easiest option
- **Cycling**: Low joint impact
- **Swimming**: Full-body, recovery-enhancing

### Cardio to Avoid
- **Long-distance running**: Risk of muscle loss
- **High-intensity intervals**: Interferes with recovery
- **Excessive frequency**: Burns too many calories

## Bulking Success Tips

### Body Weight Monitoring
- **Daily weigh-in**: Same time, same conditions
- **Weekly average**: Ignore daily fluctuations
- **Target**: 0.2–0.5 kg gain per week

### Tracking Progress
- **Training log**: Record weights, reps, and sets
- **Progress photos**: Every 2 weeks under identical conditions
- **Circumference measurements**: Arms, chest, thighs
- **Body composition**: Monthly InBody or caliper assessment

### Sleep and Recovery
- **Sleep duration**: 7–9 hours
- **Sleep quality**: Deep, restful, consistent schedule
- **Stress management**: Meditation, hobbies
- **Rest days**: 1–2 complete rest days per week

## Clean Bulk vs. Dirty Bulk

### Clean Bulk (Recommended)
**Characteristics**:
- 300–500 kcal surplus
- Whole food-focused diet
- Minimizes fat gain

**Advantages**:
- Better muscle-to-fat ratio
- Health preserved
- Easier subsequent cut

**Disadvantages**:
- Slower weight gain
- Requires disciplined diet management

### Dirty Bulk (Not Recommended)
**Characteristics**:
- 1,000+ kcal surplus
- No restrictions on food types
- Rapid weight gain

**Advantages**:
- Faster muscle gain
- Easier diet management
- Psychological satisfaction

**Disadvantages**:
- Excessive fat accumulation
- Health risks
- Prolonged cutting phase required

## Cautions During a Bulk

### Excessive Fat Gain
- **Monitoring**: Waist circumference, body fat percentage
- **Adjustment**: Reduce caloric surplus
- **Target**: Keep men under 15%, women under 25% body fat

### Loss of Training Intensity
- **Cause**: Too many calories, complacency
- **Solution**: Maintain progressive overload principles
- **Goal**: Continuously break personal records

### Digestive Issues
- **Cause**: Sudden increase in food volume
- **Solution**: Increase gradually, use digestive enzymes
- **Prevention**: Adequate hydration and fiber

Bulking is a **marathon**. Don't rush — stay consistent. Visualize the body you'll have in a year and focus on each meal and each set today.
    `,
    author: 'Corevia Bulk',
    publishedDate: '2025-09-17',
  },
  // 컷팅 가이드
  {
    id: 'cutting-complete-guide',
    category: '다이어트',
    categoryEn: 'Diet',
    title: '컷팅 완전 가이드: 근육 보존하며 체지방 태우기',
    titleEn: 'The Complete Cutting Guide: Burn Fat While Preserving Muscle',
    summary: '근손실 없이 체지방만 제거하는 과학적 컷팅 전략',
    summaryEn: 'A science-based cutting strategy that eliminates body fat while protecting muscle mass.',
    content: `
# 컷팅 완전 가이드: 근육 보존하며 체지방 태우기

컷팅은 **체지방 감소**와 **근육 보존**을 동시에 달성해야 하는 고난도 과정입니다. 올바른 전략으로 근손실 없이 몸매를 완성할 수 있습니다.

## 컷팅의 기본 원리

### 칼로리 적자 (Caloric Deficit)
- **기본 공식**: 섭취 < 소모
- **권장 적자**: 일일 300-750kcal
- **속도**: 주 0.5-1kg 감량 (체지방률에 따라)

### 근손실 방지
- **충분한 단백질**: 체중 × 2.0-2.5g
- **근력 운동 유지**: 중량과 볼륨 최대한 보존
- **적절한 속도**: 너무 빠른 감량은 근손실 유발

## 컷팅 식단 전략

### 매크로 영양소 설정

**단백질**: 체중 × 2.0-2.5g (최우선)
- **근보존**: 충분한 아미노산 공급
- **포만감**: 높은 TEF(열효과)
- **소스**: 닭가슴살, 흰살생선, 계란흰자, 단백질 보충제

**지방**: 체중 × 0.8-1.2g (최소 확보)
- **호르몬**: 테스토스테론, 성장호르몬 유지
- **필수지방산**: 오메가-3, 오메가-6
- **소스**: 견과류, 올리브오일, 연어, 아보카도

**탄수화물**: 나머지 칼로리 (조절 변수)
- **운동 에너지**: 고강도 훈련 지원
- **타이밍**: 운동 전후 집중
- **소스**: 현미, 고구마, 귀리, 과일

### 컷팅 단계별 접근

**1단계: 보수적 컷팅 (체지방률 20%+)**
- 칼로리 적자: 300-500kcal
- 속도: 주 0.3-0.7kg
- 기간: 3-6개월

**2단계: 적극적 컷팅 (체지방률 15-20%)**
- 칼로리 적자: 500-750kcal
- 속도: 주 0.5-1kg
- 기간: 2-4개월

**3단계: 마무리 컷팅 (체지방률 15% 이하)**
- 칼로리 적자: 300-500kcal
- 속도: 주 0.2-0.5kg
- 기간: 2-3개월

### 컷팅 식단 예시 (70kg 남성, 2000kcal)

**단백질**: 150g (600kcal)
**지방**: 65g (585kcal)
**탄수화물**: 200g (800kcal)

**아침**:
- 계란흰자 4개 + 전체 1개
- 오트밀 40g + 블루베리 50g

**간식 1**:
- 웨이 프로틴 30g + 물

**점심**:
- 닭가슴살 120g + 현미밥 80g + 야채 무제한

**간식 2**:
- 그리스 요거트 150g (무지방)

**저녁**:
- 흰살생선 150g + 브로콜리 + 고구마 100g

**간식 3** (운동 후):
- 바나나 1개 + 웨이 프로틴 20g

## 컷팅 운동 전략

### 근력 운동 (최우선)

**목표**: 근육량과 근력 최대한 보존
**빈도**: 각 부위 주 2회
**강도**: 기존 중량의 85-95% 유지
**볼륨**: 기존의 80-90% 수준

**상하체 분할 예시**:

**상체 (월, 목)**
1. 벤치프레스 4x6-8 (중량 유지)
2. 바벨로우 4x6-8
3. 숄더프레스 3x8-10
4. 랫풀다운 3x8-10
5. 딥스 3x8-12
6. 바이셉컬 3x10-12

**하체 (화, 금)**
1. 스쿼트 4x6-8 (중량 유지)
2. 루마니안 데드리프트 3x8-10
3. 레그프레스 3x10-12
4. 레그컬 3x10-12
5. 불가리안 스플릿 스쿼트 3x10-12
6. 카프레이즈 4x12-15

### 유산소 운동

**LISS (Low Intensity Steady State)**
- **강도**: 심박수 120-140bpm
- **시간**: 30-60분
- **빈도**: 주 4-6회
- **장점**: 근손실 위험 낮음, 회복 부담 적음

**HIIT (High Intensity Interval Training)**
- **강도**: 심박수 80-90% 최대치
- **시간**: 15-25분
- **빈도**: 주 2-3회
- **장점**: 시간 효율성, 애프터번 효과

**추천 조합**:
- LISS 4회 + HIIT 2회
- 근력 운동 후 LISS 20-30분
- 별도 시간에 HIIT 15-20분

## 컷팅 중 보충제

### 필수 보충제

**웨이 프로틴**
- **목적**: 단백질 섭취량 달성
- **복용법**: 하루 1-2회, 30-40g

**멀티비타민**
- **목적**: 칼로리 제한으로 인한 영양소 부족 보완
- **복용법**: 하루 1정, 식사와 함께

**오메가-3**
- **목적**: 염증 감소, 호르몬 지원
- **복용법**: 하루 1-2g, EPA+DHA 기준

### 선택적 보충제

**카페인**
- **목적**: 지방 연소, 운동 능력 향상
- **복용법**: 운동 전 100-400mg

**L-카르니틴**
- **목적**: 지방 연소 지원
- **복용법**: 하루 2-3g, 식사와 함께

**CLA (공액리놀레산)**
- **목적**: 체지방 감소, 근육 보존
- **복용법**: 하루 3-6g, 식사와 함께

## 컷팅 중 흔한 문제들

### 정체기 (Plateau)
**원인**: 대사 적응, 칼로리 재계산 필요
**해결책**:
1. 칼로리 추가 100-200kcal 감소
2. 유산소 시간 10-15분 증가
3. 리피드 데이 도입 (주 1회)

### 근손실
**신호**: 근력 급격히 저하, 근육 부피 감소
**예방**:
1. 단백질 섭취량 증가 (체중 × 2.5g)
2. 근력 운동 강도 유지
3. 감량 속도 조절 (주 0.5kg 이하)

### 극심한 피로감
**원인**: 과도한 칼로리 적자, 탄수화물 부족
**해결**:
1. 리피드 데이 (탄수화물 2배)
2. 디로드 주간 (운동량 50% 감소)
3. 충분한 수면 (8-9시간)

### 식욕 조절 어려움
**전략**:
1. 고섬유질 음식 (포만감)
2. 충분한 수분 (하루 3L+)
3. 식사 빈도 조절 (개인 선호)
4. 인공감미료 활용

## 컷팅 성공 팁

### 측정과 모니터링
- **체중**: 매일 같은 시간, 주간 평균 계산
- **둘레**: 허리, 팔, 허벅지 (주 1회)
- **사진**: 같은 조건에서 주간 촬영
- **체지방률**: 월 1회 InBody 또는 캘리퍼

### 심리적 관리
- **현실적 목표**: 월 2-4kg 감량
- **완벽주의 버리기**: 80% 준수도 성공
- **사회적 지지**: 가족, 친구 이해 구하기
- **보상 시스템**: 주간 목표 달성 시 작은 보상

### 사회적 상황 대처
**외식**:
- 메뉴 미리 확인
- 단백질 위주 선택
- 소스, 드레싱 별도 요청

**회식**:
- 사전에 가벼운 식사
- 알코올 최소화
- 다음 날 정상 식단 복귀

## 컷팅 종료와 역다이어트

### 컷팅 종료 신호
- 목표 체지방률 달성
- 3주 이상 체중 변화 없음
- 극심한 피로감, 면역력 저하
- 사회생활에 지장

### 역다이어트 (Reverse Diet)
**목적**: 대사량 회복, 요요 방지
**방법**: 주간 탄수화물 20-30g, 지방 5-10g 증가
**기간**: 6-12주
**목표**: 유지 칼로리까지 점진적 증가

컷팅은 **인내의 게임**입니다. 단기간에 극적인 변화를 기대하지 말고, 꾸준히 원칙을 지켜나가세요. 몸은 거짓말하지 않습니다.
    `,
    contentEn: `
# The Complete Cutting Guide: Burn Fat While Preserving Muscle

A cut is a high-difficulty process that demands **reducing body fat** and **preserving muscle** simultaneously. The right strategy lets you reveal a defined physique without sacrificing hard-earned muscle.

## The Core Principles of Cutting

### Caloric Deficit
- **Basic formula**: Intake < Expenditure
- **Recommended deficit**: 300–750 kcal per day
- **Rate**: 0.5–1 kg per week (varies by current body fat level)

### Preventing Muscle Loss
- **Sufficient protein**: Bodyweight × 2.0–2.5 g
- **Maintain strength training**: Preserve as much weight and volume as possible
- **Appropriate pace**: Too-fast weight loss triggers muscle loss

## Cutting Nutrition Strategy

### Macronutrient Setup

**Protein**: Bodyweight × 2.0–2.5 g (top priority)
- **Muscle preservation**: Adequate amino acid supply
- **Satiety**: High thermic effect reduces overall intake
- **Sources**: Chicken breast, white fish, egg whites, protein powder

**Fat**: Bodyweight × 0.8–1.2 g (secure the minimum)
- **Hormones**: Maintain testosterone and growth hormone levels
- **Essential fatty acids**: Omega-3, Omega-6
- **Sources**: Nuts, olive oil, salmon, avocado

**Carbohydrates**: Remaining calories (the adjustable variable)
- **Training energy**: Supports high-intensity workouts
- **Timing**: Concentrate around training sessions
- **Sources**: Brown rice, sweet potato, oats, fruit

### Phased Cutting Approach

**Phase 1: Conservative Cut (Body fat 20%+)**
- Caloric deficit: 300–500 kcal
- Rate: 0.3–0.7 kg per week
- Duration: 3–6 months

**Phase 2: Aggressive Cut (Body fat 15–20%)**
- Caloric deficit: 500–750 kcal
- Rate: 0.5–1 kg per week
- Duration: 2–4 months

**Phase 3: Finishing Cut (Body fat under 15%)**
- Caloric deficit: 300–500 kcal
- Rate: 0.2–0.5 kg per week
- Duration: 2–3 months

### Sample Cutting Diet (70 kg Male, 2,000 kcal)

**Protein**: 150 g (600 kcal)
**Fat**: 65 g (585 kcal)
**Carbohydrates**: 200 g (800 kcal)

**Breakfast**:
- 4 egg whites + 1 whole egg
- Oatmeal 40 g + blueberries 50 g

**Snack 1**:
- Whey protein 30 g + water

**Lunch**:
- Chicken breast 120 g + brown rice 80 g + unlimited vegetables

**Snack 2**:
- Greek yogurt 150 g (non-fat)

**Dinner**:
- White fish 150 g + broccoli + sweet potato 100 g

**Snack 3** (post-workout):
- Banana + whey protein 20 g

## Cutting Training Strategy

### Strength Training (Top Priority)

**Goal**: Preserve as much muscle mass and strength as possible
**Frequency**: Each muscle group 2 times per week
**Intensity**: Maintain 85–95% of pre-cut weights
**Volume**: 80–90% of pre-cut volume

**Sample Upper/Lower Split**:

**Upper Body (Monday, Thursday)**
1. Bench press 4x6–8 (maintain weight)
2. Barbell row 4x6–8
3. Shoulder press 3x8–10
4. Lat pulldown 3x8–10
5. Dips 3x8–12
6. Bicep curl 3x10–12

**Lower Body (Tuesday, Friday)**
1. Squat 4x6–8 (maintain weight)
2. Romanian deadlift 3x8–10
3. Leg press 3x10–12
4. Leg curl 3x10–12
5. Bulgarian split squat 3x10–12
6. Calf raise 4x12–15

### Cardio

**LISS (Low-Intensity Steady State)**
- **Intensity**: Heart rate 120–140 bpm
- **Duration**: 30–60 minutes
- **Frequency**: 4–6 times per week
- **Advantage**: Low muscle loss risk, low recovery burden

**HIIT (High-Intensity Interval Training)**
- **Intensity**: Heart rate at 80–90% of max
- **Duration**: 15–25 minutes
- **Frequency**: 2–3 times per week
- **Advantage**: Time efficiency, afterburn effect

**Recommended combination**:
- LISS 4x + HIIT 2x per week
- LISS for 20–30 minutes after strength training
- Separate HIIT sessions for 15–20 minutes

## Supplements During a Cut

### Essential Supplements

**Whey Protein**
- **Purpose**: Reach daily protein target
- **How to use**: 1–2 times daily, 30–40 g per serving

**Multivitamin**
- **Purpose**: Compensate for micronutrient gaps from calorie restriction
- **How to use**: 1 tablet daily with a meal

**Omega-3**
- **Purpose**: Reduce inflammation, support hormone function
- **How to use**: 1–2 g of EPA+DHA per day

### Optional Supplements

**Caffeine**
- **Purpose**: Fat oxidation, improved exercise performance
- **How to use**: 100–400 mg pre-workout

**L-Carnitine**
- **Purpose**: Supports fat metabolism
- **How to use**: 2–3 g per day with meals

**CLA (Conjugated Linoleic Acid)**
- **Purpose**: Body fat reduction, muscle preservation
- **How to use**: 3–6 g per day with meals

## Common Problems During a Cut

### Plateau
**Cause**: Metabolic adaptation, needs calorie recalculation
**Solutions**:
1. Reduce calories by an additional 100–200 kcal
2. Add 10–15 minutes to cardio sessions
3. Introduce a refeed day (once per week)

### Muscle Loss
**Signals**: Rapid strength decline, visible reduction in muscle size
**Prevention**:
1. Increase protein to bodyweight × 2.5 g
2. Maintain strength training intensity
3. Slow down the weight loss rate (under 0.5 kg/week)

### Extreme Fatigue
**Cause**: Excessive caloric deficit, insufficient carbohydrates
**Solutions**:
1. Refeed day (double carbohydrates)
2. Deload week (reduce training volume by 50%)
3. Prioritize sleep (8–9 hours)

### Difficulty Managing Appetite
**Strategies**:
1. High-fiber foods (promote satiety)
2. Adequate hydration (3+ L per day)
3. Adjust meal frequency (personal preference)
4. Use sugar-free alternatives

## Cutting Success Tips

### Measurement and Monitoring
- **Body weight**: Daily at the same time, calculate weekly average
- **Circumference**: Waist, arms, thighs (once per week)
- **Photos**: Weekly under identical conditions
- **Body fat %**: Monthly InBody or caliper measurement

### Psychological Management
- **Realistic goals**: 2–4 kg loss per month
- **Drop perfectionism**: 80% adherence still equals success
- **Social support**: Help family and friends understand your goals
- **Reward system**: Small rewards for weekly goals achieved

### Handling Social Situations
**Dining out**:
- Check the menu in advance
- Choose protein-forward options
- Request sauces and dressings on the side

**Work social events**:
- Eat a light meal beforehand
- Minimize alcohol
- Return to normal diet the next day

## Ending the Cut and Reverse Dieting

### Signs It's Time to End the Cut
- Target body fat percentage achieved
- No weight change for 3+ weeks
- Extreme fatigue, compromised immune function
- The cut is disrupting your social life

### Reverse Diet
**Purpose**: Restore metabolic rate, prevent rebound
**Method**: Add 20–30 g carbohydrates and 5–10 g fat per week
**Duration**: 6–12 weeks
**Goal**: Gradually return calories to maintenance level

Cutting is a **game of patience**. Don't expect dramatic changes in a short time — steadily uphold your principles. Your body doesn't lie.
    `,
    author: 'Corevia Cut',
    publishedDate: '2025-09-17',
  },
]; 

