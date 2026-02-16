# 🔧 API Reference — NanoBanana Pro v6.0

Полный справочник по API движка PromptEngine.

---

## 📑 Содержание

1. [PromptEngine Class](#promptengine-class)
2. [Методы генерации](#методы-генерации)
3. [Методы анализа](#методы-анализа)
4. [Типы данных](#типы-данных)
5. [Константы и перечисления](#константы-и-перечисления)
6. [Примеры использования](#примеры-использования)

---

## PromptEngine Class

### Импорт

```typescript
import PromptEngine from './engine/PromptEngine';
```

### Создание экземпляра

```typescript
const engine = new PromptEngine();
```

### Обзор методов

| Метод | Описание | Возвращает |
|-------|----------|------------|
| `generate()` | Основная генерация промпта | `GeneratedPrompt` |
| `generateFunnel()` | Генерация воронки AIDA | `FunnelResult` |
| `generateStoryboard()` | Создание раскадровки | `Storyboard` |
| `generateCalendar()` | Контент-календарь | `ContentCalendar` |
| `analyzeCompetitors()` | Анализ конкурентов | `CompetitorAnalysis` |
| `remixPrompt()` | Улучшение промпта | `GeneratedPrompt` |
| `predictCTR()` | Предсказание CTR | `CTRPrediction` |
| `predictViralScore()` | Вирусный потенциал | `number` |
| `analyzePromptDNA()` | Разбор промпта | `PromptDNA` |
| `getHooksForBusiness()` | Хуки для бизнеса | `string[]` |

---

## Методы генерации

### generate()

Основной метод генерации промптов.

```typescript
generate(
  query: string,
  options?: GenerateOptions
): GeneratedPrompt
```

#### Параметры

| Параметр | Тип | Обязательный | По умолчанию | Описание |
|----------|-----|--------------|--------------|----------|
| `query` | `string` | ✅ | — | Запрос пользователя |
| `options` | `GenerateOptions` | ❌ | см. ниже | Настройки генерации |

#### GenerateOptions

```typescript
interface GenerateOptions {
  platform?: 'instagram' | 'tiktok' | 'youtube' | 'facebook' | 'telegram';
  format?: 'feed' | 'stories' | 'reels' | 'banner' | 'thumbnail';
  style?: 'professional' | 'ugc' | 'cinematic' | 'editorial' | 'viral' | 'aesthetic';
  model?: 'gemini' | 'flux' | 'midjourney' | 'dalle' | 'sora' | 'runway' | 'kling' | 'meshy';
  detailLevel?: 'short' | 'medium' | 'detailed';
  mode?: 'image' | 'video' | '3d' | 'storyboard';
  language?: 'ru' | 'en' | 'mixed';
  variantsCount?: 1 | 3 | 5;
  brand?: BrandDNA;
  persona?: Persona;
  season?: SeasonType;
  focusOn?: 'hook' | 'benefits' | 'emotion' | 'conversion';
}
```

#### Возвращаемое значение

```typescript
interface GeneratedPrompt {
  id: string;
  query: string;
  mainPrompt: string;
  negativePrompt: string;
  timestamp: Date;
  platform: string;
  format: string;
  style: string;
  model: string;
  ctrScore: number;
  viralScore: number;
  psychologyTriggers: string[];
  isFavorite: boolean;
  blocks: PromptBlocks;
}
```

#### Пример

```typescript
const prompt = engine.generate("Клининг в Москве", {
  platform: 'instagram',
  format: 'feed',
  style: 'professional',
  model: 'gemini',
  detailLevel: 'detailed'
});

console.log(prompt.mainPrompt);
console.log(`CTR Score: ${prompt.ctrScore}`);
```

---

### generateFunnel()

Генерация полной маркетинговой воронки AIDA.

```typescript
generateFunnel(
  query: string,
  options?: FunnelOptions
): FunnelResult
```

#### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `query` | `string` | ✅ | Бизнес/продукт |
| `options` | `FunnelOptions` | ❌ | Настройки |

#### FunnelOptions

```typescript
interface FunnelOptions {
  platform?: string;
  brand?: BrandDNA;
  persona?: Persona;
  campaignGoal?: 'awareness' | 'leads' | 'sales';
}
```

#### Возвращаемое значение

```typescript
interface FunnelResult {
  awareness: FunnelStage;
  interest: FunnelStage;
  desire: FunnelStage;
  action: FunnelStage;
  metadata: {
    query: string;
    businessType: string;
    generatedAt: Date;
  };
}

interface FunnelStage {
  name: string;
  nameRu: string;
  goal: string;
  contentType: string;
  psychology: string;
  visualStyle: string;
  prompt: GeneratedPrompt;
  cta: string;
  metrics: string[];
}
```

#### Пример

```typescript
const funnel = engine.generateFunnel("Фитнес клуб для женщин");

console.log("Awareness:", funnel.awareness.prompt.mainPrompt);
console.log("Interest:", funnel.interest.prompt.mainPrompt);
console.log("Desire:", funnel.desire.prompt.mainPrompt);
console.log("Action:", funnel.action.prompt.mainPrompt);
```

---

### generateStoryboard()

Создание раскадровки для видео.

```typescript
generateStoryboard(
  query: string,
  duration: number,
  options?: StoryboardOptions
): Storyboard
```

#### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `query` | `string` | ✅ | Тема видео |
| `duration` | `number` | ✅ | Длительность (секунды) |
| `options` | `StoryboardOptions` | ❌ | Настройки |

#### StoryboardOptions

```typescript
interface StoryboardOptions {
  platform?: 'instagram' | 'tiktok' | 'youtube';
  format?: 'vertical' | 'horizontal' | 'square';
  style?: 'dynamic' | 'calm' | 'dramatic';
  includeVoiceover?: boolean;
  includeMusic?: boolean;
}
```

#### Возвращаемое значение

```typescript
interface Storyboard {
  id: string;
  query: string;
  duration: number;
  format: string;
  platform: string;
  frames: StoryboardFrame[];
  transitions: Transition[];
  audioTrack: AudioRecommendation;
  voiceOver?: VoiceOverScript;
  createdAt: Date;
}

interface StoryboardFrame {
  number: number;
  timeStart: number;
  timeEnd: number;
  duration: number;
  shotType: string;
  cameraMovement: string;
  composition: string;
  action: string;
  subject: string;
  environment: string;
  textOverlay: string;
  textPosition: string;
  textAnimation: string;
  mood: string;
  emotionalBeat: string;
  imagePrompt: string;
  directorNotes: string;
}
```

#### Пример

```typescript
const storyboard = engine.generateStoryboard("Реклама кофейни", 30, {
  platform: 'tiktok',
  format: 'vertical',
  style: 'dynamic'
});

storyboard.frames.forEach(frame => {
  console.log(`Frame ${frame.number}: ${frame.action}`);
  console.log(`Prompt: ${frame.imagePrompt}`);
});
```

---

### generateCalendar()

Генерация контент-календаря на месяц.

```typescript
generateCalendar(
  query: string,
  month: number,
  year: number,
  options?: CalendarOptions
): ContentCalendar
```

#### Параметры

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `query` | `string` | ✅ | Бизнес/ниша |
| `month` | `number` | ✅ | Месяц (0-11) |
| `year` | `number` | ✅ | Год |
| `options` | `CalendarOptions` | ❌ | Настройки |

#### Возвращаемое значение

```typescript
interface ContentCalendar {
  month: number;
  year: number;
  days: CalendarDay[];
  summary: CalendarSummary;
}

interface CalendarDay {
  date: Date;
  dayOfWeek: number;
  holiday?: Holiday;
  contentType: string;
  hook: string;
  prompt: GeneratedPrompt;
  bestTime: string;
  hashtags: string[];
}
```

#### Пример

```typescript
const calendar = engine.generateCalendar("Кофейня", 1, 2026); // Февраль 2026

calendar.days.forEach(day => {
  if (day.holiday) {
    console.log(`${day.date}: ${day.holiday.name} ${day.holiday.emoji}`);
  }
  console.log(`Hook: ${day.hook}`);
});
```

---

## Методы анализа

### analyzeCompetitors()

Анализ конкурентных концепций и генерация улучшенных версий.

```typescript
analyzeCompetitors(
  niche: string,
  options?: CompetitorOptions
): CompetitorAnalysis
```

#### Возвращаемое значение

```typescript
interface CompetitorAnalysis {
  niche: string;
  concepts: CompetitorConcept[];
  improvedVersions: GeneratedPrompt[];
  insights: string[];
  recommendations: string[];
}

interface CompetitorConcept {
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  frequency: number; // Как часто встречается
}
```

#### Пример

```typescript
const analysis = engine.analyzeCompetitors("кофейня");

console.log("Топ концепции:");
analysis.concepts.forEach((c, i) => {
  console.log(`${i + 1}. ${c.name}: ${c.description}`);
});

console.log("\nУлучшенные версии:");
analysis.improvedVersions.forEach(prompt => {
  console.log(prompt.mainPrompt);
});
```

---

### predictCTR()

Предсказание CTR и анализ промпта.

```typescript
predictCTR(prompt: string): CTRPrediction
```

#### Возвращаемое значение

```typescript
interface CTRPrediction {
  score: number;           // 0-100
  grade: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  factors: ScoreFactor[];
  improvements: string[];
  confidence: number;      // 0-1
}

interface ScoreFactor {
  name: string;
  impact: number;
  present: boolean;
  recommendation?: string;
}
```

#### Пример

```typescript
const prediction = engine.predictCTR(myPrompt);

console.log(`Score: ${prediction.score}/100 (${prediction.grade})`);

if (prediction.improvements.length > 0) {
  console.log("Рекомендации:");
  prediction.improvements.forEach(imp => console.log(`- ${imp}`));
}
```

---

### remixPrompt()

Улучшение существующего промпта.

```typescript
remixPrompt(
  originalPrompt: string,
  options?: RemixOptions
): GeneratedPrompt
```

#### RemixOptions

```typescript
interface RemixOptions {
  keepStyle?: boolean;       // Сохранить стиль
  addPsychology?: boolean;   // Добавить триггеры
  enhanceDetails?: boolean;  // Усилить детали
  targetLength?: 'short' | 'medium' | 'detailed';
}
```

#### Пример

```typescript
const weak = "Photo of coffee cup on table";

const improved = engine.remixPrompt(weak, {
  addPsychology: true,
  enhanceDetails: true,
  targetLength: 'detailed'
});

console.log("Было:", weak.length, "символов");
console.log("Стало:", improved.mainPrompt.length, "символов");
console.log(improved.mainPrompt);
```

---

### analyzePromptDNA()

Разбор промпта на составляющие компоненты.

```typescript
analyzePromptDNA(prompt: string): PromptDNA
```

#### Возвращаемое значение

```typescript
interface PromptDNA {
  original: string;
  length: number;
  
  components: {
    quality: ComponentAnalysis;
    subject: ComponentAnalysis;
    lighting: ComponentAnalysis;
    colors: ComponentAnalysis;
    mood: ComponentAnalysis;
    camera: ComponentAnalysis;
    composition: ComponentAnalysis;
  };
  
  overallScore: number;
  missingElements: string[];
  strengths: string[];
  weaknesses: string[];
}

interface ComponentAnalysis {
  present: boolean;
  content: string | null;
  score: number;        // 0-10
  suggestion?: string;
}
```

#### Пример

```typescript
const dna = engine.analyzePromptDNA(somePrompt);

console.log(`Overall Score: ${dna.overallScore}/100`);

console.log("Missing:", dna.missingElements.join(", "));
console.log("Strong:", dna.strengths.join(", "));
```

---

### getHooksForBusiness()

Получение хуков для конкретного типа бизнеса.

```typescript
getHooksForBusiness(
  businessType: string,
  count?: number
): string[]
```

#### Пример

```typescript
const hooks = engine.getHooksForBusiness("restaurant", 5);

hooks.forEach(hook => console.log(`- ${hook}`));
// - "POV: ты пришёл в ресторан своей мечты"
// - "Секрет шефа: как мы готовим пасту"
// - "3 блюда, которые стоит попробовать"
// ...
```

---

## Типы данных

### PromptBlocks

```typescript
interface PromptBlocks {
  quality: string;
  contentType: string;
  subject: string;
  person: string;
  environment: string;
  lighting: string;
  colors: string;
  colorPsychology: string;
  mood: string;
  composition: string;
  camera: string;
  details: string;
  textOverlay: string;
  cta: string;
  format: string;
  hook: string;
  psychologyTrigger: string;
  visualHierarchy: string;
  attentionGrabbers: string;
  socialProof: string;
}
```

### BrandDNA

```typescript
interface BrandDNA {
  id: string;
  name: string;
  
  visual: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    colorPsychology: string;
    typography: string;
    visualStyle: string;
  };
  
  voice: {
    toneOfVoice: 'formal' | 'friendly' | 'playful' | 'luxury' | 'professional';
    vocabulary: string[];
    avoidWords: string[];
    personality: string;
  };
  
  audience: {
    primary: string;
    secondary: string;
    painPoints: string[];
    desires: string[];
  };
  
  positioning: {
    industry: string;
    usp: string;
    competitors: string[];
    differentiators: string[];
  };
  
  createdAt: Date;
  updatedAt: Date;
}
```

### Persona

```typescript
interface Persona {
  id: string;
  name: string;
  avatar: string;
  
  demographics: {
    age: string;
    gender: 'male' | 'female' | 'other';
    location: string;
    occupation: string;
    income: string;
    education: string;
    familyStatus: string;
  };
  
  psychographics: {
    lifestyle: string;
    values: string[];
    interests: string[];
    personality: string;
  };
  
  marketing: {
    painPoints: string[];
    desires: string[];
    objections: string[];
    triggers: string[];
  };
  
  media: {
    platforms: string[];
    contentPreferences: string[];
    influencers: string[];
    peakActivityTimes: string[];
  };
  
  buying: {
    behavior: string;
    priceSensitivity: 'low' | 'medium' | 'high';
    brandLoyalty: 'low' | 'medium' | 'high';
    decisionFactors: string[];
  };
}
```

---

## Константы и перечисления

### Платформы

```typescript
const PLATFORMS = {
  instagram: {
    name: 'Instagram',
    formats: ['feed', 'stories', 'reels'],
    aspectRatios: ['1:1', '4:5', '9:16']
  },
  tiktok: {
    name: 'TikTok',
    formats: ['video', 'photo'],
    aspectRatios: ['9:16']
  },
  youtube: {
    name: 'YouTube',
    formats: ['video', 'shorts', 'thumbnail'],
    aspectRatios: ['16:9', '9:16']
  },
  facebook: {
    name: 'Facebook',
    formats: ['feed', 'stories', 'ads'],
    aspectRatios: ['1:1', '4:5', '16:9']
  },
  telegram: {
    name: 'Telegram',
    formats: ['post', 'stories'],
    aspectRatios: ['1:1', '16:9']
  }
};
```

### Стили

```typescript
const STYLES = {
  professional: 'Студийное качество, профессиональный вид',
  ugc: 'Как с телефона, аутентичный, пользовательский',
  cinematic: 'Кинематографичный, эпичный, драматичный',
  editorial: 'Журнальный, редакторский, fashion',
  viral: 'Цепляющий, хуковый, для вирусности',
  aesthetic: 'Эстетичный, Pinterest-стиль, mood'
};
```

### Психологические триггеры

```typescript
const PSYCHOLOGY_TRIGGERS = [
  'fomo',           // Fear of Missing Out
  'socialProof',    // Социальное доказательство
  'authority',      // Авторитет и экспертность
  'scarcity',       // Дефицит
  'urgency',        // Срочность
  'reciprocity',    // Взаимность
  'transformation', // Трансформация До/После
  'desire',         // Желание/Аспирация
  'fear',           // Страх/Избегание боли
  'curiosity',      // Любопытство
  'exclusivity',    // Эксклюзивность
  'simplicity',     // Простота/Удобство
  'sensory',        // Сенсорный опыт
  'trust',          // Доверие
  'emotion'         // Эмоциональная связь
];
```

### Типы бизнеса

```typescript
const BUSINESS_TYPES = [
  'cleaning',     // Клининг
  'beauty',       // Салон красоты
  'fitness',      // Фитнес
  'restaurant',   // Ресторан
  'cafe',         // Кафе
  'auto',         // Авто-сервис
  'realestate',   // Недвижимость
  'medical',      // Медицина
  'education',    // Образование
  'travel',       // Туризм
  'flowers',      // Цветы
  'photo',        // Фотография
  'pets',         // Питомцы
  'bakery',       // Пекарня
  'jewelry',      // Ювелирные
  'clothing',     // Одежда
  'electronics',  // Электроника
  'repair'        // Ремонт
];
```

---

## Примеры использования

### Базовая генерация

```typescript
import PromptEngine from './engine/PromptEngine';

const engine = new PromptEngine();

// Простой промпт
const simple = engine.generate("Пиццерия");
console.log(simple.mainPrompt);

// С настройками
const detailed = engine.generate("Премиум пиццерия в центре Москвы", {
  platform: 'instagram',
  format: 'reels',
  style: 'cinematic',
  detailLevel: 'detailed',
  model: 'sora',
  mode: 'video'
});
```

### Работа с брендом

```typescript
// Создание бренда
const brand: BrandDNA = {
  id: 'brand-1',
  name: 'Mama Rosa',
  visual: {
    primaryColor: '#8B0000',
    secondaryColor: '#FFF8DC',
    accentColor: '#228B22',
    colorPsychology: 'Italian flag colors representing tradition',
    typography: 'Elegant serif for headings, clean sans for body',
    visualStyle: 'Warm, rustic, authentic Italian'
  },
  voice: {
    toneOfVoice: 'friendly',
    vocabulary: ['домашний', 'традиционный', 'семейный', 'настоящий'],
    avoidWords: ['дешёвый', 'быстрый', 'фастфуд'],
    personality: 'Как любящая итальянская бабушка'
  },
  audience: {
    primary: 'Семьи 30-50 лет',
    secondary: 'Молодые пары',
    painPoints: ['Скучная еда дома', 'Нет времени готовить'],
    desires: ['Настоящая Италия', 'Семейная атмосфера']
  },
  positioning: {
    industry: 'Итальянский ресторан',
    usp: 'Рецепты от реальной итальянской семьи',
    competitors: ['IL Patio', 'Pizza Hut'],
    differentiators: ['Семейные рецепты', 'Домашняя атмосфера']
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

// Генерация с брендом
const brandedPrompt = engine.generate("Новая паста", { brand });
```

### Полная воронка с персоной

```typescript
// Создание персоны
const persona: Persona = {
  id: 'persona-1',
  name: 'Анна Менеджер',
  avatar: '👩‍💼',
  demographics: {
    age: '28-35',
    gender: 'female',
    location: 'Москва',
    occupation: 'Менеджер в IT',
    income: '150,000-250,000 ₽',
    education: 'Высшее',
    familyStatus: 'Замужем, без детей'
  },
  psychographics: {
    lifestyle: 'Карьеро-ориентированная, активная',
    values: ['Карьера', 'Саморазвитие', 'Баланс'],
    interests: ['Фитнес', 'Путешествия', 'Вино'],
    personality: 'Амбициозная, организованная'
  },
  marketing: {
    painPoints: ['Нет времени на уборку', 'Устаёт после работы'],
    desires: ['Чистый дом', 'Время для себя'],
    objections: ['Дорого', 'Пустят чужих в дом'],
    triggers: ['Удобство', 'Экономия времени', 'Качество']
  },
  media: {
    platforms: ['Instagram', 'Telegram'],
    contentPreferences: ['Stories', 'Reels'],
    influencers: ['Lifestyle блогеры'],
    peakActivityTimes: ['7:00-8:00', '12:00-13:00', '21:00-23:00']
  },
  buying: {
    behavior: 'Исследует отзывы, сравнивает',
    priceSensitivity: 'low',
    brandLoyalty: 'medium',
    decisionFactors: ['Отзывы', 'Удобство заказа', 'Гарантии']
  }
};

// Генерация воронки под персону
const funnel = engine.generateFunnel("Клининг", { persona });
```

### Batch генерация

```typescript
const products = [
  "Кроссовки Nike Air Max",
  "Платье летнее цветочное",
  "Часы Casio G-Shock",
  "Сумка кожаная коричневая"
];

const prompts = products.map(product => 
  engine.generate(product, {
    platform: 'instagram',
    format: 'feed',
    style: 'professional'
  })
);

// Экспорт
const exportData = {
  version: '6.0',
  products: prompts.map(p => ({
    query: p.query,
    prompt: p.mainPrompt,
    negative: p.negativePrompt
  }))
};

console.log(JSON.stringify(exportData, null, 2));
```

---

**API Reference v6.0** | NanoBanana Pro
