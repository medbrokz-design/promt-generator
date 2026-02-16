// УЛУЧШЕННЫЙ ГЕНЕРАТОР ПРОМПТОВ - Максимально детальные промпты

import { PromptSettings, PromptBlocks, GeneratedPrompt } from '../types';
import { businessConfigs, businessKeywords, platformFormats, negativePrompts as baseNegativePrompts } from '../data/businessConfigs';
import {
  qualityDescriptors,
  lightingDescriptions,
  cameraSettings,
  compositions,
  moods,
  colorPalettes,
  personDescriptions,
  foodDescriptions,
  interiorDescriptions,
  beforeAfterDescriptions,
  technicalSpecs,
  negativePromptBase,
  negativePromptByCategory,
  ctaButtons,
  headlines,
  socialProofBadges,
  randomChoice,
  randomChoices
} from '../data/promptDatabase';

// Определение типа бизнеса
export function detectBusinessType(input: string): string {
  const lowerInput = input.toLowerCase();
  
  for (const [type, keywords] of Object.entries(businessKeywords)) {
    for (const keyword of keywords) {
      if (lowerInput.includes(keyword.toLowerCase())) {
        return type;
      }
    }
  }
  
  return 'restaurant';
}

// Извлечение локации
export function extractLocation(input: string): string {
  const cities = [
    'москва', 'москве', 'московский', 'мск',
    'спб', 'петербург', 'санкт-петербург', 'питер',
    'новосибирск', 'екатеринбург', 'казань', 'нижний новгород', 
    'челябинск', 'самара', 'омск', 'ростов', 'уфа', 'красноярск', 
    'воронеж', 'пермь', 'волгоград', 'краснодар', 'сочи', 'тюмень', 
    'саратов', 'тольятти', 'ижевск', 'барнаул', 'ульяновск', 'иркутск', 
    'хабаровск', 'ярославль', 'владивосток', 'махачкала', 'томск', 
    'оренбург', 'кемерово', 'новокузнецк', 'рязань', 'астрахань',
    'набережные челны', 'пенза', 'липецк', 'киров', 'чебоксары', 
    'тула', 'калининград', 'балашиха', 'курск', 'ставрополь', 'улан-удэ',
    'актобе', 'алматы', 'астана', 'нур-султан', 'шымкент', 'караганда',
    'атырау', 'павлодар', 'семей', 'костанай', 'тараз', 'уральск',
    'минск', 'киев', 'одесса', 'харьков', 'днепр', 'львов', 
    'ташкент', 'баку', 'тбилиси', 'ереван', 'бишкек', 'душанбе'
  ];
  
  const lowerInput = input.toLowerCase();
  
  for (const city of cities) {
    if (lowerInput.includes(city)) {
      // Правильная капитализация
      if (city === 'мск') return 'Москва';
      if (city === 'спб' || city === 'питер') return 'Санкт-Петербург';
      return city.charAt(0).toUpperCase() + city.slice(1);
    }
  }
  
  return '';
}

// Определение категории освещения по типу бизнеса
function getLightingCategory(businessType: string): keyof typeof lightingDescriptions {
  const lightingMap: Record<string, keyof typeof lightingDescriptions> = {
    cleaning: 'natural',
    beauty: 'studio',
    fitness: 'dramatic',
    restaurant: 'warm',
    cafe: 'warm',
    bakery: 'warm',
    jewelry: 'dramatic',
    clothing: 'natural',
    electronics: 'studio',
    auto: 'studio',
    realestate: 'natural',
    medical: 'cool',
    education: 'natural',
    pets: 'natural',
    travel: 'natural',
    flowers: 'natural',
    photo: 'dramatic',
    repair: 'studio'
  };
  return lightingMap[businessType] || 'natural';
}

// Определение цветовой палитры по типу бизнеса
function getColorPalette(businessType: string): keyof typeof colorPalettes {
  const colorMap: Record<string, keyof typeof colorPalettes> = {
    cleaning: 'fresh',
    beauty: 'beauty',
    fitness: 'energy',
    restaurant: 'appetizing',
    cafe: 'warmth',
    bakery: 'warmth',
    jewelry: 'luxury',
    clothing: 'trust',
    electronics: 'tech',
    auto: 'trust',
    realestate: 'nature',
    medical: 'trust',
    education: 'nature',
    pets: 'nature',
    travel: 'nature',
    flowers: 'beauty',
    photo: 'elegant',
    repair: 'trust'
  };
  return colorMap[businessType] || 'trust';
}

