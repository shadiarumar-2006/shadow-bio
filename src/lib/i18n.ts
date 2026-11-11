export type Language = "en" | "ar" | "ku";

export const LANGUAGES: { code: Language; label: string; nativeName: string; dir: "ltr" | "rtl"; flag: string }[] = [
  { code: "en", label: "English", nativeName: "English", dir: "ltr", flag: "🇬🇧" },
  { code: "ar", label: "Arabic", nativeName: "العربية", dir: "rtl", flag: "🇮🇶" },
  { code: "ku", label: "Kurdish", nativeName: "کوردی", dir: "rtl", flag: "☀" },
];

export const isRTL = (lang: Language) => lang !== "en";

export type HormoneGroup = {
  id: string;
  name: string;
  icon: string;
  hormones: {
    name: string;
    source: string;
    function: string;
    labTest: string;
    benefits: string;
    excess: string;
    deficiency: string;
    treatment: string;
  }[];
};

export type Translation = {
  meta: { siteName: string; tagline: string };
  nav: { home: string; hormones: string; labs: string; sexHormones: string; assistant: string; contact: string };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stats: { label: string; value: string }[];
  };
  sections: {
    overview: { title: string; subtitle: string };
    hormones: { title: string; subtitle: string };
    labs: { title: string; subtitle: string };
    sexHormones: { title: string; subtitle: string };
    assistant: { title: string; subtitle: string };
    contact: { title: string; subtitle: string };
  };
  overview: {
    title: string;
    description: string;
    glandLabels: { hypothalamus: string; pituitary: string; thyroid: string; parathyroid: string; adrenal: string; pancreas: string; ovaries: string; testes: string; pineal: string };
  };
  hormoneGroups: HormoneGroup[];
  hormoneFields: {
    source: string;
    function: string;
    labTest: string;
    benefits: string;
    excess: string;
    deficiency: string;
    treatment: string;
    learnMore: string;
  };
  labMethods: { name: string; description: string; use: string }[];
  sexHormonesContent: {
    male: { title: string; symbol: string; primary: string; hormones: string[]; role: string };
    female: { title: string; symbol: string; primary: string; hormones: string[]; role: string };
    cycleTitle: string;
    cycleDescription: string;
  };
  chat: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    thinking: string;
    welcome: string;
    disclaimer: string;
    suggestions: string[];
    error: string;
    clear: string;
    role: string;
  };
  footer: {
    about: string;
    aboutText: string;
    quickLinks: string;
    contact: string;
    address: string;
    addressValue: string;
    phone: string;
    email: string;
    rights: string;
    disclaimer: string;
  };
};

