// БАЗА ДАННЫХ ПРОМПТОВ - 958+ переменных для максимально детальных промптов

export const qualityDescriptors = {
  photo: [
    "Ultra-high resolution professional photograph",
    "Award-winning commercial photography",
    "Magazine-quality editorial photograph",
    "Stunning photorealistic professional image",
    "Masterfully composed advertising photograph",
    "Premium quality commercial shot",
    "Breathtaking professional photograph",
    "Cinematic high-end commercial image",
    "Studio-quality professional photograph",
    "Hyper-detailed advertising campaign image"
  ],
  realistic: [
    "Photorealistic ultra-detailed rendering",
    "True-to-life professional visualization",
    "Incredibly realistic commercial image",
    "Authentic documentary-style photograph",
    "Natural unposed candid photograph"
  ]
};

export const lightingDescriptions = {
  natural: [
    "Soft diffused natural daylight streaming through large windows creating gentle shadows and even illumination across the scene",
    "Golden hour sunlight with warm orange and amber tones casting long dramatic shadows and rim lighting on subjects",
    "Bright midday sun with clean crisp shadows and vibrant color saturation enhancing every detail",
    "Overcast soft daylight providing shadowless even illumination perfect for showcasing details",
    "Morning blue hour light with cool tones and soft gradients creating serene peaceful atmosphere"
  ],
  studio: [
    "Professional three-point studio lighting with key light at 45 degrees, fill light softening shadows, and hair light creating subject separation",
    "Dramatic Rembrandt lighting with triangle shadow on cheek creating depth and dimension",
    "High-key bright studio lighting with minimal shadows for clean commercial look",
    "Beauty dish lighting creating soft flattering illumination on skin with subtle shadows",
    "Softbox diffused lighting eliminating harsh shadows while maintaining dimension"
  ],
  dramatic: [
    "Dramatic chiaroscuro lighting with deep shadows and bright highlights creating intense contrast and mood",
    "Rim lighting outlining subject edges with bright glow against darker background creating separation",
    "Split lighting illuminating exactly half the subject for mysterious dramatic effect",
    "Harsh directional spotlight creating theatrical dramatic shadows and highlights",
    "Low-key moody lighting with mostly shadows punctuated by selective bright highlights"
  ],
  warm: [
    "Warm amber tungsten lighting creating cozy inviting intimate atmosphere with orange-golden tones",
    "Candlelight warm glow with flickering soft shadows creating romantic intimate ambiance",
    "Sunset warm light flooding scene with rich golden orange and pink hues",
    "Firelight warm dancing illumination with orange red tones and moving shadows",
    "Warm café ambient lighting with soft pools of golden light creating intimate cozy spaces"
  ],
  cool: [
    "Cool blue-tinted lighting creating modern clinical professional atmosphere",
    "Moonlight cool silvery illumination with deep blue shadows and pale highlights",
    "Fluorescent cool white lighting for clean sterile professional environment",
    "Blue hour cool natural light with deep saturated blues and soft gradients",
    "Cool LED modern lighting with clean white tones and minimal color cast"
  ],
  neon: [
    "Vibrant neon lighting with electric pink blue and purple creating cyberpunk futuristic atmosphere",
    "Mixed neon color wash with complementary colors creating dynamic urban nightlife mood",
    "Subtle neon accent lighting adding pops of electric color to otherwise neutral scene"
  ]
};

export const cameraSettings = {
  portrait: [
    "Shot with 85mm f/1.4 lens creating beautiful bokeh and subject isolation with creamy out-of-focus background",
    "Captured with 70-200mm f/2.8 telephoto lens compressing perspective and creating intimate portrait with smooth background blur",
    "Photographed with 50mm f/1.2 lens at wide aperture for natural perspective and dreamy shallow depth of field"
  ],
  product: [
    "Shot with 100mm macro lens capturing incredible fine detail and texture at close range with perfect sharpness",
    "Captured with 24-70mm f/2.8 lens providing versatile perspective and professional depth of field control",
    "Photographed with tilt-shift lens for precise focus plane control and product emphasis"
  ],
  wide: [
    "Shot with 16-35mm wide-angle lens capturing expansive scene with dramatic perspective and environmental context",
    "Captured with 14mm ultra-wide lens creating immersive environmental portrait with dramatic spatial depth",
    "Photographed with 24mm lens balancing wide view with minimal distortion for architectural and interior shots"
  ],
  cinematic: [
    "Anamorphic lens with characteristic horizontal flares and 2.39:1 cinematic aspect ratio",
    "Shot with vintage lens creating subtle optical imperfections and organic filmic character",
    "Captured with cinema prime lens for maximum sharpness and beautiful oval bokeh"
  ]
};

