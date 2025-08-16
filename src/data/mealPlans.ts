import { MealPlan } from '../types';

export const mealPlans: Record<string, MealPlan[]> = {
  en: [
    // Breakfast Options
    {
      name: "Power Protein Pancakes",
      category: 'breakfast',
      prepTime: 15,
      difficulty: 'Easy',
      protein: 35,
      carbs: 28,
      fat: 8,
      calories: 308,
      ingredients: [
        "1 scoop vanilla protein powder (30g)",
        "2 large eggs",
        "1/2 medium banana (60g)",
        "1/4 cup rolled oats (20g)",
        "1 tsp baking powder",
        "1/4 cup unsweetened almond milk",
        "1 tsp vanilla extract",
        "Pinch of cinnamon"
      ],
      instructions: [
        "Blend all ingredients until smooth batter forms",
        "Let batter rest for 2-3 minutes to thicken",
        "Heat non-stick pan over medium heat",
        "Pour 1/4 cup batter per pancake",
        "Cook 2-3 minutes until bubbles form, flip carefully",
        "Cook additional 1-2 minutes until golden brown",
        "Serve immediately with fresh berries"
      ],
      tips: [
        "Add 1 tbsp sugar-free syrup for extra sweetness",
        "Top with Greek yogurt for additional protein",
        "Make batter night before for quick morning prep"
      ]
    },
    {
      name: "Champion's Breakfast Bowl",
      category: 'breakfast',
      prepTime: 10,
      difficulty: 'Easy',
      protein: 28,
      carbs: 35,
      fat: 12,
      calories: 340,
      ingredients: [
        "1 cup Greek yogurt (200g)",
        "1/2 cup rolled oats (40g)",
        "1 tbsp almond butter (16g)",
        "1/2 cup mixed berries (75g)",
        "1 tbsp chia seeds (12g)",
        "1 tsp honey",
        "1/4 cup granola (15g)"
      ],
      instructions: [
        "Layer Greek yogurt in a large bowl",
        "Mix oats with a splash of milk, let soften",
        "Add softened oats to yogurt",
        "Swirl in almond butter",
        "Top with fresh berries and chia seeds",
        "Drizzle with honey",
        "Finish with granola for crunch"
      ],
      tips: [
        "Prepare overnight oats version for busy mornings",
        "Substitute berries with seasonal fruits",
        "Add protein powder for extra 20g protein"
      ]
    },

    // Lunch Options
    {
      name: "Muscle Builder Bowl",
      category: 'lunch',
      prepTime: 25,
      difficulty: 'Medium',
      protein: 42,
      carbs: 45,
      fat: 14,
      calories: 450,
      ingredients: [
        "150g grilled chicken breast",
        "1 cup cooked quinoa (185g)",
        "1/2 cup black beans (90g)",
        "1 cup roasted vegetables (bell peppers, zucchini)",
        "2 tbsp avocado (30g)",
        "2 tbsp salsa",
        "1 tbsp olive oil",
        "Lime juice and cilantro",
        "Cumin and paprika"
      ],
      instructions: [
        "Season chicken with cumin, paprika, salt, and pepper",
        "Grill chicken for 6-7 minutes per side until cooked through",
        "Cook quinoa according to package directions",
        "Roast vegetables with olive oil at 400°F for 20 minutes",
        "Warm black beans with spices",
        "Slice chicken and arrange over quinoa",
        "Add vegetables, beans, and avocado",
        "Top with salsa, lime juice, and fresh cilantro"
      ],
      tips: [
        "Meal prep 4 bowls at once for the week",
        "Substitute chicken with salmon or tofu",
        "Add hot sauce for metabolism boost"
      ]
    },
    {
      name: "Mediterranean Power Plate",
      category: 'lunch',
      prepTime: 20,
      difficulty: 'Medium',
      protein: 38,
      carbs: 40,
      fat: 16,
      calories: 420,
      ingredients: [
        "150g grilled salmon fillet",
        "1 cup cooked brown rice (195g)",
        "1/2 cup chickpeas (82g)",
        "1 cup cucumber and tomato salad",
        "2 tbsp hummus (30g)",
        "1 tbsp olive oil",
        "1 tbsp lemon juice",
        "Fresh herbs (parsley, dill)",
        "Feta cheese (15g)"
      ],
      instructions: [
        "Season salmon with herbs, lemon, salt, and pepper",
        "Grill salmon for 4-5 minutes per side",
        "Prepare cucumber-tomato salad with olive oil and lemon",
        "Warm chickpeas with Mediterranean spices",
        "Serve salmon over brown rice",
        "Add chickpeas and fresh salad",
        "Dollop hummus on the side",
        "Garnish with feta and fresh herbs"
      ],
      tips: [
        "Use frozen salmon for budget-friendly option",
        "Make extra salad for tomorrow's lunch",
        "Substitute brown rice with cauliflower rice for lower carbs"
      ]
    },

    // Dinner Options
    {
      name: "Lean & Clean Dinner",
      category: 'dinner',
      prepTime: 30,
      difficulty: 'Medium',
      protein: 40,
      carbs: 35,
      fat: 12,
      calories: 388,
      ingredients: [
        "150g lean ground turkey (93/7)",
        "1 medium sweet potato (150g)",
        "2 cups steamed broccoli (180g)",
        "1 tbsp coconut oil",
        "2 cloves garlic, minced",
        "1 onion, diced",
        "Italian herbs and spices",
        "Low-sodium chicken broth",
        "Fresh parsley"
      ],
      instructions: [
        "Bake sweet potato at 425°F for 25-30 minutes",
        "Heat coconut oil in large skillet",
        "Sauté onion and garlic until fragrant",
        "Add ground turkey, cook until browned",
        "Season with herbs, add splash of broth",
        "Steam broccoli until tender-crisp",
        "Slice sweet potato and serve alongside turkey",
        "Garnish with fresh parsley"
      ],
      tips: [
        "Batch cook sweet potatoes for the week",
        "Add red pepper flakes for heat",
        "Substitute turkey with lean ground beef"
      ]
    },
    {
      name: "Protein-Packed Stir Fry",
      category: 'dinner',
      prepTime: 20,
      difficulty: 'Easy',
      protein: 36,
      carbs: 42,
      fat: 10,
      calories: 380,
      ingredients: [
        "150g chicken breast, sliced thin",
        "1 cup cooked jasmine rice (158g)",
        "2 cups mixed stir-fry vegetables",
        "2 eggs, beaten",
        "2 tbsp low-sodium soy sauce",
        "1 tbsp sesame oil",
        "2 cloves garlic, minced",
        "1 tsp fresh ginger, grated",
        "Green onions for garnish"
      ],
      instructions: [
        "Heat sesame oil in large wok or skillet",
        "Scramble eggs and set aside",
        "Stir-fry chicken until cooked through",
        "Add garlic and ginger, cook 30 seconds",
        "Add vegetables, stir-fry 3-4 minutes",
        "Add cooked rice and scrambled eggs",
        "Toss with soy sauce until heated through",
        "Garnish with green onions"
      ],
      tips: [
        "Use day-old rice for better texture",
        "Add sriracha for spicy kick",
        "Prep all ingredients before cooking"
      ]
    },

    // Snack Options
    {
      name: "Post-Workout Protein Balls",
      category: 'snack',
      prepTime: 10,
      difficulty: 'Easy',
      protein: 22,
      carbs: 18,
      fat: 11,
      calories: 242,
      ingredients: [
        "1 scoop chocolate protein powder (30g)",
        "2 tbsp natural almond butter (32g)",
        "1 tbsp honey (21g)",
        "2 tbsp rolled oats (16g)",
        "1 tbsp chia seeds (12g)",
        "1 tbsp mini dark chocolate chips (15g)",
        "1 tsp vanilla extract",
        "Pinch of sea salt"
      ],
      instructions: [
        "Mix all dry ingredients in a bowl",
        "Add almond butter, honey, and vanilla",
        "Stir until mixture holds together",
        "Add 1-2 tbsp water if too dry",
        "Roll into 8 equal balls",
        "Refrigerate for 30 minutes to firm up",
        "Store in airtight container for up to 1 week"
      ],
      tips: [
        "Double the recipe for meal prep",
        "Roll in coconut flakes for variety",
        "Freeze for longer storage"
      ]
    },
    {
      name: "Greek Yogurt Protein Parfait",
      category: 'snack',
      prepTime: 5,
      difficulty: 'Easy',
      protein: 25,
      carbs: 32,
      fat: 6,
      calories: 270,
      ingredients: [
        "1 cup Greek yogurt (200g)",
        "1/2 cup fresh berries (75g)",
        "1/4 cup granola (15g)",
        "1 tbsp honey (21g)",
        "1 tbsp sliced almonds (8g)",
        "1 tsp vanilla extract",
        "Cinnamon for dusting"
      ],
      instructions: [
        "Mix vanilla extract into Greek yogurt",
        "Layer half the yogurt in a glass",
        "Add half the berries and granola",
        "Repeat layers",
        "Drizzle with honey",
        "Top with sliced almonds",
        "Dust with cinnamon"
      ],
      tips: [
        "Use frozen berries when fresh aren't available",
        "Make 3-4 parfaits for grab-and-go snacks",
        "Add protein powder for extra 20g protein"
      ]
    }
  ],
  ar: [
    // خيارات الفطور
    {
      name: "فطائر البروتين القوية",
      category: 'breakfast',
      prepTime: 15,
      difficulty: 'Easy',
      protein: 35,
      carbs: 28,
      fat: 8,
      calories: 308,
      ingredients: [
        "مكيال واحد مسحوق بروتين فانيليا (30 جرام)",
        "بيضتان كبيرتان",
        "نصف موزة متوسطة (60 جرام)",
        "ربع كوب شوفان (20 جرام)",
        "ملعقة صغيرة بيكنج باودر",
        "ربع كوب حليب لوز غير محلى",
        "ملعقة صغيرة خلاصة فانيليا",
        "رشة قرفة"
      ],
      instructions: [
        "اخلط جميع المكونات حتى تحصل على خليط ناعم",
        "اترك الخليط يرتاح لمدة 2-3 دقائق ليثخن",
        "سخن مقلاة غير لاصقة على نار متوسطة",
        "اسكب ربع كوب من الخليط لكل فطيرة",
        "اطبخ لمدة 2-3 دقائق حتى تتكون فقاعات، ثم اقلب بحذر",
        "اطبخ لمدة 1-2 دقيقة إضافية حتى تصبح ذهبية",
        "قدم فوراً مع التوت الطازج"
      ],
      tips: [
        "أضف ملعقة كبيرة شراب خالي من السكر للحلاوة الإضافية",
        "ضع لبن يوناني في الأعلى للحصول على بروتين إضافي",
        "حضر الخليط في الليلة السابقة للتحضير السريع في الصباح"
      ]
    },
    {
      name: "وعاء فطور البطل",
      category: 'breakfast',
      prepTime: 10,
      difficulty: 'Easy',
      protein: 28,
      carbs: 35,
      fat: 12,
      calories: 340,
      ingredients: [
        "كوب لبن يوناني (200 جرام)",
        "نصف كوب شوفان (40 جرام)",
        "ملعقة كبيرة زبدة لوز (16 جرام)",
        "نصف كوب توت مشكل (75 جرام)",
        "ملعقة كبيرة بذور الشيا (12 جرام)",
        "ملعقة صغيرة عسل",
        "ربع كوب جرانولا (15 جرام)"
      ],
      instructions: [
        "ضع اللبن اليوناني في طبقات في وعاء كبير",
        "اخلط الشوفان مع رشة حليب واتركه ينعم",
        "أضف الشوفان المنعم للبن اليوناني",
        "حرك زبدة اللوز",
        "ضع التوت الطازج وبذور الشيا في الأعلى",
        "رش بالعسل",
        "أنه بالجرانولا للقرمشة"
      ],
      tips: [
        "حضر نسخة الشوفان الليلي للصباحات المزدحمة",
        "استبدل التوت بالفواكه الموسمية",
        "أضف مسحوق البروتين للحصول على 20 جرام بروتين إضافي"
      ]
    },

    // خيارات الغداء
    {
      name: "وعاء بناء العضلات",
      category: 'lunch',
      prepTime: 25,
      difficulty: 'Medium',
      protein: 42,
      carbs: 45,
      fat: 14,
      calories: 450,
      ingredients: [
        "150 جرام صدر دجاج مشوي",
        "كوب كينوا مطبوخة (185 جرام)",
        "نصف كوب فاصوليا سوداء (90 جرام)",
        "كوب خضروات محمصة (فلفل، كوسا)",
        "ملعقتان كبيرتان أفوكادو (30 جرام)",
        "ملعقتان كبيرتان صلصة",
        "ملعقة كبيرة زيت زيتون",
        "عصير ليمون وكزبرة",
        "كمون وبابريكا"
      ],
      instructions: [
        "تبل الدجاج بالكمون والبابريكا والملح والفلفل",
        "اشوِ الدجاج لمدة 6-7 دقائق لكل جانب حتى ينضج",
        "اطبخ الكينوا حسب تعليمات العبوة",
        "احمص الخضروات بزيت الزيتون على 200 درجة مئوية لمدة 20 دقيقة",
        "سخن الفاصوليا السوداء مع التوابل",
        "قطع الدجاج ورتبه فوق الكينوا",
        "أضف الخضروات والفاصوليا والأفوكادو",
        "ضع الصلصة وعصير الليمون والكزبرة الطازجة في الأعلى"
      ],
      tips: [
        "حضر 4 أوعية مرة واحدة للأسبوع",
        "استبدل الدجاج بالسلمون أو التوفو",
        "أضف الصلصة الحارة لتعزيز الأيض"
      ]
    },
    {
      name: "طبق القوة المتوسطي",
      category: 'lunch',
      prepTime: 20,
      difficulty: 'Medium',
      protein: 38,
      carbs: 40,
      fat: 16,
      calories: 420,
      ingredients: [
        "150 جرام فيليه سلمون مشوي",
        "كوب أرز بني مطبوخ (195 جرام)",
        "نصف كوب حمص (82 جرام)",
        "كوب سلطة خيار وطماطم",
        "ملعقتان كبيرتان حمص (30 جرام)",
        "ملعقة كبيرة زيت زيتون",
        "ملعقة كبيرة عصير ليمون",
        "أعشاب طازجة (بقدونس، شبت)",
        "جبنة فيتا (15 جرام)"
      ],
      instructions: [
        "تبل السلمون بالأعشاب والليمون والملح والفلفل",
        "اشوِ السلمون لمدة 4-5 دقائق لكل جانب",
        "حضر سلطة الخيار والطماطم بزيت الزيتون والليمون",
        "سخن الحمص مع التوابل المتوسطية",
        "قدم السلمون فوق الأرز البني",
        "أضف الحمص والسلطة الطازجة",
        "ضع الحمص على الجانب",
        "زين بالفيتا والأعشاب الطازجة"
      ],
      tips: [
        "استخدم السلمون المجمد للخيار الاقتصادي",
        "اصنع سلطة إضافية لغداء الغد",
        "استبدل الأرز البني بأرز القرنبيط للكربوهيدرات الأقل"
      ]
    },

    // خيارات العشاء
    {
      name: "عشاء نظيف وخفيف",
      category: 'dinner',
      prepTime: 30,
      difficulty: 'Medium',
      protein: 40,
      carbs: 35,
      fat: 12,
      calories: 388,
      ingredients: [
        "150 جرام لحم ديك رومي مفروم قليل الدهن",
        "حبة بطاطا حلوة متوسطة (150 جرام)",
        "كوبان بروكلي مطبوخ بالبخار (180 جرام)",
        "ملعقة كبيرة زيت جوز الهند",
        "فصان ثوم مفروم",
        "بصلة مقطعة مكعبات",
        "أعشاب وتوابل إيطالية",
        "مرق دجاج قليل الصوديوم",
        "بقدونس طازج"
      ],
      instructions: [
        "اخبز البطاطا الحلوة على 220 درجة مئوية لمدة 25-30 دقيقة",
        "سخن زيت جوز الهند في مقلاة كبيرة",
        "اقلي البصل والثوم حتى تفوح رائحتهما",
        "أضف لحم الديك الرومي المفروم واطبخ حتى يصبح بنياً",
        "تبل بالأعشاب وأضف رشة من المرق",
        "اطبخ البروكلي بالبخار حتى يصبح طرياً ومقرمشاً",
        "قطع البطاطا الحلوة وقدمها مع الديك الرومي",
        "زين بالبقدونس الطازج"
      ],
      tips: [
        "اطبخ البطاطا الحلوة بكميات للأسبوع",
        "أضف رقائق الفلفل الأحمر للحرارة",
        "استبدل الديك الرومي باللحم البقري الخالي من الدهن"
      ]
    },
    {
      name: "ستير فراي غني بالبروتين",
      category: 'dinner',
      prepTime: 20,
      difficulty: 'Easy',
      protein: 36,
      carbs: 42,
      fat: 10,
      calories: 380,
      ingredients: [
        "150 جرام صدر دجاج مقطع شرائح رفيعة",
        "كوب أرز ياسمين مطبوخ (158 جرام)",
        "كوبان خضروات ستير فراي مشكلة",
        "بيضتان مخفوقتان",
        "ملعقتان كبيرتان صويا صوص قليل الصوديوم",
        "ملعقة كبيرة زيت سمسم",
        "فصان ثوم مفروم",
        "ملعقة صغيرة زنجبيل طازج مبشور",
        "بصل أخضر للتزيين"
      ],
      instructions: [
        "سخن زيت السمسم في مقلاة كبيرة أو ووك",
        "اخفق البيض واتركه جانباً",
        "اقلي الدجاج حتى ينضج تماماً",
        "أضف الثوم والزنجبيل واطبخ لمدة 30 ثانية",
        "أضف الخضروات واقليها لمدة 3-4 دقائق",
        "أضف الأرز المطبوخ والبيض المخفوق",
        "حرك مع صويا صوص حتى يسخن",
        "زين بالبصل الأخضر"
      ],
      tips: [
        "استخدم أرز اليوم السابق للحصول على قوام أفضل",
        "أضف السريراتشا للطعم الحار",
        "حضر جميع المكونات قبل الطبخ"
      ]
    },

    // خيارات الوجبات الخفيفة
    {
      name: "كرات البروتين بعد التمرين",
      category: 'snack',
      prepTime: 10,
      difficulty: 'Easy',
      protein: 22,
      carbs: 18,
      fat: 11,
      calories: 242,
      ingredients: [
        "مكيال واحد مسحوق بروتين شوكولاتة (30 جرام)",
        "ملعقتان كبيرتان زبدة لوز طبيعية (32 جرام)",
        "ملعقة كبيرة عسل (21 جرام)",
        "ملعقتان كبيرتان شوفان (16 جرام)",
        "ملعقة كبيرة بذور الشيا (12 جرام)",
        "ملعقة كبيرة رقائق شوكولاتة داكنة صغيرة (15 جرام)",
        "ملعقة صغيرة خلاصة فانيليا",
        "رشة ملح بحر"
      ],
      instructions: [
        "اخلط جميع المكونات الجافة في وعاء",
        "أضف زبدة اللوز والعسل والفانيليا",
        "حرك حتى يتماسك الخليط",
        "أضف 1-2 ملعقة كبيرة ماء إذا كان جافاً جداً",
        "شكل 8 كرات متساوية",
        "ضعها في الثلاجة لمدة 30 دقيقة لتتماسك",
        "احفظها في وعاء محكم الإغلاق لمدة أسبوع"
      ],
      tips: [
        "ضاعف الوصفة للتحضير المسبق",
        "لفها في رقائق جوز الهند للتنويع",
        "جمدها للحفظ الأطول"
      ]
    },
    {
      name: "لبن يوناني بالفواكه والبروتين",
      category: 'snack',
      prepTime: 5,
      difficulty: 'Easy',
      protein: 25,
      carbs: 32,
      fat: 6,
      calories: 270,
      ingredients: [
        "كوب لبن يوناني (200 جرام)",
        "نصف كوب توت طازج (75 جرام)",
        "ربع كوب جرانولا (15 جرام)",
        "ملعقة كبيرة عسل (21 جرام)",
        "ملعقة كبيرة لوز مقطع شرائح (8 جرام)",
        "ملعقة صغيرة خلاصة فانيليا",
        "قرفة للرش"
      ],
      instructions: [
        "اخلط خلاصة الفانيليا مع اللبن اليوناني",
        "ضع نصف اللبن في طبقات في كوب",
        "أضف نصف التوت والجرانولا",
        "كرر الطبقات",
        "رش بالعسل",
        "ضع اللوز المقطع في الأعلى",
        "رش بالقرفة"
      ],
      tips: [
        "استخدم التوت المجمد عندما لا يتوفر الطازج",
        "اصنع 3-4 أكواب للوجبات الخفيفة السريعة",
        "أضف مسحوق البروتين للحصول على 20 جرام بروتين إضافي"
      ]
    }
  ]
};