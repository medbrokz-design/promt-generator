export interface BusinessConfig {
  keywords: string[];
  content_type: string;
  style: string;
  lighting: string;
  colors: string;
  colorPsychology: string;
  composition: string;
  mood: string;
  elements: string[];
  text: string;
  cta: string;
  negative: string[];
}

export const businessTypes: Record<string, BusinessConfig> = {
  cleaning: {
    keywords: ['клининг', 'уборка', 'чистка', 'мойка окон', 'химчистка'],
    content_type: 'Professional before-after split-screen advertisement showing dramatic home cleaning transformation',
    style: 'Clean, professional, bright commercial photography',
    lighting: 'Bright natural window light flooding right side creating fresh vibrant atmosphere',
    colors: 'Blue and white color scheme',
    colorPsychology: 'reinforcing trust and cleanliness psychology',
    composition: 'Vertical split composition 50/50 with bold "ДО" and "ПОСЛЕ" labels',
    mood: 'Satisfaction and relief',
    elements: ['messy→clean transformation', 'pristine gleaming surfaces', 'modern apartment interior', 'visible dust contrast'],
    text: 'ПРОФЕССИОНАЛЬНАЯ УБОРКА',
    cta: 'ЗАКАЗАТЬ УБОРКУ',
    negative: ['cartoon', 'illustration', 'unrealistic', 'stock photos', 'cluttered text', 'dark', 'unprofessional', 'fake results']
  },
  
  repair: {
    keywords: ['ремонт', 'мастер', 'сантехник', 'электрик', 'отделка', 'строительство'],
    content_type: 'Professional process/result showcase of skilled craftsman at work',
    style: 'Professional, trustworthy, detailed craftsmanship',
    lighting: 'Bright workshop lighting with natural ambient fill',
    colors: 'Orange and gray color scheme',
    colorPsychology: 'conveying action and professionalism',
    composition: 'Close-up on skilled hands working with quality tools',
    mood: 'Confident, skilled, reliable expertise',
    elements: ['professional tools visible', 'skilled hands at work', 'quality materials', 'attention to detail'],
    text: 'МАСТЕР НА ВСЕ РУКИ',
    cta: 'ВЫЗВАТЬ МАСТЕРА',
    negative: ['amateur', 'messy workspace', 'cheap tools', 'unsafe', 'unprofessional', 'stock photo', 'fake']
  },
  
  beauty_salon: {
    keywords: ['салон', 'парикмахер', 'стрижка', 'маникюр', 'педикюр', 'косметолог', 'визаж', 'макияж', 'брови', 'ресницы', 'spa', 'спа'],
    content_type: 'Elegant beauty transformation split-screen showing stunning makeover',
    style: 'Elegant, glamorous, professional beauty',
    lighting: 'Soft professional salon lighting flattering skin tones creating glamorous atmosphere',
    colors: 'Pink and gold color palette',
    colorPsychology: 'conveying beauty and luxury',
    composition: 'Portrait close-up framing from shoulders up at eye level',
    mood: 'Confident, beautiful, transformed radiance',
    elements: ['stunning transformation', 'happy confident client', 'modern salon interior blurred', 'professional results'],
    text: 'ПРЕОБРАЖЕНИЕ ОТ МАСТЕРОВ',
    cta: 'ЗАПИСАТЬСЯ',
    negative: ['fake transformation', 'different people', 'stock photos', 'over-processed', 'unrealistic', 'bad lighting']
  },
  
  fitness: {
    keywords: ['фитнес', 'спорт', 'тренажер', 'йога', 'пилатес', 'тренировка', 'зал', 'бассейн', 'кроссфит'],
    content_type: 'Dynamic action shot of confident athletic person mid-workout',
    style: 'Energetic, motivating, powerful sports photography',
    lighting: 'Dramatic gym lighting with strong contrast creating energetic atmosphere',
    colors: 'Red and black color scheme',
    colorPsychology: 'conveying energy and power',
    composition: 'Low angle shot from slightly below eye level creating empowering perspective',
    mood: 'Motivated, strong, determined energy',
    elements: ['person exercising mid-movement', 'modern gym equipment', 'authentic effort visible', 'athletic wear'],
    text: 'СИЛА В ТЕБЕ',
    cta: 'БЕСПЛАТНОЕ ЗАНЯТИЕ',
    negative: ['perfect model', 'fake sweat', 'overly posed', 'unrealistic', 'stock fitness photo', 'unnatural']
  },
  
  restaurant: {
    keywords: ['ресторан', 'кухня', 'итальян', 'японс', 'суши', 'пицца', 'мясо', 'стейк', 'банкет'],
    content_type: 'Mouth-watering close-up photograph of authentic delicious dish',
    style: 'Delicious, mouth-watering, inviting food photography',
    lighting: 'Warm golden hour natural light from window creating cozy inviting atmosphere',
    colors: 'Warm earth tones palette',
    colorPsychology: 'stimulating appetite and comfort',
    composition: '45-degree overhead angle showing dish beautifully plated',
    mood: 'Appetizing, cozy, authentic warmth',
    elements: ['steam rising from hot meal', 'fresh ingredients visible', 'rustic table surface', 'garnish details'],
    text: 'АУТЕНТИЧНАЯ КУХНЯ',
    cta: 'ЗАБРОНИРОВАТЬ СТОЛИК',
    negative: ['artificial', 'plastic food', 'overprocessed', 'fake steam', 'stock photo', 'unappetizing', 'cold']
  },
  
  auto_service: {
    keywords: ['авто', 'машин', 'сто', 'шиномонтаж', 'автомойка', 'автосервис', 'диагностика', 'ремонт авто'],
    content_type: 'Professional auto service showcase with expert mechanic at work',
    style: 'Professional, technical, trustworthy automotive',
    lighting: 'Bright workshop/garage lighting with clean industrial feel',
    colors: 'Blue and orange color scheme',
    colorPsychology: 'representing trust and action',
    composition: 'Car detail focus or mechanic working professionally',
    mood: 'Reliable, expert, quality service',
    elements: ['professional equipment', 'clean organized workspace', 'attention to detail', 'modern tools'],
    text: 'ПРОФЕССИОНАЛЬНЫЙ АВТОСЕРВИС',
    cta: 'ЗАПИСАТЬСЯ НА СЕРВИС',
    negative: ['dirty workspace', 'unprofessional', 'old equipment', 'unsafe', 'amateur', 'stock photo']
  },
  
  clothing: {
    keywords: ['одежда', 'магазин', 'бутик', 'мода', 'fashion', 'платье', 'костюм', 'джинсы', 'обувь'],
    content_type: 'Stylish fashion lifestyle shot showcasing outfit in context',
    style: 'Stylish, trendy, aspirational fashion',
    lighting: 'Natural soft light or urban setting creating modern vibe',
    colors: 'Seasonal collection palette',
    colorPsychology: 'evoking style and aspiration',
    composition: 'Full body or 3/4 length showing complete look',
    mood: 'Confident, fashionable, modern lifestyle',
    elements: ['outfit showcase in motion', 'lifestyle context', 'model in action', 'quality fabrics visible'],
    text: 'НОВАЯ КОЛЛЕКЦИЯ',
    cta: 'КУПИТЬ ОНЛАЙН',
    negative: ['poor quality fabric', 'unflattering', 'outdated style', 'bad posture', 'stock photo']
  },
  
  jewelry: {
    keywords: ['ювелир', 'украшения', 'кольц', 'серьг', 'браслет', 'колье', 'золото', 'серебро', 'бриллиант'],
    content_type: 'Luxurious product close-up showcasing premium jewelry',
    style: 'Luxurious, elegant, premium quality',
    lighting: 'Dramatic jewelry lighting highlighting sparkle and reflections',
    colors: 'Gold/Silver and black palette',
    colorPsychology: 'conveying luxury and exclusivity',
    composition: 'Macro close-up capturing exquisite details',
    mood: 'Sophisticated, exclusive, valuable elegance',
    elements: ['sparkle and light reflections visible', 'luxury materials', 'elegant display', 'intricate details'],
    text: 'ЭКСКЛЮЗИВНЫЕ УКРАШЕНИЯ',
    cta: 'ПОСМОТРЕТЬ КОЛЛЕКЦИЮ',
    negative: ['cheap looking', 'dull', 'no sparkle', 'poor quality', 'fake jewelry', 'bad lighting']
  },
  
  electronics: {
    keywords: ['электроник', 'техник', 'телефон', 'компьютер', 'ноутбук', 'телевизор', 'гаджет'],
    content_type: 'Modern product showcase highlighting sleek technology design',
    style: 'Modern, sleek, high-tech aesthetic',
    lighting: 'Studio lighting with clean reflections on surfaces',
    colors: 'Blue and white palette',
    colorPsychology: 'representing technology and innovation',
    composition: '3/4 angle showing design features beautifully',
    mood: 'Innovative, cutting-edge, smart technology',
    elements: ['product features visible', 'clean minimal background', 'tech details', 'premium finish'],
    text: 'ПЕРЕДОВЫЕ ТЕХНОЛОГИИ',
    cta: 'УЗНАТЬ ЦЕНУ',
    negative: ['outdated', 'cheap plastic', 'fingerprints', 'scratches', 'poor quality', 'cluttered']
  },
  
  cafe: {
    keywords: ['кафе', 'кофе', 'кофейня', 'капучино', 'латте', 'эспрессо', 'завтрак'],
    content_type: 'Cozy lifestyle moment with perfectly crafted coffee',
    style: 'Cozy, inviting, authentic cafe aesthetic',
    lighting: 'Warm natural window light creating inviting cafe ambiance',
    colors: 'Brown, cream and beige palette',
    colorPsychology: 'evoking coffee comfort and warmth',
    composition: 'Overhead or table level intimate perspective',
    mood: 'Relaxed, comfortable, welcoming atmosphere',
    elements: ['beautiful latte art', 'hands holding warm cup', 'cozy interior hints', 'steam rising'],
    text: 'ВАШ УТРЕННИЙ РИТУАЛ',
    cta: 'ПОСЕТИТЬ НАС',
    negative: ['fake latte art', 'stock photo', 'too perfect', 'sterile', 'cold lighting', 'artificial']
  },
  
  bakery: {
    keywords: ['пекарня', 'хлеб', 'выпечка', 'торт', 'пирог', 'булоч', 'круассан', 'десерт', 'кондитер'],
    content_type: 'Warm appetizing close-up of fresh baked goods',
    style: 'Warm, homemade, appetizing artisan',
    lighting: 'Golden warm natural light creating fresh-from-oven feel',
    colors: 'Golden brown and white palette',
    colorPsychology: 'representing fresh baked warmth',
    composition: 'Close-up showing beautiful texture details',
    mood: 'Comforting, delicious, homemade authenticity',
    elements: ['steam and warmth visible', 'texture details', 'fresh from oven feel', 'flour dust hints'],
    text: 'СВЕЖАЯ ВЫПЕЧКА КАЖДЫЙ ДЕНЬ',
    cta: 'ЗАКАЗАТЬ',
    negative: ['stale looking', 'artificial', 'mass produced', 'cold', 'unappetizing', 'fake']
  },
  
  real_estate: {
    keywords: ['недвижимость', 'квартир', 'дом', 'аренда', 'продажа жилья', 'риелтор', 'новостройка'],
    content_type: 'Stunning interior showcase of dream living space',
    style: 'Aspirational, spacious, lifestyle real estate',
    lighting: 'Bright natural light flooding through large windows',
    colors: 'Neutral warm palette with accent colors',
    colorPsychology: 'conveying comfort and aspiration',
    composition: 'Wide angle showing spacious interiors',
    mood: 'Dream home, comfortable, desirable living',
    elements: ['beautiful interior design', 'natural light', 'spacious rooms', 'lifestyle touches'],
    text: 'ВАША МЕЧТА — НАШ ПРИОРИТЕТ',
    cta: 'ПОСМОТРЕТЬ ВАРИАНТЫ',
    negative: ['cramped', 'dark', 'messy', 'unfurnished badly', 'poor quality photo', 'distorted']
  },
  
  medical: {
    keywords: ['клиника', 'стоматолог', 'врач', 'медицин', 'здоровье', 'анализ', 'диагностик', 'лечение'],
    content_type: 'Professional medical facility with caring expert staff',
    style: 'Clean, professional, trustworthy healthcare',
    lighting: 'Bright clean clinical lighting with warmth',
    colors: 'Blue, white and green palette',
    colorPsychology: 'representing trust, cleanliness and health',
    composition: 'Professional portrait or facility showcase',
    mood: 'Caring, professional, reassuring trust',
    elements: ['modern equipment', 'friendly professional staff', 'clean facility', 'patient comfort'],
    text: 'ЗАБОТА О ВАШЕМ ЗДОРОВЬЕ',
    cta: 'ЗАПИСАТЬСЯ НА ПРИЕМ',
    negative: ['scary', 'cold', 'unfriendly', 'outdated equipment', 'clinical harsh', 'uncomfortable']
  },
  
  education: {
    keywords: ['курс', 'обучение', 'школа', 'универ', 'репетитор', 'занятия', 'тренинг', 'мастер-класс'],
    content_type: 'Engaging learning environment with enthusiastic students',
    style: 'Inspiring, professional, growth-oriented',
    lighting: 'Bright natural classroom lighting creating positive atmosphere',
    colors: 'Blue, yellow and white palette',
    colorPsychology: 'representing knowledge, optimism and clarity',
    composition: 'Action shot of engaged learning or achievement moment',
    mood: 'Inspired, motivated, achieving success',
    elements: ['engaged students', 'modern learning environment', 'achievement moments', 'professional instructor'],
    text: 'ЗНАНИЯ МЕНЯЮТ ЖИЗНЬ',
    cta: 'ЗАПИСАТЬСЯ НА КУРС',
    negative: ['boring', 'outdated classroom', 'disengaged', 'cluttered', 'unprofessional', 'stock photo']
  },
  
  pet: {
    keywords: ['питомец', 'собак', 'кошк', 'ветеринар', 'зоомагазин', 'груминг', 'корм'],
    content_type: 'Heartwarming pet portrait or care moment',
    style: 'Adorable, loving, professional pet care',
    lighting: 'Soft natural light highlighting fur texture and eyes',
    colors: 'Warm natural tones with playful accents',
    colorPsychology: 'conveying love, care and happiness',
    composition: 'Close-up portrait or action shot capturing personality',
    mood: 'Loving, playful, caring connection',
    elements: ['expressive pet eyes', 'healthy coat', 'happy expression', 'loving interaction'],
    text: 'ЗАБОТА О ВАШЕМ ПИТОМЦЕ',
    cta: 'УЗНАТЬ БОЛЬШЕ',
    negative: ['sad animal', 'poor condition', 'scary', 'aggressive', 'unhealthy', 'stock photo']
  },
  
  travel: {
    keywords: ['туризм', 'путешеств', 'тур', 'отдых', 'отпуск', 'отель', 'авиабилет', 'виза'],
    content_type: 'Breathtaking travel destination showcasing dream vacation',
    style: 'Inspiring, wanderlust, aspirational travel',
    lighting: 'Golden hour natural light creating magical atmosphere',
    colors: 'Vibrant natural destination colors',
    colorPsychology: 'evoking adventure and relaxation',
    composition: 'Scenic wide angle or lifestyle travel moment',
    mood: 'Adventurous, relaxing, dream escape',
    elements: ['stunning destination', 'lifestyle traveler', 'cultural elements', 'natural beauty'],
    text: 'ОТКРОЙТЕ МИР',
    cta: 'ЗАБРОНИРОВАТЬ ТУР',
    negative: ['crowded tourists', 'bad weather', 'poor quality', 'fake', 'stock photo', 'oversaturated']
  },
  
  flowers: {
    keywords: ['цвет', 'букет', 'флорист', 'роз', 'тюльпан', 'доставка цветов'],
    content_type: 'Stunning floral arrangement with fresh beautiful blooms',
    style: 'Elegant, fresh, romantic floristry',
    lighting: 'Soft natural light highlighting petal textures and colors',
    colors: 'Rich floral palette with seasonal tones',
    colorPsychology: 'conveying love, celebration and natural beauty',
    composition: 'Artistic arrangement shot or delivery moment',
    mood: 'Romantic, celebratory, natural beauty',
    elements: ['fresh dewy petals', 'artistic arrangement', 'variety of blooms', 'elegant wrapping'],
    text: 'ЦВЕТЫ ДЛЯ ОСОБЫХ МОМЕНТОВ',
    cta: 'ЗАКАЗАТЬ БУКЕТ',
    negative: ['wilted', 'dead flowers', 'cheap looking', 'artificial', 'bad arrangement', 'stock photo']
  },
  
  photo: {
    keywords: ['фотограф', 'съёмка', 'фотосессия', 'видео', 'свадьба фото', 'портрет'],
    content_type: 'Stunning professional photography showcase demonstrating skill',
    style: 'Artistic, professional, portfolio quality',
    lighting: 'Masterful lighting demonstrating expertise',
    colors: 'Signature editing style palette',
    colorPsychology: 'conveying artistry and professionalism',
    composition: 'Portfolio showcase of best work',
    mood: 'Artistic, professional, memorable moments',
    elements: ['stunning compositions', 'perfect lighting', 'emotional moments', 'technical excellence'],
    text: 'СОХРАНИТЕ ВАЖНЫЕ МОМЕНТЫ',
    cta: 'ЗАБРОНИРОВАТЬ СЪЁМКУ',
    negative: ['amateur', 'bad lighting', 'blurry', 'overexposed', 'poor composition', 'cheap looking']
  }
};