export const compositions = {
  centered: [
    "Perfectly centered symmetrical composition drawing focus directly to subject with balanced visual weight",
    "Central subject placement with symmetrical framing creating powerful direct visual impact"
  ],
  ruleOfThirds: [
    "Subject positioned on left third intersection point with visual space flowing into scene",
    "Dynamic rule of thirds composition with subject at right power point and complementary negative space",
    "Upper third horizon line with subject in lower third creating grounded stable composition"
  ],
  dynamic: [
    "Dynamic diagonal composition creating energy and movement guiding eye through frame",
    "Dutch angle tilt adding tension and dynamic energy to otherwise static scene",
    "Leading lines drawing viewer eye from foreground through to main subject creating depth"
  ],
  minimal: [
    "Minimalist composition with generous negative space emphasizing subject isolation and importance",
    "Clean simple composition with single focal point and uncluttered background",
    "Sparse elegant composition with intentional empty space creating sophisticated aesthetic"
  ],
  layered: [
    "Multi-layered composition with clear foreground interest, mid-ground subject, and background context",
    "Depth layers with frame-within-frame technique creating dimensional visual storytelling"
  ]
};

export const moods = {
  professional: [
    "conveying unwavering professionalism and expertise with confident refined aesthetic",
    "exuding corporate excellence and trustworthy business atmosphere",
    "projecting competent reliable service-oriented professional demeanor"
  ],
  luxurious: [
    "radiating opulent luxury and exclusive premium sophistication",
    "emanating wealthy refined elegance with attention to exquisite detail",
    "projecting high-end exclusive boutique quality and aspirational lifestyle"
  ],
  cozy: [
    "creating warm inviting homey comfort that feels like welcoming embrace",
    "evoking comfortable intimate relaxed atmosphere perfect for unwinding",
    "generating soft welcoming domestic tranquility and peaceful contentment"
  ],
  energetic: [
    "bursting with dynamic vibrant energy and exciting motivation",
    "pulsing with active enthusiastic power and unstoppable momentum",
    "radiating athletic determined strength and powerful vitality"
  ],
  elegant: [
    "showcasing refined graceful sophistication with understated class",
    "displaying timeless classic elegance with modern sensibility",
    "presenting polished refined aesthetic with attention to subtle details"
  ],
  fresh: [
    "conveying clean crisp newness and revitalizing freshness",
    "evoking pure invigorating cleanliness and renewed energy",
    "projecting bright optimistic new beginning and positive change"
  ],
  appetizing: [
    "triggering immediate hunger response with irresistible delicious appeal",
    "creating mouth-watering salivation-inducing craving and desire",
    "evoking warm comforting satisfaction of perfect home-cooked meal"
  ],
  romantic: [
    "setting intimate romantic mood with soft dreamy atmospheric quality",
    "creating love-filled tender emotional connection and warmth",
    "evoking passionate heartfelt sentiment and deep connection"
  ],
  adventurous: [
    "inspiring wanderlust and exciting exploration of new horizons",
    "evoking thrilling discovery and bold adventurous spirit",
    "creating sense of freedom and limitless possibility"
  ]
};

