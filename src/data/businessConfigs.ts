import { BusinessConfig } from '../types';

export const businessConfigs: Record<string, BusinessConfig> = {
  cleaning: {
    contentType: "Before-after split-screen comparison",
    style: "Clean, professional, bright",
    lighting: "Bright natural window light flooding the space",
    colors: "Blue and white color scheme reinforcing trust and cleanliness",
    composition: "Vertical split 50/50 with bold contrast",
    mood: "Satisfaction, relief, fresh, transformative",
    elements: ["messy to clean transformation", "visible dust removal", "sparkling surfaces", "organized space"],
    text: "ДО / ПОСЛЕ",
    cta: "ЗАКАЗАТЬ УБОРКУ"
  },
  repair: {
    contentType: "Process and result showcase",
    style: "Professional, trustworthy, detailed craftsmanship",
    lighting: "Bright focused workshop lighting highlighting work quality",
    colors: "Orange and gray color scheme conveying action and professionalism",
    composition: "Close-up on skilled hands working with tools",
    mood: "Confident, skilled, reliable, expert",
    elements: ["professional tools visible", "skilled hands at work", "quality materials", "attention to detail"],
    text: "МАСТЕР СВОЕГО ДЕЛА",
    cta: "ВЫЗВАТЬ МАСТЕРА"
  },
  beauty: {
    contentType: "Stunning beauty transformation",
    style: "Elegant, glamorous, professional salon quality",
    lighting: "Soft diffused studio lighting flattering skin tones",
    colors: "Pink and gold color palette conveying beauty and luxury",
    composition: "Portrait close-up from shoulders up",
    mood: "Confident, beautiful, transformed, radiant",
    elements: ["flawless makeup", "styled hair", "glowing skin", "confident expression"],
    text: "ПРЕОБРАЖЕНИЕ",
    cta: "ЗАПИСАТЬСЯ"
  },
  fitness: {
    contentType: "Dynamic powerful action shot",
    style: "Energetic, motivating, powerful athletic",
    lighting: "Dramatic gym lighting with strong contrast and rim light",
    colors: "Red and black color scheme conveying energy and power",
    composition: "Low angle action mid-movement shot",
    mood: "Motivated, strong, determined, unstoppable",
    elements: ["muscles engaged", "sweat visible", "intense focus", "gym equipment"],
    text: "СИЛА В ТЕБЕ",
    cta: "БЕСПЛАТНОЕ ЗАНЯТИЕ"
  },
  restaurant: {
    contentType: "Mouth-watering appetizing food close-up",
    style: "Delicious, authentic, inviting culinary art",
    lighting: "Warm golden natural light creating cozy atmosphere",
    colors: "Warm earth tones and rich food colors stimulating appetite",
    composition: "45-degree overhead angle showing dish beautifully",
    mood: "Appetizing, cozy, authentic, irresistible",
    elements: ["steam rising", "fresh ingredients visible", "perfect plating", "garnish details"],
    text: "ВКУС СОВЕРШЕНСТВА",
    cta: "ЗАБРОНИРОВАТЬ СТОЛИК"
  },
  auto: {
    contentType: "Professional automotive service showcase",
    style: "Technical, trustworthy, expert quality",
    lighting: "Bright clean workshop lighting showing every detail",
    colors: "Blue and orange color scheme conveying trust and action",
    composition: "Detail shot of car or mechanic working",
    mood: "Reliable, expert, quality assured, professional",
    elements: ["professional equipment", "clean workspace", "attention to detail", "quality parts"],
    text: "ПРОФЕССИОНАЛЬНЫЙ СЕРВИС",
    cta: "ЗАПИСАТЬСЯ НА СЕРВИС"
  },
  clothing: {
    contentType: "Stylish fashion lifestyle shot",
    style: "Trendy, aspirational, modern fashion",
    lighting: "Natural soft light or urban setting lighting",
    colors: "Seasonal fashion color palette matching collection",
    composition: "Full body or 3/4 length showing outfit",
    mood: "Confident, fashionable, modern, stylish",
    elements: ["complete outfit showcase", "lifestyle context", "model in natural pose", "accessories"],
    text: "НОВАЯ КОЛЛЕКЦИЯ",
    cta: "КУПИТЬ ОНЛАЙН"
  },
  jewelry: {
    contentType: "Luxurious jewelry close-up macro shot",
    style: "Premium, elegant, exclusive luxury",
    lighting: "Dramatic jewelry lighting highlighting sparkle and brilliance",
    colors: "Gold silver and black color scheme conveying luxury",
    composition: "Macro close-up showing intricate details",
    mood: "Sophisticated, exclusive, valuable, precious",
    elements: ["brilliant sparkle", "fine details", "luxury materials", "elegant display"],
    text: "ЭКСКЛЮЗИВНО",
    cta: "ПОСМОТРЕТЬ КОЛЛЕКЦИЮ"
  },
  electronics: {
    contentType: "Modern tech product showcase",
    style: "Sleek, high-tech, innovative design",
    lighting: "Clean studio lighting with subtle reflections",
    colors: "Blue and white color scheme conveying technology and innovation",
    composition: "3/4 angle showing product design and features",
    mood: "Innovative, cutting-edge, smart, premium",
    elements: ["product features visible", "minimal background", "tech details", "premium finish"],
    text: "ТЕХНОЛОГИИ БУДУЩЕГО",
    cta: "УЗНАТЬ ЦЕНУ"
  },
  cafe: {
    contentType: "Cozy lifestyle coffee moment",
    style: "Warm, inviting, authentic cafe atmosphere",
    lighting: "Warm natural window light creating cozy ambiance",
    colors: "Brown cream and beige tones evoking coffee comfort",
    composition: "Overhead or table level intimate shot",
    mood: "Relaxed, comfortable, welcoming, peaceful",
    elements: ["latte art", "cozy interior", "warm atmosphere", "morning ritual"],
    text: "ВАШ УТРЕННИЙ РИТУАЛ",
    cta: "ПОСЕТИТЬ НАС"
  },
  bakery: {
    contentType: "Fresh baked goods close-up",
    style: "Warm, homemade, artisan quality",
    lighting: "Golden warm natural light showing fresh baked texture",
    colors: "Golden brown and cream colors conveying fresh baked warmth",
    composition: "Close-up showing texture and detail",
    mood: "Comforting, delicious, homemade, fresh",
    elements: ["visible steam", "crusty texture", "fresh from oven", "artisan quality"],
    text: "СВЕЖАЯ ВЫПЕЧКА",
    cta: "ЗАКАЗАТЬ"
  },
  realestate: {
    contentType: "Stunning interior or exterior property showcase",
    style: "Spacious, bright, aspirational living",
    lighting: "Bright natural light flooding through windows",
    colors: "Neutral warm tones with accent colors",
    composition: "Wide angle showing space and layout",
    mood: "Welcoming, spacious, dream home, luxurious",
    elements: ["open space", "natural light", "modern design", "quality finishes"],
    text: "ДОМ ВАШЕЙ МЕЧТЫ",
    cta: "СМОТРЕТЬ ОБЪЕКТ"
  },
  medical: {
    contentType: "Professional medical facility or service",
    style: "Clean, trustworthy, professional healthcare",
    lighting: "Bright clean clinical lighting",
    colors: "Blue and white conveying trust and cleanliness",
    composition: "Professional setting with medical equipment",
    mood: "Trustworthy, professional, caring, expert",
    elements: ["modern equipment", "clean environment", "professional staff", "patient care"],
    text: "ЗАБОТА О ЗДОРОВЬЕ",
    cta: "ЗАПИСАТЬСЯ НА ПРИЁМ"
  },
  education: {
    contentType: "Engaging learning environment",
    style: "Inspiring, professional, knowledge-focused",
    lighting: "Bright welcoming classroom or study lighting",
    colors: "Blue and green conveying knowledge and growth",
    composition: "Students engaged or learning materials showcase",
    mood: "Inspiring, focused, growth-oriented, professional",
    elements: ["learning materials", "engaged students", "modern classroom", "achievement"],
    text: "ИНВЕСТИЦИЯ В БУДУЩЕЕ",
    cta: "ЗАПИСАТЬСЯ НА КУРС"
  },
  pets: {
    contentType: "Adorable pet care or service showcase",
    style: "Warm, caring, professional pet care",
    lighting: "Soft warm natural lighting",
    colors: "Warm friendly colors with green accents",
    composition: "Pet portrait or care action shot",
    mood: "Loving, caring, professional, joyful",
    elements: ["happy pets", "professional care", "clean facility", "loving attention"],
    text: "ЛУЧШЕЕ ДЛЯ ПИТОМЦА",
    cta: "ЗАПИСАТЬСЯ"
  },
  travel: {
    contentType: "Breathtaking travel destination showcase",
    style: "Adventurous, inspiring, wanderlust",
    lighting: "Golden hour or dramatic natural landscape lighting",
    colors: "Vibrant natural colors of destination",
    composition: "Panoramic or lifestyle travel shot",
    mood: "Adventurous, inspiring, free, exciting",
    elements: ["stunning views", "local culture", "unique experiences", "travel moments"],
    text: "ОТКРОЙТЕ МИР",
    cta: "ЗАБРОНИРОВАТЬ ТУР"
  },
  flowers: {
    contentType: "Beautiful floral arrangement showcase",
    style: "Elegant, fresh, romantic",
    lighting: "Soft natural light highlighting flower colors",
    colors: "Vibrant floral colors with green foliage",
    composition: "Artistic arrangement close-up",
    mood: "Romantic, fresh, elegant, celebratory",
    elements: ["fresh blooms", "artistic arrangement", "color harmony", "natural beauty"],
    text: "КРАСОТА В ДЕТАЛЯХ",
    cta: "ЗАКАЗАТЬ БУКЕТ"
  },
  photo: {
    contentType: "Professional photography portfolio showcase",
    style: "Artistic, professional, creative",
    lighting: "Dramatic or soft professional lighting",
    colors: "Mood-appropriate color grading",
    composition: "Portfolio-worthy composition",
    mood: "Artistic, professional, memorable, unique",
    elements: ["perfect moment", "professional quality", "artistic vision", "emotional impact"],
    text: "СОХРАНИМ МОМЕНТЫ",
    cta: "ЗАКАЗАТЬ СЪЁМКУ"
  }
};

