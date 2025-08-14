import { WorkoutDay } from '../types';

export const workoutPlans: Record<string, WorkoutDay[]> = {
  en: [
    {
      name: "Day 1: Legs (Quads Focus)",
      exercises: [
        {
          name: "Back Squat",
          sets: "4",
          reps: "8-10",
          instructions: "Keep your chest up and knees tracking over toes. Descend until thighs are parallel to ground."
        },
        {
          name: "Goblet Squat",
          sets: "3",
          reps: "12-15",
          instructions: "Hold dumbbell close to chest. Focus on deep range of motion and controlled tempo."
        },
        {
          name: "Step-ups",
          sets: "3",
          reps: "10 each leg",
          instructions: "Step up with full foot on platform. Drive through heel and stand tall on platform."
        },
        {
          name: "Leg Extensions",
          sets: "3",
          reps: "12-15",
          instructions: "Controlled movement, squeeze quads at the top. Don't swing or use momentum."
        },
        {
          name: "Walking Lunges",
          sets: "3",
          reps: "12 each leg",
          instructions: "Long stride, drop back knee toward ground. Keep torso upright throughout."
        }
      ]
    },
    {
      name: "Day 2: Push (Chest, Shoulders, Triceps)",
      exercises: [
        {
          name: "Bench Press",
          sets: "4",
          reps: "8-10",
          instructions: "Lower bar to chest with control. Drive up explosively while keeping shoulders stable."
        },
        {
          name: "Overhead Press",
          sets: "4",
          reps: "8-10",
          instructions: "Press from shoulder level to overhead. Keep core tight and avoid arching back."
        },
        {
          name: "Incline Dumbbell Press",
          sets: "3",
          reps: "10-12",
          instructions: "45-degree incline. Press dumbbells up and slightly toward each other at top."
        },
        {
          name: "Lateral Raises",
          sets: "3",
          reps: "12-15",
          instructions: "Raise arms to shoulder height. Lead with pinkies and control the descent."
        },
        {
          name: "Tricep Dips",
          sets: "3",
          reps: "10-12",
          instructions: "Lower body until arms are parallel to ground. Push up to full extension."
        },
        {
          name: "Push-ups",
          sets: "3",
          reps: "12-15",
          instructions: "Full range of motion. Keep body in straight line from head to heels."
        }
      ]
    },
    {
      name: "Day 3: Legs (Hamstrings & Glutes)",
      exercises: [
        {
          name: "Romanian Deadlift",
          sets: "4",
          reps: "8-10",
          instructions: "Hinge at hips, keep bar close to legs. Feel stretch in hamstrings before returning."
        },
        {
          name: "Bulgarian Split Squat",
          sets: "3",
          reps: "10 each leg",
          instructions: "Rear foot elevated. Drop into lunge position, drive through front heel to return."
        },
        {
          name: "Hip Thrust",
          sets: "4",
          reps: "12-15",
          instructions: "Squeeze glutes at top. Focus on hip extension, not arching the back."
        },
        {
          name: "Leg Curls",
          sets: "3",
          reps: "12-15",
          instructions: "Controlled tempo. Squeeze hamstrings at peak contraction."
        },
        {
          name: "Calf Raises",
          sets: "4",
          reps: "15-20",
          instructions: "Full range of motion. Pause at top and control the descent."
        }
      ]
    },
    {
      name: "Day 4: Pull (Back & Biceps)",
      exercises: [
        {
          name: "Pull-ups/Lat Pulldowns",
          sets: "4",
          reps: "8-10",
          instructions: "Pull with lats, not arms. Squeeze shoulder blades together at bottom."
        },
        {
          name: "Barbell Rows",
          sets: "4",
          reps: "8-10",
          instructions: "Hinge at hips, pull bar to lower chest. Keep core engaged throughout."
        },
        {
          name: "Seated Cable Rows",
          sets: "3",
          reps: "10-12",
          instructions: "Pull handle to lower chest. Squeeze shoulder blades, avoid using momentum."
        },
        {
          name: "Face Pulls",
          sets: "3",
          reps: "12-15",
          instructions: "Pull rope to face level. Focus on rear delts and upper back activation."
        },
        {
          name: "Bicep Curls",
          sets: "3",
          reps: "10-12",
          instructions: "Control the weight, avoid swinging. Focus on bicep contraction."
        },
        {
          name: "Hammer Curls",
          sets: "3",
          reps: "12-15",
          instructions: "Neutral grip. Curl without rotating wrists. Control both up and down phases."
        }
      ]
    }
  ],
  ar: [
    {
      name: "اليوم 1: الأرجل (تركيز الفخذ الأمامي)",
      exercises: [
        {
          name: "القرفصاء الخلفي",
          sets: "4",
          reps: "8-10",
          instructions: "احتفظ بصدرك مرفوعاً والركبتين متجهتين نحو أصابع القدم. انزل حتى تصبح الفخذين موازية للأرض."
        },
        {
          name: "القرفصاء بالدمبل",
          sets: "3",
          reps: "12-15",
          instructions: "احمل الدمبل قريباً من الصدر. ركز على المدى الحركي العميق والسرعة المنضبطة."
        },
        {
          name: "صعود الدرج",
          sets: "3",
          reps: "10 كل رجل",
          instructions: "اصعد بالقدم كاملة على المنصة. ادفع من خلال الكعب وقف منتصباً على المنصة."
        },
        {
          name: "تمديد الأرجل",
          sets: "3",
          reps: "12-15",
          instructions: "حركة منضبطة، اضغط عضلات الفخذ في الأعلى. لا تستخدم الزخم."
        },
        {
          name: "الطعن المتحرك",
          sets: "3",
          reps: "12 كل رجل",
          instructions: "خطوة طويلة، أنزل الركبة الخلفية نحو الأرض. حافظ على الجذع منتصباً."
        }
      ]
    },
    {
      name: "اليوم 2: الدفع (صدر، أكتاف، ترايسبس)",
      exercises: [
        {
          name: "ضغط البنش",
          sets: "4",
          reps: "8-10",
          instructions: "أنزل البار إلى الصدر بتحكم. ادفع لأعلى بقوة مع الحفاظ على استقرار الأكتاف."
        },
        {
          name: "الضغط العلوي",
          sets: "4",
          reps: "8-10",
          instructions: "اضغط من مستوى الكتف إلى أعلى الرأس. حافظ على البطن مشدوداً وتجنب تقوس الظهر."
        },
        {
          name: "الضغط المائل بالدمبل",
          sets: "3",
          reps: "10-12",
          instructions: "ميل 45 درجة. اضغط الدمبل لأعلى وقليلاً نحو بعضهما في الأعلى."
        },
        {
          name: "الرفع الجانبي",
          sets: "3",
          reps: "12-15",
          instructions: "ارفع الذراعين لمستوى الكتف. قد بالخناصر وتحكم في النزول."
        },
        {
          name: "تراجع الترايسبس",
          sets: "3",
          reps: "10-12",
          instructions: "أنزل الجسم حتى تصبح الذراعين موازيتين للأرض. ادفع لأعلى حتى الامتداد الكامل."
        },
        {
          name: "الضغط",
          sets: "3",
          reps: "12-15",
          instructions: "المدى الحركي الكامل. حافظ على الجسم في خط مستقيم من الرأس للقدمين."
        }
      ]
    },
    {
      name: "اليوم 3: الأرجل (الفخذ الخلفي والمؤخرة)",
      exercises: [
        {
          name: "الرفعة الرومانية",
          sets: "4",
          reps: "8-10",
          instructions: "انحن من الوركين، احتفظ بالبار قريباً من الساقين. اشعر بتمدد الفخذ الخلفي قبل العودة."
        },
        {
          name: "القرفصاء البلغاري",
          sets: "3",
          reps: "10 كل رجل",
          instructions: "القدم الخلفية مرفوعة. انزل في وضعية الطعن، ادفع من خلال كعب القدم الأمامية للعودة."
        },
        {
          name: "دفع الورك",
          sets: "4",
          reps: "12-15",
          instructions: "اضغط المؤخرة في الأعلى. ركز على تمديد الورك، ليس تقوس الظهر."
        },
        {
          name: "تثني الأرجل",
          sets: "3",
          reps: "12-15",
          instructions: "سرعة منضبطة. اضغط الفخذ الخلفي في أقصى انقباض."
        },
        {
          name: "رفع السمانة",
          sets: "4",
          reps: "15-20",
          instructions: "المدى الحركي الكامل. توقف في الأعلى وتحكم في النزول."
        }
      ]
    },
    {
      name: "اليوم 4: السحب (ظهر وبايسبس)",
      exercises: [
        {
          name: "عقلة/سحب علوي",
          sets: "4",
          reps: "8-10",
          instructions: "اسحب بعضلات الظهر، ليس بالذراعين. اضغط لوحي الكتف معاً في الأسفل."
        },
        {
          name: "تجديف البار",
          sets: "4",
          reps: "8-10",
          instructions: "انحن من الوركين، اسحب البار للصدر السفلي. حافظ على البطن مشدوداً."
        },
        {
          name: "التجديف بالكيبل",
          sets: "3",
          reps: "10-12",
          instructions: "اسحب المقبض للصدر السفلي. اضغط لوحي الكتف، تجنب استخدام الزخم."
        },
        {
          name: "سحب الوجه",
          sets: "3",
          reps: "12-15",
          instructions: "اسحب الحبل لمستوى الوجه. ركز على عضلات الكتف الخلفية والظهر العلوي."
        },
        {
          name: "تثني البايسبس",
          sets: "3",
          reps: "10-12",
          instructions: "تحكم في الوزن، تجنب الأرجحة. ركز على انقباض البايسبس."
        },
        {
          name: "التثني المطرقي",
          sets: "3",
          reps: "12-15",
          instructions: "قبضة متعادلة. اثنِ دون تدوير المعصمين. تحكم في الصعود والنزول."
        }
      ]
    }
  ]
};