// Определение типа камеры по типу бизнеса
function getCameraCategory(businessType: string): keyof typeof cameraSettings {
  const cameraMap: Record<string, keyof typeof cameraSettings> = {
    cleaning: 'wide',
    beauty: 'portrait',
    fitness: 'cinematic',
    restaurant: 'product',
    cafe: 'product',
    bakery: 'product',
    jewelry: 'product',
    clothing: 'portrait',
    electronics: 'product',
    auto: 'wide',
    realestate: 'wide',
    medical: 'portrait',
    education: 'wide',
    pets: 'portrait',
    travel: 'wide',
    flowers: 'product',
    photo: 'cinematic',
    repair: 'wide'
  };
  return cameraMap[businessType] || 'portrait';
}

// Определение настроения по типу бизнеса
function getMoodCategory(businessType: string): keyof typeof moods {
  const moodMap: Record<string, keyof typeof moods> = {
    cleaning: 'fresh',
    beauty: 'elegant',
    fitness: 'energetic',
    restaurant: 'appetizing',
    cafe: 'cozy',
    bakery: 'cozy',
    jewelry: 'luxurious',
    clothing: 'elegant',
    electronics: 'professional',
    auto: 'professional',
    realestate: 'luxurious',
    medical: 'professional',
    education: 'professional',
    pets: 'cozy',
    travel: 'adventurous',
    flowers: 'romantic',
    photo: 'elegant',
    repair: 'professional'
  };
  return moodMap[businessType] || 'professional';
}

// Генерация детального описания субъекта
function generateSubjectDescription(businessType: string, input: string, location: string): string {
  const config = businessConfigs[businessType];
  const locationText = location ? ` in ${location}` : '';
  
  const subjectTemplates: Record<string, () => string> = {
    cleaning: () => {
      const desc = randomChoice(beforeAfterDescriptions.contrast);
      const layout = randomChoice(beforeAfterDescriptions.layout);
      return `${desc}. ${layout}. Modern apartment interior${locationText} with recognizable local architectural style`;
    },
    beauty: () => {
      const person = randomChoice(personDescriptions.beauty);
      return `${person}. Stunning before-after hair and makeup transformation in upscale beauty salon${locationText}`;
    },
    fitness: () => {
      const person = randomChoice(personDescriptions.fitness);
      return `${person}. Dynamic workout scene in modern well-equipped gym${locationText}`;
    },
    restaurant: () => {
      const plating = randomChoice(foodDescriptions.plating);
      const texture = randomChoice(foodDescriptions.textures);
      const detail = randomChoice(foodDescriptions.details);
      return `${plating}. ${texture}. ${detail}. Signature dish from upscale restaurant${locationText}`;
    },
    cafe: () => {
      const person = randomChoice(personDescriptions.casual);
      return `Perfect latte with intricate rosetta latte art in handcrafted ceramic cup on rustic reclaimed wood table. ${person}. Cozy artisan coffee shop atmosphere${locationText}`;
    },
    bakery: () => {
      const texture = randomChoice(foodDescriptions.textures);
      return `Fresh artisan bread just from oven with ${texture}. Golden crusty exterior with soft pillowy interior visible in cross-section. Rustic bakery setting${locationText}`;
    },
    jewelry: () => {
      return `Exquisite handcrafted jewelry piece with brilliant-cut diamonds catching light in spectacular fire and brilliance, set in polished precious metal with mirror-like finish. Elegant luxury display${locationText}`;
    },
    clothing: () => {
      const person = randomChoice(personDescriptions.casual);
      return `${person} showcasing complete stylish outfit with perfect fit and contemporary silhouette. Urban lifestyle setting${locationText} with authentic street style backdrop`;
    },
    electronics: () => {
      return `Sleek modern electronic device with premium materials - brushed aluminum, pristine glass, precise manufacturing details visible. Minimalist product showcase${locationText}`;
    },
    auto: () => {
      const person = randomChoice(personDescriptions.professional);
      return `Professional auto technician performing precision work on vehicle. ${person}. Modern clean service center${locationText} with professional diagnostic equipment`;
    },
    realestate: () => {
      const interior = randomChoice(interiorDescriptions.luxury);
      return `${interior}. Stunning property${locationText} with desirable features and exceptional natural lighting showcasing space and potential`;
    },
    medical: () => {
      const person = randomChoice(personDescriptions.professional);
      return `${person} in modern medical facility with state-of-the-art equipment. Clean professional healthcare environment${locationText} conveying trust and expertise`;
    },
    education: () => {
      return `Engaged learners in modern educational environment with contemporary teaching technology, comfortable ergonomic seating, and inspiring learning materials${locationText}`;
    },
    pets: () => {
      return `Adorable healthy pet with glossy coat and bright eyes receiving professional loving care. Clean modern pet care facility${locationText} with gentle handling visible`;
    },
    travel: () => {
      return `Breathtaking destination landscape with stunning natural beauty, dramatic sky with golden hour colors, unique local architecture or natural landmarks creating wanderlust${locationText}`;
    },
    flowers: () => {
      return `Stunning professional floral arrangement with fresh premium blooms in harmonious color palette, varied textures and heights creating visual interest, elegant presentation${locationText}`;
    },
    photo: () => {
      return `Behind-the-scenes of professional photography session with high-end camera equipment, perfect lighting setup, photographer capturing decisive moment${locationText}`;
    },
    repair: () => {
      const person = randomChoice(personDescriptions.professional);
      return `${person} demonstrating expert craftsmanship with professional tools. Before-after repair transformation showing quality workmanship${locationText}`;
    }
  };
  
  return subjectTemplates[businessType]?.() || `Professional ${config.contentType} showcasing ${input}${locationText}`;
}