export const businessKeywords: Record<string, string[]> = {
  cleaning: ['клининг', 'уборка', 'чистка', 'мойка', 'химчистка', 'clean'],
  repair: ['ремонт', 'мастер', 'сантехник', 'электрик', 'repair', 'fix'],
  beauty: ['салон', 'красот', 'парикмахер', 'маникюр', 'педикюр', 'косметолог', 'визаж', 'beauty', 'spa', 'спа'],
  fitness: ['фитнес', 'спорт', 'зал', 'тренер', 'йога', 'gym', 'fitness', 'тренировк'],
  restaurant: ['ресторан', 'кафе', 'еда', 'кухня', 'блюд', 'restaurant', 'food', 'итальян', 'японск', 'суши'],
  auto: ['авто', 'машин', 'сервис', 'шиномонтаж', 'автомойка', 'car', 'auto', 'сто '],
  clothing: ['одежд', 'магазин', 'бутик', 'fashion', 'мод', 'стиль', 'wear', 'shop'],
  jewelry: ['ювелир', 'украшени', 'золот', 'серебр', 'jewelry', 'diamond', 'кольц'],
  electronics: ['электроник', 'техник', 'гаджет', 'телефон', 'компьютер', 'tech', 'digital'],
  cafe: ['кофе', 'кофейн', 'coffee', 'cafe', 'латте', 'капучино'],
  bakery: ['пекарн', 'выпечк', 'хлеб', 'торт', 'bakery', 'bread', 'cake', 'кондитер'],
  realestate: ['недвижим', 'квартир', 'дом', 'аренд', 'жильё', 'real estate', 'apartment'],
  medical: ['медиц', 'клиник', 'врач', 'стоматолог', 'health', 'doctor', 'dental', 'больниц'],
  education: ['обучен', 'курс', 'школ', 'образован', 'education', 'learn', 'study', 'репетитор'],
  pets: ['питом', 'животн', 'собак', 'кошк', 'ветеринар', 'pet', 'dog', 'cat', 'зоо'],
  travel: ['путешеств', 'тур', 'отдых', 'travel', 'tour', 'отель', 'hotel', 'поездк'],
  flowers: ['цвет', 'букет', 'флорист', 'flower', 'роз', 'тюльпан'],
  photo: ['фото', 'съёмк', 'фотограф', 'photo', 'portrait', 'свадеб']
};

