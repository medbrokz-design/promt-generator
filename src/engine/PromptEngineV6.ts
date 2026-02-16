// ============================================================
// 🍌 NANOBANA PRO v6.0 — ULTIMATE PROMPT ENGINE
// ============================================================

export interface BrandDNA {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  toneOfVoice: 'professional' | 'friendly' | 'luxury' | 'playful' | 'bold' | 'minimal';
  personality: string[];
  tagline: string;
  targetAudience: string;
  uniqueSellingPoints: string[];
  visualStyle: string;
  createdAt: number;
}

export interface PersonaAvatar {
  id: string;
  name: string;
  age: string;
  gender: 'male' | 'female' | 'any';
  occupation: string;
  income: 'low' | 'medium' | 'high' | 'premium';
  painPoints: string[];
  desires: string[];
  objections: string[];
  triggers: string[];
  platforms: string[];
  contentPreferences: string[];
  avatar: string;
  createdAt: number;
}

export interface FunnelStage {
  stage: 'awareness' | 'interest' | 'desire' | 'action';
  prompt: string;
  hook: string;
  cta: string;
  psychologyTrigger: string;
  format: string;
}

export interface StoryboardFrame {
  frameNumber: number;
  duration: string;
  visual: string;
  text: string;
  audio: string;
  transition: string;
  cameraMovement: string;
}

export interface ContentCalendarItem {
  date: string;
  day: string;
  occasion: string;
  prompt: string;
  platform: string;
  format: string;
  hook: string;
}

export interface CTRPrediction {
  score: number;
  grade: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
  benchmarks: {
    industry: number;
    platform: number;
  };
}

export interface PromptDNA {
  quality: string[];
  subject: string[];
  lighting: string[];
  colors: string[];
  mood: string[];
  camera: string[];
  composition: string[];
  details: string[];
  psychology: string[];
}

export interface CompetitorConcept {
  concept: string;
  whyWorks: string;
  improvedVersion: string;
  differentiator: string;
}

// ============================================================
// 🧬 PROMPT ENGINE v6.0 CLASS
// ============================================================

export class PromptEngineV6 {
  
  // ============================================================
  // 🏢 BRAND DNA KIT
  // ============================================================
  
  static createBrandDNA(input: {
    name: string;
    industry: string;
    colors?: { primary?: string; secondary?: string; accent?: string };
    tone?: string;
    targetAudience?: string;
    usps?: string[];
  }): BrandDNA {
    const tones: Record<string, BrandDNA['toneOfVoice']> = {
      'профессиональный': 'professional',
      'дружелюбный': 'friendly',
      'люксовый': 'luxury',
      'игривый': 'playful',
      'смелый': 'bold',
      'минималистичный': 'minimal'
    };
    
    const industryDefaults: Record<string, Partial<BrandDNA>> = {
      'клининг': {
        colors: { primary: '#1a73e8', secondary: '#34a853', accent: '#ffffff' },
        toneOfVoice: 'professional',
        personality: ['надёжный', 'чистый', 'быстрый'],
        visualStyle: 'Clean minimalist with before/after contrast'
      },
      'красота': {
        colors: { primary: '#e91e63', secondary: '#ffd700', accent: '#ffffff' },
        toneOfVoice: 'luxury',
        personality: ['элегантный', 'трансформирующий', 'уверенный'],
        visualStyle: 'Glamorous with soft lighting and rich textures'
      },
      'фитнес': {
        colors: { primary: '#f44336', secondary: '#212121', accent: '#ffeb3b' },
        toneOfVoice: 'bold',
        personality: ['энергичный', 'мотивирующий', 'сильный'],
        visualStyle: 'Dynamic action shots with high contrast'
      },
      'ресторан': {
        colors: { primary: '#8b4513', secondary: '#ffd700', accent: '#2e7d32' },
        toneOfVoice: 'friendly',
        personality: ['аппетитный', 'уютный', 'аутентичный'],
        visualStyle: 'Warm appetizing food photography with steam and texture'
      },
      'недвижимость': {
        colors: { primary: '#1565c0', secondary: '#ffd700', accent: '#ffffff' },
        toneOfVoice: 'professional',
        personality: ['надёжный', 'престижный', 'комфортный'],
        visualStyle: 'Bright interior photography with lifestyle elements'
      }
    };
    
    const defaults = industryDefaults[input.industry.toLowerCase()] || industryDefaults['клининг'];
    
    return {
      id: `brand_${Date.now()}`,
      name: input.name,
      colors: {
        primary: input.colors?.primary || defaults.colors?.primary || '#1a73e8',
        secondary: input.colors?.secondary || defaults.colors?.secondary || '#34a853',
        accent: input.colors?.accent || defaults.colors?.accent || '#ffffff'
      },
      fonts: {
        heading: 'Montserrat Bold',
        body: 'Open Sans'
      },
      toneOfVoice: tones[input.tone?.toLowerCase() || ''] || defaults.toneOfVoice || 'professional',
      personality: defaults.personality || ['профессиональный', 'надёжный'],
      tagline: `${input.name} — Ваш надёжный партнёр`,
      targetAudience: input.targetAudience || 'Взрослые 25-45 лет',
      uniqueSellingPoints: input.usps || ['Качество', 'Надёжность', 'Опыт'],
      visualStyle: defaults.visualStyle || 'Professional clean imagery',
      createdAt: Date.now()
    };
  }
  
  // ============================================================
  // 🎭 PERSONA AVATARS
  // ============================================================
  
  static createPersona(input: {
    name: string;
    demographics: string;
    painPoints: string[];
    desires: string[];
  }): PersonaAvatar {
    const avatars = ['👩‍💼', '👨‍💻', '👩‍🎨', '👨‍🍳', '👩‍⚕️', '👨‍🔧', '👩‍🏫', '👨‍💼'];
    
    return {
      id: `persona_${Date.now()}`,
      name: input.name,
      age: '25-45',
      gender: 'any',
      occupation: input.demographics,
      income: 'medium',
      painPoints: input.painPoints,
      desires: input.desires,
      objections: ['Дорого', 'Не доверяю', 'Нет времени'],
      triggers: ['Скидка', 'Гарантия', 'Отзывы'],
      platforms: ['Instagram', 'TikTok'],
      contentPreferences: ['Видео', 'До/После', 'Отзывы'],
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      createdAt: Date.now()
    };
  }
  