// Генерация детального описания окружения
function generateSettingDescription(businessType: string): string {
  const config = businessConfigs[businessType];
  
  const settingTemplates: Record<string, string[]> = {
    cleaning: [
      "Contemporary urban apartment with modern furniture and decor, large windows with city views, living space that resonates with target audience lifestyle",
      "Spacious family home with hardwood floors, neutral color palette, typical residential setting instantly recognizable to potential customers"
    ],
    beauty: [
      "Luxurious modern salon interior with designer chairs, premium products on display, elegant mirrors with professional lighting, fresh flowers as accent",
      "Contemporary beauty studio with rose gold accents, velvet seating, crystal chandeliers, Instagram-worthy interior design"
    ],
    fitness: [
      "State-of-the-art gym with professional equipment, motivational atmosphere, other members visible but not distracting, energetic environment",
      "Modern fitness studio with clean lines, mirrors, functional training area, professional athletic atmosphere"
    ],
    restaurant: [
      "Elegant restaurant table setting with fine linens, quality tableware, ambient candlelight, glimpse of sophisticated interior design",
      "Rustic authentic restaurant interior with exposed brick, warm wood tones, intimate table setting, cozy atmospheric lighting"
    ],
    cafe: [
      "Artisan coffee shop with exposed brick walls, reclaimed wood furniture, vintage decor items, plants adding life, indie music vibe",
      "Modern minimalist cafe with Scandinavian design influence, large windows, community table, specialty coffee equipment visible"
    ],
    realestate: [
      "Open floor plan with seamless flow between living areas, premium finishes throughout, architectural details adding character",
      "Bright airy space with floor-to-ceiling windows, designer fixtures, staging that suggests aspirational lifestyle"
    ]
  };
  
  return randomChoice(settingTemplates[businessType] || [`${config.elements.join(', ')}, professional environment optimized for ${businessType} business`]);
}

// Генерация текстовых оверлеев
function generateTextOverlay(businessType: string, settings: PromptSettings): string {
  const headline = randomChoice(headlines[businessType] || headlines.restaurant);
  const cta = randomChoice(ctaButtons[businessType] || ctaButtons.restaurant);
  const socialProof = randomChoice(socialProofBadges);
  
  const textLanguageNote = settings.language === 'ru' 
    ? 'All text in Russian Cyrillic' 
    : settings.language === 'en' 
      ? 'All text in English' 
      : 'Primary text in Russian with English accents';
  
  return `Bold headline "${headline}" in modern sans-serif font with strong visual hierarchy, subheadline with key value proposition, prominent call-to-action button "${cta}" in contrasting color for maximum visibility, small social proof element "${socialProof}" adding credibility. ${textLanguageNote}. Text positioned using rule of thirds with adequate breathing room`;
}

// Основная функция генерации блоков промпта
export function generatePromptBlocks(
  input: string,
  businessType: string,
  location: string,
  settings: PromptSettings
): PromptBlocks {
  const config = businessConfigs[businessType] || businessConfigs.restaurant;
  const format = platformFormats[settings.platform][settings.format];
  
  // Выбор компонентов
  const quality = randomChoice(qualityDescriptors.photo);
  const lightingCat = getLightingCategory(businessType);
  const lighting = randomChoice(lightingDescriptions[lightingCat]);
  const colorCat = getColorPalette(businessType);
  const colorPalette = colorPalettes[colorCat];
  const cameraCat = getCameraCategory(businessType);
  const camera = randomChoice(cameraSettings[cameraCat]);
  const moodCat = getMoodCategory(businessType);
  const mood = randomChoice(moods[moodCat]);
  const composition = randomChoice([
    ...compositions.ruleOfThirds,
    ...compositions.dynamic,
    ...(businessType === 'jewelry' || businessType === 'electronics' ? compositions.minimal : compositions.layered)
  ]);
  
  // Генерация детальных описаний
  const subject = generateSubjectDescription(businessType, input, location);
  const setting = generateSettingDescription(businessType);
  const textOverlay = generateTextOverlay(businessType, settings);
  const technical = randomChoice(technicalSpecs.resolution) + '. ' + randomChoice(technicalSpecs.processing);
  
  return {
    quality,
    contentType: config.contentType,
    subject,
    setting,
    lighting,
    colors: `${colorPalette.colors}. ${colorPalette.psychology}`,
    style: `${config.style} style ${mood}`,
    composition: `${composition}. ${camera}`,
    details: config.elements.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(', ') + '. ' + technical,
    textOverlay,
    cta: randomChoice(ctaButtons[businessType] || ctaButtons.restaurant),
    format: `${format}. Optimized for mobile viewing with clear legibility at small sizes`,
    socialProof: randomChoice(socialProofBadges)
  };
}