export const platformFormats: Record<string, Record<string, string>> = {
  instagram: {
    feed: '1080x1080 square Instagram feed',
    stories: '1080x1920 vertical Instagram Stories',
    reels: '1080x1920 vertical Instagram Reels',
    banner: '1080x566 Instagram profile banner',
    thumbnail: '1080x1080 square thumbnail'
  },
  tiktok: {
    feed: '1080x1920 vertical TikTok',
    stories: '1080x1920 vertical TikTok',
    reels: '1080x1920 vertical TikTok video',
    banner: '1920x1080 horizontal',
    thumbnail: '1080x1920 vertical thumbnail'
  },
  facebook: {
    feed: '1200x630 Facebook feed',
    stories: '1080x1920 vertical Facebook Stories',
    reels: '1080x1920 vertical Facebook Reels',
    banner: '820x312 Facebook cover',
    thumbnail: '1200x630 thumbnail'
  },
  youtube: {
    feed: '1920x1080 YouTube video frame',
    stories: '1080x1920 YouTube Shorts',
    reels: '1080x1920 YouTube Shorts',
    banner: '2560x1440 YouTube channel banner',
    thumbnail: '1280x720 YouTube thumbnail'
  },
  telegram: {
    feed: '1280x720 Telegram post',
    stories: '1080x1920 vertical Telegram Stories',
    reels: '1080x1920 vertical video',
    banner: '1280x720 channel header',
    thumbnail: '320x320 square thumbnail'
  }
};