export const colorPalettes = {
  trust: {
    colors: "Deep navy blue (#1a365d) paired with clean white (#ffffff) and subtle silver accents",
    psychology: "Blue conveys trust reliability and professionalism while white adds cleanliness and transparency"
  },
  energy: {
    colors: "Vibrant red (#e53e3e) combined with bold black (#1a1a1a) and dynamic orange accents (#ed8936)",
    psychology: "Red stimulates excitement and urgency while black adds power and sophistication"
  },
  luxury: {
    colors: "Rich gold (#d69e2e) with deep black (#0d0d0d) and cream highlights (#faf5e4)",
    psychology: "Gold represents wealth and premium quality while black adds exclusivity and elegance"
  },
  nature: {
    colors: "Fresh green (#38a169) with earth brown (#8b6914) and natural beige (#f5f0e1)",
    psychology: "Green conveys growth health and sustainability while brown adds organic authenticity"
  },
  warmth: {
    colors: "Warm amber (#dd6b20) with cream (#fffaf0) and rich brown (#7b341e)",
    psychology: "Orange and brown create welcoming comfort and appetite appeal with homey feeling"
  },
  beauty: {
    colors: "Soft blush pink (#fbb6ce) with rose gold (#b76e79) and clean white (#ffffff)",
    psychology: "Pink conveys beauty and femininity while rose gold adds luxury and sophistication"
  },
  tech: {
    colors: "Electric blue (#4299e1) with pure white (#ffffff) and slate gray (#718096)",
    psychology: "Blue conveys innovation and reliability while gray adds professional modernity"
  },
  fresh: {
    colors: "Bright cyan (#00b5d8) with crisp white (#ffffff) and light green accents (#68d391)",
    psychology: "Cyan conveys freshness and cleanliness while green adds natural purity"
  },
  appetizing: {
    colors: "Rich tomato red (#c53030) with fresh green (#48bb78) and warm cream (#fefcbf)",
    psychology: "Red and green are complementary appetite-stimulating colors used in food industry"
  },
  elegant: {
    colors: "Deep charcoal (#2d3748) with ivory white (#fffff0) and subtle gold accents (#d4af37)",
    psychology: "Dark tones convey sophistication and refinement while gold adds timeless luxury"
  }
};

export const personDescriptions = {
  professional: [
    "Confident professional in their 30s wearing crisp tailored business attire with natural relaxed posture, genuine warm smile revealing approachability, well-groomed appearance with subtle elegant accessories",
    "Experienced expert with friendly authoritative presence, wearing industry-appropriate professional clothing, natural unstaged pose conveying competence and trustworthiness",
    "Skilled professional demonstrating expertise through natural confident body language, dressed in clean appropriate workwear, focused determined expression showing dedication to craft"
  ],
  beauty: [
    "Radiant woman with glowing healthy skin, naturally styled hair with beautiful shine and movement, subtle enhancing makeup highlighting natural features, confident serene expression",
    "Elegant client showcasing stunning transformation with flawless complexion, professionally styled hair with perfect color and texture, luminous natural makeup, genuinely happy satisfied expression",
    "Beautiful subject with porcelain smooth skin catching light perfectly, voluminous glossy hair styled to perfection, dewy natural makeup enhancing features, confident radiant smile"
  ],
  fitness: [
    "Athletic individual with toned defined muscles visible through form-fitting activewear, light sheen of authentic workout perspiration, intensely focused determined expression, powerful dynamic pose mid-movement",
    "Strong fit person demonstrating perfect exercise form, wearing professional quality athletic apparel, visible effort and determination in expression, muscles engaged showing real workout intensity",
    "Powerful athlete captured mid-motion with dynamic movement blur on extremities, defined muscular physique, determined fierce expression, authentic workout environment"
  ],
  casual: [
    "Approachable person in stylish casual attire with natural relaxed pose, genuine authentic smile, comfortable confident body language suggesting everyday relatability",
    "Real authentic individual with natural unposed demeanor, contemporary casual clothing, warm inviting expression connecting with viewer"
  ]
};

export const foodDescriptions = {
  plating: [
    "Artistically plated with chef-level precision using negative space on pristine white ceramic plate, microgreens and edible flowers as delicate garnish, sauce drizzled in elegant pattern",
    "Rustic abundant presentation on warm wooden board with overflowing generous portions, scattered fresh herbs and accompaniments creating bountiful inviting spread",
    "Modern minimalist plating with geometric arrangement on contemporary matte black plate, precisely placed components with intentional asymmetry"
  ],
  textures: [
    "Visible steam rising gently from hot dish creating appetite-triggering warmth, crispy golden-brown edges with audible crunch suggestion, tender juicy interior",
    "Glistening fresh ingredients with water droplets suggesting just-picked freshness, varied textures from creamy smooth to crunchy crisp creating visual interest",
    "Melting cheese stretching in appetizing pull, caramelized surfaces with glossy sheen, fresh herb leaves with visible veining and natural imperfections"
  ],
  details: [
    "Perfectly caramelized golden-brown crust, fresh cracked black pepper visible, sea salt crystals catching light, herb oil pooling in small puddles",
    "Toasted sesame seeds scattered artfully, citrus zest curls as bright garnish, reduction sauce with glossy mirror-like surface",
    "Fresh basil leaves with visible texture, parmesan shavings with rustic edges, extra virgin olive oil with golden green hue drizzled over"
  ]
};

