/**
 * NanoBanana Pro PromptEngine v5.0
 * AI-Powered + Conversion Psychology
 * 
 * Фичи:
 * - AI Semantic Understanding (анализ контекста)
 * - 15+ психологических триггеров конверсии
 * - Ultra-detailed prompts (1500-2500 символов)
 * - A/B психологические варианты
 * - Максимальная конверсия креативов
 */

// ============================================
// TYPES
// ============================================

export type GenerationMode = 'image' | 'video' | '3d' | 'storyboard' | 'campaign';
export type OutputModel = 'gemini' | 'flux' | 'midjourney' | 'dalle' | 'sora' | 'runway' | 'kling' | 'meshy';
export type ContentStyle = 'professional' | 'ugc' | 'cinematic' | 'editorial' | 'viral' | 'aesthetic';
export type Platform = 'instagram' | 'tiktok' | 'youtube' | 'facebook' | 'telegram' | 'linkedin';
export type Format = 'feed' | 'stories' | 'reels' | 'shorts' | 'banner' | 'thumbnail' | 'carousel';
export type PsychologyApproach = 'fomo' | 'trust' | 'desire' | 'pain' | 'social' | 'urgency' | 'authority' | 'reciprocity';

export interface CharacterProfile {
  id: string;
  name: string;
  appearance: string;
  clothing: string;
  personality: string;
  age: string;
  features: string[];
}

export interface GenerationSettings {
  mode: GenerationMode;
  model: OutputModel;
  style: ContentStyle;
  platform: Platform;
  format: Format;
  detailLevel: 'short' | 'medium' | 'detailed' | 'ultra';
  language: 'ru' | 'en' | 'mixed';
  variants: number;
  character?: CharacterProfile;
  seasonalTheme?: string;
  trendingHook?: string;
  psychologyApproach?: PsychologyApproach;
}

export interface SemanticAnalysis {
  businessType: string;
  businessName?: string;
  location?: string;
  targetAudience: {
    gender: 'male' | 'female' | 'all';
    ageRange: string;
    interests: string[];
    painPoints: string[];
    desires: string[];
  };
  usp: string[];
  emotionalTone: string;
  priceSegment: 'budget' | 'mid' | 'premium' | 'luxury';
  competitiveAdvantage: string[];
  seasonalRelevance?: string;
  urgencyLevel: 'low' | 'medium' | 'high';
}

export interface PsychologyTriggers {
  primary: string;
  secondary: string[];
  emotionalHooks: string[];
  visualCues: string[];
  colorPsychology: string;
  bodyLanguage: string;
  facialExpression: string;
  environmentalPsychology: string;
}

export interface PromptBlocks {
  // Core
  quality: string;
  subject: string;
  action: string;
  environment: string;
  lighting: string;
  camera: string;
  colors: string;
  mood: string;
  style: string;
  details: string;
  
  // Psychology
  emotionalTrigger: string;
  visualHierarchy: string;
  attentionGrabber: string;
  trustSignals: string;
  
  // Video
  motion?: string;
  duration?: string;
  audio?: string;
  
  // 3D
  geometry?: string;
  material?: string;
  
  // Overlay
  textOverlay?: string;
  cta?: string;
  socialProof?: string;
  
  negative: string;
}

export interface GeneratedPrompt {
  id: string;
  input: string;
  mainPrompt: string;
  negativePrompt: string;
  blocks: PromptBlocks;
  settings: GenerationSettings;
  semanticAnalysis: SemanticAnalysis;
  psychologyTriggers: PsychologyTriggers;
  timestamp: Date;
  isFavorite: boolean;
  variant: number;
  psychologyApproach: PsychologyApproach;
  conversionScore: number;
  modelFormatted: Record<OutputModel, string>;
}

export interface StoryboardFrame {
  frameNumber: number;
  duration: string;
  prompt: string;
  voiceover?: string;
  music?: string;
  transition?: string;
  psychologyFocus: string;
}

export interface Campaign {
  name: string;
  goal: string;
  prompts: GeneratedPrompt[];
  storyboard?: StoryboardFrame[];
  hooks: string[];
  psychologyStrategy: string;
}

// ============================================
// PSYCHOLOGY DATABASE
// ============================================

