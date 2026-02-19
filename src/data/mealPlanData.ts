export interface Meal {
  name: string;
  nameEn: string;
  items: string[];
  itemsEn: string[];
  imageUrl?: string;
}

export interface MealPlan {
  id: string;
  category: 'intermittent' | 'lowcarb' | 'bulk' | 'balanced' | 'korean' | 'quick';
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  meals: Meal[];
  tags?: string[];
  tagsEn?: string[];
}

export const MEAL_PLAN_DATA: MealPlan[] = [
  // 간헐적 단식 다이어트 (한국인 맞춤)
  {
    id: 'intermittent-1',
    category: 'intermittent',
    title: '간헐적 단식 다이어트 1 (한식 중심)',
    titleEn: 'Intermittent Fasting Diet 1 (Korean Style)',
    description: '16:8 간헐적 단식으로 밥과 반찬 중심의 한국식 다이어트. 점심 12시, 저녁 7시 2끼 식사로 칼로리 제한과 대사 개선.',
    descriptionEn: '16:8 intermittent fasting with a rice and side dish-focused Korean diet. Two meals at 12 PM and 7 PM to restrict calories and improve metabolism.',
    calories: 1500, protein: 120, carbs: 150, fat: 50,
    meals: [
      {
        name: '점심 (12시)',
        nameEn: 'Lunch (12 PM)',
        items: ['현미밥 100g', '닭가슴살 구이 150g', '배추김치 50g', '시금치 나물 80g', '미역국 1그릇'],
        itemsEn: ['Brown rice 100g', 'Grilled chicken breast 150g', 'Napa kimchi 50g', 'Seasoned spinach 80g', 'Seaweed soup 1 bowl'],
      },
      {
        name: '저녁 (7시)',
        nameEn: 'Dinner (7 PM)',
        items: ['잡곡밥 80g', '고등어 구이 120g', '콩나물 무침 100g', '깍두기 30g'],
        itemsEn: ['Multigrain rice 80g', 'Grilled mackerel 120g', 'Seasoned bean sprouts 100g', 'Cubed radish kimchi 30g'],
      },
    ],
    tags: ['16:8 단식', '한식', '밥 중심'],
    tagsEn: ['16:8 Fasting', 'Korean', 'Rice-based'],
  },
  {
    id: 'intermittent-2',
    category: 'intermittent',
    title: '간헐적 단식 다이어트 2 (샐러드 중심)',
    titleEn: 'Intermittent Fasting Diet 2 (Salad-Focused)',
    description: '16:8 간헐적 단식으로 샐러드와 단백질 중심 식단. 탄수화물을 줄이고 포만감을 높이는 고단백 다이어트.',
    descriptionEn: '16:8 intermittent fasting with a salad and protein-centered diet. A high-protein diet that reduces carbohydrates and boosts satiety.',
    calories: 1400, protein: 140, carbs: 80, fat: 60,
    meals: [
      {
        name: '점심 (12시)',
        nameEn: 'Lunch (12 PM)',
        items: ['닭가슴살 샐러드 200g', '견과류 20g', '올리브오일 드레싱', '방울토마토'],
        itemsEn: ['Chicken breast salad 200g', 'Mixed nuts 20g', 'Olive oil dressing', 'Cherry tomatoes'],
      },
      {
        name: '저녁 (7시)',
        nameEn: 'Dinner (7 PM)',
        items: ['연어 구이 150g', '아보카도 1/2개', '양상추 샐러드', '삶은 계란 2개'],
        itemsEn: ['Grilled salmon 150g', 'Avocado 1/2', 'Romaine lettuce salad', 'Hard-boiled eggs 2'],
      },
    ],
    tags: ['16:8 단식', '샐러드', '저탄수'],
    tagsEn: ['16:8 Fasting', 'Salad', 'Low-carb'],
  },
  {
    id: 'intermittent-3',
    category: 'intermittent',
    title: '간헐적 단식 다이어트 3 (든든한 식사)',
    titleEn: 'Intermittent Fasting Diet 3 (Filling Meals)',
    description: '16:8 간헐적 단식으로 포만감 있는 식단. 국물과 채소로 포만감을 높인 현실적인 다이어트.',
    descriptionEn: '16:8 intermittent fasting with satisfying, filling meals. A practical diet that boosts satiety with soups and vegetables.',
    calories: 1350, protein: 110, carbs: 120, fat: 45,
    meals: [
      {
        name: '점심 (12시)',
        nameEn: 'Lunch (12 PM)',
        items: ['현미밥 70g', '두부김치 150g', '무국 1그릇', '콩나물 무침 80g'],
        itemsEn: ['Brown rice 70g', 'Tofu with kimchi 150g', 'Radish soup 1 bowl', 'Seasoned bean sprouts 80g'],
      },
      {
        name: '저녁 (7시)',
        nameEn: 'Dinner (7 PM)',
        items: ['잡곡밥 60g', '닭가슴살 구이 130g', '배추김치 40g', '시금치국 1그릇'],
        itemsEn: ['Multigrain rice 60g', 'Grilled chicken breast 130g', 'Napa kimchi 40g', 'Spinach soup 1 bowl'],
      },
    ],
    tags: ['16:8 단식', '포만감', '한식'],
    tagsEn: ['16:8 Fasting', 'High satiety', 'Korean'],
  },

  // 저탄수화물 다이어트 (한국인 맞춤)
  {
    id: 'lowcarb-1',
    category: 'lowcarb',
    title: '저탄수 다이어트 1 (밑반찬 중심)',
    titleEn: 'Low-Carb Diet 1 (Side Dish-Focused)',
    description: '밥을 줄이고 밑반찬과 단백질을 늘린 한국식 저탄수 다이어트. 익숙한 한국 음식으로 무리 없이 탄수화물 제한.',
    descriptionEn: 'A Korean low-carb diet that reduces rice and increases side dishes and protein. Effortlessly restrict carbohydrates with familiar Korean foods.',
    calories: 1600, protein: 130, carbs: 100, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['계란후라이 2개', '김 10장', '멸치볶음 30g', '두부 1/3모'],
        itemsEn: ['Fried eggs 2', 'Roasted seaweed 10 sheets', 'Stir-fried anchovies 30g', 'Tofu 1/3 block'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['현미밥 60g', '제육볶음 120g', '상추 10장', '오이무침 80g'],
        itemsEn: ['Brown rice 60g', 'Spicy pork stir-fry 120g', 'Lettuce 10 leaves', 'Seasoned cucumber 80g'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['잡곡밥 50g', '갈치구이 130g', '시금치 나물 100g', '배추김치 40g'],
        itemsEn: ['Multigrain rice 50g', 'Grilled hairtail 130g', 'Seasoned spinach 100g', 'Napa kimchi 40g'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['방울토마토', '견과류 20g'],
        itemsEn: ['Cherry tomatoes', 'Mixed nuts 20g'],
      },
    ],
    tags: ['저탄수', '밑반찬', '한식'],
    tagsEn: ['Low-carb', 'Side dishes', 'Korean'],
  },
  {
    id: 'lowcarb-2',
    category: 'lowcarb',
    title: '저탄수 다이어트 2 (구이 중심)',
    titleEn: 'Low-Carb Diet 2 (Grilled Foods-Focused)',
    description: '구이 요리 중심의 저탄수 다이어트. 고기와 생선 구이로 단백질을 충분히 섭취하며 탄수화물은 최소화.',
    descriptionEn: 'A low-carb diet centered on grilled foods. Get plenty of protein from grilled meat and fish while minimizing carbohydrates.',
    calories: 1550, protein: 140, carbs: 80, fat: 75,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['달걀후라이 2개', '김구이 10장', '오이 1/2개', '방울토마토 5개'],
        itemsEn: ['Fried eggs 2', 'Roasted seaweed 10 sheets', 'Cucumber 1/2', 'Cherry tomatoes 5'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['삼겹살 구이 100g', '상추 10장', '쌈장 1큰술', '배추김치 50g'],
        itemsEn: ['Grilled pork belly 100g', 'Lettuce 10 leaves', 'Ssamjang (dipping paste) 1 tbsp', 'Napa kimchi 50g'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['고등어 구이 140g', '무나물 100g', '깻잎 5장', '된장국 1그릇'],
        itemsEn: ['Grilled mackerel 140g', 'Seasoned radish 100g', 'Perilla leaves 5 leaves', 'Soybean paste soup 1 bowl'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['치즈 30g', '견과류 15g'],
        itemsEn: ['Cheese 30g', 'Mixed nuts 15g'],
      },
    ],
    tags: ['저탄수', '구이', '고단백'],
    tagsEn: ['Low-carb', 'Grilled', 'High protein'],
  },

  // 한국식 균형 식단
  {
    id: 'korean-1',
    category: 'korean',
    title: '전통 한식 균형 식단 1',
    titleEn: 'Traditional Korean Balanced Meal Plan 1',
    description: '조선시대부터 내려온 전통 한식의 지혜를 담은 균형 식단. 밥, 국, 반찬의 삼합으로 영양소 균형을 맞춘 건강식.',
    descriptionEn: 'A balanced diet embodying the wisdom of traditional Korean cuisine dating back to the Joseon era. A wholesome meal balancing nutrients through the classic combination of rice, soup, and side dishes.',
    calories: 2000, protein: 100, carbs: 250, fat: 65,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['현미밥 100g', '된장국 1그릇', '김구이 10장', '시금치나물 80g', '멸치볶음 30g'],
        itemsEn: ['Brown rice 100g', 'Soybean paste soup 1 bowl', 'Roasted seaweed 10 sheets', 'Seasoned spinach 80g', 'Stir-fried anchovies 30g'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['잡곡밥 120g', '김치찌개 1그릇', '생선구이 100g', '콩나물무침 100g', '깍두기 30g'],
        itemsEn: ['Multigrain rice 120g', 'Kimchi stew 1 bowl', 'Grilled fish 100g', 'Seasoned bean sprouts 100g', 'Cubed radish kimchi 30g'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['보리밥 100g', '미역국 1그릇', '불고기 80g', '도라지무침 80g', '배추김치 50g'],
        itemsEn: ['Barley rice 100g', 'Seaweed soup 1 bowl', 'Bulgogi (marinated beef) 80g', 'Seasoned bellflower root 80g', 'Napa kimchi 50g'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['호두 20g', '대추 3개'],
        itemsEn: ['Walnuts 20g', 'Jujubes (dried dates) 3'],
      },
    ],
    tags: ['전통 한식', '균형', '발효식품'],
    tagsEn: ['Traditional Korean', 'Balanced', 'Fermented foods'],
  },
  {
    id: 'korean-2',
    category: 'korean',
    title: '전통 한식 균형 식단 2',
    titleEn: 'Traditional Korean Balanced Meal Plan 2',
    description: '계절 채소와 제철 음식을 활용한 한국식 건강 식단. 자연의 리듬에 맞춘 음식으로 몸의 균형을 맞춘 웰빙 식단.',
    descriptionEn: 'A healthy Korean diet using seasonal vegetables and fresh, in-season ingredients. A wellness meal plan that harmonizes the body by eating in tune with nature\'s rhythms.',
    calories: 1950, protein: 95, carbs: 240, fat: 60,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['흑미밥', '북어국', '김치', '콩자반', '무나물'],
        itemsEn: ['Black rice', 'Dried pollack soup', 'Kimchi', 'Glazed soy beans', 'Seasoned radish'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['현미밥', '순두부찌개', '고등어조림', '숙주나물', '열무김치'],
        itemsEn: ['Brown rice', 'Soft tofu stew', 'Braised mackerel', 'Seasoned mung bean sprouts', 'Young radish kimchi'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['잡곡밥', '맑은 국', '닭찜 100g', '미나리무침', '오이소박이'],
        itemsEn: ['Multigrain rice', 'Clear soup', 'Braised chicken 100g', 'Seasoned water parsley', 'Stuffed cucumber kimchi'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['감 1개', '잣 15g'],
        itemsEn: ['Persimmon 1', 'Pine nuts 15g'],
      },
    ],
    tags: ['제철 음식', '자연식', '발효'],
    tagsEn: ['Seasonal', 'Natural', 'Fermented'],
  },

  // 근비대 식단 (한국인 맞춤)
  {
    id: 'bulk-korean-1',
    category: 'bulk',
    title: '한국식 근비대 식단 1',
    titleEn: 'Korean Muscle Building Meal Plan 1',
    description: '한국인이 좋아하는 음식으로 구성된 근육 증가 식단. 밥과 고기를 충분히 섭취하여 근육 성장에 필요한 에너지와 단백질 공급.',
    descriptionEn: 'A muscle-building diet composed of foods Koreans love. Consume plenty of rice and meat to supply the energy and protein needed for muscle growth.',
    calories: 2800, protein: 180, carbs: 320, fat: 90,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['현미밥 100g', '계란후라이 2개', '김구이 10장', '멸치볶음 40g', '된장국 1그릇'],
        itemsEn: ['Brown rice 100g', 'Fried eggs 2', 'Roasted seaweed 10 sheets', 'Stir-fried anchovies 40g', 'Soybean paste soup 1 bowl'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['잡곡밥 120g', '불고기 200g', '된장찌개 1그릇', '시금치나물 100g', '배추김치 50g'],
        itemsEn: ['Multigrain rice 120g', 'Bulgogi (marinated beef) 200g', 'Soybean paste stew 1 bowl', 'Seasoned spinach 100g', 'Napa kimchi 50g'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['현미밥 100g', '닭볶음탕 150g', '미역국 1그릇', '콩나물무침 100g'],
        itemsEn: ['Brown rice 100g', 'Spicy braised chicken 150g', 'Seaweed soup 1 bowl', 'Seasoned bean sprouts 100g'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['바나나 우유', '견과류 30g', '고구마 100g'],
        itemsEn: ['Banana milk', 'Mixed nuts 30g', 'Sweet potato 100g'],
      },
    ],
    tags: ['근비대', '한식', '고칼로리'],
    tagsEn: ['Muscle building', 'Korean', 'High calorie'],
  },
  {
    id: 'bulk-korean-2',
    category: 'bulk',
    title: '한국식 근비대 식단 2',
    titleEn: 'Korean Muscle Building Meal Plan 2',
    description: '육류와 해산물을 활용한 한국식 벌크업 식단. 다양한 단백질 소스와 충분한 탄수화물로 근육 성장 극대화.',
    descriptionEn: 'A Korean bulk-up diet using meat and seafood. Maximize muscle growth with diverse protein sources and ample carbohydrates.',
    calories: 3000, protein: 200, carbs: 350, fat: 100,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['흰밥 120g', '김치찌개', '계란후라이 2개', '김구이', '멸치젓갈'],
        itemsEn: ['White rice 120g', 'Kimchi stew', 'Fried eggs 2', 'Roasted seaweed', 'Anchovy sauce'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['현미밥 130g', '갈비찜 180g', '미역국', '도라지무침', '깍두기'],
        itemsEn: ['Brown rice 130g', 'Braised short ribs 180g', 'Seaweed soup', 'Seasoned bellflower root', 'Cubed radish kimchi'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['잡곡밥 110g', '생선찜 150g', '된장국', '시금치나물', '오이무침'],
        itemsEn: ['Multigrain rice 110g', 'Steamed fish 150g', 'Soybean paste soup', 'Seasoned spinach', 'Seasoned cucumber'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['단백질 쉐이크', '바나나 2개', '견과류 40g'],
        itemsEn: ['Protein shake', 'Bananas 2', 'Mixed nuts 40g'],
      },
    ],
    tags: ['근비대', '고단백', '전통음식'],
    tagsEn: ['Muscle building', 'High protein', 'Traditional'],
  },

  // 빠른 식단 (직장인용)
  {
    id: 'quick-1',
    category: 'quick',
    title: '직장인 간편 식단 1',
    titleEn: 'Quick Meal Plan for Office Workers 1',
    description: '바쁜 직장인을 위한 10분 내 준비 가능한 간편 식단. 편의점이나 마트에서 쉽게 구할 수 있는 재료로 구성.',
    descriptionEn: 'An easy meal plan for busy office workers, ready in under 10 minutes. Composed of ingredients easily found at convenience stores or supermarkets.',
    calories: 1800, protein: 110, carbs: 180, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['그릭요거트', '견과류 그래놀라', '바나나 1개'],
        itemsEn: ['Greek yogurt', 'Nut granola', 'Banana 1'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['편의점 도시락 (닭가슴살)', '샐러드', '우유 200ml'],
        itemsEn: ['Convenience store lunch box (chicken breast)', 'Salad', 'Milk 200ml'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['즉석 현미밥', '참치캔', '김치', '계란 1개'],
        itemsEn: ['Instant brown rice', 'Canned tuna', 'Kimchi', 'Egg 1'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['단백질바', '사과 1개'],
        itemsEn: ['Protein bar', 'Apple 1'],
      },
    ],
    tags: ['간편', '직장인', '편의점'],
    tagsEn: ['Quick & easy', 'Office worker', 'Convenience store'],
  },
  {
    id: 'quick-2',
    category: 'quick',
    title: '직장인 간편 식단 2',
    titleEn: 'Quick Meal Plan for Office Workers 2',
    description: '배달음식을 활용한 스마트 다이어트 식단. 건강한 배달음식 선택법과 조절법으로 바쁜 일상에서도 건강 관리.',
    descriptionEn: 'A smart diet using food delivery. Manage your health even in a busy daily life by choosing and adjusting healthy delivery options.',
    calories: 1700, protein: 100, carbs: 170, fat: 65,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['토스트 2장', '스크램블 에그', '우유 200ml'],
        itemsEn: ['Toast 2 slices', 'Scrambled eggs', 'Milk 200ml'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['샐러드 도시락', '닭가슴살', '현미밥 반공기'],
        itemsEn: ['Salad lunch box', 'Chicken breast', 'Brown rice half serving'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['회덮밥 (밥 적게)', '미소국', '김치'],
        itemsEn: ['Raw fish rice bowl (less rice)', 'Miso soup', 'Kimchi'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['프로틴 쉐이크', '견과류 20g'],
        itemsEn: ['Protein shake', 'Mixed nuts 20g'],
      },
    ],
    tags: ['배달음식', '현실적', '도시락'],
    tagsEn: ['Delivery food', 'Practical', 'Lunch box'],
  },

  // 저탄수화물 (한국식)
  {
    id: 'lowcarb-korean-1',
    category: 'lowcarb',
    title: '한국식 저탄수 다이어트 1',
    titleEn: 'Korean Low-Carb Diet 1',
    description: '밥을 줄이고 반찬을 늘린 한국식 저탄수 다이어트. 김치, 나물, 구이 요리로 포만감을 높이며 탄수화물 제한.',
    descriptionEn: 'A Korean low-carb diet that reduces rice and increases side dishes. Boost satiety and restrict carbohydrates with kimchi, seasoned vegetables, and grilled dishes.',
    calories: 1600, protein: 130, carbs: 100, fat: 75,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['계란후라이 2개', '김구이 10장', '멸치볶음 30g', '배추김치 40g', '두부 1/2모'],
        itemsEn: ['Fried eggs 2', 'Roasted seaweed 10 sheets', 'Stir-fried anchovies 30g', 'Napa kimchi 40g', 'Tofu 1/2 block'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['현미밥 60g', '닭갈비 150g', '상추 10장', '된장국 1그릇', '오이무침 80g'],
        itemsEn: ['Brown rice 60g', 'Spicy stir-fried chicken (dakgalbi) 150g', 'Lettuce 10 leaves', 'Soybean paste soup 1 bowl', 'Seasoned cucumber 80g'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['갈치구이 120g', '시금치나물 100g', '콩나물국 1그릇', '깍두기 30g'],
        itemsEn: ['Grilled hairtail 120g', 'Seasoned spinach 100g', 'Bean sprout soup 1 bowl', 'Cubed radish kimchi 30g'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['방울토마토 10개', '아몬드 15g'],
        itemsEn: ['Cherry tomatoes 10', 'Almonds 15g'],
      },
    ],
    tags: ['저탄수', '반찬', '구이'],
    tagsEn: ['Low-carb', 'Side dishes', 'Grilled'],
  },
  {
    id: 'lowcarb-korean-2',
    category: 'lowcarb',
    title: '한국식 저탄수 다이어트 2',
    titleEn: 'Korean Low-Carb Diet 2',
    description: '찌개와 국물 요리 중심의 저탄수 식단. 국물로 포만감을 높이고 야채와 단백질 위주로 구성한 든든한 다이어트.',
    descriptionEn: 'A low-carb diet centered on stews and broth-based dishes. A filling diet that increases satiety with soup broth and focuses on vegetables and protein.',
    calories: 1550, protein: 125, carbs: 90, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['달걀국', '김치', '멸치젓갈', '두부조림'],
        itemsEn: ['Egg soup', 'Kimchi', 'Anchovy sauce', 'Braised tofu'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['김치찌개 (돼지고기)', '현미밥 50g', '시금치나물', '깻잎절임'],
        itemsEn: ['Kimchi stew (pork)', 'Brown rice 50g', 'Seasoned spinach', 'Pickled perilla leaves'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['순두부찌개', '생선구이 100g', '콩나물무침', '오이소박이'],
        itemsEn: ['Soft tofu stew', 'Grilled fish 100g', 'Seasoned bean sprouts', 'Stuffed cucumber kimchi'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['삶은 계란 1개', '견과류 20g'],
        itemsEn: ['Hard-boiled egg 1', 'Mixed nuts 20g'],
      },
    ],
    tags: ['저탄수', '찌개', '국물'],
    tagsEn: ['Low-carb', 'Stew', 'Broth-based'],
  },

  // 균형 식단 (한국인 표준)
  {
    id: 'balanced-korean-1',
    category: 'balanced',
    title: '한국인 표준 균형 식단 1',
    titleEn: 'Standard Korean Balanced Meal Plan 1',
    description: '한국인 영양 기준에 맞춘 표준 균형 식단. 밥, 국, 반찬의 완벽한 조화로 모든 영양소를 골고루 섭취.',
    descriptionEn: 'A standard balanced diet tailored to Korean nutritional guidelines. Consume all nutrients evenly through the perfect harmony of rice, soup, and side dishes.',
    calories: 2200, protein: 110, carbs: 280, fat: 75,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['현미밥', '된장국', '김구이', '시금치나물', '멸치볶음', '김치'],
        itemsEn: ['Brown rice', 'Soybean paste soup', 'Roasted seaweed', 'Seasoned spinach', 'Stir-fried anchovies', 'Kimchi'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['잡곡밥', '불고기 100g', '미역국', '콩나물무침', '깍두기'],
        itemsEn: ['Multigrain rice', 'Bulgogi (marinated beef) 100g', 'Seaweed soup', 'Seasoned bean sprouts', 'Cubed radish kimchi'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['현미밥', '생선조림 120g', '된장찌개', '도라지무침', '배추김치'],
        itemsEn: ['Brown rice', 'Braised fish 120g', 'Soybean paste stew', 'Seasoned bellflower root', 'Napa kimchi'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['사과 1개', '견과류 25g'],
        itemsEn: ['Apple 1', 'Mixed nuts 25g'],
      },
    ],
    tags: ['균형', '표준', '한식 정식'],
    tagsEn: ['Balanced', 'Standard', 'Korean set meal'],
  },
  {
    id: 'balanced-korean-2',
    category: 'balanced',
    title: '한국인 표준 균형 식단 2',
    titleEn: 'Standard Korean Balanced Meal Plan 2',
    description: '계절 식재료를 활용한 한국식 웰빙 식단. 제철 채소와 발효식품으로 장 건강과 면역력을 높이는 건강 관리 식단.',
    descriptionEn: 'A Korean wellness diet utilizing seasonal ingredients. A health management diet that improves gut health and immunity with seasonal vegetables and fermented foods.',
    calories: 2150, protein: 105, carbs: 270, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['흑미밥', '북어국', '김치', '콩자반', '무나물'],
        itemsEn: ['Black rice', 'Dried pollack soup', 'Kimchi', 'Glazed soy beans', 'Seasoned radish'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['보리밥', '순두부찌개', '고등어구이', '숙주나물', '열무김치'],
        itemsEn: ['Barley rice', 'Soft tofu stew', 'Grilled mackerel', 'Seasoned mung bean sprouts', 'Young radish kimchi'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['현미밥', '맑은국', '닭찜 100g', '미나리무침', '오이소박이'],
        itemsEn: ['Brown rice', 'Clear soup', 'Braised chicken 100g', 'Seasoned water parsley', 'Stuffed cucumber kimchi'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['배 1개', '호두 20g'],
        itemsEn: ['Pear 1', 'Walnuts 20g'],
      },
    ],
    tags: ['제철', '발효식품', '웰빙'],
    tagsEn: ['Seasonal', 'Fermented foods', 'Wellness'],
  },

  // 벌크업 (한국식 고칼로리)
  {
    id: 'bulk-power-1',
    category: 'bulk',
    title: '한국식 파워 벌크업 1',
    titleEn: 'Korean Power Bulk-Up Plan 1',
    description: '한국인이 좋아하는 고칼로리 음식으로 구성된 근육 증가 식단. 든든한 한 끼로 충분한 에너지와 단백질을 공급.',
    descriptionEn: 'A muscle-building diet composed of high-calorie Korean favorites. Supply ample energy and protein with hearty, satisfying meals.',
    calories: 3200, protein: 200, carbs: 400, fat: 110,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['현미밥 150g', '김치찌개', '계란후라이 2개', '김구이', '멸치볶음'],
        itemsEn: ['Brown rice 150g', 'Kimchi stew', 'Fried eggs 2', 'Roasted seaweed', 'Stir-fried anchovies'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['잡곡밥 180g', '갈비찜 200g', '된장국', '시금치나물', '깍두기'],
        itemsEn: ['Multigrain rice 180g', 'Braised short ribs 200g', 'Soybean paste soup', 'Seasoned spinach', 'Cubed radish kimchi'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['현미밥 140g', '삼계탕 (닭 1/2마리)', '깻잎절임', '배추김치'],
        itemsEn: ['Brown rice 140g', 'Samgyetang (ginseng chicken soup, half chicken)', 'Pickled perilla leaves', 'Napa kimchi'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['바나나 우유 500ml', '견과류 40g', '고구마 200g'],
        itemsEn: ['Banana milk 500ml', 'Mixed nuts 40g', 'Sweet potato 200g'],
      },
    ],
    tags: ['고칼로리', '든든함', '전통'],
    tagsEn: ['High calorie', 'Filling', 'Traditional'],
  },

  // 간헐적 단식 추가 변형
  {
    id: 'intermittent-4',
    category: 'intermittent',
    title: '간헐적 단식 다이어트 4 (고단백)',
    titleEn: 'Intermittent Fasting Diet 4 (High Protein)',
    description: '16:8 간헐적 단식으로 고단백 위주 식단. 근손실 방지에 중점을 둔 다이어트로 운동하는 사람들에게 적합.',
    descriptionEn: '16:8 intermittent fasting with a high-protein diet focused on preventing muscle loss. Ideal for people who exercise regularly.',
    calories: 1450, protein: 150, carbs: 90, fat: 55,
    meals: [
      {
        name: '점심 (12시)',
        nameEn: 'Lunch (12 PM)',
        items: ['닭가슴살 200g', '고구마 100g', '브로콜리', '올리브오일'],
        itemsEn: ['Chicken breast 200g', 'Sweet potato 100g', 'Broccoli', 'Olive oil'],
      },
      {
        name: '저녁 (7시)',
        nameEn: 'Dinner (7 PM)',
        items: ['연어 150g', '아보카도 1/2개', '견과류 20g', '방울토마토'],
        itemsEn: ['Salmon 150g', 'Avocado 1/2', 'Mixed nuts 20g', 'Cherry tomatoes'],
      },
    ],
    tags: ['16:8 단식', '고단백', '근손실 방지'],
    tagsEn: ['16:8 Fasting', 'High protein', 'Prevent muscle loss'],
  },
  {
    id: 'intermittent-5',
    category: 'intermittent',
    title: '간헐적 단식 다이어트 5 (혼합식)',
    titleEn: 'Intermittent Fasting Diet 5 (Mixed Cuisine)',
    description: '16:8 간헐적 단식으로 한식과 양식을 적절히 조합한 식단. 다양한 맛을 즐기며 지속 가능한 다이어트.',
    descriptionEn: '16:8 intermittent fasting with a diet that combines Korean and Western cuisine. A sustainable diet that lets you enjoy a variety of flavors.',
    calories: 1550, protein: 125, carbs: 130, fat: 65,
    meals: [
      {
        name: '점심 (12시)',
        nameEn: 'Lunch (12 PM)',
        items: ['현미밥 70g', '닭가슴살 샐러드', '된장국', '김치'],
        itemsEn: ['Brown rice 70g', 'Chicken breast salad', 'Soybean paste soup', 'Kimchi'],
      },
      {
        name: '저녁 (7시)',
        nameEn: 'Dinner (7 PM)',
        items: ['연어 스테이크 130g', '퀴노아 50g', '아스파라거스', '견과류'],
        itemsEn: ['Salmon steak 130g', 'Quinoa 50g', 'Asparagus', 'Mixed nuts'],
      },
    ],
    tags: ['16:8 단식', '혼합식', '지속가능'],
    tagsEn: ['16:8 Fasting', 'Mixed cuisine', 'Sustainable'],
  },

  // 저탄수 추가 변형
  {
    id: 'lowcarb-3',
    category: 'lowcarb',
    title: '저탄수 다이어트 3 (서양식)',
    titleEn: 'Low-Carb Diet 3 (Western Style)',
    description: '서양식 저탄수 다이어트. 스테이크, 샐러드, 치즈 등 서양 음식으로 구성된 맛있는 저탄수 식단.',
    descriptionEn: 'A Western-style low-carb diet. A delicious low-carb diet composed of Western foods such as steak, salad, and cheese.',
    calories: 1650, protein: 135, carbs: 85, fat: 80,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['스크램블 에그 2개', '베이컨 2조각', '아보카도 1/2개', '체리토마토'],
        itemsEn: ['Scrambled eggs 2', 'Bacon 2 strips', 'Avocado 1/2', 'Cherry tomatoes'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['치킨 시저 샐러드', '모짜렐라 치즈 30g', '올리브오일 드레싱'],
        itemsEn: ['Chicken Caesar salad', 'Mozzarella cheese 30g', 'Olive oil dressing'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['소고기 스테이크 150g', '버터 브로콜리', '견과류 샐러드'],
        itemsEn: ['Beef steak 150g', 'Butter broccoli', 'Mixed nut salad'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['그릭요거트 100g', '견과류 믹스 20g'],
        itemsEn: ['Greek yogurt 100g', 'Mixed nuts 20g'],
      },
    ],
    tags: ['저탄수', '서양식', '스테이크'],
    tagsEn: ['Low-carb', 'Western', 'Steak'],
  },
  {
    id: 'lowcarb-4',
    category: 'lowcarb',
    title: '저탄수 다이어트 4 (해산물)',
    titleEn: 'Low-Carb Diet 4 (Seafood)',
    description: '해산물 중심의 저탄수 다이어트. 생선과 해산물의 풍부한 단백질과 오메가3로 건강하게 체중 감량.',
    descriptionEn: 'A seafood-centered low-carb diet. Lose weight healthily with the rich protein and omega-3 fatty acids from fish and seafood.',
    calories: 1580, protein: 140, carbs: 75, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['연어 스모크 80g', '아보카도 토스트 1장', '삶은 계란 1개'],
        itemsEn: ['Smoked salmon 80g', 'Avocado toast 1 slice', 'Hard-boiled egg 1'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['참치 샐러드', '새우 10마리', '올리브오일', '양상추'],
        itemsEn: ['Tuna salad', 'Shrimp 10', 'Olive oil', 'Iceberg lettuce'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['갈치구이 120g', '시금치 나물', '미역국', '김치'],
        itemsEn: ['Grilled hairtail 120g', 'Seasoned spinach', 'Seaweed soup', 'Kimchi'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['견과류 15g', '치즈 20g'],
        itemsEn: ['Mixed nuts 15g', 'Cheese 20g'],
      },
    ],
    tags: ['저탄수', '해산물', '오메가3'],
    tagsEn: ['Low-carb', 'Seafood', 'Omega-3'],
  },

  // 균형식단 추가
  {
    id: 'balanced-1',
    category: 'balanced',
    title: '일반인 표준 균형 식단 1',
    titleEn: 'General Balanced Meal Plan 1',
    description: '운동하지 않는 일반인을 위한 표준 균형 식단. 적당한 칼로리와 영양소 비율로 건강한 체중 유지.',
    descriptionEn: 'A standard balanced diet for non-exercisers. Maintain a healthy weight with moderate calories and balanced nutrient ratios.',
    calories: 2000, protein: 100, carbs: 250, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['토스트 2장', '계란후라이', '우유 200ml', '바나나 1개'],
        itemsEn: ['Toast 2 slices', 'Fried egg', 'Milk 200ml', 'Banana 1'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['현미밥', '불고기 100g', '된장찌개', '시금치나물', '김치'],
        itemsEn: ['Brown rice', 'Bulgogi (marinated beef) 100g', 'Soybean paste stew', 'Seasoned spinach', 'Kimchi'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['파스타 80g', '닭가슴살 120g', '토마토 소스', '샐러드'],
        itemsEn: ['Pasta 80g', 'Chicken breast 120g', 'Tomato sauce', 'Salad'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['사과 1개', '견과류 20g'],
        itemsEn: ['Apple 1', 'Mixed nuts 20g'],
      },
    ],
    tags: ['표준', '일반인', '체중유지'],
    tagsEn: ['Standard', 'General', 'Weight maintenance'],
  },
  {
    id: 'balanced-2',
    category: 'balanced',
    title: '일반인 표준 균형 식단 2',
    titleEn: 'General Balanced Meal Plan 2',
    description: '다양한 음식을 즐기면서 영양 균형을 맞춘 식단. 한식과 양식을 적절히 조합한 현실적인 건강식.',
    descriptionEn: 'A diet that balances nutrition while enjoying a variety of foods. A practical, healthy diet that appropriately combines Korean and Western cuisine.',
    calories: 2100, protein: 105, carbs: 260, fat: 75,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['오트밀', '바나나', '견과류', '우유'],
        itemsEn: ['Oatmeal', 'Banana', 'Mixed nuts', 'Milk'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['김치볶음밥', '계란후라이', '미역국', '단무지'],
        itemsEn: ['Kimchi fried rice', 'Fried egg', 'Seaweed soup', 'Pickled radish'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['치킨 샐러드', '현미밥 반공기', '양송이 스프'],
        itemsEn: ['Chicken salad', 'Brown rice half serving', 'Mushroom soup'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['요거트', '베리류 50g'],
        itemsEn: ['Yogurt', 'Mixed berries 50g'],
      },
    ],
    tags: ['다양성', '혼합식', '현실적'],
    tagsEn: ['Variety', 'Mixed cuisine', 'Practical'],
  },

  // 근비대 추가 변형
  {
    id: 'bulk-3',
    category: 'bulk',
    title: '클린 벌크업 식단 (서양식)',
    titleEn: 'Clean Bulk-Up Meal Plan (Western Style)',
    description: '서양식 클린 벌크업 식단. 닭가슴살, 현미, 견과류 등 깨끗한 음식으로 근육량 증가와 체지방 관리 동시 진행.',
    descriptionEn: 'A Western-style clean bulk-up diet. Simultaneously increase muscle mass and manage body fat with clean foods like chicken breast, brown rice, and nuts.',
    calories: 2900, protein: 185, carbs: 330, fat: 95,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['오트밀 100g', '바나나 2개', '아몬드 30g', '프로틴 파우더 30g'],
        itemsEn: ['Oatmeal 100g', 'Bananas 2', 'Almonds 30g', 'Protein powder 30g'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['현미밥 120g', '닭가슴살 200g', '고구마 150g', '브로콜리'],
        itemsEn: ['Brown rice 120g', 'Chicken breast 200g', 'Sweet potato 150g', 'Broccoli'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['연어 150g', '퀴노아 100g', '아보카도 1/2개', '아스파라거스'],
        itemsEn: ['Salmon 150g', 'Quinoa 100g', 'Avocado 1/2', 'Asparagus'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['그릭요거트 200g', '견과류 30g', '베리류 100g'],
        itemsEn: ['Greek yogurt 200g', 'Mixed nuts 30g', 'Mixed berries 100g'],
      },
    ],
    tags: ['클린벌크', '서양식', '체지방관리'],
    tagsEn: ['Clean bulk', 'Western', 'Fat management'],
  },
  {
    id: 'bulk-4',
    category: 'bulk',
    title: '파워 벌크업 식단 (혼합)',
    titleEn: 'Power Bulk-Up Meal Plan (Mixed)',
    description: '최대 근육량 증가를 위한 고칼로리 혼합 식단. 한식과 양식을 조합하여 높은 칼로리와 단백질을 맛있게 섭취.',
    descriptionEn: 'A high-calorie mixed diet for maximum muscle gain. Combine Korean and Western cuisine to deliciously consume high calories and protein.',
    calories: 3400, protein: 220, carbs: 380, fat: 120,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['토스트 3장', '스크램블 에그 3개', '베이컨 3조각', '우유 300ml'],
        itemsEn: ['Toast 3 slices', 'Scrambled eggs 3', 'Bacon 3 strips', 'Milk 300ml'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['잡곡밥 150g', '갈비 200g', '된장찌개', '김치', '고구마 100g'],
        itemsEn: ['Multigrain rice 150g', 'Galbi (beef short ribs) 200g', 'Soybean paste stew', 'Kimchi', 'Sweet potato 100g'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['파스타 120g', '치킨 스테이크 200g', '크림소스', '치즈 30g'],
        itemsEn: ['Pasta 120g', 'Chicken steak 200g', 'Cream sauce', 'Cheese 30g'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['바나나 쉐이크', '견과류 40g', '단백질바'],
        itemsEn: ['Banana shake', 'Mixed nuts 40g', 'Protein bar'],
      },
    ],
    tags: ['파워벌크', '고칼로리', '혼합식'],
    tagsEn: ['Power bulk', 'High calorie', 'Mixed cuisine'],
  },

  // 간편식 추가
  {
    id: 'quick-3',
    category: 'quick',
    title: '직장인 도시락 식단',
    titleEn: 'Office Worker Lunch Box Meal Plan',
    description: '도시락으로 해결하는 스마트한 식단 관리. 편의점과 도시락 전문점을 활용한 바쁜 직장인을 위한 현실적 솔루션.',
    descriptionEn: 'Smart diet management solved with lunch boxes. A realistic solution for busy office workers using convenience stores and lunch box specialty shops.',
    calories: 1850, protein: 115, carbs: 190, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['편의점 샌드위치', '바나나 우유', '견과류 15g'],
        itemsEn: ['Convenience store sandwich', 'Banana milk', 'Mixed nuts 15g'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['도시락 (닭가슴살)', '미니 샐러드', '우유 200ml'],
        itemsEn: ['Lunch box (chicken breast)', 'Mini salad', 'Milk 200ml'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['컵밥 (불고기)', '계란 1개', '김치', '단무지'],
        itemsEn: ['Cup rice (bulgogi)', 'Egg 1', 'Kimchi', 'Pickled radish'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['프로틴바', '사과 1개'],
        itemsEn: ['Protein bar', 'Apple 1'],
      },
    ],
    tags: ['도시락', '편의점', '직장인'],
    tagsEn: ['Lunch box', 'Convenience store', 'Office worker'],
  },
  {
    id: 'quick-4',
    category: 'quick',
    title: '배달음식 활용 식단',
    titleEn: 'Delivery Food Meal Plan',
    description: '건강한 배달음식 선택으로 만드는 스마트 식단. 올바른 배달음식 선택법과 칼로리 조절법으로 편리하게 식단 관리.',
    descriptionEn: 'A smart diet created by choosing healthy delivery food. Conveniently manage your diet with the right delivery food choices and calorie control.',
    calories: 1900, protein: 110, carbs: 200, fat: 75,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['토스트 2장', '아메리카노', '바나나 1개'],
        itemsEn: ['Toast 2 slices', 'Americano', 'Banana 1'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['포케볼 (연어)', '현미밥', '아보카도', '견과류'],
        itemsEn: ['Poke bowl (salmon)', 'Brown rice', 'Avocado', 'Mixed nuts'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['치킨 샐러드 (배달)', '고구마 100g', '방울토마토'],
        itemsEn: ['Chicken salad (delivery)', 'Sweet potato 100g', 'Cherry tomatoes'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['그릭요거트', '베리류 50g'],
        itemsEn: ['Greek yogurt', 'Mixed berries 50g'],
      },
    ],
    tags: ['배달음식', '포케볼', '현실적'],
    tagsEn: ['Delivery food', 'Poke bowl', 'Practical'],
  },

  // 저탄수 추가 변형 (더 다양하게)
  {
    id: 'lowcarb-5',
    category: 'lowcarb',
    title: '저탄수 다이어트 5 (샐러드 중심)',
    titleEn: 'Low-Carb Diet 5 (Salad-Focused)',
    description: '샐러드 중심의 저탄수 다이어트. 다양한 채소와 단백질로 포만감을 높이며 탄수화물을 최소화한 건강한 다이어트.',
    descriptionEn: 'A salad-centered low-carb diet. A healthy diet that boosts satiety with diverse vegetables and protein while minimizing carbohydrates.',
    calories: 1500, protein: 130, carbs: 85, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['그릭요거트 150g', '견과류 20g', '베리류 50g'],
        itemsEn: ['Greek yogurt 150g', 'Mixed nuts 20g', 'Mixed berries 50g'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['치킨 시저 샐러드', '삶은 계란 2개', '올리브오일 드레싱'],
        itemsEn: ['Chicken Caesar salad', 'Hard-boiled eggs 2', 'Olive oil dressing'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['연어 샐러드 150g', '아보카도 1/2개', '방울토마토', '견과류'],
        itemsEn: ['Salmon salad 150g', 'Avocado 1/2', 'Cherry tomatoes', 'Mixed nuts'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['치즈 30g', '아몬드 15g'],
        itemsEn: ['Cheese 30g', 'Almonds 15g'],
      },
    ],
    tags: ['저탄수', '샐러드', '채소중심'],
    tagsEn: ['Low-carb', 'Salad', 'Veggie-focused'],
  },
  {
    id: 'lowcarb-6',
    category: 'lowcarb',
    title: '저탄수 다이어트 6 (케토 스타일)',
    titleEn: 'Low-Carb Diet 6 (Keto Style)',
    description: '케토제닉에 가까운 극저탄수 식단. 지방을 에너지원으로 활용하여 빠른 체중감량을 목표로 하는 고급 다이어트.',
    descriptionEn: 'A very low-carb diet close to ketogenic. An advanced diet aimed at rapid weight loss by using fat as an energy source.',
    calories: 1400, protein: 120, carbs: 50, fat: 95,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['아보카도 1개', '달걀 2개', '베이컨 2조각', '치즈 20g'],
        itemsEn: ['Avocado 1', 'Eggs 2', 'Bacon 2 strips', 'Cheese 20g'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['연어 150g', '견과류 30g', '올리브오일 샐러드'],
        itemsEn: ['Salmon 150g', 'Mixed nuts 30g', 'Olive oil salad'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['소고기 120g', '버터 브로콜리', '치즈 25g'],
        itemsEn: ['Beef 120g', 'Butter broccoli', 'Cheese 25g'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['견과류 20g', '다크초콜릿 15g'],
        itemsEn: ['Mixed nuts 20g', 'Dark chocolate 15g'],
      },
    ],
    tags: ['케토', '극저탄수', '고지방'],
    tagsEn: ['Keto', 'Very low-carb', 'High fat'],
  },

  // 균형식단 추가 (더 다양하게)
  {
    id: 'balanced-3',
    category: 'balanced',
    title: '운동인 균형 식단 1',
    titleEn: 'Athlete Balanced Meal Plan 1',
    description: '주 3-4회 운동하는 사람을 위한 균형 식단. 운동 전후 영양소 타이밍을 고려한 퍼포먼스 향상 식단.',
    descriptionEn: 'A balanced diet for people who exercise 3-4 times a week. A performance-enhancing diet that considers nutrient timing before and after workouts.',
    calories: 2400, protein: 140, carbs: 280, fat: 85,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['오트밀 80g', '바나나 1개', '견과류 25g', '우유 250ml'],
        itemsEn: ['Oatmeal 80g', 'Banana 1', 'Mixed nuts 25g', 'Milk 250ml'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['현미밥 100g', '닭가슴살 180g', '고구마 120g', '샐러드'],
        itemsEn: ['Brown rice 100g', 'Chicken breast 180g', 'Sweet potato 120g', 'Salad'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['현미밥 80g', '연어 140g', '브로콜리', '아보카도 1/2개'],
        itemsEn: ['Brown rice 80g', 'Salmon 140g', 'Broccoli', 'Avocado 1/2'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['프로틴 쉐이크', '바나나 1개', '견과류 20g'],
        itemsEn: ['Protein shake', 'Banana 1', 'Mixed nuts 20g'],
      },
    ],
    tags: ['운동인', '퍼포먼스', '타이밍'],
    tagsEn: ['Athletes', 'Performance', 'Timing'],
  },
  {
    id: 'balanced-4',
    category: 'balanced',
    title: '운동인 균형 식단 2',
    titleEn: 'Athlete Balanced Meal Plan 2',
    description: '근력운동과 유산소를 병행하는 사람을 위한 균형 식단. 회복과 에너지 공급을 동시에 고려한 올라운드 식단.',
    descriptionEn: 'A balanced diet for people combining strength training and cardio. An all-round diet that simultaneously considers recovery and energy supply.',
    calories: 2350, protein: 135, carbs: 270, fat: 80,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['현미밥 80g', '계란후라이 2개', '김구이 10장', '멸치볶음 30g', '된장국 1그릇'],
        itemsEn: ['Brown rice 80g', 'Fried eggs 2', 'Roasted seaweed 10 sheets', 'Stir-fried anchovies 30g', 'Soybean paste soup 1 bowl'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['치킨 샐러드 250g', '고구마 100g', '견과류 20g', '올리브오일 1큰술'],
        itemsEn: ['Chicken salad 250g', 'Sweet potato 100g', 'Mixed nuts 20g', 'Olive oil 1 tbsp'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['잡곡밥 90g', '생선구이 130g', '야채볶음 150g', '미역국 1그릇'],
        itemsEn: ['Multigrain rice 90g', 'Grilled fish 130g', 'Stir-fried vegetables 150g', 'Seaweed soup 1 bowl'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['그릭요거트', '베리류', '꿀 10g'],
        itemsEn: ['Greek yogurt', 'Mixed berries', 'Honey 10g'],
      },
    ],
    tags: ['올라운드', '회복', '혼합식'],
    tagsEn: ['All-round', 'Recovery', 'Mixed cuisine'],
  },

  // 간편식 추가 (더 현실적으로)
  {
    id: 'quick-5',
    category: 'quick',
    title: '1인 가구 간편 식단 1',
    titleEn: 'Single Household Quick Meal Plan 1',
    description: '혼자 살면서도 영양 관리할 수 있는 간편 식단. 최소한의 조리로 최대 영양을 얻는 스마트한 1인 식사.',
    descriptionEn: 'An easy meal plan for managing nutrition while living alone. Smart single-person meals that achieve maximum nutrition with minimal cooking.',
    calories: 1800, protein: 105, carbs: 190, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['시리얼 + 우유', '바나나 1개', '견과류 15g'],
        itemsEn: ['Cereal + milk', 'Banana 1', 'Mixed nuts 15g'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['편의점 도시락', '샐러드', '우유 200ml'],
        itemsEn: ['Convenience store lunch box', 'Salad', 'Milk 200ml'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['즉석밥', '참치캔', '김치', '계란 1개', '김구이'],
        itemsEn: ['Instant rice', 'Canned tuna', 'Kimchi', 'Egg 1', 'Roasted seaweed'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['요거트', '견과류 20g'],
        itemsEn: ['Yogurt', 'Mixed nuts 20g'],
      },
    ],
    tags: ['1인가구', '간편', '영양관리'],
    tagsEn: ['Single household', 'Quick & easy', 'Nutrition management'],
  },
  {
    id: 'quick-6',
    category: 'quick',
    title: '바쁜 직장인 식단',
    titleEn: 'Meal Plan for Busy Office Workers',
    description: '아침 거르기 쉬운 바쁜 직장인을 위한 현실적 식단. 점심과 저녁으로 하루 영양소를 충족하는 효율적 식사.',
    descriptionEn: 'A realistic diet for busy office workers who often skip breakfast. Efficient meals that meet daily nutritional needs through lunch and dinner.',
    calories: 1950, protein: 120, carbs: 210, fat: 75,
    meals: [
      {
        name: '아침 (선택)',
        nameEn: 'Breakfast (optional)',
        items: ['프로틴 쉐이크', '바나나 1개'],
        itemsEn: ['Protein shake', 'Banana 1'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['회사 구내식당 정식', '추가 닭가슴살 100g'],
        itemsEn: ['Company cafeteria set meal', 'Extra chicken breast 100g'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['치킨 샐러드', '현미밥 100g', '된장국', '김치'],
        itemsEn: ['Chicken salad', 'Brown rice 100g', 'Soybean paste soup', 'Kimchi'],
      },
      {
        name: '야식',
        nameEn: 'Late Night Snack',
        items: ['그릭요거트', '견과류 25g'],
        itemsEn: ['Greek yogurt', 'Mixed nuts 25g'],
      },
    ],
    tags: ['직장인', '구내식당', '야식'],
    tagsEn: ['Office worker', 'Cafeteria', 'Late night'],
  },

  // 전통 한식 추가
  {
    id: 'korean-3',
    category: 'korean',
    title: '가정식 한식 식단',
    titleEn: 'Home-Style Korean Meal Plan',
    description: '엄마가 해주는 집밥 같은 따뜻한 한식 식단. 정성스럽게 만든 집밥으로 몸과 마음의 건강을 동시에 챙기는 식단.',
    descriptionEn: 'A warm Korean meal plan like home cooking made by mom. A diet that nurtures both body and mind with lovingly prepared home-cooked meals.',
    calories: 2150, protein: 110, carbs: 265, fat: 70,
    meals: [
      {
        name: '아침',
        nameEn: 'Breakfast',
        items: ['현미밥', '김치찌개', '계란후라이', '김구이', '멸치볶음'],
        itemsEn: ['Brown rice', 'Kimchi stew', 'Fried egg', 'Roasted seaweed', 'Stir-fried anchovies'],
      },
      {
        name: '점심',
        nameEn: 'Lunch',
        items: ['잡곡밥', '제육볶음 100g', '된장국', '콩나물무침', '깍두기'],
        itemsEn: ['Multigrain rice', 'Spicy pork stir-fry 100g', 'Soybean paste soup', 'Seasoned bean sprouts', 'Cubed radish kimchi'],
      },
      {
        name: '저녁',
        nameEn: 'Dinner',
        items: ['현미밥', '생선조림 120g', '미역국', '시금치나물', '배추김치'],
        itemsEn: ['Brown rice', 'Braised fish 120g', 'Seaweed soup', 'Seasoned spinach', 'Napa kimchi'],
      },
      {
        name: '간식',
        nameEn: 'Snack',
        items: ['군고구마 100g', '견과류 20g'],
        itemsEn: ['Roasted sweet potato 100g', 'Mixed nuts 20g'],
      },
    ],
    tags: ['집밥', '가정식', '정성'],
    tagsEn: ['Home cooking', 'Home-style', 'Homemade'],
  },
];