  static generatePersonaPrompt(persona: PersonaAvatar, business: string, brand?: BrandDNA): string {
    const painPointsVisual = persona.painPoints.map(p => 
      `Visual representation of "${p}" problem with stressed frustrated expression`
    ).join(', ');
    
    const desiresVisual = persona.desires.map(d => 
      `Aspirational imagery showing "${d}" achieved state with satisfied confident expression`
    ).join(', ');
    
    const brandColors = brand 
      ? `Brand colors: Primary ${brand.colors.primary}, Secondary ${brand.colors.secondary}, Accent ${brand.colors.accent}.`
      : '';
    
    return `Ultra-high resolution advertisement targeting ${persona.name} persona (${persona.age}, ${persona.occupation}).

PAIN POINT VISUALIZATION: ${painPointsVisual}. Show the frustration and struggle that resonates with target audience's daily experience.

DESIRE STATE VISUALIZATION: ${desiresVisual}. Create aspirational imagery that triggers emotional response and desire for transformation.

PSYCHOLOGICAL TARGETING: 
- Address objections: ${persona.objections.join(', ')} through visual trust signals
- Trigger responses: ${persona.triggers.join(', ')} prominently displayed
- Platform-optimized for: ${persona.platforms.join(', ')}
- Content style: ${persona.contentPreferences.join(', ')}

${brandColors}

CONVERSION ELEMENTS:
- Hook designed for 3-second attention capture
- Pain-to-desire transformation clearly visible
- Social proof elements (reviews, ratings, testimonials)
- Clear CTA with urgency trigger
- Format optimized for mobile-first viewing

Business: ${business}. Professional photography quality with authentic emotional resonance.`;
  }
  
  // ============================================================
  // 🎯 SMART FUNNEL MODE (AIDA)
  // ============================================================
  
  static generateFunnel(business: string, brand?: BrandDNA): FunnelStage[] {
    const brandStyle = brand ? `using ${brand.toneOfVoice} tone with colors ${brand.colors.primary}/${brand.colors.secondary}` : '';
    
    return [
      {
        stage: 'awareness',
        prompt: `Scroll-stopping awareness content for ${business} ${brandStyle}.

VISUAL CONCEPT: Eye-catching pattern interrupt that breaks scroll. Bold colors, unexpected composition, human face with strong emotion looking directly at viewer. Movement suggestion or visual tension.

PSYCHOLOGY: Curiosity trigger + Pattern interrupt. "What is this?" reaction.

HOOK TYPE: "POV:", "Секрет, который...", "Никто не говорит о..."

COMPOSITION: Asymmetric dynamic layout, face in upper third, bold text overlay minimal but impactful.

LIGHTING: High contrast dramatic lighting creating visual interest and stopping power.

FORMAT: Vertical 9:16 for Stories/Reels. First 0.5 seconds must hook.

${brand ? `BRAND: ${brand.name} visual identity maintained.` : ''}

Goal: STOP THE SCROLL. Awareness only, no selling yet.`,
        hook: 'POV: ты узнал об этом раньше всех',
        cta: 'Смотри →',
        psychologyTrigger: 'Curiosity + FOMO',
        format: '9:16 Stories/Reels'
      },
      {
        stage: 'interest',
        prompt: `Interest-building educational content for ${business} ${brandStyle}.

VISUAL CONCEPT: Value-first content showing expertise. Behind-the-scenes, how-it-works, or "did you know" style. Informative yet visually engaging.

PSYCHOLOGY: Authority building + Value demonstration. "This is useful!" reaction.

CONTENT TYPE: Carousel slides, process breakdown, tips compilation, myth-busting.

COMPOSITION: Clean organized layout with clear information hierarchy. Icons, arrows, numbered steps.

LIGHTING: Professional even lighting for clarity and trust.

ELEMENTS: 
- Expert positioning (certifications, experience)
- Valuable information freely given
- "Save this post" trigger
- Comment engagement prompt

FORMAT: Square 1:1 carousel or vertical educational video.

${brand ? `BRAND: ${brand.name} as thought leader in industry.` : ''}

Goal: BUILD INTEREST through value. Position as expert.`,
        hook: '5 секретов [industry] о которых молчат конкуренты',
        cta: 'Сохрани, чтобы не потерять 📌',
        psychologyTrigger: 'Authority + Value',
        format: '1:1 Carousel'
      },
      {
        stage: 'desire',
        prompt: `Desire-triggering transformation content for ${business} ${brandStyle}.

VISUAL CONCEPT: Before/After transformation showing dream state achieved. Emotional journey from pain to pleasure. Real results, real people, real emotions.

PSYCHOLOGY: Desire trigger + Social proof. "I want this too!" reaction.

BEFORE STATE: Authentic pain point visualization. Frustration, struggle, problem clearly visible. Dull colors, flat lighting, stressed expression.

AFTER STATE: Dream outcome achieved. Joy, satisfaction, transformation complete. Vibrant colors, beautiful lighting, confident happy expression.

TRANSFORMATION: Clear visual journey. Same person/space, dramatic improvement. Honest, believable, aspirational yet achievable.

SOCIAL PROOF: 
- Customer testimonials overlaid
- Star ratings visible (4.9★)
- "500+ довольных клиентов"
- Real photos, not stock

EMOTIONAL TRIGGERS:
- "This could be you"
- Aspirational lifestyle visible
- Success state desirable

FORMAT: Split-screen or swipe-reveal for maximum impact.

${brand ? `BRAND: ${brand.name} success stories.` : ''}

Goal: CREATE DESIRE. "I need this in my life."`,
        hook: 'Результат, который изменит всё',
        cta: 'Хочу так же! →',
        psychologyTrigger: 'Desire + Social Proof',
        format: '4:5 Before/After'
      },
      {
        stage: 'action',
        prompt: `Action-driving conversion content for ${business} ${brandStyle}.

VISUAL CONCEPT: Clear offer with irresistible CTA. Limited time urgency. All objections addressed. Easy next step.

PSYCHOLOGY: Urgency + Scarcity + Risk Reversal. "I must act NOW!" reaction.

OFFER STRUCTURE:
- Main benefit headline (biggest transformation)
- 3 supporting benefits with icons
- Price with original crossed out (perceived value)
- Bonus/gift for fast action
- Deadline/countdown visual
- Guarantee badge (risk reversal)
- CTA button HIGH CONTRAST

URGENCY ELEMENTS:
- "Только до [date]" 
- "Осталось 3 места"
- Timer/countdown visual
- "Первым 10 — подарок"

TRUST ELEMENTS:
- Payment badges
- Guarantee seal
- Contact info visible
- Reviews snippet

CTA DESIGN:
- Button size: LARGE
- Color: HIGH CONTRAST (${brand?.colors.accent || 'bright orange/red'})
- Text: Action verb + Benefit ("Записаться и получить скидку")
- Arrow/icon for direction

FORMAT: Square 1:1 for feed, Story with swipe-up.

${brand ? `BRAND: ${brand.name} final conversion push.` : ''}

Goal: DRIVE ACTION. Remove all friction. Make it easy.`,
        hook: 'Только сегодня: -50% + подарок',
        cta: 'ЗАБРОНИРОВАТЬ СО СКИДКОЙ →',
        psychologyTrigger: 'Urgency + Scarcity + Risk Reversal',
        format: '1:1 Offer Post'
      }
    ];
  }
  
