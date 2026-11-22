/**
 * ==========================================================================
 * منتهى محمد جاسم - الطفلة المذهلة وسفيرة الكلمة
 * Architecture: Senior Frontend & Web Systems Engineering
 * High-Performance Dual-Folder Gallery with Standard Thumbnails & Detail Modal
 * ==========================================================================
 * Core Features:
 * 1. Dual Sequential Sections:
 *    - "الشهادات في الدروع الرسمية" (official-shields-certificates / صور الشهادات والدروع)
 *    - "تكريم ولقاءات المشاهير" (celebrities-honors / صور نكريمات مع مشاهير)
 * 2. Perfect Thumbnails Grid:
 *    - Fixed 220px aspect ratio with object-fit: cover, native lazy loading, no overflow.
 * 3. Full-Screen Interactive Detail Modal (Lightbox):
 *    - Opens on card click, displaying high-res image, sequence number, section badge,
 *      and standard cliché details. Next/Prev arrows, Escape key, and outside click.
 * 4. Automatic Sequential Discovery:
 *    - Automatically detects newly added sequential images (e.g. 61.jpg, 62.jpeg...) without code edits.
 * 5. Single-Point Standard Cliché Templates:
 *    - Easily modify the template for either section in one place.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Centralized Section Configurations & Standard Clichés
  // ==========================================
  const GALLERY_CONFIG = {
    // ----------------------------------------
    // Section 1: الشهادات في الدروع الرسمية
    // ----------------------------------------
    certificates: {
      id: 'certificates',
      title: 'الشهادات في الدروع الرسمية',
      typeBadge: 'درع رسمي',
      themeColor: '#10b981',
      // Dual-path support (Primary standard path + Localized workspace path)
      folders: ['./official-shields-certificates', './صور الشهادات والدروع'],
      extensions: ['.jpeg', '.jpg', '.png', '.webp'],
      knownCount: 60,       // Known baseline for 0ms initial render
      discoveryMax: 120,    // Dynamic scanning ceiling for new additions
      // [قالب الكليشة الستاندر الموحدة للشهادات والدروع - عربي وإنجليزي]
      standardCliché: (id, en = false) => en ? ({
        title: `Official Shield & Certificate of Honor #${id}`,
        organization: 'Registry of Official Shields & Awards',
        category: 'shields',
        categoryLabel: 'Official Shields & Certificates',
        year: '2024',
        description: 'Official documentation of award honoring child prodigy Muntaha Mohammed Jasim for her outstanding achievements.'
      }) : ({
        title: `درع وشهادة تكريم رسمي رقم ${id}`,
        organization: 'سجل الشهادات والدروع الرسمية',
        category: 'shields',
        categoryLabel: 'الشهادات في الدروع الرسمية',
        year: '2024',
        description: 'توثيق رسمي لدرع وشهادة تقدير وتكريم للبطلة منتهى محمد جاسم تقديراً لإنجازاتها المتميزة ومشاركاتها الوطنية.'
      })
    },

    // ----------------------------------------
    // Section 2: تكريم ولقاءات المشاهير
    // ----------------------------------------
    celebrities: {
      id: 'celebrities',
      title: 'تكريم ولقاءات المشاهير',
      typeBadge: 'لقاء المشاهير',
      themeColor: '#ec4899',
      // Dual-path support (Primary standard path + Localized workspace path)
      folders: ['./celebrities-honors', './صور نكريمات مع مشاهير'],
      extensions: ['.jpeg', '.jpg', '.png', '.webp'],
      knownCount: 61,       // Known baseline for 0ms initial render
      discoveryMax: 120,    // Dynamic scanning ceiling for new additions
      // [قالب الكليشة الستاندر الموحدة للمشاهير واللقاءات - عربي وإنجليزي]
      standardCliché: (id, en = false) => en ? ({
        title: `Official VIP Meeting & Honor #${id}`,
        organization: 'Dignitaries, Ministers & Public Figures',
        category: 'celebrity',
        categoryLabel: 'Celebrities & VIP Honors',
        year: '2023',
        description: 'Official photographic documentation of Muntaha\'s distinguished participations in national festivals and cultural forums.'
      }) : ({
        title: `لقاء وتكريم رسمي رقم ${id}`,
        organization: 'كبار الشخصيات والمبدعين',
        category: 'celebrity',
        categoryLabel: 'تكريم ولقاءات المشاهير',
        year: '2023',
        description: 'توثيق فوتوغرافي رسمي لمشاركات منتهى المضيئة في المهرجانات الوطنية واللقاءات الثقافية.'
      })
    }
  };

  // ==========================================
  // 2. Custom Metadata Overrides (Specific Historical Highlights)
  // Any ID not listed here automatically takes the Standard Cliché!
  // ==========================================
  const CELEBRITY_OVERRIDES = {
    1: { title: 'لقاء وزير الشباب والرياضة د. أحمد المبرقع', organization: 'معالي وزير الشباب والرياضة', category: 'ministers', year: '2024', description: 'استقبال وتكريم خاص في مقر الوزارة ببغداد بعد نيلها دروع التميز والإبداع.' },
    2: { title: 'لقاء الشاعر الكبير د. علي جعفر العلاق', organization: 'الشاعر د. علي جعفر العلاق', category: 'poets', year: '2024', description: 'جلسة أدبية وإشادة استثنائية من قامة الشعر العربي بحفظها وإلقائها لأصعب بحور الشعر.' },
    3: { title: 'لقاء رئيس المجمع العلمي العراقي د. محمد آل ياسين', organization: 'د. محمد آل ياسين', category: 'academics', year: '2024', description: 'إشادة المجمع العلمي بفصاحة منتهى وسلامة مخارج حروفها وإتقانها للضاد.' },
    6: { title: 'لقاء رئيس جامعة بابل', organization: 'أ.د. قحطان الجبوري - رئيس جامعة بابل', category: 'academics', year: '2023', description: 'تكريم خاص في رئاسة الجامعة تقديراً لتمثيلها الأكاديمي والثقافي المشرف.' },
    7: { title: 'لقاء السفير الصربي في مهرجان الاستدامة', organization: 'سعادة السفير الصربي في العراق', category: 'ministers', year: '2024', description: 'حوار ثقافي وإلقاء شعري فصيح في رحاب جامعة المستقبل نال إعجاب السلك الدبلوماسي.' },
    8: { title: 'لقاء صانع المحتوى أحمد نبيل (داسكي)', organization: 'صناع المحتوى ونقابة الإعلاميين', category: 'media', year: '2024', description: 'منحها هوية نقابة صناع المحتوى كأصغر صانعة محتوى تعليمي وثقافي هادف في العراق.' },
    9: { title: 'تكريم متحف هنّ الحياة كأصغر رائدة', organization: 'إدارة متحف هنّ الحياة الدولي', category: 'honorary', year: '2023', description: 'إزاحة الستار عن اللوحة التعريفية الخاصة بمنتهى داخل المتحف كأصغر رائدة ثقافة.' },
    10: { title: 'لقاء نخبة نجوم مهرجان بابل الدولي للثقافات', organization: 'ضيوف ووفود مهرجان بابل الدولي', category: 'festivals', year: '2023', description: 'أمسيتان شعريتان أبهرتا الوفود العربية والدولية على المسرح البابلي التاريخي.' },
    11: { title: 'لقاء رواد مجلس السيد حسام الشلاه الثقافي', organization: 'مجلس السيد حسام الشلاه الأدبي', category: 'poets', year: '2023', description: 'مشاركة مستمرة بإلقاء روائع المتنبي والجواهري وسط كبار أدباء الحلة وبغداد.' },
    12: { title: 'لقاء مجلس الحاج مالك عبد الأخوة الأدبي', organization: 'مجلس الحاج مالك الثقافي', category: 'poets', year: '2023', description: 'حوارات شعرية وقصائد فصيحة عكست حضورها المسرحي الجريء وفصاحتها المبكرة.' },
    13: { title: 'لقاء وفد برلمان الطفل العراقي ببغداد', organization: 'رئاسة برلمان الطفل العراقي', category: 'ministers', year: '2024', description: 'اجتماع مناقشة قضايا الطفولة ورعاية الموهوبين وإيصال صوت أطفال بابل.' },
    14: { title: 'لقاء نجوم الفن والدراما العراقية', organization: 'كبار الفنانين والمخرجين العراقيين', category: 'media', year: '2024', description: 'احتفاء الفنانين بموهبة الإلقاء والخطابة والتعبير الصوتي المعبر.' },
    15: { title: 'لقاء الإعلاميين ومراسلي القنوات الفضائية', organization: 'مراسلو القنوات العراقية والعربية', category: 'media', year: '2024', description: 'تغطيات تلفزيونية ولقاءات حية عن إنجاز حفظ أكثر من 950 بيتاً شعرياً.' },
    16: { title: 'لقاء عمداء وأساتذة جامعة الزهراء في كربلاء', organization: 'رئاسة جامعة الزهراء (ع)', category: 'academics', year: '2024', description: 'نيل درع الإبداع والتميز في فعاليات مهرجان لغة الضاد السنوي.' },
    17: { title: 'لقاء فريق AURONEXIS للذكاء الاصطناعي', organization: 'خبراء الذكاء الاصطناعي والتقنية', category: 'academics', year: '2025', description: 'المشاركة كعضو أساسي في دمج التراث العربي الفصيح مع النماذج التوليدية.' },
    19: { title: 'لقاء نقيب المعلمين ورجال التربية ببابل', organization: 'الكوادر التعليمية والتربوية', category: 'academics', year: '2023', description: 'إشادة بتفوقها الأكاديمي في الصف الأول متوسط وحفظها اللامع.' }
  };

  const CERTIFICATE_OVERRIDES = {
    1: { title: 'درع المرأة - وزارة الصحة', organization: 'وزارة الصحة العراقية', category: 'ministries', year: '2023', description: 'مُنحت درع المرأة بحضور معالي وزير الصحة تقديراً لنبوغها ومشاركتها الملهمة في تمكين المرأة.' },
    2: { title: 'درع الإبداع - جامعة بابل', organization: 'جامعة بابل', category: 'festivals', year: '2023', description: 'نيل درع الإبداع والتميز في فعاليات مهرجان لغة الضاد السنوي في رحاب جامعة بابل.' },
    3: { title: 'تكريم مبدعي العراق بيوم المرأة', organization: 'مهرجان يوم المرأة بالحلة', category: 'honorary', year: '2023', description: 'تكريم رسمي ضمن نخبة المبدعين والموهوبين في محافظة بابل بيوم المرأة العالمي.' },
    4: { title: 'تكريم رئيس جامعة بابل', organization: 'رئاسة جامعة بابل', category: 'festivals', year: '2023', description: 'تكريم وتقدير خاص من رئيس جامعة بابل شخصياً تشجيعاً لموهبتها الشعرية والخطابية الفذة.' },
    5: { title: 'درع وزارة الشباب والرياضة', organization: 'وزارة الشباب والرياضة', category: 'ministries', year: '2023', description: 'منحها درع التميز ضمن احتفالية تكريم الموهوبين والمتفوقين على مستوى العراق.' },
    6: { title: 'المركز الأول في الخطابة ببابل', organization: 'تربية محافظة بابل', category: 'shields', year: '2022', description: 'المرتبة الأولى في فن الخطابة والإلقاء الفصيح على مستوى محافظة بابل في سن التاسعة.' },
    7: { title: 'المركز الأول - خطب الإمام الحسن (ع)', organization: 'المسابقة العامة للخطب البلاغية', category: 'shields', year: '2025', description: 'حصدت المركز الأول ببراعة بيانية استثنائية ونطق فصيح مبهر في عمر 12 عاماً.' },
    9: { title: 'أصغر رائدة - متحف هنّ الحياة', organization: 'متحف هنّ الحياة الدولي', category: 'honorary', year: '2023', description: 'اختيرت كأصغر رائدة وعمل لوحة تعريفية دائمة ضمن قاعة رواد العراق في المتحف.' },
    11: { title: 'المركز الأول - مسابقة القرآن الكريم', organization: 'دار القرآن الكريم في بابل', category: 'shields', year: '2023', description: 'المركز الأول في حفظ وتلاوة سورة النبأ في الدورات القرآنية الصيفية.' },
    12: { title: 'لقب فارس الإنسانية والعطاء', organization: 'مهرجان تكريم هنّ الحياة الدولي', category: 'honorary', year: '2023', description: 'منحها اللقب الرفيع تثميناً لحضورها المؤثر ومشاركاتها التطوعية في دعم الأطفال.' },
    13: { title: 'درع الإبداع والتميز - جامعة الزهراء', organization: 'جامعة الزهراء (ع) - كربلاء', category: 'festivals', year: '2024', description: 'مهرجان لغة الضاد في جامعة الزهراء في كربلاء المقدسة تقديراً لفصاحتها وبلاغة إلقائها.' },
    14: { title: 'درع الإبداع والتميز - دورة الخطابة', organization: 'وزارة الشباب والرياضة', category: 'ministries', year: '2024', description: 'درع التميز لنيلها المركز الأول في ختام دورة الخطابة والإلقاء الوطنية ببغداد.' },
    16: { title: 'تكريم وزير الشباب والرياضة', organization: 'معالي وزير الشباب والرياضة', category: 'ministries', year: '2024', description: 'استقبال رسمي في ديوان الوزارة وتكريم مباشر تثميناً لمسيرتها الثقافية الملهمة.' },
    18: { title: 'عضوية برلمان الطفل العراقي', organization: 'برلمان الطفل العراقي', category: 'honorary', year: '2024', description: 'انتخابها عضواً في برلمان الطفل العراقي لتمثيل صوت أطفال العراق في المحافل الوطنية.' },
    19: { title: 'تكريم مهرجان العنف ضد المرأة', organization: 'وزارة الصحة العراقية', category: 'ministries', year: '2023', description: 'تكريم بحضور وكيل وزارة الصحة لإلقائها قصائد تدعم السلام ومناهضة العنف.' },
    20: { title: 'مشاركة مهرجان ألق الحسين (ع)', organization: 'الأمانة العامة للعتبة الحسينية', category: 'festivals', year: '2023', description: 'مشاركة مشهودة بحفظ وإلقاء القصائد الحسينية الفصيحة في كربلاء المقدسة.' },
    21: { title: 'تكريم مهرجان شاعر شباب العرب', organization: 'جامعة المستقبل', category: 'festivals', year: '2023', description: 'إشادة نقدية واسعة وتكريم رفيع بين كبار شعراء وأدباء الوطن العربي.' },
    22: { title: 'درع مهرجان أسبوع الاستدامة', organization: 'جامعة المستقبل', category: 'festivals', year: '2024', description: 'درع التفوق والتميز لإلقائها المميز بحضور السلك الدبلوماسي العربي والأجنبي.' },
    23: { title: 'درع مهرجان ينابيع الشهادة المسرحي', organization: 'نقابة الفنانين ونادي المسرح', category: 'festivals', year: '2024', description: 'تكريم مسرحي رسمي لحضورها الخطابي والتمثيلي المؤثر على خشبة المسرح.' },
    26: { title: 'درع ملتقى الحلة الفيحاء الأدبي', organization: 'مجلس السيد حسام الشلاه الأدبي', category: 'festivals', year: '2023', description: 'درع الثقافة والإبداع لإلقائها روائع المتنبي والجواهري في الأمسيات التراثية.' },
    28: { title: 'البطولة الدولية تكنوزيان للروبوت', organization: 'الاتحاد الدولي للذكاء الاصطناعي', category: 'festivals', year: '2025', description: 'تكريم خاص في ملتقى النجف الأشرف للروبوتات والذكاء الاصطناعي كأصغر متحدثة فصيحة.' },
    29: { title: 'شهادة عضوية فريق AURONEXIS', organization: 'فريق AURONEXIS للتطوير والابتكار', category: 'honorary', year: '2025', description: 'انضمامها كعضو أساسي لصناعة حلول الذكاء الاصطناعي المدمجة مع الشعر العربي.' },
    32: { title: 'وسام المبادرة الوطنية لدعم أطفال السرطان', organization: 'اللجنة الوطنية لدعم محاربي السرطان', category: 'ministries', year: '2025', description: 'تكريم خاص بين مشاهير ونجوم العراق تقديراً لزياراتها وقصائدها الداعمة للمرضى.' }
  };

  // ==========================================
  // 3. Fallback SVG Seal Generator (When Image Fails/Missing)
  // ==========================================
  function generateCertSVG(title, org, year, themeColor) {
    const safeTitle = (title || 'درع الإبداع').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeOrg = (org || 'تكريم رسمي').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const color = themeColor || '#ec4899';
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="%231a0d24" />
          <stop offset="50%" stop-color="%230f0717" />
          <stop offset="100%" stop-color="%231f0e2b" />
        </linearGradient>
        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${encodeURIComponent(color)}" />
          <stop offset="50%" stop-color="%23fbcfe8" />
          <stop offset="100%" stop-color="${encodeURIComponent(color)}" />
        </linearGradient>
      </defs>
      <rect width="500" height="350" fill="url(%23bg)" />
      <rect x="18" y="18" width="464" height="314" rx="16" fill="none" stroke="url(%23borderGrad)" stroke-width="2" opacity="0.85" />
      <rect x="26" y="26" width="448" height="298" rx="12" fill="none" stroke="%23ec4899" stroke-width="0.8" opacity="0.3" stroke-dasharray="6,4" />
      
      <!-- Corners decoration -->
      <circle cx="34" cy="34" r="5" fill="${encodeURIComponent(color)}" opacity="0.8"/>
      <circle cx="466" cy="34" r="5" fill="${encodeURIComponent(color)}" opacity="0.8"/>
      <circle cx="34" cy="316" r="5" fill="${encodeURIComponent(color)}" opacity="0.8"/>
      <circle cx="466" cy="316" r="5" fill="${encodeURIComponent(color)}" opacity="0.8"/>

      <!-- Crown Badge -->
      <g transform="translate(250, 75)" text-anchor="middle">
        <circle cx="0" cy="0" r="28" fill="%232b1338" stroke="${encodeURIComponent(color)}" stroke-width="2" />
        <text y="8" font-size="24" fill="%23fff" text-anchor="middle">🏆</text>
      </g>

      <!-- Center Title -->
      <text x="250" y="150" font-family="Cairo, sans-serif" font-weight="bold" font-size="19" fill="%23ffffff" text-anchor="middle">${safeTitle}</text>
      <text x="250" y="185" font-family="Cairo, sans-serif" font-size="14" fill="%23f472b6" text-anchor="middle">${safeOrg}</text>

      <line x1="150" y1="210" x2="350" y2="210" stroke="${encodeURIComponent(color)}" stroke-width="1.5" opacity="0.5" />

      <!-- Honoree & Year -->
      <text x="250" y="245" font-family="Amiri, serif" font-size="16" fill="%23fbcfe8" text-anchor="middle">المكرَّمة: منتهى محمد جاسم الصادق</text>
      <text x="250" y="278" font-family="Cairo, sans-serif" font-size="12" fill="%239ca3af" text-anchor="middle">توثيق رسمي معتمد • عام ${year}م</text>
    </svg>`;
  }

  // ==========================================
  // 4. Image Error & Multi-Format Fallback Handler
  // ==========================================
  window.handleGalleryImgError = function(img) {
    if (!img) return;
    const secType = img.dataset.secType || 'certificates';
    const config = GALLERY_CONFIG[secType] || GALLERY_CONFIG.certificates;
    const numId = img.dataset.numId || '1';
    const attempt = parseInt(img.dataset.attempt || '0', 10);

    // Build format and folder fallback matrix
    const matrix = [];
    config.folders.forEach(folder => {
      config.extensions.forEach(ext => {
        matrix.push(`${folder}/${numId}${ext}`);
      });
    });

    if (attempt < matrix.length) {
      img.dataset.attempt = (attempt + 1).toString();
      img.src = matrix[attempt];
    } else {
      // Final graceful fallback to stylized SVG seal
      const title = img.dataset.title || config.title;
      const org = img.dataset.org || 'سجل الشرف والتميز';
      const year = img.dataset.year || '2024';
      img.src = generateCertSVG(title, org, year, config.themeColor);
    }
  };

  // ==========================================
  // 5. Item Generator (Factory Pattern with Standard Cliché)
  // ==========================================
  function isEnglish() {
    return (typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : (localStorage.getItem('muntaha_language') || 'ar')) === 'en';
  }

  function createGalleryItem(secType, numId) {
    const en = isEnglish();
    const config = GALLERY_CONFIG[secType];
    const overrides = secType === 'celebrities' ? CELEBRITY_OVERRIDES : CERTIFICATE_OVERRIDES;
    const custom = overrides[numId];
    const standard = config.standardCliché(numId, en);

    const merged = custom ? { ...standard, ...custom } : standard;

    return {
      id: `${secType}_${numId}`,
      numId: Number(numId),
      secType: secType,
      type: secType === 'celebrities' ? 'celebrity' : 'certificate',
      typeBadge: en ? (secType === 'celebrities' ? 'VIP Encounter' : 'Official Shield') : config.typeBadge,
      title: merged.title,
      organization: merged.organization || merged.celebrity || merged.org,
      category: merged.category || 'shields',
      categoryLabel: merged.categoryLabel || (en ? (secType === 'celebrities' ? 'Celebrity Encounters' : 'Official Shields') : config.title),
      year: merged.year || '2024',
      description: merged.description || merged.desc,
      // Default candidate path (Prefer standard ASCII safe path)
      imageSrc: `${config.folders[0]}/${numId}.jpeg`,
      imageAlt: `${merged.title} - ${en ? 'Muntaha Mohammed Jasim' : 'منتهى محمد جاسم'}`,
      color: config.themeColor
    };
  }

  // ==========================================
  // 6. State Management & Initial Repository
  // ==========================================
  let allGalleryItems = [];

  // Build baseline repository (Known counts: 1..60 certificates, 1..61 celebrities)
  function buildInitialRepository() {
    const certItems = [];
    for (let i = 1; i <= GALLERY_CONFIG.certificates.knownCount; i++) {
      certItems.push(createGalleryItem('certificates', i));
    }

    const celebItems = [];
    for (let i = 1; i <= GALLERY_CONFIG.celebrities.knownCount; i++) {
      celebItems.push(createGalleryItem('celebrities', i));
    }

    // Merge and numerically sort
    allGalleryItems = [...celebItems, ...certItems];
    sortRepositoryNumerically();
  }

  function sortRepositoryNumerically() {
    allGalleryItems.sort((a, b) => Number(a.numId) - Number(b.numId));
  }

  buildInitialRepository();

  // ==========================================
  // 7. Dynamic Sequential Discovery Engine (Auto-Detection)
  // ==========================================
  function probeImageExistence(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  async function discoverSectionNewImages(secType) {
    const config = GALLERY_CONFIG[secType];
    const startIndex = config.knownCount + 1;
    let consecutiveMisses = 0;
    const maxMisses = 3;

    for (let num = startIndex; num <= config.discoveryMax; num++) {
      let foundUrl = null;

      for (const folder of config.folders) {
        for (const ext of config.extensions) {
          const testUrl = `${folder}/${num}${ext}`;
          const exists = await probeImageExistence(testUrl);
          if (exists) {
            foundUrl = testUrl;
            break;
          }
        }
        if (foundUrl) break;
      }

      if (foundUrl) {
        consecutiveMisses = 0;
        const existsAlready = allGalleryItems.some(it => it.secType === secType && it.numId === num);
        if (!existsAlready) {
          const newItem = createGalleryItem(secType, num);
          newItem.imageSrc = foundUrl;
          allGalleryItems.push(newItem);
        }
      } else {
        consecutiveMisses++;
        if (consecutiveMisses >= maxMisses) {
          break;
        }
      }
    }

    sortRepositoryNumerically();
    updateTabCounts();
    renderGallery();
  }

  function startBackgroundAutoDiscovery() {
    setTimeout(() => {
      discoverSectionNewImages('certificates');
      discoverSectionNewImages('celebrities');
    }, 1200);
  }

  // ==========================================
  // 8. DOM Elements & Filters
  // ==========================================
  const gridContainer = document.getElementById('gallery-grid');
  const emptyState = document.getElementById('gallery-empty-state');
  const mainTabButtons = document.querySelectorAll('.gallery-tab-btn');
  const categoryPills = document.querySelectorAll('#gallery-category-pills .category-pill');
  const yearPills = document.querySelectorAll('[data-gyear]');
  const searchInput = document.getElementById('gallery-search-input');
  const countDisplay = document.getElementById('gallery-count-display');

  // Counters
  const countAllEl = document.getElementById('tab-count-all');
  const countCelebEl = document.getElementById('tab-count-celebrities');
  const countCertEl = document.getElementById('tab-count-certificates');

  // Lightbox Modal Elements (Exact IDs matching gallery.html)
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxMainImg = document.getElementById('lightbox-main-img');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxOrg = document.getElementById('lightbox-org');
  const lightboxYear = document.getElementById('lightbox-year');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  const lightboxShareBtn = document.getElementById('lightbox-share-btn');

  // Filter States
  let activeTab = 'all';        // 'all' | 'celebrities' | 'certificates'
  let activeCategory = 'all';   // 'all' | 'ministers' | 'shields' | 'festivals' | etc.
  let activeYear = 'all';       // 'all' | '2025' | '2024' | '2023' | '2022'
  let searchQuery = '';
  let activeFilteredList = [];
  let currentLightboxIdx = 0;

  function updateTabCounts() {
    const totalCount = allGalleryItems.length;
    const celebCount = allGalleryItems.filter(it => it.secType === 'celebrities').length;
    const certCount = allGalleryItems.filter(it => it.secType === 'certificates').length;

    if (countAllEl) countAllEl.textContent = totalCount;
    if (countCelebEl) countCelebEl.textContent = celebCount;
    if (countCertEl) countCertEl.textContent = certCount;
  }

  updateTabCounts();

  // ==========================================
  // 9. Card Rendering Engine (Fixed CSS Classnames & Thumbnails)
  // ==========================================
  function renderGallery() {
    if (!gridContainer) return;

    // Filter by Active Tab
    let filtered = allGalleryItems;
    if (activeTab === 'celebrities') {
      filtered = filtered.filter(it => it.secType === 'celebrities');
    } else if (activeTab === 'certificates') {
      filtered = filtered.filter(it => it.secType === 'certificates');
    }

    // Filter by Category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(it => {
        if (activeCategory === 'celebrity') return it.type === 'celebrity';
        return it.category === activeCategory;
      });
    }

    // Filter by Year
    if (activeYear !== 'all') {
      filtered = filtered.filter(it => it.year === activeYear);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(it => {
        return (it.title || '').toLowerCase().includes(q) ||
               (it.organization || '').toLowerCase().includes(q) ||
               (it.description || '').toLowerCase().includes(q) ||
               String(it.numId) === q;
      });
    }

    activeFilteredList = filtered;

    const en = isEnglish();

    // Update Counter Display
    if (countDisplay) {
      countDisplay.textContent = en
        ? `Displaying ${filtered.length} of ${allGalleryItems.length} photos & honors`
        : `عرض ${filtered.length} من أصل ${allGalleryItems.length} صورة وتكريم`;
    }

    // Empty state
    if (filtered.length === 0) {
      gridContainer.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    // Render Cards using the EXACT CSS classes defined in style.css:
    // .gallery-card, .gallery-image-box, .gallery-thumb-img, .gallery-image-overlay, .gallery-zoom-badge, .gallery-card-body
    gridContainer.innerHTML = filtered.map((item, idx) => {
      const isCertificate = item.secType === 'certificates';
      const badgeIconSvg = isCertificate 
        ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -1px;"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/></svg>`
        : `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -1px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
      const orgIconSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: -2px; flex-shrink: 0;"><path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"/></svg>`;

      return `
        <article class="glass-card gallery-card" data-idx="${idx}" data-id="${item.id}" data-num="${item.numId}">
          <div class="gallery-image-box">
            <img 
              src="${item.imageSrc}" 
              alt="${item.imageAlt}" 
              class="gallery-thumb-img"
              loading="lazy" 
              decoding="async"
              data-sec-type="${item.secType}"
              data-num-id="${item.numId}"
              data-title="${item.title}"
              data-org="${item.organization}"
              data-year="${item.year}"
              data-attempt="0"
              onerror="window.handleGalleryImgError(this)"
            />
            <div class="gallery-image-overlay">
              <span class="gallery-zoom-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                <span>${en ? 'View & Enlarge' : 'تكبير واستعراض'}</span>
              </span>
              <button class="gallery-card-share-btn" data-share-idx="${idx}" title="${en ? 'Share Honor' : 'مشاركة التكريم'}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                <span>${en ? 'Share' : 'مشاركة'}</span>
              </button>
            </div>
          </div>

          <div class="gallery-card-body">
            <div class="gallery-card-meta">
              <span class="gallery-cat-tag" style="background: ${item.color}22; color: ${item.color}; border-color: ${item.color}44;">
                ${badgeIconSvg} <span>${item.categoryLabel}</span>
              </span>
              <span class="gallery-year-tag">${en ? item.year : item.year + 'م'}</span>
            </div>

            <h3 class="gallery-card-title">${item.title}</h3>

            <div class="gallery-card-org">
              ${orgIconSvg}
              <span>${item.organization}</span>
            </div>

            <p class="gallery-card-desc">${item.description}</p>
          </div>
        </article>
      `;
    }).join('');

    // Attach card clicks and share events
    attachCardEvents();
  }

  // ==========================================
  // 10. Lightbox Detail Modal System (Fixed Active State & IDs)
  // ==========================================
  function openLightbox(index) {
    if (!lightboxModal || !activeFilteredList || index < 0 || index >= activeFilteredList.length) return;
    currentLightboxIdx = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = activeFilteredList[currentLightboxIdx];
    if (!item) return;

    if (lightboxMainImg) {
      lightboxMainImg.src = item.imageSrc;
      lightboxMainImg.alt = item.imageAlt;
      lightboxMainImg.dataset.secType = item.secType;
      lightboxMainImg.dataset.numId = item.numId;
      lightboxMainImg.dataset.title = item.title;
      lightboxMainImg.dataset.org = item.organization;
      lightboxMainImg.dataset.year = item.year;
      lightboxMainImg.dataset.attempt = '0';
      lightboxMainImg.onerror = function() {
        window.handleGalleryImgError(this);
      };
    }

    const en = isEnglish();

    if (lightboxCategory) {
      lightboxCategory.textContent = `${item.typeBadge} • ${item.categoryLabel}`;
      lightboxCategory.style.color = item.color;
      lightboxCategory.style.borderColor = `${item.color}55`;
    }

    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxOrg) lightboxOrg.textContent = item.organization;
    if (lightboxYear) lightboxYear.textContent = en ? `Record Year: ${item.year}` : `عام التوثيق والتكريم: ${item.year}م`;
    if (lightboxDesc) lightboxDesc.textContent = item.description;

    if (lightboxCounter) {
      lightboxCounter.textContent = en
        ? `Photo ${currentLightboxIdx + 1} of ${activeFilteredList.length} (#${item.numId})`
        : `صورة ${currentLightboxIdx + 1} من ${activeFilteredList.length} (رقم ${item.numId})`;
    }
  }

  function nextLightbox() {
    if (activeFilteredList.length <= 1) return;
    currentLightboxIdx = (currentLightboxIdx + 1) % activeFilteredList.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    if (activeFilteredList.length <= 1) return;
    currentLightboxIdx = (currentLightboxIdx - 1 + activeFilteredList.length) % activeFilteredList.length;
    updateLightboxContent();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightbox);

  // Close when clicking on the dark backdrop outside content wrapper
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard Navigation: Esc, ArrowRight, ArrowLeft
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextLightbox();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevLightbox();
  });

  // Attach Card Events
  function attachCardEvents() {
    document.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // Prevent opening modal if clicking the direct share button
        if (e.target.closest('.gallery-card-share-btn')) return;
        const idx = parseInt(card.getAttribute('data-idx'), 10);
        openLightbox(idx);
      });
    });

    document.querySelectorAll('.gallery-card-share-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-share-idx'), 10);
        shareItem(activeFilteredList[idx]);
      });
    });
  }

  // Web Share API Handler
  async function shareItem(item) {
    if (!item) return;
    const shareTitle = `${item.title} - منتهى محمد جاسم`;
    const shareText = `«${item.title}»\nالجهة: ${item.organization}\nعام التوثيق: ${item.year}م\n\n${item.description}\n\nالموقع الرسمي للبطلة منتهى محمد جاسم:\n${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyShareText(shareText);
        }
      }
    } else {
      copyShareText(shareText);
    }
  }

  function copyShareText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('تم نسخ تفاصيل ورابط الصورة بنجاح للمشاركة! ✨');
      }).catch(() => {
        showToast('تم نسخ الرابط بنجاح! ✨');
      });
    } else {
      showToast('تم نسخ الرابط بنجاح! ✨');
    }
  }

  function showToast(msg) {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      toast.classList.add('visible');
      setTimeout(() => toast.classList.remove('visible'), 3000);
    }
  }

  if (lightboxShareBtn) {
    lightboxShareBtn.addEventListener('click', () => {
      shareItem(activeFilteredList[currentLightboxIdx]);
    });
  }

  // ==========================================
  // 11. Tab & Filter Event Listeners
  // ==========================================
  mainTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      mainTabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.getAttribute('data-gallery-tab');
      renderGallery();
    });
  });

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-gcat');
      renderGallery();
    });
  });

  yearPills.forEach(pill => {
    pill.addEventListener('click', () => {
      yearPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeYear = pill.getAttribute('data-gyear');
      renderGallery();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderGallery();
    });
  }

  // ==========================================
  // 12. Dynamic Language Synchronization & Mobile Drawer
  // ==========================================
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  // React instantly to global language toggle without reload
  window.addEventListener('muntahaLanguageChanged', () => {
    buildInitialRepository();
    renderGallery();
    updateTabCounts();
  });

  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('open');
    });

    const mobileDrawerClose = document.getElementById('mobile-drawer-close');
    if (mobileDrawerClose) {
      mobileDrawerClose.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileDrawer.classList.remove('open');
      });
    }

    document.querySelectorAll('.mobile-drawer .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });

    const mainNavbar = document.getElementById('main-navbar');
    document.addEventListener('click', (e) => {
      if (mainNavbar && !mainNavbar.contains(e.target)) {
        mobileDrawer.classList.remove('open');
      }
    });
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 13. System Initialization & Auto-Discovery
  // ==========================================
  renderGallery();
  startBackgroundAutoDiscovery();

});