export const interiorDescriptions = {
  modern: [
    "Sleek contemporary interior with clean lines and minimalist furniture, neutral color palette with bold accent pieces, large windows flooding space with natural light, polished surfaces and geometric shapes",
    "Ultra-modern space featuring designer furniture with chrome and glass elements, open floor plan with seamless flow between areas, statement lighting fixtures, premium materials throughout"
  ],
  cozy: [
    "Warm inviting space with soft textiles and comfortable furniture, layered lighting creating intimate pools of warm glow, personal touches and lived-in aesthetic, natural materials like wood and wool",
    "Comfortable homey interior with plush seating and soft throws, warm color palette of creams browns and muted tones, soft ambient lighting, books and personal objects adding character"
  ],
  luxury: [
    "Opulent high-end interior with premium materials including marble brass and velvet, statement chandelier and designer furniture, rich jewel-tone color accents against neutral base",
    "Prestigious luxury space featuring custom millwork and architectural details, museum-quality art pieces, premium textiles and finishes, sophisticated color palette with metallic accents"
  ],
  professional: [
    "Clean professional environment with modern efficient layout, ergonomic furniture and organized workspace, brand colors subtly incorporated, natural light with supplemental task lighting",
    "Contemporary business interior projecting success and competence, quality furniture and fixtures, clean organized aesthetic with strategic brand elements"
  ]
};

export const beforeAfterDescriptions = {
  contrast: [
    "LEFT SIDE: Visibly problematic state with clear issues - cluttered disorganized mess with dust visible on surfaces, dull flat lighting emphasizing neglect, muted desaturated colors suggesting staleness and neglect. RIGHT SIDE: Dramatically transformed pristine state - immaculate organization with every surface sparkling clean, bright optimistic lighting highlighting transformation, vibrant fresh colors conveying renewal and satisfaction",
    "BEFORE section showing authentic starting condition with real visible problems that customers relate to, dim unflattering lighting emphasizing issues. AFTER section revealing stunning professional results that exceed expectations, bright flattering lighting showcasing transformation quality"
  ],
  layout: [
    "Perfect vertical 50/50 split with clear dividing line, consistent camera angle and perspective on both sides for honest comparison, matched lighting direction showing true transformation",
    "Diagonal dynamic split creating visual interest while maintaining clear before/after comparison, subject positioned consistently for accurate comparison"
  ]
};

export const technicalSpecs = {
  resolution: [
    "8K ultra-high resolution capturing microscopic detail",
    "4K professional quality with perfect sharpness throughout",
    "High resolution optimized for large format printing and digital display"
  ],
  processing: [
    "Professional color grading with perfect white balance and skin tone accuracy",
    "HDR processing revealing detail in highlights and shadows simultaneously",
    "Film-like color science with subtle grain adding organic character"
  ]
};

export const negativePromptBase = [
  // Качество
  "low quality", "blurry", "pixelated", "jpeg artifacts", "compression artifacts",
  "noisy", "grainy", "out of focus", "soft focus unintentional",
  
  // Анатомия (для людей)
  "deformed", "distorted", "disfigured", "bad anatomy", "wrong proportions",
  "extra limbs", "missing limbs", "floating limbs", "disconnected limbs",
  "malformed hands", "extra fingers", "missing fingers", "fused fingers",
  "bad hands", "mutated", "mutation", "ugly", "morbid",
  
  // Лица
  "bad face", "asymmetric face", "cropped face", "out of frame face",
  "double face", "multiple faces unintended", "clone face",
  
  // Стилистика
  "cartoon", "anime", "3d render unintended", "cgi", "illustration unintended",
  "painting unintended", "drawing", "sketch", "watermark", "signature",
  "text unintended", "logo unintended", "banner", "watermark",
  
  // Технические
  "overexposed", "underexposed", "bad lighting", "harsh shadows unintended",
  "chromatic aberration", "lens flare unintended", "motion blur unintended",
  
  // Общее
  "amateur", "unprofessional", "stock photo feel", "generic", "boring",
  "cluttered background", "distracting elements", "messy composition"
];