  // ============================================================
  // 📊 CTR PREDICTOR
  // ============================================================
  
  static predictCTR(prompt: string): CTRPrediction {
    let score = 50; // Base score
    const strengths: string[] = [];
    const weaknesses: string[] = [];
    const improvements: string[] = [];
    
    // Check for key elements
    const checks = [
      { pattern: /hook|scroll.?stop|attention/i, points: 8, strength: '🎣 Хук для захвата внимания', weakness: '❌ Нет хука', improvement: 'Добавьте scroll-stopping hook элемент' },
      { pattern: /face|person|human|eye.?contact/i, points: 10, strength: '👤 Человеческое лицо (повышает CTR на 38%)', weakness: '❌ Нет людей в кадре', improvement: 'Добавьте человека с прямым взглядом в камеру' },
      { pattern: /emotion|happy|joy|excited|confident/i, points: 7, strength: '😊 Эмоциональный триггер', weakness: '❌ Нет эмоций', improvement: 'Добавьте эмоциональное выражение' },
      { pattern: /cta|button|call.?to.?action|записаться|купить|заказать/i, points: 10, strength: '🔘 Чёткий CTA', weakness: '❌ Нет CTA', improvement: 'Добавьте яркую кнопку призыва к действию' },
      { pattern: /contrast|bold|vibrant|bright/i, points: 6, strength: '🎨 Высокий контраст', weakness: '❌ Низкий контраст', improvement: 'Увеличьте контраст цветов' },
      { pattern: /before.?after|transformation|до.?после/i, points: 9, strength: '🔄 До/После формат (высокая вовлечённость)', weakness: '', improvement: '' },
      { pattern: /social.?proof|отзыв|review|rating|★/i, points: 8, strength: '⭐ Социальное доказательство', weakness: '❌ Нет отзывов', improvement: 'Добавьте рейтинг или отзывы' },
      { pattern: /urgen|срочно|только.?сегодня|ограничен|осталось/i, points: 7, strength: '⏰ Элемент срочности', weakness: '', improvement: 'Добавьте ограничение по времени' },
      { pattern: /discount|скидк|%|акци|бонус|подарок/i, points: 6, strength: '🎁 Оффер/Скидка', weakness: '', improvement: '' },
      { pattern: /lighting|свет|освещ/i, points: 5, strength: '💡 Проработанное освещение', weakness: '❌ Не указано освещение', improvement: 'Опишите тип освещения детально' },
      { pattern: /composition|композици|rule.?of.?third|thirds/i, points: 5, strength: '📐 Продуманная композиция', weakness: '❌ Не указана композиция', improvement: 'Добавьте правила композиции' },
      { pattern: /mobile|мобил|vertical|вертикал|9.?16|story|stories|reels/i, points: 6, strength: '📱 Оптимизация под мобильные', weakness: '❌ Не оптимизировано для мобильных', improvement: 'Укажите вертикальный формат для мобильных' }
    ];
    
    checks.forEach(check => {
      if (check.pattern.test(prompt)) {
        score += check.points;
        if (check.strength) strengths.push(check.strength);
      } else if (check.weakness) {
        weaknesses.push(check.weakness);
        if (check.improvement) improvements.push(check.improvement);
      }
    });
    
    // Length bonus
    if (prompt.length > 1500) {
      score += 5;
      strengths.push('📝 Детальное описание');
    } else if (prompt.length < 500) {
      score -= 10;
      weaknesses.push('❌ Слишком короткий промпт');
      improvements.push('Расширьте описание до 1000+ символов');
    }
    
    // Cap score
    score = Math.min(98, Math.max(15, score));
    
    // Determine grade
    let grade: CTRPrediction['grade'];
    if (score >= 90) grade = 'S';
    else if (score >= 80) grade = 'A';
    else if (score >= 70) grade = 'B';
    else if (score >= 60) grade = 'C';
    else if (score >= 50) grade = 'D';
    else grade = 'F';
    
    return {
      score,
      grade,
      strengths,
      weaknesses,
      improvements,
      benchmarks: {
        industry: 2.5,
        platform: 3.2
      }
    };
  }
  
  // ============================================================
  // 🔄 SMART REMIX
  // ============================================================
  