// Сборка финального промпта
export function assemblePrompt(blocks: PromptBlocks, settings: PromptSettings): string {
  // Определяем длину на основе настроек
  const isShort = settings.length === 'short';
  const isLong = settings.length === 'long';
  
  let parts: string[] = [];
  
  // Начало - качество и тип контента
  parts.push(`${blocks.quality} capturing ${blocks.contentType}`);
  
  // Субъект - всегда детально
  parts.push(blocks.subject);
  
  // Окружение
  parts.push(blocks.setting);
  
  // Освещение - критически важно (80% промптов)
  parts.push(blocks.lighting);
  
  // Цвета с психологией
  if (!isShort) {
    parts.push(blocks.colors);
  }
  
  // Стиль и настроение (72.7% промптов)
  parts.push(blocks.style);
  
  // Композиция и камера (73.5% промптов)
  parts.push(blocks.composition);
  
  // Детали
  if (!isShort) {
    parts.push(blocks.details);
  }
  
  // Текстовые элементы (для рекламы)
  if (isLong) {
    parts.push(blocks.textOverlay);
  }
  
  // Формат
  parts.push(blocks.format);
  
  // Объединяем с правильной пунктуацией
  let prompt = parts.map(p => {
    p = p.trim();
    // Убираем двойные точки
    while (p.endsWith('..')) p = p.slice(0, -1);
    // Добавляем точку если нет
    if (!p.endsWith('.') && !p.endsWith('!') && !p.endsWith('?')) {
      p += '.';
    }
    return p;
  }).join(' ');
  
  // Финальная очистка
  prompt = prompt.replace(/\.\s+\./g, '.').replace(/\s+/g, ' ').trim();
  
  return prompt;
}

// Генерация детального negative prompt
export function generateNegativePrompt(businessType: string): string {
  // Базовые негативы (всегда включены)
  const baseNegatives = randomChoices(negativePromptBase, 15);
  
  // Специфичные для категории
  const categoryNegatives = negativePromptByCategory[businessType] || [];
  
  // Дополнительные из старой базы
  const legacyNegatives = baseNegativePrompts[businessType] || [];
  
  // Объединяем и убираем дубликаты
  const allNegatives = [...new Set([
    ...baseNegatives,
    ...categoryNegatives,
    ...legacyNegatives
  ])];
  
  return allNegatives.slice(0, 20).join(', ');
}

// Главная функция генерации полного промпта
export function generateFullPrompt(
  input: string,
  settings: PromptSettings
): GeneratedPrompt {
  const businessType = detectBusinessType(input);
  const location = extractLocation(input);
  const blocks = generatePromptBlocks(input, businessType, location, settings);
  const mainPrompt = assemblePrompt(blocks, settings);
  const negativePrompt = generateNegativePrompt(businessType);
  
  return {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    input,
    mainPrompt,
    negativePrompt,
    blocks,
    businessType,
    location,
    settings,
    timestamp: Date.now(),
    isFavorite: false
  };
}

// Регенерация с обновлёнными блоками
export function regenerateWithBlocks(
  originalPrompt: GeneratedPrompt,
  updatedBlocks: Partial<PromptBlocks>
): GeneratedPrompt {
  const settings = originalPrompt.settings;
  
  // Получаем базовые блоки
  const baseBlocks = originalPrompt.blocks || generatePromptBlocks(
    originalPrompt.input,
    originalPrompt.businessType,
    originalPrompt.location,
    settings
  );
  
  // Мержим с обновлениями
  const mergedBlocks = { ...baseBlocks, ...updatedBlocks };
  const mainPrompt = assemblePrompt(mergedBlocks, settings);
  
  return {
    ...originalPrompt,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    mainPrompt,
    blocks: mergedBlocks,
    timestamp: Date.now()
  };
}

// Экспорт хелперов для компонентов
export { 
  headlines, 
  ctaButtons, 
  socialProofBadges,
  colorPalettes,
  lightingDescriptions,
  moods,
  compositions
};
