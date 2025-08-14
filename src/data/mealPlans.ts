import { MealPlan } from '../types';

export const mealPlans: Record<string, MealPlan[]> = {
  en: [
    {
      name: "High-Protein Pancakes",
      protein: 35,
      carbs: 25,
      fat: 8,
      calories: 300,
      ingredients: [
        "1 scoop protein powder",
        "2 eggs",
        "1/2 banana",
        "1/4 cup oats",
        "1 tsp baking powder"
      ],
      instructions: [
        "Blend all ingredients until smooth",
        "Heat pan over medium heat",
        "Pour batter and cook 2-3 minutes per side",
        "Serve with berries"
      ]
    },
    {
      name: "Protein Power Bowl",
      protein: 40,
      carbs: 45,
      fat: 12,
      calories: 420,
      ingredients: [
        "150g grilled chicken",
        "1 cup quinoa",
        "Mixed vegetables",
        "1 tbsp olive oil",
        "Herbs and spices"
      ],
      instructions: [
        "Cook quinoa according to package directions",
        "Grill chicken with spices",
        "Sauté vegetables in olive oil",
        "Combine all ingredients in bowl",
        "Season to taste"
      ]
    },
    {
      name: "Protein Balls",
      protein: 20,
      carbs: 15,
      fat: 10,
      calories: 220,
      ingredients: [
        "1 scoop protein powder",
        "2 tbsp almond butter",
        "1 tbsp honey",
        "2 tbsp rolled oats",
        "1 tbsp chia seeds"
      ],
      instructions: [
        "Mix all ingredients in bowl",
        "Form into 8 balls",
        "Refrigerate for 30 minutes",
        "Store in fridge for up to 1 week"
      ]
    },
    {
      name: "Greek Yogurt Parfait",
      protein: 25,
      carbs: 30,
      fat: 5,
      calories: 260,
      ingredients: [
        "1 cup Greek yogurt",
        "1/2 cup berries",
        "1/4 cup granola",
        "1 tbsp honey",
        "1 tbsp almonds"
      ],
      instructions: [
        "Layer yogurt in glass",
        "Add berries and granola",
        "Drizzle with honey",
        "Top with almonds",
        "Serve immediately"
      ]
    }
  ],
  ar: [
    {
      name: "فطائر البروتين",
      protein: 35,
      carbs: 25,
      fat: 8,
      calories: 300,
      ingredients: [
        "مكيال واحد مسحوق بروتين",
        "بيضتان",
        "نصف موزة",
        "ربع كوب شوفان",
        "ملعقة صغيرة بيكنج باودر"
      ],
      instructions: [
        "اخلط جميع المكونات حتى تصبح ناعمة",
        "سخن المقلاة على نار متوسطة",
        "اسكب الخليط واطبخ 2-3 دقائق لكل جانب",
        "قدم مع التوت"
      ]
    },
    {
      name: "وعاء القوة بالبروتين",
      protein: 40,
      carbs: 45,
      fat: 12,
      calories: 420,
      ingredients: [
        "150 جرام دجاج مشوي",
        "كوب كينوا",
        "خضروات متنوعة",
        "ملعقة كبيرة زيت زيتون",
        "أعشاب وتوابل"
      ],
      instructions: [
        "اطبخ الكينوا حسب التعليمات",
        "اشوِ الدجاج بالتوابل",
        "اقلي الخضروات بزيت الزيتون",
        "اخلط جميع المكونات في الوعاء",
        "تبل حسب الذوق"
      ]
    },
    {
      name: "كرات البروتين",
      protein: 20,
      carbs: 15,
      fat: 10,
      calories: 220,
      ingredients: [
        "مكيال واحد مسحوق بروتين",
        "ملعقتان كبيرتان زبدة لوز",
        "ملعقة كبيرة عسل",
        "ملعقتان كبيرتان شوفان",
        "ملعقة كبيرة بذور الشيا"
      ],
      instructions: [
        "اخلط جميع المكونات في وعاء",
        "شكل 8 كرات",
        "ضعها في الثلاجة لمدة 30 دقيقة",
        "احفظها في الثلاجة لمدة أسبوع"
      ]
    },
    {
      name: "لبن يوناني بالفواكه",
      protein: 25,
      carbs: 30,
      fat: 5,
      calories: 260,
      ingredients: [
        "كوب لبن يوناني",
        "نصف كوب توت",
        "ربع كوب جرانولا",
        "ملعقة كبيرة عسل",
        "ملعقة كبيرة لوز"
      ],
      instructions: [
        "ضع اللبن في طبقات في الكوب",
        "أضف التوت والجرانولا",
        "رش العسل",
        "ضع اللوز في الأعلى",
        "قدم فوراً"
      ]
    }
  ]
};