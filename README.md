# 🍌 NanoBanana Pro v6.0 — Ultimate AI Prompt Generator

> **Генератор промптов нового поколения для создания высококонверсионных рекламных креативов**

[![Version](https://img.shields.io/badge/version-6.0.0-yellow.svg)]()
[![AI Powered](https://img.shields.io/badge/AI-Powered-blue.svg)]()
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)]()

---

## 📖 Содержание

1. [Обзор](#-обзор)
2. [Быстрый старт](#-быстрый-старт)
3. [Основные функции](#-основные-функции)
4. [Киллер-фичи](#-киллер-фичи)
5. [Психологические триггеры](#-психологические-триггеры)
6. [API и архитектура](#-api-и-архитектура)
7. [Форматы экспорта](#-форматы-экспорта)
8. [Горячие клавиши](#-горячие-клавиши)
9. [FAQ](#-faq)

---

## 🎯 Обзор

**NanoBanana Pro** — это AI-powered генератор промптов, который превращает простой текстовый запрос в детальный, психологически оптимизированный промпт для генерации изображений и видео.

### Ключевые преимущества:

| Преимущество | Описание |
|--------------|----------|
| 🧠 **AI-анализ** | Автоматическое понимание контекста, ЦА, болевых точек |
| 💰 **Конверсия** | Психологические триггеры для максимального CTR |
| 🎬 **Мульти-формат** | Image, Video, 3D, Storyboard |
| 🏢 **Брендинг** | Консистентность через Brand DNA Kit |
| 📊 **Предсказание** | CTR Predictor и Viral Score |

### Поддерживаемые AI-модели:

- Gemini 3 Pro (NanoBananaPro)
- Flux 1.1 Pro
- Midjourney v6
- DALL-E 3
- Sora (видео)
- Runway Gen-3 (видео)
- Kling AI (видео)
- Meshy (3D)

---

## 🚀 Быстрый старт

### Установка

```bash
# Клонирование репозитория
git clone <repository-url>
cd nanobanana-pro

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build
```

### Первый промпт за 30 секунд

1. Откройте приложение
2. Введите запрос, например: `Клининг в Москве`
3. Нажмите **Enter** или кнопку "Сгенерировать"
4. Получите детальный промпт с психологическими триггерами
5. Скопируйте и используйте в любой AI-модели

---

## ✨ Основные функции

### 1. 🎯 Умная генерация промптов

Система автоматически анализирует ваш запрос и определяет:

```typescript
interface SemanticAnalysis {
  businessType: string;        // Тип бизнеса (клининг, ресторан, фитнес...)
  location: string;            // Локация (Москва, Алматы...)
  priceSegment: string;        // Сегмент (budget/mid/premium/luxury)
  emotionalTone: string;       // Тон (professional/friendly/luxury...)
  targetAudience: {
    gender: string;            // Пол ЦА
    ageRange: string;          // Возраст
    painPoints: string[];      // Болевые точки
    desires: string[];         // Желания
  }
}
```

### 2. 🎨 Стили контента

| Стиль | Описание | Применение |
|-------|----------|------------|
| 📸 **Professional** | Студийное качество, идеальный свет | B2B, услуги |
| 📱 **UGC** | Как с телефона, аутентично | Отзывы, социальные сети |
| 🎬 **Cinematic** | Кинематографичный, эпичный | Бренд-видео, имидж |
| 📰 **Editorial** | Журнальный, редакторский | Fashion, lifestyle |
| 🔥 **Viral** | Цепляющий, хуковый | TikTok, Reels |
| ✨ **Aesthetic** | Эстетичный, Pinterest-стиль | Mood, атмосфера |

### 3. 📱 Платформы и форматы

**Платформы:**
- Instagram (Feed, Stories, Reels)
- TikTok
- YouTube (Shorts, Thumbnail)
- Facebook
- Telegram

**Форматы:**
| Формат | Размер | Использование |
|--------|--------|---------------|
| Feed Square | 1080×1080 | Instagram, Facebook |
| Stories | 1080×1920 | Instagram, TikTok |
| Reels | 1080×1920 | Вертикальное видео |
| Banner | 1200×628 | Реклама |
| YouTube | 1920×1080 | Горизонтальное видео |

### 4. 🎬 Режимы генерации

```
┌─────────────────────────────────────────────────┐
│  🖼️ IMAGE    │  🎬 VIDEO    │  📦 3D    │  🎞️ STORY  │
└─────────────────────────────────────────────────┘
```

- **Image** — Статичные изображения
- **Video** — Промпты для Sora, Runway, Kling
- **3D** — Промпты для Meshy, TripoSR
- **Storyboard** — Раскадровка видео

---

## 🚀 Киллер-фичи

### 1. 🎯 Smart Funnel Mode

Генерация полной маркетинговой воронки AIDA за 1 клик:

```
┌────────────────────────────────────────────────────────┐
│  AWARENESS  →  INTEREST  →  DESIRE  →  ACTION         │
│     🎣           💡          ❤️         🛒             │
│   Хук/Охват   Интерес      Желание    Покупка         │
└────────────────────────────────────────────────────────┘
```

**Каждый этап включает:**
- Уникальный промпт
- Психологический триггер
- Подходящий визуальный стиль
- Оптимизированный CTA

### 2. 🏢 Brand DNA Kit

Создайте профиль бренда для консистентных креативов:

```typescript
interface BrandDNA {
  name: string;              // Название бренда
  industry: string;          // Индустрия
  colors: {
    primary: string;         // Основной цвет (#HEX)
    secondary: string;       // Дополнительный цвет
    accent: string;          // Акцентный цвет
  };
  toneOfVoice: string;       // Тон коммуникации
  targetAudience: string;    // Описание ЦА
  usp: string;               // Уникальное торговое предложение
  keywords: string[];        // Ключевые слова бренда
}
```

**Использование:**
1. Создайте бренд в разделе "Бренд DNA"
2. При генерации выберите бренд
3. Все промпты будут включать фирменные элементы

### 3. 🕵️ Competitor Crusher

Анализ и улучшение стратегий конкурентов:

```
Ввод: "кофейня"
         ↓
┌────────────────────────────────────────┐
│  📊 ТОП-5 КОНЦЕПЦИЙ КОНКУРЕНТОВ:       │
│                                        │
│  1. Уютная атмосфера + латте-арт      │
│  2. Минимализм + specialty coffee      │
│  3. Винтаж + ностальгия               │
│  4. Эко-friendly + sustainability      │
│  5. Третье место + community          │
│                                        │
│  🚀 УЛУЧШЕННЫЕ ВЕРСИИ:                 │
│  [Промпты с психологией + деталями]   │
└────────────────────────────────────────┘
```

### 4. 📅 Content Calendar AI

Автоматический контент-план на месяц:

```
ЯНВАРЬ 2026
┌────┬────┬────┬────┬────┬────┬────┐
│ ПН │ ВТ │ СР │ ЧТ │ ПТ │ СБ │ ВС │
├────┼────┼────┼────┼────┼────┼────┤
│  1 │  2 │  3 │  4 │  5 │  6 │  7 │
│ 🎄 │    │    │    │    │    │    │
│Нов.│    │    │    │    │    │    │
├────┼────┼────┼────┼────┼────┼────┤
│  8 │  9 │ 10 │ 11 │ 12 │ 13 │ 14 │
│    │    │    │    │    │    │ ❤️ │
│    │    │    │    │    │    │Вал.│
└────┴────┴────┴────┴────┴────┴────┘

Каждый день = промпт + хук + праздник
```

### 5. 🧬 Prompt DNA Splitter

Реверс-инжиниринг любого промпта:

```
Ввод: "A beautiful woman in a cafe..."
              ↓
┌──────────────────────────────────────┐
│  🧬 АНАЛИЗ ДНК ПРОМПТА:              │
│                                      │
│  📊 Quality: 3/10 (слабое)           │
│  💡 Lighting: Не указано             │
│  🎨 Colors: Не указаны               │
│  📸 Camera: Не указано               │
│  🎭 Mood: "beautiful" (общее)        │
│  👤 Subject: Базовое описание        │
│                                      │
│  ✅ УЛУЧШЕННАЯ ВЕРСИЯ:               │
│  [Детальный промпт 2000+ символов]   │
└──────────────────────────────────────┘
```

### 6. 📊 CTR Predictor

Предсказание эффективности до генерации:

```
┌─────────────────────────────────────────┐
│  📊 CTR PREDICTION                      │
│                                         │
│  Score: 87/100  │  Grade: A             │
│  ████████████████████░░░░               │
│                                         │
│  ✅ Сильные стороны:                    │
│  • Чёткий визуальный хук               │
│  • Эмоциональный триггер               │
│  • Контрастные цвета                   │
│                                         │
│  ⚠️ Можно улучшить:                     │
│  • Добавить social proof               │
│  • Усилить urgency                     │
└─────────────────────────────────────────┘
```

### 7. 🎭 Persona Avatars

Создание детальных портретов ЦА:

```typescript
interface Persona {
  name: string;           // "Анна Карьеристка"
  age: string;            // "28-35"
  gender: string;         // "female"
  occupation: string;     // "Маркетолог в IT"
  income: string;         // "150-300k ₽"
  painPoints: string[];   // ["Нет времени на уборку", "Устаёт после работы"]
  desires: string[];      // ["Чистый дом", "Больше времени для себя"]
  triggers: string[];     // ["Удобство", "Экономия времени"]
  platforms: string[];    // ["Instagram", "Telegram"]
}
```

### 8. 🔄 Smart Remix

Улучшение существующих промптов:

```
ВАША ВЕРСИЯ:                    УЛУЧШЕННАЯ ВЕРСИЯ:
────────────────────────────    ────────────────────────────
"Photo of coffee cup            "Ultra-high resolution 
on table"                       photograph with exceptional
                                clarity capturing artisanal
42 символа                      latte with intricate rosetta
Score: 15/100                   art in handcrafted ceramic
                                cup..."
                   →            
                                1,847 символов
                                Score: 94/100
                                
                                + Психологические триггеры
                                + Детальное освещение
                                + Цветовая психология
                                + Эмоциональные якоря
```

### 9. 📦 Product Batch

Массовая генерация для каталога:

```
ВВОД (список продуктов):
─────────────────────────
Кроссовки Nike Air Max
Платье летнее цветочное
Часы Casio G-Shock
Сумка кожаная коричневая
         ↓
ВЫХОД (4 промпта):
─────────────────────────
[Промпт 1: Кроссовки - lifestyle, энергичный]
[Промпт 2: Платье - fashion, женственный]
[Промпт 3: Часы - product, технологичный]
[Промпт 4: Сумка - luxury, премиальный]
```

### 10. 🎬 Storyboard Director

Полная раскадровка видео:

```
РАСКАДРОВКА: 30 сек видео для кофейни
─────────────────────────────────────

🎬 КАДР 1 (0-3 сек) — HOOK
   Тип: Extreme close-up
   Действие: Steam rising from coffee
   Текст: "Это изменит твоё утро..."
   
🎬 КАДР 2 (3-8 сек) — PROBLEM
   Тип: Medium shot
   Действие: Person looking tired
   Текст: "Устал от обычного кофе?"
   
🎬 КАДР 3 (8-15 сек) — SOLUTION
   Тип: Wide shot
   Действие: Beautiful cafe interior
   Текст: "Открой для себя..."
   
🎬 КАДР 4 (15-22 сек) — BENEFIT
   Тип: Close-up reaction
   Действие: Happy customer enjoying
   Текст: "Вкус, который вдохновляет"
   
🎬 КАДР 5 (22-27 сек) — SOCIAL PROOF
   Тип: Montage
   Действие: Multiple happy customers
   Текст: "2000+ довольных гостей"
   
🎬 КАДР 6 (27-30 сек) — CTA
   Тип: Logo + info
   Действие: Location reveal
   Текст: "Ждём тебя! 📍 Москва"
```

---

## 🧠 Психологические триггеры

Каждый промпт оптимизирован с научно-обоснованными триггерами:

### Основные триггеры:

| Триггер | Описание | Визуальные элементы |
|---------|----------|---------------------|
| ⏰ **FOMO** | Страх упустить | Таймеры, лимиты, "Осталось 3 шт" |
| 🔥 **Urgency** | Срочность | Красные акценты, стрелки, "Сегодня" |
| 👥 **Social Proof** | Социальное доказательство | Рейтинги, отзывы, "5000+ клиентов" |
| 💎 **Scarcity** | Дефицит | "Лимитированная коллекция", эксклюзив |
| 🤝 **Trust** | Доверие | Сертификаты, гарантии, профессионалы |
| 😱 **Pain → Solution** | Боль → Решение | До/После, контраст проблемы |
| ✨ **Desire** | Желание | Аспирационные образы, мечта |
| 👔 **Authority** | Экспертность | Специалисты, дипломы, опыт |
| 🎁 **Reciprocity** | Взаимность | Бесплатно, подарок, бонус |
| ❤️ **Emotion** | Эмоции | Улыбки, счастье, трансформация |

### Eye-tracking оптимизация:

```
F-ПАТТЕРН (для текста):      Z-ПАТТЕРН (для рекламы):
┌──────────────────┐          ┌──────────────────┐
│ ████████████████ │          │ ●───────────────●│
│ ████████████     │          │  ╲             ╱ │
│ ████████████████ │          │   ╲           ╱  │
│ ████████         │          │    ╲         ╱   │
│ ████             │          │     ╲       ╱    │
│                  │          │ ●───────────────●│
└──────────────────┘          └──────────────────┘
```

---

## 🔧 API и архитектура

### Структура проекта:

```
src/
├── engine/
│   └── PromptEngine.ts      # Основной движок генерации
├── App.tsx                   # Главный компонент UI
├── main.tsx                  # Точка входа React
└── index.css                 # Стили Tailwind

public/
└── ...                       # Статические файлы

docs/
└── DOCUMENTATION.md          # Расширенная документация
```

### PromptEngine API:

```typescript
// Создание экземпляра
const engine = new PromptEngine();

// Основная генерация
const prompt = engine.generate(
  "Клининг в Москве",
  {
    platform: "instagram",
    format: "feed",
    style: "professional",
    model: "gemini",
    detailLevel: "detailed",
    mode: "image"
  }
);

// Smart Funnel
const funnel = engine.generateFunnel("Фитнес клуб");
// Returns: { awareness, interest, desire, action }

// Competitor Analysis
const analysis = engine.analyzeCompetitors("кофейня");

// CTR Prediction
const prediction = engine.predictCTR(promptText);
// Returns: { score: 87, grade: "A", improvements: [...] }

// Remix
const improved = engine.remixPrompt(weakPrompt);

// Storyboard
const storyboard = engine.generateStoryboard("Реклама ресторана", 30);
// Returns: { frames: [...], transitions: [...] }
```

### Типы данных:

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

interface PromptBlocks {
  quality: string;
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
}
```

---

## 📦 Форматы экспорта

### JSON Export (один промпт):

```json
{
  "version": "6.0",
  "generator": "NanoBanana Pro PromptEngine",
  "exportDate": "2026-02-15T12:00:00.000Z",
  "prompt": {
    "id": "abc123",
    "query": "Клининг в Москве",
    "mainPrompt": "Ultra-high resolution...",
    "negativePrompt": "low quality, blurry...",
    "ctrScore": 87,
    "viralScore": 72,
    "psychologyTriggers": ["trust", "transformation"],
    "blocks": { ... },
    "metadata": {
      "platform": "instagram",
      "format": "feed",
      "style": "professional",
      "model": "gemini"
    }
  }
}
```

### JSON Export (история):

```json
{
  "version": "6.0",
  "generator": "NanoBanana Pro",
  "exportDate": "2026-02-15T12:00:00.000Z",
  "totalPrompts": 47,
  "prompts": [ ... ]
}
```

### Storyboard Export:

```json
{
  "version": "6.0",
  "type": "storyboard",
  "duration": 30,
  "framesCount": 6,
  "frames": [
    {
      "number": 1,
      "timeStart": 0,
      "timeEnd": 3,
      "shotType": "Extreme close-up",
      "action": "Steam rising from coffee",
      "textOverlay": "Это изменит твоё утро...",
      "mood": "Intrigue",
      "prompt": "..."
    }
  ]
}
```

---

## ⌨️ Горячие клавиши

| Клавиша | Действие |
|---------|----------|
| `Enter` | Генерация промпта |
| `Ctrl + Enter` | Быстрая генерация (глобально) |
| `Ctrl + C` | Копировать промпт |
| `Ctrl + S` | Добавить в избранное |
| `Ctrl + E` | Экспорт в JSON |
| `Ctrl + D` | Тёмная тема вкл/выкл |

---

## ❓ FAQ

### Q: Какая оптимальная длина промпта?

**A:** Для NanoBananaPro рекомендуется 1200-2000 символов. Система автоматически генерирует промпты нужной длины в зависимости от настройки детальности.

### Q: Как улучшить CTR Score?

**A:** 
1. Используйте психологические триггеры
2. Добавьте конкретные детали
3. Укажите эмоциональные элементы
4. Используйте контрастные цвета
5. Включите social proof

### Q: Можно ли использовать для видео?

**A:** Да! Переключите режим на "Video" и выберите модель (Sora, Runway, Kling). Также доступен Storyboard Director для полной раскадровки.

### Q: Как сохранить стиль бренда?

**A:** Создайте Brand DNA в соответствующем разделе. Укажите цвета, тон, ЦА, USP. При генерации выберите ваш бренд — все промпты будут консистентны.

### Q: Поддерживается ли массовая генерация?

**A:** Да! Используйте Product Batch — введите список продуктов, получите промпт для каждого.

---

## 📄 Лицензия

MIT License © 2026 NanoBanana Pro Team

---

## 🤝 Поддержка

- 📧 Email: support@nanobanana.pro
- 💬 Telegram: @nanobanana_support
- 📚 Docs: docs.nanobanana.pro

---

**Made with 🍌 by NanoBanana Pro Team**