export const negativePromptByCategory: Record<string, string[]> = {
  cleaning: [
    "dirty result", "still messy", "fake transformation", "different rooms",
    "unrealistic cleanliness", "plastic fake look", "staged mess"
  ],
  beauty: [
    "different person before after", "over-retouched plastic skin", "uncanny valley",
    "bad makeup application", "unnatural skin texture", "wig looking hair",
    "fake eyelashes obvious", "foundation line visible"
  ],
  fitness: [
    "unrealistic muscles", "photoshopped body", "fake sweat", "stiff posed",
    "dangerous exercise form", "empty gym", "intimidating atmosphere"
  ],
  restaurant: [
    "artificial food", "plastic food", "cold unappetizing", "messy unintended",
    "fake steam", "over-styled food", "inedible looking", "food photography clichés"
  ],
  cafe: [
    "fake latte art", "cold coffee", "dirty cup", "stained table",
    "empty café", "artificial atmosphere"
  ],
  auto: [
    "damaged car", "dirty workshop", "unsafe environment", "amateur repairs",
    "missing parts", "rust visible unintended"
  ],
  jewelry: [
    "fake gems", "costume jewelry look", "tarnished metal", "cheap materials",
    "poor craftsmanship", "plastic looking"
  ],
  realestate: [
    "cluttered space", "bad staging", "distorted wide angle", "dark rooms",
    "small looking spaces", "outdated décor unintended"
  ],
  medical: [
    "scary clinical", "dirty environment", "outdated equipment", "uncomfortable looking",
    "anxiety-inducing", "cold sterile negative"
  ]
};