export const negativePrompts: Record<string, string[]> = {
  cleaning: ['dirty', 'messy result', 'fake transformation', 'stock photos', 'unrealistic', 'cartoon'],
  repair: ['amateur work', 'broken result', 'fake', 'unprofessional', 'stock photos'],
  beauty: ['bad makeup', 'different people', 'fake transformation', 'over-processed', 'unrealistic'],
  fitness: ['perfect model', 'fake sweat', 'overly posed', 'unrealistic', 'stock fitness'],
  restaurant: ['artificial food', 'plastic', 'overprocessed', 'fake steam', 'unappetizing'],
  auto: ['dirty garage', 'amateur', 'low quality', 'fake', 'unprofessional'],
  clothing: ['wrinkled', 'poor fit', 'bad lighting', 'amateur', 'stock photo'],
  jewelry: ['fake gems', 'cheap looking', 'poor lighting', 'blurry details', 'plastic'],
  electronics: ['damaged', 'outdated', 'poor quality', 'blurry', 'fake'],
  cafe: ['fake latte art', 'cold coffee', 'sterile', 'artificial', 'stock photo'],
  bakery: ['stale', 'artificial', 'unappetizing', 'cold', 'fake'],
  realestate: ['cluttered', 'dark', 'small looking', 'poor quality', 'distorted'],
  medical: ['scary', 'unprofessional', 'dirty', 'outdated', 'uncomfortable'],
  education: ['boring', 'empty', 'unprofessional', 'outdated', 'stock photo'],
  pets: ['scared animals', 'dirty', 'unprofessional', 'sad', 'neglected'],
  travel: ['crowded', 'bad weather', 'poor quality', 'tourist traps', 'fake'],
  flowers: ['wilted', 'dead flowers', 'poor arrangement', 'artificial', 'cheap'],
  photo: ['amateur', 'blurry', 'bad lighting', 'poor composition', 'snapshot']
};

export const quickExamples = [
  { icon: '🧹', text: 'Клининг в Москве' },
  { icon: '💇', text: 'Салон красоты премиум' },
  { icon: '🍕', text: 'Итальянский ресторан' },
  { icon: '💪', text: 'Фитнес для женщин' },
  { icon: '☕', text: 'Уютная кофейня' },
  { icon: '🚗', text: 'Автосервис' },
  { icon: '👗', text: 'Магазин одежды' },
  { icon: '💎', text: 'Ювелирный бутик' },
  { icon: '🏠', text: 'Агентство недвижимости' },
  { icon: '🎂', text: 'Домашняя пекарня' },
  { icon: '✈️', text: 'Туристическое агентство' },
  { icon: '📸', text: 'Свадебный фотограф' }
];
