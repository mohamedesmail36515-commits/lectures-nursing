import { Lecture } from "../types";

export const psychologyLectures: Lecture[] = [
  {
    id: "psy-l1",
    title: "Anxiety Disorders in Children",
    titleAr: "اضطرابات القلق لدى الأطفال",
    branch: "Tur Sinai",
    program: "Nursing Program",
    date: "8/5/2024",
    professor: "Zeinab Hassan",
    slides: [
      {
        id: "psy-l1-s1",
        slideNumber: 1,
        title: "Introduction & Information",
        content: [
          "Maternal and Child Health Nursing",
          "Nursing Program MCH 223",
          "Lecture topic: Anxiety Disorders in Children",
          "Professor: Zeinab Hassan",
          "Branch: Tur Sinai"
        ],
        explanation: "Introduction to pediatric anxiety disorders within the developmental psychology curriculum of King Salman International University.",
      },
      {
        id: "psy-l1-s2",
        slideNumber: 2,
        title: "Intended Learning Outcomes (ILOs)",
        content: [
          "By the end of this lecture, the student will be able to:",
          "Define anxiety in children.",
          "List and discuss types of anxiety disorders (GAD, Separation Anxiety, Phobias, OCD, PTSD).",
          "Explain the symptoms of anxiety disorders in children.",
          "Apply the nursing management of anxiety disorders."
        ],
        explanation: "مخرجات التعلم: تهدف لتمكين الطالب من تعريف القلق التنموي لدى الأطفال، تصنيف الاضطرابات السريرية الشائعة (GAD, Separation Anxiety, Phobias, OCD, PTSD)، وتمييز أعراض القلق والتدخل التمريضي العلاجي.",
      },
      {
        id: "psy-l1-s3",
        slideNumber: 3,
        title: "Definition of Anxiety",
        content: [
          "Anxiety is defined as a feeling of apprehension or excessive fear about real or imagined circumstances.",
          "It interferes with the child's daily functioning, social development, and academic learning."
        ],
        explanation: "تعريف القلق النفسي للأطفال: هو شعور بالتوجس أو الخوف المفرط والغير مبرر من ظروف حقيقية أو متخيلة، مما يعيق أداء الطفل الدراسي والاجتماعي ويؤثر على نموه النفسي السليم.",
      },
      {
        id: "psy-l1-s4",
        slideNumber: 4,
        title: "Types of Anxiety Disorders in Children",
        content: [
          "Generalized Anxiety Disorder (GAD): Extreme, unrealistic worry about everyday life activities, academic performance, and sports.",
          "Separation Anxiety Disorder: Difficulty leaving parents to attend school, stay alone, or go to camp. Often 'stick' to parents and suffer sleep disturbances.",
          "Phobias: Unrealistic and excessive fear of certain objects/situations (animals, storms, heights, enclosed spaces).",
          "Panic Disorder: Repeated 'panic attacks' with sudden intense fear, pounding heartbeat, sweating, dizziness, and nausea with no apparent cause.",
          "Obsessive-Compulsive Disorder (OCD): Repetitive thoughts (obsessions) and compulsive behaviors (e.g. repeated hand washing, counting, arranging objects) that are hard to stop.",
          "Post-traumatic Stress Disorder (PTSD): Developed after temporary or chronic stressful events (physical/sexual abuse, witnessing violence, surviving natural disasters)."
        ],
        explanation: "أنواع اضطرابات القلق: 1. القلق العام (GAD) كالمخاوف اليومية، 2. قلق الانفصال عن الوالدين (Separation Anxiety)، 3. الفوبيا (المخاوف المحددة)، 4. اضطراب الهلع (Panic Attacks)، 5. الوسواس القهري (OCD) كغسيل الأيدي المكرر، 6. اضطراب ما بعد الصدمة (PTSD) بسبب العنف أو الإهمال.",
      },
      {
        id: "psy-l1-s5",
        slideNumber: 5,
        title: "Symptoms of Anxiety in Children",
        content: [
          "Behavioral:",
          "- Crying, freezing, tantrums, clinging to parents.",
          "- Social withdrawal and avoidance of school or peer play.",
          "Physical / Somatic:",
          "- Restlessness, sweating, muscular tension.",
          "- Recurrent somatic complaints (abdominal pain or tension headaches).",
          "Cognitive / Emotional:",
          "- Worrying, sleep disturbances, nightmares.",
          "- Excessive fearfulness (animals, dark, monsters, accidents).",
          "- Concerns about death or harm coming to themselves or loved ones."
        ],
        explanation: "أعراض القلق: تظهر سلوكياً كالبكاء والتشنج العاطفي والانسحاب الاجتماعي، وتظهر جسدياً (Somatic) كمغص البطن المتكرر والصداع التوتري، كما تظهر إدراكياً كاضطرابات النوم والكوابيس والخوف المرضي من الموت.",
      },
      {
        id: "psy-l1-s6",
        slideNumber: 6,
        title: "Nursing & Family Management",
        content: [
          "1. Communication: Talk directly with the child about their worries. Reassure them that worries are normal.",
          "2. Support Talents: Encourage the child to participate in natural talents and play to restore joy.",
          "3. Relaxation Techniques: Teach deep breathing, guided imagery, and progressive muscle training.",
          "4. Assessment: Screen for underlying organic causes (e.g. hyperthyroidism, cardiac issues, drug effects).",
          "5. Abuse Prevention: In case of neglect/abuse, interview the child privately, document words exactly, and report to protection agencies.",
          "6. Psychotherapy Referral: Refer severe cases to professional services for individual, group, or family therapy."
        ],
        explanation: "التدخلات التمريضية والعائلية: الحديث المباشر مع الطفل بثقة، تشجيع ممارسة المواهب واللعب، تمرين التنفس العميق والارتخاء، فحص الأسباب المرضية (كفرط نشاط الغدة الدرقية)، وحماية الطفل من سوء المعاملة أو الإهمال عبر الإبلاغ الفوري.",
      }
    ],
    quiz: [
      {
        id: "psy-l1-q1",
        question: "A child complaining of recurrent abdominal pain before school with no organic cause is most likely experiencing:",
        options: [
          "Intestinal obstruction",
          "Physical symptom of anxiety",
          "Gastroenteritis",
          "Physiological growth pain"
        ],
        correctAnswer: 1,
        explanation: "Recurrent somatic complaints, such as abdominal pain or headaches, are classic physical manifestations of anxiety in children when school avoidance is present."
      }
    ]
  },
  {
    id: "psy-l2",
    title: "Abnormal Psychology in Children",
    titleAr: "علم النفس غير الطبيعي للأطفال",
    branch: "Tur Sinai",
    program: "Nursing Program",
    date: "8/5/2024",
    professor: "Zeinab Hassan",
    slides: [
      {
        id: "psy-l2-s1",
        slideNumber: 1,
        title: "Introduction & Key Objectives",
        content: [
          "Abnormal Psychology Coursework",
          "Clinical Focus: Childhood Depression, Enuresis, and School Phobia",
          "Objectives: Define and describe common clinical manifestations, causes, and nursing considerations."
        ],
        explanation: "علم النفس غير السليم للأطفال: يناقش قضايا خطيرة مثل الاكتئاب لدى الأطفال (Childhood Depression)، التبول اللاإرادي (Enuresis)، والرهاب المدرسي (School Phobia).",
      },
      {
        id: "psy-l2-s2",
        slideNumber: 2,
        title: "Childhood Depression: Definition & Causes",
        content: [
          "Definition: Depression in children is difficult to detect because they may be unable to verbalize complex emotions. They often 'act out' their problems.",
          "It can be temporary (acute depression precipitated by a traumatic event) or chronic.",
          "Core Etiologies:",
          "- Physical Health: Chronic or severe medical conditions (e.g., obesity, diabetes mellitus, cancer, chronic renal failure).",
          "- Stressful Events: Changes and conflicts at home, school, or among peers.",
          "- Environment: Stressful or violent home environment.",
          "- Family History: Genetic predisposition to mood disorders.",
          "- Biochemical Imbalances: Uneven levels of neurotransmitters and hormones."
        ],
        explanation: "اكتئاب الطفولة: يصعب تشخيصه لأن الأطفال يعبرون عنه سلوكياً وليس لفظياً. يظهر بسبب الامراض المزمنة (كالسكري والسمنة)، الخلافات الزوجية بالمنزل، خلل النواقل العصبية والجينات العائلية.",
      },
      {
        id: "psy-l2-s3",
        slideNumber: 3,
        title: "Symptomatology of Childhood Depression",
        content: [
          "Behavioral Signs:",
          "- Predominant sad facial expression with diminished range of affective responses.",
          "- Solitary play or work; tendency to isolate.",
          "- Decline in school performance/lower grades.",
          "- Tearfulness or crying with no apparent cause.",
          "- Highly dependent or aggressive behavior.",
          "Internal / Psychological Signs:",
          "- Statements reflecting low self-esteem, hopelessness, or guilt.",
          "- Suicidal ideation.",
          "Physiologic / Somatic Signs:",
          "- Constipation, low appetite / selective feeding.",
          "- Alteration in sleep patterns (insomnia or hypersomnia)."
        ],
        explanation: "أعراض الاكتئاب التمريضية: تظهر في ثلاثة محاور: 1. علامات سلوكية (العزلة، تدني المستوى الدراسي، البكاء، العدوانية)، 2. علامات داخلية (الشعور بالذنب وتدني احترام الذات)، 3. علامات جسدية (الإمساك، اضطراب الشهية والنوم).",
      },
      {
        id: "psy-l2-s4",
        slideNumber: 4,
        title: "Childhood Depression: Nursing & Medical Care",
        content: [
          "1. History: Conduct interviews with the child/parents and observe behavior.",
          "2. Early Intervention: Instruct parents about the high importance of early clinical treatment.",
          "3. Multidisciplinary Care: Manage the child with a specialized health team prepared for child mental health.",
          "4. Suicidal Protection: Admit suicidal children to the hospital for protection if the family cannot provide constant, safe monitoring.",
          "5. Pharmacological Care: Administer psychiatrist-prescribed antidepressant drugs (e.g. SSRIs) carefully. Monitor for side-effects and NEVER stop medication abruptly."
        ],
        explanation: "الرعاية والوقاية من الانتحار: يجب جمع التاريخ المرضي الشامل، توعية الأهل بالعناية المبكرة، ونقل الأطفال ذوي الميول الانتحارية للمستشفى فوراً لحمايتهم في حال غياب الرقابة العائلية الدائمة.",
      },
      {
        id: "psy-l2-s5",
        slideNumber: 5,
        title: "Enuresis: Definition, Signs & Symptoms",
        content: [
          "Definition: Intentional or involuntary passage of urine into bed (usually at night) or clothes during the day.",
          "Diagnostic Rule: Must be beyond the age of bladder control (at least 5 years old), occurring at least twice a week for at least three consecutive months.",
          "Signs & Symptoms:",
          "- Immediate urgency accompanied by acute discomfort and restlessness.",
          "- High urinary frequency.",
          "Incidence: More common in boys; usually ceases between 6-8 years of age."
        ],
        explanation: "التبول اللاإرادي (Enuresis): هو إخراج البول إرادياً أو لاإرادياً في الفراش أو الملابس، ويشترط لتشخيصه طبياً تكراره مرتين على الأقل أسبوعياً لمدة 3 أشهر متتالية للأطفال فوق سن التحكم في المثانة (5 سنوات).",
      },
      {
        id: "psy-l2-s6",
        slideNumber: 6,
        title: "Enuresis: Causes & Management",
        content: [
          "Organic Causes: Structural urinary tract disorders, UTIs, neurological defects, and systemic disorders causing polyuria (e.g. Diabetes Mellitus, chronic renal failure, sickle-cell anemia).",
          "Emotional Causes: Fear, anxiety, and stressors.",
          "Therapeutic Management:",
          "- Pharmacological: Tricyclic antidepressants, anti-diuretics (Desmopressin), and anti-spasmodics.",
          "- Bladder Training & Techniques: Scheduled bladder/bathroom visits, fluid restriction/elimination after the evening meal, and interrupting sleep to void.",
          "- Nursing Considerations: Inform parents that punishment is strictly contraindicated (leads to negative emotional effects and decreases success). Support child's self-confidence."
        ],
        explanation: "أسباب وعلاج التبول اللاإرادي: قد يكون عضوياً كالتهاب مجرى البول (UTI) أو السكري (DM)، أو عاطفياً بسبب القلق. يعتمد العلاج على تدريب المثانة، تقليل السوائل ليلاً، ويحذر التمريض الأسر تماماً من عقاب الطفل (Punishment) لما له من أثر عكسي سلبي.",
      },
      {
        id: "psy-l2-s7",
        slideNumber: 7,
        title: "School Phobia: Concept & Symptoms",
        content: [
          "Definition: School Phobia (or school refusal) is an overwhelming, intense fear of attending school.",
          "It is not a clinical diagnosis on its own, but a common manifestation of underlying anxiety disorders.",
          "High-risk children: Only children, the youngest children, and chronically ill children.",
          "Symptomatology:",
          "- Physical: Diarrhea, severe headaches, nausea/vomiting, stomach aches, uncontrollable tremors/shaking upon the thought of school.",
          "- Psychological: Separation anxiety, fear of the dark, nightmares, tantrums.",
          "Management:",
          "- Talk Therapy: Cognitive Behavioral Therapy (CBT) to replace unhelpful thoughts with rational ones.",
          "- Exposure Therapy: Slowly introducing the school environment (visualizing, then gradual contact).",
          "- Medication: Pharmacological treatment of underlying clinical anxiety."
        ],
        explanation: "الرهاب المدرسي (School Phobia): خوف مفرط يعيق الذهاب للمدرسة، يكثر لدى الطفل الوحيد أو الأصغر بالمنزل. تظهر أعراض جسدية واضحة كالصداع والمغص والارتجاف عند ذكر المدرسة، ويعالج بالـ CBT والعلاج السلوكي بالتعرض التدريجي (Exposure therapy).",
      }
    ],
    quiz: [
      {
        id: "psy-l2-q1",
        question: "To diagnose a child with Enuresis, what is the mandatory frequency and duration criteria?",
        options: [
          "Once a month for half a year",
          "At least twice a week for at least three consecutive months",
          "Every night for one week",
          "Occasional bedwetting during school exams"
        ],
        correctAnswer: 1,
        explanation: "Medical guidelines require the inappropriate voiding of urine to occur at least 2 times per week for at least three consecutive months in children beyond the age of bladder control (5 years)."
      }
    ]
  },
  {
    id: "psy-l3",
    title: "Developmental Theories 1 (Erikson)",
    titleAr: "نظريات التطور النفسي والاجتماعي لإريكسون",
    branch: "Tur Sinai",
    program: "Nursing Program",
    date: "18/2/2025",
    professor: "Dr. Shimaa Abd Elhady",
    slides: [
      {
        id: "psy-l3-s1",
        slideNumber: 1,
        title: "Erikson's Psychosocial Theory Overview",
        content: [
          "Developmental Psychology MCH 223",
          "Theory: Erik Erikson's Psychosocial Development.",
          "Focus: Eight stages of development spanning from birth to old age.",
          "Each stage is characterized by a specific psychosocial conflict/critical point."
        ],
        explanation: "نظرية إريك إريكسون: تفترض وجود ثماني مراحل لتطور الشخصية تمتد من الولادة وحتى الشيخوخة، حيث يواجه الفرد في كل مرحلة أزمة نفسية واجتماعية يتوجب عليه اجتيازها ببناء نفسي إيجابي.",
      },
      {
        id: "psy-l3-s2",
        slideNumber: 2,
        title: "Childhood Stages: Trust to Industry",
        content: [
          "Stage 1: Trust vs. Mistrust (Birth - 1 year). Favorable outcome is a sense of physical safety, security, and love. Built on caregiver reliability.",
          "Stage 2: Autonomy vs. Shame & Doubt (1 - 3 years). Child practices self-sufficiency (potty, holding toys). Stubbornness, Negativism ('No!'), and Ritualism are key features.",
          "Stage 3: Initiative vs. Guilt (3 - 6 years). Child plans active play, takes responsibility for toys. Supportive boundaries build initiative.",
          "Stage 4: Industry vs. Inferiority (6 - 12 years). Child tries to master schoolwork, writing, and sports. Mastery yields industry; continuous peer comparison causes inferiority."
        ],
        explanation: "مراحل الطفولة الأربعة لإريكسون: 1. الثقة (الرضيع)، 2. الاستقلالية والتحكم الفسيولوجي (الطفل الدارج)، 3. المبادرة وصنع الخطط والمسؤولية (قبل المدرسة)، 4. الاجتهاد والنجاح الدراسي ومقارنة الأقران (سن المدرسة).",
      },
      {
        id: "psy-l3-s3",
        slideNumber: 3,
        title: "Adolescence to Senescence",
        content: [
          "Stage 5: Identity vs. Role Confusion (12 - 18 years). Resolves the question: 'Who am I?'. Explores sexual, vocational, and ideological identity.",
          "Stage 6: Intimacy vs. Isolation (19 - 39 years). Focuses on loving human connections.",
          "Stage 7: Generativity vs. Stagnation (40 - 60 years). Caring for the next generation, societal contribution.",
          "Stage 8: Integrity vs. Despair (> 60 years). Reflected self-evaluation. Yields wisdom or bitter regret."
        ],
        explanation: "المراحل من المراهقة للشيخوخة: 5. الهوية ومواجهة الضغوط أو التشتت، 6. الألفة والقدرة على الحب وبناء الأسرة، 7. الإنتاجية ورعاية النشء الجديد، 8. تكامل الذات والرضا عن الماضي للوصول لقمة الحكمة.",
      }
    ],
    quiz: [
      {
        id: "psy-l3-q1",
        question: "Under Erikson's framework, which age group experiences the crisis of Industry vs. Inferiority?",
        options: [
          "Toddler (1-3 years)",
          "Preschooler (3-6 years)",
          "School-age child (6-12 years)",
          "Adolescent (12-18 years)"
        ],
        correctAnswer: 2,
        explanation: "School-age children (6-12 years) strive to prove competency in academic and social tasks, corresponding to the Industry vs. Inferiority stage."
      }
    ]
  },
  {
    id: "psy-l4",
    title: "Developmental Theories 2 (Freud)",
    titleAr: "نظرية التطور النفسي والجنسي لسيجموند فرويد",
    branch: "Tur Sinai",
    program: "Nursing Program",
    date: "18/2/2025",
    professor: "Dr. Shimaa Abd Elhady",
    slides: [
      {
        id: "psy-l4-s1",
        slideNumber: 1,
        title: "Sigmund Freud's Theory Introduction",
        content: [
          "Psychoanalytic Perspective.",
          "Postulates five distinct psychosexual stages of development.",
          "In each stage, the child's libido (energy/urges) is centered on a specific part of the body.",
          "Fixation occurs if needs are unmet or excessively pampered."
        ],
        explanation: "نظرية سيجموند فرويد: ترتكز على التفسير التحليلي النفسي وتفترض نمو الطفل عبر خمس مراحل جسدية ونفسية تتركز فيها طاقة اللبيدو الغريزية في منطقة جسدية معينة، ويحدث التثبيت (Fixation) إذا لم تلبى الحاجات.",
      },
      {
        id: "psy-l4-s2",
        slideNumber: 2,
        title: "The Five Core Psychosexual Stages",
        content: [
          "1. Oral Stage (0 - 12 months): Satisfaction through breastfeeding, sucking, biting. Unmet needs lead to adult Oral Fixation (smoking, chewing gums, nail biting).",
          "2. Anal Stage (1 - 3 years): focus on anus. Potty training represents key authority clash. Harsh training yields Anal Retentive (rigid, hyper-organized, stingy) or Anal Expulsive (messy, disorganized) traits.",
          "3. Phallic Stage (3 - 6 years): Genital focus, resolution through identifying with same-sex parent.",
          "4. Latency Stage (6 - 12 years): Urges dormant, redirection to school activities, friendships, sports.",
          "5. Genital Stage (12 - 18 years): Sexual maturation, seeking healthy adult partnerships."
        ],
        explanation: "المراحل الخمسة لفرويد: 1. الفمية وتثبيتها كالعض والتدخين لاحقاً، 2. الشرجية والصراع في التدريب على استخدام المرحاض وعلاقته بالشخصية الموسوسة أو الفوضوية، 3. القضيبية وتحديد الهوية، 4. الكمون المعرفي، 5. التناسلية.",
      }
    ],
    quiz: [
      {
        id: "psy-l4-q1",
        question: "According to Freud, a highly rigid, hyper-organized adult with obsessive cleaning habits has likely suffered fixation in which stage?",
        options: [
          "Oral Stage",
          "Anal Stage",
          "Latency Stage",
          "Genital Stage"
        ],
        correctAnswer: 1,
        explanation: "Strict, punitive toilet training during the Anal Stage can lead to an 'Anal Retentive' personality, characterized by severe rigidity, hyper-organization, and obsessiveness."
      }
    ]
  },
  {
    id: "psy-l5",
    title: "ADHD & Autism Spectrum Disorder",
    titleAr: "تشتت الانتباه وفرط الحركة والتوحد",
    branch: "Tur Sinai",
    program: "Nursing Program",
    date: "17/4/2024",
    professor: "Dr. Shimaa Abd Elhady",
    slides: [
      {
        id: "psy-l5-s1",
        slideNumber: 1,
        title: "ADHD: Attention Deficit Hyperactivity Disorder",
        content: [
          "Definition: A persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with child development or academic functioning.",
          "Three Subtypes: 1. Predominantly Inattentive, 2. Predominantly Hyperactive-Impulsive, 3. Combined type.",
          "Symptomatology:",
          "- Inattention: Easily distracted, fails to give close attention, loses keys/books, doesn't seem to listen.",
          "- Hyperactivity-Impulsivity: Fidgets, squirms in seat, runs and climbs excessively, talks non-stop, blurts out answers, interrupts others.",
          "Medical Care: Central nervous stimulants (methylphenidate/Ritalin), behavioral modification therapies, and structured classroom setups."
        ],
        explanation: "اضطراب فرط الحركة وتشتت الانتباه (ADHD): سمات سلوكية تظهر كضعف التركيز والنشاط الحركي الفوضوي المفرط والاندفاع السلوكي. يعالج سلوكياً ودوائياً بالمنبهات العصبية (ميثيل فينيديت) لتنظيم النواقل الكلية بالمخ.",
      },
      {
        id: "psy-l5-s2",
        slideNumber: 2,
        title: "Autism Spectrum Disorder (ASD)",
        content: [
          "Definition: A complex neurological developmental disorder characterized by:",
          "1. Persistent deficits in social interaction and social communication across multiple contexts (e.g., poor eye contact, lack of social-emotional reciprocity, delayed or absent verbal speech).",
          "2. Restricted, repetitive patterns of behavior, interests, or activities (e.g., hand flapping, body rocking, lining up toys, intense fixation on single topics, extreme distress at small schedule changes).",
          "Early signs: Visible before age 3. Lack of response to their name, no pointing at objects of interest, solitary isolation.",
          "Nursing Role: Provide highly structured daily routine, minimize environmental loud noise/stimuli, communicate with simple concrete visuals."
        ],
        explanation: "اضطراب طيف التوحد (Autism): خلل نمو عصبي يظهر قبل سن 3 سنوات ويتميز بصعوبة التفاعل الاجتماعي المتبادل وتأخر الكلام وضعف التواصل البصري (Eye contact)، مع وجود حركات مكررة (كرفرفة اليد الوشيكة) وصدمة من تغير البيئة والروتين.",
      }
    ],
    quiz: [
      {
        id: "psy-l5-q1",
        question: "Which of the following is considered a core diagnostic feature of Autism Spectrum Disorder (ASD)?",
        options: [
          "Absolute insulin deficiency",
          "Persistent deficits in social interaction and restricted repetitive behaviors",
          "High numerical intelligence with extreme athletic strength",
          "Barking cough resembling a seal"
        ],
        correctAnswer: 1,
        explanation: "The two core pillars of ASD clinical diagnosis are persistent deficits in social communication/interaction and restricted, repetitive behaviors or activities."
      }
    ]
  },
  {
    id: "psy-l6",
    title: "Child Abuse and Neglect",
    titleAr: "إساءة معاملة الأطفال وإهمالهم",
    branch: "Tur Sinai",
    program: "Nursing Program",
    date: "18/3/2025",
    professor: "Dr. Shimaa Abd Elhady",
    slides: [
      {
        id: "psy-l6-s1",
        slideNumber: 1,
        title: "Child Abuse Categories",
        content: [
          "Child abuse includes physical, emotional, and sexual maltreatment or neglect by a parent/caregiver.",
          "1. Physical Abuse: Deliberate bodily injury (cigarette burns, skull fractures, retinal hemorrhages from shaking - Shaken Baby Syndrome).",
          "2. Emotional Abuse: Constant scolding, ignoring, rejecting, and terrorizing the child, leading to low self-esteem.",
          "3. Neglect (Most Common): Failure to provide basic needs: food, clean clothing, medical treatment, school education, or emotional safety.",
          "4. Sexual Abuse: Sexual exploitation of a child under age consent."
        ],
        explanation: "إساءة معاملة الأطفال: تنقسم لقسم جسدي (حروق، كسور العظام المتكررة)، ونفسي عاطفي (التوبيخ المستمر والشتم)، وإهمال (Neglect) وهو الأكثر شيوعاً كعدم تقديم الطعام أو تفويت الرعاية الطبية والدراسة، وإساءة جنسية.",
      },
      {
        id: "psy-l6-s2",
        slideNumber: 2,
        title: "Clinical Indicators & Nursing Role",
        content: [
          "Clinical Suspicions:",
          "- Injuries inconsistent with the explanations provided by the parents.",
          "- Multiple fractures in various stages of healing.",
          "- Sudden behavioral changes (extreme withdrawal or hyper-aggression).",
          "Crucial Nurse Actions:",
          "- Conduct physical examination and interview the child PRIVATELY (prevents children's fear of parents).",
          "- Document findings and child's exact quotes objective-by-objective with no bias.",
          "- Mandatory report to the state's child protection authorities."
        ],
        explanation: "العلامات والتدخل التمريضي: يشتبه التمريض عند وجود جروح مريبة لا مبرر لها أو كسور في مراحل التئام مختلفة. يلتزم الممرض بمقابلة الطفل على انفراد تام وحجر الخوف منه، وتوثيق الكلمات بكلماته، وإبلاغ جهات حماية حقوق الطفل فوراً.",
      }
    ],
    quiz: [
      {
        id: "psy-l6-q1",
        question: "If a pediatric nurse observes multiple bruises and bone bruises in different stages of healing, what is the most appropriate diagnostic action?",
        options: [
          "Document them privately and ignore them to maintain family confidentiality",
          "Confront parents immediately with aggressive accusations",
          "Interview the child in absolute privacy, document word-for-word quotes, and report to protection authorities",
          "Prescribe pain-relief creams and send them home"
        ],
        correctAnswer: 2,
        explanation: "Surgical and physical indicators of abuse require immediate documentation without parental presence to guarantee the child can speak freely, followed by a mandatory reporting path."
      }
    ]
  },
  {
    id: "psy-l7",
    title: "Introduction to Developmental Psychology",
    titleAr: "مقدمة في علم نفس النمو والتطور",
    branch: "Tur Sinai",
    program: "Nursing Program",
    date: "11/2/2025",
    professor: "Dr. Shimaa Abd Elhady",
    slides: [
      {
        id: "psy-l7-s1",
        slideNumber: 1,
        title: "Growth vs. Development Definitions",
        content: [
          "Developmental Psychology Course MCH 223.",
          "Definitions of Core Concepts:",
          "- Growth: Quantitative physical changes in size, weight, and volume of the body (can be measured, e.g., weight in kg, height in cm).",
          "- Development: Qualitative behavioral changes in functioning, skill mastery, and cognitive capabilities (cannot be easily measured in kilograms, e.g., social skills, motor coordination).",
          "Importance of studying child psychology: helps pediatric nurses recognize delays early and provide holistic care."
        ],
        explanation: "الفرق بين النمو والتطور: النمو (Growth) هو تغير كمي مادي في حجم ووزن خلايا الجسد يمكن قياسه بالأمتار أو الكيلوجرامات، أما التطور (Development) فهو تغير نوعي سلوكي في اكتساب المهارات والذكاء المعرفي والوعي الاجتماعي.",
      },
      {
        id: "psy-l7-s2",
        slideNumber: 2,
        title: "Major Principles of Behavioral Development",
        content: [
          "Core psychological progression concepts:",
          "1. Orderly Sequence: Developmental skills follow a predictable pattern (e.g., babbling occurs before talking).",
          "2. Continuous Process: Behavior does not change overnight; there is a daily gradual accumulation of traits.",
          "3. Developmental Pacing: Growth rates vary between different domains and individual children.",
          "4. Critical Periods: Specific windows where the child is highly sensitive to environmental factors (e.g., language acquisition milestones)."
        ],
        explanation: "المبادئ الأساسية للتطور السلوكي: 1. التسلسل المنظم (تتبع المهارات نمطاً متوقعاً كالمناغاة قبل الكلام)، 2. عملية مستمرة متدرجة تراكمية، 3. وتيرة نمو متفاوتة بين الأفراد، 4. الفترات الحرجة (Critical Periods) وهي النوافذ الحساسة لاكتساب المهارات اللغوية والاجتماعية.",
      },
      {
        id: "psy-l7-s3",
        slideNumber: 3,
        title: "Domains of Human Development",
        content: [
          "Human developmental pathways are divided into three intertwined domains:",
          "1. Physical Domain: Biological maturation, brain development, fine/gross motor achievements, and sensory capabilities.",
          "2. Cognitive Domain: Mental processes, memory retention, attention span, logical problem solving, and language comprehension.",
          "3. Psychosocial/Emotional Domain: Personality development, emotional regulation, sibling relationships, self-concept, and social interactions."
        ],
        explanation: "مجالات التطور البشري: ينقسم التطور إلى ثلاثة مجالات متداخلة: 1. المجال الجسدي الحركي (النضج البيولوجي وتطور الدماغ)، 2. المجال المعرفي العقلي (العد والذاكرة وحل المشكلات واللغة)، 3. المجال النفسي الاجتماعي العاطفي (تطور الشخصية والروابط والتفاعل الاجتماعي).",
      },
      {
        id: "psy-l7-s4",
        slideNumber: 4,
        title: "Stages of Development & Characteristics",
        content: [
          "Life Stages in Human Development:",
          "- Prenatal Period (Conception to Birth).",
          "- Infancy (Birth to 1 year).",
          "- Early Childhood / Toddler & Preschool (1 to 6 years).",
          "- Late Childhood / School Age (6 to 12 years).",
          "- Adolescence (12 to 18/21 years).",
          "Psychology during Early Childhood:",
          "1. Extreme Dependence: Relies on caregivers but tries to seek control.",
          "2. Self-Assertion: Desires to demonstrate skills independent of parents (leading to temper tantrums, stubbornness, or negativism)."
        ],
        explanation: "مراحل تطور حياة الإنسان: المرحلة الجنينية، الرضاعة (حتى سن سنة)، الطفولة المبكرة (1-6 سنوات)، الطفولة المتأخرة (6-12 سنة)، والمراهقة (12-18 سنة). وتتميز الطفولة بعدة سمات كالتوق للاعتماد وإثبات الذات الاستقلالي.",
      },
      {
        id: "psy-l7-s5",
        slideNumber: 5,
        title: "Theoretical Frameworks: Sigmund Freud",
        content: [
          "Freud's Psychoanalytic Theory of Psychosexual Development:",
          "1. Oral Stage (Birth to 1 year): Pleasure centers on mouth/sucking. Core conflict is weaning.",
          "2. Anal Stage (1 to 3 years): Focus is on bladder/bowel control. Core task is toilet training.",
          "3. Phallic Stage (3 to 6 years): Genitals area focus. Complexes emerge (Oedipus/Electra).",
          "4. Latency Stage (6 to 12 years): Sexual feelings are repressed; focus is on social/academic skills.",
          "5. Genital Stage (12+ years): Maturation of sexual interests."
        ],
        explanation: "نظريات التطور النفسي جنسي لسيجموند فرويد: 1. المرحلة الفموية (من الولادة حتى عام، التمركز حول المص)، 2. المرحلة الشرجية (1-3 سنوات والتحكم بالإخراج والتدريب على الحمام)، 3. الذكرية (3-6 سنوات)، 4. كمون المشاعر (6-12 سنة)، 5. التناسلية (تنضج المشاعر للمراهقة).",
      },
      {
        id: "psy-l7-s6",
        slideNumber: 6,
        title: "Theoretical Frameworks: Jean Piaget",
        content: [
          "Piaget's Cognitive Developmental Stages:",
          "1. Sensorimotor Stage (Birth to 2 years): Infant explores the world using senses and actions. Development of Object Permanence (knowing things exist even when out of sight).",
          "2. Preoperational Stage (2 to 7 years): Egocentric thinking, symbolic play, and lack of logical conservation concept.",
          "3. Concrete Operational Stage (7 to 11 years): Achieves logical conservation. Can classify objects.",
          "4. Formal Operational Stage (11+ years): Abstract thinking and scientific hypothesis testing."
        ],
        explanation: "نظرية التطور المعرفي لجان بياجيه: 1. المرحلة الحس حركية (0-2 سنة، يكتشف الكائنات بالحواس، تطور بقاء الأشياء Object permanence)، 2. شريحة ما قبل العمليات (2-7 سنوات، تفكير أناني متمركز حول الذات)، 3. العمليات الملموسة (7-11 سنة تصنيف منطقي مادي)، 4. العمليات المجردة (11 سنة فما فوق).",
      },
      {
        id: "psy-l7-s7",
        slideNumber: 7,
        title: "Theoretical Frameworks: Erik Erikson",
        content: [
          "Erikson's Psychosocial Developmental Crises:",
          "1. Trust vs. Mistrust (0 to 1 year): Core need for consistent caregiver quality.",
          "2. Autonomy vs. Shame & Doubt (1 to 3 years): Asserting choice and willpower.",
          "3. Initiative vs. Guilt (3 to 6 years): Initiating activities, planning and exploration.",
          "4. Industry vs. Inferiority (6 to 12 years): Learning academic pride and social abilities.",
          "5. Identity vs. Role Confusion (12 to 18+ years): Defining the adult sense of self."
        ],
        explanation: "نظرية التطور النفسي اجتماعي لإريك إريكسون: أزمات الهوية: 1. الثقة مقابل عدم الثقة، 2. الاستقلالية مقابل الخجل والشك، 3. المبادرة مقابل الشعور بالذنب، 4. الاجتهاد والجد مقابل الدونية والقصور، 5. الهوية مقابل تشتت الأدوار.",
      },
      {
        id: "psy-l7-s8",
        slideNumber: 8,
        title: "Nursing Application of Psychology Complex",
        content: [
          "How pediatric nurses apply developmental psychology concepts in practice:",
          "- Infants (Trust vs. Mistrust): Hold frequently, feed regularly, and encourage parental presence to satisfy attachment.",
          "- Toddlers (Autonomy vs. Shame): Offer choices ('Do you want medicine in a red or blue cup?'), do not scold regressions.",
          "- Hospital Preparation: Use play therapy, doll modeling, and simple terminology to reduce children's anxiety and fear prior to surgical interventions."
        ],
        explanation: "التطبيق السريري لعلم نفس النمو: كيف يوظف التمريض النظريات؟ الرضع: إتاحة مرافقة الآباء لتلبية حاجة الأمان، الأطفال الدارجين: عرض الخيارات الذاتية البسيطة (كوب أزرق أو أحمر)، والتحضير للعمليات باللعب الإرشادي بالدمي الرمزية للترويح والتهوين.",
      }
    ],
    quiz: [
      {
        id: "psy-l7-q1",
        question: "Which term refers to the qualitative expansion of physical skills, maturity of functioning, and mental capacities that cannot be measured directly using scale devices?",
        options: [
          "Growth",
          "Development",
          "Hyperplasia",
          "Somatic replication"
        ],
        correctAnswer: 1,
        explanation: "Development represents qualitative changes in function, capabilities, and motor skills, whereas growth refers strictly to quantitative enlargement."
      }
    ]
  },
  {
    id: "psy-l8",
    title: "Personality Traits & Emotions",
    titleAr: "سمات الشخصية والتطور الانفعالي للطفل",
    branch: "Tur Sinai",
    program: "Nursing Program",
    date: "8/5/2024",
    professor: "Zeinab Hassan",
    slides: [
      {
        id: "psy-l8-s1",
        slideNumber: 1,
        title: "Pediatric Emotions & Traits",
        content: [
          "Focus on early childhood emotional responses and traits.",
          "Common emotions: Fear, Curiosity, Love/Affection, Jealousy, Anger.",
          "Common personality reactions: Aggression, Temper Tantrums, Negativism.",
          "Understanding how children express these emotions is essential for nurses and caregivers."
        ],
        explanation: "الانفعالات لدى الأطفال: تشمل الخوف، الفضول، الحب والتعلق، الغيرة من المواليد الجدد، والغضب. تظهر الاستجابات على شكل عدوانية، نوبات غضب صراخية (Temper tantrums)، والرفض السلبي المستمر.",
      },
      {
        id: "psy-l8-s2",
        slideNumber: 2,
        title: "Temper Tantrums, Negativism & Dealing Techniques",
        content: [
          "1. Temper Tantrums: Emotional bursts of screaming, crying, and dropping to the floor (usually ages 1-4). Caused by frustration of not being understood or because of fatigue/hunger.",
          "   - How to manage: Maintain physical safety, stay absolutely calm (do not yell), IGNORE the screaming behavior (do not give in to their demands as this reinforces tantrums), and discuss when they calm down.",
          "2. Negativism: Refusal to cooperate, saying 'No' to every proposal.",
          "   - How to manage: Avoid direct yes/no questions. Instead of saying 'Do you want to sleep?', say 'Do you want to sleep in the blue or yellow bed?'. Provide guided choices.",
          "3. Sibling Jealousy: Triggered by a newborn baby receiving attention. The child may revert/regress to bedwetting or baby-talk."
        ],
        explanation: "إدارة نوبات الغضب والرفض: نوبات الغضب (Temper tantrums) تعاد بكبح الاستجابة لطلباتهم مع تجاهلها الهادئ لكي لا تترسخ، والرفض (Negativism) تدار بعدم طرح أسئلة مغلقة 'نعم أو لا'، وبدلاً من ذلك تقديم خيارين محددين ومقبولين للطفل.",
      }
    ],
    quiz: [
      {
        id: "psy-l8-q1",
        question: "What is the recommended nurse strategy for managing a toddler actively exhibiting a loud temper tantrum with crying on the floor?",
        options: [
          "Give in to their demands immediately to quieten them down",
          "Maintain their physical safety, remain completely calm, and ignore the crying behavior",
          "Scream back and administer aggressive physical discipline",
          "Admit them to the inpatient pediatric psychiatric unit"
        ],
        correctAnswer: 1,
        explanation: "Giving in to a child's demands during a tantrum teaches them that screaming works, reinforcing the behavior. Caregivers should ensure safety, stay calm, and ignore the behavior."
      }
    ]
  }
];
