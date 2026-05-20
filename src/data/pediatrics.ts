import { Lecture } from "../types";

export const pediatricsLectures: Lecture[] = [
  {
    id: "ped-l1",
    title: "Infant & Toddler Growth and Development",
    titleAr: "نمو وتطور الرضع والأطفال الدارجين",
    branch: "El Tor",
    program: "Nursing Program",
    date: "11/2/2025",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l1-s1",
        slideNumber: 1,
        title: "Introduction to Infant Development",
        content: [
          "Covers Infant (1 month to 1 year) and Toddler (1 to 3 years) growth stages.",
          "Theoretical Frameworks representing the pediatric baseline:",
          "- Erikson: Sense of Trust vs. Mistrust (Infancy), Sense of Autonomy vs. Shame/Doubt (Toddler).",
          "- Freud: Oral Stage (Infancy), Anal Stage (Toddler).",
          "- Piaget: Sensorimotor Period (Birth to 2 years), Preoperational Period (2 to 7 years)."
        ],
        explanation: "نمو الطفل الرضيع والدارج: تشرح المحاضرة أسس النمو الجسمي والفسيولوجي والنظريات الأساسية كالعض الغريزي لفرويد، ومبدأ الثقة لإريكسون، وفترة الحس حركي لبياجيه.",
      },
      {
        id: "ped-l1-s2",
        slideNumber: 2,
        title: "Infant Physical & Physiological Growth",
        content: [
          "Weight:",
          "- Average birth weight is 3.5 kg. Double weight by 4-5 months; triple by 9-12 months.",
          "- Gains 3/4 kg per month (1-4 months), 1/2 kg/month (5-8 months), 1/4 kg/month (9-12 months).",
          "Height & Head:",
          "- Gains roughly 2 cm/month (first 6 months), 1.5 cm/month (second 6 months).",
          "- Head circumference: at birth averages 33-35 cm. Increases 2 cm by the end of the first month.",
          "Vital Signs (Infant normal range):",
          "- Pulse: 110 - 150 beats/minute.",
          "- Respiration: 35 ± 10 breaths/minute (obligate nose breathers)."
        ],
        explanation: "النمو العضوي للرضيع: متوسط وزن الولادة 3.5 كجم، يتضاعف في سن 4-5 أشهر ويتضاعف 3 مرات بسن السنة. محيط الرأس يزيد 2 سم في الشهر الأول. النبض الطبيعي (110-150 نبضة) والتنفس (25-45 مرة بالدقيقة).",
      },
      {
        id: "ped-l1-s3",
        slideNumber: 3,
        title: "Principles of Growth and Development",
        content: [
          "Nursing core understanding of development progression principles:",
          "1. Cephalocaudal principle: Development proceeds from head to toe. Example: Infant gains head control before standing.",
          "2. Proximodistal principle: Development proceeds from center outline/near to far. Example: Moving shoulder before using fingers.",
          "3. Simple-to-complex sequence: General responses precede specific responses. Example: Whining before formulating actual speech.",
          "4. Continuous process: Growth is ongoing from conception through maturity, occurring at variable speeds.",
          "5. Predictable stages: Children pass through similar stages in a predictable sequence with unique schedules."
        ],
        explanation: "مبادئ وقوانين النمو والتطور: 1. الاتجاه من الرأس للقدم (Cephalocaudal) كمسك الرأس قبل المشي، 2. الاتجاه من المركز للأطراف (Proximodistal) كتحريك الكتف قبل الأصابع، 3. من البسيط للمركب ومن العام للخاص، 4. عملية مستمرة متواصلة ولكن بسرعات متفاوتة.",
      },
      {
        id: "ped-l1-s4",
        slideNumber: 4,
        title: "Infant Development Milestones Table",
        content: [
          "1 Month: Raises head momentarily when prone (gross); Hands often open/closed (fine).",
          "2 Months: Raises chin off couch (gross); Follows 180 degrees with eyes (fine).",
          "3 Months: Head supported (gross); Can hold a rattle if placed in hand (fine).",
          "4 Months: Sits with support (gross); Brings hands together (fine).",
          "6 Months: Sits without support (gross); Reaches objects & brings to mouth (fine).",
          "9 Months: Stands with support (gross); Uses pincer grasp (thumb and finger to pick cube).",
          "12 Months: Walk with one hand held / stands freely; Throws objects / holds cup to drink."
        ],
        explanation: "جدول التطور الحركي للرضيع: التحكم بالرأس (3 أشهر)، الجلوس بمساعده (4 أشهر)، الجلوس منفرداً دون دعامة (6 أشهر)، الوقوف بمساعدة (9 أشهر)، الوقوف بمفرده والمشي بخطى مع المساعدة ومسك الكوب (12 شهراً).",
      },
      {
        id: "ped-l1-s5",
        slideNumber: 5,
        title: "Toddlerhood Physical & Physiological Growth",
        content: [
          "Ages 1 to 3 Years physical development markers:",
          "1. Weight Gain: Slower pacing (average 2.2 kg/year). Birth weight is quadrupled by 2.5 years.",
          "2. Height: Increases by roughly 7.5 cm per year.",
          "3. Aesthetic Posture: Characterized by a typical potbellied appearance and lordosis (swayback), due to weak abdominal core muscles.",
          "4. Toddler Vital Signs normal baseline:",
          "- Pulse rate: 100 - 110 beats/minute.",
          "- Respiration: 20 - 30 breaths/minute.",
          "- Blood Pressure: 90/50 mmHg."
        ],
        explanation: "النمو الجسدي للدارج (Toddler): يتضاعف وزن الولادة 4 مرات عند عمر السنتين والنصف. الطول يزيد حوالي 7.5 سم سنوياً. يظهر الطفل ببطن بارز ممتد (Potbelly) وتقوس في الظهر (Lordosis) لضعف عضلات البطن مع نبض (100-110) وتنفس (20-30).",
      },
      {
        id: "ped-l1-s6",
        slideNumber: 6,
        title: "Toddler Developmental Milestones",
        content: [
          "Critical developmental achievements during toddler years:",
          "1. Gross Motor Milestones:",
          "- At 15 months: Walks alone easily without support.",
          "- At 18 months: Runs but falls frequently, jumps on both feet.",
          "- At 24 months: Walks up and down stairs one step at a time.",
          "- At 36 months: Stands momentarily on one foot, rides a tricycle.",
          "2. Fine Motor & Social Milestones:",
          "- 15-18 months: Builds a tower of 3-4 blocks, scribbles spontaneously.",
          "- 24 months: Mimics domestic work, builds tower of 6-7 blocks.",
          "- Cognitive / Play: Parallel Play pattern, speaks 2-3 word sentences."
        ],
        explanation: "مؤشرات التطور للطفل الدارج: المشي بمفرده بسن 15 شهراً، الجري السريع والصعود بخطى ثابتة 18-24 شهراً، مسك القلم والخرطشة وبناء برج مكعبات من 6 قطع، والتكلم بجمل من كلمتين واللعب بمحاذاة الأقران (Parallel Play).",
      },
      {
        id: "ped-l1-s7",
        slideNumber: 7,
        title: "Primary Deciduous Teething Timeline",
        content: [
          "Primary teeth eruption and related nursing instructions:",
          "1. First Teething Eruption: Begins between 6 to 8 months of age. Lower central incisors emerge first.",
          "2. Complete Deciduous Teeth: All 20 temporary teeth are completely erupted by 2.5 years of age.",
          "3. Signs of Teething: Drooling, chewing on hard objects, irritability, mild temperature increase.",
          "4. Nursing Actions & Interventions:",
          "- Advise parents to offer cold rubber teething rings to soothe gum inflammation.",
          "- Advise against applying over-the-counter teething gels containing benzocaine due to methemoglobinemia alerts.",
          "- Emphasize checking baby's gums and washing emerging teeth with water and soft gauze."
        ],
        explanation: "تسنين الأطفال (Dentition): تبدأ القواطع المركزية السفلية بالظهور بسن 6 إلى 8 أشهر، وتكتمل الأسنان اللبنية الـ 20 بسن سنتين ونصف. ينصح التمريض بتقديم حلقات التسنين الباردة، ويحذر تماماً من مركبات البنزوكائين السامة للدم.",
      },
      {
        id: "ped-l1-s8",
        slideNumber: 8,
        title: "Factors Influencing Pediatric Growth",
        content: [
          "Internal and external variables affecting a child's development path:",
          "1. Heredity & Genetics: Determines sex, racial features, and physical potential.",
          "2. Prenatal Environment: Maternal health, chronic illnesses, smoking, and medication intake during pregnancy.",
          "3. Nutrition: Single most crucial influence. Severe malnutrition (Marasmus or Kwashiorkor) results in stunted physical growth and delayed cognitive capacity.",
          "4. Hormones & Endocrine: Growth Hormone (GH), thyroid hormone, and insulin play continuous developmental roles."
        ],
        explanation: "العوامل المؤثرة على النمو: تشمل العوامل الوراثية وتأثير بيئة الرحم أثناء الحمل كصحة الأم وتناول الأدوية، والتغذية (أهم عامل خارجي حيث يسبب سوء التغذية تأخراً حاداً)، والهرمونات كهرمون النمو والغدة الدرقية.",
      },
      {
        id: "ped-l1-s9",
        slideNumber: 9,
        title: "When to Worry: Risk Flags & Danger Signs",
        content: [
          "Delayed Smiling: Causes include lack of stimulation, mental subnormality, blindness, or autism.",
          "Delayed Sitting/Walking: Causes include familial features, rickets, cerebral palsy, muscular dystrophy, or severe protein energy malnutrition.",
          "Delayed Speech: Causes include lack of environmental communication (no one talks to them), twins, bilingualism, deafness, or autism.",
          "Danger Signs: Marked delay in more than one field of development or hip dislocation indicators."
        ],
        explanation: "علامات الخطر: تأخر الابتسامة (أسبابها ضعف التحفيز أو التوحد)، تأخر الجلوس والمشي (الكساح Rickets، الشلل الدماغي CP)، وتأخر الكلام (الصمم أو غياب التحاور البيئي).",
      }
    ],
    quiz: [
      {
        id: "ped-l1-q1",
        question: "By which age is a normal infant expected to sit completely without support?",
        options: [
          "3 months",
          "4 months",
          "6 months",
          "12 months"
        ],
        correctAnswer: 2,
        explanation: "A healthy infant typically achieves sitting independently without support by 6 months of age."
      }
    ]
  },
  {
    id: "ped-l2",
    title: "Health Promotion of Children",
    titleAr: "تعزيز صحة الأطفال وشؤون الرعاية",
    branch: "El Tor",
    program: "Nursing Program",
    date: "18/4/2026",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l2-s1",
        slideNumber: 1,
        title: "Introduction & Energy Requirements",
        content: [
          "Health Promotion: Efforts to enhance positive health and prevent ill health through health education, prevention, and protection.",
          "Calories requirements for children:",
          "- Infant: 110 cal/kg/day.",
          "- Toddler: 1300 cal/day.",
          "- Preschool child: 1800 cal/day.",
          "- School child: 2400 cal/day.",
          "- Adolescent: 2400 cal/day (girls), 2800-3000 cal/day (boys).",
          "Formula for children (2 years to adolescence):",
          "Daily Calories = (Age in years x 120) + 1000"
        ],
        explanation: "احتياجات الطاقة ومعادلة السعرات: يحتاج الرضيع 110 سعر حراري لكل كجم يومياً. للأطفال من سن سنتين فما فوق، تحسب السعرات بالمعادلة الهامة جداً: (العمر بالسنوات × 120) + 1000.",
      },
      {
        id: "ped-l2-s2",
        slideNumber: 2,
        title: "Value and Types of Play",
        content: [
          "Play serves physical, educational, therapeutic, social, and moral value in childhood.",
          "Developmental Play Categories by age group:",
          "1. Solitary Play (Infant): Children play with their toys alone, independently with no reference to what others do.",
          "2. Parallel Play (Toddler): Children play the same game side-by-side with similar toys, but not with each other.",
          "3. Associative & Cooperative Play (Preschool): Playing together, sharing equipment, organizing games, and making friends.",
          "4. Competitive Play (School age & Adolescence): Structured play characterized by rules and team competition."
        ],
        explanation: "أنواع اللعب التنموي: اللعب الفردي (Solitary) للرضع، اللعب المتوازي (Parallel) للدارجين (بجوار بعض دون تفاعل مباشر)، اللعب التعاوني التشاركي (Cooperative) لأطفال الروضة، واللعب التنافسي المنظم لأطفال المدارس والمراهقين.",
      },
      {
        id: "ped-l2-s3",
        slideNumber: 3,
        title: "Types & Levels of Prevention",
        content: [
          "EBP Primary, Secondary, and Tertiary prevention applied to pediatrics:",
          "1. Primary Prevention: Prevent the occurrence of diseases. Actions: giving immunizations, teaching car seat safety.",
          "2. Secondary Prevention: Early diagnosis and screening to lessen severity. Actions: vision and hearing tests, developmental screening.",
          "3. Tertiary Prevention (Rehabilitation): Focuses on restoring optimum function and preventing deterioration. Actions: specialized rehab for a child after an accident."
        ],
        explanation: "مستويات الوقاية الصحية: 1. الوقاية الأولية (تمنع المرض مثل التطعيمات وإرشادات مقاعد السيارات)، 2. الوقاية الثانوية (التشخيص المبكر مثل فحص النظر والسمع)، 3. الوقاية من الدرجة الثالثة (إعادة التأهيل بعد الحوادث).",
      },
      {
        id: "ped-l2-s4",
        slideNumber: 4,
        title: "Classification of Immunization",
        content: [
          "Natural Active: The immune system makes its own antibodies after exposure to a live pathogen (e.g. recovering from Measles).",
          "Natural Passive: The antibody transfer occurs naturally (e.g. neonate receiving maternal antibodies via placenta/breast milk).",
          "Artificial Active: Induced by vaccination/immunization (e.g. receiving a weakened pathogen to stimulate antibody production).",
          "Artificial Passive: Injection of pre-made antibodies (e.g. Gamma globulins) to provide instant temporary protection."
        ],
        explanation: "تصنيفات المناعة: طبيعية نشطة (بعد المرض الطبيعي كالحصبة)، طبيعية غير نشطة (تنتقل من الأم للجنين عبر المشيمة)، صناعية نشطة (بالتطعيم واللقاح)، وصناعية غير نشطة (بحقن الأجسام المضادة الجاهزة جاما جلوبولين).",
      }
    ],
    quiz: [
      {
        id: "ped-l2-q1",
        question: "Using the pediatric calorie formula, how many calories does a 6-year-old child require daily?",
        options: [
          "1000 cal/day",
          "1720 cal/day",
          "2400 cal/day",
          "1300 cal/day"
        ],
        correctAnswer: 1,
        explanation: "The formula is (Age in years x 120) + 1000. For a 6-year-old: (6 x 120) + 1000 = 720 + 1000 = 1720 cal/day."
      }
    ]
  },
  {
    id: "ped-l3",
    title: "Diseases of the Respiratory System",
    titleAr: "أمراض الجهاز التنفسي لدى الأطفال",
    branch: "El Tor",
    program: "Nursing Program",
    date: "18/4/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ped-l3-s1",
        slideNumber: 1,
        title: "Respiratory Infections Overview",
        content: [
          "Respiratory tract diseases are highly common in pediatric nursing.",
          "Categorized by area of involvement:",
          "- Upper Respiratory Infections (URI): common cold, epiglottitis, laryngitis, pharyngitis, sinusitis, croup.",
          "- Lower Respiratory Infections (LRI): bronchitis, bronchiolitis, pneumonia.",
          "Major Risk Factors: Young age, lack of immunization, Vitamin A deficiency, crowdings, and tobacco smoke."
        ],
        explanation: "الجهاز التنفسي: تنقسم لعدوى علوية وسفلية. عوامل الخطر تشمل صغر السن، غياب التطعيمات، ونقص فيتامين أ السريري.",
      },
      {
        id: "ped-l3-s2",
        slideNumber: 2,
        title: "Upper Respiratory Conditions",
        content: [
          "1. Common Cold (Acute Rhinitis): Inflammation of the nasal mucosa, clear discharge becoming purulent, treated with saline nasal drops, paracetamol for fever. Antibiotics are contraindicated.",
          "2. Epiglottitis: Inflammation of epiglottis, emergency airway risk. Symptoms include fever, severe sore throat, difficulty breathing/swallowing (drooling). Treated with IV fluids, antibiotics, steroids.",
          "3. Laryngitis: Vocal box inflammation, voice shift, severe hoarseness. Managed with voice rest, steam inhalation, and hydration.",
          "4. Pharyngitis: Sore throat, viral or bacterial (Group A Strep). Treated with systemic antibiotics if Strep test is positive.",
          "5. Sinusitis: Inflamed sinus cavities, facial pain/pressure. Treated with hydration, steam; antibiotics if bacterial.",
          "6. Croup (Laryngotracheobronchitis): Barking cough (like a seal), airway swelling. At-home cool mist humidifier, or epinephrine/steroids in moderate/severe hospital cases."
        ],
        explanation: "أمراض الجهاز التنفسي العلوي: 1. الزكام (يمنع استخدام المضاد الحيوي)، 2. التهاب لسان المزمار (حالة طارئة تسبب سيلان اللعاب Drooling وتضيق المجرى)، 3. بحة الصوت والتهاب الحنجرة، 4. التهاب البلعوم، 5. الجيوب الأنفية، 6. الكروپ (Croup) السعال النباحي المميز كصوت الفقمة.",
      },
      {
        id: "ped-l3-s3",
        slideNumber: 3,
        title: "Lower Respiratory: Pneumonia Severity",
        content: [
          "Pneumonia: Lung parenchyma inflammation with consolidation. Three clinical severity categories represent critical assessment:",
          "1. Pneumonia: Fast breathing (tachypnea). Normal limits defining tachypnea:",
          "   - Age < 2 months: 60/min or more.",
          "   - Age 2-12 months: 50/min or more.",
          "   - Age 12m-5 years: 40/min or more.",
          "2. Severe Pneumonia: Fast breathing PLUS chest indrawing (the lower chest wall sucks in when the child breathes in, indicating high muscular effort).",
          "3. Very Severe Pneumonia: Clinical danger signs are present: Grunting sound on expiration, inability to drink / suck, abnormal sleepiness (lethargy), and severe malnutrition. Hospitalization and supplemental oxygen are mandatory."
        ],
        explanation: "الالتهاب الرئوي (Pneumonia): يتدرج تشخيصه سريرياً: 1. التهاب رئوي بسيط (يتنفس بسرعة)، 2. التهاب رئوي شديد (يشترط وجود انخساف صدر خارجي Chest indrawing)، 3. شديد جداً (يصاحبه أنين Grunting، رفض الرضاعة، والخمول التام).",
      }
    ],
    quiz: [
      {
        id: "ped-l3-q1",
        question: "To classify a 10-month-old infant as having Pneumonia, what is the minimum respiratory rate threshold?",
        options: [
          "30 breaths per minute",
          "40 breaths per minute",
          "50 breaths per minute",
          "60 breaths per minute"
        ],
        correctAnswer: 2,
        explanation: "For infants aged 2 to 12 months, a respiratory rate of 50 breaths per minute or more is defined as fast breathing (tachypnea), confirming pneumonia status."
      }
    ]
  },
  {
    id: "ped-l4",
    title: "Diseases of the Urinary System",
    titleAr: "أمراض الجهاز البولي والكلى",
    branch: "El Tor",
    program: "Nursing Program",
    date: "18/4/2026",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l4-s1",
        slideNumber: 1,
        title: "Urinary Tract Infections (UTI)",
        content: [
          "Prevalence: Highly common in girls because the female urethra is shorter and located closer to the vagina & anus.",
          "Most common causative pathogen is Escherichia coli.",
          "Assessment:",
          "- Pain during urination (dysuria), frequency, burning sensation, and hematuria (blood in urine).",
          "- Low grade or high fever, enuresis, vomiting.",
          "Lab Investigation: Urine culture, microscopic analysis.",
          "Nursing Care: Focus on parental education on hygiene (wipe front to back), increased fluid intake, and finishing the full 10-day antibiotic course."
        ],
        explanation: "التهابات مجرى البول (UTI): شائعة في الإناث لقصر مجرى البول وقربه من فتحة الشرج وتسببها بكتيريا E. coli. يجب تثقيف الأمهات بالتنظيف من الأمام إلى الخلف لتقليل نقل العدوى وزيادة السوائل.",
      },
      {
        id: "ped-l4-s2",
        slideNumber: 2,
        title: "Acute Glomerulonephritis (AGN)",
        content: [
          "Definition: Common post-infectious cause of acute renal failure in children. It is the sterile inflammation of the glomeruli of the kidneys.",
          "Etiology: Typically occurs 1 to 4 weeks after a Group A beta-hemolytic streptococcal infection of the throat (strep throat) or skin (impetigo).",
          "Pathophysiology: Antigen-antibody immune complexes deposit in the glomerular membrane, injuring the filtration barrier.",
          "Clinical Manifestations:",
          "- Puffy face (periorbital edema) due to fluid accumulation in tissue spaces.",
          "- Discolored smoky, cola-colored urine (hematuria).",
          "- Oliguria (diminished urine output) and hypertension."
        ],
        explanation: "التهاب كبيبات الكلى الحاد (AGN): تفاعل مناعي معقد يحدث بعد 1-4 أسابيع من التهاب اللوزتين أو الحلق البكتيري بالميكروب السبحي (Strep throat) مسبباً بيلة دموية تغير لون البول للون الشاي أو الكولا (Cola-colored)، وانتفاخ دائر العينين (Periorbital edema).",
      },
      {
        id: "ped-l4-s3",
        slideNumber: 3,
        title: "AGN Nursing Care & Management",
        content: [
          "Therapeutic Management: No specific treatment exists; care is supportive:",
          "- Restrict fluids exact calculations: daily output + 300-400 cc (insensible losses).",
          "- Diet: Low sodium, low potassium, high carbohydrate.",
          "- Hospital monitoring: Monitor daily weight, blood pressure, and precise fluid Intake & Output (I/O).",
          "Prognosis: Complete recovery achieved in > 95% of childhood cases."
        ],
        explanation: "علاج AGN التمريضي: قياس ضغط الدم والوزن اليومي بدقة، وحساب السوائل بدقة شديدة (البول الصادر + 300 إلى 400 مل مفقود غير محسوس)، مع تقليل الملح والبوتاسيوم في الغذاء لحين تعافي الكلى.",
      }
    ],
    quiz: [
      {
        id: "ped-l4-q1",
        question: "Acute glomerulonephritis in children typically manifests 1 to 4 weeks after which primary infection?",
        options: [
          "Escherichia coli UTI",
          "Group A beta-hemolytic streptococcal throat or skin infection",
          "Rotavirus gastroenteritis",
          "Candidiasis thrush"
        ],
        correctAnswer: 1,
        explanation: "AGN is an immune-mediated disorder occurring as a post-streptococcal complication of throat or skin infections caused by Group A Streptococcus."
      }
    ]
  },
  {
    id: "ped-l5",
    title: "High Risk Neonates & Jaundice",
    titleAr: "حديثي الولادة المعرضين لمخاطر عالية والصفراء",
    branch: "El Tor",
    program: "Nursing Program",
    date: "17/4/2024",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l5-s1",
        slideNumber: 1,
        title: "High Risk Definitions & IDM",
        content: [
          "High-risk Neonate: A newborn exposed to conditions putting survival rates at risk.",
          "Low Birth Weight: Weighing < 2500 grams at birth (VLBW < 1500 g, ELBW < 1000 g).",
          "Infant of Diabetic Mother (IDM):",
          "- Maternal hyperglycemia sends excess glucose to baby, causing fetal hyperinsulinemia (pancreatic hypertrophy). This leads to a macrosomic baby (excess size, abundant fat, cardiomegaly).",
          "- Risk of severe hypoglycemia within first 1-2 hours of life.",
          "IDM Management: Check blood glucose every 30-60 mins after birth. If hypoglycemic (< 40 mg/dL), feed immediately; if clinically indicated, administer IV bolus of 2-4 mL/kg of 10% dextrose."
        ],
        explanation: "حديثي الولادة عالي الخطورة: المواليد بوزن أقل من 2500 جرام. طفل الأم السكرية (IDM) يعاني من زيادة الحجم (Macrosomia) وتضخم الأعضاء بسبب تحفيز مفرط للأنسولين لديه، ويتعرض فوراً لهبوط خطير في السكر يعالج بحقن الدكستروز 10% أو الرضاعة السريعة.",
      },
      {
        id: "ped-l5-s2",
        slideNumber: 2,
        title: "Hyperbilirubinemia (Neonatal Jaundice)",
        content: [
          "Definition: Yellowish discoloration of skin and tissues due to high serum bilirubin (>= 12 mg/dl in full-term, >= 15 mg/dl in preterm).",
          "Physiological Jaundice: Appears after 24 hrs (usually 2nd or 3rd day), disappears by 7-10 days, never exceeds limits, no kernicterus, requires no treatment.",
          "Pathological Jaundice: Appears within first 24 hours of life, exceeds parameters, can cause Kernicterus (bilirubin encephalopathy, passes blood-brain barrier causing brain damage when bilirubin > 20 mg/dl). Requires prompt medical treatment.",
          "Management:",
          "- Phototherapy: Cover eyes, keep newborn naked except for diaper, monitor body temp, give fluids, do NOT apply oils (prevents burns).",
          "- Exchange Transfusion: Double volume exchange over 45-60 mins to dilute bilirubin and antibodies."
        ],
        explanation: "الصفراء لحديثي الولادة: فسيولوجية (بعد 24 ساعة ولا خوف منها)، مرضية (تظهر في اليوم الأول وهي خطيرة جداً وتسبب تلف الدماغ كيرنيكتيرس Kernicterus إذا تجاوزت الـ 20 مجم). يعالج بالعلاج الضوئي (تغطية العين، تنظيف الجلد، منع الزيوت واللوشن لمنع الحروق).",
      },
      {
        id: "ped-l5-s3",
        slideNumber: 3,
        title: "Meconium Aspiration & Respiratory Distress",
        content: [
          "Meconium Aspiration Syndrome (MAS): When the fetus passes meconium into amniotic fluid due to distress, aspirating it into lungs.",
          " MAS Immediate Rule: If a baby is born through thick meconium-stained fluid, perform immediate endotracheal suctioning BEFORE the baby cries or is stimulated, to prevent airway clogging."
        ],
        explanation: "متلازمة استنشاق العقي (MAS): يحدث عندما يتبرز الجنين السائل الأخضر (Meconium) داخل الرحم بسبب نقص الأكسجين ويستنشقه. يلتزم ممرض الولادة بشفط الحلق والمجرى الهوائي فوراً وقبل تحفيز بكاء الطفل منعا لانسداد الرئة.",
      }
    ],
    quiz: [
      {
        id: "ped-l5-q1",
        question: "When a baby is born through thick meconium-stained amniotic fluid, which action must a nurse perform first?",
        options: [
          "Stimulate the baby to cry",
          "Perform immediate endotracheal suctioning before the baby cries",
          "Administer systemic antibiotics",
          "Initiate oxygen therapy with CPAP"
        ],
        correctAnswer: 1,
        explanation: "Endotracheal suctioning must be done immediately upon delivery before the newborn takes their first breath to prevent aspirating meconium deep into the lungs."
      }
    ]
  },
  {
    id: "ped-l6",
    title: "Cleft Lip and Cleft Palate",
    titleAr: "شفة الأرنب وشق سقف الحلق",
    branch: "El Tor",
    program: "Nursing Program",
    date: "17/4/2024",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l6-s1",
        slideNumber: 1,
        title: "Definition & Anatomy",
        content: [
          "Cleft Lip: Separation in the upper lip that occurs during early fetal development (weeks 4-7). Can be unilateral or bilateral.",
          "Cleft Palate: Split or opening in the roof of the mouth (weeks 6-9 of pregnancy) which can include the hard palate, soft palate, or both.",
          "Risk Factors: Genetics combined with environmental triggers: antiseizure medications, Accutane (acne), Methotrexate (cancer/arthritis), maternal folic acid deficiency, smoking, and obesity."
        ],
        explanation: "الشفة الأرنبية وشق الحلق: تشوه خلقي في الفم والشفتين نتيجة عدم التحام الأنسجة في الثلث الأول من الحمل. تزيد عوامل الخطر مثل أدوية الصرع، علاج حب الشباب الآكوتان، ونقص حمض الفوليك للأم.",
      },
      {
        id: "ped-l6-s2",
        slideNumber: 2,
        title: "Complications & Treatment Times",
        content: [
          "Clinical Complications: Eating difficulties (inability to create suction), speech delays, fluid in eardrums leading to hearing loss, and dental problems.",
          "Surgical Timelines:",
          "- Cleft Lip Repair: Done early, between 3 to 6 months of age to support feeding and bonding.",
          "- Cleft Palate Repair: Done at 12 months of age. Helps speech development and limits fluid buildup in middle ears (special eardrum tympanostomy tubes may be placed).",
          "Nonsurgical: Specialized soft, long-elliptical safety bottles/syringes to feed without leakage. Speech therapist follow ups at age 4 to 5."
        ],
        explanation: "المضاعفات والعمليات: يواجه الطفل صعوبة بالغة بالرضاعة والكلام وتجمع سوائل الأذن. تجرى جراحة الشفة مبكراً (3-6 أشهر) وجراحة سقف الحلق بسن (12 شهراً) مع وضع أنابيب تفريغ طبلة الأذن، واستخدام زجاجات رضاعة خاصة مرنة ذات حلمة مستطيلة لتسهيل طعام الرضيع.",
      }
    ],
    quiz: [
      {
        id: "ped-l6-q1",
        question: "At what age is a surgical cleft palate repair typically performed to support speech and prevent middle ear fluid buildup?",
        options: [
          "3 months",
          "6 months",
          "12 months",
          "5 years"
        ],
        correctAnswer: 2,
        explanation: "Cleft palate repair is usually performed around 12 months of age to optimize speech, whereas cleft lip is repaired earlier (3-6 months)."
      }
    ]
  },
  {
    id: "ped-l7",
    title: "Management of Childhood GI Disorders",
    titleAr: "إدارة الاضطرابات الهضمية للأطفال",
    branch: "El Tor",
    program: "Nursing Program",
    date: "18/4/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ped-l7-s1",
        slideNumber: 1,
        title: "Thrush Stomatitis & Colic",
        content: [
          "1. Thrush Stomatitis: Mouth Candida fungus infection. White plaques resembling milk curds on tongue/cheeks which bleed if removed. Treated with Nystatin. Support cleanliness of nipples & sterile water after feeding.",
          "2. Colic: Paroxysmal intestinal cramp due to gas accumulation. Symptom, not a disease. Clinical signs: sudden loud crying, tensed distended abdomen, legs drawn up on abdomen. Managed with frequent burping, upright position, caraway/anise hot fluids, and loving hold."
        ],
        explanation: "الفطريات والتقلصات: 1. داء المبيضات الفموي (سماك الفم) يسبب بقعاً كالقشدة تنزف لو أزيلت يعالج بالنستاتين. 2. مغص الأطفال (Colic): انتفاخ وتقلص الأمعاء يسبب الصراخ الحاد مع ثني الأرجل نحو البطن، يعالج بالطرد والتجشؤ (Burping)، السوائل الدافئة (الكراوية واليانسون)، والضم.",
      },
      {
        id: "ped-l7-s2",
        slideNumber: 2,
        title: "Diarrhea & Dehydration Management",
        content: [
          "Diarrhea: Abnormal intestinal water & electrolyte transport causing more than 3 loose/watery stools in 24 hrs.",
          "Assess Dehydration Status (Crucial Nurse Skill):",
          "- No Dehydration: Well, alert, tears present, normal thirst, skin pinch goes back quickly. Follow Plan A.",
          "- Some Dehydration: Restless, irritable, eyes sunken/dry, thirsty drinks eagerly, skin pinch goes back slowly (2-3s). Follow Plan B.",
          "- Severe Dehydration: Lethargic or floppy/unconscious, eyes very dry, drinks poorly/not able to, skin pinch goes back very slowly (>3s). Follow Plan C.",
          "Management Protocols:",
          "- Plan A (Home): Give more fluids (ORS: < 2y is 50-100ml, > 2y is 100-200ml after each stool), continue breastfeeding.",
          "- Plan B (Rehydration Center): Give Oral Rehydration Solution (ORS) 75 ml/kg slowly over 4 hours, reassess to shift to Plan A or C.",
          "- Plan C (Hospital): Mandatory immediate IV fluids (Ringer's lactate or normal saline - 100 mL/kg). Avoid 5% dextrose as it increases hyponatremia/cerebral edema risk."
        ],
        explanation: "تقييم الإسهال والجفاف: 1. بلا جفاف (خطة أ: علاج منزلي بمحلول الجفاف بجرعة 50-200 مل بعد كل إسهال)، 2. جفاف متوسط (خطة ب: محلول جفاف 75 مل/كجم على مدار 4 ساعات سريرياً)، 3. جفاف شديد (خطة ج: محاليل وريدية عاجلة رينجر لاكتات ويمنع محلول الجلوكوز 5% لخطورة وذمة الدماغ).",
      }
    ],
    quiz: [
      {
        id: "ped-l7-q1",
        question: "Among the dehydration management plans, which intravenous fluid treatment is CONTRAINDICATED in Plan C because it increases the risk of hyponatremia and cerebral edema in infants?",
        options: [
          "Ringer's lactate",
          "Normal saline",
          "5% Glucose (Dextrose) solution",
          "ORS Oral solution"
        ],
        correctAnswer: 2,
        explanation: "5% Dextrose alone should not be used as it does not replace lost electrolytes effectively, leading to water intoxication, severe hyponatremia, and swelling of the brain (cerebral edema)."
      }
    ]
  },
  {
    id: "ped-l8",
    title: "Intestinal Obstruction in Children",
    titleAr: "الانسداد المعوي لدى الأطفال",
    branch: "El Tor",
    program: "Nursing Program",
    date: "25/4/2026",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l8-s1",
        slideNumber: 1,
        title: "Intestinal Obstruction: Concepts & Signs",
        content: [
          "Partial or complete blockage of the small or large bowel.",
          "Prevents food, fluids, and gas from moving through the digestive system.",
          "Core Symptoms: Abdominal pain (cramping), abdominal bloating, nausea, vomiting (green/yellow bile-stained), lack of appetite, severe constipation in complete obstruction.",
          "Infants specific symptoms: Fever, blood in stool (red-currant jelly stool in intussusception), swollen tender belly, and marked lethargy."
        ],
        explanation: "الانسداد المعوي للأطفال: انسداد كامل أو جزئي يحول دون مرور الفضلات والغازات. يعاني الطفل من مغص شديد، انتفاخ، قيء مراري أخضر، خمول، وبراز مدمم يشبه هلام الكرز الأحمر في حالات تداخل الأمعاء (Intussusception).",
      },
      {
        id: "ped-l8-s2",
        slideNumber: 2,
        title: "Etiology & Complications",
        content: [
          "Causes in Pediatric age:",
          "- Intussusception: One part of the intestine slides into the next like a telescope (common in children < 3 years).",
          "- Volvulus: Malrotation and twisting of the intestine.",
          "- Hernias, foreign body ingestion, or abdominal adhesions.",
          "Complications: Bowel perforation, peritonitis (abdominal lining inflammation - emergency!), sepsis, gangrene of the strangulated bowel segment."
        ],
        explanation: "الأسباب والمضاعفات: تداخل الأمعاء (Intussusception) للأطفال دون 3 سنوات، وانفتال الأمعاء (Volvulus)، والفتق. تفضي المضاعفات المحتملة لانفجار الأمعاء والتهاب البريتون التسممي (Peritonitis) وعفن الأمعاء (Gangrene).",
      }
    ],
    quiz: [
      {
        id: "ped-l8-q1",
        question: "What is the classic type of bloody stool seen in children suffering from Intussusception?",
        options: [
          "Melena (dark tarry stool)",
          "Red-currant jelly stool",
          "Normal brown loose stool",
          "Clay-colored dry stool"
        ],
        correctAnswer: 1,
        explanation: "In intussusception, blood and mucus mix in the bowel, giving rise to the characteristic 'red-currant jelly' stool."
      }
    ]
  },
  {
    id: "ped-l9",
    title: "Blood Diseases in Children (Hematology)",
    titleAr: "أمراض الدم لدى الأطفال",
    branch: "El Tor",
    program: "Nursing Program",
    date: "12/5/2026",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l9-s1",
        slideNumber: 1,
        title: "Bleeding Disorders: ITP",
        content: [
          "Immune Thrombocytopenic Purpura (ITP):",
          "- Autoimmune hematological disorder where the body directs antibodies against its own platelets, resulting in rapid spleen destruction and low platelet count.",
          "- Symptoms: Sudden easy bruising (bruises), tiny skin bleed spots (petechiae), nosebleeds (epistaxis), bleeding gums, and dark blood in stools.",
          "- Severe count: Platelets < 20,000/mm3 (highest risk of intracranial hemorrhage).",
          "ITP Nursing Management: Limit active physical rough play, avoid injections/IM, avoid aspirin/NSAIDs, administer corticosteroids, IVIG, or anti-D."
        ],
        explanation: "اضطرابات النزيف (ITP): مرض مناعي ذاتي يهاجم الصفائح الدموية مسبباً نزيفاً وبقعاً حمراء صغيرة (Petechiae) ونزف اللثة والأنف (Epistaxis). ينبه التمريض بمنع اللعب العنيف تماماً وحقن العضل وحبوب الأسبرين المسببة للنزف البالغ.",
      },
      {
        id: "ped-l9-s2",
        slideNumber: 2,
        title: "Anemias in Children",
        content: [
          "Anemia: Deficient red blood cells or Hemoglobin levels (Hb < 11 g/dl).",
          "1. Iron Deficiency Anemia: Most common nutritional anemia due to low iron intake, drinking excess cow's milk before 1 year of age. Signs: pallor, fatigue, pica (eating dirt/ice), spoon nails.",
          "2. Sickle Cell Anemia: Inherited HbS hemoglobin. Cells become rigid sickle-shaped under low oxygen. Causes severe pain crises, spleen infarction.",
          "3. Thalassemia: Inherited microcytic hemolytic anemia causing classic mongoloid facial features, chipmunk cheeks, and severe splenomegaly. Needs lifetime blood transfusions."
        ],
        explanation: "الأنيميا لدى الأطفال: نقص الهيموجلوبين (< 11 جم). لفقر الحديد (Iron deficiency) يرجع لاستخدام حليب البقر المبكر وقلة الأغذية المدعمة، وأنيميا خلايا المنجلية (Sickle Cell) تسبب آلام العظام الشديدة، والثلاسيميا (Thalassemia) تتطلب نقل دم دوري وتغير ملامح الوجه للسمات المغولية.",
      }
    ],
    quiz: [
      {
        id: "ped-l9-q1",
        question: "Which medication categories are strictly CONTRAINDICATED in children with ITP due to the risk of exacerbating platelet dysfunction and bleeding?",
        options: [
          "Corticosteroids",
          "Aspirin and NSAIDs",
          "Nystatin suspensions",
          "Oral iron syrups"
        ],
        correctAnswer: 1,
        explanation: "Aspirin and other nonsteroidal anti-inflammatory drugs (NSAIDs) interfere with platelet aggregation and can trigger massive bleeding episodes in thrombocytopenic children."
      }
    ]
  },
  {
    id: "ped-l10",
    title: "Endocrine Disorders in Children",
    titleAr: "اضطرابات الغدد الصماء والسكري",
    branch: "El Tor",
    program: "Nursing Program",
    date: "14/5/2026",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l10-s1",
        slideNumber: 1,
        title: "Diabetes Mellitus in Pediatrics",
        content: [
          "Type 1 DM: Absolute insulin deficiency due to autoimmune destruction of pancreatic beta cells (most common pediatric type).",
          "Classic Symptoms (The 3 Ps):",
          "- Polyuria: Excessive urination (often causing sudden bedwetting enuresis at night).",
          "- Polydipsia: Excessive thirst.",
          "- Polyphagia: Excessive hunger with continuous weight loss.",
          "High risk complication: Diabetic Ketoacidosis (DKA) - emergency presenting with Kussmaul respirations (deep rapid breathing), fruity breath odor, abdominal pain, high ketones in urine."
        ],
        explanation: "السكري والنوع الأول (Type 1 DM): غياب مطلق للأنسولين لتدمر خلايا بيتا بالبنكرياس. تظهر الأعراض الكلاسيكية الثلاثة: كثرة المشي للبول (مسبباً التبول اللاإرادي)، والطلب المفرط للماء والجوع المستمر مع نقص الوزن. خطورة الغيبوبة الكيتونية DKA تسبب تنفس كوسماول السريع ورائحة الفم الشبيهة بالفواكه الفاسدة.",
      },
      {
        id: "ped-l10-s2",
        slideNumber: 2,
        title: "Congenital Hypothyroidism (CH)",
        content: [
          "Congenital Hypothyroidism (CH): Inadequate thyroid hormone production in newborn.",
          "Why it is crucial? Thyroid hormones are absolutely mandatory for newborn brain development. If untreated, causes severe irreversible intellectual disability (Cretinism).",
          "Signs: Prolonged neonatal jaundice, hoarse cry, large protruding tongue, umbilical hernia, thick dry skin, constipation.",
          "Management: Mandatory state neonatal screening (heel prick) at 3-7 days. Daily crushed Levothyroxine (never mix with soy/iron formulas as they inhibit absorption)."
        ],
        explanation: "كسل الغدة الدرقية الخلقي (CH): غياب هرمون الغدة الدرقية الضروري لنمو خلايا الدماغ للمولود. تأخر علاجه يسبب تخلفاً عقلياً لا رجعة فيه (Cretinism). يظهر بشكل لسان كبير بارز، بكاء مبحوح، فتق سري، جفاف جلد وإمساك، ويفحص بنقطة كعب القدم (Heel prick) الإجبارية.",
      }
    ],
    quiz: [
      {
        id: "ped-l10-q1",
        question: "When administering Levothyroxine to an infant with Congenital Hypothyroidism, which fluid should the drug NOT be mixed with because it blocks absorption?",
        options: [
          "Plain clean sterile water",
          "Soy-based formula or iron formulas",
          "Express mother breast milk",
          "Normal Saline formula"
        ],
        correctAnswer: 1,
        explanation: "Soy-protein formulas, iron supplements, and calcium block the gastrointestinal absorption of thyroid hormone (Levothyroxine) in babies."
      }
    ]
  },
  {
    id: "ped-l11",
    title: "Pediatric Trauma & Emergency Care",
    titleAr: "طوارئ وإصابات الأطفال",
    branch: "El Tor",
    program: "Nursing Program",
    date: "19/5/2026",
    professor: "Dr. Shimaa Badawy",
    slides: [
      {
        id: "ped-l11-s1",
        slideNumber: 1,
        title: "Pediatric Trauma & The Triad of Death",
        content: [
          "Trauma: Leading cause of death in children older than 1 year worldwide.",
          "The Triad of Death: Represents the lethal physiological feedback loop in trauma:",
          "1. Hypothermia: Core temperature < 35°C (slows blood clotting cascade).",
          "2. Acidosis: Lactic acid accum from hypoperfusion (impairs heart function).",
          "3. Coagulopathy: Blood's inability to clot properly (fuels bleeding).",
          "Nursing Prevention of Triad: Actively warm the child (covered heads, dry sheets, warm fluids), check perfusion early, restrict cold IV solutions."
        ],
        explanation: "طوارئ وإصابات الأطفال وثلاثي الموت: يعتبر الرض والتصادم المسبب الأول لوفاة الأطفال فوق سن السنة. ثلاثي الموت القاتل (Triad of Death) يتكون من: 1. انخفاض الحرارة (< 35 درجة)، 2. حموضة الدم (Acidosis)، 3. فشل تجلط الدم (Coagulopathy). يلتزم الممرض بتدفئة المصاب جيداً لمنع النزيف المميت.",
      },
      {
        id: "ped-l11-s2",
        slideNumber: 2,
        title: "The ABCDE Primary Assessment",
        content: [
          "The golden pathway of pediatric trauma assessment:",
          "A - Airway with cervical spine stabilization (Check patency, clear secretions).",
          "B - Breathing (Assess respiratory effort, chest rise, oxygen saturation).",
          "C - Circulation (Check pulses, refill time, skin temp. Establish multi-site IV or IO line).",
          "D - Disability (Evaluate neurological status using GCS or AVPU scale).",
          "E - Exposure / Environment (Fully expose to assess injuries; cover immediately to prevent heat loss)."
        ],
        explanation: "التقييم الأولي السريع ABCDE: التقييم التمريضي الأكاديمي الحرج لإنقاذ المصابين: A مجرى الهواء والرقبة، B التنفس الفعال، C الدورة الدموية وتدفق الشرايين والخطوط الوريدية أو العظمية IO، D الإعاقة العصبية بمقياس كوما GCS، E كشف الجسم والجروح مع تدفئة المريض الفورية.",
      }
    ],
    quiz: [
      {
        id: "ped-l11-q1",
        question: "Which three physiological conditions constitute the highly dangerous 'Triad of Death' in pediatric trauma cases?",
        options: [
          "Vomiting, diarrhea, and fever",
          "Hypothermia, Acidosis, and Coagulopathy",
          "Hypertension, bradypnea, and stupor",
          "Crying, tachycardia, and seizure"
        ],
        correctAnswer: 1,
        explanation: "The Triad of Death (Hypothermia, Metabolic Acidosis, and Coagulopathy / clotting failure) is a cascade in trauma that must be aggressively prevented and reversed."
      }
    ]
  }
];
