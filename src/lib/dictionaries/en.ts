const en = {
  nav: {
    features: "Features",
    team: "Team",
    guide: "Fitness Guide",
    pricing: "Pricing",
    blog: "Blog",
    contact: "Contact",
    download: "Download App",
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
    subtitle1: "Diet? Muscle growth? Whatever your goal,",
    subtitle2:
      "experience a truly personalized online PT.",
    subtext1:
      "Easy and intuitive workout/diet tracking designed by a competitive athlete turned developer,",
    subtext2:
      "connected through real online PT — that's what CoreVia Fitness is building.",
    download: "Download App",
    explore: "Learn More",
  },
  features: {
    title: "Workout & Diet, Done Right",
    subtitle:
      "Most apps cover only one. Real online PT needs both",
    trust:
      "AI tuned by a certified trainer & competition winner who also led IT strategy at a top corporation",
    cards: [
      {
        title: "Progressive Overload Tracking",
        desc: "Record today's workout while reviewing past records. Auto-compare weight, reps, and volume",
      },
      {
        title: "AI Diet Analysis",
        desc: "Just one photo and AI instantly measures calories and nutrients. Manage your diet to match your goals",
      },
      {
        title: "AI Coach Watches Over You",
        desc: "Analyzes your workout and diet records for cross-feedback. Choose from 4 coaching personalities",
      },
      {
        title: "Record → Points → Customize",
        desc: "Consistent recording earns points, and points let you customize your coach's appearance",
      },
    ],
  },
  recording: {
    title: "Beat Your Personal Best",
    subtitle1:
      "Compare workouts with past records for progressive overload,",
    subtitle2:
      "while AI instantly measures calories from a single photo",
    workoutLabel: "Workout Log",
    workoutDesc: "Review past weight/reps → better records today",
    workoutAlt: "Workout recording UI",
    dietLabel: "Diet Log",
    dietDesc: "One photo → AI instant calorie/nutrient analysis",
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
          { role: "coach" as const, text: "Skipped workout today? Again?" },
          { role: "user" as const, text: "I was a bit tired today..." },
          {
            role: "coach" as const,
            text: "You're tired because you didn't work out. Just do 15 minutes. Skip it and tomorrow's worse.",
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
            text: "Your diet log today is perfect! Amazing 👏",
          },
          {
            role: "user" as const,
            text: "But I had fried chicken for dinner...",
          },
          {
            role: "coach" as const,
            text: "That's okay! You did great until lunch. Just add more protein tomorrow. You're doing great!",
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
            text: "3 workouts this week, 71% diet logging rate. Here's my analysis.",
          },
          { role: "user" as const, text: "What analysis?" },
          {
            role: "coach" as const,
            text: "Post-back workout protein intake is 15g below average. Supplementing within 30 minutes improves muscle protein synthesis.",
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
            text: "Leg day today. Great squat volume!",
          },
          { role: "user" as const, text: "But my knees hurt a bit" },
          {
            role: "coach" as const,
            text: "If your knees hurt, try reducing depth. Go to parallel instead of full squat. Let me know if it persists, I'll design alternatives.",
          },
        ],
      },
    ],
  },
  points: {
    title: "Record to Earn Points, Customize Your Coach",
    subtitle: "The more you record, the more points you earn",
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
    collectMessage: "Collect points and create your own coach",
  },
  guidePreview: {
    title: "Free Fitness Tools",
    subtitle: "Free tools you can use right away, no app needed",
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
        a: "Workout/diet recording is free. AI coach chat is available on Pro/Max plans. You still earn points just by recording, and can customize your coach character.",
      },
      {
        q: "Does the AI really analyze my records?",
        a: "Yes. It's different from generic AI chatbots. It actually reviews your workout records, diet photos, and body analysis to give feedback. The AI is tuned by a certified trainer and competition winner who also led IT strategy at a top corporation — it feels like a real PT session.",
      },
      {
        q: "Is it available on iOS?",
        a: "Currently Android only. iOS is in development and will be available on the App Store soon.",
      },
      {
        q: "Can I change the coach's personality?",
        a: "Of course. You can change it anytime in settings. If Tough Love doesn't work for you, try Supportive.",
      },
      {
        q: "Can it replace an in-person PT?",
        a: "The AI, tuned by a certified trainer from a top IT corporation, monitors your workout and diet 24/7. It's a great alternative when PT sessions are too expensive or time-consuming.",
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
    title: "The Maker",
    subtitle: "Training and developing — all hands-on",
    careers: [
      "IT Strategy at a Top 4 Corporation",
      "(Former) Samsung Electronics Semiconductor Engineer",
      "M.S. Technology Management · B.S. Mechanical Engineering",
    ],
    fitness: [
      "Certified Sports Instructor Level 2 (Bodybuilding)",
      "Multiple natural bodybuilding competition awards (WNGP, Natural SSA, etc.)",
    ],
    whyTitle: "Why We Built This",
    values: [
      {
        title: "Built by Someone Who's Been There",
        description:
          "Real dieting and bulking know-how from competing on stage is built into the app. We know from experience which numbers matter in workout logs and what to look for in diet analysis.",
      },
      {
        title: "Tech and Business, Both Covered",
        description:
          "With a background in mechanical engineering, semiconductor manufacturing at Samsung, and an M.S. in Technology Management leading IT strategy, we deeply understand AI and IT. We obsess over how to best integrate AI into fitness.",
      },
      {
        title: "Serious About Both Workout and Diet",
        description:
          "Most fitness apps focus on either workouts or diet. CoreVia was built from day one with the principle of doing both properly.",
      },
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
          "Basic statistics dashboard",
          "Earn reward points",
          "Default coach appearance",
          "Access to fitness guides",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        price: "4.99",
        priceYearly: "39.99",
        description: "AI coach analyzes your records and gives advice",
        features: [
          "Everything in Free",
          "AI coach chat (unlimited)",
          "AI diet photo analysis",
          "Workout + diet cross-analysis",
          "Detailed weekly/monthly reports",
          "Coach appearance customization",
        ],
      },
      {
        id: "max",
        name: "Max",
        price: "9.99",
        priceYearly: "79.99",
        description: "The ultimate AI PT experience — unlock everything",
        features: [
          "Everything in Pro",
          "Body analysis (AI photo analysis)",
          "Custom workout program generation",
          "Custom meal plan generation",
          "Priority AI response speed",
          "All coach skins unlocked",
        ],
      },
    ],
    comparisonTitle: "Feature Comparison",
    categories: [
      {
        name: "Recording",
        features: [
          { name: "Workout logging", free: true, pro: true, max: true },
          { name: "Diet logging", free: true, pro: true, max: true },
          { name: "AI diet photo analysis", free: false, pro: true, max: true },
          { name: "Detailed statistics", free: false, pro: true, max: true },
        ],
      },
      {
        name: "AI Coach",
        features: [
          { name: "AI coach chat", free: false, pro: true, max: true },
          { name: "Workout + diet cross-analysis", free: false, pro: true, max: true },
          { name: "Body analysis", free: false, pro: false, max: true },
          { name: "Custom program generation", free: false, pro: false, max: true },
        ],
      },
      {
        name: "Customization",
        features: [
          { name: "Earn points", free: true, pro: true, max: true },
          { name: "Coach appearance change", free: false, pro: true, max: true },
          { name: "All skins unlocked", free: false, pro: false, max: true },
        ],
      },
    ],
    faqTitle: "Subscription FAQ",
    faqs: [
      {
        q: "Is the free plan enough?",
        a: "Workout/diet logging, point earning, and basic stats are all free. If you need personalized AI coaching feedback, we recommend Pro or above.",
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
        a: "Pro focuses on AI coach chat and diet analysis. Max adds body analysis, custom program generation, priority response speed — the all-in-one package.",
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
      "4 AI PT coaches with different personalities manage both your workouts and diet. Choose from Tough Love, Supportive, Analytical, or Balanced.",
    contactTitle: "Contact Us",
    contactDesc:
      "Contact CoreVia. We welcome app feedback, suggestions, and partnership inquiries.",
    pricingTitle: "Pricing Plans",
    pricingDesc:
      "Compare CoreVia's Free, Pro, and Max plans and choose the subscription that fits you.",
  },
};

export default en;