const PSYCHOLOGY_DB = {
  // Психологические триггеры конверсии
  triggers: {
    fomo: {
      name: 'Fear of Missing Out',
      description: 'Страх упустить выгоду',
      visualCues: [
        'countdown timer visible in corner',
        'limited stock indicator showing low numbers',
        'crowd of people reaching for product',
        '"ПОСЛЕДНИЕ 3 МЕСТА" text overlay with urgency',
        'other customers happily walking away with product'
      ],
      emotions: ['urgency', 'anxiety', 'excitement', 'competitive desire'],
      colors: ['red for urgency', 'orange for energy', 'yellow for attention'],
      bodyLanguage: 'leaning forward eagerly, hands reaching out, eyes wide with desire',
      facialExpression: 'excited anticipation, slightly worried about missing out, eager smile'
    },
    trust: {
      name: 'Trust & Authority',
      description: 'Доверие и авторитет',
      visualCues: [
        'professional certifications and badges visible',
        'clean organized professional environment',
        'expert wearing professional attire with confident posture',
        'customer testimonial quotes floating nearby',
        'brand consistency in colors and styling'
      ],
      emotions: ['security', 'confidence', 'relief', 'reassurance'],
      colors: ['blue for trust', 'white for purity', 'green for safety'],
      bodyLanguage: 'open confident posture, direct eye contact, genuine smile, relaxed shoulders',
      facialExpression: 'warm trustworthy smile, kind eyes, approachable yet professional'
    },
    desire: {
      name: 'Desire & Aspiration',
      description: 'Желание и стремление',
      visualCues: [
        'aspirational lifestyle in background',
        'luxury details subtly visible',
        'transformation result prominently displayed',
        'dream state achieved visualization',
        'success indicators (nice car, beautiful home, fit body)'
      ],
      emotions: ['longing', 'aspiration', 'motivation', 'self-improvement desire'],
      colors: ['gold for luxury', 'purple for aspiration', 'rose gold for elegance'],
      bodyLanguage: 'confident successful posture, chin slightly raised, power pose',
      facialExpression: 'satisfied accomplished smile, dreamy aspirational gaze, confident expression'
    },
    pain: {
      name: 'Pain Point Agitation',
      description: 'Усиление болевой точки',
      visualCues: [
        'before state showing clear problem',
        'frustrated person dealing with issue',
        'visual contrast between struggle and solution',
        'problem magnified for emphasis',
        'relief moment when solution appears'
      ],
      emotions: ['frustration', 'recognition', 'hope', 'relief'],
      colors: ['gray for problem', 'muted tones for pain', 'bright colors for solution'],
      bodyLanguage: 'before: slumped frustrated posture / after: relieved open posture',
      facialExpression: 'before: stressed furrowed brow / after: relieved genuine smile'
    },
    social: {
      name: 'Social Proof',
      description: 'Социальное доказательство',
      visualCues: [
        'multiple happy customers visible',
        'rating stars prominently displayed (4.9★)',
        'number of customers served counter',
        'real customer photos and testimonials',
        'crowd of satisfied people in background'
      ],
      emotions: ['belonging', 'validation', 'confidence in choice', 'peer approval'],
      colors: ['warm community colors', 'yellow for happiness', 'green for approval'],
      bodyLanguage: 'group of happy people together, inclusive welcoming gestures',
      facialExpression: 'genuine happy smiles, people looking at each other approvingly'
    },
    urgency: {
      name: 'Time Urgency',
      description: 'Срочность и ограниченность',
      visualCues: [
        'countdown timer or clock visible',
        'TODAY ONLY banner prominent',
        'calendar with date circled',
        'hourglass with sand running out',
        'flash sale visual indicators'
      ],
      emotions: ['urgency', 'decisive action', 'fear of delay', 'immediate desire'],
      colors: ['red for urgency', 'orange for action', 'black for contrast'],
      bodyLanguage: 'dynamic action pose, moving quickly, decisive gestures',
      facialExpression: 'determined focused expression, ready to act immediately'
    },
    authority: {
      name: 'Expert Authority',
      description: 'Экспертный авторитет',
      visualCues: [
        'expert in professional setting',
        'diplomas and certifications on wall',
        'professional equipment visible',
        'years of experience badge',
        'media mentions and press logos'
      ],
      emotions: ['respect', 'confidence', 'trust in expertise', 'reassurance'],
      colors: ['navy blue for authority', 'gold for prestige', 'white for professionalism'],
      bodyLanguage: 'authoritative confident stance, hands gesturing while explaining',
      facialExpression: 'knowledgeable confident expression, slight knowing smile'
    },
    reciprocity: {
      name: 'Reciprocity',
      description: 'Взаимность (давать чтобы получить)',
      visualCues: [
        'free gift or bonus prominently shown',
        'generous offer visualization',
        'gift wrapping or present imagery',
        'value being given first',
        'free sample or trial visible'
      ],
      emotions: ['gratitude', 'obligation to reciprocate', 'pleasant surprise', 'valued feeling'],
      colors: ['warm generous colors', 'gift wrap colors', 'celebratory tones'],
      bodyLanguage: 'giving generous gesture, open palms offering, welcoming arms',
      facialExpression: 'generous warm smile, giving expression, kind eyes'
    }
  },

  // Conversion-оптимизированные элементы
  conversionElements: {
    eyeTracking: {
      fPattern: 'Place key elements along F-pattern: top left logo, horizontal headline, left-side content flow',
      zPattern: 'Guide eye in Z-pattern: top-left hook → top-right visual → bottom-left benefit → bottom-right CTA',
      goldenSpiral: 'Position main subject at golden spiral focal point for natural eye attraction',
      ruleOfThirds: 'Place key elements at intersection points of rule of thirds grid'
    },
    colorPsychology: {
      red: 'Urgency, passion, appetite, action, sale. Use for CTAs and urgent offers.',
      orange: 'Energy, enthusiasm, warmth, action. Great for call-to-action buttons.',
      yellow: 'Optimism, clarity, warmth, attention. Use sparingly for highlights.',
      green: 'Growth, health, tranquility, money. Trust for financial, health, eco.',
      blue: 'Trust, security, stability, calm. Professional services, tech, finance.',
      purple: 'Luxury, creativity, wisdom, royalty. Premium brands, beauty.',
      pink: 'Romance, femininity, care, sweetness. Beauty, fashion, romantic.',
      black: 'Sophistication, luxury, power, elegance. Premium, luxury, fashion.',
      white: 'Purity, cleanliness, simplicity, space. Medical, minimal, clean.',
      gold: 'Prestige, luxury, success, premium. Luxury brands, premium offers.'
    },
    visualHierarchy: {
      size: 'Largest element = most important. CTA button should be prominent.',
      contrast: 'High contrast draws attention. Use contrasting CTA color.',
      position: 'Top-left and center get most attention. Place hook there.',
      whitespace: 'Whitespace around elements increases perceived importance.',
      direction: 'Use visual cues (arrows, gaze direction) to guide to CTA.'
    },
    attentionGrabbers: {
      faces: 'Human faces, especially eyes and smiles, grab attention instantly',
      motion: 'Implied motion or action creates visual interest and energy',
      contrast: 'High contrast areas attract eye first',
      unusual: 'Unexpected or pattern-interrupting elements stop scroll',
      emotion: 'Strong emotional expressions are magnetic to human attention'
    }
  },

  // Детальные описания людей для максимальной конверсии
  personDescriptions: {
    trustworthy_professional: `Confident professional in their 30s with warm approachable demeanor. Wearing crisp clean business attire that signals competence without being intimidating. Genuine warm smile reaching their eyes creating crow's feet wrinkles that signal authenticity. Direct eye contact with viewer creating personal connection. Relaxed open body posture with shoulders back, conveying confidence and approachability. Subtle professional makeup/grooming that enhances natural features. Hands visible in open gesture suggesting transparency and honesty. Slight forward lean indicating engagement and interest in helping. Clean manicured appearance suggesting attention to detail.`,
    
    relatable_customer: `Everyday relatable person in their late 20s-early 30s who looks like someone you'd know personally. Natural minimal styling with authentic imperfections that build trust. Genuine emotional expression - real smile with slight asymmetry that reads as authentic. Casual comfortable clothing that target audience would wear. Body language showing satisfaction and relief after using product/service. Natural lighting on face showing real skin texture. Hair naturally styled, not overly polished. Expression of genuine happiness and satisfaction that doesn't look staged.`,
    
    aspirational_success: `Attractive confident person embodying the success that target audience aspires to. Glowing healthy appearance suggesting vitality and success. Wearing quality clothing and accessories that signal achieved status. Confident powerful posture - shoulders back, chin slightly elevated. Expression of calm satisfaction and accomplishment. Subtle luxury indicators in styling and environment. Eyes that convey knowing confidence of someone who has figured it out. Natural effortless elegance that feels attainable with right choices.`,
    
    expert_authority: `Distinguished professional with visible expertise markers. Slightly mature appearance (35-50) suggesting years of experience. Wearing industry-appropriate professional attire with quality details. Intelligent engaged expression suggesting depth of knowledge. Hands gesturing in explanatory manner showing active teaching. Environment includes professional certifications, books, or tools of trade. Direct confident gaze that commands respect without intimidation. Posture of someone comfortable with their expertise and ready to share it.`,
    
    transformed_happy: `Person showing obvious positive transformation result. Before energy: tired, stressed, dissatisfied visible in posture and expression. After energy: radiant, energized, satisfied visible in every detail. Glowing healthy skin suggesting improved wellness. Genuine bright smile showing joy of transformation. Confident proud posture of someone who achieved their goal. Eyes sparkling with new confidence and self-love. Clothing and styling upgraded to reflect new self-image. Body language open and proud, ready to show off results.`
  },

  // Детальные описания эмоций
  emotionalExpressions: {
    genuine_happiness: `Authentic Duchenne smile with crow's feet wrinkles around eyes, slightly raised cheeks creating apple shapes, relaxed brow, sparkling eyes with visible light reflection, slight head tilt suggesting warmth, natural teeth showing with relaxed lips, overall expression of genuine joy that engages viewer emotionally`,
    
    excited_anticipation: `Eyes widened with anticipation, eyebrows raised in excitement, slight forward lean of face, lips parted in eager smile, visible energy in expression, bright alert eyes, engaged focused attention, body language leaning toward subject of excitement`,
    
    relieved_satisfaction: `Relaxed brow after tension release, soft genuine smile of relief, slightly closed eyes suggesting savoring moment, exhale expression with relaxed shoulders, peaceful content demeanor, weight lifted from expression, calm satisfied eyes`,
    
    confident_empowerment: `Direct steady eye contact, slight knowing smile, chin level or slightly raised, relaxed yet alert expression, self-assured gaze, shoulders back confidence visible in face, subtle power in expression without arrogance`,
    
    warm_trust: `Soft genuine smile, kind eyes with warmth visible, open approachable expression, slight head tilt showing engagement, relaxed natural brow, inviting welcoming demeanor, authentic unguarded expression that builds trust`
  },

  // Максимально детальные описания окружения
  environmentDetails: {
    professional_clean: `Immaculately organized modern space with intentional minimalist design. Clean white walls with perfect paint finish. Professional lighting creating even illumination without harsh shadows. Quality furniture with clean lines visible in background. Plants adding life without clutter. Everything in its place suggesting competence and attention to detail. Subtle brand colors incorporated in decor. Floor spotless and reflective. Air feeling fresh and clean. Temperature comfortable. Slight depth of field keeping focus on subject while environment supports professionalism.`,
    
    cozy_inviting: `Warm intimate space that feels like a welcoming embrace. Soft natural light filtering through sheer curtains creating gentle glow. Comfortable furniture with plush textures inviting relaxation. Warm color palette of creams, soft browns, and muted earth tones. Subtle texture visible in textiles - knit throws, linen pillows. Gentle ambient lighting from multiple sources creating depth. Plants and natural elements adding life. Personal touches suggesting lived-in authenticity. Slight steam or warmth visible in air. Comfortable temperature feeling. Space that makes viewer want to be there.`,
    
    luxury_premium: `Sophisticated high-end environment communicating quality and exclusivity. Rich materials visible - marble, leather, brushed metals, fine woods. Strategic lighting highlighting luxury details and creating atmosphere. Perfectly curated decor with museum-quality precision. Subtle luxury brand indicators without being gaudy. Space and negative space used deliberately. Fresh flowers or high-end greenery. Immaculate cleanliness that speaks to quality. Architectural details and high ceilings suggesting premium real estate. Everything suggesting that being here means you've arrived.`,
    
    authentic_real: `Real authentic environment that feels genuine and relatable. Lived-in but clean space with personality. Natural imperfections that build trust - a slightly messy desk, personal items visible. Good natural lighting from windows. Real furniture that regular people own. Personal photos or decorations visible. Space that target audience would recognize as similar to their own. Authenticity signals that this is not a staged stock photo environment. Comfortable casual feeling that puts viewer at ease.`
  },

  // Детальные описания освещения для конверсии
  lightingDetails: {
    trust_building: `Soft diffused lighting from multiple sources creating even illumination that feels honest and transparent. No harsh shadows that could create sinister feeling. Slight warmth in color temperature (3200-4000K) creating welcoming feeling. Light wrapping around subject face reducing unflattering shadows. Catchlights visible in eyes creating life and connection. Overall feeling of openness and nothing to hide.`,
    
    premium_luxury: `Sophisticated dramatic lighting with intentional contrast creating depth and interest. Key light positioned to sculpt features beautifully. Subtle rim light separating subject from background creating dimensional quality. Rich shadows that add mystery and sophistication without darkness. Color temperature balanced for accurate rich color reproduction. Lighting that would be at home in high-end magazine editorial.`,
    
    energetic_action: `Dynamic lighting with strong directional quality creating sense of movement and energy. Higher contrast adding visual punch and excitement. Possible colored accent lights adding energy. Light suggesting motion and action. Bright highlights creating vibrant energetic feeling. Overall lighting that makes viewer feel excited and ready to act.`,
    
    warm_emotional: `Golden warm lighting creating emotional intimate feeling. Lower color temperature (2700-3200K) evoking sunset warmth. Soft quality reducing harsh edges and creating gentle mood. Light that flatters skin tones and creates healthy glow. Slight lens flare or light leak adding cinematic emotion. Lighting that triggers emotional response and connection.`
  }
};

