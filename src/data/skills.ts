import { Lecture } from "../types";

export const skillsLectures: Lecture[] = [
  {
    id: "ski-l1",
    title: "Brainstorming Method",
    titleAr: "طريقة عصف الذهن",
    branch: "El-Tor",
    program: "Nursing",
    date: "7/4/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l1-s1",
        slideNumber: 1,
        title: "Introduction to Brainstorming",
        content: [
          "College of Nursing, Nursing Program",
          "Lecture topic: Brainstorming Method in Nursing Education",
          "Lecturer: Dr. Rania Ezzat"
        ],
        explanation: "Introduction to brainstorming: an interactive creativity technique used to unlock group problem-solving capabilities of nursing students.",
      },
      {
        id: "ski-l1-s2",
        slideNumber: 2,
        title: "Session Objectives",
        content: [
          "Describe purposes, rules, and stages of brainstorming.",
          "Differentiate between individual and group techniques.",
          "Identify advantages and disadvantages in nursing environments."
        ],
        explanation: "أهداف الفصل: فهم أغراض وتقنيات وقواعد العصف الذهني، والمقارنات الضرورية لتطبيقه في البيئة التعليمية والسريرية لتطوير الفكر الإبداعي للتمريض.",
      },
      {
        id: "ski-l1-s3",
        slideNumber: 3,
        title: "Definition of Brainstorming",
        content: [
          "Brainstorming is a group creativity technique designed to generate a large number of ideas for solving problems.",
          "Requires intensive, freewheeling discussion.",
          "Encourages members to think aloud and spontaneously contribute creative ideas."
        ],
        explanation: "مفهوم عصف الذهن: أسلوب جماعي تفاعلي صمم لجمع كم هائل من الحلول والأفكار الإبداعية دون فرض قيود مسبقة لضمان حرية الفكر السريري وحل مشاكل المرضى بصورة مبتكرة.",
      },
      {
        id: "ski-l1-s4",
        slideNumber: 4,
        title: "The Core Rules of Brainstorming",
        content: [
          "Zero Criticism: Defer judgment. No criticisms or compliments are allowed during the generation phase.",
          "Quantity Over Quality: Focus on generating a high volume of ideas first.",
          "Build and Combine: Use others' ideas as building blocks (hitchhiking).",
          "Visible Recording: Write all ideas down exactly as presented so that everyone can see them."
        ],
        explanation: "القواعد الذهبية: تأجيل النقد تماماً لمنع إحراج الطلاب، استهداف الكم الضخم للحلول في البداية، البناء على أفكار الزملاء، وتدوين كافة المقترحات لإبقائها مرئية للجميع.",
      }
    ],
    quiz: [
      {
        id: "ski-l1-q1",
        question: "During a brainstorming session, why is criticism strictly prohibited in the early stages?",
        options: [
          "It takes too much time.",
          "It discourages participants and closes creative output.",
          "It focuses on quality over quantity.",
          "It requires extra material resources."
        ],
        correctAnswer: 1,
        explanation: "Criticism makes participants self-conscious, which closes down creative thinking and prevents spontaneous idea generation."
      }
    ]
  },
  {
    id: "ski-l2",
    title: "Electronic Learning (E-Learning)",
    titleAr: "التعلم الإلكتروني",
    branch: "El-Tor",
    program: "Nursing",
    date: "7/4/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l2-s1",
        slideNumber: 1,
        title: "E-Learning Definition",
        content: [
          "E-Learning: defined as a way to teach using indicators of modern communication.",
          "Uses computers, networks, and internet portals.",
          "Delivers information fast, flexibly, and cost-effectively."
        ],
        explanation: "التعليم الإلكتروني: توظيف الحواسب والشبكات الرقمية وبوابات الإنترنت لتقديم وتفعيل رعاية وتعليم تمريضي عالي القيمة ومنخفض التكلفة ومرن في أي وقت وأي مكان.",
      },
      {
        id: "ski-l2-s2",
        slideNumber: 2,
        title: "Traditional vs. E-Learning approaches",
        content: [
          "Traditional: Physical classroom, limited size, PowerPoint or textbook materials, standard single learning path.",
          "E-Learning: Unlimited virtual environment, multimedia details, digital libraries, and personalized learning path/pace."
        ],
        explanation: "المقارنات: الفصول الجغرافية التقليدية تعتمد التواجد المتزامن ومعدل تعلم موحد، بينما التعليم الرقمي مرن في الوقت والمكان وشخصي جداً للمتعلم.",
      }
    ],
    quiz: [
      {
        id: "ski-l2-q1",
        question: "What is a main advantage of E-Learning over traditional classrooms?",
        options: [
          "Provides immediate face-to-face social feedback.",
          "Allows learners to define their own pace and study anywhere, anytime.",
          "Requires no digital infrastructure.",
          "Relies strictly on printed textbooks."
        ],
        correctAnswer: 1,
        explanation: "E-Learning offers immense flexibility, allowing personalized learning paths where the pace is determined by the learner's needs."
      }
    ]
  },
  {
    id: "ski-l3",
    title: "Domains of Bloom's Taxonomy",
    titleAr: "تصنيف مجالات بلوم التعليمية",
    branch: "El-Tor",
    program: "Nursing",
    date: "7/4/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l3-s1",
        slideNumber: 1,
        title: "Three Domains of Human Learning",
        content: [
          "Cognitive domain: The 'thinking' domain (knowledge-based).",
          "Affective domain: The 'feeling' domain (attitudinal-based).",
          "Psychomotor domain: The 'doing' domain (skills-based).",
          "Each domain features hierarchical tasks progressing from simple to complex."
        ],
        explanation: "تصنيفات الأهداف لبلوم (1956): تنقسم لثلاثة محاور تمريضية بالغة الأهمية: الإدراكي (المعرفة والمفاهيم)، الوجداني (الاتجاهات والسلوك المهني)، والحركي المستند على المهارات والإتقان اليدوي.",
      },
      {
        id: "ski-l3-s2",
        slideNumber: 2,
        title: "Writing Measurable Student Objectives",
        content: [
          "Always select a measurable action verb (avoid non-measurable verbs like 'know' or 'understand').",
          "1. Identify necessary level.",
          "2. Select an active verb.",
          "3. Clear context.",
          "4. Check/Audit."
        ],
        explanation: "صياغة الأهداف السلوكية: يجب استخدام أفعال سلوكية قابلة للقياس مثل (Define, Perform, Measure) وتفادي الأفعال الغامضة مثل (understand) لضمان دقة التقييم.",
      }
    ],
    quiz: [
      {
        id: "ski-l3-q1",
        question: "Which of Bloom's domains corresponds to the 'doing' or manual skill-based capabilities of a nurse?",
        options: [
          "Cognitive",
          "Affective",
          "Psychomotor",
          "Socialization"
        ],
        correctAnswer: 2,
        explanation: "The Psychomotor domain focuses on physical coordination, manual dexterity, and mechanical motor skills (doing things)."
      }
    ]
  },
  {
    id: "ski-l4",
    title: "Assessment and Evaluation",
    titleAr: "التقييم والتقويم في التمريض",
    branch: "El-Tor",
    program: "Nursing",
    date: "12/5/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l4-s1",
        slideNumber: 1,
        title: "Introduction to Evaluation",
        content: [
          "Evaluation and Assessment in Nursing education.",
          "Understand the baseline capabilities of students.",
          "Support constructive development of technical skills."
        ],
        explanation: "التقييم والتقويم: يمثل العمود الفقري للعملية التعليمية للتأكد من مدى استيعاب الطلاب ومطابقة أدائهم السريري للمعايير المطلوبة.",
      },
      {
        id: "ski-l4-s2",
        slideNumber: 2,
        title: "Difference Between Assessment & Evaluation",
        content: [
          "Assessment: Ongoing process, diagnostic, focus on feedback and improvement. It is process-oriented.",
          "Evaluation: Final judgment, graded, focus on product and final achievement. It is product-oriented."
        ],
        explanation: "الفرق بين التقييم والتقويم: التقييم (Assessment) عملية مستمرة تهدف لتشخيص نقاط القوة والضعف وتقديم التغذية الراجعة، أما التقويم (Evaluation) فهو نهائي ويركز على رصد الدرجات وإصدار الأحكام.",
      },
      {
        id: "ski-l4-s3",
        slideNumber: 3,
        title: "Types of Evaluation",
        content: [
          "Diagnostic: Conducted before instruction to test baseline knowledge.",
          "Formative: Conducted during learning to guide instruction and feedback.",
          "Summative: Conducted at the end of instruction to measure mastery and assign grades."
        ],
        explanation: "أنواع التقييم: 1. التشخيصي (قبل الشرح لمعرفة الأساس الفكري للطلاب)، 2. التكويني/البنائي (أثناء التعليم للتوجيه والتعديل)، 3. النهائي/الإجمالي (نهاية المقرر لتوزيع الدرجات).",
      }
    ],
    quiz: [
      {
        id: "ski-l4-q1",
        question: "Which type of evaluation is conducted DURING instruction to monitor student progress and provide ongoing feedback?",
        options: [
          "Diagnostic",
          "Formative",
          "Summative",
          "Standardized"
        ],
        correctAnswer: 1,
        explanation: "Formative evaluation is ongoing during instruction to monitor learning and provide direct feedback to improve both learning and instruction."
      }
    ]
  },
  {
    id: "ski-l5",
    title: "Goals and Objectives: ABCD Model",
    titleAr: "الأهداف التعليمية ونموذج ABCD",
    branch: "El-Tor",
    program: "Nursing",
    date: "14/4/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l5-s1",
        slideNumber: 1,
        title: "Writing Clear Objectives",
        content: [
          "Educational Objectives must be behavioral and measurable.",
          "They describe what the student will be able to do at the end of the lesson.",
          "Goals are broad, whereas Objectives are specific and measurable."
        ],
        explanation: "الأهداف السلوكية: تصف بدقة المهارات والمعارف المتوقع من الطالب اكتسابها بنهاية المحاضرة بطريقة قابلة للقياس السريري والملاحظة المباشرة.",
      },
      {
        id: "ski-l5-s2",
        slideNumber: 2,
        title: "The ABCD Model",
        content: [
          "A - Audience: Who is the learner? (e.g., 'The nursing student...')",
          "B - Behavior: What visible action will they perform? (e.g., '...will measure the blood pressure...')",
          "C - Condition: Under what circumstances? (e.g., '...using a manual sphygmomanometer...')",
          "D - Degree: To what standard/accuracy? (e.g., '...within ±2 mmHg accuracy.')"
        ],
        explanation: "نموذج ABCD لصياغة الأهداف: A تعني المستمع أو الطالب (Audience)، B السلوك المطلوب القابل للملاحظة (Behavior)، C الشروط والظروف السريرية (Condition)، D درجة الإتقان والنسبة المطلوبة للنجاح (Degree).",
      }
    ],
    quiz: [
      {
        id: "ski-l5-q1",
        question: "In the ABCD model of writing behavioral objectives, what does the letter 'C' represent?",
        options: [
          "Cognitive domain",
          "Condition or circumstances of the task",
          "Criteria for evaluation",
          "Client characteristics"
        ],
        correctAnswer: 1,
        explanation: "The 'C' stands for Condition, defining the terms, materials, or environment under which the behavior is demonstrated."
      }
    ]
  },
  {
    id: "ski-l6",
    title: "Introduction to Teaching & Learning",
    titleAr: "مقدمة في التعليم والتعلم",
    branch: "El-Tor",
    program: "Nursing",
    date: "24/3/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l6-s1",
        slideNumber: 1,
        title: "Defining Teaching and Learning",
        content: [
          "Teaching: A systematic interactive process designed to produce learning.",
          "Learning: A relatively permanent change in behavior, knowledge, or capability resulting from experience.",
          "The process requires active alignment between objectives, methods, and evaluation."
        ],
        explanation: "مفهوم التعليم والتعلم: التدريس عملية تفاعلية لتيسير المعرفة، والتعلم هو التغير شبه الدائم في السلوك والخبرات الناتجة عن الممارسة والتدريب السريري.",
      },
      {
        id: "ski-l6-s2",
        slideNumber: 2,
        title: "Andragogy vs. Pedagogy",
        content: [
          "Pedagogy: Science of teaching child learners (the teacher has full authority).",
          "Andragogy: Science of teaching adult learners (nursing students).",
          "Characteristics of Adult Learners:",
          "- Self-directed and autonomous.",
          "- Rely on prior life experiences.",
          "- Goal-oriented and demand clinical relevance.",
          "- Internal motivation to learn."
        ],
        explanation: "الأندراغوجيا والبايداغوجيا: البايداغوجيا هي تعليم الأطفال، بينما الأندراغوجيا (Andragogy) هي علم تعليم الكبار (كطلاب التمريض)، والذين يميلون للتوجيه الذاتي وربط التعليم بالخبرات السريرية التطبيقية.",
      }
    ],
    quiz: [
      {
        id: "ski-l6-q1",
        question: "Which term refers specifically to the science and art of helping adults (e.g. university nursing students) learn?",
        options: [
          "Pedagogy",
          "Andragogy",
          "Sociology",
          "Epistemology"
        ],
        correctAnswer: 1,
        explanation: "Andragogy is the study and methodology of adult education, emphasizing self-direction and practical relevance, contrary to pedagogy which centers on children."
      }
    ]
  },
  {
    id: "ski-l7",
    title: "Problem-Based Learning (PBL)",
    titleAr: "التعلم القائم على حل المشكلات",
    branch: "El-Tor",
    program: "Nursing",
    date: "28/4/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l7-s1",
        slideNumber: 1,
        title: "What is PBL?",
        content: [
          "Student-centered learning approach.",
          "Students learn about a subject through the experience of solving an open-ended/unstructured problem.",
          "Fosters critical thinking, clinical reasoning, and self-directed study habits."
        ],
        explanation: "التعلم المبني على حل المشكلات (PBL): استراتيجية متمركزة حول الطالب حيث يبحث المشكلة المعقدة غير المنظمة بصورة مصغرة لبناء مهارات التفكير النقدي وصنع القرار السريري.",
      },
      {
        id: "ski-l7-s2",
        slideNumber: 2,
        title: "The 7 Steps of PBL Tutorial",
        content: [
          "1. Clarify unfamiliar terms.",
          "2. Define the clinical problem.",
          "3. Brainstorm ideas and potential hypotheses.",
          "4. Structuring and classification of generated solutions.",
          "5. Formulate clear learning objectives.",
          "6. Self-study and search for evidence.",
          "7. Synthesize findings and report back."
        ],
        explanation: "الخطوات السبع لتعليم PBL: تبدأ بتوضيح المصطلحات الصعبة، تعريف المشكلة، العصف الذهني للحلول، التبويب والتصنيف، تحديد الأهداف الدراسية، التعلم الفردي، ثم مناقشة النتائج وصياغتها وتطبيقها.",
      },
      {
        id: "ski-l7-s3",
        slideNumber: 3,
        title: "The Tutor's Role in PBL",
        content: [
          "The tutor acts as a Facilitator and guide, NOT an information-giver.",
          "Asks Socratic questions to stimulate clinical thinking.",
          "Monitors group dynamics and ensures all students participate."
        ],
        explanation: "دور الميسر (Tutor): لا يقوم الموجه بحشو رؤوس الطلاب بالمعلومات الشفهية، بل يعمل كميسر وموجه سقراطي يطرح الأسئلة ليقود عقول الطلاب وملاحظة تفاعلهم الجماعي.",
      }
    ],
    quiz: [
      {
        id: "ski-l7-q1",
        question: "In a PBL tutorial session, what is the primary role of the tutor?",
        options: [
          "To lecture and supply all clinical answers directly.",
          "To act as an inactive observer with no input.",
          "To act as a facilitator and guide using Socratic questioning.",
          "To grade students after every sentence."
        ],
        correctAnswer: 2,
        explanation: "The tutor is a facilitator of learning rather than a provider of answers, guiding groups through active inquiry and clinical reasoning."
      }
    ]
  },
  {
    id: "ski-l8",
    title: "Simulation in Nursing Education",
    titleAr: "المحاكاة في التعليم التمريضي",
    branch: "El-Tor",
    program: "Nursing",
    date: "5/5/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l8-s1",
        slideNumber: 1,
        title: "Introduction to Simulation",
        content: [
          "Simulation is an active learning technique replicating real clinical scenarios.",
          "Allows students to practice clinical skills in a safe environment without risk of harm to real patients.",
          "Supports repetitive practice until achieving technical mastery."
        ],
        explanation: "المحاكاة السريرية: استخدام أدوات وسيناريوهات تحاكي الواقع الطبي بدقة لتوفير بيئة تعليمية آمنة للممارسة والخطأ والتعلم والتدريب المستمر دون إيذاء المريض الحقيقي.",
      },
      {
        id: "ski-l8-s2",
        slideNumber: 2,
        title: "Levels of Fidelity",
        content: [
          "Low Fidelity: Static task-trainers used to practice specific physical skills (e.g., IV arm arm, injection pads).",
          "Medium Fidelity: Intermediary manikins that reproduce sounds (breath, heart) but lack dynamic physiological responses.",
          "High Fidelity: High-tech computerized manikins with dynamic pupillary reflexes, breathing patterns, chest rise, and arterial pulsations matching active drug administrations."
        ],
        explanation: "مستويات مطابقة الواقع (Fidelity): ومحاكاة منخفضة (مثل ذراع لغرس الإبر)، ومتوسطة (جسم ثابت يصدر أصواتاً)، وعالية الدقة (High fidelity) دمية مبرمجة تماماً تتنفس وتتغير نبضاتها وغرائزها تبعا للأدوية والتدخل الحركي.",
      },
      {
        id: "ski-l8-s3",
        slideNumber: 3,
        title: "The Three Phases of Simulation",
        content: [
          "1. Prebriefing / Briefing: Discuss clinical goals, introduce the simulation environment (manikin, drugs), and state the rules.",
          "2. Active Scenario Phase: Students manage the simulated patient based on the clinical events.",
          "3. Debriefing: Highly critical final phase. Led by a facilitator to analyze performance, support self-reflection, and cement clinical principles."
        ],
        explanation: "المراحل الثلاث لجلسة المحاكاة: 1. التحضير المسبق (Prebriefing)، 2. السيناريو النشط (Active Scenario)، 3. التقييم والمناقشة البناءة (Debriefing) وتعتبر المرحلة الأكثر أهمية ومحورية لترسيخ المفاهيم وتحليل أداء الطلاب.",
      }
    ],
    quiz: [
      {
        id: "ski-l8-q1",
        question: "Which phase of a simulation session is considered the most critical for student learning, self-reflection, and integrating clinical principles?",
        options: [
          "Active Scenario Phase",
          "Debriefing Phase",
          "Prebriefing Setup",
          "Equipment calibration"
        ],
        correctAnswer: 1,
        explanation: "The Debriefing phase is the most critical learning step, where students reflect on actions, resolve clinical misconceptions, and conceptualize real-world transference."
      }
    ]
  },
  {
    id: "ski-l9",
    title: "Traditional Methods of Teaching",
    titleAr: "طرق التدريس التقليدية والحديثة",
    branch: "El-Tor",
    program: "Nursing",
    date: "10/3/2026",
    professor: "Dr. Rania Ezzat",
    slides: [
      {
        id: "ski-l9-s1",
        slideNumber: 1,
        title: "Traditional Instructional Tactics",
        content: [
          "Focus on conventional, teacher-centered methodologies.",
          "Understand the Lecture Method and the Questioning Technique.",
          "Evaluate advantages and limitations in modern university classes."
        ],
        explanation: "الأساليب التقليدية: دراسة الطرق المعتادة المتمركزة حول المعلم مثل المحاضرة الإلقائية وتوظيف صياغة الأسئلة لتنشيط الحضور العقلي للطلاب.",
      },
      {
        id: "ski-l9-s2",
        slideNumber: 2,
        title: "The Lecture Method",
        content: [
          "Definition: Form of oral presentation of information designed to instruct a large group.",
          "Advantages:",
          "- Highly cost-effective for large academic classes.",
          "- Clarifies difficult textbook terms quickly.",
          "- Helps lay out a general outline of the syllabus.",
          "Disadvantages: Fosters passive learning, poor retention of long content, and lacks individual personalization."
        ],
        explanation: "طريقة المحاضرة الإلقائية: عرض شفهي منطوق للمعلومات أمام مجموعة كبيرة، وتتميز بقدرتها التغطية السريعة والفعالة للمناهج وتوفير التكاليف، بينما يعاب عليها سلبية الطلاب وعدم توفير التقييم الفردي.",
      }
    ],
    quiz: [
      {
        id: "ski-l9-q1",
        question: "What is a major limitation of the traditional lecture method in professional nursing education?",
        options: [
          "It is extremely expensive to host.",
          "It is inappropriate for presenting basic outlines.",
          "It encourages a passive role for the learner rather than active involvement.",
          "It requires specialized computer programming."
        ],
        correctAnswer: 2,
        explanation: "A primary downside of lecturing is that it places learners in a passive receiving role, which is sub-optimal for clinical skill construction and deep conceptual retention."
      }
    ]
  }
];
