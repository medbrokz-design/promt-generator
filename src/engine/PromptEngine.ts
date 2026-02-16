/**
 * NanoBanana Pro PromptEngine v4.0
 * Февраль 2026 Edition
 * 
 * Поддержка: Image, Video, 3D, Consistent Characters
 * Форматы: Gemini, Flux, Midjourney, DALL-E, Sora, Runway
 */

// ============================================
// TYPES
// ============================================

export type GenerationMode = 'image' | 'video' | '3d' | 'storyboard' | 'campaign';
export type OutputModel = 'gemini' | 'flux' | 'midjourney' | 'dalle' | 'sora' | 'runway' | 'kling' | 'meshy';
export type ContentStyle = 'professional' | 'ugc' | 'cinematic' | 'editorial' | 'viral' | 'aesthetic';
export type Platform = 'instagram' | 'tiktok' | 'youtube' | 'facebook' | 'telegram' | 'linkedin';
export type Format = 'feed' | 'stories' | 'reels' | 'shorts' | 'banner' | 'thumbnail' | 'carousel';

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
  variants: number; // 1-5 вариантов
  character?: CharacterProfile;
  seasonalTheme?: string;
  trendingHook?: string;
}

export interface PromptBlocks {
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
  motion?: string; // для видео
  duration?: string; // для видео
  audio?: string; // для видео
  geometry?: string; // для 3D
  material?: string; // для 3D
  textOverlay?: string;
  cta?: string;
  negative: string;
}

export interface GeneratedPrompt {
  id: string;
  input: string;
  mainPrompt: string;
  negativePrompt: string;
  blocks: PromptBlocks;
  settings: GenerationSettings;
  timestamp: Date;
  isFavorite: boolean;
  variant: number;
  modelFormatted: Record<OutputModel, string>;
}

export interface StoryboardFrame {
  frameNumber: number;
  duration: string;
  prompt: string;
  voiceover?: string;
  music?: string;
  transition?: string;
}

export interface Campaign {
  name: string;
  goal: string;
  prompts: GeneratedPrompt[];
  storyboard?: StoryboardFrame[];
  hooks: string[];
}

// ============================================
// DATABASE - Расширенная база 2026
// ============================================