// ============================================
// BUSINESS DATABASE (Enhanced)
// ============================================

const BUSINESS_DB: Record<string, {
  name: string;
  keywords: string[];
  targetAudience: {
    primary: string;
    gender: 'male' | 'female' | 'all';
    ageRange: string;
    interests: string[];
    painPoints: string[];
    desires: string[];
  };
  contentTypes: string[];
  environments: string[];
  lighting: string[];
  colors: { primary: string; secondary: string; accent: string; psychology: string };
  ctas: string[];
  hooks: string[];
  trustSignals: string[];
  socialProof: string[];
  urgencyTriggers: string[];
  priceSegment: 'budget' | 'mid' | 'premium' | 'luxury';
}> = {
  cleaning: {
    name: 'Клининг',
    keywords: ['клининг', 'уборк', 'чистк', 'мойк', 'химчистк', 'clean'],
    targetAudience: {
      primary: 'Занятые люди, которые ценят чистоту, но не имеют времени',
      gender: 'all',
      ageRange: '25-55',
      interests: ['комфорт', 'экономия времени', 'чистота', 'порядок'],
      painPoints: [
        'Не хватает времени на уборку',
        'Устаёт после работы',
        'Не умеет убирать профессионально',
        'Хочет чистоту но ненавидит процесс',
        'Стесняется беспорядка перед гостями'
      ],
      desires: [
        'Прийти домой в идеально чистую квартиру',
        'Освободить выходные для семьи',
        'Чувство свежести и порядка',
        'Не думать об уборке вообще',
        'Гордиться своим домом'
      ]
    },
    contentTypes: ['before-after split-screen', 'transformation timelapse', 'satisfying cleaning process', 'happy customer in clean home'],
    environments: ['modern apartment', 'family house', 'luxury condo', 'office space'],
    lighting: ['bright natural daylight', 'before: dim dingy / after: bright fresh', 'clean white illumination'],
    colors: { 
      primary: '#1a73e8', 
      secondary: '#ffffff', 
      accent: '#34a853',
      psychology: 'Blue builds trust and reliability, white represents cleanliness and purity, green adds freshness'
    },
    ctas: ['ЗАКАЗАТЬ УБОРКУ', 'БЕСПЛАТНЫЙ РАСЧЁТ', 'ВЫЗВАТЬ СЕГОДНЯ', 'ЧИСТОТА ЗА 2 ЧАСА'],
    hooks: ['POV: ты пришёл домой, а там идеально чисто', 'За 2 часа — как после ремонта', 'Соседи думают мы переехали'],
    trustSignals: ['847+ довольных клиентов', 'Рейтинг 4.9 из 5', 'Работаем с 2015 года', 'Гарантия чистоты'],
    socialProof: ['★★★★★ "Наконец-то нашла своих клинеров!"', '1000+ убранных квартир', '"Как в отеле!" — Мария К.'],
    urgencyTriggers: ['Скидка 20% до конца недели', 'Осталось 3 слота на сегодня', 'Запишись сейчас — уборка завтра'],
    priceSegment: 'mid'
  },
  beauty: {
    name: 'Салон красоты',
    keywords: ['салон', 'красот', 'парикмахер', 'маникюр', 'косметолог', 'стилист', 'макияж', 'барбер', 'spa', 'спа', 'brow', 'lash'],
    targetAudience: {
      primary: 'Женщины, которые хотят выглядеть и чувствовать себя красивыми',
      gender: 'female',
      ageRange: '20-55',
      interests: ['красота', 'мода', 'уход за собой', 'тренды', 'selfie'],
      painPoints: [
        'Не довольна своей внешностью',
        'Не умеет делать укладку/макияж сама',
        'Предыдущий мастер испортил',
        'Хочет перемен но боится',
        'Не знает что ей идёт'
      ],
      desires: [
        'Выглядеть на миллион',
        'Получать комплименты',
        'Чувствовать себя уверенно',
        'Удивить всех новым образом',
        'Выглядеть моложе/свежее'
      ]
    },
    contentTypes: ['dramatic before-after transformation', 'happy client reveal reaction', 'stylist at work process', 'satisfied client selfie'],
    environments: ['modern luxury salon', 'aesthetic treatment room', 'glamorous styling station'],
    lighting: ['soft flattering beauty lighting', 'ring light perfect glow', 'golden hour warmth'],
    colors: { 
      primary: '#d53f8c', 
      secondary: '#faf5ff', 
      accent: '#d69e2e',
      psychology: 'Pink evokes femininity and beauty, gold adds luxury and premium feeling, soft purple adds sophistication'
    },
    ctas: ['ЗАПИСАТЬСЯ', 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ', 'ХОЧУ ТАК ЖЕ', 'ПРЕОБРАЗИТЬСЯ'],
    hooks: ['Клиентка расплакалась увидев результат', 'Муж не узнал', 'Подруги требуют контакт мастера'],
    trustSignals: ['Мастер с опытом 10+ лет', 'Обучение в Москве и Милане', 'Только премиум материалы'],
    socialProof: ['★★★★★ "Лучший мастер города!"', '3000+ довольных клиентов', 'Запись за 2 недели вперёд'],
    urgencyTriggers: ['-30% на первое посещение', 'Осталось 2 окошка на эту неделю', 'Только до конца месяца'],
    priceSegment: 'premium'
  },
  restaurant: {
    name: 'Ресторан',
    keywords: ['ресторан', 'кухн', 'еда', 'шеф', 'меню', 'restaurant', 'food', 'доставка еды'],
    targetAudience: {
      primary: 'Люди, которые ценят вкусную еду и атмосферу',
      gender: 'all',
      ageRange: '25-60',
      interests: ['гастрономия', 'свидания', 'деловые встречи', 'семейные праздники'],
      painPoints: [
        'Надоела домашняя еда',
        'Не знает куда пойти на свидание',
        'Хочет впечатлить партнёра/клиента',
        'Ищет особенный опыт',
        'Разочарован другими ресторанами'
      ],
      desires: [
        'Попробовать что-то невероятно вкусное',
        'Провести особенный вечер',
        'Впечатлить гостей',
        'Насладиться атмосферой',
        'Открыть для себя новые вкусы'
      ]
    },
    contentTypes: ['appetizing food close-up with steam', 'chef preparing signature dish', 'elegant plating moment', 'cozy restaurant ambiance'],
    environments: ['fine dining restaurant', 'cozy italian trattoria', 'modern fusion kitchen', 'romantic candlelit space'],
    lighting: ['warm golden appetizing light', 'candlelit romantic glow', 'dramatic chef spotlight'],
    colors: { 
      primary: '#c53030', 
      secondary: '#fffbeb', 
      accent: '#2f855a',
      psychology: 'Red stimulates appetite and passion, warm creams add comfort, green suggests freshness of ingredients'
    },
    ctas: ['ЗАБРОНИРОВАТЬ СТОЛИК', 'СМОТРЕТЬ МЕНЮ', 'ЗАКАЗАТЬ ДОСТАВКУ', 'ПОПРОБОВАТЬ'],
    hooks: ['Шеф-повар готовит это блюдо 8 часов', 'Секретный рецепт из Италии', 'Первый укус — и вы влюбитесь'],
    trustSignals: ['Шеф из мишленовского ресторана', 'Лучший ресторан города 2024', 'Свежие продукты каждое утро'],
    socialProof: ['★★★★★ "Лучшая паста в городе!"', 'Бронь за неделю вперёд', '500+ 5-звёздочных отзывов'],
    urgencyTriggers: ['Столики на выходные заканчиваются', 'Специальное меню только сегодня', 'Последние места на этот вечер'],
    priceSegment: 'premium'
  },
  fitness: {
    name: 'Фитнес',
    keywords: ['фитнес', 'спорт', 'тренер', 'зал', 'тренировк', 'йог', 'gym', 'workout'],
    targetAudience: {
      primary: 'Люди, которые хотят изменить своё тело и здоровье',
      gender: 'all',
      ageRange: '18-50',
      interests: ['здоровье', 'спорт', 'похудение', 'мышцы', 'энергия'],
      painPoints: [
        'Не доволен своим телом',
        'Нет энергии и сил',
        'Не знает как правильно тренироваться',
        'Начинал много раз и бросал',
        'Боится выглядеть глупо в зале'
      ],
      desires: [
        'Тело мечты',
        'Бесконечная энергия',
        'Уверенность в себе',
        'Восхищённые взгляды',
        'Здоровье и сила'
      ]
    },
    contentTypes: ['powerful workout action shot', 'transformation before-after', 'trainer motivating client', 'group energy class'],
    environments: ['modern premium gym', 'crossfit box', 'outdoor workout', 'personal training studio'],
    lighting: ['dramatic gym lighting with contrast', 'sweat-highlighting spots', 'energetic neon accents'],
    colors: { 
      primary: '#e53e3e', 
      secondary: '#1a202c', 
      accent: '#ed8936',
      psychology: 'Red for energy and power, black for strength and determination, orange for action and motivation'
    },
    ctas: ['БЕСПЛАТНАЯ ТРЕНИРОВКА', 'НАЧАТЬ СЕЙЧАС', 'ЗАПИСАТЬСЯ К ТРЕНЕРУ', 'ИЗМЕНИТЬ ТЕЛО'],
    hooks: ['Это упражнение сжигает 500 ккал', '30 дней = новое тело', 'Тренер раскрыл секрет похудения'],
    trustSignals: ['Тренер с 15-летним опытом', 'Более 500 трансформаций', 'Сертифицированные методики'],
    socialProof: ['★★★★★ "Минус 15 кг за 3 месяца!"', '95% клиентов достигают цели', 'Результат или возврат денег'],
    urgencyTriggers: ['Первая неделя бесплатно только сейчас', 'Группа стартует через 3 дня', 'Осталось 5 мест со скидкой'],
    priceSegment: 'mid'
  },
  realestate: {
    name: 'Недвижимость',
    keywords: ['недвижимост', 'квартир', 'дом', 'жильё', 'риелтор', 'аренд', 'property', 'apartment'],
    targetAudience: {
      primary: 'Люди, ищущие жильё или инвестиции',
      gender: 'all',
      ageRange: '25-60',
      interests: ['жильё', 'инвестиции', 'семья', 'комфорт', 'статус'],
      painPoints: [
        'Не может найти подходящий вариант',
        'Боится быть обманутым',
        'Не понимает рынок',
        'Живёт в плохих условиях',
        'Хочет улучшить жилищные условия'
      ],
      desires: [
        'Дом мечты',
        'Безопасная инвестиция',
        'Комфорт для семьи',
        'Престижный район',
        'Свой угол наконец-то'
      ]
    },
    contentTypes: ['stunning interior showcase', 'lifestyle in dream home', 'property tour walkthrough', 'neighborhood lifestyle'],
    environments: ['luxury modern apartment', 'cozy family house', 'penthouse with view', 'new development'],
    lighting: ['bright natural daylight flooding space', 'golden hour through windows', 'dramatic architectural lighting'],
    colors: { 
      primary: '#2b6cb0', 
      secondary: '#f7fafc', 
      accent: '#d69e2e',
      psychology: 'Blue for trust and stability in big decisions, white for spaciousness, gold for value and investment'
    },
    ctas: ['СМОТРЕТЬ ОБЪЕКТ', 'ЗАПИСАТЬСЯ НА ПОКАЗ', 'ПОЛУЧИТЬ ПОДБОРКУ', 'УЗНАТЬ ЦЕНУ'],
    hooks: ['Квартира мечты за эту цену?!', 'Риелторы скрывают эти объекты', 'Нашли идеальную для семьи'],
    trustSignals: ['15 лет на рынке', 'Юридическая проверка каждого объекта', 'Личное сопровождение сделки'],
    socialProof: ['★★★★★ "Нашли квартиру за 2 дня!"', '2000+ успешных сделок', 'Рекомендации от клиентов'],
    urgencyTriggers: ['Эксклюзив — только у нас', 'Уже 5 просмотров за сегодня', 'Цена действует до пятницы'],
    priceSegment: 'luxury'
  },
  medical: {
    name: 'Медицина',
    keywords: ['медиц', 'клиник', 'врач', 'доктор', 'стоматолог', 'здоровь', 'лечен', 'dental'],
    targetAudience: {
      primary: 'Люди с проблемами здоровья или профилактикой',
      gender: 'all',
      ageRange: '25-65',
      interests: ['здоровье', 'профилактика', 'качество жизни'],
      painPoints: [
        'Боится врачей и боли',
        'Не доверяет обычным клиникам',
        'Проблема не решается долго',
        'Был негативный опыт',
        'Откладывает визит к врачу'
      ],
      desires: [
        'Решить проблему раз и навсегда',
        'Безболезненное лечение',
        'Доверять своему врачу',
        'Чувствовать себя здоровым',
        'Качественное обслуживание'
      ]
    },
    contentTypes: ['caring doctor consultation', 'modern medical facility', 'happy healthy patient', 'advanced equipment showcase'],
    environments: ['modern bright clinic', 'comfortable treatment room', 'high-tech medical center'],
    lighting: ['clean medical lighting', 'soft reassuring glow', 'bright professional clinical'],
    colors: { 
      primary: '#319795', 
      secondary: '#ffffff', 
      accent: '#4fd1c5',
      psychology: 'Teal combines trust of blue with healing of green, white for sterility and purity, aqua for calm and care'
    },
    ctas: ['ЗАПИСАТЬСЯ К ВРАЧУ', 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ', 'ЗАДАТЬ ВОПРОС', 'УЗНАТЬ СТОИМОСТЬ'],
    hooks: ['Врач честно о том что вам нужно', 'Лечение без боли — это реально', 'Почему другие клиники молчат об этом'],
    trustSignals: ['Врачи с опытом 20+ лет', 'Современное европейское оборудование', 'Гарантия на все процедуры'],
    socialProof: ['★★★★★ "Наконец-то не боюсь стоматолога!"', '10000+ вылеченных пациентов', 'Рекомендуют 97% пациентов'],
    urgencyTriggers: ['Бесплатная диагностика до конца месяца', 'Запись к лучшему врачу открыта', 'Не откладывайте здоровье'],
    priceSegment: 'premium'
  },
  education: {
    name: 'Образование',
    keywords: ['образован', 'обучен', 'курс', 'школ', 'репетитор', 'учёб', 'education', 'course'],
    targetAudience: {
      primary: 'Люди желающие получить новые навыки или знания',
      gender: 'all',
      ageRange: '16-50',
      interests: ['карьера', 'развитие', 'новые навыки', 'заработок'],
      painPoints: [
        'Не хватает знаний для продвижения',
        'Не может найти хорошую работу',
        'Боится что уже поздно учиться',
        'Пробовал другие курсы без результата',
        'Не хватает времени на обучение'
      ],
      desires: [
        'Высокооплачиваемая работа',
        'Новая востребованная профессия',
        'Признание и уважение',
        'Финансовая свобода',
        'Уверенность в завтрашнем дне'
      ]
    },
    contentTypes: ['successful student testimonial', 'engaging lesson moment', 'before-after career transformation', 'expert teacher explaining'],
    environments: ['modern classroom', 'cozy online learning setup', 'corporate training room'],
    lighting: ['bright inspiring light', 'focused study atmosphere', 'professional presentation lighting'],
    colors: { 
      primary: '#3182ce', 
      secondary: '#f0fff4', 
      accent: '#38a169',
      psychology: 'Blue for knowledge and trust, green for growth and success, white for clarity and focus'
    },
    ctas: ['ЗАПИСАТЬСЯ НА КУРС', 'БЕСПЛАТНЫЙ УРОК', 'НАЧАТЬ ОБУЧЕНИЕ', 'ПОЛУЧИТЬ ПРОГРАММУ'],
    hooks: ['Выучил за 30 дней и получил оффер', 'Метод который работает у всех', 'Почему 95% курсов не работают'],
    trustSignals: ['Преподаватели из топ-компаний', 'Гарантия трудоустройства', '15 000+ выпускников'],
    socialProof: ['★★★★★ "Через 2 месяца работал в Яндексе!"', '89% находят работу за 3 месяца', 'Средняя зп выпускников 150К'],
    urgencyTriggers: ['Набор группы через 5 дней', 'Скидка 40% последние часы', 'Только 20 мест на поток'],
    priceSegment: 'mid'
  },
  auto: {
    name: 'Автосервис',
    keywords: ['авто', 'машин', 'сервис', 'ремонт авто', 'детейлинг', 'шиномонтаж', 'car'],
    targetAudience: {
      primary: 'Автовладельцы',
      gender: 'male',
      ageRange: '25-55',
      interests: ['автомобили', 'техника', 'качество', 'надёжность'],
      painPoints: [
        'Не доверяет автосервисам',
        'Боится что обманут с ценой',
        'Был негативный опыт ремонта',
        'Не понимает что с машиной',
        'Не хочет тратить время на ожидание'
      ],
      desires: [
        'Надёжный сервис которому можно доверять',
        'Честные цены без накруток',
        'Качественный ремонт с первого раза',
        'Машина как новая',
        'Быстрое обслуживание'
      ]
    },
    contentTypes: ['expert mechanic at work', 'before-after car detail', 'diagnostic process', 'satisfied owner with car'],
    environments: ['professional garage', 'modern service center', 'detailing studio'],
    lighting: ['bright workshop lights', 'dramatic car spotlight', 'detail-revealing illumination'],
    colors: { 
      primary: '#2d3748', 
      secondary: '#ed8936', 
      accent: '#e53e3e',
      psychology: 'Dark gray for professionalism and expertise, orange for action and energy, red for attention and quality'
    },
    ctas: ['ЗАПИСАТЬСЯ НА СЕРВИС', 'БЕСПЛАТНАЯ ДИАГНОСТИКА', 'РАССЧИТАТЬ СТОИМОСТЬ', 'ВЫЗВАТЬ МАСТЕРА'],
    hooks: ['Мастер нашёл скрытую проблему', 'Так обманывают на других СТО', 'До/После детейлинга — шок'],
    trustSignals: ['Мастера с опытом 20+ лет', 'Гарантия на все работы 2 года', 'Оригинальные запчасти'],
    socialProof: ['★★★★★ "Наконец нашёл своего мастера!"', '5000+ отремонтированных авто', 'Рекомендуют 94% клиентов'],
    urgencyTriggers: ['Диагностика бесплатно только эта неделя', 'Запчасти заканчиваются', 'Запись на следующую неделю закрывается'],
    priceSegment: 'mid'
  },
  cafe: {
    name: 'Кофейня',
    keywords: ['кафе', 'кофе', 'кофейн', 'coffee', 'cafe', 'бариста', 'латте'],
    targetAudience: {
      primary: 'Любители качественного кофе и уютной атмосферы',
      gender: 'all',
      ageRange: '20-45',
      interests: ['кофе', 'атмосфера', 'работа из кафе', 'встречи', 'эстетика'],
      painPoints: [
        'Надоел невкусный кофе',
        'Нет уютного места для работы/встреч',
        'Хочется особенной атмосферы',
        'Везде одинаковые сетевые кофейни',
        'Нужно место чтобы перезарядиться'
      ],
      desires: [
        'Идеальный кофе каждое утро',
        'Уютное место как второй дом',
        'Эстетичное пространство для фото',
        'Особенная атмосфера',
        'Место где тебя знают'
      ]
    },
    contentTypes: ['perfect latte art close-up', 'cozy atmosphere shot', 'barista crafting coffee', 'aesthetic coffee moment'],
    environments: ['hip indie coffee shop', 'cozy neighborhood cafe', 'aesthetic minimalist space'],
    lighting: ['warm morning window light', 'cozy ambient glow', 'soft inviting illumination'],
    colors: { 
      primary: '#744210', 
      secondary: '#fffaf0', 
      accent: '#38a169',
      psychology: 'Brown for coffee warmth and comfort, cream for cozy inviting feeling, green for freshness and natural quality'
    },
    ctas: ['НАЙТИ НАС', 'ЗАКАЗАТЬ КОФЕ', 'ПОСМОТРЕТЬ МЕНЮ', 'ЗАБРОНИРОВАТЬ СТОЛИК'],
    hooks: ['Идеальный латте-арт каждое утро', 'Секретный рецепт нашего бариста', 'Место где время останавливается'],
    trustSignals: ['Зёрна specialty класса', 'Бариста-чемпион города', 'Обжарка каждую неделю'],
    socialProof: ['★★★★★ "Лучший кофе в городе!"', 'Точка силы для 500 людей ежедневно', '"Мой второй дом" — постоянные гости'],
    urgencyTriggers: ['Новый сезонный напиток только эта неделя', 'Круассаны заканчиваются к обеду', 'Завтраки до 12:00'],
    priceSegment: 'mid'
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomFromMultiple<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, arr.length));
}

function extractLocation(input: string): string | null {
  const cities = [
    'Москва', 'Москве', 'Питер', 'Санкт-Петербург', 'СПб', 'Казань', 'Казани',
    'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Самара', 'Омск', 'Челябинск',
    'Ростов', 'Уфа', 'Красноярск', 'Пермь', 'Воронеж', 'Волгоград', 'Краснодар',
    'Сочи', 'Актобе', 'Алматы', 'Астана', 'Нур-Султан', 'Минск', 'Киев', 'Ташкент',
    'Дубай', 'Dubai', 'Moscow', 'Saint Petersburg'
  ];
  
  for (const city of cities) {
    if (input.toLowerCase().includes(city.toLowerCase())) {
      return city;
    }
  }
  return null;
}

// ============================================
// AI SEMANTIC ANALYZER
// ============================================

function analyzeInput(input: string): SemanticAnalysis {
  const lowerInput = input.toLowerCase();
  
  // Detect business type
  let businessType = 'restaurant';
  let businessData = BUSINESS_DB.restaurant;
  
  for (const [type, data] of Object.entries(BUSINESS_DB)) {
    if (data.keywords.some(kw => lowerInput.includes(kw))) {
      businessType = type;
      businessData = data;
      break;
    }
  }
  
  // Extract modifiers for segment detection
  const luxuryKeywords = ['люкс', 'премиум', 'vip', 'элит', 'luxury', 'premium', 'exclusive'];
  const budgetKeywords = ['дёшев', 'эконом', 'budget', 'доступн', 'недорог'];
  
  let priceSegment = businessData.priceSegment;
  if (luxuryKeywords.some(kw => lowerInput.includes(kw))) {
    priceSegment = 'luxury';
  } else if (budgetKeywords.some(kw => lowerInput.includes(kw))) {
    priceSegment = 'budget';
  }
  
  // Detect emotional tone
  const energeticKeywords = ['энерги', 'драйв', 'мощ', 'сил', 'dynamic', 'power'];
  const calmKeywords = ['спокой', 'релакс', 'уют', 'комфорт', 'calm', 'cozy'];
  const luxuryTone = ['изыск', 'роскош', 'элегант', 'elegant', 'luxury'];
  
  let emotionalTone = 'professional';
  if (energeticKeywords.some(kw => lowerInput.includes(kw))) {
    emotionalTone = 'energetic';
  } else if (calmKeywords.some(kw => lowerInput.includes(kw))) {
    emotionalTone = 'calm';
  } else if (luxuryTone.some(kw => lowerInput.includes(kw))) {
    emotionalTone = 'luxurious';
  }
  
  // Build USP from input
  const usp: string[] = [];
  if (lowerInput.includes('быстр')) usp.push('Быстрое обслуживание');
  if (lowerInput.includes('качеств')) usp.push('Высокое качество');
  if (lowerInput.includes('гарант')) usp.push('Гарантия результата');
  if (lowerInput.includes('опыт')) usp.push('Большой опыт');
  if (lowerInput.includes('профессион')) usp.push('Профессиональный подход');
  if (usp.length === 0) usp.push('Индивидуальный подход', 'Проверенное качество');
  
  // Urgency detection
  let urgencyLevel: 'low' | 'medium' | 'high' = 'medium';
  if (lowerInput.includes('срочн') || lowerInput.includes('сейчас') || lowerInput.includes('сегодня')) {
    urgencyLevel = 'high';
  }
  
  return {
    businessType,
    businessName: input.trim(),
    location: extractLocation(input) || undefined,
    targetAudience: {
      gender: businessData.targetAudience.gender,
      ageRange: businessData.targetAudience.ageRange,
      interests: businessData.targetAudience.interests,
      painPoints: businessData.targetAudience.painPoints,
      desires: businessData.targetAudience.desires
    },
    usp,
    emotionalTone,
    priceSegment,
    competitiveAdvantage: usp,
    urgencyLevel
  };
}

// ============================================
// PSYCHOLOGY TRIGGER BUILDER
// ============================================

function buildPsychologyTriggers(
  analysis: SemanticAnalysis, 
  approach: PsychologyApproach
): PsychologyTriggers {
  const trigger = PSYCHOLOGY_DB.triggers[approach];
  const businessData = BUSINESS_DB[analysis.businessType as keyof typeof BUSINESS_DB] || BUSINESS_DB.restaurant;
  
  // Build emotional hooks based on pain points and desires
  const emotionalHooks = [
    ...analysis.targetAudience.painPoints.slice(0, 2).map(p => `Address pain: ${p}`),
    ...analysis.targetAudience.desires.slice(0, 2).map(d => `Trigger desire: ${d}`)
  ];
  
  // Color psychology based on approach and business
  const colorPsych = businessData.colors.psychology;
  
  return {
    primary: trigger.name,
    secondary: trigger.emotions,
    emotionalHooks,
    visualCues: trigger.visualCues,
    colorPsychology: colorPsych,
    bodyLanguage: trigger.bodyLanguage,
    facialExpression: trigger.facialExpression,
    environmentalPsychology: PSYCHOLOGY_DB.conversionElements.eyeTracking.ruleOfThirds
  };
}

// ============================================
// ULTRA-DETAILED PROMPT BUILDER
// ============================================

function buildUltraDetailedPrompt(
  analysis: SemanticAnalysis,
  triggers: PsychologyTriggers,
  settings: GenerationSettings,
  variant: number
): PromptBlocks {
  const business = BUSINESS_DB[analysis.businessType as keyof typeof BUSINESS_DB] || BUSINESS_DB.restaurant;
  const psychTrigger = PSYCHOLOGY_DB.triggers[settings.psychologyApproach || 'trust'];
  
  // Select person description based on approach
  let personDesc = PSYCHOLOGY_DB.personDescriptions.trustworthy_professional;
  if (settings.psychologyApproach === 'desire') {
    personDesc = PSYCHOLOGY_DB.personDescriptions.aspirational_success;
  } else if (settings.psychologyApproach === 'pain') {
    personDesc = PSYCHOLOGY_DB.personDescriptions.transformed_happy;
  } else if (settings.psychologyApproach === 'social') {
    personDesc = PSYCHOLOGY_DB.personDescriptions.relatable_customer;
  } else if (settings.psychologyApproach === 'authority') {
    personDesc = PSYCHOLOGY_DB.personDescriptions.expert_authority;
  }
  
  // Select environment based on price segment
  let envDesc = PSYCHOLOGY_DB.environmentDetails.professional_clean;
  if (analysis.priceSegment === 'luxury') {
    envDesc = PSYCHOLOGY_DB.environmentDetails.luxury_premium;
  } else if (analysis.priceSegment === 'budget') {
    envDesc = PSYCHOLOGY_DB.environmentDetails.authentic_real;
  } else if (settings.style === 'ugc') {
    envDesc = PSYCHOLOGY_DB.environmentDetails.authentic_real;
  }
  
  // Select lighting based on emotional tone
  let lightDesc = PSYCHOLOGY_DB.lightingDetails.trust_building;
  if (analysis.emotionalTone === 'energetic') {
    lightDesc = PSYCHOLOGY_DB.lightingDetails.energetic_action;
  } else if (analysis.emotionalTone === 'luxurious') {
    lightDesc = PSYCHOLOGY_DB.lightingDetails.premium_luxury;
  } else if (analysis.emotionalTone === 'calm') {
    lightDesc = PSYCHOLOGY_DB.lightingDetails.warm_emotional;
  }
  
  // Select emotional expression
  let expressionDesc = PSYCHOLOGY_DB.emotionalExpressions.genuine_happiness;
  if (settings.psychologyApproach === 'fomo' || settings.psychologyApproach === 'urgency') {
    expressionDesc = PSYCHOLOGY_DB.emotionalExpressions.excited_anticipation;
  } else if (settings.psychologyApproach === 'pain') {
    expressionDesc = PSYCHOLOGY_DB.emotionalExpressions.relieved_satisfaction;
  } else if (settings.psychologyApproach === 'authority') {
    expressionDesc = PSYCHOLOGY_DB.emotionalExpressions.confident_empowerment;
  }
  
  // Build quality descriptor
  const qualities = [
    'Ultra-high resolution professional photograph with exceptional clarity and microscopic detail',
    'Masterfully composed photorealistic image optimized for maximum viewer engagement',
    'Award-winning commercial photography with perfect technical execution and emotional impact',
    'Premium quality conversion-optimized visual with strategic psychological elements',
    'Hyper-realistic 8K photograph engineered for scroll-stopping attention and emotional connection'
  ];
  
  // Build content type with psychology
  const contentType = randomFrom(business.contentTypes);
  
  // Build detailed subject
  const subjectParts = [
    contentType,
    personDesc,
    expressionDesc,
    triggers.bodyLanguage
  ];
  
  // Location integration
  if (analysis.location) {
    subjectParts.push(`Scene set in ${analysis.location} with locally recognizable elements`);
  }
  
  // Build environment with psychology
  const envParts = [
    envDesc,
    randomFrom(business.environments),
    triggers.environmentalPsychology,
    `Space designed to evoke ${analysis.emotionalTone} feeling in viewer`
  ];
  
  // Build lighting with purpose
  const lightParts = [
    lightDesc,
    randomFrom(business.lighting),
    `Lighting strategically crafted to ${psychTrigger.emotions.join(', ')}`
  ];
  
  // Build color with psychology explanation
  const colorParts = [
    `Primary color: ${business.colors.primary} - ${business.colors.psychology}`,
    `Accent color: ${business.colors.accent} strategically placed on key conversion elements`,
    `Overall palette creates ${analysis.emotionalTone} mood that triggers ${settings.psychologyApproach} response`,
    PSYCHOLOGY_DB.conversionElements.colorPsychology[
      business.colors.primary.includes('e53e3e') || business.colors.primary.includes('c53030') ? 'red' :
      business.colors.primary.includes('1a73e8') || business.colors.primary.includes('2b6cb0') || business.colors.primary.includes('3182ce') ? 'blue' :
      business.colors.primary.includes('d53f8c') ? 'pink' :
      business.colors.primary.includes('38a169') || business.colors.primary.includes('2f855a') ? 'green' :
      business.colors.primary.includes('d69e2e') ? 'gold' : 'blue'
    ]
  ];
  
  // Visual hierarchy for conversion
  const hierarchyParts = [
    PSYCHOLOGY_DB.conversionElements.visualHierarchy.position,
    PSYCHOLOGY_DB.conversionElements.visualHierarchy.contrast,
    'Eye naturally flows from hook element to benefit to CTA following Z-pattern',
    'Negative space strategically used to emphasize key conversion elements'
  ];
  
  // Attention grabbers
  const attentionParts = [
    randomFrom(Object.values(PSYCHOLOGY_DB.conversionElements.attentionGrabbers)),
    'Pattern interrupt element that stops scroll immediately',
    'Emotional expression visible and magnetic to human attention',
    'Unexpected visual element that breaks content fatigue'
  ];
  
  // Trust signals
  const trustParts = randomFromMultiple(business.trustSignals, 2);
  
  // Build CTA
  const cta = randomFrom(business.ctas);
  
  // Social proof
  const socialProof = randomFrom(business.socialProof);
  
  // Urgency if applicable
  let urgencyElement = '';
  if (analysis.urgencyLevel === 'high' || settings.psychologyApproach === 'fomo' || settings.psychologyApproach === 'urgency') {
    urgencyElement = randomFrom(business.urgencyTriggers);
  }
  
  // Build hook
  const hook = randomFrom(business.hooks);
  
  // Camera and composition
  const cameraStyles = [
    'Shot at eye level creating personal connection, slight shallow depth of field isolating subject',
    'Three-quarter angle showcasing subject dimensionally, professional portrait lens compression',
    'Environmental portrait showing context while maintaining subject focus, wide-to-tele zoom versatility',
    'Dynamic angle creating energy and movement, slight low angle for empowerment feeling'
  ];
  
  // Platform format
  const platformFormats: Record<string, Record<string, { w: number; h: number; desc: string }>> = {
    instagram: {
      feed: { w: 1080, h: 1080, desc: 'square' },
      stories: { w: 1080, h: 1920, desc: 'vertical 9:16' },
      reels: { w: 1080, h: 1920, desc: 'vertical 9:16' }
    },
    tiktok: {
      feed: { w: 1080, h: 1920, desc: 'vertical 9:16' },
      stories: { w: 1080, h: 1920, desc: 'vertical 9:16' }
    },
    youtube: {
      thumbnail: { w: 1280, h: 720, desc: 'landscape 16:9' },
      shorts: { w: 1080, h: 1920, desc: 'vertical 9:16' }
    },
    facebook: {
      feed: { w: 1200, h: 630, desc: 'landscape 1.91:1' },
      stories: { w: 1080, h: 1920, desc: 'vertical 9:16' }
    }
  };
  
  const platformSpec = platformFormats[settings.platform]?.[settings.format] || { w: 1080, h: 1080, desc: 'square' };
  
  // Build mood with psychology
  const moodParts = [
    `Overall mood: ${analysis.emotionalTone} with underlying ${settings.psychologyApproach} trigger`,
    `Viewer should feel: ${psychTrigger.emotions.join(', ')}`,
    `Emotional journey: attention → recognition → desire → action`,
    `Subconscious response: ${psychTrigger.description}`
  ];
  
  // Build style
  const styleDescriptions: Record<ContentStyle, string> = {
    professional: 'Studio-quality professional commercial photography with perfect technical execution, brand-consistent aesthetics, optimized for business credibility',
    ugc: 'Authentic user-generated content style shot on smartphone, genuine imperfections that build trust, relatable and real feeling that resonates with target audience',
    cinematic: 'Cinematic film-grade production with movie-like color grading, dramatic lighting, anamorphic lens characteristics, Hollywood-quality visual storytelling',
    editorial: 'High-fashion editorial magazine quality with artistic conceptual approach, bold creative choices, worthy of Vogue or premium publication',
    viral: 'Engineered for maximum shareability and engagement, scroll-stopping visual hook, trending format optimization, platform algorithm friendly',
    aesthetic: 'Carefully curated aesthetic with cohesive color story, pleasing composition that triggers save behavior, Instagram-worthy visual poetry'
  };
  
  // Build negative prompt
  const negatives = [
    // Quality issues
    'low quality', 'blurry', 'pixelated', 'grainy', 'jpeg artifacts', 'compression artifacts',
    'out of focus', 'motion blur', 'camera shake', 'underexposed', 'overexposed', 'poorly lit',
    // Anatomy issues  
    'deformed', 'distorted', 'bad anatomy', 'wrong proportions', 'extra limbs', 'missing limbs',
    'extra fingers', 'missing fingers', 'bad hands', 'mutated hands', 'malformed hands',
    'ugly', 'disfigured', 'gross proportions', 'unnatural pose',
    // Style conflicts
    'cartoon', 'anime', 'illustration', 'painting', 'drawing', 'sketch', 'CGI', 'render',
    'artificial', 'fake looking', 'stock photo feel', 'generic', 'staged', 'unnatural',
    // Composition issues
    'cropped', 'cut off', 'bad framing', 'cluttered background', 'distracting elements',
    'watermark', 'text', 'logo', 'border', 'frame',
    // Expression issues
    'fake smile', 'dead eyes', 'stiff pose', 'mannequin', 'uncanny valley', 'emotionless',
    // Conversion killers
    'confusing composition', 'hidden CTA', 'wrong emotion', 'off-brand colors', 'trust-breaking elements'
  ];
  
  return {
    quality: qualities[variant % qualities.length],
    subject: subjectParts.join('. '),
    action: hook,
    environment: envParts.join('. '),
    lighting: lightParts.join('. '),
    camera: randomFrom(cameraStyles) + `. Format: ${platformSpec.w}x${platformSpec.h} ${platformSpec.desc} for ${settings.platform} ${settings.format}`,
    colors: colorParts.join('. '),
    mood: moodParts.join('. '),
    style: styleDescriptions[settings.style],
    details: `Ultra-fine details visible: texture of materials, subtle reflections, micro-expressions, environmental storytelling elements. ${randomFromMultiple(business.trustSignals, 1)[0]} visible as trust signal.`,
    emotionalTrigger: `Psychology: ${psychTrigger.name} - ${psychTrigger.description}. Visual cues: ${randomFromMultiple(psychTrigger.visualCues, 2).join(', ')}`,
    visualHierarchy: hierarchyParts.join('. '),
    attentionGrabber: attentionParts.join('. '),
    trustSignals: trustParts.join(', ') + (urgencyElement ? `. Urgency: ${urgencyElement}` : ''),
    textOverlay: hook,
    cta: cta,
    socialProof: socialProof,
    negative: randomFromMultiple(negatives, 25).join(', ')
  };
}

// ============================================
// PROMPT ASSEMBLER
// ============================================

function assemblePrompt(blocks: PromptBlocks, mode: GenerationMode): string {
  if (mode === 'video') {
    return [
      `[VIDEO PROMPT - CONVERSION OPTIMIZED]`,
      ``,
      `VISUAL: ${blocks.quality}`,
      ``,
      `SCENE: ${blocks.subject}`,
      ``,
      `ENVIRONMENT: ${blocks.environment}`,
      ``,
      `LIGHTING: ${blocks.lighting}`,
      ``,
      `COLOR PSYCHOLOGY: ${blocks.colors}`,
      ``,
      `MOOD & EMOTION: ${blocks.mood}`,
      ``,
      `STYLE: ${blocks.style}`,
      ``,
      `PSYCHOLOGY TRIGGER: ${blocks.emotionalTrigger}`,
      ``,
      `HOOK (First 2 sec): "${blocks.action}"`,
      ``,
      `MOTION: ${blocks.motion || 'Smooth cinematic motion with purposeful camera movement'}`,
      ``,
      `AUDIO: Trending sound with beat-matched cuts, emotional audio cues`,
      ``,
      `CTA: "${blocks.cta}" - prominently displayed at end`,
      ``,
      `DURATION: ${blocks.duration || '15-30 seconds, hook in first 2 seconds'}`,
      ``,
      `FORMAT: ${blocks.camera}`
    ].join('\n');
  }
  
  if (mode === '3d') {
    return [
      `[3D MODEL - CONVERSION OPTIMIZED]`,
      ``,
      `QUALITY: ${blocks.quality}`,
      ``,
      `SUBJECT: ${blocks.subject}`,
      ``,
      `GEOMETRY: High-poly mesh with clean topology, quad-based geometry, proper edge flow for deformation`,
      ``,
      `MATERIALS: PBR materials with 4K textures, proper roughness/metallic maps, realistic subsurface scattering where applicable`,
      ``,
      `LIGHTING: ${blocks.lighting}`,
      ``,
      `ENVIRONMENT: ${blocks.environment}`,
      ``,
      `STYLE: ${blocks.style}`,
      ``,
      `RENDER: 8K resolution, ray-traced global illumination, proper anti-aliasing`,
      ``,
      `EXPORT: GLB/FBX format with embedded textures`
    ].join('\n');
  }
  
  // Image mode - ultra detailed
  const parts = [
    blocks.quality,
    '',
    `SUBJECT & PERSON: ${blocks.subject}`,
    '',
    `ENVIRONMENT: ${blocks.environment}`,
    '',
    `LIGHTING: ${blocks.lighting}`,
    '',
    `COLOR PSYCHOLOGY: ${blocks.colors}`,
    '',
    `MOOD & EMOTIONAL RESPONSE: ${blocks.mood}`,
    '',
    `STYLE: ${blocks.style}`,
    '',
    `PSYCHOLOGY TRIGGER: ${blocks.emotionalTrigger}`,
    '',
    `VISUAL HIERARCHY: ${blocks.visualHierarchy}`,
    '',
    `ATTENTION GRABBERS: ${blocks.attentionGrabber}`,
    '',
    `TRUST & SOCIAL PROOF: ${blocks.trustSignals}. ${blocks.socialProof}`,
    '',
    `HOOK: "${blocks.action}"`,
    '',
    `CTA: "${blocks.cta}" - high contrast button prominently positioned`,
    '',
    `CAMERA & FORMAT: ${blocks.camera}`,
    '',
    `MICRO-DETAILS: ${blocks.details}`
  ];
  
  return parts.join('\n');
}

// ============================================
// MODEL FORMATTERS
// ============================================

function formatForModel(prompt: string, negative: string, model: OutputModel): string {
  switch (model) {
    case 'flux':
      return `${prompt}\n\n---\nNegative prompt: ${negative}`;
    
    case 'midjourney':
      // Clean up for MJ format
      const mjClean = prompt
        .replace(/\[.*?\]/g, '')
        .replace(/\n+/g, ' ')
        .replace(/SUBJECT & PERSON:/g, '')
        .replace(/ENVIRONMENT:/g, '')
        .replace(/LIGHTING:/g, '')
        .replace(/COLOR PSYCHOLOGY:/g, '')
        .replace(/MOOD & EMOTIONAL RESPONSE:/g, '')
        .replace(/STYLE:/g, '')
        .replace(/PSYCHOLOGY TRIGGER:/g, '')
        .replace(/VISUAL HIERARCHY:/g, '')
        .replace(/ATTENTION GRABBERS:/g, '')
        .replace(/TRUST & SOCIAL PROOF:/g, '')
        .replace(/HOOK:/g, '')
        .replace(/CTA:/g, '')
        .replace(/CAMERA & FORMAT:/g, '')
        .replace(/MICRO-DETAILS:/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 5000);
      return `${mjClean} --v 6.1 --style raw --q 2`;
    
    case 'dalle':
      return prompt
        .replace(/\[.*?\]/g, '')
        .replace(/\n+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 4000);
    
    case 'sora':
      return `[SORA VIDEO]\n\n${prompt}\n\nDuration: 10 seconds\nAspect: 16:9\nStyle: Cinematic, smooth motion`;
    
    case 'runway':
      return `[RUNWAY GEN-3]\n\nMotion: Smooth and natural\n\n${prompt}\n\nCamera: Subtle purposeful movement\nStyle: Cinematic quality`;
    
    case 'kling':
      return `[KLING AI]\n\n${prompt}\n\nMotion: Natural fluid\nQuality: Maximum\nDuration: 5 seconds`;
    
    case 'meshy':
      return `[MESHY 3D]\n\n${prompt}\n\nOutput: High-poly mesh\nTextures: PBR 4K\nFormat: GLB/FBX`;
    
    default: // gemini
      return prompt;
  }
}

// ============================================
// MAIN ENGINE CLASS
// ============================================

export class PromptEngineV5 {
  private settings: GenerationSettings;
  
  constructor(settings?: Partial<GenerationSettings>) {
    this.settings = {
      mode: settings?.mode || 'image',
      model: settings?.model || 'gemini',
      style: settings?.style || 'professional',
      platform: settings?.platform || 'instagram',
      format: settings?.format || 'feed',
      detailLevel: settings?.detailLevel || 'ultra',
      language: settings?.language || 'ru',
      variants: settings?.variants || 1,
      psychologyApproach: settings?.psychologyApproach || 'trust',
      character: settings?.character,
      seasonalTheme: settings?.seasonalTheme,
      trendingHook: settings?.trendingHook
    };
  }
  
  updateSettings(settings: Partial<GenerationSettings>) {
    this.settings = { ...this.settings, ...settings };
  }
  
  generate(input: string): GeneratedPrompt[] {
    const results: GeneratedPrompt[] = [];
    
    // Psychology approaches for variants
    const approaches: PsychologyApproach[] = ['trust', 'fomo', 'desire', 'pain', 'social'];
    
    for (let i = 0; i < this.settings.variants; i++) {
      // Rotate psychology approach for each variant
      const approach = this.settings.psychologyApproach || approaches[i % approaches.length];
      const prompt = this.generateSingle(input, i + 1, approach);
      results.push(prompt);
    }
    
    return results;
  }
  
  private generateSingle(input: string, variant: number, approach: PsychologyApproach): GeneratedPrompt {
    // 1. Semantic Analysis
    const analysis = analyzeInput(input);
    
    // 2. Build Psychology Triggers
    const triggers = buildPsychologyTriggers(analysis, approach);
    
    // 3. Build Ultra-Detailed Blocks
    const settingsWithApproach = { ...this.settings, psychologyApproach: approach };
    const blocks = buildUltraDetailedPrompt(analysis, triggers, settingsWithApproach, variant);
    
    // 4. Assemble Main Prompt
    const mainPrompt = assemblePrompt(blocks, this.settings.mode);
    
    // 5. Calculate Conversion Score
    const conversionScore = this.calculateConversionScore(blocks, triggers);
    
    // 6. Format for all models
    const modelFormatted: Record<OutputModel, string> = {
      gemini: formatForModel(mainPrompt, blocks.negative, 'gemini'),
      flux: formatForModel(mainPrompt, blocks.negative, 'flux'),
      midjourney: formatForModel(mainPrompt, blocks.negative, 'midjourney'),
      dalle: formatForModel(mainPrompt, blocks.negative, 'dalle'),
      sora: formatForModel(mainPrompt, blocks.negative, 'sora'),
      runway: formatForModel(mainPrompt, blocks.negative, 'runway'),
      kling: formatForModel(mainPrompt, blocks.negative, 'kling'),
      meshy: formatForModel(mainPrompt, blocks.negative, 'meshy')
    };
    
    return {
      id: `prompt_v5_${Date.now()}_${variant}`,
      input,
      mainPrompt,
      negativePrompt: blocks.negative,
      blocks,
      settings: settingsWithApproach,
      semanticAnalysis: analysis,
      psychologyTriggers: triggers,
      timestamp: new Date(),
      isFavorite: false,
      variant,
      psychologyApproach: approach,
      conversionScore,
      modelFormatted
    };
  }
  
  private calculateConversionScore(blocks: PromptBlocks, triggers: PsychologyTriggers): number {
    let score = 50; // Base score
    
    // Psychology elements
    if (triggers.primary) score += 10;
    if (triggers.emotionalHooks.length >= 2) score += 10;
    if (triggers.visualCues.length >= 2) score += 5;
    
    // Block completeness
    if (blocks.emotionalTrigger) score += 5;
    if (blocks.visualHierarchy) score += 5;
    if (blocks.trustSignals) score += 5;
    if (blocks.cta) score += 5;
    if (blocks.socialProof) score += 5;
    
    return Math.min(100, score);
  }
  
  // Export functions
  exportToJSON(prompts: GeneratedPrompt[]): string {
    return JSON.stringify({
      version: '5.0',
      generator: 'NanoBanana Pro PromptEngine V5 - AI + Psychology',
      exportDate: new Date().toISOString(),
      settings: this.settings,
      conversionOptimized: true,
      prompts: prompts.map(p => ({
        ...p,
        timestamp: p.timestamp.toISOString()
      }))
    }, null, 2);
  }
  
  // Campaign generator
  generateCampaign(input: string, count: number = 5): Campaign {
    // Generate with different psychology approaches
    const approaches: PsychologyApproach[] = ['trust', 'fomo', 'desire', 'pain', 'social'];
    const prompts: GeneratedPrompt[] = [];
    
    for (let i = 0; i < count; i++) {
      const approach = approaches[i % approaches.length];
      prompts.push(this.generateSingle(input, i + 1, approach));
    }
    
    const analysis = analyzeInput(input);
    const business = BUSINESS_DB[analysis.businessType as keyof typeof BUSINESS_DB] || BUSINESS_DB.restaurant;
    
    return {
      name: `${business.name} - Conversion Campaign`,
      goal: `Maximize conversions for ${input} using psychological triggers`,
      prompts,
      hooks: business.hooks,
      psychologyStrategy: 'Multi-approach A/B testing: trust, FOMO, desire, pain point, social proof'
    };
  }
  
  // Character creation
  createCharacter(data: Omit<CharacterProfile, 'id'>): CharacterProfile {
    return {
      id: `char_${Date.now()}`,
      ...data
    };
  }
  
  // Static getters
  static getPsychologyApproaches(): PsychologyApproach[] {
    return ['fomo', 'trust', 'desire', 'pain', 'social', 'urgency', 'authority', 'reciprocity'];
  }
  
  static getBusinessTypes(): string[] {
    return Object.keys(BUSINESS_DB);
  }
  
  static getContentStyles(): ContentStyle[] {
    return ['professional', 'ugc', 'cinematic', 'editorial', 'viral', 'aesthetic'];
  }
  
  static getModels(): OutputModel[] {
    return ['gemini', 'flux', 'midjourney', 'dalle', 'sora', 'runway', 'kling', 'meshy'];
  }
}

export default PromptEngineV5;