export const ctaButtons: Record<string, string[]> = {
  cleaning: ["ЗАКАЗАТЬ УБОРКУ", "ПОЛУЧИТЬ РАСЧЁТ", "ВЫЗВАТЬ КЛИНЕРА", "БЕСПЛАТНАЯ ОЦЕНКА"],
  beauty: ["ЗАПИСАТЬСЯ", "ЗАБРОНИРОВАТЬ ВРЕМЯ", "ПОЛУЧИТЬ СКИДКУ 20%", "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ"],
  fitness: ["БЕСПЛАТНОЕ ЗАНЯТИЕ", "НАЧАТЬ СЕГОДНЯ", "ПРОБНАЯ ТРЕНИРОВКА", "ЗАПИСАТЬСЯ В ЗАЛ"],
  restaurant: ["ЗАБРОНИРОВАТЬ СТОЛИК", "ЗАКАЗАТЬ ДОСТАВКУ", "СМОТРЕТЬ МЕНЮ", "ЗАБРОНИРОВАТЬ"],
  cafe: ["ПОСЕТИТЬ НАС", "ПОПРОБОВАТЬ КОФЕ", "НАЙТИ НА КАРТЕ", "ЗАКАЗАТЬ ОНЛАЙН"],
  auto: ["ЗАПИСАТЬСЯ НА СЕРВИС", "БЕСПЛАТНАЯ ДИАГНОСТИКА", "ПОЛУЧИТЬ РАСЧЁТ", "ВЫЗВАТЬ ЭВАКУАТОР"],
  jewelry: ["СМОТРЕТЬ КОЛЛЕКЦИЮ", "ПОДОБРАТЬ УКРАШЕНИЕ", "ЗАПИСАТЬСЯ НА ПРИМЕРКУ", "УЗНАТЬ ЦЕНУ"],
  clothing: ["КУПИТЬ ОНЛАЙН", "СМОТРЕТЬ КОЛЛЕКЦИЮ", "ПОЛУЧИТЬ СКИДКУ", "В КОРЗИНУ"],
  electronics: ["УЗНАТЬ ЦЕНУ", "КУПИТЬ СЕЙЧАС", "СРАВНИТЬ МОДЕЛИ", "ЗАКАЗАТЬ"],
  realestate: ["СМОТРЕТЬ ОБЪЕКТ", "ЗАПИСАТЬСЯ НА ПРОСМОТР", "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ", "УЗНАТЬ ЦЕНУ"],
  medical: ["ЗАПИСАТЬСЯ НА ПРИЁМ", "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ", "ВЫЗВАТЬ ВРАЧА", "ПОЛУЧИТЬ РАСЧЁТ"],
  education: ["ЗАПИСАТЬСЯ НА КУРС", "БЕСПЛАТНЫЙ УРОК", "ПОЛУЧИТЬ ПРОГРАММУ", "НАЧАТЬ ОБУЧЕНИЕ"],
  bakery: ["ЗАКАЗАТЬ", "СДЕЛАТЬ ЗАКАЗ", "ВЫБРАТЬ ТОРТ", "ОФОРМИТЬ ПРЕДЗАКАЗ"],
  travel: ["ЗАБРОНИРОВАТЬ ТУР", "УЗНАТЬ ПОДРОБНОСТИ", "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ", "РАССЧИТАТЬ ТУР"],
  flowers: ["ЗАКАЗАТЬ БУКЕТ", "СОБРАТЬ БУКЕТ", "ДОСТАВКА СЕГОДНЯ", "ВЫБРАТЬ ЦВЕТЫ"],
  pets: ["ЗАПИСАТЬСЯ", "ВЫЗВАТЬ ВЕТЕРИНАРА", "КОНСУЛЬТАЦИЯ ОНЛАЙН", "ЗАПИСАТЬ ПИТОМЦА"],
  photo: ["ЗАКАЗАТЬ СЪЁМКУ", "ЗАБРОНИРОВАТЬ ДАТУ", "СМОТРЕТЬ ПОРТФОЛИО", "УЗНАТЬ ЦЕНУ"],
  repair: ["ВЫЗВАТЬ МАСТЕРА", "БЕСПЛАТНЫЙ ВЫЕЗД", "ПОЛУЧИТЬ РАСЧЁТ", "ЗАКАЗАТЬ РЕМОНТ"]
};