  static remixPrompt(originalPrompt: string, brand?: BrandDNA): string {
    const enhancements = [
      // Psychology
      `\n\nPSYCHOLOGY ENHANCEMENT:
- Add FOMO trigger: "Limited availability" visual cue
- Add Social Proof: Rating badge (4.9★), testimonial snippet
- Add Trust Signal: Guarantee badge, professional certification
- Add Urgency: Countdown timer or "Только сегодня" label`,
      
      // Visual
      `\n\nVISUAL ENHANCEMENT:
- Human face with direct eye contact for 38% higher engagement
- High contrast color scheme for scroll-stopping power
- Rule of thirds composition with subject on power points
- Shallow depth of field isolating subject from background`,
      
      // Lighting
      `\n\nLIGHTING ENHANCEMENT:
- Primary: Soft diffused key light from 45° angle
- Fill: Gentle fill from opposite side, 2:1 ratio
- Accent: Rim light creating subject separation
- Mood: Warm color temperature (3200K) for inviting feel`,
      
      // Technical
      `\n\nTECHNICAL ENHANCEMENT:
- Resolution: 8K ultra-high detail capture
- Format: Vertical 9:16 optimized for mobile Stories/Reels
- Color grading: Professional with accurate skin tones
- Sharpness: Crisp detail on subject, soft background`
    ];
    
    const brandEnhancement = brand ? `\n\nBRAND CONSISTENCY:
- Primary color: ${brand.colors.primary} for main elements
- Secondary color: ${brand.colors.secondary} for accents
- Tone: ${brand.toneOfVoice} visual language
- Style: ${brand.visualStyle}
- USPs visualized: ${brand.uniqueSellingPoints.join(', ')}` : '';
    
    return `ENHANCED PROMPT:

${originalPrompt}

${enhancements.join('\n')}
${brandEnhancement}

CONVERSION OPTIMIZATION:
- CTA button: Large, high-contrast, action verb
- Visual hierarchy: Hook → Benefit → CTA flow
- Mobile-first: Legible at thumbnail size
- Thumb zone: Key elements in easy-tap areas`;
  }
  
  // ============================================================
  // 🔬 HEISENBERG REALISM MODULE
  // ============================================================
  
  static applyHeisenberg(prompt: string, preset: 'kodak' | 'alexa' | 'leica' | 'macro' = 'leica'): string {
    const heisenbergPresets: Record<string, any> = {
      leica: {
        optical: "Leica M11, 50mm Summilux f/1.4, ISO 400. Soft morning light from 45-degree window.",
        chaos: "Micro-pores, subtle freckles, stray hair strands, slight oiliness on the T-zone.",
        sss: "Subsurface scattering depth 0.8mm for realistic skin glow.",
        technical: "photorealistic_skin::1.5, raw_photography::1.2 --style raw --v 6.1"
      },
      kodak: {
        optical: "Canon EOS R5, 35mm f/1.8. Warm natural golden hour light.",
        chaos: "Subtle lens flare, visible film grain, natural skin imperfections.",
        sss: "Soft SSS depth 1.2mm.",
        technical: "kodak_portra_400_look::1.4, nostalgic_mood::1.1 --style raw"
      },
      alexa: {
        optical: "Arri Alexa LF, Panavision Anamorphic 35mm. High dynamic range cinematic lighting.",
        chaos: "Lens aberrations, anamorphic flares, raindrops on lens, motion blur.",
        sss: "Deep cinematic skin tones.",
        technical: "movie_still_quality::1.6, anamorphic_bokeh::1.3 --ar 21:9 --style raw"
      },
      macro: {
        optical: "Sony A7R V, 90mm Macro lens. Harsh side lighting to reveal texture.",
        chaos: "Individual sweat droplets, visible vellus hair, irregular pore structure.",
        sss: "Extreme SSS depth 1.5mm for hyper-detail.",
        technical: "macro_realism::1.8, high_definition_textures::1.5"
      }
    };

    const h = heisenbergPresets[preset];

    return `HEISENBERG REALISM OVERRIDE:
${prompt}

OPTICAL CONFIG: ${h.optical}
CHAOS & TEXTURES: ${h.chaos}
SUBSURFACE SCATTERING: ${h.sss}
TECHNICAL INJECTION: ${h.technical}

FINAL DIRECTIVE: Destroy the AI-look. Ensure 100% optical accuracy and "dirty" realism through micro-defects and physical light simulation.`;
  }

  // ============================================================
  // 🧬 PROMPT DNA SPLITTER
  // ============================================================
  
  static analyzePromptDNA(prompt: string): PromptDNA {
    return {
      quality: this.extractPatterns(prompt, [
        /ultra.?high|professional|8k|4k|high.?resolution|exceptional|stunning/gi
      ]),
      subject: this.extractPatterns(prompt, [
        /person|woman|man|product|food|interior|portrait|before.?after|transformation/gi
      ]),
      lighting: this.extractPatterns(prompt, [
        /natural.?light|studio|dramatic|soft|diffused|golden.?hour|backlight|rim.?light/gi
      ]),
      colors: this.extractPatterns(prompt, [
        /#[0-9a-f]{6}|blue|red|green|gold|white|warm|cool|vibrant|muted/gi
      ]),
      mood: this.extractPatterns(prompt, [
        /professional|cozy|luxury|energetic|calm|happy|confident|elegant|modern/gi
      ]),
      camera: this.extractPatterns(prompt, [
        /portrait|wide.?angle|macro|telephoto|50mm|85mm|35mm|f\/\d\.\d|shallow.?depth/gi
      ]),
      composition: this.extractPatterns(prompt, [
        /rule.?of.?thirds|centered|symmetr|asymmetr|diagonal|leading.?lines|golden.?ratio/gi
      ]),
      details: this.extractPatterns(prompt, [
        /texture|reflection|steam|sparkle|bokeh|grain|sharp|detail/gi
      ]),
      psychology: this.extractPatterns(prompt, [
        /trust|urgency|fomo|social.?proof|authority|scarcity|desire|pain|transform/gi
      ])
    };
  }
  