export function detectBusinessType(input: string): BusinessConfig | null {
  const lowerInput = input.toLowerCase();
  
  for (const [, config] of Object.entries(businessTypes)) {
    for (const keyword of config.keywords) {
      if (lowerInput.includes(keyword)) {
        return config;
      }
    }
  }
  
  return null;
}

export function extractLocation(input: string): string | null {
  const locationPatterns = [
    /в\s+(\w+е|\w+и|\w+у|\w+ы)/gi,
    /город\s+(\w+)/gi,
    /г\.\s*(\w+)/gi,
  ];
  
  for (const pattern of locationPatterns) {
    const match = input.match(pattern);
    if (match) {
      return match[0];
    }
  }
  
  return null;
}

export const defaultConfig: BusinessConfig = {
  keywords: [],
  content_type: 'Professional commercial advertisement showcasing business offering',
  style: 'Clean, professional, modern commercial',
  lighting: 'Bright professional studio or natural lighting',
  colors: 'Business-appropriate color palette',
  colorPsychology: 'conveying professionalism and trust',
  composition: 'Centered balanced composition with clear focal point',
  mood: 'Professional, inviting, trustworthy',
  elements: ['clear subject focus', 'quality visual', 'brand consistency'],
  text: 'КАЧЕСТВО И ПРОФЕССИОНАЛИЗМ',
  cta: 'УЗНАТЬ БОЛЬШЕ',
  negative: ['amateur', 'low quality', 'blurry', 'unprofessional', 'cluttered', 'fake']
};
