# 📚 NanoBanana Pro v6.0 — Полная техническая документация

---

## 📑 Содержание

1. [Архитектура системы](#1-архитектура-системы)
2. [PromptEngine — Ядро системы](#2-promptengine--ядро-системы)
3. [База данных промптов](#3-база-данных-промптов)
4. [AI Semantic Analyzer](#4-ai-semantic-analyzer)
5. [Психологический модуль](#5-психологический-модуль)
6. [Конверсионная оптимизация](#6-конверсионная-оптимизация)
7. [Бизнес-профили](#7-бизнес-профили)
8. [Генерация по режимам](#8-генерация-по-режимам)
9. [Brand DNA System](#9-brand-dna-system)
10. [Persona System](#10-persona-system)
11. [Funnel Generator](#11-funnel-generator)
12. [Storyboard System](#12-storyboard-system)
13. [CTR & Viral Prediction](#13-ctr--viral-prediction)
14. [Content Calendar](#14-content-calendar)
15. [Export/Import System](#15-exportimport-system)
16. [UI Components](#16-ui-components)
17. [Расширение системы](#17-расширение-системы)

---

## 1. Архитектура системы

### 1.1 Общая схема

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │Generator│ │ Funnel  │ │  Brand  │ │ Persona │ │Calendar │   │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘   │
└───────┼──────────┼─────────┼─────────┼─────────┼────────────────┘
        │          │         │         │         │
        ▼          ▼         ▼         ▼         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      PROMPT ENGINE v6.0                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Semantic   │  │  Psychology  │  │  Conversion  │          │
│  │   Analyzer   │  │    Module    │  │  Optimizer   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Business   │  │    Style     │  │   Platform   │          │
│  │   Profiles   │  │   Profiles   │  │   Adapter    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────────┐
│                         DATABASE                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐        │
│  │Lighting│ │ Colors │ │ Moods  │ │ Hooks  │ │Negatives│        │
│  │  20+   │ │  16+   │ │  30+   │ │  50+   │ │  50+   │        │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘        │
└─────────────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────────┐
│                      OUTPUT ADAPTERS                             │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐        │
│  │ Gemini │ │  Flux  │ │Midjourn│ │ DALL-E │ │  Sora  │        │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘        │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Файловая структура

```
src/
├── engine/
│   └── PromptEngine.ts          # Основной движок (2000+ строк)
│       ├── DATABASE              # База данных промптов
│       ├── SemanticAnalyzer      # AI-анализ запроса
│       ├── PsychologyModule      # Психологические триггеры
│       ├── ConversionOptimizer   # CTR/Viral оптимизация
│       ├── BusinessProfiles      # 16+ профилей бизнеса
│       ├── StyleProfiles         # 6 стилей контента
│       ├── PlatformAdapters      # Адаптация под платформы
│       ├── FunnelGenerator       # AIDA воронка
│       ├── StoryboardDirector    # Раскадровка видео
│       └── ExportSystem          # JSON экспорт
│
├── App.tsx                       # UI компоненты (3000+ строк)
│   ├── GeneratorTab              # Основная генерация
│   ├── FunnelTab                 # Smart Funnel
│   ├── BrandTab                  # Brand DNA Kit
│   ├── PersonaTab                # Persona Avatars
│   ├── CalendarTab               # Content Calendar
│   ├── StoryboardTab             # Storyboard Director
│   ├── CompetitorTab             # Competitor Crusher
│   ├── RemixTab                  # Smart Remix
│   ├── BatchTab                  # Product Batch
│   └── HistoryTab                # История/Избранное
│
├── main.tsx                      # React entry point
└── index.css                     # Tailwind styles
```

### 1.3 Поток данных

```
User Input → Semantic Analysis → Business Detection → 
Psychology Selection → Prompt Assembly → Model Adaptation → 
CTR Prediction → Output
```

---

## 2. PromptEngine — Ядро системы

### 2.1 Инициализация

```typescript
class PromptEngine {
  private readonly DATABASE: PromptDatabase;
  
  constructor() {
    this.DATABASE = {
      businesses: { ... },       // 16+ бизнес-профилей
      lighting: { ... },         // 20+ типов освещения
      camera: { ... },           // 15+ настроек камеры
      compositions: [ ... ],     // 10+ композиций
      moods: { ... },            // 30+ настроений
      colors: { ... },           // 16+ палитр
      hooks: { ... },            // 50+ хуков
      negatives: { ... },        // 50+ негативных
      psychology: { ... },       // 15+ триггеров
      styles: { ... },           // 6 стилей
      platforms: { ... },        // 5 платформ
      seasons: { ... }           // 9 сезонов
    };
  }
}
```

### 2.2 Главный метод генерации

```typescript
generate(
  query: string,
  options: GenerateOptions
): GeneratedPrompt {
  
  // 1. Семантический анализ
  const analysis = this.analyzeQuery(query);
  
  // 2. Выбор бизнес-профиля
  const business = this.selectBusinessProfile(analysis);
  
  // 3. Выбор психологии
  const psychology = this.selectPsychology(business, options);
  
  // 4. Сборка блоков
  const blocks = this.assembleBlocks(analysis, business, psychology, options);
  
  // 5. Генерация промпта
  const prompt = this.buildPrompt(blocks, options);
  
  // 6. Адаптация под модель
  const adapted = this.adaptForModel(prompt, options.model);
  
  // 7. Предсказание CTR
  const scores = this.predictScores(adapted);
  
  return {
    mainPrompt: adapted.main,
    negativePrompt: adapted.negative,
    blocks,
    ctrScore: scores.ctr,
    viralScore: scores.viral,
    ...
  };
}
```

### 2.3 Методы PromptEngine

| Метод | Описание | Возвращает |
|-------|----------|------------|
| `generate()` | Основная генерация | `GeneratedPrompt` |
| `generateFunnel()` | AIDA воронка | `FunnelResult` |
| `generateStoryboard()` | Раскадровка | `Storyboard` |
| `generateCalendar()` | Контент-план | `CalendarResult` |
| `analyzeCompetitors()` | Анализ конкурентов | `CompetitorAnalysis` |
| `remixPrompt()` | Улучшение промпта | `GeneratedPrompt` |
| `predictCTR()` | Предсказание CTR | `CTRPrediction` |
| `analyzePromptDNA()` | Разбор промпта | `PromptDNA` |

---

## 3. База данных промптов

### 3.1 Структура DATABASE

```typescript
const DATABASE = {
  // Типы освещения (20+)
  lighting: {
    natural: {
      soft: "Soft diffused natural daylight streaming through large windows...",
      golden: "Warm golden hour sunlight with long dramatic shadows...",
      overcast: "Even overcast daylight providing soft shadowless illumination...",
      // ...
    },
    studio: {
      softbox: "Professional softbox lighting creating even flattering illumination...",
      rembrandt: "Classic Rembrandt lighting with signature triangle...",
      // ...
    },
    dramatic: {
      chiaroscuro: "High contrast chiaroscuro lighting with deep shadows...",
      rim: "Strong rim lighting creating glowing outline around subject...",
      // ...
    },
    // ...
  },

  // Настройки камеры (15+)
  camera: {
    portrait: {
      lens: "85mm f/1.4 prime lens",
      settings: "shallow depth of field with creamy bokeh",
      angle: "eye level straight-on or slight 3/4 angle",
      // ...
    },
    product: { ... },
    wide: { ... },
    cinematic: { ... },
    food: { ... },
    // ...
  },

  // Цветовые палитры (16+)
  colors: {
    trust: {
      primary: "#1a73e8",
      secondary: "#ffffff", 
      accent: "#34a853",
      psychology: "Blue builds trust and reliability...",
      usage: "Professional services, finance, healthcare"
    },
    energy: {
      primary: "#ff0000",
      secondary: "#000000",
      accent: "#ff6b00",
      psychology: "Red creates urgency and excitement...",
      usage: "Fitness, sales, food"
    },
    // luxury, nature, warmth, cool, creative, minimal, vibrant...
  },

  // Психологические триггеры (15+)
  psychology: {
    fomo: {
      name: "Fear of Missing Out",
      description: "Creates urgency through potential loss",
      visualElements: ["countdown timers", "limited stock indicators", "exclusive badges"],
      textPatterns: ["Только сегодня", "Осталось 3 шт", "Успей до..."],
      emotionalHook: "anxiety about missing opportunity"
    },
    socialProof: { ... },
    authority: { ... },
    scarcity: { ... },
    reciprocity: { ... },
    // ...
  },

  // Хуки для контента (50+)
  hooks: {
    pov: ["POV: ты {action}", "POV: когда {situation}"],
    question: ["А ты знал, что...?", "Почему никто не говорит о...?"],
    controversy: ["Это изменит всё", "Забудь всё, что ты знал о..."],
    story: ["История как я...", "3 года назад я..."],
    // ...
  },

  // Негативные промпты (50+)
  negatives: {
    technical: ["low quality", "blurry", "pixelated", "overexposed", "underexposed"],
    anatomy: ["deformed", "bad anatomy", "wrong proportions", "extra fingers"],
    style: ["cartoon", "illustration", "3d render", "anime"],
    artifacts: ["watermark", "signature", "text", "logo"],
    // ...
  }
};
```

### 3.2 Бизнес-профили

```typescript
businesses: {
  cleaning: {
    name: "Клининг",
    keywords: ["клининг", "уборка", "чистота", "clean"],
    contentType: "before-after split-screen",
    visualStyle: "clean, bright, professional",
    primaryEmotion: "relief, satisfaction",
    targetPain: ["грязь", "нет времени", "усталость"],
    targetDesire: ["чистота", "свободное время", "комфорт"],
    recommendedTriggers: ["transformation", "trust", "convenience"],
    colors: "trust", // ссылка на палитру
    lighting: "natural.soft",
    composition: "splitScreen",
    cta: "ЗАКАЗАТЬ УБОРКУ",
    hooks: ["before-after", "transformation", "satisfaction"]
  },
  
  restaurant: {
    name: "Ресторан",
    keywords: ["ресторан", "еда", "кухня", "food"],
    contentType: "appetizing food close-up",
    visualStyle: "warm, inviting, delicious",
    primaryEmotion: "appetite, desire, comfort",
    targetPain: ["голод", "скучная еда", "нет времени готовить"],
    targetDesire: ["вкусная еда", "уютная атмосфера", "особый вечер"],
    recommendedTriggers: ["desire", "sensory", "social"],
    colors: "warmth",
    lighting: "natural.golden",
    composition: "closeUp45",
    cta: "ЗАБРОНИРОВАТЬ",
    hooks: ["foodPorn", "behindScenes", "chefSecret"]
  },
  
  // beauty, fitness, auto, realestate, medical, education...
  // Всего 16+ профилей
}
```

---

## 4. AI Semantic Analyzer

### 4.1 Анализ запроса

```typescript
analyzeQuery(query: string): SemanticAnalysis {
  return {
    // Основные данные
    originalQuery: query,
    businessType: this.detectBusinessType(query),
    location: this.extractLocation(query),
    
    // Сегментация
    priceSegment: this.detectPriceSegment(query),
    // "элитный", "люкс" → "luxury"
    // "бюджетный", "дешёвый" → "budget"
    // default → "mid"
    
    // Эмоциональный анализ
    emotionalTone: this.detectTone(query),
    // "срочно", "быстро" → "urgent"
    // "качественный", "надёжный" → "professional"
    // "уютный", "домашний" → "cozy"
    
    // Целевая аудитория
    targetAudience: {
      gender: this.detectGender(query),
      ageRange: this.detectAge(query),
      painPoints: this.extractPainPoints(query),
      desires: this.extractDesires(query)
    },
    
    // Дополнительные маркеры
    seasonality: this.detectSeason(query),
    urgency: this.detectUrgency(query),
    specialOffer: this.detectOffer(query)
  };
}
```

### 4.2 Определение типа бизнеса

```typescript
detectBusinessType(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Приоритетный поиск по ключевым словам
  for (const [type, profile] of Object.entries(this.DATABASE.businesses)) {
    if (profile.keywords.some(kw => lowerQuery.includes(kw))) {
      return type;
    }
  }
  
  // Семантический анализ контекста
  if (this.containsServiceIndicators(lowerQuery)) {
    return this.detectServiceType(lowerQuery);
  }
  
  if (this.containsProductIndicators(lowerQuery)) {
    return this.detectProductType(lowerQuery);
  }
  
  // Default
  return 'general';
}
```

### 4.3 Извлечение локации

```typescript
extractLocation(query: string): string | null {
  const cities = [
    'москва', 'moscow', 'мск',
    'санкт-петербург', 'питер', 'спб',
    'алматы', 'almaty',
    'астана', 'нур-султан',
    'ташкент', 'tashkent',
    'киев', 'kiev', 'kyiv',
    'минск', 'minsk',
    // ... 50+ городов
  ];
  
  const lowerQuery = query.toLowerCase();
  
  for (const city of cities) {
    if (lowerQuery.includes(city)) {
      return this.normalizeCity(city);
    }
  }
  
  // Поиск паттернов "в {город}", "город {название}"
  const patterns = [
    /в\s+([а-яё]+)/i,
    /город\s+([а-яё]+)/i,
    /г\.\s*([а-яё]+)/i
  ];
  
  for (const pattern of patterns) {
    const match = query.match(pattern);
    if (match) {
      return this.normalizeCity(match[1]);
    }
  }
  
  return null;
}
```

---

## 5. Психологический модуль

### 5.1 Выбор триггеров

```typescript
selectPsychology(
  business: BusinessProfile,
  options: GenerateOptions
): PsychologyConfig {
  
  // Базовые триггеры из профиля бизнеса
  const baseTriggers = business.recommendedTriggers;
  
  // Дополнительные триггеры по контексту
  const contextTriggers = this.getContextTriggers(options);
  
  // Сезонные триггеры
  const seasonalTriggers = this.getSeasonalTriggers();
  
  // Ранжирование по эффективности
  const ranked = this.rankTriggers([
    ...baseTriggers,
    ...contextTriggers,
    ...seasonalTriggers
  ]);
  
  // Выбор топ-3
  return {
    primary: ranked[0],
    secondary: ranked[1],
    tertiary: ranked[2],
    visualElements: this.getVisualElements(ranked.slice(0, 3)),
    textPatterns: this.getTextPatterns(ranked.slice(0, 3)),
    emotionalHooks: this.getEmotionalHooks(ranked.slice(0, 3))
  };
}
```

### 5.2 Триггеры в деталях

```typescript
psychology: {
  fomo: {
    name: "Fear of Missing Out",
    nameRu: "Страх упустить",
    effectiveness: 0.89, // 89% increase in conversions
    
    visualElements: [
      "countdown timer prominently displayed",
      "stock counter showing limited availability",
      "exclusive member badge",
      "sold out indicators on some items",
      "queue or waiting list visual"
    ],
    
    textPatterns: [
      "Только сегодня",
      "Осталось {n} мест",
      "Последний шанс",
      "До конца акции: {time}",
      "Уже {n} человек купили"
    ],
    
    emotionalHook: "anxiety about missing unique opportunity",
    
    colorRecommendation: "red accents for urgency",
    
    bestFor: ["sales", "limited editions", "events", "launches"]
  },
  
  socialProof: {
    name: "Social Proof",
    nameRu: "Социальное доказательство",
    effectiveness: 0.85,
    
    visualElements: [
      "star rating display (4.8+ visible)",
      "customer review quotes",
      "number of satisfied customers",
      "trust badges and certifications",
      "real customer photos",
      "influencer endorsements"
    ],
    
    textPatterns: [
      "{n}+ довольных клиентов",
      "Рейтинг {rating} из 5",
      "Нам доверяют {brands}",
      "Выбор {n} профессионалов"
    ],
    
    emotionalHook: "comfort in following others' choices",
    
    bestFor: ["services", "high-consideration purchases", "new brands"]
  },
  
  transformation: {
    name: "Before/After Transformation",
    nameRu: "Трансформация До/После",
    effectiveness: 0.92,
    
    visualElements: [
      "split-screen comparison",
      "progress indicators",
      "dramatic contrast in states",
      "same angle/lighting for authenticity",
      "timeline showing progression"
    ],
    
    emotionalHook: "hope for personal change",
    
    bestFor: ["beauty", "fitness", "cleaning", "renovation", "education"]
  },
  
  // authority, scarcity, reciprocity, urgency, curiosity, 
  // exclusivity, simplicity, sensory, aspirational, fear...
}
```

### 5.3 Применение психологии в промпте

```typescript
applyPsychology(
  blocks: PromptBlocks,
  psychology: PsychologyConfig
): PromptBlocks {
  
  // Добавление визуальных элементов триггера
  blocks.details += ` ${psychology.visualElements.join(', ')}`;
  
  // Модификация настроения
  blocks.mood = `${blocks.mood} with underlying ${psychology.primary.emotionalHook}`;
  
  // Добавление текстовых паттернов
  if (psychology.textPatterns.length > 0) {
    blocks.textOverlay = this.enhanceTextWithTrigger(
      blocks.textOverlay,
      psychology.textPatterns[0]
    );
  }
  
  // Корректировка цветов под триггер
  if (psychology.primary.colorRecommendation) {
    blocks.colors = this.adjustColorsForTrigger(
      blocks.colors,
      psychology.primary.colorRecommendation
    );
  }
  
  // Специальный блок психологии
  blocks.psychologyTrigger = this.formatPsychologyBlock(psychology);
  
  return blocks;
}
```

---

## 6. Конверсионная оптимизация

### 6.1 CTR Predictor

```typescript
predictCTR(prompt: string): CTRPrediction {
  let score = 50; // Базовый балл
  const factors: ScoreFactor[] = [];
  const improvements: string[] = [];
  
  // 1. Проверка обязательных элементов
  const hasLighting = this.checkLighting(prompt);
  if (hasLighting) {
    score += 8;
    factors.push({ name: 'Lighting', impact: +8, present: true });
  } else {
    improvements.push('Добавьте детальное описание освещения');
  }
  
  // 2. Проверка психологических триггеров
  const triggers = this.detectTriggers(prompt);
  score += triggers.length * 5;
  factors.push({ name: 'Psychology', impact: triggers.length * 5, present: triggers.length > 0 });
  
  // 3. Проверка эмоциональных элементов
  const emotions = this.detectEmotions(prompt);
  score += emotions.length * 3;
  
  // 4. Проверка конкретности
  const specificity = this.measureSpecificity(prompt);
  score += specificity * 10;
  
  // 5. Проверка визуальной иерархии
  const hasHierarchy = this.checkVisualHierarchy(prompt);
  if (hasHierarchy) score += 7;
  
  // 6. Проверка CTA
  const hasCTA = this.checkCTA(prompt);
  if (hasCTA) score += 5;
  
  // 7. Проверка цветовой психологии
  const hasColorPsych = this.checkColorPsychology(prompt);
  if (hasColorPsych) score += 6;
  
  // Нормализация 0-100
  score = Math.min(100, Math.max(0, score));
  
  return {
    score,
    grade: this.scoreToGrade(score),
    factors,
    improvements,
    confidence: this.calculateConfidence(factors)
  };
}

scoreToGrade(score: number): string {
  if (score >= 90) return 'S';
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  if (score >= 50) return 'D';
  return 'F';
}
```

### 6.2 Viral Score

```typescript
predictViralScore(prompt: string): number {
  let score = 0;
  
  // Факторы вирусности
  const factors = {
    emotionalIntensity: this.measureEmotionalIntensity(prompt) * 20,
    novelty: this.measureNovelty(prompt) * 15,
    relatability: this.measureRelatability(prompt) * 15,
    shareability: this.measureShareability(prompt) * 15,
    hookStrength: this.measureHookStrength(prompt) * 20,
    visualImpact: this.measureVisualImpact(prompt) * 15
  };
  
  score = Object.values(factors).reduce((a, b) => a + b, 0);
  
  return Math.min(100, Math.max(0, Math.round(score)));
}
```

### 6.3 Eye-tracking оптимизация

```typescript
const eyeTrackingPatterns = {
  fPattern: {
    name: "F-Pattern",
    description: "Users scan horizontally, then down, then horizontally again",
    bestFor: ["text-heavy content", "articles", "listings"],
    implementation: "Place key info in top-left, headlines at top, bullet points left-aligned"
  },
  
  zPattern: {
    name: "Z-Pattern",
    description: "Eyes move in Z shape: top-left → top-right → bottom-left → bottom-right",
    bestFor: ["landing pages", "ads", "simple layouts"],
    implementation: "Logo top-left, headline top, image center, CTA bottom-right"
  },
  
  goldenSpiral: {
    name: "Golden Spiral",
    description: "Natural focal point following golden ratio",
    bestFor: ["artistic images", "product photography", "hero images"],
    implementation: "Place main subject at spiral focus point"
  },
  
  ruleOfThirds: {
    name: "Rule of Thirds",
    description: "Divide into 3x3 grid, place subjects at intersections",
    bestFor: ["portraits", "landscapes", "product shots"],
    implementation: "Subject at intersection points, horizon on horizontal lines"
  }
};
```

---

## 7. Бизнес-профили

### 7.1 Полный список профилей

| # | Профиль | Ключевые слова | Стиль | Триггеры |
|---|---------|----------------|-------|----------|
| 1 | cleaning | клининг, уборка | before-after | transformation, trust |
| 2 | beauty | салон, красота, волосы | transformation portrait | desire, transformation |
| 3 | fitness | фитнес, спорт, зал | dynamic action | motivation, transformation |
| 4 | restaurant | ресторан, еда, кухня | food close-up | desire, sensory |
| 5 | cafe | кафе, кофе, кофейня | lifestyle cozy | comfort, atmosphere |
| 6 | auto | авто, сервис, машина | professional showcase | trust, expertise |
| 7 | realestate | квартира, дом, недвижимость | interior showcase | aspiration, lifestyle |
| 8 | medical | клиника, врач, медицина | professional trust | authority, trust |
| 9 | education | курсы, обучение, школа | success transformation | transformation, authority |
| 10 | travel | туры, путешествия | scenic aspirational | desire, escape |
| 11 | flowers | цветы, букет | beauty close-up | emotion, beauty |
| 12 | photo | фото, съёмка | portfolio artistic | quality, creativity |
| 13 | pets | питомцы, ветеринар | emotional connection | emotion, care |
| 14 | bakery | выпечка, пекарня | appetizing texture | sensory, comfort |
| 15 | jewelry | украшения, ювелирный | luxury macro | exclusivity, desire |
| 16 | clothing | одежда, мода | fashion lifestyle | aspiration, style |

### 7.2 Детальный профиль (пример)

```typescript
beauty: {
  name: "Салон красоты",
  nameEn: "Beauty Salon",
  
  keywords: [
    "салон", "красота", "красоты", "парикмахер", "парикмахерская",
    "волосы", "стрижка", "окрашивание", "маникюр", "педикюр",
    "косметолог", "визажист", "макияж", "брови", "ресницы",
    "beauty", "salon", "hair", "makeup", "nails"
  ],
  
  contentType: "glamorous before-after transformation portrait",
  visualStyle: "elegant, glamorous, aspirational, professional quality",
  
  primaryEmotion: "confidence, beauty, transformation, self-love",
  
  targetAudience: {
    primary: "women 25-45",
    secondary: "women 18-25, women 45-60"
  },
  
  targetPain: [
    "недовольство внешностью",
    "тусклые/повреждённые волосы", 
    "нет времени на себя",
    "не знаю что мне подойдёт",
    "плохой опыт в других салонах"
  ],
  
  targetDesire: [
    "выглядеть моложе/свежее",
    "уверенность в себе",
    "комплименты от окружающих",
    "трендовый образ",
    "качественный уход"
  ],
  
  recommendedTriggers: ["transformation", "desire", "socialProof", "expertise"],
  
  colors: "luxury", // розовый + золотой
  lighting: "studio.beauty", // мягкий льстящий свет
  composition: "portrait",
  camera: "portrait",
  
  cta: {
    primary: "ЗАПИСАТЬСЯ",
    alternatives: ["ЗАБРОНИРОВАТЬ", "ПОЛУЧИТЬ СКИДКУ", "КОНСУЛЬТАЦИЯ"]
  },
  
  hooks: [
    "transformation",
    "before-after", 
    "процесс создания",
    "секреты мастера",
    "тренды сезона"
  ],
  
  seasonalAdaptations: {
    summer: "защита от солнца, лёгкие укладки",
    winter: "увлажнение, восстановление",
    spring: "обновление, детокс",
    autumn: "подготовка к холодам, насыщенные цвета"
  },
  
  modelGuidelines: {
    age: "match target audience or slightly aspirational",
    expression: "confident, radiant smile, eye contact",
    pose: "slight head tilt, relaxed shoulders"
  }
}
```

---

## 8. Генерация по режимам

### 8.1 Image Mode

```typescript
generateImage(query: string, options: GenerateOptions): GeneratedPrompt {
  const blocks = this.assembleImageBlocks(query, options);
  
  return {
    mainPrompt: this.buildImagePrompt(blocks),
    negativePrompt: this.buildNegativePrompt(blocks, 'image'),
    blocks,
    ...
  };
}

buildImagePrompt(blocks: PromptBlocks): string {
  return `${blocks.quality} ${blocks.contentType}

SUBJECT & PERSON: ${blocks.subject}. ${blocks.person}

ENVIRONMENT: ${blocks.environment}

LIGHTING: ${blocks.lighting}

COLOR PSYCHOLOGY: ${blocks.colors}. ${blocks.colorPsychology}

MOOD & EMOTIONAL RESPONSE: ${blocks.mood}

PSYCHOLOGY TRIGGER: ${blocks.psychologyTrigger}

VISUAL HIERARCHY: ${blocks.visualHierarchy}

COMPOSITION: ${blocks.composition}

CAMERA & TECHNICAL: ${blocks.camera}

SPECIFIC DETAILS: ${blocks.details}

ATTENTION GRABBERS: ${blocks.attentionGrabbers}

HOOK: "${blocks.hook}"

TEXT OVERLAY: ${blocks.textOverlay}

CTA: "${blocks.cta}"

FORMAT: ${blocks.format}`;
}
```

### 8.2 Video Mode

```typescript
generateVideo(query: string, options: GenerateOptions): GeneratedPrompt {
  const imageBlocks = this.assembleImageBlocks(query, options);
  
  // Добавление видео-специфичных элементов
  const videoBlocks = {
    ...imageBlocks,
    motion: this.generateMotion(query, options),
    duration: this.getDuration(options),
    transitions: this.getTransitions(),
    audio: this.getAudioRecommendation(query)
  };
  
  return {
    mainPrompt: this.buildVideoPrompt(videoBlocks),
    ...
  };
}

buildVideoPrompt(blocks: VideoBlocks): string {
  return `${blocks.quality} cinematic video

SCENE: ${blocks.subject}

MOTION: ${blocks.motion}

DURATION: ${blocks.duration} seconds

ENVIRONMENT: ${blocks.environment}

LIGHTING: ${blocks.lighting} with dynamic light changes

CAMERA MOVEMENT: ${blocks.cameraMovement}

MOOD: ${blocks.mood}

TRANSITIONS: ${blocks.transitions}

AUDIO RECOMMENDATION: ${blocks.audio}

FORMAT: ${blocks.format}`;
}
```

### 8.3 3D Mode

```typescript
generate3D(query: string, options: GenerateOptions): GeneratedPrompt {
  return {
    mainPrompt: `High-quality 3D model of ${blocks.subject}

GEOMETRY: Clean topology, optimized mesh, realistic proportions

MATERIALS: ${blocks.materials}

TEXTURES: ${blocks.textures}

LIGHTING SETUP: ${blocks.lighting}

STYLE: ${blocks.style}

RENDER SETTINGS: High quality, 4K resolution, ray-traced

OUTPUT: GLB/GLTF format, PBR materials`,
    ...
  };
}
```

### 8.4 Storyboard Mode

```typescript
generateStoryboard(
  query: string, 
  duration: number
): Storyboard {
  const framesCount = Math.ceil(duration / 5); // ~5 sec per frame
  const frames: StoryboardFrame[] = [];
  
  // Frame 1: Hook
  frames.push(this.generateHookFrame(query));
  
  // Frame 2: Problem/Context
  frames.push(this.generateProblemFrame(query));
  
  // Frames 3-N-2: Solution/Benefits
  for (let i = 0; i < framesCount - 4; i++) {
    frames.push(this.generateBenefitFrame(query, i));
  }
  
  // Frame N-1: Social Proof
  frames.push(this.generateProofFrame(query));
  
  // Frame N: CTA
  frames.push(this.generateCTAFrame(query));
  
  return {
    query,
    duration,
    framesCount: frames.length,
    frames,
    transitions: this.getTransitionsForStoryboard(frames),
    audioTrack: this.getAudioRecommendation(query)
  };
}
```

---

## 9. Brand DNA System

### 9.1 Структура Brand DNA

```typescript
interface BrandDNA {
  id: string;
  name: string;
  
  // Визуальная идентичность
  visual: {
    primaryColor: string;      // HEX
    secondaryColor: string;    // HEX
    accentColor: string;       // HEX
    colorPsychology: string;   // Почему эти цвета
    typography: string;        // Стиль шрифтов
    visualStyle: string;       // Общий визуальный стиль
  };
  
  // Тон коммуникации
  voice: {
    toneOfVoice: string;       // formal/friendly/playful/luxury
    vocabulary: string[];      // Ключевые слова бренда
    avoidWords: string[];      // Слова которых избегать
    personality: string;       // Персоналия бренда
  };
  
  // Целевая аудитория
  audience: {
    primary: string;           // Основная ЦА
    secondary: string;         // Вторичная ЦА
    painPoints: string[];      // Боли ЦА
    desires: string[];         // Желания ЦА
  };
  
  // Позиционирование
  positioning: {
    industry: string;          // Индустрия
    usp: string;               // Уникальное предложение
    competitors: string[];     // Конкуренты
    differentiators: string[]; // Отличия
  };
  
  // Мета
  createdAt: Date;
  updatedAt: Date;
}
```

### 9.2 Применение Brand DNA

```typescript
applyBrandDNA(
  blocks: PromptBlocks, 
  brand: BrandDNA
): PromptBlocks {
  
  // Применение цветов бренда
  blocks.colors = `Primary brand color: ${brand.visual.primaryColor}, 
    Secondary: ${brand.visual.secondaryColor}, 
    Accent: ${brand.visual.accentColor}. 
    ${brand.visual.colorPsychology}`;
  
  // Применение стиля
  blocks.mood = `${brand.visual.visualStyle} style with 
    ${brand.voice.toneOfVoice} tone. 
    Brand personality: ${brand.voice.personality}`;
  
  // Применение ключевых слов
  blocks.details += ` Brand elements: ${brand.voice.vocabulary.join(', ')}`;
  
  // USP в тексте
  blocks.textOverlay = this.incorporateUSP(blocks.textOverlay, brand.positioning.usp);
  
  // Адаптация под ЦА
  blocks.person = this.adaptPersonForAudience(blocks.person, brand.audience.primary);
  
  return blocks;
}
```

---

## 10. Persona System

### 10.1 Структура Persona

```typescript
interface Persona {
  id: string;
  
  // Демография
  name: string;              // "Анна Карьеристка"
  avatar: string;            // Эмодзи или описание
  age: string;               // "28-35"
  gender: 'male' | 'female' | 'other';
  location: string;          // "Москва, центр"
  
  // Социальные факторы
  occupation: string;        // "Маркетолог в IT-компании"
  income: string;            // "150,000-300,000 ₽/мес"
  education: string;         // "Высшее, MBA"
  familyStatus: string;      // "Замужем, без детей"
  
  // Психография
  lifestyle: string;         // Описание образа жизни
  values: string[];          // ["Карьера", "Саморазвитие", "Здоровье"]
  interests: string[];       // ["Фитнес", "Путешествия", "Вино"]
  
  // Для маркетинга
  painPoints: string[];      // Боли
  desires: string[];         // Желания
  objections: string[];      // Возражения при покупке
  triggers: string[];        // Что триггерит к покупке
  
  // Медиа
  platforms: string[];       // ["Instagram", "Telegram", "YouTube"]
  contentPreferences: string[];  // Какой контент потребляет
  influencers: string[];     // На кого подписана
  
  // Покупательское поведение
  buyingBehavior: string;    // Как принимает решения
  pricesSensitivity: string; // Чувствительность к цене
  brandLoyalty: string;      // Лояльность к брендам
}
```

### 10.2 Генерация под Persona

```typescript
generateForPersona(
  query: string,
  persona: Persona,
  options: GenerateOptions
): GeneratedPrompt {
  
  // Адаптация контента под персону
  const adaptedOptions = {
    ...options,
    targetGender: persona.gender,
    targetAge: persona.age,
    priceSegment: this.detectPriceSegmentFromIncome(persona.income),
    emotionalTone: this.getToneForPersona(persona)
  };
  
  // Генерация с учётом болей и желаний
  const blocks = this.assembleBlocks(query, adaptedOptions);
  
  // Инъекция триггеров персоны
  blocks.psychologyTrigger = this.buildTriggerForPersona(persona);
  
  // Адаптация визуалов
  blocks.person = this.buildPersonDescription(persona);
  
  // Адаптация текстов
  blocks.textOverlay = this.adaptTextForPersona(blocks.textOverlay, persona);
  blocks.hook = this.selectHookForPersona(persona);
  
  return this.finalizePrompt(blocks, options);
}
```

---

## 11. Funnel Generator

### 11.1 AIDA Framework

```typescript
generateFunnel(query: string): FunnelResult {
  const analysis = this.analyzeQuery(query);
  
  return {
    awareness: this.generateAwarenessStage(analysis),
    interest: this.generateInterestStage(analysis),
    desire: this.generateDesireStage(analysis),
    action: this.generateActionStage(analysis),
    
    metadata: {
      query,
      businessType: analysis.businessType,
      generatedAt: new Date()
    }
  };
}
```

### 11.2 Этапы воронки

```typescript
// AWARENESS - Привлечение внимания
generateAwarenessStage(analysis: SemanticAnalysis): FunnelStage {
  return {
    name: "Awareness",
    nameRu: "Осведомлённость",
    goal: "Остановить скролл, привлечь внимание",
    
    contentType: "hook-focused, pattern-interrupt",
    psychology: "curiosity, intrigue, pattern-break",
    
    visualStyle: "bold, contrasting, eye-catching",
    
    prompt: this.generate(analysis.originalQuery, {
      style: 'viral',
      detailLevel: 'detailed',
      focusOn: 'hook'
    }),
    
    cta: "Узнать больше",
    metrics: ["Reach", "Impressions", "Stop Rate"]
  };
}

// INTEREST - Удержание интереса
generateInterestStage(analysis: SemanticAnalysis): FunnelStage {
  return {
    name: "Interest",
    nameRu: "Интерес",
    goal: "Рассказать о преимуществах, удержать внимание",
    
    contentType: "educational, benefit-focused",
    psychology: "curiosity-satisfaction, value-demonstration",
    
    prompt: this.generate(analysis.originalQuery, {
      style: 'professional',
      focusOn: 'benefits'
    }),
    
    cta: "Подробнее",
    metrics: ["Engagement", "Watch Time", "Saves"]
  };
}

// DESIRE - Создание желания
generateDesireStage(analysis: SemanticAnalysis): FunnelStage {
  return {
    name: "Desire",
    nameRu: "Желание",
    goal: "Создать эмоциональную связь и желание",
    
    contentType: "aspirational, emotional, testimonial",
    psychology: "desire, aspiration, social-proof",
    
    prompt: this.generate(analysis.originalQuery, {
      style: 'cinematic',
      focusOn: 'emotion'
    }),
    
    cta: "Хочу так же",
    metrics: ["Shares", "Comments", "DMs"]
  };
}

// ACTION - Призыв к действию
generateActionStage(analysis: SemanticAnalysis): FunnelStage {
  return {
    name: "Action",
    nameRu: "Действие",
    goal: "Конвертировать в целевое действие",
    
    contentType: "offer-focused, urgency, scarcity",
    psychology: "urgency, scarcity, fomo, risk-reversal",
    
    prompt: this.generate(analysis.originalQuery, {
      style: 'professional',
      focusOn: 'conversion'
    }),
    
    cta: analysis.businessType === 'restaurant' ? 'Забронировать' : 'Купить сейчас',
    metrics: ["Clicks", "Conversions", "ROAS"]
  };
}
```

---

## 12. Storyboard System

### 12.1 Структура раскадровки

```typescript
interface Storyboard {
  id: string;
  query: string;
  
  // Параметры видео
  duration: number;          // Секунды
  format: string;            // "vertical" | "horizontal" | "square"
  platform: string;          // Целевая платформа
  
  // Кадры
  frames: StoryboardFrame[];
  
  // Переходы
  transitions: Transition[];
  
  // Аудио
  audioTrack: AudioRecommendation;
  voiceOver: VoiceOverScript;
  
  // Мета
  createdAt: Date;
}

interface StoryboardFrame {
  number: number;
  timeStart: number;
  timeEnd: number;
  duration: number;
  
  // Визуал
  shotType: string;          // "close-up", "wide", "medium", etc.
  cameraMovement: string;    // "static", "pan", "zoom", etc.
  composition: string;
  
  // Контент
  action: string;            // Что происходит в кадре
  subject: string;           // Кто/что в кадре
  environment: string;       // Где
  
  // Текст
  textOverlay: string;
  textPosition: string;
  textAnimation: string;
  
  // Эмоция
  mood: string;
  emotionalBeat: string;     // Эмоциональная точка
  
  // Промпт для генерации кадра
  imagePrompt: string;
  
  // Примечания для режиссёра
  directorNotes: string;
}
```

### 12.2 Типы кадров

```typescript
const frameTypes = {
  hook: {
    duration: 3,
    purpose: "Stop scroll, grab attention",
    shotTypes: ["extreme-close-up", "unexpected-angle", "motion-blur"],
    textStyle: "bold, minimal, provocative",
    examples: ["Steam rising macro", "Eye contact close-up", "Action freeze"]
  },
  
  problem: {
    duration: 5,
    purpose: "Establish pain point, create relatability",
    shotTypes: ["medium-shot", "over-shoulder", "POV"],
    textStyle: "question, empathy",
    examples: ["Frustrated expression", "Messy situation", "Struggle moment"]
  },
  
  solution: {
    duration: 7,
    purpose: "Introduce product/service as hero",
    shotTypes: ["product-hero", "reveal", "demonstration"],
    textStyle: "benefit-focused, clear",
    examples: ["Product in action", "Transformation beginning", "Expert at work"]
  },
  
  benefit: {
    duration: 5,
    purpose: "Show specific advantages",
    shotTypes: ["close-up-detail", "comparison", "lifestyle"],
    textStyle: "feature + benefit",
    examples: ["Detail shot", "Before/after", "Happy usage"]
  },
  
  socialProof: {
    duration: 4,
    purpose: "Build trust through others",
    shotTypes: ["testimonial", "montage", "stats-visual"],
    textStyle: "quote, numbers",
    examples: ["Customer smile", "Review screen", "Crowd/popularity"]
  },
  
  cta: {
    duration: 4,
    purpose: "Drive action",
    shotTypes: ["logo-reveal", "offer-card", "contact-info"],
    textStyle: "action verb, urgency",
    examples: ["Logo + tagline", "Offer details", "Clear next step"]
  }
};
```

---

## 13. CTR & Viral Prediction

### 13.1 CTR Score Factors

```typescript
const ctrFactors = {
  // Критичные (20+ баллов каждый)
  critical: {
    hookStrength: { weight: 20, check: 'hasStrongHook' },
    emotionalTrigger: { weight: 20, check: 'hasEmotionalElement' },
    visualClarity: { weight: 15, check: 'hasClearSubject' }
  },
  
  // Важные (10-15 баллов)
  important: {
    colorContrast: { weight: 12, check: 'hasContrastingColors' },
    ctaClarity: { weight: 10, check: 'hasClearCTA' },
    socialProof: { weight: 10, check: 'hasSocialProof' },
    lighting: { weight: 8, check: 'hasDetailedLighting' }
  },
  
  // Дополнительные (5-8 баллов)
  additional: {
    specificity: { weight: 8, check: 'hasSpecificDetails' },
    urgency: { weight: 7, check: 'hasUrgencyElement' },
    composition: { weight: 5, check: 'hasCompositionRules' }
  }
};
```

### 13.2 Viral Score Factors

```typescript
const viralFactors = {
  emotionalIntensity: {
    weight: 25,
    description: "Сила эмоциональной реакции",
    indicators: ["surprise", "joy", "anger", "awe", "fear"]
  },
  
  shareability: {
    weight: 20,
    description: "Вероятность поделиться",
    indicators: ["relatable", "useful", "funny", "inspiring"]
  },
  
  novelty: {
    weight: 20,
    description: "Новизна и неожиданность",
    indicators: ["unique angle", "fresh take", "surprising twist"]
  },
  
  hookPower: {
    weight: 20,
    description: "Сила первых 3 секунд",
    indicators: ["pattern interrupt", "curiosity gap", "bold statement"]
  },
  
  trendAlignment: {
    weight: 15,
    description: "Соответствие трендам",
    indicators: ["current format", "trending topic", "platform native"]
  }
};
```

---

## 14. Content Calendar

### 14.1 Генерация календаря

```typescript
generateCalendar(
  query: string, 
  month: number, 
  year: number
): ContentCalendar {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: CalendarDay[] = [];
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    
    days.push({
      date,
      dayOfWeek: date.getDay(),
      
      // Праздники
      holiday: this.getHoliday(date),
      
      // Тип контента по дню недели
      contentType: this.getContentTypeForDay(date.getDay()),
      
      // Хук
      hook: this.selectHookForDay(query, date),
      
      // Промпт
      prompt: this.generateForDay(query, date),
      
      // Рекомендации
      bestTime: this.getBestPostingTime(date.getDay()),
      hashtags: this.getHashtags(query, date)
    });
  }
  
  return {
    month,
    year,
    days,
    summary: this.generateCalendarSummary(days)
  };
}
```

### 14.2 Праздники и события

```typescript
const holidays = {
  // Фиксированные
  fixed: {
    '01-01': { name: 'Новый год', emoji: '🎄', theme: 'celebration' },
    '01-07': { name: 'Рождество', emoji: '⭐', theme: 'tradition' },
    '02-14': { name: 'День влюблённых', emoji: '❤️', theme: 'love' },
    '02-23': { name: 'День защитника', emoji: '🎖️', theme: 'masculine' },
    '03-08': { name: 'Международный женский день', emoji: '🌷', theme: 'feminine' },
    '05-01': { name: 'День труда', emoji: '🛠️', theme: 'work' },
    '05-09': { name: 'День Победы', emoji: '🎗️', theme: 'patriotic' },
    '06-01': { name: 'День защиты детей', emoji: '👶', theme: 'family' },
    '09-01': { name: 'День знаний', emoji: '📚', theme: 'education' },
    '11-04': { name: 'День народного единства', emoji: '🤝', theme: 'unity' },
    '12-31': { name: 'Новогодняя ночь', emoji: '🎆', theme: 'celebration' }
  },
  
  // Переменные (вычисляются)
  variable: {
    'easter': { name: 'Пасха', emoji: '🥚', theme: 'tradition' },
    'blackFriday': { name: 'Чёрная пятница', emoji: '🏷️', theme: 'sales' },
    'cyberMonday': { name: 'Киберпонедельник', emoji: '💻', theme: 'sales' }
  },
  
  // Сезонные события
  seasonal: {
    'summer-start': { name: 'Начало лета', emoji: '☀️', theme: 'summer' },
    'back-to-school': { name: 'Снова в школу', emoji: '🎒', theme: 'education' },
    'autumn-vibes': { name: 'Осеннее настроение', emoji: '🍂', theme: 'autumn' }
  }
};
```

---

## 15. Export/Import System

### 15.1 Export форматы

```typescript
// Экспорт одного промпта
exportPrompt(prompt: GeneratedPrompt): ExportedPrompt {
  return {
    version: "6.0",
    generator: "NanoBanana Pro",
    exportDate: new Date().toISOString(),
    
    prompt: {
      id: prompt.id,
      query: prompt.query,
      mainPrompt: prompt.mainPrompt,
      negativePrompt: prompt.negativePrompt,
      
      scores: {
        ctr: prompt.ctrScore,
        viral: prompt.viralScore
      },
      
      psychology: prompt.psychologyTriggers,
      
      blocks: prompt.blocks,
      
      metadata: {
        platform: prompt.platform,
        format: prompt.format,
        style: prompt.style,
        model: prompt.model,
        timestamp: prompt.timestamp
      }
    }
  };
}

// Экспорт истории
exportHistory(prompts: GeneratedPrompt[]): ExportedHistory {
  return {
    version: "6.0",
    generator: "NanoBanana Pro",
    exportDate: new Date().toISOString(),
    totalPrompts: prompts.length,
    prompts: prompts.map(p => this.exportPrompt(p).prompt)
  };
}

// Экспорт раскадровки
exportStoryboard(storyboard: Storyboard): ExportedStoryboard {
  return {
    version: "6.0",
    type: "storyboard",
    ...storyboard,
    exportDate: new Date().toISOString()
  };
}

// Экспорт кампании
exportCampaign(funnel: FunnelResult): ExportedCampaign {
  return {
    version: "6.0",
    type: "campaign",
    stages: ['awareness', 'interest', 'desire', 'action'],
    ...funnel,
    exportDate: new Date().toISOString()
  };
}
```

### 15.2 Import система

```typescript
importJSON(jsonString: string): ImportResult {
  try {
    const data = JSON.parse(jsonString);
    
    // Валидация версии
    if (!this.isCompatibleVersion(data.version)) {
      return { success: false, error: 'Incompatible version' };
    }
    
    // Определение типа
    const type = this.detectImportType(data);
    
    switch (type) {
      case 'prompt':
        return this.importPrompt(data);
      case 'history':
        return this.importHistory(data);
      case 'storyboard':
        return this.importStoryboard(data);
      case 'campaign':
        return this.importCampaign(data);
      case 'brand':
        return this.importBrand(data);
      default:
        return { success: false, error: 'Unknown format' };
    }
  } catch (e) {
    return { success: false, error: 'Invalid JSON' };
  }
}
```

---

## 16. UI Components

### 16.1 Структура компонентов

```
App.tsx
├── Header
│   ├── Logo
│   ├── VersionBadge
│   └── ThemeToggle
│
├── TabNavigation
│   ├── GeneratorTab (🎯)
│   ├── FunnelTab (📊)
│   ├── BrandTab (🏢)
│   ├── PersonaTab (🎭)
│   ├── CalendarTab (📅)
│   ├── StoryboardTab (🎬)
│   ├── CompetitorTab (🕵️)
│   ├── RemixTab (🔄)
│   ├── BatchTab (📦)
│   └── HistoryTab (💾)
│
├── MainContent
│   ├── InputSection
│   │   ├── QueryInput
│   │   ├── SettingsPanel
│   │   └── GenerateButton
│   │
│   ├── ResultsSection
│   │   ├── PromptCard
│   │   ├── ScoreDisplay
│   │   ├── BlocksEditor
│   │   └── ActionsBar
│   │
│   └── SidePanel
│       ├── QuickExamples
│       ├── Tips
│       └── Stats
│
└── Modals
    ├── BlockEditorModal
    ├── ExportModal
    ├── ImportModal
    └── SettingsModal
```

### 16.2 State Management

```typescript
// Основное состояние
const [state, setState] = useState<AppState>({
  // Ввод
  query: '',
  
  // Настройки
  settings: {
    platform: 'instagram',
    format: 'feed',
    style: 'professional',
    model: 'gemini',
    detailLevel: 'detailed',
    mode: 'image',
    language: 'ru',
    variantsCount: 1
  },
  
  // Результаты
  generatedPrompts: [],
  currentPrompt: null,
  
  // История
  history: [],
  favorites: [],
  
  // Brand & Persona
  brands: [],
  personas: [],
  activeBrand: null,
  activePersona: null,
  
  // UI
  activeTab: 'generator',
  isLoading: false,
  isDarkMode: false,
  
  // Modals
  showBlockEditor: false,
  showExport: false,
  editingBlocks: null
});
```

---

## 17. Расширение системы

### 17.1 Добавление нового бизнес-профиля

```typescript
// В PromptEngine.ts → DATABASE.businesses добавить:

newBusiness: {
  name: "Название",
  nameEn: "Name",
  
  keywords: ["ключевое", "слово", "keyword"],
  
  contentType: "описание типа контента",
  visualStyle: "визуальный стиль",
  primaryEmotion: "основные эмоции",
  
  targetPain: ["боль 1", "боль 2"],
  targetDesire: ["желание 1", "желание 2"],
  
  recommendedTriggers: ["trigger1", "trigger2"],
  
  colors: "paletteKey",
  lighting: "category.type",
  composition: "compositionKey",
  camera: "cameraKey",
  
  cta: {
    primary: "ОСНОВНОЙ CTA",
    alternatives: ["Альтернатива 1", "Альтернатива 2"]
  },
  
  hooks: ["hook1", "hook2", "hook3"]
}
```

### 17.2 Добавление нового психологического триггера

```typescript
// В DATABASE.psychology добавить:

newTrigger: {
  name: "Trigger Name",
  nameRu: "Название триггера",
  
  effectiveness: 0.85, // 0-1
  
  visualElements: [
    "элемент 1",
    "элемент 2"
  ],
  
  textPatterns: [
    "Паттерн с {переменной}",
    "Ещё паттерн"
  ],
  
  emotionalHook: "описание эмоционального эффекта",
  
  colorRecommendation: "рекомендация по цветам",
  
  bestFor: ["ниша1", "ниша2"]
}
```

### 17.3 Добавление новой платформы

```typescript
// В DATABASE.platforms добавить:

newPlatform: {
  name: "Platform Name",
  
  formats: {
    format1: {
      name: "Format Name",
      width: 1080,
      height: 1080,
      aspectRatio: "1:1"
    }
  },
  
  bestPractices: [
    "практика 1",
    "практика 2"
  ],
  
  limitations: {
    textLimit: 2200,
    hashtagLimit: 30
  },
  
  audienceTraits: {
    primaryAge: "18-34",
    peakTimes: ["12:00", "19:00", "21:00"]
  }
}
```

---

## 📞 Поддержка

При возникновении вопросов:

1. Проверьте FAQ в README.md
2. Изучите примеры в коде
3. Создайте Issue в репозитории

---

**Документация v6.0 | NanoBanana Pro Team | 2026**