  private static extractPatterns(text: string, patterns: RegExp[]): string[] {
    const results: string[] = [];
    patterns.forEach(pattern => {
      const matches = text.match(pattern);
      if (matches) results.push(...matches.map(m => m.toLowerCase()));
    });
    return [...new Set(results)];
  }
  
  // ============================================================
  // 🕵️ COMPETITOR CRUSHER
  // ============================================================
  
  static generateCompetitorConcepts(niche: string): CompetitorConcept[] {
    const concepts: Record<string, CompetitorConcept[]> = {
      'клининг': [
        {
          concept: 'До/После с таймером',
          whyWorks: 'Показывает скорость работы + результат. Двойной эффект: "быстро И качественно"',
          improvedVersion: 'Добавить живого человека в "После" части, показывающего удовольствие от чистоты. Добавить "Засекли время: 2 часа" реальный таймер.',
          differentiator: 'Все показывают результат, покажи ПРОЦЕСС в ускоренной съёмке + эмоцию клиента'
        },
        {
          concept: 'Грязь крупным планом → Чистота',
          whyWorks: 'Шок-контент, вызывает отвращение → желание избавиться',
          improvedVersion: 'Не просто грязь — покажи что ТАМ живёт (микробы, пыль 1000x zoom). Потом кристальная чистота.',
          differentiator: 'Добавь "До нас vs После нас vs Обычная уборка" — три стадии'
        },
        {
          concept: 'Отзыв в формате "talking head"',
          whyWorks: 'Реальный человек = доверие. UGC стиль работает лучше студийного.',
          improvedVersion: 'Не просто отзыв — покажи ПРОБЛЕМУ клиента ДО, его скептицизм, и эмоцию ПОСЛЕ. История, не обзор.',
          differentiator: 'Формат: "Я не верила что... но когда увидела результат..."'
        }
      ],
      'красота': [
        {
          concept: 'До/После трансформация',
          whyWorks: 'Визуальное доказательство мастерства',
          improvedVersion: 'Добавить таймлапс процесса + реакцию клиента при виде результата в зеркале (genuine surprise)',
          differentiator: 'Снимай реакцию в зеркале — самый эмоциональный момент'
        },
        {
          concept: 'ASMR процесс работы',
          whyWorks: 'Залипательный контент, высокий watch time',
          improvedVersion: 'Добавить сторителлинг: "Клиентка готовится к свадьбе..." — контекст даёт эмоцию',
          differentiator: 'Контекст важнее процесса'
        }
      ],
      'ресторан': [
        {
          concept: 'Food porn крупный план',
          whyWorks: 'Визуальный голод — базовый инстинкт',
          improvedVersion: 'Добавить момент ПЕРВОГО укуса и реакцию (закрытые глаза от удовольствия)',
          differentiator: 'Не блюдо — МОМЕНТ наслаждения'
        },
        {
          concept: 'За кулисами кухни',
          whyWorks: 'Прозрачность = доверие',
          improvedVersion: 'Шеф-повар объясняет СЕКРЕТ блюда. Эксклюзивность знания.',
          differentiator: '"Это знают только 1% поваров..."'
        }
      ],
      'фитнес': [
        {
          concept: 'Трансформация тела',
          whyWorks: 'Aspirational content — "хочу так же"',
          improvedVersion: 'Показать не только ТЕЛО, но изменение ЖИЗНИ: энергия, уверенность, одежда, отношения',
          differentiator: 'Трансформация жизни > трансформация тела'
        },
        {
          concept: 'Тренировка с харизматичным тренером',
          whyWorks: 'Личность продаёт лучше результатов',
          improvedVersion: 'Формат: тренер делает упражнение НЕПРАВИЛЬНО, потом показывает КАК НАДО',
          differentiator: '"Все делают ЭТО неправильно. Вот как надо..."'
        }
      ]
    };
    
    const nicheKey = Object.keys(concepts).find(k => niche.toLowerCase().includes(k)) || 'клининг';
    
    return concepts[nicheKey] || concepts['клининг'];
  }
  
  // ============================================================
  // 📅 CONTENT CALENDAR AI
  // ============================================================
  
  static generateContentCalendar(business: string, month: number = new Date().getMonth() + 1, year: number = new Date().getFullYear()): ContentCalendarItem[] {
    const holidays: Record<string, { name: string; theme: string }> = {
      '01-01': { name: 'Новый год', theme: 'Новогодние скидки и акции' },
      '01-07': { name: 'Рождество', theme: 'Рождественские поздравления' },
      '02-14': { name: 'День Влюблённых', theme: 'Романтические предложения' },
      '02-23': { name: 'День защитника', theme: 'Подарки для мужчин' },
      '03-08': { name: '8 Марта', theme: 'Подарки для женщин' },
      '05-01': { name: 'День труда', theme: 'Весенние акции' },
      '05-09': { name: 'День Победы', theme: 'Патриотический контент' },
      '06-01': { name: 'День защиты детей', theme: 'Семейные предложения' },
      '09-01': { name: 'Начало учёбы', theme: 'Back to school' },
      '11-25': { name: 'Black Friday', theme: 'Грандиозные скидки' },
      '12-31': { name: 'Новый год', theme: 'Новогодний контент' }
    };
    
    const contentTypes = [
      { type: 'educational', format: 'Carousel', hook: '5 секретов о [topic]' },
      { type: 'behind_scenes', format: 'Reels', hook: 'А вы знали как мы...' },
      { type: 'testimonial', format: 'Stories', hook: 'Отзыв клиента' },
      { type: 'offer', format: 'Feed Post', hook: 'Только сегодня: -X%' },
      { type: 'transformation', format: 'Before/After', hook: 'Было → Стало' },
      { type: 'tips', format: 'Reels', hook: 'Лайфхак: как...' },
      { type: 'faq', format: 'Stories Q&A', hook: 'Часто спрашивают...' }
    ];
    
    const daysInMonth = new Date(year, month, 0).getDate();
    const calendar: ContentCalendarItem[] = [];
    const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      const dateStr = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayName = dayNames[date.getDay()];
      
      // Check for holiday
      const holiday = holidays[dateStr];
      
      // Skip some days for realistic posting schedule (3-4 posts per week)
      if (!holiday && date.getDay() !== 0 && Math.random() > 0.5) continue;
      
      const contentType = contentTypes[Math.floor(Math.random() * contentTypes.length)];
      
      calendar.push({
        date: `${day}.${String(month).padStart(2, '0')}.${year}`,
        day: dayName,
        occasion: holiday?.name || '',
        prompt: holiday 
          ? `${holiday.theme} themed content for ${business}. Festive mood, holiday decorations, special offer visualization.`
          : `Regular ${contentType.type} content for ${business}. Engaging, valuable, conversion-focused.`,
        platform: 'Instagram',
        format: holiday ? 'Feed + Stories' : contentType.format,
        hook: holiday ? `🎉 ${holiday.name}! Специальное предложение...` : contentType.hook.replace('[topic]', business)
      });
    }
    
