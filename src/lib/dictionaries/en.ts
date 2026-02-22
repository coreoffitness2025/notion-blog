const en = {
  nav: {
    features: "Product",
    team: "Team",
    guide: "Fitness Guide",
    pricing: "Pricing",
    blog: "Blog",
    contact: "Contact",
    download: "Download App",
    aiChat: "AI Coach",
    menu: "Menu",
  },
  footer: {
    product: "Product",
    fitnessGuide: "Fitness Guide",
    company: "Company",
    tagline1: "Your personal",
    tagline2: "AI PT coach",
    features: "Features",
    aiCoach: "AI Coach",
    pricing: "Pricing Plans",
    download: "Download App",
    calorieCalc: "Calorie Calculator",
    oneRmCalc: "1RM Calculator",
    exerciseDb: "Exercise Database",
    programs: "Workout Programs",
    team: "Team",
    blog: "Blog",
    contactUs: "Contact Us",
  },
  hero: {
    title1: "Real Online PT,",
    title2: "CoreVia Fitness",
    subtitle1: "Workouts and diet, managed by a real online PT.",
    subtitle2: "Built by CoreVia.",
    subtext1: "",
    subtext2: "",
    download: "Download App",
    explore: "Learn More",
  },
  features: {
    title: "Personalized Coaching, Just for You",
    subtitle:
      "Goals, body stats, experience, diet habits — AI designs the optimal workout routine and meal plan for you",
    trust: "",
    cards: [
      {
        title: "Progressive Overload Tracking",
        desc: "Auto-compare past weight, reps, and volume to set better records today.\nPeriodized programs (Linear 12-week, 5/3/1, Hypertrophy 8-week) included",
      },
      {
        title: "AI Diet Analysis",
        desc: "One photo and AI instantly measures calories and nutrients.\nAccurate for Korean food too. AI estimates foods without barcodes",
      },
      {
        title: "Workout + Diet Cross-Analysis",
        desc: "'Did back day but protein is low' — AI coach reviews workout and diet\ntogether for cross-feedback. Choose from 4 personalities",
      },
      {
        title: "Record → Points → Coach Skins",
        desc: "Workout +1pt, Diet +1pt, Weekly +3pt, Streak +5-20pt.\nConsistent recording lets you buy coach skins with points",
      },
      {
        title: "16-Step Personalized Recommendations",
        desc: "Goals, body info, experience, injuries, diet style, allergies —\nonboarding data personalizes workout programs and meal suggestions",
      },
      {
        title: "AI Equipment Recognition + Barcode Scan",
        desc: "Photo a gym machine and AI identifies it with usage tips and exercises.\nBarcode scan for instant nutrition info on packaged foods",
      },
    ],
  },
  recording: {
    title: "Workout & Diet, Easy and Accurate",
    subtitle1:
      "Compare workouts with past records for progressive overload,",
    subtitle2:
      "while AI instantly analyzes calories and nutrients from a single photo",
    dashboardLabel: "Home Dashboard",
    dashboardDesc: "Target calories, monthly workouts, and weight at a glance",
    dashboardAlt: "Home Dashboard UI",
    workoutLabel: "Workout Log",
    workoutDesc: "Review past weight/reps to set better records today",
    workoutAlt: "Workout recording UI",
    dietLabel: "AI Diet Analysis",
    dietDesc: "One photo → AI instant calorie/nutrient measurement",
    dietAlt: "Diet recording UI",
  },
  coach: {
    title: "4 AI Coach Personalities",
    subtitle: "Choose the style that fits you",
    coachAlt: "Coach",
    personalities: [
      {
        id: "tough",
        label: "Tough Love",
        emoji: "😤",
        chat: [
          {
            role: "coach" as const,
            text: "Bench press 60kg 5x5, but you dropped from 65kg last week?",
          },
          { role: "user" as const, text: "My shoulder was bothering me..." },
          {
            role: "coach" as const,
            text: "Shoulder issues? Switch to 30° incline. Can't hit 65kg? Use alternatives. I'll program incline for next session.",
          },
        ],
      },
      {
        id: "warm",
        label: "Supportive",
        emoji: "🤗",
        chat: [
          {
            role: "coach" as const,
            text: "120g protein today! You nailed your target 👏",
          },
          {
            role: "user" as const,
            text: "But I had fried chicken and went over on calories...",
          },
          {
            role: "coach" as const,
            text: "That chicken gave you 30g protein! That's why you hit your goal. Just cut carbs a bit tomorrow. You're doing great!",
          },
        ],
      },
      {
        id: "cool",
        label: "Analytical",
        emoji: "🧊",
        chat: [
          {
            role: "coach" as const,
            text: "Weekly data: 4 workouts, 86% diet logging. Here's the cross-analysis.",
          },
          { role: "user" as const, text: "What analysis?" },
          {
            role: "coach" as const,
            text: "Post-back workout protein is 18g below target. Add 25g whey after training to meet daily goal. 100g chicken breast also works.",
          },
        ],
      },
      {
        id: "balance",
        label: "Balanced",
        emoji: "⚖️",
        chat: [
          {
            role: "coach" as const,
            text: "Squat volume 4,800kg, +12% from last week. Great progress!",
          },
          { role: "user" as const, text: "But my knees hurt a bit" },
          {
            role: "coach" as const,
            text: "Volume was solid, but with knee pain, try parallel instead of full squat. If it persists, we'll switch to leg press. Don't ignore knee pain.",
          },
        ],
      },
    ],
  },
  points: {
    title: "Recording is Rewarding — Build Your Own Coach",
    subtitle:
      "The more you record workouts and diet, the more points you earn to buy coach skins in the shop",
    steps: [
      { step: "01", title: "Record", sub: "Workout +1  Diet +1" },
      { step: "02", title: "Points", sub: "Weekly +3  Streak bonus" },
      {
        step: "03",
        title: "Customize",
        sub: "Coach appearance customization",
      },
    ],
    maleCoach: "Male Coach",
    femaleCoach: "Female Coach",
    maleAlt: "Male Coach",
    femaleAlt: "Female Coach",
    collectMessage: "Record consistently to earn points faster",
    skinGalleryTitle: "Customize your coach's look with points",
    comingSoon: "Coming Soon",
    skins: [
      { name: "Hairstyle", desc: "Various hair styles" },
      { name: "Outfit", desc: "Sportswear, casual, formal & more" },
      { name: "Shoes", desc: "Sneakers to boots" },
      { name: "Accessories", desc: "Hats, watches, bags & more" },
    ],
  },
  trainer: {
    badge: "Trainer Mode Supported!",
    title: "Dedicated Mode for Real PT Trainers",
    subtitle: "Trainers can directly review their clients' workout and diet data, and manage feedback all in one place",
    cards: [
      {
        title: "Client Management",
        desc: "Manage client lists and view PT schedules at a glance",
      },
      {
        title: "Workout/Diet Review",
        desc: "Review members' workout and diet records by date in detail",
      },
      {
        title: "Write Feedback",
        desc: "Write feedback directly — it shows up in the member's app instantly",
      },
      {
        title: "PT Tools",
        desc: "1RM calculator, calorie analysis, exercise search, and more trainer tools",
      },
    ],
  },
  guidePreview: {
    title: "Fitness Tools & Guides",
    subtitle: "Free tools to help with your workouts and nutrition",
    tools: [
      {
        title: "Calorie Calculator",
        desc: "Calculate daily calories and macros for your goal",
      },
      {
        title: "1RM Calculator",
        desc: "Estimate your one-rep max from reps",
      },
      {
        title: "Exercise Database",
        desc: "300+ exercises by body part with guides",
      },
      {
        title: "Workout Programs",
        desc: "Weekly workout routines by goal",
      },
      {
        title: "Meal Guide",
        desc: "Diet/bulk meal plan templates",
      },
      {
        title: "Fitness Handbook",
        desc: "Essential concepts for beginners",
      },
    ],
  },
  blog: {
    title: "Blog",
    subtitle: "Useful stories about fitness and nutrition",
    viewAll: "View All →",
    noPosts: "No posts yet.",
    back: "← Back to Blog",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Is it free?",
        a: "Workout/diet recording, progress graphs, and point earning are all free. AI coach chat (10/month) and AI food analysis (3/month) are also free. Upgrade to Pro for unlimited access.",
      },
      {
        q: "Does the AI really analyze my records?",
        a: "Yes. Completely different from generic AI chatbots. The AI coach uses 9 specialized tools (workout lookup, diet analysis, program recommendations, etc.) to cross-analyze your workout and diet data with personalized feedback.",
      },
      {
        q: "What's the difference between free and paid?",
        a: "Free: unlimited workout/diet recording + AI coach 10/month + AI food analysis 3/month. Pro: unlimited AI features + routine management + barcode scan + AI equipment recognition. Max: all Pro + imbalance analysis + AI workout evaluation.",
      },
      {
        q: "How does AI diet analysis work?",
        a: "Take a photo of your food and AI identifies it, instantly measuring calories and macros (carbs/protein/fat). Accurate for Korean food too. You can also use barcode scan or text search.",
      },
      {
        q: "Is it available on iOS?",
        a: "Currently Android only. iOS is in development and will be available on the App Store soon.",
      },
      {
        q: "Can I change the coach's personality?",
        a: "Yes. Choose from 4 styles — Tough Love, Supportive, Analytical, or Balanced — anytime. You can also customize your coach's appearance (skins) with earned points.",
      },
      {
        q: "Can it replace an in-person PT?",
        a: "The AI coach cross-analyzes workouts and diet together, and uses 16-step onboarding to personalize recommendations based on your goals, experience, injuries, and allergies. A great 24/7 online PT alternative.",
      },
    ],
  },
  cta: {
    title: "Get Started Now",
    subtitle1: "Download for free and",
    subtitle2: "meet your personal AI PT coach",
    iosComing: "iOS Coming Soon",
    maleCoachAlt: "AI Coach Male",
    femaleCoachAlt: "AI Coach Female",
  },
  team: {
    title: "Team CoreVia",
    subtitle: "Connecting the core of fitness through AI",

    missionLabel: "Mission",
    missionText: "We relentlessly pursue the Core of fitness, and build the most effective Via — the path to mastering it through AI.",

    visionLabel: "Vision",
    visionHeadline: "AI Native Fitness",
    visionText: "From software to hardware.\nBeyond recording, analyzing, and recommending —\nan ecosystem where AI meets every touchpoint of fitness.\nThat's the future CoreVia envisions.",

    closing: "Built by Team CoreVia.",

    aboutTitle: "About",
    aboutDesc: "Built by someone who understands both technology and fitness",
    careers: [
      "IT Strategy at a Top 4 Corporation",
      "(Former) Samsung Electronics Semiconductor Engineer",
      "M.S. Technology Management · B.S. Mechanical Engineering",
    ],
    fitness: [
      "Certified Sports Instructor Level 2 (Bodybuilding)",
      "Multiple natural bodybuilding competition awards (WNGP, Natural SSA, etc.)",
    ],
    contactCta: "Have any questions?",
    contactBtn: "Contact Us",
  },
  ebook: {
    badge: "eBook",
    title: "Core of Fitness",
    subtitle: "The Core of Fitness",
    description1:
      "Dieting is more about execution and willpower than knowledge. But without understanding the core principles, it's hard to sustain.",
    description2:
      "This book clarifies the fundamentals of dieting and hypertrophy, and provides meal/workout programs based on them. It covers useful tips and essential nutrition/exercise knowledge to build upon.",
    description3:
      "We hope this book contributes to designing your healthy daily life.",
    author:
      "Author: James (Certified Sports Instructor Lv.2 · Natural Bodybuilding Competition Winner)",
    highlights: [
      { number: "104+", label: "Pages" },
      { number: "5", label: "Chapters" },
      { number: "40+", label: "Topics" },
    ],
    tocTitle: "Table of Contents",
    chapters: [
      {
        num: "0",
        title: "Before We Begin",
        items: [
          "The message of this book",
          "Fitness: simple yet powerful principles",
        ],
      },
      {
        num: "1",
        title: "Diet",
        items: [
          "Principles of dieting",
          "Setting target calories and macros",
          "Recommended diet plans",
          "Foods to avoid",
          "Effective protein intake",
          "Why you need carbs after working out",
          "The truth about the GI index",
          "Why fats are essential even when dieting",
          "Breaking through diet plateaus",
          "Carb cycling",
          "Intermittent fasting / Ketogenic",
          "And 21 more topics",
        ],
      },
      {
        num: "2",
        title: "Exercise",
        items: [
          "Principles of exercise",
          "The importance of resistance training",
          "Workout methods and routine design",
          "Exercises by body part (Legs/Back/Chest/Shoulders/Arms)",
        ],
      },
      {
        num: "3",
        title: "Competition / Body Profile",
        items: ["Competition & body profile preparation", "Peak week strategy"],
      },
      {
        num: "4",
        title: "Appendix (Food Info)",
        items: [
          "Carbs · Protein · Fats",
          "Bar snacks · Fruits · Eating out",
          "Sauces/seasonings · Supplements",
        ],
      },
    ],
    recommendTitle: "Who This Book Is For",
    recommendations: [
      "Started working out but don't know what to eat",
      "Managing your diet but struggling with workout programming",
      "Overwhelmed by YouTube info and want just the essentials",
      "Preparing for a competition or body profile shoot",
    ],
    priceLabel: "eBook (PDF)",
    price: "₩11,000",
    deliveryNote: "Instant email delivery after purchase",
    buyButton: "Buy Now",
    comingSoon:
      "Payment system coming soon. You'll be able to purchase shortly.",
    freeHandbook: "Read the free handbook first →",
  },
  contact: {
    title: "Contact Us",
    subtitle1: "Questions about the app, feedback, or partnership proposals",
    subtitle2: "Feel free to reach out about anything.",
    emailLabel: "Email Us",
    emailButton: "Send Email",
    categories: [
      {
        title: "App Feedback",
        desc: "Bug reports, feature requests, reviews",
      },
      {
        title: "Partnership",
        desc: "Content collaboration, fitness partnerships",
      },
      {
        title: "Other Inquiries",
        desc: "Technical questions, media, other inquiries",
      },
    ],
    footerLabel: "Explore more pages",
    footerLinks: {
      aiCoach: "AI Coach",
      guide: "Fitness Guide",
      blog: "Blog",
    },
  },
  coachPage: {
    badge: "AI Coach",
    title1: "Meet Your Personal",
    title2: "AI PT Coach",
    subtitle1:
      "The more consistently you record, the more accurate your coaching becomes.",
    subtitle2: "Choose from 4 personalities.",
    diffTitle: "How is it different from regular AI chatbots?",
    diffs: [
      {
        title: "It actually reviews your records",
        desc: "Workout logs, diet photos, body analysis — the AI actually reviews and advises.",
      },
      {
        title: "Cross-analyzes workout & diet",
        desc: '"You did back exercises but lack protein" — it cross-references, not just checks individually.',
      },
      {
        title: "Built by a real expert",
        desc: "The AI is tuned by a certified trainer and competition winner who also led IT strategy at a top corporation.",
      },
    ],
  },
  guide: {
    badge: "Fitness Guide",
    title: "Fitness Guide",
    subtitle1:
      "Free science-based workout methods and nutrition information.",
    subtitle2:
      "Experience CoreVia Fitness app's core content on the web.",
    items: [
      {
        title: "1RM Calculator",
        description:
          "Calculate your one-rep max from weight and rep count",
        icon: "🏋️",
      },
      {
        title: "Calorie Calculator",
        description: "Calculate your daily calories and macros",
        icon: "🔥",
      },
      {
        title: "Exercise Guide",
        description:
          "Browse exercises by body part with proper form guides",
        icon: "💪",
      },
      {
        title: "Fitness Handbook",
        description:
          "In-depth guide articles on exercise and nutrition",
        icon: "📚",
      },
      {
        title: "Meal Plans",
        description: "Meal plans and nutrition info for your goals",
        icon: "🥗",
      },
      {
        title: "Workout Programs",
        description:
          "Customized workout programs by level and goal",
        icon: "📋",
      },
    ],
    ebookBadge: "eBook",
    ebookTitle: "Want more in-depth theory?",
    ebookDesc:
      "covers the most essential and intuitive core of fitness. Packed with useful exercise/nutrition knowledge and practical know-how.",
    ctaTitle: "Want More Features?",
    ctaDesc1:
      "Experience AI-powered workout analysis, personalized coaching,",
    ctaDesc2:
      "real-time feedback, and more in the CoreVia Fitness app.",
    download: "Download App",
    contactUs: "Contact Us",
  },
  guideSubpages: {
    backToGuide: "Back to Guide",
    oneRm: {
      title: "1RM Calculator",
      subtitle: "Enter your exercise weight and reps to calculate your estimated one-rep max.",
      weightLabel: "Weight (kg)",
      repsLabel: "Reps (1-30)",
      weightPlaceholder: "e.g. 60",
      repsPlaceholder: "e.g. 8",
      invalidInput: "Please enter valid values. (Reps must be between 1-30)",
      calculate: "Calculate 1RM",
      estimated: "Estimated 1RM",
      basedOnSuffix: " reps (Epley Formula)",
      zonesTitle: "Training Zone Guide",
      infoTitle: "Good to know",
      infoText: "1RM is calculated using the Epley formula (1RM = Weight x (1 + Reps/30)). Actual 1RM varies by individual, so always use a spotter when attempting new max weights.",
      zones: [
        { name: "Max Strength", reps: "1 rep", desc: "Maximum power output zone" },
        { name: "Strength", reps: "2-4 reps", desc: "Optimal for pure strength development" },
        { name: "Strength/Hypertrophy", reps: "5-6 reps", desc: "Balance of strength and hypertrophy" },
        { name: "Hypertrophy", reps: "8-12 reps", desc: "Optimal for muscle size growth" },
        { name: "Muscular Endurance", reps: "12-15 reps", desc: "Muscular endurance improvement" },
        { name: "Endurance/Warmup", reps: "15+ reps", desc: "Light warmup and endurance training" },
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          q: "What is 1RM?",
          a: "1RM (One Repetition Maximum) is the maximum weight you can lift with proper form for one repetition. It's used as a baseline for setting training intensity in weight training.",
        },
        {
          q: "How does the Epley formula work?",
          a: "Epley formula: 1RM = Weight x (1 + Reps/30). For example, if you lift 60kg for 8 reps, your estimated 1RM is 60 x (1 + 8/30) = 76kg. Most accurate with 5 reps or fewer.",
        },
        {
          q: "Which exercises does this work for?",
          a: "The calculator is most accurate for compound barbell exercises like bench press, squat, and deadlift. For machine or isolation exercises, results may be less precise.",
        },
        {
          q: "Should I test my 1RM directly?",
          a: "Beginners should use a calculator instead of direct testing for safety. Even experienced lifters should always use a spotter and warm up thoroughly before attempting a max.",
        },
      ],
      aboutTitle: "How to Use the 1RM Calculator",
      aboutText: "Enter your exercise weight (kg) and reps (1-30) to estimate your 1RM using the Epley formula. Results include recommended weights for each training zone, helping you set the right intensity for strength, hypertrophy, or endurance goals.",
    },
    calorie: {
      title: "Calorie Calculator",
      subtitle: "Enter your personal info and activity level to calculate daily recommended calories and macros.",
      genderLabel: "Gender",
      male: "Male",
      female: "Female",
      ageLabel: "Age",
      weightLabel: "Weight (kg)",
      heightLabel: "Height (cm)",
      agePlaceholder: "e.g. 30",
      weightPlaceholder: "e.g. 70",
      heightPlaceholder: "e.g. 175",
      asianAdjust: "Apply Asian body type adjustment (BMR ~5% lower than Western average)",
      activityLabel: "Activity Level",
      goalLabel: "Goal",
      calculate: "Calculate Calories",
      invalidInput: "Please enter valid values.",
      bmrLabel: "Basal Metabolic Rate (BMR)",
      tdeeLabel: "Total Daily Energy Expenditure (TDEE)",
      targetCalories: "Target Calories",
      kcalDay: "kcal/day",
      macrosTitle: "Recommended Macros",
      protein: "Protein",
      carbs: "Carbohydrates",
      fat: "Fat",
      infoTitle: "Notes",
      infoItems: [
        "BMR is calculated using the Mifflin-St Jeor equation.",
        "Protein is calculated at 1.8g per kg of body weight (for active individuals).",
        "Individual needs vary — monitor your weight change over 2-4 weeks and adjust accordingly.",
      ],
      activityLevels: [
        { label: "Sedentary", desc: "Little to no exercise" },
        { label: "Light Activity", desc: "Light exercise 1-3 times/week" },
        { label: "Moderate Activity", desc: "Moderate exercise 3-5 times/week" },
        { label: "Very Active", desc: "Intense exercise 6-7 times/week" },
        { label: "Extremely Active", desc: "2+ workouts/day or physical labor" },
      ],
      goals: [
        { label: "Weight Loss", desc: "~0.5kg/week loss" },
        { label: "Slow Weight Loss", desc: "~0.25kg/week loss" },
        { label: "Maintain Weight", desc: "Keep current weight" },
        { label: "Slow Weight Gain", desc: "~0.25kg/week gain" },
        { label: "Weight Gain (Bulk)", desc: "~0.5kg/week gain" },
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          q: "What is TDEE?",
          a: "TDEE (Total Daily Energy Expenditure) is the total number of calories you burn per day. It's calculated by multiplying your BMR (Basal Metabolic Rate) by an activity factor.",
        },
        {
          q: "How does the Mifflin-St Jeor formula work?",
          a: "Male: BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age) + 5. Female: BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age) - 161. TDEE = BMR x activity factor (1.2-1.9).",
        },
        {
          q: "How much should I reduce calories for weight loss?",
          a: "A deficit of 300-500 kcal below TDEE typically results in 0.3-0.5 kg of weight loss per week. Avoid extreme restrictions as they can cause muscle loss and rebound weight gain.",
        },
        {
          q: "What is Asian body type adjustment?",
          a: "Asians tend to have higher body fat percentage at the same BMI, so BMR is adjusted ~10% lower. This option provides more accurate calorie calculations for Asian body types.",
        },
      ],
      aboutTitle: "How to Use the Calorie Calculator",
      aboutText: "Enter your gender, age, weight, height, and activity level to calculate your daily calories (TDEE) and macros (protein, carbs, fat) using the Mifflin-St Jeor formula. Set your goal — diet, maintenance, or bulking — to get personalized recommendations.",
    },
    exercises: {
      title: "Exercise Guide",
      subtitleTemplate: "exercises with proper form and technique",
      searchPlaceholder: "Search by exercise name or muscle group...",
      noResults: "No results found",
      targetMuscles: "Target Muscles",
      primary: "(primary)",
      howTo: "How to Perform",
      tips: "Tips",
      bodyParts: [
        { id: "all", name: "All" },
        { id: "chest", name: "Chest" },
        { id: "back", name: "Back" },
        { id: "shoulder", name: "Shoulder" },
        { id: "leg", name: "Legs" },
        { id: "arm", name: "Arms" },
        { id: "core", name: "Core" },
        { id: "cardio", name: "Cardio" },
      ],
      difficulty: {
        all: "All",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
    },
    handbook: {
      title: "Fitness Handbook",
      subtitleTemplate: "{count} in-depth guides on exercise and nutrition",
    },
    mealPlans: {
      title: "Meal Plans",
      subtitleTemplate: "{count} customized meal plans for your goals",
      protein: "Protein",
      carbs: "Carbs",
      fat: "Fat",
      categories: [
        { id: "all", name: "All", icon: "📋" },
        { id: "intermittent", name: "Intermittent Fasting", icon: "⏰" },
        { id: "lowcarb", name: "Low Carb", icon: "🥑" },
        { id: "bulk", name: "Bulking", icon: "💪" },
        { id: "balanced", name: "Balanced Diet", icon: "⚖️" },
        { id: "korean", name: "Traditional Korean", icon: "🍚" },
        { id: "quick", name: "Quick Meals", icon: "⚡" },
      ],
    },
    programs: {
      title: "Workout Programs",
      subtitleTemplate: "{count} customized programs for your goal and level",
      goalLabel: "Goal",
      levelLabel: "Level",
      all: "All",
      noResults: "No programs match your criteria",
      exerciseList: "Exercise List",
      setsReps: "sets x {reps} reps",
      mainExercise: "Main Exercise",
      accessoryExercise: "Accessory",
      exerciseCount: "{count} exercises",
      goalMap: {
        "근력 향상": "Strength",
        "근비대": "Hypertrophy",
        "체지방 감소": "Fat Loss",
      } as Record<string, string>,
      levelMap: {
        "초급": "Beginner",
        "중급": "Intermediate",
        "고급": "Advanced",
      } as Record<string, string>,
    },
  },
  pricing: {
    badge: "Plans",
    title: "Choose the plan that fits you",
    subtitle: "Start free, upgrade when you need it",
    monthly: "Monthly",
    yearly: "Yearly",
    yearlyDiscount: "2 months free",
    perMonth: "/mo",
    perYear: "/yr",
    currentPlan: "Current Plan",
    upgradeCta: "Upgrade",
    getStarted: "Get Started Free",
    mostPopular: "Popular",
    best: "Best",
    free: "Free",
    plans: [
      {
        id: "free",
        name: "Free",
        price: "0",
        priceYearly: "0",
        description: "Start with workout and diet recording",
        features: [
          "Workout logging (unlimited)",
          "Diet logging (unlimited)",
          "Progress tracking & graphs",
          "Online PT (10/month)",
          "AI food analysis (3/month)",
          "Trainer link (1 person)",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        price: "3.99",
        priceYearly: "31.99",
        description: "AI coach analyzes your records and gives advice",
        features: [
          "Everything in Free",
          "Online PT (unlimited)",
          "AI food analysis (unlimited)",
          "Routine management",
          "Barcode scan",
          "AI equipment recognition",
          "Trainer link (unlimited)",
        ],
      },
      {
        id: "max",
        name: "Max",
        price: "9.99",
        priceYearly: "79.99",
        description: "All Pro features + advanced AI analysis",
        features: [
          "Everything in Pro",
          "Imbalance analysis",
          "AI workout evaluation",
          "Analysis history",
        ],
      },
    ],
    maxComingSoon: "Max-exclusive features are currently in development",
    comparisonTitle: "Feature Comparison",
    categories: [
      {
        name: "Recording & Management",
        features: [
          { name: "Workout logging", free: true, pro: true, max: true },
          { name: "Diet logging", free: true, pro: true, max: true },
          { name: "Progress tracking & graphs", free: true, pro: true, max: true },
          { name: "Routine management", free: false, pro: true, max: true },
        ],
      },
      {
        name: "AI Features",
        features: [
          { name: "Online PT (AI coach chat)", free: "10/mo", pro: true, max: true },
          { name: "AI food analysis", free: "3/mo", pro: true, max: true },
          { name: "Barcode scan", free: false, pro: true, max: true },
          { name: "AI equipment recognition", free: false, pro: true, max: true },
          { name: "Imbalance analysis", free: false, pro: false, max: true },
          { name: "Analysis history", free: false, pro: false, max: true },
        ],
      },
      {
        name: "Connection",
        features: [
          { name: "Trainer/member link", free: "1", pro: "Unlimited", max: "Unlimited" },
        ],
      },
    ],
    faqTitle: "Subscription FAQ",
    faqs: [
      {
        q: "Is the free plan enough?",
        a: "Workout and diet logging is unlimited for free. AI coach chat is free for 10 sessions/month, and AI food analysis for 3/month. If you want more, we recommend Pro.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes, you can cancel your subscription at any time. You'll have access until the end of your billing period, and your data is always kept.",
      },
      {
        q: "How do I pay?",
        a: "Payment is processed through Google Play Store in-app purchase. It charges automatically to the payment method on your Google account.",
      },
      {
        q: "What's the difference between Pro and Max?",
        a: "Pro gives you unlimited AI coach chat, food analysis, equipment recognition, and more. Max adds advanced analysis features like imbalance analysis and AI workout evaluation. (Max-exclusive features are currently in development)",
      },
    ],
    ctaTitle: "Get Started Today",
    ctaSubtitle: "Download for free and choose the plan that's right for you",
  },
  notFound: {
    message: "Page Not Found",
    goHome: "Go to Homepage",
  },
  metadata: {
    homeTitle:
      "CoreVia - Your AI PT Coach | Workout & Diet AI Coaching App",
    homeDesc:
      "All-in-one workout + diet AI coaching on your smartphone. Many apps just record — only CoreVia analyzes your records and provides personalized feedback.",
    coachTitle: "AI Coach",
    coachDesc:
      "Coach Kay and Coach Jane — 2 AI PT coaches with 4 coaching styles manage both your workouts and diet.",
    contactTitle: "Contact Us",
    contactDesc:
      "Contact CoreVia. We welcome app feedback, suggestions, and partnership inquiries.",
    pricingTitle: "Pricing Plans",
    pricingDesc:
      "Compare CoreVia's Free, Pro, and Max plans and choose the subscription that fits you.",
    chatTitle: "Chat with AI PT Coach",
    chatDesc:
      "Chat with Coach Kay or Coach Jane. Get AI advice on workouts, diet, and routines.",
  },
  chat: {
    metaTitle: "Chat with AI PT Coach | CoreVia",
    metaDesc:
      "Coach Kay & Coach Jane with 4 coaching personalities. Get AI PT advice on workouts, diet, and routines.",
    heroBadge: "AI FITNESS COACH",
    heroTitle: "Which coach will you talk to?",
    heroSubtitle:
      "Coach Kay and Coach Jane are waiting with 4 coaching styles. Pick one and start chatting.",
    startChat: "Chat now",
    pickPersonality: "Pick a coaching style",
    personalityPreviews: {
      tough: "Skipping again today? Really?",
      cheerful: "You showed up again! That's awesome!",
      cool: "Weekly completion rate: 68%. On track.",
      balanced: "What should we work on today?",
    } as Record<string, string>,
    freeNotice: "50pt free on signup",
    inputPlaceholder: "Type your message...",
    limitReached: "Not enough points",
    errorMessage: "Sorry, something went wrong. Please try again.",
    aiDisclaimer:
      "AI coach advice is for reference only and does not replace professional medical advice.",
    goalLoseWeight: "I want to lose weight",
    goalBuildMuscle: "I want to build muscle",
    goalGetFit: "I want to get fit",
    limitLabels: {
      remaining: "Remaining",
      of: "/",
      unlimited: "Unlimited",
    },
    ctaLabels: {
      inlineTitle: "Want coaching based on real workout data?",
      inlineDesc:
        "Record your workouts & diet in the app for data-driven 1:1 AI coaching.",
      modalTitle: "Not enough points",
      modalDesc:
        "Record workouts & diet in the app to earn points. Point purchase is coming soon.",
      downloadApp: "Download App",
      maybeLater: "I'll come back tomorrow",
    },
  },
};

export default en;