const DATABASE = {
  // Quality Descriptors по моделям
  quality: {
    gemini: [
      'Ultra-high resolution professional photograph with exceptional clarity',
      'Masterfully crafted photorealistic image with studio-quality precision',
      'Premium quality commercial photograph with perfect technical execution',
      'Award-winning professional photography with extraordinary attention to detail',
      'Hyper-realistic 8K photograph with flawless composition and lighting'
    ],
    flux: [
      'highly detailed, masterpiece, best quality, ultra realistic',
      'professional photograph, 8k uhd, sharp focus, intricate details',
      'photorealistic, award winning, studio quality, perfect lighting'
    ],
    midjourney: [
      'professional photography, hyperrealistic, 8k, sharp --v 6.1 --style raw',
      'masterpiece, best quality, highly detailed, photorealistic --v 6.1',
      'award-winning photograph, studio lighting, sharp focus --v 6.1 --q 2'
    ],
    dalle: [
      'A highly detailed professional photograph showing',
      'An ultra-realistic studio-quality image of',
      'A masterfully composed photorealistic scene depicting'
    ],
    sora: [
      'Cinematic 4K video with professional color grading and smooth motion',
      'High-quality commercial footage with dynamic camera movement',
      'Professional video production with seamless transitions'
    ],
    runway: [
      'Smooth cinematic motion, professional quality, 24fps',
      'Dynamic camera movement, film-grade color, seamless flow',
      'Commercial-grade footage, natural motion, high fidelity'
    ],
    kling: [
      'Ultra HD video, cinematic quality, natural movement',
      'Professional footage, smooth motion, vivid colors',
      'High-fidelity video, dynamic action, crisp details'
    ],
    meshy: [
      'High-poly 3D model with PBR textures and realistic materials',
      'Detailed 3D asset with clean topology and proper UV mapping',
      'Game-ready 3D model with optimized geometry and 4K textures'
    ]
  },

  // Business Profiles - Расширенные
  businesses: {
    cleaning: {
      name: 'Клининг',
      contentTypes: ['Before-after split-screen', 'Time-lapse transformation', 'Satisfying cleaning process'],
      subjects: ['Professional cleaner in branded uniform', 'Sparkling clean modern apartment', 'Deep cleaning equipment'],
      environments: ['Modern apartment', 'Luxury home', 'Office space', 'Commercial building'],
      lighting: ['Bright natural daylight', 'Clean white lighting', 'Before: dim / After: bright contrast'],
      colors: { primary: '#1a73e8', secondary: '#ffffff', accent: '#34a853', name: 'Trust Blue + Clean White' },
      moods: ['Satisfying', 'Fresh', 'Professional', 'Transformative'],
      ctas: ['ЗАКАЗАТЬ УБОРКУ', 'БЕСПЛАТНЫЙ РАСЧЁТ', 'ВЫЗВАТЬ КЛИНЕРА'],
      hooks: ['POV: ты нанял профессионалов', 'До/После за 2 часа', 'Этот лайфхак уборки 🔥'],
      ugcStyle: 'Cleaning TikTok, phone footage, real results, genuine reactions'
    },
    beauty: {
      name: 'Салон красоты',
      contentTypes: ['Transformation reveal', 'Process showcase', 'Client reaction', 'Stylist at work'],
      subjects: ['Beautiful woman with stunning hair/makeup', 'Skilled stylist working', 'Luxurious salon interior'],
      environments: ['Modern salon', 'Luxury spa', 'Aesthetic treatment room', 'Glamorous studio'],
      lighting: ['Soft flattering beauty lighting', 'Ring light glow', 'Golden hour warmth', 'Studio softbox'],
      colors: { primary: '#d53f8c', secondary: '#f7fafc', accent: '#d69e2e', name: 'Glam Pink + Gold' },
      moods: ['Glamorous', 'Confident', 'Transformed', 'Radiant'],
      ctas: ['ЗАПИСАТЬСЯ', 'КОНСУЛЬТАЦИЯ', 'СМОТРЕТЬ ЦЕНЫ'],
      hooks: ['Клиентка расплакалась от результата', 'Трансформация за 3 часа', 'Тренд 2026 года'],
      ugcStyle: 'GRWM style, phone selfie, authentic before/after, emotional reveal'
    },
    restaurant: {
      name: 'Ресторан',
      contentTypes: ['Appetizing food closeup', 'Chef at work', 'Plating process', 'Restaurant ambiance'],
      subjects: ['Gourmet dish with steam rising', 'Chef preparing signature dish', 'Elegant table setting'],
      environments: ['Fine dining restaurant', 'Cozy Italian trattoria', 'Modern fusion kitchen', 'Outdoor terrace'],
      lighting: ['Warm golden natural light', 'Candlelit ambiance', 'Kitchen spotlight', 'Soft window light'],
      colors: { primary: '#c53030', secondary: '#fffff0', accent: '#2f855a', name: 'Appetizing Red + Cream' },
      moods: ['Appetizing', 'Luxurious', 'Authentic', 'Inviting'],
      ctas: ['ЗАБРОНИРОВАТЬ', 'СМОТРЕТЬ МЕНЮ', 'ЗАКАЗАТЬ ДОСТАВКУ'],
      hooks: ['Шеф готовит это 8 часов', 'Секретный ингредиент', 'Попробуй с первого укуса'],
      ugcStyle: 'Foodie POV, first bite reaction, behind the scenes kitchen, authentic moment'
    },
    fitness: {
      name: 'Фитнес',
      contentTypes: ['Dynamic workout action', 'Transformation comparison', 'Trainer demonstration', 'Gym atmosphere'],
      subjects: ['Athletic person mid-exercise', 'Personal trainer coaching', 'Modern gym equipment'],
      environments: ['Premium gym', 'CrossFit box', 'Outdoor workout', 'Home gym setup'],
      lighting: ['Dramatic gym lighting', 'High contrast spots', 'Natural outdoor light', 'Neon accent lights'],
      colors: { primary: '#e53e3e', secondary: '#1a202c', accent: '#ed8936', name: 'Energy Red + Power Black' },
      moods: ['Powerful', 'Motivated', 'Determined', 'Energetic'],
      ctas: ['БЕСПЛАТНАЯ ТРЕНИРОВКА', 'ЗАПИСАТЬСЯ', 'НАЧАТЬ СЕГОДНЯ'],
      hooks: ['Это упражнение сжигает 500 ккал', '30 дней челлендж результат', 'Тренер показывает секрет'],
      ugcStyle: 'Workout vlog, sweaty authentic, gym mirror selfie, progress check'
    },
    realestate: {
      name: 'Недвижимость',
      contentTypes: ['Property showcase', 'Virtual tour style', 'Lifestyle in home', 'Architectural details'],
      subjects: ['Stunning modern interior', 'Luxury apartment view', 'Happy family in new home'],
      environments: ['Luxury penthouse', 'Cozy family home', 'Modern apartment', 'Suburban house'],
      lighting: ['Bright natural daylight', 'Golden hour exterior', 'Warm interior evening', 'Dramatic architectural'],
      colors: { primary: '#2b6cb0', secondary: '#f7fafc', accent: '#d69e2e', name: 'Trust Blue + Premium Gold' },
      moods: ['Aspirational', 'Luxurious', 'Homey', 'Impressive'],
      ctas: ['СМОТРЕТЬ ОБЪЕКТ', 'ЗАПИСАТЬСЯ НА ПОКАЗ', 'УЗНАТЬ ЦЕНУ'],
      hooks: ['Квартира за эту цену?!', 'Вид из окна поражает', 'Нашли идеальную планировку'],
      ugcStyle: 'Home tour POV, walking through, genuine first impression, phone video'
    },
    auto: {
      name: 'Автосервис',
      contentTypes: ['Repair process', 'Before/after detail', 'Mechanic at work', 'Car showcase'],
      subjects: ['Expert mechanic working', 'Car being detailed', 'Engine repair closeup'],
      environments: ['Professional garage', 'Detailing studio', 'Modern service center'],
      lighting: ['Bright workshop lights', 'Dramatic car spotlights', 'Detail lighting'],
      colors: { primary: '#2d3748', secondary: '#ed8936', accent: '#e53e3e', name: 'Professional Gray + Action Orange' },
      moods: ['Professional', 'Trustworthy', 'Expert', 'Reliable'],
      ctas: ['ЗАПИСАТЬСЯ', 'ДИАГНОСТИКА', 'РАССЧИТАТЬ СТОИМОСТЬ'],
      hooks: ['Мастер нашёл скрытую проблему', 'До/После детейлинга', 'Так делают профессионалы'],
      ugcStyle: 'Garage POV, mechanic explains, satisfying repair, real workshop footage'
    },
    cafe: {
      name: 'Кофейня',
      contentTypes: ['Coffee art closeup', 'Cozy atmosphere', 'Barista at work', 'Morning ritual'],
      subjects: ['Perfect latte art', 'Cozy coffee moment', 'Skilled barista pouring'],
      environments: ['Hip coffee shop', 'Cozy neighborhood cafe', 'Minimalist coffee bar'],
      lighting: ['Warm morning light', 'Soft window glow', 'Cozy ambient lighting'],
      colors: { primary: '#744210', secondary: '#fffaf0', accent: '#276749', name: 'Coffee Brown + Cream' },
      moods: ['Cozy', 'Relaxing', 'Artisanal', 'Welcoming'],
      ctas: ['НАЙТИ НАС', 'ЗАКАЗАТЬ ОНЛАЙН', 'НАШЕ МЕНЮ'],
      hooks: ['Идеальный латте-арт', 'Утренний ритуал', 'Секрет вкусного кофе'],
      ugcStyle: 'Morning coffee POV, aesthetic flat lay, cozy vibes, ASMR pour'
    },
    education: {
      name: 'Образование',
      contentTypes: ['Learning moment', 'Success story', 'Class atmosphere', 'Expert teaching'],
      subjects: ['Student having breakthrough', 'Engaging teacher', 'Interactive classroom'],
      environments: ['Modern classroom', 'Online learning setup', 'Study space', 'University campus'],
      lighting: ['Bright inspiring light', 'Focused study lamp', 'Natural classroom light'],
      colors: { primary: '#3182ce', secondary: '#f0fff4', accent: '#38a169', name: 'Knowledge Blue + Growth Green' },
      moods: ['Inspiring', 'Focused', 'Achieving', 'Empowering'],
      ctas: ['ЗАПИСАТЬСЯ', 'БЕСПЛАТНЫЙ УРОК', 'НАЧАТЬ ОБУЧЕНИЕ'],
      hooks: ['Выучил за 30 дней', 'Метод который работает', 'Результаты учеников'],
      ugcStyle: 'Study with me, learning journey, student vlog, breakthrough moment'
    },
    medical: {
      name: 'Медицина/Клиника',
      contentTypes: ['Caring doctor', 'Modern facility', 'Treatment process', 'Happy patient'],
      subjects: ['Compassionate doctor consulting', 'State-of-art equipment', 'Comfortable patient'],
      environments: ['Modern clinic', 'Dental office', 'Medical center', 'Wellness spa'],
      lighting: ['Clean medical lighting', 'Soft reassuring glow', 'Professional clinical'],
      colors: { primary: '#319795', secondary: '#ffffff', accent: '#38b2ac', name: 'Medical Teal + Pure White' },
      moods: ['Trustworthy', 'Caring', 'Professional', 'Reassuring'],
      ctas: ['ЗАПИСАТЬСЯ', 'КОНСУЛЬТАЦИЯ', 'ЗАДАТЬ ВОПРОС'],
      hooks: ['Врач объясняет простым языком', 'Так проходит процедура', 'Честно о лечении'],
      ugcStyle: 'Doctor explains, patient journey, behind scenes clinic, real consultation'
    },
    tech: {
      name: 'IT/Технологии',
      contentTypes: ['Product showcase', 'Tech in action', 'Team at work', 'Innovation demo'],
      subjects: ['Cutting-edge device', 'Developer coding', 'Tech startup team'],
      environments: ['Modern office', 'Tech lab', 'Startup space', 'Home office'],
      lighting: ['Screen glow', 'Modern office lighting', 'Futuristic blue accent'],
      colors: { primary: '#4c51bf', secondary: '#1a202c', accent: '#00d4ff', name: 'Tech Indigo + Cyber Blue' },
      moods: ['Innovative', 'Future-forward', 'Smart', 'Cutting-edge'],
      ctas: ['ПОПРОБОВАТЬ', 'DEMO', 'УЗНАТЬ БОЛЬШЕ'],
      hooks: ['AI делает это за секунды', 'Технология 2026 года', 'Это изменит всё'],
      ugcStyle: 'Tech review, unboxing, screen recording, day in life of dev'
    },
    fashion: {
      name: 'Одежда/Мода',
      contentTypes: ['Outfit showcase', 'Fashion editorial', 'Street style', 'Try-on haul'],
      subjects: ['Stylish model in outfit', 'Fashion details closeup', 'Lifestyle fashion moment'],
      environments: ['Urban street', 'Minimalist studio', 'Fashion showroom', 'City location'],
      lighting: ['Natural street light', 'Editorial studio', 'Golden hour outdoor', 'Soft fashion lighting'],
      colors: { primary: '#1a202c', secondary: '#f7fafc', accent: '#d69e2e', name: 'Chic Black + Fashion Gold' },
      moods: ['Stylish', 'Trendy', 'Confident', 'Aspirational'],
      ctas: ['КУПИТЬ LOOK', 'В КАТАЛОГ', 'НОВАЯ КОЛЛЕКЦИЯ'],
      hooks: ['Собрала образ за 5000₽', 'Тренды весны 2026', 'Как носить этот цвет'],
      ugcStyle: 'OOTD, try-on haul, styling tips, get ready with me'
    },
    travel: {
      name: 'Путешествия',
      contentTypes: ['Destination showcase', 'Travel moment', 'Adventure action', 'Hidden gem reveal'],
      subjects: ['Breathtaking landscape', 'Traveler exploring', 'Unique destination'],
      environments: ['Exotic beach', 'Mountain vista', 'Historic city', 'Hidden paradise'],
      lighting: ['Golden sunset', 'Dramatic landscape', 'Blue hour', 'Natural adventure'],
      colors: { primary: '#2b6cb0', secondary: '#ebf8ff', accent: '#ed8936', name: 'Ocean Blue + Sunset Orange' },
      moods: ['Wanderlust', 'Adventurous', 'Serene', 'Exciting'],
      ctas: ['ЗАБРОНИРОВАТЬ', 'УЗНАТЬ МАРШРУТ', 'ПОЛУЧИТЬ ГАЙД'],
      hooks: ['Место которое ты не знал', 'Бюджетный рай', 'Локация без туристов'],
      ugcStyle: 'Travel vlog, POV exploring, hidden gem reveal, authentic travel moments'
    },
    wedding: {
      name: 'Свадьбы',
      contentTypes: ['Romantic moment', 'Venue showcase', 'Detail shots', 'Emotional ceremony'],
      subjects: ['Happy couple', 'Beautiful venue', 'Wedding details', 'Celebration moment'],
      environments: ['Elegant venue', 'Outdoor ceremony', 'Romantic garden', 'Luxury ballroom'],
      lighting: ['Soft romantic glow', 'Golden hour magic', 'Candlelit ambiance', 'Fairy lights'],
      colors: { primary: '#ffffff', secondary: '#f8e1e7', accent: '#d69e2e', name: 'Pure White + Blush Pink + Gold' },
      moods: ['Romantic', 'Magical', 'Elegant', 'Joyful'],
      ctas: ['ОСТАВИТЬ ЗАЯВКУ', 'СМОТРЕТЬ ПОРТФОЛИО', 'КОНСУЛЬТАЦИЯ'],
      hooks: ['Реакция жениха', 'Декор за этот бюджет', 'Свадьба мечты'],
      ugcStyle: 'Wedding vlog, behind scenes, getting ready, genuine moments'
    },
    jewelry: {
      name: 'Ювелирные украшения',
      contentTypes: ['Product macro', 'Lifestyle wearing', 'Craftsmanship', 'Unboxing luxury'],
      subjects: ['Sparkling jewelry piece', 'Elegant hand with ring', 'Artisan crafting'],
      environments: ['Luxury display', 'Elegant lifestyle', 'Workshop craft', 'Minimalist showcase'],
      lighting: ['Dramatic jewelry lighting', 'Sparkle highlights', 'Soft luxury glow', 'Point light reflections'],
      colors: { primary: '#d69e2e', secondary: '#1a202c', accent: '#e2e8f0', name: 'Luxury Gold + Black + Silver' },
      moods: ['Luxurious', 'Precious', 'Elegant', 'Desirable'],
      ctas: ['СМОТРЕТЬ КОЛЛЕКЦИЮ', 'ПОДОБРАТЬ ПОДАРОК', 'ЗАКАЗАТЬ'],
      hooks: ['Как отличить настоящее', 'Украшение на всю жизнь', 'Ручная работа 40 часов'],
      ugcStyle: 'Jewelry haul, gift unboxing, styling jewelry, day to night transition'
    },
    legal: {
      name: 'Юридические услуги',
      contentTypes: ['Expert consultation', 'Success story', 'Office professional', 'Document work'],
      subjects: ['Confident lawyer', 'Professional consultation', 'Legal victory moment'],
      environments: ['Law office', 'Meeting room', 'Court setting', 'Professional workspace'],
      lighting: ['Professional office light', 'Serious dramatic', 'Warm trustworthy'],
      colors: { primary: '#1a365d', secondary: '#f7fafc', accent: '#c53030', name: 'Authority Navy + Professional White' },
      moods: ['Authoritative', 'Trustworthy', 'Competent', 'Reassuring'],
      ctas: ['КОНСУЛЬТАЦИЯ', 'ОСТАВИТЬ ЗАЯВКУ', 'ЗАДАТЬ ВОПРОС'],
      hooks: ['Юрист объясняет права', 'Ошибка которая стоит денег', 'Выиграли дело'],
      ugcStyle: 'Lawyer explains, legal tips, client success story, office day'
    },
    pets: {
      name: 'Питомцы',
      contentTypes: ['Cute pet moment', 'Pet service showcase', 'Happy pet owner', 'Pet care tips'],
      subjects: ['Adorable pet portrait', 'Pet being pampered', 'Happy pet with owner'],
      environments: ['Pet salon', 'Vet clinic', 'Home with pet', 'Pet store'],
      lighting: ['Soft pet-friendly', 'Natural playful', 'Warm home lighting'],
      colors: { primary: '#ed8936', secondary: '#fffff0', accent: '#38a169', name: 'Friendly Orange + Warm Cream' },
      moods: ['Adorable', 'Playful', 'Loving', 'Heartwarming'],
      ctas: ['ЗАПИСАТЬСЯ', 'НАШИ УСЛУГИ', 'ПОЗВОНИТЬ'],
      hooks: ['Реакция собаки', 'Груминг до/после', 'Лайфхак для хозяев'],
      ugcStyle: 'Pet vlog, grooming transformation, vet visit, cute moments'
    }
  },

  // Стили контента 2026
  contentStyles: {
    professional: {
      quality: 'Studio-quality professional commercial photography',
      approach: 'Clean, polished, brand-focused with perfect lighting and composition',
      camera: 'Shot with professional DSLR, crisp focus, controlled lighting'
    },
    ugc: {
      quality: 'Authentic user-generated content style with genuine feel',
      approach: 'Natural, unpolished, relatable, shot on phone, real moments',
      camera: 'iPhone/smartphone footage, slightly imperfect, authentic angles'
    },
    cinematic: {
      quality: 'Cinematic film-grade production with movie aesthetics',
      approach: 'Dramatic lighting, widescreen composition, color graded',
      camera: 'Anamorphic lens, shallow DOF, cinematic camera movement'
    },
    editorial: {
      quality: 'High-fashion editorial magazine quality',
      approach: 'Artistic, conceptual, fashion-forward, bold styling',
      camera: 'Medium format style, editorial lighting, magazine composition'
    },
    viral: {
      quality: 'Optimized for maximum engagement and shareability',
      approach: 'Eye-catching, scroll-stopping, emotional trigger, trending format',
      camera: 'Vertical phone format, face-focused, attention-grabbing'
    },
    aesthetic: {
      quality: 'Aesthetically pleasing visual content with cohesive mood',
      approach: 'Color harmonious, pleasing composition, lifestyle aspirational',
      camera: 'Soft focus elements, dreamy tones, curated feel'
    }
  },

  // Сезонные темы
  seasonalThemes: {
    newyear: {
      name: 'Новый год',
      elements: ['festive decorations', 'golden lights', 'champagne', 'snow', 'Christmas tree'],
      colors: ['red', 'gold', 'green', 'white'],
      mood: 'festive, magical, celebratory, warm family atmosphere',
      lighting: 'warm fairy lights, candlelit glow, festive sparkle'
    },
    valentine: {
      name: '14 февраля',
      elements: ['hearts', 'roses', 'romantic dinner', 'gifts', 'couples'],
      colors: ['red', 'pink', 'white'],
      mood: 'romantic, loving, intimate, passionate',
      lighting: 'soft candlelit, romantic pink glow, intimate warm'
    },
    march8: {
      name: '8 марта',
      elements: ['spring flowers', 'tulips', 'mimosa', 'elegant gifts', 'feminine'],
      colors: ['pink', 'yellow', 'white', 'purple'],
      mood: 'spring freshness, feminine elegance, celebration',
      lighting: 'soft spring light, gentle warm glow'
    },
    easter: {
      name: 'Пасха',
      elements: ['Easter eggs', 'spring flowers', 'pastel colors', 'bunnies', 'kulich'],
      colors: ['pastel pink', 'yellow', 'lavender', 'mint'],
      mood: 'spring renewal, joyful, family, traditional',
      lighting: 'bright spring daylight, cheerful and fresh'
    },
    summer: {
      name: 'Лето',
      elements: ['beach', 'sun', 'vacation', 'tropical', 'outdoor fun'],
      colors: ['turquoise', 'coral', 'yellow', 'white'],
      mood: 'vibrant, energetic, vacation vibes, freedom',
      lighting: 'bright sunshine, golden hour, beach sunset'
    },
    autumn: {
      name: 'Осень',
      elements: ['falling leaves', 'pumpkins', 'cozy sweaters', 'hot drinks', 'harvest'],
      colors: ['orange', 'brown', 'burgundy', 'gold'],
      mood: 'cozy, warm, nostalgic, comfortable',
      lighting: 'warm golden autumn light, soft overcast'
    },
    halloween: {
      name: 'Хэллоуин',
      elements: ['pumpkins', 'spooky decor', 'costumes', 'candles', 'dark themes'],
      colors: ['orange', 'black', 'purple', 'green'],
      mood: 'spooky, fun, mysterious, playful scary',
      lighting: 'dramatic shadows, candlelit, eerie glow'
    },
    blackfriday: {
      name: 'Black Friday',
      elements: ['sale tags', 'shopping bags', 'discounts', 'excitement', 'deals'],
      colors: ['black', 'red', 'gold', 'white'],
      mood: 'urgent, exciting, deal-hunting, energetic',
      lighting: 'dramatic retail lighting, spotlight on deals'
    },
    winter: {
      name: 'Зима',
      elements: ['snow', 'cozy indoor', 'hot cocoa', 'warm clothes', 'frost'],
      colors: ['white', 'ice blue', 'silver', 'red'],
      mood: 'cozy, peaceful, magical, serene',
      lighting: 'soft snow reflection, warm indoor glow, blue hour'
    }
  },

  // Trending Hooks 2026
  trendingHooks: {
    pov: ['POV: ты нашёл идеальный сервис', 'POV: это твой первый раз', 'POV: ты не ожидал такого результата'],
    reaction: ['Моя реакция когда...', 'Клиент не ожидал...', 'Даже я был в шоке'],
    before_after: ['Трансформация за 24 часа', 'До и После одного визита', 'Невероятное преображение'],
    secret: ['Секрет который скрывают', 'Мало кто знает этот способ', 'Профессионалы не расскажут'],
    challenge: ['Попробуй повторить', '30 дней челлендж', 'Сможешь с первого раза?'],
    storytime: ['История одного клиента', 'Как это изменило всё', 'Не поверите что случилось'],
    educational: ['3 ошибки которые делают все', 'Правда о...', 'Мифы vs Реальность'],
    emotional: ['Это заставило плакать', 'Мурашки от результата', 'Эмоции зашкаливают']
  },

  // Camera & Technical
  cameras: {
    portrait: {
      lens: '85mm f/1.4 prime lens',
      style: 'shallow depth of field with creamy bokeh, subject isolation',
      movement: 'static tripod, subtle push-in'
    },
    product: {
      lens: '100mm macro lens f/2.8',
      style: 'sharp detail throughout, controlled lighting, clean background',
      movement: 'slow orbit around product, detail zoom'
    },
    wide: {
      lens: '24mm wide-angle lens',
      style: 'environmental context, dramatic perspective, leading lines',
      movement: 'smooth dolly, establishing shot movement'
    },
    cinematic: {
      lens: 'Anamorphic 40mm lens',
      style: 'widescreen 2.39:1 ratio, lens flares, cinematic color',
      movement: 'smooth gimbal tracking, dramatic crane movement'
    },
    phone: {
      lens: 'Smartphone camera (iPhone 16 Pro style)',
      style: 'authentic UGC feel, slight imperfections, real-world look',
      movement: 'handheld natural shake, selfie angle, POV'
    },
    food: {
      lens: '50mm f/1.8 or 90mm macro',
      style: 'appetizing angles, steam/texture visible, shallow DOF',
      movement: 'slow top-down reveal, side angle push'
    },
    fashion: {
      lens: '35mm or 50mm prime',
      style: 'full body context, editorial composition, style-focused',
      movement: 'model walk tracking, style reveal'
    },
    aerial: {
      lens: 'Drone wide-angle',
      style: 'bird eye view, establishing scale, dramatic reveals',
      movement: 'smooth aerial tracking, ascending reveal'
    }
  },

  // Video-specific elements
  video: {
    durations: {
      reels: '15-30 seconds, fast-paced, hook in first 2 seconds',
      stories: '15 seconds per segment, episodic, swipe-up ready',
      tiktok: '15-60 seconds, trend-format, music-synced',
      youtube: '30 seconds to 2 minutes, narrative arc, retention hooks',
      ad: '6-15 seconds, immediate hook, clear CTA'
    },
    motions: {
      smooth: 'Smooth continuous motion with fluid camera movement',
      dynamic: 'Dynamic energetic motion with quick cuts and movement',
      subtle: 'Subtle gentle motion with minimal camera movement',
      dramatic: 'Dramatic revealing motion with cinematic pacing',
      handheld: 'Authentic handheld motion with natural slight shake'
    },
    transitions: {
      cut: 'Clean hard cut',
      fade: 'Smooth fade transition',
      zoom: 'Zoom through transition',
      swipe: 'Directional swipe transition',
      morph: 'Smooth morph between scenes'
    }
  },

  // 3D-specific elements  
  threeD: {
    styles: {
      realistic: 'Photorealistic PBR materials, ray-traced lighting, subsurface scattering',
      stylized: 'Stylized 3D with clean shapes, gradient shading, modern aesthetic',
      lowpoly: 'Low-poly geometric style with flat colors and sharp edges',
      anime: 'Anime/cel-shaded style with outline strokes and vibrant colors',
      clay: 'Clay render style, soft shadows, matte materials'
    },
    materials: {
      metal: 'Brushed metal with realistic reflections and subtle scratches',
      wood: 'Natural wood grain with proper roughness and color variation',
      fabric: 'Soft fabric with realistic folds, threads visible, proper weight',
      glass: 'Clear glass with refraction, caustics, and subtle imperfections',
      plastic: 'Smooth plastic with subsurface scattering and fingerprint smudges',
      skin: 'Realistic skin shader with subsurface scattering, pores, micro-details'
    }
  },

  // Lighting presets
  lighting: {
    natural: [
      'Soft diffused natural daylight streaming through large windows at golden hour angle',
      'Bright overcast sky creating soft shadowless illumination perfect for products',
      'Dappled sunlight filtering through trees creating natural light patterns'
    ],
    studio: [
      'Professional three-point studio lighting with key, fill, and rim lights',
      'Soft beauty lighting with large octabox creating wraparound illumination',
      'High-key bright studio lighting with minimal shadows for clean product shots'
    ],
    dramatic: [
      'Dramatic chiaroscuro lighting with strong shadows and single key light',
      'Moody low-key lighting with deep shadows and selective illumination',
      'Rim lighting creating dramatic silhouette with glowing edges'
    ],
    neon: [
      'Vibrant neon lights in pink and blue creating cyberpunk atmosphere',
      'LED strip lighting with color gel effects and urban night feel',
      'Mixed neon sources creating colorful reflections on wet surfaces'
    ],
    cinematic: [
      'Cinematic motivated lighting with practical sources visible in frame',
      'Film noir inspired lighting with venetian blind shadows',
      'Blockbuster movie lighting with dramatic flares and atmosphere'
    ]
  },

  // Negative prompts база
  negatives: {
    general: [
      'low quality', 'blurry', 'pixelated', 'grainy noise', 'jpeg artifacts',
      'out of focus', 'poorly lit', 'overexposed', 'underexposed', 'amateur'
    ],
    anatomy: [
      'deformed', 'bad anatomy', 'wrong proportions', 'extra limbs', 'missing limbs',
      'extra fingers', 'missing fingers', 'bad hands', 'distorted face', 'ugly'
    ],
    style: [
      'cartoon', 'anime', 'illustration', 'painting', 'sketch', 'drawing',
      'CGI look', 'plastic', 'artificial', 'stock photo', 'watermark'
    ],
    composition: [
      'cropped', 'cut off', 'bad framing', 'cluttered', 'distracting background',
      'text', 'logo', 'signature', 'border', 'frame'
    ],
    food: [
      'unappetizing', 'cold food', 'artificial looking', 'plastic food', 'fake',
      'bad plating', 'messy', 'unclean'
    ],
    people: [
      'stiff pose', 'awkward expression', 'fake smile', 'mannequin-like',
      'uncanny valley', 'dead eyes', 'plastic skin'
    ],
    video: [
      'choppy motion', 'frame drops', 'stuttering', 'temporal artifacts',
      'morphing', 'flickering', 'inconsistent lighting between frames'
    ]
  },

  // Platform specifications
  platforms: {
    instagram: {
      feed: { width: 1080, height: 1080, ratio: '1:1', format: 'square' },
      stories: { width: 1080, height: 1920, ratio: '9:16', format: 'vertical' },
      reels: { width: 1080, height: 1920, ratio: '9:16', format: 'vertical' },
      carousel: { width: 1080, height: 1080, ratio: '1:1', format: 'square' }
    },
    tiktok: {
      feed: { width: 1080, height: 1920, ratio: '9:16', format: 'vertical' },
      stories: { width: 1080, height: 1920, ratio: '9:16', format: 'vertical' }
    },
    youtube: {
      thumbnail: { width: 1280, height: 720, ratio: '16:9', format: 'landscape' },
      shorts: { width: 1080, height: 1920, ratio: '9:16', format: 'vertical' },
      banner: { width: 2560, height: 1440, ratio: '16:9', format: 'landscape' }
    },
    facebook: {
      feed: { width: 1200, height: 630, ratio: '1.91:1', format: 'landscape' },
      stories: { width: 1080, height: 1920, ratio: '9:16', format: 'vertical' }
    },
    telegram: {
      feed: { width: 1280, height: 720, ratio: '16:9', format: 'landscape' }
    },
    linkedin: {
      feed: { width: 1200, height: 627, ratio: '1.91:1', format: 'landscape' }
    }
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
  return shuffled.slice(0, count);
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

function detectBusinessType(input: string): keyof typeof DATABASE.businesses {
  const lowerInput = input.toLowerCase();
  
  const keywords: Record<keyof typeof DATABASE.businesses, string[]> = {
    cleaning: ['клининг', 'уборк', 'чистк', 'мойк', 'химчистк', 'clean'],
    beauty: ['салон', 'красот', 'парикмахер', 'маникюр', 'косметолог', 'стилист', 'макияж', 'барбер', 'spa', 'спа', 'beauty', 'brow', 'lash'],
    restaurant: ['ресторан', 'кухн', 'еда', 'шеф', 'меню', 'доставка еды', 'restaurant', 'food'],
    fitness: ['фитнес', 'спорт', 'тренер', 'зал', 'тренировк', 'йог', 'gym', 'fitness', 'workout'],
    realestate: ['недвижимост', 'квартир', 'дом', 'жильё', 'жилье', 'риелтор', 'аренд', 'property', 'real estate', 'apartment'],
    auto: ['авто', 'машин', 'сервис', 'ремонт авто', 'детейлинг', 'шиномонтаж', 'car', 'auto'],
    cafe: ['кафе', 'кофе', 'кофейн', 'coffee', 'cafe', 'бариста', 'латте'],
    education: ['образован', 'обучен', 'курс', 'школ', 'универ', 'репетитор', 'учёб', 'education', 'course', 'learning'],
    medical: ['медиц', 'клиник', 'врач', 'доктор', 'стоматолог', 'здоровь', 'лечен', 'medical', 'clinic', 'doctor', 'dental'],
    tech: ['tech', 'it', 'приложен', 'сайт', 'разработк', 'программ', 'software', 'app', 'стартап', 'startup'],
    fashion: ['мода', 'одежд', 'бутик', 'магазин одежд', 'fashion', 'style', 'outfit', 'бренд одежд', 'шоурум'],
    travel: ['путешеств', 'тур', 'отдых', 'travel', 'vacation', 'hotel', 'отель', 'поездк'],
    wedding: ['свадьб', 'wedding', 'невест', 'жених', 'торжеств', 'банкет', 'церемон'],
    jewelry: ['ювелир', 'украшен', 'золот', 'серебр', 'кольц', 'jewelry', 'diamond', 'брилиант'],
    legal: ['юрист', 'адвокат', 'право', 'юридическ', 'legal', 'lawyer', 'консультац'],
    pets: ['питом', 'собак', 'кошк', 'животн', 'ветеринар', 'груминг', 'зоо', 'pet', 'dog', 'cat']
  };

  for (const [business, words] of Object.entries(keywords)) {
    if (words.some(word => lowerInput.includes(word))) {
      return business as keyof typeof DATABASE.businesses;
    }
  }
  
  return 'restaurant'; // default
}

function _detectSeason(): string | null {
  const month = new Date().getMonth();
  
  if (month === 11 || month === 0) return 'newyear'; // Dec, Jan
  if (month === 1 && new Date().getDate() <= 14) return 'valentine'; // Feb early
  if (month === 2 && new Date().getDate() <= 8) return 'march8'; // Mar early
  if (month >= 5 && month <= 7) return 'summer'; // Jun-Aug
  if (month >= 8 && month <= 10) return 'autumn'; // Sep-Nov
  
  return null;
}

// Export for potential future use
export const detectSeason = _detectSeason;

// ============================================
// MAIN GENERATOR CLASS
// ============================================

export class PromptEngine {
  private settings: GenerationSettings;
  
  constructor(settings?: Partial<GenerationSettings>) {
    this.settings = {
      mode: settings?.mode || 'image',
      model: settings?.model || 'gemini',
      style: settings?.style || 'professional',
      platform: settings?.platform || 'instagram',
      format: settings?.format || 'feed',
      detailLevel: settings?.detailLevel || 'detailed',
      language: settings?.language || 'ru',
      variants: settings?.variants || 1,
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
    
    for (let i = 0; i < this.settings.variants; i++) {
      const prompt = this.generateSingle(input, i + 1);
      results.push(prompt);
    }
    
    return results;
  }

  private generateSingle(input: string, variant: number): GeneratedPrompt {
    const businessType = detectBusinessType(input);
    const business = DATABASE.businesses[businessType];
    const location = extractLocation(input);
    const styleConfig = DATABASE.contentStyles[this.settings.style];
    const season = this.settings.seasonalTheme ? DATABASE.seasonalThemes[this.settings.seasonalTheme as keyof typeof DATABASE.seasonalThemes] : null;
    
    // Build blocks
    const blocks = this.buildBlocks(input, business, location, styleConfig, season, variant);
    
    // Build main prompt based on mode
    let mainPrompt: string;
    switch (this.settings.mode) {
      case 'video':
        mainPrompt = this.buildVideoPrompt(blocks, business);
        break;
      case '3d':
        mainPrompt = this.build3DPrompt(blocks, business);
        break;
      case 'storyboard':
        mainPrompt = this.buildStoryboardPrompt(blocks, business);
        break;
      default:
        mainPrompt = this.buildImagePrompt(blocks, business);
    }

    // Build negative prompt
    const negativePrompt = this.buildNegativePrompt(businessType);
    
    // Format for different models
    const modelFormatted = this.formatForModels(mainPrompt, negativePrompt);

    return {
      id: `prompt_${Date.now()}_${variant}`,
      input,
      mainPrompt,
      negativePrompt,
      blocks,
      settings: { ...this.settings },
      timestamp: new Date(),
      isFavorite: false,
      variant,
      modelFormatted
    };
  }

  private buildBlocks(
    _input: string,
    business: typeof DATABASE.businesses[keyof typeof DATABASE.businesses],
    location: string | null,
    styleConfig: typeof DATABASE.contentStyles[keyof typeof DATABASE.contentStyles],
    season: typeof DATABASE.seasonalThemes[keyof typeof DATABASE.seasonalThemes] | null,
    variant: number
  ): PromptBlocks {
    const cameraType = this.getCameraTypeForBusiness(business);
    const camera = DATABASE.cameras[cameraType as keyof typeof DATABASE.cameras];
    const lightingCategory = this.getLightingForStyle();
    const lighting = randomFrom(DATABASE.lighting[lightingCategory as keyof typeof DATABASE.lighting]);
    
    // Quality based on model
    const qualityOptions = DATABASE.quality[this.settings.model] || DATABASE.quality.gemini;
    const quality = randomFrom(qualityOptions);

    // Content type with variant rotation
    const contentTypeIndex = (variant - 1) % business.contentTypes.length;
    void business.contentTypes[contentTypeIndex]; // Reserved for future use

    // Subject with character if defined
    let subject = randomFrom(business.subjects);
    if (this.settings.character) {
      subject = this.buildCharacterDescription(this.settings.character);
    }
    if (location) {
      subject += ` in ${location}`;
    }

    // Environment with seasonal overlay
    let environment = randomFrom(business.environments);
    if (season) {
      environment += ` decorated with ${randomFromMultiple(season.elements, 2).join(' and ')}, ${season.mood}`;
    }
    if (location) {
      environment += ` in ${location}`;
    }

    // Colors
    const colors = `${business.colors.name} color palette. Primary ${business.colors.primary}, secondary ${business.colors.secondary}, accent ${business.colors.accent}`;

    // Mood with seasonal influence
    let mood = randomFrom(business.moods);
    if (season) {
      mood += `, ${season.mood.split(',')[0]}`;
    }

    // Style from content style config
    const style = styleConfig.approach;

    // Hook if set
    let action = '';
    if (this.settings.trendingHook) {
      const hookCategory = this.settings.trendingHook as keyof typeof DATABASE.trendingHooks;
      const hooks = DATABASE.trendingHooks[hookCategory];
      if (hooks) {
        action = randomFrom(hooks);
      }
    }

    // UGC style if selected
    if (this.settings.style === 'ugc') {
      style + '. ' + business.ugcStyle;
    }

    // Details based on detail level
    const detailCount = this.settings.detailLevel === 'ultra' ? 6 : 
                       this.settings.detailLevel === 'detailed' ? 4 : 
                       this.settings.detailLevel === 'medium' ? 3 : 2;
    const details = randomFromMultiple([
      'intricate textures visible',
      'authentic natural imperfections',
      'professional attention to detail',
      'perfect composition balance',
      'genuine emotional expression',
      'high-end production value',
      'subtle environmental storytelling',
      'brand-consistent aesthetics'
    ], detailCount).join(', ');

    // Platform format specs
    const platformSpec = DATABASE.platforms[this.settings.platform] as Record<string, { width: number; height: number; ratio: string; format: string }>;
    const formatSpec = platformSpec?.[this.settings.format] || platformSpec?.['feed'] || null;
    const formatString = formatSpec 
      ? `${formatSpec.width}x${formatSpec.height} ${formatSpec.format} format for ${this.settings.platform}` 
      : '1080x1080 square format';

    // CTA
    const cta = randomFrom(business.ctas);

    // Build blocks object
    const blocks: PromptBlocks = {
      quality,
      subject,
      action,
      environment,
      lighting: `${lighting}. Creating ${mood} atmosphere with ${season?.lighting || 'professional quality illumination'}`,
      camera: `${camera.lens}. ${camera.style}`,
      colors,
      mood: `${mood} mood and feeling`,
      style: `${styleConfig.quality}. ${style}`,
      details: `${details}. ${formatString}`,
      textOverlay: this.settings.language === 'ru' ? business.name : business.name,
      cta,
      negative: ''
    };

    // Video-specific blocks
    if (this.settings.mode === 'video') {
      const durationKey = this.settings.format === 'reels' ? 'reels' : 
                         this.settings.format === 'stories' ? 'stories' : 'tiktok';
      blocks.motion = randomFrom(Object.values(DATABASE.video.motions));
      blocks.duration = DATABASE.video.durations[durationKey as keyof typeof DATABASE.video.durations];
      blocks.audio = 'Trending audio sync, beat-matched cuts';
    }

    // 3D-specific blocks
    if (this.settings.mode === '3d') {
      blocks.geometry = 'High-poly mesh with clean topology, quad-based geometry, proper edge flow';
      blocks.material = randomFrom(Object.values(DATABASE.threeD.materials));
    }

    return blocks;
  }

  private getCameraTypeForBusiness(business: typeof DATABASE.businesses[keyof typeof DATABASE.businesses]): string {
    const name = business.name.toLowerCase();
    if (name.includes('красот') || name.includes('салон')) return 'portrait';
    if (name.includes('ресторан') || name.includes('кафе') || name.includes('пекарн')) return 'food';
    if (name.includes('ювелир')) return 'product';
    if (name.includes('недвижим') || name.includes('путешеств')) return 'wide';
    if (name.includes('мода') || name.includes('одежд')) return 'fashion';
    if (this.settings.style === 'ugc') return 'phone';
    if (this.settings.style === 'cinematic') return 'cinematic';
    return 'portrait';
  }

  private getLightingForStyle(): string {
    switch (this.settings.style) {
      case 'cinematic': return 'cinematic';
      case 'ugc': return 'natural';
      case 'viral': return 'dramatic';
      case 'aesthetic': return 'natural';
      case 'editorial': return 'studio';
      default: return 'studio';
    }
  }

  private buildCharacterDescription(char: CharacterProfile): string {
    return `${char.name}, ${char.age}, ${char.appearance}. Wearing ${char.clothing}. ${char.personality} personality. Distinctive features: ${char.features.join(', ')}`;
  }

  private buildImagePrompt(blocks: PromptBlocks, business: typeof DATABASE.businesses[keyof typeof DATABASE.businesses]): string {
    const parts: string[] = [];

    // Quality + Content Type
    parts.push(`${blocks.quality} capturing ${blocks.subject}`);

    // Action/Hook if exists
    if (blocks.action) {
      parts.push(`Hook: "${blocks.action}"`);
    }

    // Environment
    parts.push(`Set in ${blocks.environment}`);

    // Lighting
    parts.push(blocks.lighting);

    // Colors
    parts.push(blocks.colors);

    // Style & Mood
    parts.push(`${blocks.style}. ${blocks.mood}`);

    // Camera
    parts.push(`Shot with ${blocks.camera}`);

    // Details
    parts.push(blocks.details);

    // Text overlay for ads
    if (blocks.textOverlay) {
      const headline = business.hooks ? randomFrom(business.hooks) : blocks.textOverlay;
      parts.push(`Text overlay: "${headline}" with CTA button "${blocks.cta}"`);
    }

    return parts.join('. ');
  }

  private buildVideoPrompt(blocks: PromptBlocks, _business: typeof DATABASE.businesses[keyof typeof DATABASE.businesses]): string {
    const parts: string[] = [];

    parts.push(`[VIDEO PROMPT] ${blocks.quality}`);
    parts.push(`SCENE: ${blocks.subject} in ${blocks.environment}`);
    parts.push(`MOTION: ${blocks.motion}`);
    parts.push(`DURATION: ${blocks.duration}`);
    parts.push(`CAMERA: ${blocks.camera}. Movement: smooth tracking with ${blocks.motion}`);
    parts.push(`LIGHTING: ${blocks.lighting}`);
    parts.push(`COLOR GRADE: ${blocks.colors}`);
    parts.push(`MOOD: ${blocks.mood}. ${blocks.style}`);
    
    if (blocks.action) {
      parts.push(`HOOK (first 2 sec): "${blocks.action}"`);
    }
    
    if (blocks.audio) {
      parts.push(`AUDIO: ${blocks.audio}`);
    }

    parts.push(`ENDING: Clear CTA "${blocks.cta}"`);

    return parts.join('\n');
  }

  private build3DPrompt(blocks: PromptBlocks, _business: typeof DATABASE.businesses[keyof typeof DATABASE.businesses]): string {
    const style3D = randomFrom(Object.entries(DATABASE.threeD.styles));
    
    const parts: string[] = [];

    parts.push(`[3D MODEL PROMPT] ${blocks.quality}`);
    parts.push(`SUBJECT: ${blocks.subject}`);
    parts.push(`STYLE: ${style3D[0]} - ${style3D[1]}`);
    parts.push(`GEOMETRY: ${blocks.geometry}`);
    parts.push(`MATERIALS: ${blocks.material}`);
    parts.push(`LIGHTING: ${blocks.lighting}`);
    parts.push(`ENVIRONMENT: ${blocks.environment}`);
    parts.push(`RENDER: 8K resolution, ray-traced, anti-aliased`);

    return parts.join('\n');
  }

  private buildStoryboardPrompt(blocks: PromptBlocks, business: typeof DATABASE.businesses[keyof typeof DATABASE.businesses]): string {
    const frames = [
      { time: '0-3s', desc: 'HOOK - Attention grabber', content: blocks.action || 'Eye-catching opening' },
      { time: '3-8s', desc: 'PROBLEM - Show pain point', content: 'Before state or problem visualization' },
      { time: '8-15s', desc: 'SOLUTION - Your offer', content: blocks.subject },
      { time: '15-22s', desc: 'RESULT - Transformation', content: 'After state, satisfied customer' },
      { time: '22-25s', desc: 'CTA - Call to action', content: blocks.cta }
    ];

    let storyboard = `[STORYBOARD] ${business.name} Video Ad\n`;
    storyboard += `Style: ${blocks.style}\n`;
    storyboard += `Mood: ${blocks.mood}\n`;
    storyboard += `Colors: ${blocks.colors}\n\n`;

    frames.forEach((frame, i) => {
      storyboard += `FRAME ${i + 1} [${frame.time}] - ${frame.desc}\n`;
      storyboard += `Visual: ${frame.content}\n`;
      storyboard += `Lighting: ${blocks.lighting.split('.')[0]}\n`;
      storyboard += `Camera: ${blocks.camera.split('.')[0]}\n\n`;
    });

    return storyboard;
  }

  private buildNegativePrompt(businessType: string): string {
    const negatives: string[] = [
      ...DATABASE.negatives.general,
      ...DATABASE.negatives.anatomy,
      ...DATABASE.negatives.style,
      ...DATABASE.negatives.composition
    ];

    // Add business-specific negatives
    if (['restaurant', 'cafe'].includes(businessType)) {
      negatives.push(...DATABASE.negatives.food);
    }
    if (['beauty', 'fitness', 'fashion'].includes(businessType)) {
      negatives.push(...DATABASE.negatives.people);
    }
    if (this.settings.mode === 'video') {
      negatives.push(...DATABASE.negatives.video);
    }

    // Select based on detail level
    const count = this.settings.detailLevel === 'ultra' ? 25 : 
                 this.settings.detailLevel === 'detailed' ? 18 : 
                 this.settings.detailLevel === 'medium' ? 12 : 8;

    return randomFromMultiple([...new Set(negatives)], count).join(', ');
  }

  private formatForModels(mainPrompt: string, negativePrompt: string): Record<OutputModel, string> {
    return {
      gemini: mainPrompt,
      flux: `${mainPrompt}\n\nNegative: ${negativePrompt}`,
      midjourney: this.formatMidjourney(mainPrompt),
      dalle: this.formatDALLE(mainPrompt),
      sora: this.formatSora(mainPrompt),
      runway: this.formatRunway(mainPrompt),
      kling: this.formatKling(mainPrompt),
      meshy: this.formatMeshy(mainPrompt)
    };
  }

  private formatMidjourney(prompt: string): string {
    // Remove incompatible elements and add MJ params
    const cleaned = prompt.replace(/\[.*?\]/g, '').replace(/\n/g, ' ');
    return `${cleaned} --v 6.1 --style raw --q 2 --ar 1:1`;
  }

  private formatDALLE(prompt: string): string {
    // DALL-E prefers natural language
    return prompt.replace(/\[.*?\]/g, '').replace(/\n/g, ' ').slice(0, 4000);
  }

  private formatSora(prompt: string): string {
    return `[SORA VIDEO]\n${prompt}\n\nStyle: cinematic, smooth motion\nDuration: 10 seconds\nAspect: 16:9`;
  }

  private formatRunway(prompt: string): string {
    return `Motion: Smooth and natural\n${prompt}\n\nCamera: Subtle movement\nStyle: Cinematic`;
  }

  private formatKling(prompt: string): string {
    return `${prompt}\n\n[Kling Settings]\nMotion: Natural\nQuality: High\nDuration: 5s`;
  }

  private formatMeshy(prompt: string): string {
    return `[3D Generation]\n${prompt}\n\nOutput: High-poly mesh\nTextures: PBR 4K\nFormat: GLB/FBX`;
  }

  // Storyboard generator
  generateStoryboard(input: string, frames: number = 5): StoryboardFrame[] {
    const businessType = detectBusinessType(input);
    const business = DATABASE.businesses[businessType];
    
    const storyboard: StoryboardFrame[] = [];
    const transitions = Object.values(DATABASE.video.transitions);
    
    const frameTypes = [
      { type: 'hook', duration: '0-3s', desc: 'Attention-grabbing hook' },
      { type: 'problem', duration: '3-8s', desc: 'Show the problem/pain point' },
      { type: 'solution', duration: '8-15s', desc: 'Introduce solution/product' },
      { type: 'benefit', duration: '15-22s', desc: 'Show benefits/results' },
      { type: 'cta', duration: '22-30s', desc: 'Call to action' }
    ];

    frameTypes.slice(0, frames).forEach((frame, i) => {
      const prompt = this.generateSingle(`${input} - ${frame.desc}`, i + 1);
      
      storyboard.push({
        frameNumber: i + 1,
        duration: frame.duration,
        prompt: prompt.mainPrompt,
        voiceover: this.generateVoiceover(frame.type, business),
        music: i === 0 ? 'Trending upbeat track, hook-synced' : undefined,
        transition: i < frames - 1 ? randomFrom(transitions) : undefined
      });
    });

    return storyboard;
  }

  private generateVoiceover(frameType: string, business: typeof DATABASE.businesses[keyof typeof DATABASE.businesses]): string {
    const voiceovers: Record<string, string[]> = {
      hook: ['Ты точно не знал об этом!', 'Это изменит всё!', 'Секрет который скрывают...'],
      problem: ['Знакомая ситуация?', 'Устал от этого?', 'Так больше нельзя...'],
      solution: ['Решение есть!', 'Мы знаем как помочь', `${business.name} - твой выбор`],
      benefit: ['Только посмотри на результат!', 'Это работает!', 'Клиенты в восторге'],
      cta: ['Записывайся сейчас!', 'Ссылка в описании', 'Не упусти возможность']
    };
    
    return randomFrom(voiceovers[frameType] || voiceovers.cta);
  }

  // Campaign generator
  generateCampaign(input: string, promtsCount: number = 5): Campaign {
    const businessType = detectBusinessType(input);
    const business = DATABASE.businesses[businessType];
    
    // Generate multiple variants
    this.settings.variants = promtsCount;
    const prompts = this.generate(input);
    
    // Generate storyboard
    const storyboard = this.generateStoryboard(input);
    
    // Generate hooks
    const allHooks = Object.values(DATABASE.trendingHooks).flat();
    const hooks = randomFromMultiple(allHooks, 5);

    return {
      name: `${business.name} Campaign`,
      goal: `Increase awareness and conversions for ${input}`,
      prompts,
      storyboard,
      hooks
    };
  }

  // Character management
  createCharacter(data: Omit<CharacterProfile, 'id'>): CharacterProfile {
    return {
      id: `char_${Date.now()}`,
      ...data
    };
  }

  // Export functions
  exportToJSON(prompts: GeneratedPrompt[]): string {
    return JSON.stringify({
      version: '4.0',
      generator: 'NanoBanana Pro PromptEngine',
      exportDate: new Date().toISOString(),
      settings: this.settings,
      prompts: prompts.map(p => ({
        ...p,
        timestamp: p.timestamp.toISOString()
      }))
    }, null, 2);
  }

  exportCampaignToJSON(campaign: Campaign): string {
    return JSON.stringify({
      version: '4.0',
      type: 'campaign',
      generator: 'NanoBanana Pro PromptEngine',
      exportDate: new Date().toISOString(),
      campaign: {
        ...campaign,
        prompts: campaign.prompts.map(p => ({
          ...p,
          timestamp: p.timestamp.toISOString()
        }))
      }
    }, null, 2);
  }

  // Get available options
  static getBusinessTypes(): string[] {
    return Object.keys(DATABASE.businesses);
  }

  static getSeasonalThemes(): string[] {
    return Object.keys(DATABASE.seasonalThemes);
  }

  static getTrendingHooks(): Record<string, string[]> {
    return DATABASE.trendingHooks;
  }

  static getPlatforms(): string[] {
    return Object.keys(DATABASE.platforms);
  }

  static getModels(): OutputModel[] {
    return ['gemini', 'flux', 'midjourney', 'dalle', 'sora', 'runway', 'kling', 'meshy'];
  }

  static getContentStyles(): ContentStyle[] {
    return ['professional', 'ugc', 'cinematic', 'editorial', 'viral', 'aesthetic'];
  }
}

export default PromptEngine;