    return calendar;
  }
  
  // ============================================================
  // 🎬 STORYBOARD DIRECTOR
  // ============================================================
  
  static generateStoryboard(concept: string, duration: number = 30): StoryboardFrame[] {
    const frames: StoryboardFrame[] = [];
    
    if (duration === 15) {
      // 15-second format
      frames.push(
        {
          frameNumber: 1,
          duration: '0-3s',
          visual: `HOOK FRAME: ${concept}. Extreme close-up on intriguing element. Face with strong emotion or surprising visual. Pattern interrupt.`,
          text: 'Bold hook text: "Вы точно это делаете неправильно" или similar',
          audio: 'Trending sound или attention-grabbing SFX',
          transition: 'Hard cut (no transition)',
          cameraMovement: 'Quick zoom in'
        },
        {
          frameNumber: 2,
          duration: '3-8s',
          visual: 'PROBLEM/INTRIGUE: Show the problem or build curiosity. Quick cuts between related visuals.',
          text: 'Problem statement or question',
          audio: 'Building tension music',
          transition: 'Quick cuts',
          cameraMovement: 'Dynamic movement'
        },
        {
          frameNumber: 3,
          duration: '8-12s',
          visual: 'SOLUTION/REVEAL: Show your solution or answer. Product/service in action.',
          text: 'Solution reveal',
          audio: 'Payoff sound',
          transition: 'Smooth transition',
          cameraMovement: 'Reveal movement'
        },
        {
          frameNumber: 4,
          duration: '12-15s',
          visual: 'CTA FRAME: Clear call-to-action. Logo, button, swipe-up indication.',
          text: 'CTA + Offer',
          audio: 'Upbeat ending',
          transition: 'Fade or zoom',
          cameraMovement: 'Static or slow push'
        }
      );
    } else {
      // 30-second format
      frames.push(
        {
          frameNumber: 1,
          duration: '0-3s',
          visual: `HOOK: ${concept}. Pattern interrupt. Face with emotion. Unexpected visual that stops scroll.`,
          text: '"ШОК" или "ЭТО ИЗМЕНИТ ВСЁ" hook text',
          audio: 'Trending sound start / attention SFX',
          transition: 'Hard cut in',
          cameraMovement: 'Quick zoom or snap'
        },
        {
          frameNumber: 2,
          duration: '3-8s',
          visual: 'PROBLEM AMPLIFICATION: Show pain point in detail. Relatable struggle. "Знакомо?" moment.',
          text: 'Pain point description',
          audio: 'Tension building',
          transition: 'Quick cuts',
          cameraMovement: 'Handheld authentic feel'
        },
        {
          frameNumber: 3,
          duration: '8-15s',
          visual: 'SOLUTION REVEAL: Enter hero (product/service). Show how it solves problem. Process or transformation.',
          text: 'Solution introduction',
          audio: 'Mood shift - positive',
          transition: 'Satisfying transition',
          cameraMovement: 'Smooth reveal'
        },
        {
          frameNumber: 4,
          duration: '15-22s',
          visual: 'PROOF/RESULT: Show end result. Happy customer. Transformation complete. Social proof.',
          text: 'Results + testimonial snippet',
          audio: 'Triumphant mood',
          transition: 'Before/after wipe',
          cameraMovement: 'Glamour shot'
        },
        {
          frameNumber: 5,
          duration: '22-27s',
          visual: 'OFFER: Special deal. Discount visualization. Urgency elements (timer, "осталось 3").',
          text: 'Offer details + urgency',
          audio: 'Exciting/urgent',
          transition: 'Pop-in elements',
          cameraMovement: 'Static with motion graphics'
        },
        {
          frameNumber: 6,
          duration: '27-30s',
          visual: 'CTA: Big button. Logo. Simple clear instruction. Finger pointing to link.',
          text: 'ЗАПИСАТЬСЯ / ЗАКАЗАТЬ button',
          audio: 'Ending SFX + fade',
          transition: 'Zoom to CTA',
          cameraMovement: 'Push in to button'
        }
      );
    }
    
    return frames;
  }
  
  // ============================================================
  // 📦 PRODUCT BATCH GENERATOR
  // ============================================================
  
  static generateProductBatch(products: Array<{ name: string; category: string; price?: string; features?: string[] }>, brand?: BrandDNA): string[] {
    return products.map(product => {
      const brandStyle = brand ? `in ${brand.toneOfVoice} ${brand.visualStyle} style, using colors ${brand.colors.primary}/${brand.colors.secondary}` : '';
      
      return `Ultra-high resolution product photography for "${product.name}" (${product.category}) ${brandStyle}.

PRODUCT SHOWCASE:
- Hero shot: Product at 3/4 angle with optimal lighting showing form and details
- Clean background: Gradient or solid complementing product colors
- Professional studio lighting: Key light at 45°, fill light, rim light for separation
- Sharp focus on product with subtle shadow grounding it

${product.features ? `KEY FEATURES HIGHLIGHTED:\n${product.features.map(f => `- ${f} visually emphasized`).join('\n')}` : ''}

${product.price ? `PRICE DISPLAY: "${product.price}" in elegant typography` : ''}

COMPOSITION: Rule of thirds, product on intersection point, space for text overlay
FORMAT: Square 1:1 for Instagram feed
QUALITY: 8K ultra-high resolution, professional color grading

${brand ? `BRAND CONSISTENCY: ${brand.name} visual identity, ${brand.tagline}` : ''}`;
    });
  }
  
  // ============================================================
  // 🎨 STYLE MIXER
  // ============================================================
  
  static mixStyles(style1: string, style2: string, subject: string): string {
    const styles: Record<string, string> = {
      'cinematic': 'Cinematic film look with anamorphic lens flares, 2.35:1 aspect ratio, teal and orange color grading, shallow depth of field, dramatic lighting with strong contrast',
      'ugc': 'Authentic user-generated content style, slightly imperfect framing, natural smartphone quality, real location lighting, genuine unposed moment captured',
      'editorial': 'High-fashion editorial photography, dramatic poses, avant-garde styling, perfect studio lighting, magazine cover quality',
      'minimal': 'Clean minimalist aesthetic, lots of negative space, simple color palette, geometric composition, zen-like calm',
      'retro': 'Vintage film photography look, grain texture, faded colors, light leaks, nostalgic 70s/80s feel',
      'neon': 'Cyberpunk neon aesthetic, vibrant pink/blue/purple lighting, night city vibes, reflections on wet surfaces',
      'luxury': 'Opulent luxury aesthetic, rich deep colors, gold accents, velvet textures, premium materials, exclusive feel',
      'organic': 'Natural organic aesthetic, earth tones, natural textures, sustainable feel, raw materials, handcrafted quality'
    };
    
    const s1 = styles[style1.toLowerCase()] || styles['cinematic'];
    const s2 = styles[style2.toLowerCase()] || styles['ugc'];
    
    return `HYBRID STYLE FUSION for ${subject}:

PRIMARY STYLE INFLUENCE (60%):
${s1}

SECONDARY STYLE INFLUENCE (40%):
${s2}

FUSION RESULT:
Unique hybrid aesthetic combining the cinematic quality and dramatic lighting of ${style1} with the authentic, relatable feel of ${style2}. The result should feel premium yet accessible, polished yet genuine. Subject (${subject}) should be hero while style enhances without overwhelming.

TECHNICAL BLEND:
- Color grading: ${style1} palette with ${style2} texture
- Lighting: ${style1} setup with ${style2} natural feel
- Composition: ${style1} framing with ${style2} authenticity
- Mood: Professional aspiration meets relatable authenticity`;
  }
  
  // ============================================================
  // 🔥 VIRAL SCORE
  // ============================================================
  
  static calculateViralScore(prompt: string): { score: number; factors: string[] } {
    let score = 0;
    const factors: string[] = [];
    
    const viralElements = [
      { pattern: /hook|scroll.?stop/i, points: 15, factor: '🎣 Strong hook element' },
      { pattern: /emotion|shock|surprise|joy|anger/i, points: 12, factor: '😱 Emotional trigger' },
      { pattern: /face|eye.?contact|person|human/i, points: 10, factor: '👤 Human connection' },
      { pattern: /trend|viral|meme/i, points: 8, factor: '📈 Trend alignment' },
      { pattern: /relat|authentic|real|ugc/i, points: 10, factor: '🤝 Relatability' },
      { pattern: /transform|before.?after|result/i, points: 12, factor: '🔄 Transformation story' },
      { pattern: /secret|reveal|unknown|hack/i, points: 10, factor: '🤫 Curiosity gap' },
      { pattern: /controversy|debate|opinion|unpopular/i, points: 8, factor: '💬 Debate trigger' },
      { pattern: /satisfy|asmr|oddly.?satisfy/i, points: 8, factor: '✨ Satisfying content' },
      { pattern: /share|save|comment|tag/i, points: 5, factor: '📤 Share trigger' }
    ];
    
    viralElements.forEach(el => {
      if (el.pattern.test(prompt)) {
        score += el.points;
        factors.push(el.factor);
      }
    });
    
    return { score: Math.min(100, score), factors };
  }
  
  // ============================================================
  // 📱 PLATFORM OPTIMIZER  
  // ============================================================
  
  static optimizeForPlatform(prompt: string, platform: 'instagram' | 'tiktok' | 'youtube' | 'facebook' | 'telegram'): string {
    const platformSpecs: Record<string, { format: string; style: string; additions: string }> = {
      'instagram': {
        format: 'Square 1:1 (1080x1080) for Feed, Vertical 9:16 (1080x1920) for Stories/Reels',
        style: 'Polished aesthetic, cohesive color palette, Instagram-worthy quality',
        additions: 'Grid-friendly composition, save-worthy value, carousel potential'
      },
      'tiktok': {
        format: 'Vertical 9:16 (1080x1920), designed for full-screen mobile viewing',
        style: 'Raw authentic UGC feel, less polished more real, trending format alignment',
        additions: 'Hook in first 0.5 seconds, trending sound compatibility, duet/stitch potential, text overlays TikTok style'
      },
      'youtube': {
        format: 'Horizontal 16:9 (1920x1080) for main content, Vertical 9:16 for Shorts',
        style: 'High production value, cinematic quality, thumbnail-optimized',
        additions: 'Expressive thumbnail face, bold text on thumbnail, curiosity gap, 10+ minute content depth'
      },
      'facebook': {
        format: 'Square 1:1 or Vertical 4:5 for optimal mobile feed display',
        style: 'Shareable, emotional, community-building, older demographic friendly',
        additions: 'Share-worthy message, emotional resonance, clear readable text, less trendy more timeless'
      },
      'telegram': {
        format: 'Flexible, optimized for mobile preview (1280x720 or square)',
        style: 'Clean informative, less flashy, value-focused',
        additions: 'Preview-optimized, instant value visible, link-friendly layout'
      }
    };
    
    const spec = platformSpecs[platform] || platformSpecs['instagram'];
    
    return `${prompt}

PLATFORM OPTIMIZATION FOR ${platform.toUpperCase()}:

FORMAT: ${spec.format}

PLATFORM STYLE: ${spec.style}

PLATFORM-SPECIFIC ADDITIONS: ${spec.additions}

FINAL OUTPUT: Optimized specifically for ${platform} algorithm preferences and user behavior patterns.`;
  }
  
  // ============================================================
  // 🎁 OFFER BUILDER
  // ============================================================
  
  static buildOffer(business: string, offerType: 'discount' | 'bonus' | 'bundle' | 'trial' | 'limited'): string {
    const offers: Record<string, { headline: string; structure: string; urgency: string; visual: string }> = {
      'discount': {
        headline: '-50% ТОЛЬКО СЕГОДНЯ',
        structure: 'Зачёркнутая старая цена → Новая цена. Экономия в рублях указана.',
        urgency: 'Таймер обратного отсчёта, "Акция закончится через 2:34:15"',
        visual: 'Красный/оранжевый акцент на скидке, перечёркнутая цена визуально'
      },
      'bonus': {
        headline: 'ЗАКАЖИ И ПОЛУЧИ ПОДАРОК 🎁',
        structure: 'Основной продукт + Бонус (показать оба). Ценность бонуса указана.',
        urgency: '"Подарок для первых 20 заказов", счётчик оставшихся',
        visual: 'Подарочная коробка, бант, визуальное выделение бонуса'
      },
      'bundle': {
        headline: 'ВСЁ ВКЛЮЧЕНО ПО ЦЕНЕ ОДНОГО',
        structure: 'Комплект из 3-5 позиций. Общая ценность vs цена комплекта.',
        urgency: '"Комплект доступен до конца месяца"',
        visual: 'Все элементы комплекта разложены красиво, стрелки к общей цене'
      },
      'trial': {
        headline: 'ПОПРОБУЙ БЕСПЛАТНО',
        structure: 'Первое посещение/заказ/консультация = 0₽. Без обязательств.',
        urgency: '"Бесплатных мест осталось: 5"',
        visual: '"БЕСПЛАТНО" крупно, лёгкость входа, улыбающийся клиент'
      },
      'limited': {
        headline: 'ОСТАЛОСЬ ТОЛЬКО 3',
        structure: 'Эксклюзивность, лимит, особые условия для немногих.',
        urgency: 'Счётчик остатка, "2 купили за последний час"',
        visual: 'Премиальный вид, эксклюзивность, VIP элементы'
      }
    };
    
    const offer = offers[offerType];
    
    return `OFFER VISUALIZATION for ${business}:

HEADLINE: "${offer.headline}"

OFFER STRUCTURE: ${offer.structure}

URGENCY ELEMENT: ${offer.urgency}

VISUAL TREATMENT: ${offer.visual}

TRUST ELEMENTS:
- Гарантия возврата денег badge
- Отзывы клиентов (4.9★, 500+ отзывов)
- Безопасная оплата иконки
- Контакты для вопросов

CTA BUTTON: Большая, контрастная, с глаголом действия
Примеры: "ЗАБРОНИРОВАТЬ СО СКИДКОЙ", "ПОЛУЧИТЬ ПОДАРОК", "ЗАПИСАТЬСЯ БЕСПЛАТНО"

PSYCHOLOGICAL TRIGGERS:
- Loss aversion: "Не упусти"
- Social proof: "Уже 500+ клиентов"  
- Scarcity: Ограниченное количество/время
- Risk reversal: Гарантия возврата`;
  }
  
  // ============================================================
  // 🎣 HOOK LIBRARY
  // ============================================================
  
  static getHooks(niche: string, count: number = 10): string[] {
    const universalHooks = [
      'POV: ты наконец-то нашёл [solution]',
      'Я потратил(а) 5 лет чтобы понять это...',
      'Главная ошибка в [niche] о которой молчат',
      'Секрет [benefit] о котором не говорят конкуренты',
      'Почему [common belief] — это миф',
      'Сделай это и [benefit] через неделю',
      'Один простой трюк который изменит [aspect]',
      'Я был скептиком пока не попробовал...',
      'Топ-3 [topic] которые [benefit]',
      'Никогда не делай этого если хочешь [goal]',
      'Раньше я [problem], теперь [solution]',
      'Это изменило мою жизнь за 30 дней',
      'Вы точно делаете [thing] неправильно',
      'Бесплатный способ [benefit]',
      'Хватит [bad practice]! Вот как надо...',
      '[Number] признаков что вам нужен [service]',
      'Как [achieve goal] без [common obstacle]',
      'Что будет если [action] каждый день',
      'Правда о [topic] которую скрывают',
      'Результат через [timeframe]: реально?'
    ];
    
    const nicheHooks: Record<string, string[]> = {
      'клининг': [
        'Шок: что живёт в вашем диване',
        'Уборка за 2 часа vs целый день',
        'Почему пылесос не убирает пыль',
        'Грязный секрет клининговых компаний'
      ],
      'красота': [
        'Тренд который состарит вас на 10 лет',
        'Мастер vs Ученик: найди отличия',
        'Эту ошибку делают 90% женщин',
        'Процедура которая заменяет 5 других'
      ],
      'фитнес': [
        'Почему ты не худеешь: правда',
        'Одно упражнение вместо часа в зале',
        'Тренер показывает как делать НЕ НАДО',
        'Я качался 3 года неправильно'
      ],
      'ресторан': [
        'Блюдо которое заказывают все',
        'Секрет шеф-повара: как мы готовим',
        'Почему это блюдо стоит своих денег',
        'Первая реакция гостей на [dish]'
      ]
    };
    
    const nicheKey = Object.keys(nicheHooks).find(k => niche.toLowerCase().includes(k));
    const specific = nicheKey ? nicheHooks[nicheKey] : [];
    
    return [...specific, ...universalHooks]
      .map(h => h.replace('[niche]', niche).replace('[topic]', niche))
      .slice(0, count);
  }
}

export default PromptEngineV6;