export const translations: Record<Language, Translation> = {
  /* ============================ ENGLISH ============================ */
  en: {
    meta: { siteName: "Shadow Bio", tagline: "Endocrinology Department" },
    nav: { home: "Home", hormones: "Hormones", labs: "Lab Analysis", sexHormones: "Sex Hormones", assistant: "AI Assistant", contact: "Contact" },
    hero: {
      badge: "Endocrinology Department",
      title1: "Shadow Bio",
      title2: "The Science of Hormones & Glands",
      subtitle:
        "A multilingual platform dedicated to endocrinology — explore every hormone in the human body, learn how it is produced and measured in the lab, understand its functions, disorders, and treatments, and chat with an AI assistant specialized in hormonal health.",
      cta1: "Ask the AI Assistant",
      cta2: "Explore Hormones",
      stats: [
        { label: "Hormones Covered", value: "20+" },
        { label: "Glands", value: "9" },
        { label: "Languages", value: "3" },
      ],
    },
    sections: {
      overview: { title: "Endocrine System Overview", subtitle: "The network of glands that produce and secrete hormones into the bloodstream" },
      hormones: { title: "Hormone Encyclopedia", subtitle: "Click any hormone card to reveal its function, lab detection, benefits, disorders, and treatment" },
      labs: { title: "Laboratory Analysis", subtitle: "How hormones are detected, measured, and analyzed in modern clinical laboratories" },
      sexHormones: { title: "Sex Hormones & Reproductive System", subtitle: "The hormonal differences between male and female reproductive biology" },
      assistant: { title: "AI Endocrinology Assistant", subtitle: "Ask any deep question about hormones, glands, lab tests, or treatments" },
      contact: { title: "Contact Us", subtitle: "Reach the Shadow Bio Endocrinology team" },
    },
    overview: {
      title: "Endocrine Glands Map",
      description:
        "The endocrine system is a network of glands that produce and release hormones directly into the bloodstream. These chemical messengers travel throughout the body to regulate metabolism, growth, reproduction, mood, and countless other functions.",
      glandLabels: {
        hypothalamus: "Hypothalamus",
        pituitary: "Pituitary",
        thyroid: "Thyroid",
        parathyroid: "Parathyroid",
        adrenal: "Adrenal",
        pancreas: "Pancreas",
        ovaries: "Ovaries",
        testes: "Testes",
        pineal: "Pineal",
      },
    },
    hormoneGroups: [
      {
        id: "pituitary",
        name: "Pituitary & Hypothalamus",
        icon: "brain",
        hormones: [
          {
            name: "GH — Growth Hormone",
            source: "Anterior pituitary",
            function: "Stimulates growth of bones, muscles, and tissues; regulates metabolism and cell regeneration.",
            labTest: "Serum GH (fasting), IGF-1 (somatomedin C), GH suppression test with glucose, GH stimulation test with arginine or insulin.",
            benefits: "Normal levels ensure proper childhood growth, muscle mass maintenance, fat metabolism, and tissue repair.",
            excess: "Gigantism (children) or acromegaly (adults) — enlarged hands, feet, facial features; diabetes; cardiovascular disease.",
            deficiency: "Pituitary dwarfism in children; adult GH deficiency causes fatigue, loss of muscle mass, abdominal fat, depression.",
            treatment: "Recombinant GH (somatropin) for deficiency; somatostatin analogues (octreotide), surgery, or radiotherapy for excess.",
          },
          {
            name: "TSH — Thyroid Stimulating Hormone",
            source: "Anterior pituitary",
            function: "Stimulates the thyroid gland to produce T3 and T4 hormones, regulating metabolic rate.",
            labTest: "Serum TSH (most sensitive test), free T4, free T3. TRH stimulation test in rare cases.",
            benefits: "Maintains normal metabolic rate, energy production, body temperature, and weight.",
            excess: "Usually secondary hypothyroidism (pituitary cause) — fatigue, weight gain, cold intolerance.",
            deficiency: "Secondary hyperthyroidism — weight loss, tachycardia, heat intolerance (rare).",
            treatment: "Treat underlying pituitary disorder; levothyroxine replacement if hypothyroid.",
          },
          {
            name: "ACTH — Adrenocorticotropic Hormone",
            source: "Anterior pituitary",
            function: "Stimulates adrenal cortex to release cortisol and androgens, especially during stress.",
            labTest: "Serum ACTH (8 AM), 24-hour urine cortisol, dexamethasone suppression test, CRH stimulation test.",
            benefits: "Supports stress response, blood pressure, immune regulation, and glucose metabolism.",
            excess: "Cushing's disease — central obesity, moon face, hypertension, diabetes, skin striae.",
            deficiency: "Secondary adrenal insufficiency — fatigue, hypotension, weight loss, hypoglycemia.",
            treatment: "Surgery (transsphenoidal adenomectomy) for pituitary tumors; hydrocortisone replacement for deficiency.",
          },
          {
            name: "Prolactin (PRL)",
            source: "Anterior pituitary",
            function: "Stimulates milk production (lactation) and plays a role in reproductive function.",
            labTest: "Serum prolactin (fasting, morning). Macroprolactin test if levels are very high. MRI to rule out prolactinoma.",
            benefits: "Enables breastfeeding; modulates immune system and maternal behavior.",
            excess: "Hyperprolactinemia — galactorrhea, irregular periods, infertility, low libido; often from prolactinoma.",
            deficiency: "Inability to lactate postpartum (Sheehan's syndrome).",
            treatment: "Dopamine agonists (cabergoline, bromocriptine); surgery for large adenomas.",
          },
          {
            name: "ADH — Antidiuretic Hormone (Vasopressin)",
            source: "Posterior pituitary",
            function: "Promotes water reabsorption in kidneys, concentrating urine and regulating fluid balance.",
            labTest: "Serum and urine osmolality, water deprivation test, desmopressin challenge test.",
            benefits: "Maintains body water balance, blood pressure, and serum sodium levels.",
            excess: "SIADH (Syndrome of Inappropriate ADH) — hyponatremia, confusion, seizures.",
            deficiency: "Diabetes insipidus — excessive urination (polyuria), extreme thirst (polydipsia).",
            treatment: "Fluid restriction for SIADH; desmopressin (DDAVP) for diabetes insipidus.",
          },
        ],
      },
      {
        id: "thyroid",
        name: "Thyroid & Parathyroid",
        icon: "butterfly",
        hormones: [
          {
            name: "T3 — Triiodothyronine",
            source: "Thyroid gland (follicular cells)",
            function: "The active thyroid hormone — regulates metabolic rate, heart function, body temperature, and brain development.",
            labTest: "Free T3 (FT3), total T3, reverse T3 (rT3) in special cases.",
            benefits: "Drives cellular energy production, supports brain development in infants, maintains healthy weight and mood.",
            excess: "Hyperthyroidism — weight loss, tachycardia, anxiety, tremor, heat intolerance (e.g., Graves' disease).",
            deficiency: "Hypothyroidism — fatigue, weight gain, cold intolerance, depression, dry skin.",
            treatment: "Antithyroid drugs (methimazole, PTU), radioactive iodine, or surgery for excess; liothyronine for deficiency.",
          },
          {
            name: "T4 — Thyroxine",
            source: "Thyroid gland (follicular cells)",
            function: "The main thyroid hormone secreted; converted to active T3 in peripheral tissues. Regulates metabolism.",
            labTest: "Free T4 (FT4), total T4 (TT4). TSH together for full thyroid panel.",
            benefits: "Sustains metabolic rate, protein synthesis, bone growth, and nervous system maturation.",
            excess: "Thyrotoxicosis — palpitations, weight loss, anxiety, osteoporosis risk over time.",
            deficiency: "Hypothyroidism (most common: Hashimoto's thyroiditis) — fatigue, bradycardia, weight gain.",
            treatment: "Levothyroxine (T4 replacement) for hypothyroidism; thionamides/Rai/surgery for hyperthyroidism.",
          },
          {
            name: "Calcitonin",
            source: "Thyroid gland (parafollicular C cells)",
            function: "Lowers blood calcium by inhibiting osteoclast bone resorption; minor role in humans.",
            labTest: "Serum calcitonin (basal and pentagastrin-stimulated); used mainly as a tumor marker for medullary thyroid carcinoma.",
            benefits: "Helps regulate calcium and phosphate balance, protects bone during rapid growth.",
            excess: "Usually indicates medullary thyroid carcinoma; rarely causes hypocalcemia.",
            deficiency: "No significant clinical effect; thyroidectomy does not cause calcium imbalance if parathyroids intact.",
            treatment: "Treat underlying cause (surgery for medullary thyroid cancer); synthetic calcitonin for Paget's disease.",
          },
          {
            name: "PTH — Parathyroid Hormone",
            source: "Parathyroid glands (4 small glands behind thyroid)",
            function: "Regulates serum calcium — increases bone resorption, kidney calcium reabsorption, and vitamin D activation.",
            labTest: "Intact PTH (with simultaneous serum calcium), serum phosphate, vitamin D (25-OH-D), 24-hour urine calcium.",
            benefits: "Maintains blood calcium within a tight range essential for nerve, muscle, and heart function.",
            excess: "Primary hyperparathyroidism (usually parathyroid adenoma) — hypercalcemia, kidney stones, osteoporosis, fatigue.",
            deficiency: "Hypoparathyroidism — hypocalcemia, muscle cramps, tetany, seizures, tingling (perioral).",
            treatment: "Parathyroidectomy for adenoma; calcium and calcitriol replacement for deficiency.",
          },
        ],
      },
      {
        id: "adrenal",
        name: "Adrenal Glands",
        icon: "triangle",
        hormones: [
          {
            name: "Cortisol",
            source: "Adrenal cortex (zona fasciculata)",
            function: "The main stress hormone — raises blood glucose, suppresses inflammation, regulates metabolism and blood pressure.",
            labTest: "Morning serum cortisol, 24-hour urine free cortisol, late-night salivary cortisol, dexamethasone suppression test.",
            benefits: "Enables stress response, maintains blood pressure, supports immune regulation and circadian rhythm.",
            excess: "Cushing's syndrome — central obesity, moon face, buffalo hump, diabetes, hypertension, skin thinning.",
            deficiency: "Addison's disease (primary adrenal insufficiency) — fatigue, hyperpigmentation, hypotension, salt craving.",
            treatment: "Hydrocortisone or prednisone replacement for deficiency; surgery, metyrapone, or ketoconazole for excess.",
          },
          {
            name: "Aldosterone",
            source: "Adrenal cortex (zona glomerulosa)",
            function: "Regulates sodium and potassium balance, blood pressure, and blood volume via the kidney.",
            labTest: "Plasma aldosterone / renin ratio (ARR), 24-hour urine aldosterone, saline suppression test.",
            benefits: "Maintains blood pressure, fluid balance, and electrolyte homeostasis.",
            excess: "Conn's syndrome (primary hyperaldosteronism) — hypertension, low potassium, muscle weakness.",
            deficiency: "Hypoaldosteronism — hyponatremia, hyperkalemia, hypotension (seen in Addison's).",
            treatment: "Spironolactone or eplerenone; adrenalectomy for aldosterone-producing adenoma.",
          },
          {
            name: "Adrenaline (Epinephrine) & Noradrenaline",
            source: "Adrenal medulla",
            function: "Catecholamines — trigger the 'fight or flight' response: increases heart rate, blood pressure, glucose release.",
            labTest: "Plasma metanephrines, 24-hour urine metanephrines and catecholamines, clonidine suppression test.",
            benefits: "Enables rapid stress response, sharpens focus, mobilizes energy reserves.",
            excess: "Pheochromocytoma — episodic severe hypertension, headache, sweating, palpitations.",
            deficiency: "Rare; can cause orthostatic hypotension in autonomic dysfunction.",
            treatment: "Surgical removal of pheochromocytoma after alpha-blockade (phenoxybenzamine).",
          },
          {
            name: "DHEA & Androgens",
            source: "Adrenal cortex (zona reticularis)",
            function: "Weak androgens converted to testosterone and estrogens; contribute to secondary sex characteristics and libido.",
            labTest: "Serum DHEA-S, androstenedione, 17-OH progesterone; used in PCOS and adrenal tumor workup.",
            benefits: "Supports libido, bone density, muscle mass; precursor to sex hormones especially in postmenopausal women.",
            excess: "Adrenal tumors or congenital adrenal hyperplasia — hirsutism, acne, virilization in females.",
            deficiency: "Adrenal insufficiency — fatigue, low libido, reduced well-being.",
            treatment: "Treat underlying cause; glucocorticoid replacement for CAH; surgery for tumors.",
          },
        ],
      },
      {
        id: "pancreas",
        name: "Pancreatic Hormones",
        icon: "droplet",
        hormones: [
          {
            name: "Insulin",
            source: "Pancreatic islets (beta cells)",
            function: "Lowers blood glucose by promoting cellular glucose uptake, glycogen synthesis, and fat storage.",
            labTest: "Fasting insulin, C-peptide, HbA1c, oral glucose tolerance test (OGTT), anti-GAD antibodies.",
            benefits: "Maintains normal blood glucose, enables energy storage, prevents hyperglycemia.",
            excess: "Hyperinsulinemia (insulinoma or early type 2 diabetes) — hypoglycemia, weight gain, insulin resistance.",
            deficiency: "Type 1 diabetes — hyperglycemia, ketoacidosis, weight loss, polyuria, polydipsia.",
            treatment: "Insulin injections (multiple types) for type 1; metformin, GLP-1 agonists, SGLT2 inhibitors for type 2.",
          },
          {
            name: "Glucagon",
            source: "Pancreatic islets (alpha cells)",
            function: "Raises blood glucose by stimulating liver glycogenolysis and gluconeogenesis; counter-regulates insulin.",
            labTest: "Fasting plasma glucagon, glucagon stimulation test; commonly measured alongside insulin.",
            benefits: "Prevents hypoglycemia, mobilizes glucose during fasting or exercise.",
            excess: "Glucagonoma — diabetes, migratory skin rash (necrolytic migratory erythema), weight loss.",
            deficiency: "Rare; can cause hypoglycemia, especially in children.",
            treatment: "Surgery for glucagonoma; somatostatin analogues for symptom control.",
          },
        ],
      },
      {
        id: "reproductive",
        name: "Reproductive Hormones",
        icon: "venus",
        hormones: [
          {
            name: "Testosterone",
            source: "Testes (Leydig cells) & adrenal cortex",
            function: "The primary male sex hormone — drives sperm production, muscle mass, bone density, libido, and deep voice.",
            labTest: "Total and free testosterone (morning), LH, FSH, SHBG; sometimes 17-OH progesterone and DHT.",
            benefits: "Maintains male fertility, muscle strength, red blood cell production, mood, and sexual function.",
            excess: "Anabolic steroid abuse or tumors — aggression, acne, baldness, prostate issues, infertility (suppresses FSH/LH).",
            deficiency: "Hypogonadism — low libido, erectile dysfunction, fatigue, depression, loss of muscle mass, osteoporosis.",
            treatment: "Testosterone replacement therapy (gel, injection, patch); treat underlying pituitary or testicular cause.",
          },
          {
            name: "Estradiol (Estrogen)",
            source: "Ovaries (granulosa cells), placenta, adipose tissue",
            function: "The main female sex hormone — regulates menstrual cycle, breast development, bone density, and cardiovascular health.",
            labTest: "Serum estradiol (E2) on specific cycle days, FSH, LH, AMH for ovarian reserve.",
            benefits: "Maintains female fertility, vaginal health, skin elasticity, bone density, and cardiovascular protection (pre-menopause).",
            excess: "Estrogen dominance — heavy periods, fibroids, breast tenderness, increased risk of breast cancer.",
            deficiency: "Menopause or premature ovarian failure — hot flashes, osteoporosis, vaginal dryness, mood swings.",
            treatment: "Hormone replacement therapy (HRT); treat underlying cause (PCOS, ovarian failure).",
          },
          {
            name: "Progesterone",
            source: "Ovary (corpus luteum), placenta during pregnancy",
            function: "Prepares the uterus for pregnancy, maintains the uterine lining, supports embryonic development.",
            labTest: "Serum progesterone (day 21 of cycle), confirms ovulation; monitored in fertility treatment.",
            benefits: "Enables pregnancy, regulates menstrual cycle, has calming effect on the brain.",
            excess: "Can cause bloating, breast tenderness, mood changes; high in pregnancy is normal.",
            deficiency: "Luteal phase defect — irregular cycles, infertility, recurrent miscarriage.",
            treatment: "Progesterone supplements (oral, vaginal) for luteal support in infertility.",
          },
          {
            name: "FSH & LH — Gonadotropins",
            source: "Anterior pituitary",
            function: "FSH stimulates follicle/sperm development; LH triggers ovulation and testosterone/estradiol production.",
            labTest: "Serum FSH, LH (day 3 of cycle for women), with estradiol/testosterone for fertility workup.",
            benefits: "Regulates reproductive cycles in females and spermatogenesis in males.",
            excess: "Primary ovarian/testicular failure — menopause, hot flashes, infertility.",
            deficiency: "Hypogonadotropic hypogonadism (Kallmann syndrome) — delayed puberty, infertility.",
            treatment: "HMG, FSH injections, hCG; pulsatile GnRH for hypothalamic causes.",
          },
          {
            name: "Melatonin",
            source: "Pineal gland",
            function: "Regulates the circadian rhythm and sleep-wake cycle; secreted in darkness.",
            labTest: "Salivary melatonin (overnight), 6-sulfatoxymelatonin in urine; rarely used clinically.",
            benefits: "Supports healthy sleep, antioxidant effects, immune modulation.",
            excess: "Excessive supplementation — daytime drowsiness, vivid dreams, headache.",
            deficiency: "Insomnia, jet lag symptoms, disrupted circadian rhythm (shift work).",
            treatment: "Melatonin supplements (0.5–5 mg), sleep hygiene, light therapy.",
          },
        ],
      },
    ],
    hormoneFields: {
      source: "Source",
      function: "Function",
      labTest: "Lab Detection & Analysis",
      benefits: "Benefits (Normal Levels)",
      excess: "Excess Disorders (Hyper)",
      deficiency: "Deficiency Disorders (Hypo)",
      treatment: "Treatment",
      learnMore: "Click card to expand details",
    },
    labMethods: [
      {
        name: "ELISA — Enzyme-Linked Immunosorbent Assay",
        description:
          "The most common method. Uses antibodies linked to enzymes to detect and quantify hormone concentration via color change.",
        use: "Used for: insulin, cortisol, prolactin, TSH, LH, FSH, estradiol, testosterone.",
      },
      {
        name: "RIA — Radioimmunoassay",
        description:
          "A classic, highly sensitive technique using radioactive-labeled hormones to compete with the patient's hormones for antibody binding.",
        use: "Used for: low-concentration hormones (T3, T4, vitamin D, aldosterone).",
      },
      {
        name: "LC-MS/MS — Liquid Chromatography–Mass Spectrometry",
        description:
          "The gold standard for accuracy. Separates hormone molecules by mass and charge; can detect multiple hormones at once.",
        use: "Used for: steroid hormones (testosterone, cortisol, aldosterone, vitamin D), especially at low levels.",
      },
      {
        name: "Chemiluminescence Immunoassay (CLIA)",
        description:
          "Modern automated method using light-emitting chemical reactions; highly sensitive and used in most hospital analyzers.",
        use: "Used for: TSH, free T4, hCG, troponin, prolactin, GH.",
      },
      {
        name: "24-Hour Urine Collection",
        description:
          "Collects all urine for 24 hours to measure total daily hormone excretion; useful for catecholamines, cortisol, and metanephrines.",
        use: "Used for: pheochromocytoma workup, Cushing's syndrome screening.",
      },
      {
        name: "Stimulation & Suppression Tests",
        description:
          "Functional tests that challenge the endocrine axis — give a stimulus (e.g. ACTH, TRH, insulin) or suppressor (dexamethasone) and measure hormone response.",
        use: "Used for: ACTH stimulation (Addison's), dexamethasone suppression (Cushing's), glucose suppression (acromegaly).",
      },
    ],
    sexHormonesContent: {
      male: {
        title: "Male Reproductive System",
        symbol: "♂",
        primary: "Primary hormone: Testosterone",
        hormones: ["Testosterone", "FSH (spermatogenesis)", "LH (Leydig cell stimulation)", "Inhibin B"],
        role:
          "The male endocrine reproductive axis centers on the hypothalamic-pituitary-testicular axis. GnRH from the hypothalamus stimulates LH and FSH from the pituitary. LH drives testosterone production from Leydig cells, while FSH supports sperm production in the seminiferous tubules. Testosterone maintains libido, muscle mass, bone density, and secondary sexual characteristics.",
      },
      female: {
        title: "Female Reproductive System",
        symbol: "♀",
        primary: "Primary hormones: Estrogen & Progesterone",
        hormones: ["Estradiol (E2)", "Progesterone", "FSH (follicle development)", "LH (ovulation trigger)", "AMH (ovarian reserve)"],
        role:
          "The female reproductive endocrine axis is the hypothalamic-pituitary-ovarian axis. It produces a cyclic monthly pattern: FSH stimulates follicle growth, estradiol peaks to trigger the LH surge, which causes ovulation. The ruptured follicle becomes the corpus luteum producing progesterone. If no pregnancy occurs, hormone levels fall and menstruation begins.",
      },
      cycleTitle: "The Menstrual Cycle",
      cycleDescription:
        "A 28-day (average) cycle divided into follicular phase (estradiol rises), ovulation (LH surge ~day 14), and luteal phase (progesterone dominates). Hormone imbalances cause PCOS, amenorrhea, and infertility.",
    },
    chat: {
      title: "Shadow Bio Endocrinology Assistant",
      subtitle: "AI-powered · Specialized in hormones & glands",
      placeholder: "Ask about any hormone, gland, lab test, or treatment...",
      send: "Send",
      thinking: "Thinking...",
      welcome:
        "Hello! I am the Shadow Bio Endocrinology Assistant. I can answer detailed questions about any hormone (insulin, cortisol, thyroid hormones, sex hormones), endocrine glands (pituitary, thyroid, adrenal, pancreas, gonads), their lab tests and detection methods, disorders (diabetes, Cushing's, Addison's, hyper/hypothyroidism), and treatments. How can I help you explore the endocrine system today?",
      disclaimer: "This assistant provides educational information only, not medical diagnosis. Always consult a licensed endocrinologist.",
      suggestions: [
        "Explain the difference between T3 and T4",
        "How is cortisol tested in the lab?",
        "What causes diabetes insipidus?",
        "Describe the male vs female hormone cycles",
      ],
      error: "Something went wrong. Please try again.",
      clear: "Clear chat",
      role: "Endocrinology AI",
    },
    footer: {
      about: "About Shadow Bio",
      aboutText:
        "Shadow Bio is a multilingual endocrinology platform providing detailed information on every hormone in the human body — its function, lab detection, benefits, disorders, and treatments — in English, Arabic, and Kurdish.",
      quickLinks: "Quick Links",
      contact: "Contact",
      address: "Address",
      addressValue: "Erbil, Two Side Kirkuk Road, College of Sciences",
      phone: "Phone",
      email: "Email",
      rights: "All rights reserved.",
      disclaimer: "Educational use only — not a substitute for professional medical advice.",
    },
  },

  /* ============================ ARABIC ============================ */
  ar: {
    meta: { siteName: "شادو بايو", tagline: "قسم الغدد الصماء" },
    nav: { home: "الرئيسية", hormones: "الهرمونات", labs: "التحليل المخبري", sexHormones: "هرمونات الجنس", assistant: "المساعد الذكي", contact: "اتصل بنا" },
    hero: {
      badge: "قسم الغدد الصماء",
      title1: "شادو بايو",
      title2: "علم الهرمونات والغدد",
      subtitle:
        "منصة متعددة اللغات مخصصة لعلم الغدد الصماء — استكشف كل هرمون في جسم الإنسان، وتعلّم كيف يُفرز ويُقاس في المختبر، وافهم وظائفه واضطراباته وعلاجاته، وتحدّث مع مساعد ذكاء اصطناعي متخصص في الصحة الهرمونية.",
      cta1: "اسأل المساعد الذكي",
      cta2: "استكشف الهرمونات",
      stats: [
        { label: "هرمون مغطّى", value: "+20" },
        { label: "غدة صماء", value: "9" },
        { label: "لغات", value: "3" },
      ],
    },
    sections: {
      overview: { title: "نظام الغدد الصماء", subtitle: "شبكة الغدد التي تنتج وتُفرز الهرمونات في الدم" },
      hormones: { title: "موسوعة الهرمونات", subtitle: "اضغط على أي بطاقة هرمون لرؤية وظيفته واختباره وفوائده واضطراباته وعلاجه" },
      labs: { title: "التحليل المخبري", subtitle: "كيف تُكتشف الهرمونات وتُقاس وتُحلّل في المختبرات السريرية الحديثة" },
      sexHormones: { title: "هرمونات الجنس والجهاز التناسلي", subtitle: "الفروق الهرمونية بين الذكورة والأنوثة" },
      assistant: { title: "مساعد علم الغدد الصماء الذكي", subtitle: "اسأل أي سؤال عميق عن الهرمونات أو الغدد أو التحاليل أو العلاجات" },
      contact: { title: "اتصل بنا", subtitle: "تواصل مع فريق شادو بايو للغدد الصماء" },
    },
    overview: {
      title: "خريطة الغدد الصماء",
      description:
        "نظام الغدد الصماء شبكة من الغدد تنتج وتُطلق الهرمونات مباشرة في مجرى الدم. هذه الرسل الكيميائية تسافر في الجسم لتنظيم الأيض والنمو والتكاثر والمزاج ووظائف لا حصر لها.",
      glandLabels: {
        hypothalamus: "الوطاء",
        pituitary: "النخامية",
        thyroid: "الدرقية",
        parathyroid: "جارات الدرقية",
        adrenal: "الكظرية",
        pancreas: "البنكرياس",
        ovaries: "المبيضان",
        testes: "الخصيتان",
        pineal: "الصنوبرية",
      },
    },
    hormoneGroups: [
      {
        id: "pituitary",
        name: "النخامية والوطاء",
        icon: "brain",
        hormones: [
          {
            name: "GH — هرمون النمو",
            source: "الفص الأمامي للنخامية",
            function: "يحفّز نمو العظام والعضلات والأنسجة، وينظّم الأيض وتجديد الخلايا.",
            labTest: "GH في الدم (صائماً)، IGF-1، اختبار الكبت بالجلوكوز، اختبار التحفيز بالأرجينين أو الإنسولين.",
            benefits: "المستويات الطبيعية تضمن نمو الطفولة المناسب، والحفاظ على الكتلة العضلية، وأيض الدهون، وإصلاح الأنسجة.",
            excess: "العملق عند الأطفال أو الضخامة الأطراف عند البالغين — تضخّم اليدين والقدمين والملامح، السكري، أمراض القلب.",
            deficiency: "قزم النخامية عند الأطفال؛ عند البالغين يسبب التعب وفقدان العضلات والدهون البطنية والاكتئاب.",
            treatment: "GH المُعاد تركيبه (سوماتروبين) للنقص؛ نظائر السوماتوستاتين (أوكتيريوتبد)، جراحة، أو علاج إشعاعي للزيادة.",
          },
          {
            name: "TSH — الهرمون المحفّز للدرقية",
            source: "الفص الأمامي للنخامية",
            function: "يحفّز الغدة الدرقية لإنتاج T3 وT4 لتنظيم معدل الأيض.",
            labTest: "TSH في الدم (الأكثر حساسية)، T4 الحر، T3 الحر، اختبار تحفيز TRH في حالات نادرة.",
            benefits: "يحافظ على معدل الأيض الطبيعي وإنتاج الطاقة ودرجة حرارة الجسم والوزن.",
            excess: "عادة قصور درقية ثانوي (سبب نخامي) — تعب، زيادة وزن، عدم تحمّل البرد.",
            deficiency: "فرط درقية ثانوي — فقدان وزن، تسرع القلب، عدم تحمّل الحر (نادر).",
            treatment: "علاج الاضطراب النخامي الأساسي؛ ليفوثيروكسين للقصور.",
          },
          {
            name: "ACTH — الهرمون المحفّز للكظر",
            source: "الفص الأمامي للنخامية",
            function: "يحفّز قشر الكظر لإفراز الكورتيزول والأندروجينات، خاصة أثناء الإجهاد.",
            labTest: "ACTH في الدم (8 صباحاً)، كورتيزول البول 24 ساعة، اختبار كبت الديكساميثازون، تحفيز CRH.",
            benefits: "يدعم استجابة الإجهاد وضغط الدم وتنظيم المناعة وأيض الجلوكوز.",
            excess: "داء كوشينغ — سمنة مركزية، وجه قمري، ارتفاع الضغط، سكري، تشوّهات جلدية.",
            deficiency: "قصور كظري ثانوي — تعب، انخفاض الضغط، فقدان وزن، نقص سكر.",
            treatment: "جراحة (استئصال الورم النخامي عبر الوتدي)؛ هيدروكورتيزون للنقص.",
          },
          {
            name: "البرولاكتين (PRL)",
            source: "الفص الأمامي للنخامية",
            function: "يحفّز إنتاج الحليب (الإرضاع) ويلعب دوراً في الوظيفة التناسلية.",
            labTest: "البرولاكتين في الدم (صائماً، صباحاً). اختبار الماكروبرولاكتين إذا كان مرتفعاً جداً. MRI لاستبعاد الورم.",
            benefits: "يمكّن الرضاعة؛ ينظّم المناعة وسلوك الأمومة.",
            excess: "فرط البرولاكتين — إفراز حليب، اضطراب الطمث، العقم، انخفاض الرغبة؛ غالباً من ورم برولاكتيني.",
            deficiency: "عدم القدرة على الإرضاع بعد الولادة (متلازمة شيهان).",
            treatment: "نظائر الدوبامين (كابيرجولين، بروموكريبتين)؛ جراحة للأورام الكبيرة.",
          },
          {
            name: "ADH — الهرمون المضاد للإدرار (فازوبريسين)",
            source: "الفص الخلفي للنخامية",
            function: "يعزّز إعادة امتصاص الماء في الكلى، يركّز البول وينظّم توازن السوائل.",
            labTest: "الأسمولية في الدم والبول، اختبار الحرمان من الماء، اختبار الديزموبريسين.",
            benefits: "يحافظ على توازن الماء وضغط الدم ومستوى الصوديوم.",
            excess: "SIADH (متلازمة إفراز ADH غير المناسب) — نقص صوديوم، تشوّش، تشنجات.",
            deficiency: "البول السكري الكاذب — تبول مفرط، عطش شديد.",
            treatment: "تقييد السوائل لـ SIADH؛ ديزموبريسين (DDAVP) للبول السكري الكاذب.",
          },
        ],
      },
      {
        id: "thyroid",
        name: "الدرقية وجارات الدرقية",
        icon: "butterfly",
        hormones: [
          {
            name: "T3 — ثلاثي يود الثيرونين",
            source: "الغدة الدرقية (الخلايا الجُريبية)",
            function: "الهرمون الدرقي الفعّال — ينظّم معدل الأيض ووظيفة القلب ودرجة حرارة الجسم وتطور الدماغ.",
            labTest: "T3 الحر (FT3)، T3 الكلي، T3 العكسي (rT3) في حالات خاصة.",
            benefits: "يقود إنتاج الطاقة الخلوية، يدعم تطور الدماغ عند الرضع، يحافظ على الوزن والمزاج.",
            excess: "فرط الدرقية — فقدان وزن، تسرع القلب، قلق، رعشة، عدم تحمّل الحر (داء غريفز).",
            deficiency: "قصور الدرقية — تعب، زيادة وزن، برودة، اكتئاب، جفاف الجلد.",
            treatment: "أدوية مضادة للدرقية (ميثيمازول، PTU)، يود مشع، أو جراحة للزيادة؛ ليوثيرونين للنقص.",
          },
          {
            name: "T4 — الثيروكسين",
            source: "الغدة الدرقية (الخلايا الجُريبية)",
            function: "الهرمون الدرقي الرئيسي المُفرَز؛ يتحوّل إلى T3 الفعّال في الأنسجة الطرفية. ينظّم الأيض.",
            labTest: "T4 الحر (FT4)، T4 الكلي (TT4). TSH معاً للوحة درقية كاملة.",
            benefits: "يدعم معدل الأيض، اصطناع البروتين، نمو العظام، نضج الجهاز العصبي.",
            excess: "التسمم الدرقي — خفقان، فقدان وزن، قلق، خطر هشاشة العظام مع الوقت.",
            deficiency: "قصور الدرقية (الأشيع: التهاب الدرقية لهاشيموتو) — تعب، بطء القلب، زيادة وزن.",
            treatment: "ليفوثيروكسين (بديل T4) للقصور؛ الثيوناميدات/اليود المشع/جراحة للفرط.",
          },
          {
            name: "الكالسيتونين",
            source: "الغدة الدرقية (الخلايا المجاورة للجُريب C)",
            function: "يخفض كالسيوم الدم بتثبيط ارتشاف العظم؛ دور ثانوي عند البشر.",
            labTest: "الكالسيتونين في الدم (قاعدي ومحفّز بالبنتاغاسترين)؛ يستخدم بشكل أساسي كواسم ورم لسرطان الدرقية النخاعي.",
            benefits: "يساعد في تنظيم توازن الكالسيوم والفوسفات، يحمي العظم أثناء النمو السريع.",
            excess: "عادة يشير لسرطان الدرقية النخاعي؛ نادراً يسبب نقص كالسيوم.",
            deficiency: "لا تأثير سريري مهم؛ استئصال الدرقية لا يسبب اضطراب كالسيوم إذا بقيت جارات الدرقية سليمة.",
            treatment: "علاج السبب (جراحة لسرطان الدرقية النخاعي)؛ كالسيتونين صناعي لداء باغيت.",
          },
          {
            name: "PTH — هرمون جارات الدرقية",
            source: "غدد جارات الدرقية (4 غدد صغيرة خلف الدرقية)",
            function: "ينظّم كالسيوم الدم — يزيد ارتشاف العظم، إعادة امتصاص الكالسيوم في الكلى، وتفعيل فيتامين D.",
            labTest: "PTH السليم (مع كالسيوم دم متزامن)، فوسفات الدم، فيتامين D (25-OH-D)، كالسيوم بول 24 ساعة.",
            benefits: "يحافظ على كالسيوم الدم في نطاق ضيق ضروري لوظيفة الأعصاب والعضلات والقلب.",
            excess: "فرط جارات الدرقية الأولي (عادة ورم غدّي) — فرط كالسيوم، حصى الكلى، هشاشة العظام، تعب.",
            deficiency: "قصور جارات الدرقية — نقص كالسيوم، تقلّصات عضلية، تيتانيا، تشنجات، تنميل حول الفم.",
            treatment: "استئصال جارات الدرقية للورم؛ كالسيوم وكالسيتيرول للنقص.",
          },
        ],
      },
      {
        id: "adrenal",
        name: "الغدد الكظرية",
        icon: "triangle",
        hormones: [
          {
            name: "الكورتيزول",
            source: "قشر الكظر (المنطقة الحزمية)",
            function: "الهرمون الرئيسي للإجهاد — يرفع جلوكوز الدم، يثبّط الالتهاب، ينظّم الأيض وضغط الدم.",
            labTest: "كورتيزول دم صباحي، كورتيزول بول حر 24 ساعة، كورتيزول لعاب منتصف الليل، اختبار كبت الديكساميثازون.",
            benefits: "يمكّن استجابة الإجهاد، يحافظ على ضغط الدم، يدعم تنظيم المناعة والإيقاع اليومي.",
            excess: "متلازمة كوشينغ — سمنة مركزية، وجه قمري، حدبة الجاموس، سكري، ارتفاع ضغط، ترقّق الجلد.",
            deficiency: "داء أديسون (قصور كظري أولي) — تعب، فرط تصبّغ، انخفاض ضغط، اشتهاء الملح.",
            treatment: "هيدروكورتيزون أو بريدنيزون للنقص؛ جراحة، ميتيرابون، أو كيتوكونازول للزيادة.",
          },
          {
            name: "الألدوستيرون",
            source: "قشر الكظر (المنطقة الكُبية)",
            function: "ينظّم توازن الصوديوم والبوتاسيوم، ضغط الدم، وحجم الدم عبر الكلى.",
            labTest: "نسبة الألدوستيرون/الرينين في البلازما (ARR)، ألدوستيرون بول 24 ساعة، اختبار كبت المحلول الملحي.",
            benefits: "يحافظ على ضغط الدم، توازن السوائل، واستتباب الكهارل.",
            excess: "متلازمة كون (فرط الألدوستيرون الأولي) — ارتفاع ضغط، نقص بوتاسيوم، ضعف عضلي.",
            deficiency: "نقص الألدوستيرون — نقص صوديوم، فرط بوتاسيوم، انخفاض ضغط (يُرى في أديسون).",
            treatment: "سبيرونولاكتون أو إبليرينون؛ استئصال الكظر لورم الألدوستيرون.",
          },
          {
            name: "الأدرينالين (إبينفرين) والنورأدرينالين",
            source: "اللب الكظري",
            function: "كاتيكولامينات — تطلق استجابة 'الكر أو الفر': تزيد معدل القلب، ضغط الدم، تحرير الجلوكوز.",
            labTest: "الميتانفرينات في البلازما، الميتانفرينات والكاتيكولامينات في بول 24 ساعة، اختبار كبت الكلونيدين.",
            benefits: "يمكّن استجابة الإجهاد السريعة، يصقل التركيز، يعبّئ احتياطي الطاقة.",
            excess: "الورم القواتمي (pheochromocytoma) — ارتفاع ضغط نوبي شديد، صداع، تعرّق، خفقان.",
            deficiency: "نادر؛ قد يسبب انخفاض ضغط وضعني في اضطراب الجهاز الذاتي.",
            treatment: "استئصال الورم القواتمي جراحياً بعد حجب ألفا (فينوكسي بنزامين).",
          },
          {
            name: "DHEA والأندروجينات",
            source: "قشر الكظر (المنطقة الشبكية)",
            function: "أندروجينات ضعيفة تتحوّل لتستوستيرون وإستروجينات؛ تساهم في الصفات الجنسية الثانوية والرغبة.",
            labTest: "DHEA-S في الدم، أندروستيرونديون، 17-OH بروجستيرون؛ يُستخدم في تقييم PCOS وأورام الكظر.",
            benefits: "يدعم الرغبة، كثافة العظام، الكتلة العضلية؛ طليعة للهرمونات الجنسية خاصة بعد انقطاع الطمث.",
            excess: "أورام الكظر أو تضخّم الكظر الخلقي — شعرانية، حبوب، تذكير عند الإناث.",
            deficiency: "قصور الكظر — تعب، انخفاض الرغبة، انخفاض الشعور بالعافية.",
            treatment: "علاج السبب؛ استبدال الجلوكوكورتيكيد لتضخّم الكظر الخلقي؛ جراحة للأورام.",
          },
        ],
      },
      {
        id: "pancreas",
        name: "هرمونات البنكرياس",
        icon: "droplet",
        hormones: [
          {
            name: "الإنسولين",
            source: "جُزر البنكرياس (خلايا بيتا)",
            function: "يخفض جلوكوز الدم بتعزيز امتصاص الخلايا للجلوكوز، اصطناع الجليكوجين، وتخزين الدهون.",
            labTest: "إنسولين صائم، C-peptide، HbA1c، اختبار تحمّل الجلوكوز الفموي (OGTT)، أجسام مضادة لـ GAD.",
            benefits: "يحافظ على جلوكوز دم طبيعي، يمكّن تخزين الطاقة، يمنع فرط سكر الدم.",
            excess: "فرط الإنسولين (ورم الإنسولين أو السكري النوع 2 المبكر) — نقص سكر، زيادة وزن، مقاومة الإنسولين.",
            deficiency: "السكري النوع 1 — فرط سكر، حماض كيتوني، فقدان وزن، تبول مفرط، عطش شديد.",
            treatment: "حقن الإنسولين (أنواع متعددة) للنوع 1؛ ميتفورمين، ناهضات GLP-1، مثبطات SGLT2 للنوع 2.",
          },
          {
            name: "الجلوكاجون",
            source: "جُزر البنكرياس (خلايا ألفا)",
            function: "يرفع جلوكوز الدم بتحفيز تكسير الجليكوجين الكبدي واصطناع الجلوكوز؛ مضاد للإنسولين.",
            labTest: "الجلوكاجون في البلازما صائماً، اختبار تحفيز الجلوكاجون؛ يقاس عادة مع الإنسولين.",
            benefits: "يمنع نقص سكر الدم، يعبّئ الجلوكوز أثناء الصيام أو الرياضة.",
            excess: "ورم الجلوكاجون — سكري، طفح جلدي مهاجر (حمامى نخرية مهاجرة)، فقدان وزن.",
            deficiency: "نادر؛ قد يسبب نقص سكر خاصة عند الأطفال.",
            treatment: "جراحة لورم الجلوكاجون؛ نظائر السوماتوستاتين للسيطرة على الأعراض.",
          },
        ],
      },
      {
        id: "reproductive",
        name: "الهرمونات التناسلية",
        icon: "venus",
        hormones: [
          {
            name: "التستوستيرون",
            source: "الخصيتان (خلايا لايديغ) وقشر الكظر",
            function: "الهرمون الجنسي الذكري الرئيسي — يحفّز إنتاج النطف، الكتلة العضلية، كثافة العظام، الرغبة، والصوت العميق.",
            labTest: "التستوستيرون الكلي والحر (صباحاً)، LH، FSH، SHBG؛ أحياناً 17-OH بروجستيرون وDHT.",
            benefits: "يحافظ على خصوبة الذكر، قوة العضلات، إنتاج كريات الدم الحمراء، المزاج، والوظيفة الجنسية.",
            excess: "تعاطي الستيرويد الابتدائي أو الأورام — عدوانية، حبوب، صلع، مشاكل بروستات، عقم (يكبت FSH/LH).",
            deficiency: "قصور الغدد التناسلية — انخفاض الرغبة، خلل الانتصاب، تعب، اكتئاب، فقدان العضلات، هشاشة عظام.",
            treatment: "علاج استبدال التستوستيرون (جل، حقن، لصقة)؛ علاج السبب النخامي أو الخصيوي.",
          },
          {
            name: "الإستراديول (الإستروجين)",
            source: "المبيضان (الخلايا الحُبيبية)، المشيمة، النسيج الدهني",
            function: "الهرمون الجنسي الأنثوي الرئيسي — ينظّم الدورة الشهرية، نمو الثدي، كثافة العظام، والصحة القلبية.",
            labTest: "الإستراديول في الدم (E2) في أيام محددة من الدورة، FSH، LH، AMH للاحتياطي المبيضي.",
            benefits: "يحافظ على خصوبة الأنثى، صحة المهبل، مرونة الجلد، كثافة العظام، والحماية القلبية (قبل انقطاع الطمث).",
            excess: "هيمنة الإستروجين — دورات غزيرة، أورام ليفية، ألم ثدي، خطر متزايد لسرطان الثدي.",
            deficiency: "انقطاع الطمث أو فشل المبيض المبكر — هبّات حرارة، هشاشة عظام، جفاف مهبلي، تقلّبات مزاجية.",
            treatment: "علاج استبدال الهرمونات (HRT)؛ علاج السبب (PCOS، فشل المبيض).",
          },
          {
            name: "البروجسترون",
            source: "المبيض (الجسم الأصفر)، المشيمة أثناء الحمل",
            function: "يُهيّئ الرحم للحمل، يحافظ على بطانة الرحم، يدعم تطور الجنين.",
            labTest: "البروجسترون في الدم (اليوم 21 من الدورة)، يؤكد الإباضة؛ يُراقب في علاج العقم.",
            benefits: "يمكّن الحمل، ينظّم الدورة الشهرية، له تأثير مهدّئ على الدماغ.",
            excess: "قد يسبب انتفاخ، ألم ثدي، تغيّرات مزاجية؛ ارتفاعه في الحمل طبيعي.",
            deficiency: "خلل الطور الأصفري — دورات غير منتظمة، عقم، إجهاض متكرر.",
            treatment: "مكمّلات البروجسترون (فموي، مهبلي) لدعم الطور الأصفري في العقم.",
          },
          {
            name: "FSH و LH — Gonadotropins",
            source: "الفص الأمامي للنخامية",
            function: "FSH يحفّز تطور الجُريبات/النطف؛ LH يطلق الإباضة وإنتاج التستوستيرون/الإستراديول.",
            labTest: "FSH، LH في الدم (اليوم 3 للنساء)، مع الإستراديول/التستوستيرون لتقييم الخصوبة.",
            benefits: "ينظّم الدورات التناسلية عند الإناث واصطناع النطف عند الذكور.",
            excess: "قصور مبيضي/خصيوي أولي — انقطاع طمث، هبّات حرارة، عقم.",
            deficiency: "قصور الغدد التناسلية النخامي (متلازمة كالمان) — تأخر البلوغ، عقم.",
            treatment: "حقن HMG، FSH، hCG؛ GnPU النابض للأسباب الوطائية.",
          },
          {
            name: "الميلاتونين",
            source: "الغدة الصنوبرية",
            function: "ينظّم الإيقاع اليومي ودورة النوم-الاستيقاظ؛ يُفرز في الظلام.",
            labTest: "الميلاتونين اللعابي (ليلاً)، 6-سلفاتوكسيميلاتونين في البول؛ نادراً ما يُستخدم سريرياً.",
            benefits: "يدعم النوم الصحي، تأثيرات مضادة للأكسدة، تنظيم المناعة.",
            excess: "مكمّلات مفرطة — نعسان نهاراً، أحلام حيّة، صداع.",
            deficiency: "أرق، أعراض jet lag، اضطراب الإيقاع اليومي (العمل بنوبات).",
            treatment: "مكمّلات الميلاتونين (0.5–5 ملغ)، نظافة النوم، العلاج بالضوء.",
          },
        ],
      },
    ],
    hormoneFields: {
      source: "المصدر",
      function: "الوظيفة",
      labTest: "الكشف والتحليل المخبري",
      benefits: "الفوائد (المستويات الطبيعية)",
      excess: "اضطرابات الزيادة (Hyper)",
      deficiency: "اضطرابات النقص (Hypo)",
      treatment: "العلاج",
      learnMore: "اضغط البطاقة لعرض التفاصيل",
    },
    labMethods: [
      {
        name: "ELISA — فحص الامتصاص المناعي المرتبط بالإنزيم",
        description: "الطريقة الأشيع. يستخدم أجساماً مضادة مرتبطة بإنزيمات للكشف وقياس تركيز الهرمون عبر تغيّر اللون.",
        use: "يُستخدم لـ: الإنسولين، الكورتيزول، البرولاكتين، TSH، LH، FSH، الإستراديول، التستوستيرون.",
      },
      {
        name: "RIA — التحليل المناعي الإشعاعي",
        description: "تقنية كلاسيكية عالية الحساسية تستخدم هرمونات معلّمة إشعاعياً تتنافس مع هرمونات المريض على ارتباط الأجسام المضادة.",
        use: "يُستخدم لـ: هرمونات التركيز المنخفض (T3، T4، فيتامين D، الألدوستيرون).",
      },
      {
        name: "LC-MS/MS — الكروماتوغرافيا السائلة مع مطياف الكتلة",
        description: "المعيار الذهبي للدقة. يفصل جزيئات الهرمون حسب الكتلة والشحنة؛ يمكنه كشف هرمونات متعددة دفعة واحدة.",
        use: "يُستخدم لـ: الهرمونات الستيرويدية (التستوستيرون، الكورتيزول، الألدوستيرون، فيتامين D)، خاصة بالمستويات المنخفضة.",
      },
      {
        name: "CLIA — التحليل المناعي بالتألق الكيميائي",
        description: "طريقة حديثة مؤتمتة تستخدم تفاعلات كيميائية باعثة للضوء؛ حساسة جداً وتُستخدم في معظم محللات المستشفيات.",
        use: "يُستخدم لـ: TSH، T4 الحر، hCG، تروبونين، البرولاكتين، GH.",
      },
      {
        name: "جمع بول 24 ساعة",
        description: "يجمع كل البول لمدة 24 ساعة لقياس إفراز الهرمون الكلي يومياً؛ مفيد للكاتيكولامينات والكورتيزول والميتانفرينات.",
        use: "يُستخدم لـ: تقييم الورم القواتمي، فحص متلازمة كوشينغ.",
      },
      {
        name: "اختبارات التحفيز والكبت",
        description: "اختبارات وظيفية تتحدى المحور الصماوي — تعطى محفّز (ACTH، TRH، إنسولين) أو كابح (ديكساميثازون) ويُقاس استجابة الهرمون.",
        use: "تُستخدم لـ: تحفيز ACTH (أديسون)، كبت الديكساميثازون (كوشينغ)، كبت الجلوكوز (الضخامة الأطراف).",
      },
    ],
    sexHormonesContent: {
      male: {
        title: "الجهاز التناسلي الذكري",
        symbol: "♂",
        primary: "الهرمون الرئيسي: التستوستيرون",
        hormones: ["التستوستيرون", "FSH (اصطناع النطف)", "LH (تحفيز خلايا لايديغ)", "إنهيبين B"],
        role:
          "المحور التناسلي الصماوي الذكري يتمحور حول المحور الوطائي-النخامي-الخصيوي. GnRH من الوطاء يحفّز LH وFSH من النخامية. LH يقود إنتاج التستوستيرون من خلايا لايديغ، بينما FSH يدعم إنتاج النطف في الأنابيب المنوية. التستوستيرون يحافظ على الرغبة، الكتلة العضلية، كثافة العظام، والصفات الجنسية الثانوية.",
      },
      female: {
        title: "الجهاز التناسلي الأنثوي",
        symbol: "♀",
        primary: "الهرمونات الرئيسية: الإستروجين والبروجسترون",
        hormones: ["الإستراديول (E2)", "البروجسترون", "FSH (تطور الجُريبات)", "LH (مطلق الإباضة)", "AMH (الاحتياطي المبيضي)"],
        role:
          "المحور التناسلي الصماوي الأنثوي هو المحور الوطائي-النخامي-المبيضي. ينتج نمطاً شهرياً دورياً: FSH يحفّز نمو الجُريبات، يبلغ الإستراديول ذروته لإطلاق LH الذي يسبب الإباضة. الجُريب المتمزق يصبح الجسم الأصفر المنتج للبروجسترون. إذا لم يحدث حمل، تنخفض مستويات الهرمون ويبدأ الحيض.",
      },
      cycleTitle: "الدورة الشهرية",
      cycleDescription:
        "دورة 28 يوماً (متوسط) تنقسم لطور جُريبي (يرتفع الإستراديول)، الإباضة (ذروة LH ~اليوم 14)، والطور الأصفري (يهيمن البروجسترون). اختلال الهرمونات يسبب PCOS، انقطاع الطمث، والعقم.",
    },
    chat: {
      title: "مساعد الغدد الصماء",
      subtitle: "مدعوم بالذكاء الاصطناعي · متخصص بالهرمونات والغدد",
      placeholder: "اسأل عن أي هرمون، غدة، تحليل مخبري، أو علاج...",
      send: "إرسال",
      thinking: "يفكّر...",
      welcome:
        "مرحباً! أنا مساعد الغدد الصماء في شادو بايو. يمكنني الإجابة عن أسئلة تفصيلية حول أي هرمون (الإنسولين، الكورتيزول، هرمونات الدرقية، الهرمونات الجنسية)، الغدد الصماء (النخامية، الدرقية، الكظرية، البنكرياس، الغدد التناسلية)، تحاليلها وطرق كشفها المخبرية، الاضطرابات (السكري، كوشينغ، أديسون، فرط/قصور الدرقية)، والعلاجات. كيف أستكشف نظام الغدد الصماء معك اليوم؟",
      disclaimer: "يقدّم هذا المساعد معلومات تعليمية فقط وليس تشخيصاً طبياً. استشر دائماً طبيب غدد صماء مختص.",
      suggestions: [
        "اشرح الفرق بين T3 وT4",
        "كيف يُفحص الكورتيزول في المختبر؟",
        "ما الذي يسبب البول السكري الكاذب؟",
        "صف الفرق بين الدورة الهرمونية الذكرية والأنثوية",
      ],
      error: "حدث خطأ ما. حاول مرة أخرى.",
      clear: "مسح المحادثة",
      role: "مساعد الغدد الصماء الذكي",
    },
    footer: {
      about: "عن شادو بايو",
      aboutText:
        "شادو بايو منصة متعددة اللغات لعلم الغدد الصماء توفّر معلومات تفصيلية عن كل هرمون في جسم الإنسان — وظيفته، كشفه المخبري، فوائده، اضطرابات، وعلاجاته — بالعربية والإنجليزية والكردية.",
      quickLinks: "روابط سريعة",
      contact: "تواصل معنا",
      address: "العنوان",
      addressValue: "أربيل، دوو سايد كركوك، كلية العلوم",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      rights: "جميع الحقوق محفوظة.",
      disclaimer: "للاستخدام التعليمي فقط — ليس بديلاً عن الاستشارة الطبية المتخصصة.",
    },
  },

  /* ============================ KURDISH ============================ */
  ku: {
    meta: { siteName: "شادۆ بایۆ", tagline: "بەشی ئەندۆکرینۆلۆژی" },
    nav: { home: "سەرەتا", hormones: "هۆرمۆنەکان", labs: "تاقیگە", sexHormones: "هۆرمۆنە جێندەرییەکان", assistant: "یاریدەدەری زیرەک", contact: "پەیوەندی" },
    hero: {
      badge: "بەشی ئەندۆکرینۆلۆژی",
      title1: "شادۆ بایۆ",
      title2: "زانستی هۆرمۆن و غدە",
      subtitle:
        "سەکۆیەکی فرەزمان تەرخانکراو بۆ ئەندۆکرینۆلۆژی — هەموو هۆرمۆنێک لەشی مرۆڤ بکۆڵەرەوە، فێربە چۆن دروست دەکرێت و لە تاقیگە دەپێورێت، بزانە کارەکانی و نەخۆشییەکانی و چارەسەرییەکانی، و قسە لەگەڵ یاریدەدەرێکی زیرەک کە پسپۆڕە لە تەندروستی هۆرمۆنی.",
      cta1: "پرسیار لە یاریدەدەری زیرەک بکە",
      cta2: "هۆرمۆنەکان بکۆڵەرەوە",
      stats: [
        { label: "هۆرمۆن", value: "+20" },
        { label: "غدە", value: "9" },
        { label: "زمان", value: "3" },
      ],
    },
    sections: {
      overview: { title: "سیستەمی ئەندۆکرین", subtitle: "تۆڕی غدەکان کە هۆرمۆن دروست دەکەن و دەیدەن بە خوێن" },
      hormones: { title: "ئینسایکلۆپیدیای هۆرمۆن", subtitle: "هەر کارتێکە کلیک بکە بۆ بینینی کار و تاقیگە و سوود و نەخۆشی و چارەسەری" },
      labs: { title: "شیکاری تاقیگە", subtitle: "چۆن هۆرمۆنەکان دەدۆزرێنەوە و دەپێورێن لە تاقیگە نوێیەکانی نەخۆشخانە" },
      sexHormones: { title: "هۆرمۆنە جێندەرییەکان", subtitle: "جیاوازییە هۆرمۆنییەکانی نێوان نێر و مێ" },
      assistant: { title: "یاریدەدەری ئەندۆکرینۆلۆژی زیرەک", subtitle: "هەر پرسیارێکی قووڵ لە هۆرمۆن و غدە و تاقیگە بکە" },
      contact: { title: "پەیوەندی", subtitle: "پەیوەندی بە تیمی شادۆ بایۆ بکە" },
    },
    overview: {
      title: "نەخشەی غدە ئەندۆکرینەکان",
      description:
        "سیستەمی ئەندۆکرین تۆڕێکی غدەکانە کە هۆرمۆن دروست دەکەن و ڕاستەوخۆ دەیدەن بە خوێن. ئەم پەیامە کیمیاییانە بە تەواوی لەشدا دەگەڕێن بۆ ڕێکخستنی مێتابۆلیزم و گەشە و زاوزێ و مۆد و هەزاران کارتری.",
      glandLabels: {
        hypothalamus: "هایپۆتالاموس",
        pituitary: "پیوێتاری",
        thyroid: "تایرۆید",
        parathyroid: "پاراتایرۆید",
        adrenal: "ئەدرینال",
        pancreas: "پانکرێس",
        ovaries: "هێلکەدان",
        testes: "گون",
        pineal: "پینێال",
      },
    },
    hormoneGroups: [
      {
        id: "pituitary",
        name: "پیوێتاری و هایپۆتالاموس",
        icon: "brain",
        hormones: [
          {
            name: "GH — هۆرمۆنی گەشە",
            source: "پێشی پیوێتاری",
            function: "گەشەی ئێسک و ماسوولکە و شانە هاندان دەکات، مێتابۆلیزم و نوێبوونەوەی خانە ڕێک دەخات.",
            labTest: "GHی خوێن (بە برسێتی)، IGF-1، تاقیکردنەوەی کەمکردنەوە بە گلوکۆز، هاندانی ئارجینین یان ئینسۆلین.",
            benefits: "ئاستی ئاسایی گەشەی منداڵی، پاراستنی ماسوولکە، مێتابۆلیزمی چەوری، چاککردنەوەی شانە دڵنیا دەکات.",
            excess: "گیگانتیزم (منداڵ) یان ئەکرۆمێگاڵی (پیاو) — گەورەبوونی دەست و پێ و ڕوو، شەکرە، نەخۆشی دڵ.",
            deficiency: "کورتە باڵی پیوێتاری لە منداڵیدا؛ لە پێگەیشتوواندا ماندووبوون و لەدەستدانی ماسوولکە و چەوری سک و خەمۆکی.",
            treatment: "GHی دووبارە دروستکراو (سۆماترۆپین) بۆ کەمی؛ ئاناڵۆگی سۆماتۆستاتین (ئۆکتیرۆتاید)، نەشتەرگەری، یان چارەسەری تیشکی بۆ زیادی.",
          },
          {
            name: "TSH — هۆرمۆنی هاندەری تایرۆید",
            source: "پێشی پیوێتاری",
            function: "غدەی تایرۆید هاندادەکات بۆ دروستکردنی T3 وT4 بۆ ڕێکخستنی خێرایی مێتابۆلیزم.",
            labTest: "TSHی خوێن (هەستیارترین)، T4ی ئازاد، T3ی ئازاد، تاقیکردنەوەی هاندانی TRH.",
            benefits: "خێرایی مێتابۆلیزمی ئاسایی، بەرهەمهێنانی وزە، پلەی گەرمی لەش، و کێش پاراستن.",
            excess: "زۆرجار هایپۆتایرۆیدیسمی دووەم (هۆکاری پیوێتاری) — ماندووبوون، زیادی کێش، ناتوانی سۆز.",
            deficiency: "هایپەرتایرۆیدیسمی دووەم — لەدەستدانی کێش، تەزیوی دڵ، ناتوانی گەرم (دەگمەن).",
            treatment: "چارەسەری نەخۆشییە بنەڕەتییەکانی پیوێتاری؛ لیڤۆتایرۆکسین بۆ کەمی.",
          },
          {
            name: "ACTH — هۆرمۆنی هاندەری ئەدرینال",
            source: "پێشی پیوێتاری",
            function: "کۆرتیکسی ئەدرینال هاندادەکات بۆ ئازادکردنی کۆرتزۆل و ئەندرۆجینەکان، بەتایبەت لە کاتی سترێسدا.",
            labTest: "ACTHی خوێن (8ی بەیانی)، کۆرتزۆلی میز 24 کاتژمێر، تاقیکردنەوەی کەمکردنەوەی دێکسامێتازۆن، هاندانی CRH.",
            benefits: "پشتیوانی وەڵامی سترێس، پەستانی خوێن، ڕێکخستنی بەرگری، و مێتابۆلیزمی گلوکۆز.",
            excess: "نەخۆشی کوشینگ — قەڵەوی ناوەندی، ڕووی مانگ، پەستانی بەرز، شەکرە، نیشانە جلوبەرگ.",
            deficiency: "کەمی ئەدرینالی دووەم — ماندووبوون، نزمی پەستان، لەدەستدانی کێش، کەمی شەکر.",
            treatment: "نەشتەرگەری (لابردنی تیۆمی پیوێتاری)؛ هایدرۆکۆرتزۆن بۆ کەمی.",
          },
          {
            name: "پرۆلاکتین (PRL)",
            source: "پێشی پیوێتاری",
            function: "بەرهەمهێنانی شیر هاندادەکات و ڕۆڵێکی هەیە لە کاری زاوزێ.",
            labTest: "پرۆلاکتینی خوێن (بە برسێتی، بەیانی). تاقیکردنەوەی ماکرۆپرۆلاکتین. MRI بۆ ڕەتکردنەوەی تیۆما.",
            benefits: "شیردانی چاک دەکات؛ مۆد و بەرگری ڕێک دەخات.",
            excess: "هایپەرپرۆلاکتینیمیا — شیرهێنان، جێبەجێکردنی نائاسایی، نەزۆخی، کەمی ویستی؛ زۆرجار لە پرۆلاکتینۆما.",
            deficiency: "ناتوانی شیردان دوای لەدایکبوون (سیندرۆمی شیهان).",
            treatment: "ئاناڵۆگی دۆپامین (کابێرگۆلین، برۆمۆکرێپتین)؛ نەشتەرگەری بۆ تیۆمای گەورە.",
          },
          {
            name: "ADH — هۆرمۆنی دژە میزکردن (ڤازۆپرێسین)",
            source: "پاشی پیوێتاری",
            function: "دووبارە مەزیکردنەوەی ئاو لە گورچیلە دڵنیا دەکات، میز چڕ دەکات و هاوسەنگی شل ڕێک دەخات.",
            labTest: "ئۆسمۆلالیتی خوێن و میز، تاقیکردنەوەی بێئاویکردن، تاقیکردنەوەی دێسمۆپرێسین.",
            benefits: "هاوسەنگی ئاوی لەش و پەستانی خوێن و ئاستی سۆدیۆم پاراستن.",
            excess: "SIADH (سیندرۆمی ADHی نادروست) — کەمی سۆدیۆم، بێهیوا، کڕکڕە.",
            deficiency: "شەکرەی میزی کۆت (Diabetes Insipidus) — میزی زۆر، تینویەتی شەڕاوی.",
            treatment: "سنووردارکردنی شل بۆ SIADH؛ دێسمۆپرێسین بۆ DI.",
          },
        ],
      },
      {
        id: "thyroid",
        name: "تایرۆید و پاراتایرۆید",
        icon: "butterfly",
        hormones: [
          {
            name: "T3 — تریایۆدۆتایرۆنین",
            source: "غدەی تایرۆید (خانە فۆلیکیولەرەکان)",
            function: "هۆرمۆنی تایرۆیدی چالاک — خێرایی مێتابۆلیزم و کارێ دڵ و گەرمی لەش و گەشەی مێشک ڕێک دەخات.",
            labTest: "T3ی ئازاد (FT3)، T3ی کۆی، T3ی پێچەوانە (rT3) لە حاڵەتی تایبەت.",
            benefits: "بەرهەمهێنانی وزەی خانە هاندادەکات، گەشەی مێشک لە منداڵیدا، کێش و مۆدی ئاسایی پاراستن.",
            excess: "هایپەرتایرۆیدیسم — لەدەستدانی کێش، تەزیوی دڵ، ترس، لەرزە، ناتوانی گەرم (نەخۆشی گرەیڤز).",
            deficiency: "هایپۆتایرۆیدیسم — ماندووبوون، زیادی کێش، سۆز، خەمۆکی، وشکی پێست.",
            treatment: "دەرمانی دژە تایرۆید (مێتیمازۆل، PTU)، یۆدی تیشکی، یان نەشتەرگەری بۆ زیادی؛ لیۆتایرۆنین بۆ کەمی.",
          },
          {
            name: "T4 — تایرۆکسین",
            source: "غدەی تایرۆید (خانە فۆلیکیولەرەکان)",
            function: "هۆرمۆنی تایرۆیدی سەرەکی؛ دەگۆڕێت بۆ T3ی چالاک لە شانەکان. مێتابۆلیزم ڕێک دەخات.",
            labTest: "T4ی ئازاد (FT4)، T4ی کۆی. TSH لەگەڵ بۆ پانێلی تایرۆیدی تەواو.",
            benefits: "خێرایی مێتابۆلیزم، دروستکردنی پرۆتین، گەشەی ئێسک، پێگەیشتنی سیستەمی دەماری.",
            excess: "تایرۆتۆکسیکۆسیس — خڵپە، لەدەستدانی کێش، ترس، مەترسی ئۆستیۆپۆرۆزیس بە تێپەربوونی کات.",
            deficiency: "هایپۆتایرۆیدیسم (باوترین: تایرۆیدیتی هایشیمۆتۆ) — ماندووبوون، برادیکاردیا، زیادی کێش.",
            treatment: "لیڤۆتایرۆکسین (جێگرەوەی T4) بۆ کەمی؛ تایۆناماید/RAI/نەشتەرگەری بۆ زیادی.",
          },
          {
            name: "کاڵسیتۆنین",
            source: "غدەی تایرۆید (خانە پارافۆلیکیولەر C)",
            function: "کاڵسیومی خوێن دادەبەزێنێت بە ڕاگرتنی رێسۆرپشنی ئۆستیۆکلاست؛ ڕۆڵی کەم لە مرۆڤ.",
            labTest: "کاڵسیتۆینی خوێن (بەیانی و هاندانی پێنتاگاسترین)؛ بەتایبەت وەک نیشانەی تیۆم بۆ سەرەتانی تایرۆیدی مێدولاری.",
            benefits: "ڕێکخستنی کاڵسیۆم و فۆسفات، پاراستنی ئێسک لە کاتی گەشەی خێرا.",
            excess: "زۆرجار ئاماژەیە بۆ سەرەتانی تایرۆیدی مێدولاری؛ بە دەگمەن کەمی کاڵسیۆم دەکات.",
            deficiency: "کاریگەری کلینیکی گرنگ نییە؛ لابردنی تایرۆید کەمی کاڵسیۆم ناکات ئەگەر پاراتایرۆید ساغ بن.",
            treatment: "چارەسەری هۆکار (نەشتەرگەری بۆ سەرەتانی تایرۆیدی مێدولاری)؛ کاڵسیتۆینی synthesized بۆ نەخۆشی پاگێت.",
          },
          {
            name: "PTH — هۆرمۆنی پاراتایرۆید",
            source: "غدە پاراتایرۆیدەکان (4 غدەی بچووک لە پشت تایرۆید)",
            function: "کاڵسیۆمی خوێن ڕێک دەخات — رێسۆرپشنی ئێسک زیاد دەکات، دووبارە مەزیکردنەوەی کاڵسیۆم لە گورچیلە، چالاککردنی ڤیتامین D.",
            labTest: "PTHی بێتاڵا (لەگەڵ کاڵسیۆمی خوێنی هاوکات)، فۆسفاتی خوێن، ڤیتامین D (25-OH-D)، کاڵسیۆمی میزی 24 کاتژمێر.",
            benefits: "کاڵسیۆمی خوێن لە سنووری تەسک دەگرێت کە پێویستە بۆ کارێ ئەسەب و ماسوولکە و دڵ.",
            excess: "هایپەرپاراتایرۆیدیسمی یەکەم (زۆرجار ئادینۆمای پاراتایرۆید) — هایپەرکاڵسیۆمیا، بەردی گورچیلە، ئۆستیۆپۆرۆزیس، ماندووبوون.",
            deficiency: "هایپۆپاراتایرۆیدیسم — هایپۆکاڵسیۆمیا، خەستی ماسوولکە، تیتانی، کڕکڕە، گەززە لە دەورێ دەم.",
            treatment: "پاراتایرۆیدێکتۆمی بۆ ئادینۆما؛ کاڵسیۆم و کاڵسیترۆل بۆ کەمی.",
          },
        ],
      },
      {
        id: "adrenal",
        name: "غدە ئەدرینالەکان",
        icon: "triangle",
        hormones: [
          {
            name: "کۆرتزۆل",
            source: "کۆرتەکسی ئەدرینال (زۆنا فاسیکولاتا)",
            function: "هۆرمۆنی سەرەکی سترێس — گلوکۆزی خوێن بەرز دەکات، ئاودەمەی کەم دەکات، مێتابۆلیزم و پەستانی خوێن ڕێک دەخات.",
            labTest: "کۆرتزۆلی خوێنی بەیانی، کۆرتزۆلی ئازادی میزی 24 کاتژمێر، کۆرتزۆلی لعابی نیوەشو، تاقیکردنەوەی کەمکردنەوەی دێکسامێتازۆن.",
            benefits: "وەڵامی سترێس، پاراستنی پەستان، ڕێکخستنی بەرگری، و ڕۆژی ڕۆژانە.",
            excess: "سیندرۆمی کوشینگ — قەڵەوی ناوەندی، ڕووی مانگ، کۆڵی جامۆش، شەکرە، پەستانی بەرز، نزمی پێست.",
            deficiency: "نەخۆشی ئەدیسمۆن (کەمی ئەدرینالی یەکەم) — ماندووبوون، پێستی تۆڕ، پەستانی نزم، ویستی خوێ.",
            treatment: "هایدرۆکۆرتزۆن یان پرێدنیسۆن بۆ کەمی؛ نەشتەرگەری، مێتیراپۆن، یان کێتۆکۆنازۆل بۆ زیادی.",
          },
          {
            name: "ئەلدۆستیرۆن",
            source: "کۆرتەکسی ئەدرینال (زۆنا گلۆمێرولۆسا)",
            function: "هاوسەنگی سۆدیۆم و پۆتاسیۆم و پەستان و قەبارەی خوێن لە ڕێگەی گورچیلە ڕێک دەخات.",
            labTest: "ڕێژەی ئەلدۆستیرۆن/ڕێنین لە پلازما (ARR)، ئەلدۆستیرۆنی میزی 24 کاتژمێر، تاقیکردنەوەی کەمکردنەوەی شۆرە.",
            benefits: "پەستانی خوێن و هاوسەنگی شل و ئەلیکترۆلایت پاراستن.",
            excess: "سیندرۆمی کۆن (هایپەرئەلدۆستیرۆنیسمی یەکەم) — پەستانی بەرز، کەمی پۆتاسیۆم، لاوازی ماسوولکە.",
            deficiency: "هایپۆئەلدۆستیرۆنیسم — کەمی سۆدیۆم، زیادی پۆتاسیۆم، پەستانی نزم (لە ئەدیسمۆندا دەبینرێت).",
            treatment: "سپیرۆنۆلاکتۆن یان ئیپلێرینۆن؛ ئەدرێناڵێکتۆمی بۆ ئادینۆمای ئەلدۆستیرۆن.",
          },
          {
            name: "ئەدرینالین و نۆرئەدرینالین",
            source: "مێدولای ئەدرینال",
            function: "کاتێکۆلامینەکان — وەڵامی 'شەڕ یان هەڵهاتن' هاندادەکات: خێرایی دڵ و پەستان و ئازادکردنی گلوکۆز زیاد دەکات.",
            labTest: "مێتانێفرین لە پلازما، مێتانێفرین و کاتێکۆلامین لە میزی 24 کاتژمێر، تاقیکردنەوەی کەمکردنەوەی کلۆنینین.",
            benefits: "وەڵامی سترێسی خێرا، چارەی تەرکیز، ئازادکردنی یەدەکی وزە.",
            excess: "فیۆکرۆمۆسایتۆما — پەستانی بەرزی نۆبی، سەرئێشە، ئارەق، خڵپە.",
            deficiency: "دەگمەن؛ دەکرێت پەستانی نزمی وەستاو لە نەخۆشی ئۆتۆنۆمیدا بکات.",
            treatment: "لابردنی نەشتەرگەری فیۆکرۆمۆسایتۆما دوای بلۆکی ئەلفا (فێنۆکسیبێنزامین).",
          },
          {
            name: "DHEA و ئەندرۆجینەکان",
            source: "کۆرتەکسی ئەدرینال (زۆنا رێتیکیولاریس)",
            function: "ئەندرۆجینە لاوازەکان دەگۆڕێن بۆ تێستۆستیرۆن و ئێسترۆجین؛ بەشدارن لە سیفەتی جێندەری دووەم و ویست.",
            labTest: "DHEA-Sی خوێن، ئەندرۆستێنێدیۆن، 17-OH پرۆجێستیرۆن؛ بەکاردێت لە PCOS و هەڵسەنگاندنی تیۆمی ئەدرینال.",
            benefits: "پشتیوانی ویست، چوستی ئێسک، ماسوولکە؛ تەلیدەی هۆرمۆنی جێندەری بەتایبەت دوای وەستانی مانگانە.",
            excess: "تیۆمی ئەدرینال یان هایپەرپلازیای ئەدریناڵی خوازی — گەڵمەژە، حەبە، ڕووتی پیاو لە ئافرەتان.",
            deficiency: "کەمی ئەدرینال — ماندووبوون، کەمی ویست، کەمی هەستی باشبوون.",
            treatment: "چارەسەری هۆکار؛ جێگرەوەی گلوکۆکۆرتیکۆید بۆ CAH؛ نەشتەرگەری بۆ تیۆم.",
          },
        ],
      },
      {
        id: "pancreas",
        name: "هۆرمۆنەکانی پانکرێس",
        icon: "droplet",
        hormones: [
          {
            name: "ئینسۆلین",
            source: "دوورگەکانی پانکرێس (خانە بێتا)",
            function: "گلوکۆزی خوێن دادەبەزێنێت بە هاندانی مەزیکردنەوەی گلوکۆز لە خانە، دروستکردنی گلیکۆجین، و هەڵگرتنی چەوری.",
            labTest: "ئینسۆلینی بە برسێتی، C-peptide، HbA1c، تاقیکردنەوەی تۆڵەرانسی گلوکۆزی فەمی (OGTT)، ئەنتیبۆدی دژە GAD.",
            benefits: "گلوکۆزی خوێنی ئاسایی، چاککردنی هەڵگرتنی وزە، ڕاگرتنی هایپەرگلیکیمیا.",
            excess: "هایپەرئینسۆلینیمیا (ئینسۆلینۆما یان شەکرەی جۆری ٢ی زوو) — هایپۆگلیکیمیا، زیادی کێش، بەرگریی ئینسۆلین.",
            deficiency: "شەکرەی جۆری ١ — هایپەرگلیکیمیا، کێتۆئەسیدۆسیس، لەدەستدانی کێش، میزی زۆر، تینویەتی شەڕاوی.",
            treatment: "دەرزی ئینسۆلین (چەند جۆر) بۆ جۆری ١؛ مێتفۆرمین، ئاگۆنیستی GLP-1، ئینهیبیتۆری SGLT2 بۆ جۆری ٢.",
          },
          {
            name: "گلوکاگۆن",
            source: "دوورگەکانی پانکرێس (خانە ئەلفا)",
            function: "گلوکۆزی خوێن بەرز دەکات بە هاندانی گلایکۆجینۆلیسی جگەر و گلوکۆنیۆجێنیس؛ دژە ئینسۆلین.",
            labTest: "گلوکاگۆنی پلازمای بە برسێتی، تاقیکردنەوەی هاندانی گلوکاگۆن؛ زۆرجار لەگەڵ ئینسۆلین دەپێورێت.",
            benefits: "ڕاگرتنی هایپۆگلیکیمیا، ئازادکردنی گلوکۆز لە کاتی برسێتی یان وەرزش.",
            excess: "گلوکاگۆنۆما — شەکرە، تەرەشماڵی پێست (نێکرۆلایتیک مایگرەتۆری ئێریتێما)، لەدەستدانی کێش.",
            deficiency: "دەگمەن؛ دەکرێت هایپۆگلیکیمیا بکات، بەتایبەت لە منداڵان.",
            treatment: "نەشتەرگەری بۆ گلوکاگۆنۆما؛ ئاناڵۆگی سۆماتۆستاتین بۆ کۆنتڕۆلی نیشانە.",
          },
        ],
      },
      {
        id: "reproductive",
        name: "هۆرمۆنە زاوزێیەکان",
        icon: "venus",
        hormones: [
          {
            name: "تێستۆستیرۆن",
            source: "گون (خانەی لایدیگ) و کۆرتەکسی ئەدرینال",
            function: "هۆرمۆنی سەرەکی جێندەری نێر — بەرهەمهێنانی سپێرم، ماسوولکە، چوستی ئێسک، ویست، و دەنگی قووڵ هاندادەکات.",
            labTest: "تێستۆستیرۆنی کۆی و ئازاد (بەیانی)، LH، FSH، SHBG؛ هەندێک جار 17-OH پرۆجێستیرۆن و DHT.",
            benefits: "زاوزێی نێر، هێزی ماسوولکە، بەرهەمهێنانی خوێنی سوور، مۆد، و کارێ جێندەری پاراستن.",
            excess: "بەکاربردنی ئاناڵۆلیک ستییرۆید یان تیۆم — ئاگرە، حەبە، تاو، کێشەی پرۆستات، نەزۆخی (FSH/LH کەم دەکات).",
            deficiency: "هایپۆگۆنادیزم — کەمی ویست، ناتوانی ئیرێکشن، ماندووبوون، خەمۆکی، لەدەستدانی ماسوولکە، ئۆستیۆپۆرۆزیس.",
            treatment: "چارەسەری جێگرەوەی تێستۆستیرۆن (جل، دەرزی، پاتچ)؛ چارەسەری هۆکاری پیوێتاری یان گون.",
          },
          {
            name: "ئێسترادیۆل (ئێسترۆجین)",
            source: "هێلکەدان (خانە گرانیولۆسا)، پلاسێنتا، شانە چەوری",
            function: "هۆرمۆنی سەرەکی جێندەری مێ — سوورهاتی مانگانە، گەشەی مەمک، چوستی ئێسک، و تەندروستی دڵ ڕێک دەخات.",
            labTest: "ئێسترادیۆلی خوێن (E2) لە ڕۆژی تایبەتی سوورهات، FSH، LH، AMH بۆ یەدەکی هێلکەدان.",
            benefits: "زاوزێی مێ، تەندروستی زێ، نەرمی پێست، چوستی ئێسک، و پاراستنی دڵ (پیش وەستانی مانگانە).",
            excess: "باڵادەستی ئێسترۆجین — سوورهاتی قورس، فیبرۆید، ئازاری مەم، مەترسی زیاتر بۆ سەرەتانی مەم.",
            deficiency: "وەستانی مانگانە یان شکستی هێلکەدانی زوو — گەرمی هەڵاتن، ئۆستیۆپۆرۆزیس، وشکی زێ، گۆڕینی مۆد.",
            treatment: "چارەسەری جێگرەوەی هۆرمۆن (HRT)؛ چارەسەری هۆکار (PCOS، شکستی هێلکەدان).",
          },
          {
            name: "پرۆجێستیرۆن",
            source: "هێلکەدان (جەسپی زەرد)، پلاسێنتا لە کاتی دووگیانی",
            function: "زێئامادە دەکات بۆ دووگیانی، پۆشەری زێ پاراستن، گەشەی ئیمبریۆ پشتیوانی دەکات.",
            labTest: "پرۆجێستیرۆنی خوێن (ڕۆژی ٢١ی سوورهات)، ئۆڤولەیشن دڵنیا دەکات؛ لە چارەسەری نەزۆخیدا چاودێری دەکرێت.",
            benefits: "دووگیانی چاک دەکات، سوورهاتی مانگانە ڕێک دەخات، کاریاری مۆد لەسەر مێشک.",
            excess: "دەکرێت ئاوسان، ئازاری مەم، گۆڕینی مۆد بکات؛ بەرزی لە دووگیانی ئاسایی.",
            deficiency: "کەموكوڕی فازی لوتیاڵ — سوورهاتی نائاسایی، نەزۆخی، لەدەستدانی دووگیانی دووبارە.",
            treatment: "پاڵاوتنی پرۆجێستیرۆن (فەمی، زێ) بۆ پشتیوانی فازی لوتیاڵ لە نەزۆخیدا.",
          },
          {
            name: "FSH و LH — گۆنادۆتڕۆپینەکان",
            source: "پێشی پیوێتاری",
            function: "FSH گەشەی فۆلیکڵ/سپێرم هاندادەکات؛ LH ئۆڤولەیشن و بەرهەمهێنانی تێستۆستیرۆن/ئێسترادیۆل هاندادەکات.",
            labTest: "FSH، LHی خوێن (ڕۆژی ٣ بۆ ئافرەتان)، لەگەڵ ئێسترادیۆل/تێستۆستیرۆن بۆ هەڵسەنگاندنی زاوزێ.",
            benefits: "سوورهاتی زاوزێی ئافرەتان و بەرهەمهێنانی سپێرمی پیاوان ڕێک دەخات.",
            excess: "کەمی هێلکەدان/گونی یەکەم — وەستانی مانگانە، گەرمی هەڵاتن، نەزۆخی.",
            deficiency: "هایپۆگۆنادیزمی هایپۆگۆنادۆتڕۆپیک (سیندرۆمی کاڵمان) — درەنگبوونی پێگەیشتن، نەزۆخی.",
            treatment: "دەرزی HMG، FSH، hCG؛ GnRHی پاڵسەیل بۆ هۆکارە هایپۆتالامیکەکان.",
          },
          {
            name: "مێلاتۆنین",
            source: "غدەی پینێال",
            function: "ڕۆژی ڕۆژانە و سوورهاتی خەو-بیدار ڕێک دەخات؛ لە تاریکیدا دروست دەکرێت.",
            labTest: "مێلاتۆنی لعابی (شەو)، 6-سلفاتۆکسی مێلاتۆنین لە میز؛ بە دەگمەن بەکاردێت لە کلینیکدا.",
            benefits: "خەوی چاک، کاریگەری دژە ئۆکسیدان، ڕێکخستنی بەرگری.",
            excess: "پاڵاوتنی زۆر — خەواڵی ڕۆژ، خەوی ڕەنگاوڕەنگ، سەرئێشە.",
            deficiency: "بیخۆیی، نیشانەکانی jet lag، تێکچوونی ڕۆژی ڕۆژانە (کاریشیفت).",
            treatment: "پاڵاوتنی مێلاتۆنین (0.5-5 ملگ)، پاکیزەی خەو، چارەسەری ڕووناکی.",
          },
        ],
      },
    ],
    hormoneFields: {
      source: "سەرچاوە",
      function: "کار",
      labTest: "ککردن و شیکاری تاقیگە",
      benefits: "سوود (ئاستی ئاسایی)",
      excess: "نەخۆشیی زیادی (Hyper)",
      deficiency: "نەخۆشیی کەمی (Hypo)",
      treatment: "چارەسەری",
      learnMore: "کارتێکە کلیک بکە بۆ وردەکاری",
    },
    labMethods: [
      {
        name: "ELISA — تاقیکردنەوەی ئیمونۆسۆربێنتی ئەنزیمی",
        description: "باوترین ڕێگا. ئەنتیبۆدی بەستراو بە ئەنزیم بەکاردێت بۆ دۆزینەوە و پێوانەی کۆنسنتراسیۆنی هۆرمۆن لە ڕێگەی گۆڕینی ڕەنگ.",
        use: "بەکارهاتوو بۆ: ئینسۆلین، کۆرتزۆل، پرۆلاکتین، TSH، LH، FSH، ئێسترادیۆل، تێستۆستیرۆن.",
      },
      {
        name: "RIA — ئیمونۆئەسەی ڕادیۆئەکتیڤ",
        description: "تەکنیکی کلاسیکی زۆر هەستیار کە هۆرمۆنە لێبەرگیراوەکان بەکاربهێنێت بۆ ڕکابەریی هۆرمۆنەکانی نەخۆش.",
        use: "بەکارهاتوو بۆ: هۆرمۆنی کۆنسنتراسیۆن کەم (T3، T4، ڤیتامین D، ئەلدۆستیرۆن).",
      },
      {
        name: "LC-MS/MS — لیکیود کرۆماتۆگرافی-مەس سپێکتڕۆمێتری",
        description: "ستانداردی زێڕین بۆ ڕاستی. گەردەکانی هۆرمۆن جیا دەکات بە کێش و بار؛ دەکرێت چەند هۆرمۆنێک دۆزێتەوە یەکجار.",
        use: "بەکارهاتوو بۆ: هۆرمۆنە ستییرۆیدییەکان (تێستۆستیرۆن، کۆرتزۆل، ئەلدۆستیرۆن، ڤیتامین D)، بەتایبەت لە ئاستی کەمدا.",
      },
      {
        name: "CLIA — ئیمونۆئەسەی کیمیۆلۆمینیسێنت",
        description: "ڕێگای نوێی ئۆتۆماتیک کە کاردانەوەی کیمیایی ڕووناکی بەکاردێت؛ زۆر هەستیارە و لە زۆربەی ئەنالایزەری نەخۆشخانە بەکاردێت.",
        use: "بەکارهاتوو بۆ: TSH، T4ی ئازاد، hCG، ترۆپۆنین، پرۆلاکتین، GH.",
      },
      {
        name: "کۆکردنەوەی میزی 24 کاتژمێر",
        description: "هەموو میز کۆدەکرێت بۆ 24 کاتژمێر بۆ پێوانەی ئازادکردنی هۆرمۆنی ڕۆژانە؛ بەسوود بۆ کاتێکۆلامین و کۆرتزۆل و مێتانێفرین.",
        use: "بەکارهاتوو بۆ: هەڵسەنگاندنی فیۆکرۆمۆسایتۆما، چاودێری سیندرۆمی کوشینگ.",
      },
      {
        name: "تاقیکردنەوەی هاندان و کەمکردنەوە",
        description: "تاقیکردنەوەی کارکردن کە تۆڵە دەکاتەوەی ئەسوی ئەندۆکرین — هاندەر (ACTH، TRH، ئینسۆلین) یان کەمکەر (دێکسامێتازۆن) دراوە و وەڵامی هۆرمۆن دەپێورێت.",
        use: "بەکارهاتوو بۆ: هاندانی ACTH (ئەدیسمۆن)، کەمکردنەوەی دێکسامێتازۆن (کوشینگ)، کەمکردنەوەی گلوکۆز (ئەکرۆمێگاڵی).",
      },
    ],
    sexHormonesContent: {
      male: {
        title: "سیستەمی زاوزێی نێر",
        symbol: "♂",
        primary: "هۆرمۆنی سەرەکی: تێستۆستیرۆن",
        hormones: ["تێستۆستیرۆن", "FSH (بەرهەمهێنانی سپێرم)", "LH (هاندانی خانەی لایدیگ)", "ئینهیبین B"],
        role:
          "ئەسوی ئەندۆکرینی زاوزێی نێر دەسوڕێتەوە بۆ ئەسوی هایپۆتالامۆ-پیوێتاری-گۆنادی. GnRH لە هایپۆتالامۆس هاندادەکات LH و FSH لە پیوێتاری. LH بەرهەمهێنانی تێستۆستیرۆن لە خانەی لایدیگ هاندادەکات، لە کاتێکدا FSH بەرهەمهێنانی سپێرم لە تیوبی سێمینیفێرۆس پشتیوانی دەکات. تێستۆستیرۆن ویست، ماسوولکە، چوستی ئێسک، و سیفەتی جێندەری دووەم پاراستن.",
      },
      female: {
        title: "سیستەمی زاوزێی مێ",
        symbol: "♀",
        primary: "هۆرمۆنە سەرەکییەکان: ئێسترۆجین و پرۆجێستیرۆن",
        hormones: ["ئێسترادیۆل (E2)", "پرۆجێستیرۆن", "FSH (گەشەی فۆلیکڵ)", "LH (مەزنی ئۆڤولەیشن)", "AMH (یەدەکی هێلکەدان)"],
        role:
          "ئەسوی ئەندۆکرینی زاوزێی مێ ئەسوی هایپۆتالامۆ-پیوێتاری-هێلکەدانە. سوورهاتی مانگانەی دووبارە بەرهەم دەهێنێت: FSH گەشەی فۆلیکڵ هاندادەکات، ئێسترادیۆل بۆ لوتی ئۆڤولەیشن، LH ئۆڤولەیشن دەکات. فۆلیکڵی تێکشکاو دەبێتە جەسپی زەرد کە پرۆجێستیرۆن دروست دەکات. ئەگەر دووگیانی ڕووینەدات، ئاستی هۆرمۆن دادەبەزێت و سوورهات دەست پێدەکات.",
      },
      cycleTitle: "سوورهاتی مانگانە",
      cycleDescription:
        "سوورهاتی ٢٨ ڕۆژ (ناوەند) دابەشکراو بۆ فازی فۆلیکڵۆلەر (ئێسترادیۆل بەرز دەبێت)، ئۆڤولەیشن (لوتی LH ~ڕۆژی ١٤)، و فازی لوتیاڵ (پرۆجێستیرۆن باڵادەست). کەموكوڕی هۆرمۆن PCOS، وەستانی سوورهات، و نەزۆخی دەکات.",
    },
    chat: {
      title: "یاریدەدەری ئەندۆکرینۆلۆژیی شادۆ بایۆ",
      subtitle: "بەهێزی زیرەکی دەستکرد · پسپۆڕ لە هۆرمۆن و غدە",
      placeholder: "پرسیار بکە دەربارەی هەر هۆرمۆن، غدە، تاقیگە، یان چارەسەری...",
      send: "ناردن",
      thinking: "بیر دەکاتەوە...",
      welcome:
        "سڵاو! من یاریدەدەری ئەندۆکرینۆلۆژیی شادۆ بایۆم. دەتوانم وەڵامی پرسیاری ورد بدەمەوە دەربارەی هەر هۆرمۆن (ئینسۆلین، کۆرتزۆل، هۆرمۆنی تایرۆید، هۆرمۆنە جێندەرییەکان)، غدە ئەندۆکرینەکان (پیوێتاری، تایرۆید، ئەدرینال، پانکرێس، گۆناد)، تاقیگە و ڕێگاکانی دۆزینەوەی، نەخۆشییەکان (شەکرە، کوشینگ، ئەدیسمۆن، هایپەر/هایپۆتایرۆید)، و چارەسەرییەکان. چۆن دەتوانم ئەندۆکرینۆلۆژی لەگەڵت ئەمڕۆ بکۆڵم؟",
      disclaimer: "ئەم یاریدەدەرە تەنیا زانیاری فێرکاری دەدات، نە چاکسازی پزیشکی. هەمیشە سەردانی ئەندۆکرینۆلۆژیست پسپۆڕ بکە.",
      suggestions: [
        "جیاوازی نێوان T3 وT4 ڕوون بکەرەوە",
        "کۆرتزۆل لە تاقیگە چۆن دەپێورێت؟",
        "چی دەبێتە هۆکاری شەکرەی میزی کۆت؟",
        "جیاوازی سوورهاتی هۆرمۆنی نێر و مێ وەسف بکە",
      ],
      error: "هەڵەیەک ڕوویدا. دووبارە هەوڵبدەرەوە.",
      clear: "سڕینەوەی گفتوگۆ",
      role: "یاریدەدەری ئەندۆکرینۆلۆژی زیرەک",
    },
    footer: {
      about: "دەربارەی شادۆ بایۆ",
      aboutText:
        "شادۆ بایۆ سەکۆیەکی فرەزمانی ئەندۆکرینۆلۆژییە کە زانیاری ورد دەدات دەربارەی هەر هۆرمۆنێک لەشی مرۆڤ — کار، تاقیگە، سوود، نەخۆشی، و چارەسەری — بە کوردی و عەرەبی و ئینگلیزی.",
      quickLinks: "بەستەرە خێراکان",
      contact: "پەیوەندی",
      address: "ناونیشان",
      addressValue: "هەولێر، دوو ساید کەرکووک، کۆلێژی زانست",
      phone: "تەلەفۆن",
      email: "ئیمەیڵ",
      rights: "هەموو مافەکان پارێزراون.",
      disclaimer: "تەنیا بۆ بەکارهێنانی فێرکاری — جێگرەوەی ئامۆژگاری پزیشکی پسپۆڕ نییە.",
    },
  },
};

export const getTranslation = (lang: Language): Translation => translations[lang] || translations.en;