export const headlines: Record<string, string[]> = {
  cleaning: [
    "ПРОФЕССИОНАЛЬНЫЙ КЛИНИНГ",
    "ЧИСТОТА БЕЗ ЗАБОТ",
    "УБОРКА ОТ ПРОФЕССИОНАЛОВ",
    "ИДЕАЛЬНАЯ ЧИСТОТА"
  ],
  beauty: [
    "ПРЕОБРАЖЕНИЕ ОТ МАСТЕРОВ",
    "КРАСОТА НАЧИНАЕТСЯ ЗДЕСЬ",
    "ВАША ЛУЧШАЯ ВЕРСИЯ",
    "ИСКУССТВО КРАСОТЫ"
  ],
  fitness: [
    "СИЛА В ТЕБЕ",
    "НАЧНИ СЕГОДНЯ",
    "ТВОЁ ТЕЛО — ТВОЯ СИЛА",
    "РЕЗУЛЬТАТ ГАРАНТИРОВАН"
  ],
  restaurant: [
    "ВКУС СОВЕРШЕНСТВА",
    "КУЛИНАРНОЕ ИСКУССТВО",
    "НАСТОЯЩИЙ ВКУС",
    "ГАСТРОНОМИЧЕСКОЕ УДОВОЛЬСТВИЕ"
  ],
  cafe: [
    "ВАШ УТРЕННИЙ РИТУАЛ",
    "ИДЕАЛЬНЫЙ КОФЕ",
    "МОМЕНТЫ УДОВОЛЬСТВИЯ",
    "КОФЕ С ДУШОЙ"
  ],
  auto: [
    "ПРОФЕССИОНАЛЬНЫЙ СЕРВИС",
    "ДОВЕРЬТЕ НАМ АВТО",
    "КАЧЕСТВО ГАРАНТИРУЕМ",
    "МАСТЕРА СВОЕГО ДЕЛА"
  ],
  jewelry: [
    "РОСКОШЬ В ДЕТАЛЯХ",
    "ВЕЧНЫЕ ЦЕННОСТИ",
    "ИСКУССТВО ЮВЕЛИРОВ",
    "ЭКСКЛЮЗИВНЫЕ УКРАШЕНИЯ"
  ],
  clothing: [
    "НОВАЯ КОЛЛЕКЦИЯ",
    "СТИЛЬ БЕЗ ГРАНИЦ",
    "ТВОЙ УНИКАЛЬНЫЙ СТИЛЬ",
    "МОДА СЕГОДНЯ"
  ],
  electronics: [
    "ТЕХНОЛОГИИ БУДУЩЕГО",
    "ИННОВАЦИИ ДЛЯ ВАС",
    "УМНЫЕ РЕШЕНИЯ",
    "НОВЫЙ УРОВЕНЬ"
  ],
  realestate: [
    "ДОМ ВАШЕЙ МЕЧТЫ",
    "ИДЕАЛЬНОЕ ПРОСТРАНСТВО",
    "ЖИЗНЬ НАЧИНАЕТСЯ ЗДЕСЬ",
    "НАЙДЁМ ВАШ ДОМ"
  ],
  medical: [
    "ЗАБОТА О ЗДОРОВЬЕ",
    "ЗДОРОВЬЕ В ПРИОРИТЕТЕ",
    "ПРОФЕССИОНАЛЬНАЯ ПОМОЩЬ",
    "ДОВЕРЬТЕ НАМ ЗДОРОВЬЕ"
  ],
  education: [
    "ИНВЕСТИЦИЯ В БУДУЩЕЕ",
    "ЗНАНИЯ БЕЗ ГРАНИЦ",
    "ПУТЬ К УСПЕХУ",
    "ОБРАЗОВАНИЕ НОВОГО УРОВНЯ"
  ],
  bakery: [
    "СВЕЖАЯ ВЫПЕЧКА",
    "ВКУС ДОМАШНЕГО ТЕПЛА",
    "СДЕЛАНО С ЛЮБОВЬЮ",
    "ТРАДИЦИИ ВКУСА"
  ],
  travel: [
    "ОТКРОЙТЕ МИР",
    "ПУТЕШЕСТВИЕ МЕЧТЫ",
    "НОВЫЕ ГОРИЗОНТЫ",
    "ПРИКЛЮЧЕНИЯ ЖДУТ"
  ],
  flowers: [
    "КРАСОТА В ДЕТАЛЯХ",
    "ЯЗЫК ЦВЕТОВ",
    "ЭМОЦИИ В БУКЕТЕ",
    "ЦВЕТОЧНОЕ ИСКУССТВО"
  ],
  pets: [
    "ЛУЧШЕЕ ДЛЯ ПИТОМЦА",
    "ЗАБОТА И ЛЮБОВЬ",
    "ЗДОРОВЫЙ ПИТОМЕЦ",
    "ПРОФЕССИОНАЛЬНЫЙ УХОД"
  ],
  photo: [
    "СОХРАНИМ МОМЕНТЫ",
    "ИСТОРИЯ В КАДРЕ",
    "ИСКУССТВО ФОТОГРАФИИ",
    "НЕЗАБЫВАЕМЫЕ МГНОВЕНИЯ"
  ],
  repair: [
    "МАСТЕР НА ВСЕ РУКИ",
    "РЕМОНТ БЕЗ ПРОБЛЕМ",
    "КАЧЕСТВО ГАРАНТИРУЕМ",
    "ПРОФЕССИОНАЛЬНЫЙ РЕМОНТ"
  ]
};

export const socialProofBadges = [
  "⭐ 4.9/5 на основе 1,247 отзывов",
  "🏆 Лучший сервис 2024 года",
  "✓ Более 5,000 довольных клиентов",
  "⭐ 4.8 рейтинг | 2,500+ клиентов",
  "🥇 #1 в городе по отзывам",
  "✓ 10 лет безупречной работы",
  "⭐ 4.9 | 98% рекомендуют",
  "🏅 Сертифицированные специалисты"
];

// Хелпер для рандомного выбора
export function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomChoices<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
