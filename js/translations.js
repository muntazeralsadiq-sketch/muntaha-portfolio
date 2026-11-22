/**
 * منتهى محمد جاسم - الطفلة المذهلة وسفيرة الكلمة
 * Bilingual Translation Engine & Localized Data Store (Arabic / English)
 * Pure Vanilla JavaScript
 */

const TRANSLATIONS = {
  ar: {
    // Navigation
    brand_title: 'منتهى محمد جاسم',
    brand_sub: 'الطفلة المذهلة • سفيرة الكلمة',
    nav_sections_btn: 'الأقسام',
    nav_sections_title: 'فهرس أقسام الموقع',
    mobile_theme_label: 'المظهر',
    nav_home: 'الرئيسية',
    nav_about: 'عن منتهى',
    nav_poetry: 'الديوان',
    nav_awards: 'التكريمات',
    nav_gallery: 'معرض الصور',
    nav_memory: 'أرشيف المحفوظات',
    hero_btn_memory: '📜 أرشيف المحفوظات (54 نصاً)',
    nav_timeline: 'المسيرة',
    nav_impact: 'الأثر',
    nav_quiz: 'تحدي الحفظ',
    nav_contact: 'تواصل',
    nav_audio_label: 'الإلقاء',
    nav_audio_on: 'صوت الإلقاء مفعل',
    nav_audio_off: 'صوت الإلقاء مكتوم',
    lang_btn_text: 'EN',
    lang_btn_title: 'Switch to English / الانتقال للغة الإنجليزية',
    quick_gallery_cta: 'معرض الصور (118+)',
    theme_btn_title: 'تبديل المظهر (نهاري / ليلي)',

    // Hero Section
    hero_badge: 'الموقع الرسمي • الطفلة المذهلة وسفيرة الكلمة',
    hero_name_first: 'منتهى محمد',
    hero_name_jasim: 'جاسم',
    hero_name_sadiq: 'الصادق',
    hero_title_label: 'اللقب والصفة:',
    hero_narrative: 'طفلة عراقية استثنائية من مواليد 2013 (الصف الأول متوسط)، تحفظ أكثر من <strong style="color: var(--pink-light);">950 بيتاً شعرياً فصيحاً</strong> لأعظم شعراء العربية، وحاصلة على أكثر من <strong style="color: var(--pink-light);">60 درعاً وتكريماً</strong> من وزارات وجامعات العراق. أصغر رائدة ثقافة وعضو برلمان الطفل العراقي.',
    hero_verse_hook: 'مطلع تفخر به:',
    hero_btn_poetry: 'ديوان الشعر (950+ بيت)',
    hero_btn_awards: 'الأوسمة والدروع (60+)',
    hero_btn_gallery: 'معارض الصور (118+)',
    hero_btn_quiz: 'تحدي الحفظ',
    hero_img_alt: 'منتهى محمد جاسم - الطفلة المذهلة',
    hero_card_tag: 'أصغر رائدة ثقافة في العراق',
    hero_card_name: 'منتهى محمد جاسم الخفاجي',
    hero_card_sub: 'مواليد 2013 • الحلة، محافظة بابل، العراق',
    hero_badge_awards: '60+ درع وجائزة',
    hero_badge_awards_sub: 'تكريمات رسمية ووزارية',
    hero_badge_verses: '950+ بيت شعر',
    hero_badge_verses_sub: 'المتنبي والجواهري وحافظ',
    badge_parliament: 'عضو برلمان الطفل العراقي',
    badge_ai: 'فريق AURONEXIS للذكاء الاصطناعي',
    badge_museum: 'متحف هنّ الحياة',

    // Stats Bar
    stat_0_label: 'بيتاً شعرياً فصيحاً محفوظاً',
    stat_0_sub: 'المتنبي، الجواهري، حافظ إبراهيم',
    stat_1_label: 'درعاً وتكريماً وشهادة رسمية',
    stat_1_sub: 'من وزارات وجامعات ومهرجانات',
    stat_2_label: 'أجزاء من القرآن الكريم',
    stat_2_sub: 'المركز الأول في مسابقة سورة النبأ',
    stat_3_label: 'مشاهدة للقصائد المنهجية',
    stat_3_sub: 'شرح مناهج الإعدادي والمتوسط',

    // About Section
    about_badge: '✨ السيرة والموهبة الإلهية',
    about_title: 'من هي <span class="pink-gradient-text">منتهى محمد جاسم</span>؟',
    about_desc: 'نموذج مبهر للطفولة العراقية الواعدة، جمعت بين أصالة الشعر العربي وعلوم العصر الحديث والمسؤولية المجتمعية.',
    about_story_title: 'ولادة موهبة استثنائية في بابل',
    about_p1: 'طفلة عراقية استثنائية من مواليد 2013، تحفظ أكثر من 950 بيتاً شعرياً فصيحاً لأعظم شعراء العربية كالمتنبي والجواهري وحافظ إبراهيم. حصلت على أكثر من 50 شهادة تقديرية ودرع وجائزة، وهي حافظة لخمسة أجزاء من القرآن الكريم. اختيرت كأصغر رائدة في متحف "هنّ الحياة" وعضو في برلمان الطفل العراقي، وتواصل مسيرتها الملهمة في خدمة الثقافة والمجتمع.',
    about_birth_label: 'سنة الولادة:',
    about_birth_val: '2013م (12 سنة)',
    about_grade_label: 'المرحلة الدراسية:',
    about_grade_val: 'الصف الأول متوسط',
    about_prov_label: 'المحافظة:',
    about_prov_val: 'بابل / الفيحاء - الحلة',
    about_quote: '«إن ما تملكه منتهى ليس مجرد حفظ، بل فهم عميق لروح القصيدة العربية ونطق فصيح يبشر بمستقبل أدبي مشرق للعراق.»',
    about_quote_author: '— شهادات كبار النقاد واللجان الأدبية في مهرجانات بابل وبغداد',

    pillar_1_title: 'الذاكرة الشعرية الفذة',
    pillar_1_desc: 'تحفظ أكثر من 950 بيتاً شعرياً لأعظم شعراء الفصحى، وتلقيها بتمكن لغوي وعاطفة آسرة تبهر كبار النقاد والجمهور.',
    pillar_1_badge: '✦ نبوغ في سن مبكرة',
    pillar_2_title: 'القرآن الكريم والخطابة',
    pillar_2_desc: 'حافظة لخمسة أجزاء من كتاب الله، والحائزة على المركز الأول في الخطابة ببابل ومسابقة سورة النبأ وخطب الإمام الحسن (ع).',
    pillar_2_badge: '✦ فصاحة بيانية منضبطة',
    pillar_3_title: 'عضوية برلمان الطفل',
    pillar_3_desc: 'اختيرت لتمثيل أطفال العراق لعام 2024، حاملةً قضايا الطفولة والثقافة والتعليم الهادف إلى المحافل الرسمية.',
    pillar_3_badge: '✦ تمثيل وطني رسمي',
    pillar_4_title: 'الذكاء الاصطناعي',
    pillar_4_desc: 'عضو أساسي في فريق AURONEXIS التقني ومشاركة في البطولة الدولية تكنوزيان للروبوتات والذكاء الاصطناعي بالنجف.',
    pillar_4_badge: '✦ مواكبة ثورة التكنولوجيا',

    // Poetry Section
    poetry_badge: '📜 ديوان الحفظ والإلقاء الفصيح',
    poetry_title: 'روائع الشعر العربي في <span class="pink-gradient-text">ذاكرة منتهى</span>',
    poetry_desc: 'تحفظ أكثر من 950 بيتاً شعرياً فصيحاً مع الضبط التام للوزن ومخارج الحروف. استمع واقرأ نماذج من محفوظاتها الخالدة.',
    poetry_to_memory_btn: 'استعراض أرشيف المحفوظات الشعري الشامل (54 نصاً) ←',
    cat_mutanabbi: 'روائع المتنبي',
    cat_jawahiri: 'الجواهري',
    cat_hafez: 'حافظ إبراهيم',
    cat_prose: 'قصائد النثر والخطابة',
    cat_curriculum: 'القصائد المنهجية',
    cat_all: 'كافة القصائد',
    poetry_search_placeholder: 'ابحث في عنوان القصيدة، الشاعر، أو الكلمات...',
    font_size_label: 'حجم الخط:',
    card_copy_btn: 'نسخ الأبيات 📋',
    card_copied_btn: 'تم النسخ ✔',
    card_listen_btn: 'استماع للإلقاء 🔊',
    poetry_notice: 'الأبيات الشعرية تبقى باللغة العربية الفصيحة حفاظاً على أصالة الوزن القرآني وبحور الخليل.',

    // Awards Section
    awards_badge: '🏆 سجل الإبداع والتكريم الوطني',
    awards_title: 'أكثر من <span class="pink-gradient-text">60 درعاً وجائزة</span> وشهادة تقديرية',
    awards_desc: 'حصاد سنوات من الجهد والتفوق، من وزارات الدولة والجامعات العراقية والمهرجانات الدولية ومؤسسات المجتمع المدني.',
    awards_cat_all: 'جميع التكريمات (60)',
    awards_cat_shields: 'دروع الإبداع',
    awards_cat_ministries: 'الوزارات والهيئات',
    awards_cat_festivals: 'الجامعات والمهرجانات',
    awards_cat_honorary: 'الألقاب التكريمية',
    year_label: 'السنة:',
    awards_search_placeholder: 'ابحث في الجوائز والدروع والوزارات...',
    awards_more_btn: 'عرض المزيد من التكريمات',
    awards_gallery_link: 'زيارة معرض الصور والشهادات (118+)',
    award_card_view: 'عرض التفاصيل الرسمية ←',

    // Timeline Section
    timeline_badge: 'محطات مضيئة في عمر الزهور',
    timeline_title: 'رحلة التألق والريادة <span class="pink-gradient-text">(2022 - 2025)</span>',
    timeline_desc: 'تدرج زمني يوثق خطوات منتهى من سن التاسعة وحتى دخولها برلمان الطفل العراقي والذكاء الاصطناعي.',
    timeline_all: 'كافة المحطات',
    timeline_filter_all: 'كافة المحطات',
    timeline_year_prefix: 'عام',

    // Impact Section
    impact_badge: 'رسالة إنسانية ومجتمعية',
    impact_title: 'الأثر المجتمعي <span class="pink-gradient-text">والعطاء الإنساني</span>',
    impact_desc: 'لم يقتصر نبوغ منتهى على الأدب فحسب؛ بل سخّرت صوتها وحضورها لخدمة المرضى والأطفال وصناعة المحتوى التعليمي الهادف.',

    // Quiz Section
    quiz_badge: 'اختبر معلوماتك الأدبية',
    quiz_title: 'تحدي حفظ الشعر مع <span class="pink-gradient-text">ذاكرة منتهى</span>',
    quiz_desc: 'أكمل شطر البيت الشعري واكتشف مدى معرفتك بروائع المتنبي والجواهري!',
    quiz_next_btn: 'السؤال التالي ←',
    quiz_restart_btn: 'إعادة التحدي',
    quiz_share_btn: 'مشاركة النتيجة',
    quiz_result_title: 'ما شاء الله! ذاكرة أدبية متألقة',
    quiz_result_desc: 'منتهى تحفظ أكثر من 950 بيتاً شعرياً لأبي الطيب المتنبي والجواهري وحافظ إبراهيم بدون أي خطأ في النحو والوزن!',

    // Contact Section
    contact_badge: 'قنوات التواصل والتنسيق الرسمي',
    contact_title: 'تواصل وتنسيق <span class="pink-gradient-text">المشاركات والفعاليات</span>',
    contact_desc: 'لتوجيه الدعوات للمهرجانات الشعرية، اللقاءات التلفزيونية، الأمسيات الثقافية، أو الفعاليات الوطنية والخيرية.',
    contact_channels_title: 'قنوات التواصل الرسمية والمباشرة',
    contact_channels_sub: 'تابع منصات منتهى الرسمية أو تواصل مباشرة عبر الواتساب',
    contact_office_badge: 'التنسيق والمشاركات الرسمية',
    contact_office_title: 'المكتب الإعلامي والتنسيق الثقافي',
    contact_office_desc: 'نرحب بجميع الدعوات الموجهة للطفلة المذهلة منتهى محمد جاسم لحضور المحافل الأدبية، برلمان الطفل، والأنشطة الإنسانية والمجتمعية في داخل العراق وخارجه.',
    contact_loc_label: 'المقر والموقع:',
    contact_loc_value: 'جمهورية العراق - محافظة بابل / الحلة',
    contact_role_label: 'الصفة الرسمية:',
    contact_role_value: 'عضو برلمان الطفل العراقي 2024',
    contact_wa_label: 'رقم الواتساب للتنسيق:',
    contact_wa_action: '07812612087 (اضغط للمحادثة)',
    contact_wa_btn: 'مراسلة واتساب للتنسيق المباشر 💬',
    channel_action: 'زيارة الحساب الموثق ←',
    whatsapp_action: 'مراسلة فورية عبر الواتساب ←',
    form_title: 'طلب تنسيق أو دعوة رسمية',
    form_name_label: 'الاسم أو الجهة المنظمة',
    form_name_placeholder: 'وزارة / جامعة / مؤسسة / شخصية',
    form_contact_label: 'الهاتف أو البريد للتواصل',
    form_contact_placeholder: 'رقم الهاتف أو البريد الإلكتروني',
    form_type_label: 'نوع الدعوة أو المشاركة',
    form_opt_festival: 'مهرجان شعري أو أدبي',
    form_opt_media: 'لقاء تلفزيوني أو إذاعي',
    form_opt_conference: 'مؤتمر شبابي أو برلماني',
    form_opt_award: 'تكريم أو منح درع رسمي',
    form_opt_charity: 'فعالية خيرية أو إنسانية',
    form_opt_other: 'أخرى',
    form_message_label: 'تفاصيل الرسالة أو الفعالية',
    form_message_placeholder: 'اذكر تاريخ الفعالية، المكان، وطبيعة المشاركة المطلوبة...',
    form_submit_btn: 'إرسال طلب التنسيق والمشاركة ✉️',
    form_success_title: 'تم استلام طلبكم بنجاح!',
    form_success_desc: 'سيتم مراجعة طلبكم والتواصل معكم عبر الهاتف أو الواتساب في أقرب وقت للتنسيق. شكراً لاهتمامكم ودعمكم لموهبة منتهى.',

    // Footer
    footer_quote: '« عَلى قَدرِ أَهلِ العَزمِ تَأتي العَزائِمُ • وَتَأتي عَلى قَدرِ الكِرامِ المَكارِمُ »',
    footer_poet: '— أبو الطيب المتنبي',
    footer_sub: 'الطفلة المذهلة • سفيرة الكلمة • عضو برلمان الطفل العراقي',
    footer_rights: '© 2026 منتهى محمد جاسم. جميع الحقوق محفوظة',
    footer_developer: 'تم إنشاء وتصميم وتطوير الموقع بواسطة منتظر الصادق • صُنع بكل فخر واعتزاز',
    footer_location: 'محافظة بابل الفيحاء • عاصمة الحضارات',

    // Modal & Toast
    modal_honor_badge: 'سجل الشرف والتكريم الرسمي',
    modal_cert_prefix: 'عام التكريم:',
    modal_share_btn: 'مشاركة هذا الإنجاز 📤',
    modal_honoree_label: 'المكرَّم:',
    modal_honoree_name: 'منتهى محمد جاسم حسن',
    modal_verified: '✔ إنجاز موثق ورسمي',
    toast_copied: 'تم النسخ بنجاح',

    // Gallery Page
    gallery_hero_badge: 'سجل الشرف والتكريمات المصورة',
    gallery_hero_title: 'معرض <span class="pink-gradient-text">المشاهير والدروع والشهادات</span>',
    gallery_hero_desc: 'معرض شامل يوثق مسيرة وتألق الطفلة المذهلة منتهى محمد جاسم: لقاءات مع كبار الشخصيات والوزراء والنجوم، إلى جانب أكثر من 60 درعاً وجائزة وشهادة شكر رسمية.',
    gallery_count_display: 'عرض {count} من أصل {total} صورة وتكريم',
    gallery_back_btn: 'العودة للرئيسية ←',
    gallery_tab_all: 'كافة المعارض والتكريمات',
    gallery_tab_celebrities: 'تكريم ولقاءات المشاهير',
    gallery_tab_certificates: 'الشهادات في الدروع الرسمية',
    gallery_tab_celebrities_sub: '58 صورة موثقة مع كبار الشخصيات والوزراء والنجوم',
    gallery_tab_certificates_sub: 'أكثر من 60 درعاً وشهادة تقديرية معتمدة',
    gallery_search_placeholder: 'ابحث في أسماء المشاهير، الدروع، أو المناسبات...',
    gallery_filter_all: 'الكل',
    gallery_filter_year: 'تصفية بالسنة:',
    gallery_zoom_badge: '🔍 تكبير واستعراض',
    gallery_verified: '✔ توثيق رسمي',
    gallery_empty_title: 'لم يتم العثور على نتائج مطابقة',
    gallery_empty_desc: 'يرجى تجربة البحث بكلمات أخرى أو إعادة ضبط خيارات التصفية.',
    gallery_lightbox_org_prefix: 'الجهة / الشخصية:',
    gallery_lightbox_year_prefix: 'عام التوثيق:',
    gallery_lightbox_reason_title: 'تفاصيل ومناسبة التكريم:',
    gallery_lightbox_share: 'مشاركة التكريم 📤',
    gallery_lightbox_close: 'إغلاق العارض',
    gallery_toast_copied: 'تم نسخ تفاصيل التكريم بنجاح!',

    // Gallery Category Pills
    gcat_all: 'الكل',
    gcat_celebrity: 'لقاءات المشاهير',
    gcat_shields: 'دروع الإبداع',
    gcat_ministries: 'الوزارات والهيئات',
    gcat_festivals: 'الجامعات والمهرجانات',
    gcat_honorary: 'الألقاب والمتاحف',

    // Memory & Poetry Archive Page
    memory_hero_badge: '📜 الذاكرة الذهبية • صالون الفصاحة والأدب الخالد',
    memory_hero_title: 'أرشيف <span class="pink-gradient-text">المحفوظات والشعر</span>',
    memory_hero_subtitle: 'ديوان شامل يضم روائع التراث العربي والإسلامي، معلقات الفصاحة، حكم الأئمة والصالحين، وملاحم الفخر والوطن التي حفظتها وأتقنتها غيباً البطلة المذهلة <strong>منتهى محمد جاسم</strong> بكل براعة واقتدار.',
    memory_stat_count: 'المحفوظات: <strong>54</strong> نصاً وقصيدة',
    memory_stat_verses: 'الأبيات الفصيحة: <strong>950+</strong> بيتاً مشكولاً',
    memory_stat_cats: 'التصنيفات: <strong>5</strong> أبواب أدبية',
    memory_stat_memory: 'القدرة: <strong>حفظ غيبي استثنائي</strong>',
    memory_search_placeholder: 'ابحث باسم القصيدة، الشاعر، المناسبة، أو بأي كلمة من الأبيات الشعرية...',
    mem_tab_all: 'كافة المحفوظات',
    mem_tab_ahlulbayt: 'أهل البيت (ع) والرثاء',
    mem_tab_jawahiri: 'الجواهري والوطنيات',
    mem_tab_wisdom: 'الحكم والزهد والأخلاق',
    mem_tab_arabic_edu: 'اللغة العربية والأم والتعليم',
    mem_tab_prose_history: 'الخطب والأثريات والفخر',
    memory_status_showing: 'عرض {count} من أصل {total} قصيدة',
    memory_status_cat_label: 'التصنيف الحالي: ',
    memory_btn_share: 'مشاركة',
    memory_btn_copy: 'نسخ',
    memory_btn_copied: 'تم النسخ!',
    memory_btn_read_full: 'عرض الأبيات كاملة ({count} بيتاً) ↓',
    memory_btn_show_less: 'عرض أقل ↑',
    memory_verse_count_label: 'عدد الأبيات / الأسطر: <strong>{count}</strong>',
    memory_honoree_tag: 'حفظ البطلة منتهى',
    memory_narrative_title: '📖 الأثر والقصة:',
    memory_empty_title: 'لم يتم العثور على نتائج تطابق بحثك',
    memory_empty_desc: 'جرّب البحث بكلمة أخرى، أو اختيار تصنيف مختلف من القائمة أعلاه.',
    memory_reset_filters: 'إعادة تعيين الفلاتر',
    memory_toast_copied: 'تم نسخ نص القصيدة كاملاً بنجاح 📋',
    memory_toast_link: 'تم نسخ رابط القصيدة بنجاح 🔗'
  },

  en: {
    // Navigation
    brand_title: 'Muntaha Mohammed Jasim',
    brand_sub: 'The Amazing Child • Word Ambassador',
    nav_sections_btn: 'Sections',
    nav_sections_title: 'Site Sections & Index',
    mobile_theme_label: 'Theme',
    nav_home: 'Home',
    nav_about: 'About',
    nav_poetry: 'Diwan',
    nav_awards: 'Honors',
    nav_gallery: 'Photo Gallery',
    nav_memory: 'Poetry Archive',
    hero_btn_memory: '📜 Poetry Archive (54 Works)',
    nav_timeline: 'Journey',
    nav_impact: 'Impact',
    nav_quiz: 'Quiz',
    nav_contact: 'Contact',
    nav_audio_label: 'Voice',
    nav_audio_on: 'Recitation Voice On',
    nav_audio_off: 'Recitation Voice Off',
    lang_btn_text: 'ع ر',
    lang_btn_title: 'التحويل للغة العربية / Switch to Arabic',
    quick_gallery_cta: 'Galleries (118+)',
    theme_btn_title: 'Toggle Theme (Light / Dark)',

    // Hero Section
    hero_badge: 'Official Website • The Amazing Child & Word Ambassador',
    hero_name_first: 'Muntaha Mohammed',
    hero_name_jasim: 'Jasim',
    hero_name_sadiq: 'Al-Sadiq',
    hero_title_label: 'Titles & Honors:',
    hero_narrative: 'An extraordinary Iraqi child born in 2013 (1st Intermediate Grade), memorizing over <strong style="color: var(--pink-light);">950 classical Arabic verses</strong> by the greatest poets in history, and recipient of over <strong style="color: var(--pink-light);">60 honors and shields</strong> from Iraqi ministries and universities. Youngest cultural pioneer and member of the Iraqi Children\'s Parliament.',
    hero_verse_hook: 'Opening Verse She Cherishes:',
    hero_btn_poetry: 'Poetry Diwan (950+ Verses)',
    hero_btn_awards: 'Honors & Shields (60+)',
    hero_btn_gallery: 'Photo Galleries (118+)',
    hero_btn_quiz: 'Memory Challenge',
    hero_img_alt: 'Muntaha Mohammed Jasim - The Amazing Child',
    hero_card_tag: 'Youngest Cultural Pioneer in Iraq',
    hero_card_name: 'Muntaha Mohammed Jasim Al-Khafaji',
    hero_card_sub: 'Born 2013 • Hillah, Babylon Province, Iraq',
    hero_badge_awards: '60+ Awards & Shields',
    hero_badge_awards_sub: 'Official & Ministerial Honors',
    hero_badge_verses: '950+ Classical Verses',
    hero_badge_verses_sub: 'Al-Mutanabbi & Al-Jawahiri',
    badge_parliament: 'Iraqi Children Parliament Member',
    badge_ai: 'AURONEXIS AI Team Member',
    badge_museum: 'Hunna Al-Hayat Museum Pioneer',

    // Stats Bar
    stat_0_label: 'Classical Verses Memorized',
    stat_0_sub: 'Al-Mutanabbi, Al-Jawahiri, Hafez Ibrahim',
    stat_1_label: 'Official Shields & Honors',
    stat_1_sub: 'From Ministries, Universities & Festivals',
    stat_2_label: 'Parts of the Holy Quran',
    stat_2_sub: '1st Place in Surah An-Naba Competition',
    stat_3_label: 'Curriculum Poetry Views',
    stat_3_sub: 'Explaining Intermediate & Prep Curricula',

    // About Section
    about_badge: '✨ Biography & Divine Gift',
    about_title: 'Who is <span class="pink-gradient-text">Muntaha Mohammed Jasim</span>?',
    about_desc: 'An inspiring model of promising Iraqi youth, uniting classical Arabic eloquence, modern sciences, and social responsibility.',
    about_story_title: 'Birth of an Exceptional Talent in Babylon',
    about_p1: 'An extraordinary Iraqi child born in 2013, memorizing over 950 classical verses by the greatest Arabic poets such as Al-Mutanabbi, Al-Jawahiri, and Hafez Ibrahim. She has received more than 50 shields, awards, and certificates of honor, and has memorized 5 parts of the Holy Quran. Chosen as the youngest pioneer at the "Hunna Al-Hayat" Museum and a member of the Iraqi Children\'s Parliament, continuing her inspiring journey in culture and society.',
    about_birth_label: 'Birth Year:',
    about_birth_val: '2013 (12 Years Old)',
    about_grade_label: 'School Grade:',
    about_grade_val: '1st Intermediate Grade',
    about_prov_label: 'Province:',
    about_prov_val: 'Babylon / Al-Hillah',
    about_quote: '“What Muntaha possesses is not mere memorization, but a profound understanding of the spirit of Arabic poetry and eloquent delivery promising a luminous literary future for Iraq.”',
    about_quote_author: '— Testimonies of senior critics and literary committees in Babylon and Baghdad festivals',

    pillar_1_title: 'Photographic Poetic Memory',
    pillar_1_desc: 'Memorizing over 950 verses by classical masters, reciting with linguistic mastery and captivating emotion that astounds critics and audiences.',
    pillar_1_badge: '✦ Early Brilliance',
    pillar_2_title: 'Holy Quran & Eloquence',
    pillar_2_desc: 'Memorizer of 5 parts of the Holy Quran, and 1st place laureate in oratory across Babylon, Surah An-Naba, and Imam Hassan (AS) sermons.',
    pillar_2_badge: '✦ Disciplined Rhetorical Eloquence',
    pillar_3_title: 'Children Parliament Member',
    pillar_3_desc: 'Elected to represent Iraqi children for 2024, conveying childhood, cultural, and purposeful education causes to official forums.',
    pillar_3_badge: '✦ Official National Representation',
    pillar_4_title: 'Artificial Intelligence',
    pillar_4_desc: 'Core member of the AURONEXIS technology team and participant in the TecnoZian International Robotics & AI Championship in Najaf.',
    pillar_4_badge: '✦ Embracing the Tech Revolution',

    // Poetry Section
    poetry_badge: '📜 Classical Recitation & Memory Diwan',
    poetry_title: 'Treasures of Arabic Poetry in <span class="pink-gradient-text">Muntaha\'s Memory</span>',
    poetry_desc: 'Memorizing over 950 classical verses with immaculate meter and pronunciation. Read and listen to selections from her repertoire.',
    poetry_to_memory_btn: 'Explore Full Poetry Archive (54 Texts) →',
    cat_mutanabbi: 'Al-Mutanabbi Masterpieces',
    cat_jawahiri: 'Al-Jawahiri',
    cat_hafez: 'Hafez Ibrahim',
    cat_prose: 'Prose & Oratory',
    cat_curriculum: 'Curriculum Poems',
    cat_all: 'All Poems',
    poetry_search_placeholder: 'Search poem titles, poets, or keywords...',
    font_size_label: 'Font Size:',
    card_copy_btn: 'Copy Verses 📋',
    card_copied_btn: 'Copied ✔',
    card_listen_btn: 'Listen 🔊',
    poetry_notice: 'Poetic verses remain in authentic classical Arabic to preserve their timeless rhythm and prosodic integrity.',

    // Awards Section
    awards_badge: '🏆 Record of Honor & National Recognition',
    awards_title: 'Over <span class="pink-gradient-text">60 Shields & Awards</span> and Certificates',
    awards_desc: 'The harvest of years of devotion and brilliance, bestowed by state ministries, Iraqi universities, international festivals, and civil society institutions.',
    awards_cat_all: 'All Honors (60)',
    awards_cat_shields: 'Creative Shields',
    awards_cat_ministries: 'Ministries & State',
    awards_cat_festivals: 'Universities & Festivals',
    awards_cat_honorary: 'Honorary Titles',
    year_label: 'Year:',
    awards_search_placeholder: 'Search honors, shields, and ministries...',
    awards_more_btn: 'Show More Honors',
    awards_gallery_link: 'Visit Photo Gallery & Shields (118+)',
    award_card_view: 'View Official Details →',

    // Timeline Section
    timeline_badge: 'Luminous Milestones in Youth',
    timeline_title: 'Journey of Brilliance & Leadership <span class="pink-gradient-text">(2022 - 2025)</span>',
    timeline_desc: 'A chronological timeline documenting Muntaha\'s journey from age 9 to her induction into the Iraqi Children\'s Parliament and AI initiatives.',
    timeline_all: 'All Milestones',
    timeline_filter_all: 'All Milestones',
    timeline_year_prefix: 'Year',

    // Impact Section
    impact_badge: 'Humanitarian & Community Mission',
    impact_title: 'Social Impact & <span class="pink-gradient-text">Humanitarian Giving</span>',
    impact_desc: 'Muntaha\'s brilliance extends beyond literature; she channels her voice and influence to comfort patients, mentor children, and create educational content.',

    // Quiz Section
    quiz_badge: 'Test Your Literary Knowledge',
    quiz_title: 'Poetry Challenge with <span class="pink-gradient-text">Muntaha\'s Memory</span>',
    quiz_desc: 'Complete the missing half of classical verses and test your knowledge of Al-Mutanabbi and Al-Jawahiri\'s masterpieces!',
    quiz_next_btn: 'Next Question →',
    quiz_restart_btn: 'Restart Challenge',
    quiz_share_btn: 'Share Result',
    quiz_result_title: 'Splendid! A Sparkling Literary Memory',
    quiz_result_desc: 'Muntaha memorizes over 950 classical verses by Al-Mutanabbi, Al-Jawahiri, and Hafez Ibrahim with flawless rhythm and grammar!',

    // Contact Section
    contact_badge: 'Official Inquiries & Coordination',
    contact_title: 'Event Invitations & <span class="pink-gradient-text">Coordination</span>',
    contact_desc: 'For invitations to poetry festivals, television appearances, cultural evenings, or national and charitable events.',
    contact_channels_title: 'Direct Official Channels',
    contact_channels_sub: 'Follow Muntaha\'s verified platforms or connect directly via WhatsApp',
    contact_office_badge: 'Official Coordination & Inquiries',
    contact_office_title: 'Media Office & Cultural Coordination',
    contact_office_desc: 'We welcome all official invitations for child prodigy Muntaha Mohammed Jasim to participate in literary forums, children\'s parliament sessions, and cultural and humanitarian events within Iraq and abroad.',
    contact_loc_label: 'Headquarters & Location:',
    contact_loc_value: 'Republic of Iraq - Babylon / Hillah',
    contact_role_label: 'Official Capacity:',
    contact_role_value: 'Member of Iraqi Children\'s Parliament 2024',
    contact_wa_label: 'WhatsApp for Coordination:',
    contact_wa_action: '07812612087 (Click to chat)',
    contact_wa_btn: 'Direct WhatsApp Coordination 💬',
    channel_action: 'Visit Verified Account →',
    whatsapp_action: 'Direct WhatsApp Chat →',
    form_title: 'Official Invitation / Coordination Form',
    form_name_label: 'Name or Organizing Entity',
    form_name_placeholder: 'Ministry / University / Institution / Public Figure',
    form_contact_label: 'Phone or Email for Coordination',
    form_contact_placeholder: 'Phone number or email address',
    form_type_label: 'Type of Event or Invitation',
    form_opt_festival: 'Poetry / Literary Festival',
    form_opt_media: 'TV / Radio Interview',
    form_opt_conference: 'Youth / Parliamentary Conference',
    form_opt_award: 'Official Honor / Shield Presentation',
    form_opt_charity: 'Charity / Humanitarian Initiative',
    form_opt_other: 'Other Inquiry',
    form_message_label: 'Event Details & Scope',
    form_message_placeholder: 'Specify event date, venue, and required participation...',
    form_submit_btn: 'Submit Coordination Request ✉️',
    form_success_title: 'Request Received Successfully!',
    form_success_desc: 'Your request is being reviewed and our team will contact you via phone or WhatsApp shortly. Thank you for supporting Muntaha\'s talent.',

    // Footer
    footer_quote: '« As much as men of resolve, resolves arise • And as much as generous men, generous deeds arrive »',
    footer_poet: '— Abu Al-Tayyib Al-Mutanabbi',
    footer_sub: 'The Prodigy Girl • Word Ambassador • Iraqi Children Parliament Member',
    footer_rights: '© 2026 Muntaha Mohammed Jasim. All rights reserved',
    footer_developer: 'Designed & Developed by Muntadher Al-Sadiq • Proudly Crafted',
    footer_location: 'Babylon Province • Capital of Civilizations',

    // Modal & Toast
    modal_honor_badge: 'Official Record of Honor',
    modal_cert_prefix: 'Year of Honor:',
    modal_share_btn: 'Share This Achievement 📤',
    modal_honoree_label: 'Honoree:',
    modal_honoree_name: 'Muntaha Mohammed Jasim Hassan',
    modal_verified: '✔ Documented & Verified Achievement',
    toast_copied: 'Copied to clipboard successfully',

    // Gallery Page
    gallery_hero_badge: 'Visual Record of Honor & VIP Encounters',
    gallery_hero_title: 'Gallery of <span class="pink-gradient-text">Celebrities, Shields</span> & Awards',
    gallery_hero_desc: 'A comprehensive gallery documenting the brilliance and achievements of child prodigy Muntaha Mohammed Jasim: encounters with ministers, VIP dignitaries, and stars, alongside over 60 official shields and certificates.',
    gallery_count_display: 'Displaying {count} of {total} photos & honors',
    gallery_back_btn: '← Back to Home',
    gallery_tab_all: 'All Galleries & Honors',
    gallery_tab_celebrities: 'Celebrity & VIP Honors',
    gallery_tab_certificates: 'Official Shields & Certificates',
    gallery_tab_celebrities_sub: '58 documented photographs with dignitaries, ministers and stars',
    gallery_tab_certificates_sub: 'Over 60 official shields and accredited honors',
    gallery_search_placeholder: 'Search celebrities, shields, or events...',
    gallery_filter_all: 'All',
    gallery_filter_year: 'Filter by Year:',
    gallery_zoom_badge: '🔍 Expand Photo',
    gallery_verified: '✔ Documented & Verified',
    gallery_empty_title: 'No matching results found',
    gallery_empty_desc: 'Try searching with different keywords or adjust the filter options.',
    gallery_lightbox_org_prefix: 'Dignitary / Authority:',
    gallery_lightbox_year_prefix: 'Year of Record:',
    gallery_lightbox_reason_title: 'Recognition Details & Citation:',
    gallery_lightbox_share: 'Share Achievement 📤',
    gallery_lightbox_close: 'Close Lightbox',
    gallery_toast_copied: 'Honor details copied to clipboard successfully!',

    // Gallery Category Pills
    gcat_all: 'All',
    gcat_celebrity: 'Celebrity Meetings',
    gcat_shields: 'Creative Shields',
    gcat_ministries: 'Ministries & Entities',
    gcat_festivals: 'Universities & Festivals',
    gcat_honorary: 'Titles & Museums',

    // Memory & Poetry Archive Page
    memory_hero_badge: '📜 Golden Memory • Salon of Eloquence & Immortal Poetry',
    memory_hero_title: 'Poetry & Literature <span class="pink-gradient-text">Archive</span>',
    memory_hero_subtitle: 'A comprehensive archive celebrating treasures of Arabic and Islamic heritage, classical odes, timeless wisdom, and patriotic epics memorized and delivered by child prodigy <strong>Muntaha Mohammed Jasim</strong> with distinction.',
    memory_stat_count: 'Archive: <strong>54</strong> Masterpieces',
    memory_stat_verses: 'Classical Verses: <strong>950+</strong> Vocalized Verses',
    memory_stat_cats: 'Categories: <strong>5</strong> Literary Genres',
    memory_stat_memory: 'Mastery: <strong>Exceptional Rote Memorization</strong>',
    memory_search_placeholder: 'Search by poem title, poet name, occasion, or any verse...',
    mem_tab_all: 'All Archived Works',
    mem_tab_ahlulbayt: 'Ahl al-Bayt & Elegies',
    mem_tab_jawahiri: 'Al-Jawahiri & Patriotic',
    mem_tab_wisdom: 'Wisdom & Ethics',
    mem_tab_arabic_edu: 'Arabic, Mother & Education',
    mem_tab_prose_history: 'Speeches & Classics',
    memory_status_showing: 'Displaying {count} of {total} poems',
    memory_status_cat_label: 'Current Category: ',
    memory_btn_share: 'Share',
    memory_btn_copy: 'Copy',
    memory_btn_copied: 'Copied!',
    memory_btn_read_full: 'View full poem ({count} lines) ↓',
    memory_btn_show_less: 'Show less ↑',
    memory_verse_count_label: 'Verses / Lines: <strong>{count}</strong>',
    memory_honoree_tag: 'Memorized by Hero Muntaha',
    memory_narrative_title: '📖 Background & Context:',
    memory_empty_title: 'No results found matching your search',
    memory_empty_desc: 'Try searching with another keyword or pick a different category from above.',
    memory_reset_filters: 'Reset Filters',
    memory_toast_copied: 'Poem text copied to clipboard successfully 📋',
    memory_toast_link: 'Poem link copied to clipboard successfully 🔗'
  }
};

/**
 * Titles rotating pill translations
 */
const ROTATING_TITLES = {
  ar: [
    'الطفلة المذهلة',
    'سفيرة الكلمة',
    'عضو برلمان الطفل العراقي 2024',
    'عضو فريق AURONEXIS',
    'أصغر رائدة ثقافة',
    'فارس الإنسانية والعطاء'
  ],
  en: [
    'The Amazing Child',
    'Ambassador of the Word',
    'Iraqi Children Parliament Member',
    'AURONEXIS Team Member',
    'Youngest Cultural Pioneer',
    'Knight of Humanity & Giving'
  ]
};

/**
 * 6 Impact cards translated
 */
const IMPACT_CARDS_DATA = {
  ar: [
    {
      icon: '📹',
      title: 'أصغر صانعة محتوى هادف',
      desc: 'تسجيل ونشر قصائد المناهج الدراسية للصفين الأول متوسط والسادس إعدادي لمساعدة مئات الآلاف من الطلبة في فهم الأدب العربي.'
    },
    {
      icon: '🎗️',
      title: 'دعم محاربي السرطان',
      desc: 'زيارات منتظمة لمستشفيات الأطفال المصابين بالأورام، إلقاء قصائد الأمل وتقديم الهدايا والدعم النفسي لمحاربي السرطان الصغار.'
    },
    {
      icon: '🤝',
      title: 'رعاية الأيتام والمبادرات',
      desc: 'المشاركة في الفعاليات الخيرية لدور الأيتام وتقديم ورش عمل مبسطة لتحفيز الأطفال على القراءة وحفظ الشعر والإلقاء.'
    },
    {
      icon: '🏛️',
      title: 'برلمان الطفل العراقي',
      desc: 'تمثيل حقوق الطفل الثقافية والأدبية، والمطالبة بتوفير منصات لرعاية الموهوبين في المدارس والمحافظات العراقية كافة.'
    },
    {
      icon: '🤖',
      title: 'الذكاء الاصطناعي والتراث',
      desc: 'عضوية فريق AURONEXIS لصناعة مشاريع رقمية تدمج الشعر العربي العريق مع تقنيات العصر والمستقبل الرقمي.'
    },
    {
      icon: '🌟',
      title: 'سفيرة الطفولة في الإعلام',
      desc: 'عشرات اللقاءات التلفزيونية على القنوات العراقية والعربية لنشر رسالة الإبداع وبث الأمل في جيل الغد.'
    }
  ],
  en: [
    {
      icon: '📹',
      title: 'Youngest Purposeful Creator',
      desc: 'Recording and broadcasting school curriculum poems for intermediate and preparatory students, aiding hundreds of thousands in mastering Arabic literature.'
    },
    {
      icon: '🎗️',
      title: 'Pediatric Cancer Support',
      desc: 'Regular hospital visits to children fighting cancer, reciting uplifting verses of hope and bringing joy and morale to young patients.'
    },
    {
      icon: '🤝',
      title: 'Orphan Mentorship & Giving',
      desc: 'Active participation in orphan home initiatives, conducting engaging reading sessions to inspire children to love books and poetry.'
    },
    {
      icon: '🏛️',
      title: 'Iraqi Children\'s Parliament',
      desc: 'Advocating for children\'s cultural and intellectual rights, promoting specialized platforms to nurture young prodigies nationwide.'
    },
    {
      icon: '🤖',
      title: 'AI & Heritage Innovation',
      desc: 'Active member of AURONEXIS team, developing cutting-edge digital concepts merging ancient Arabic poetry with artificial intelligence.'
    },
    {
      icon: '🌟',
      title: 'Youth Media Ambassador',
      desc: 'Dozens of television and radio appearances across Iraqi and regional networks, championing creativity and hope for the coming generation.'
    }
  ]
};

/**
 * Core Language Management
 */
function getCurrentLanguage() {
  return localStorage.getItem('muntaha_language') || 'ar';
}

function setSiteLanguage(lang) {
  if (lang !== 'ar' && lang !== 'en') lang = 'ar';
  localStorage.setItem('muntaha_language', lang);

  // Set document attributes
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update body class for typography
  if (lang === 'en') {
    document.body.classList.add('lang-en');
    document.body.classList.remove('lang-ar');
  } else {
    document.body.classList.add('lang-ar');
    document.body.classList.remove('lang-en');
  }

  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ar;

  // 1. Text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // 2. Placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 3. Title attribute elements
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.title = dict[key];
    }
  });

  // 4. Update language toggle buttons
  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = dict.lang_btn_text;

  const mobileLangLabel = document.getElementById('mobile-lang-label');
  if (mobileLangLabel) mobileLangLabel.textContent = dict.lang_btn_text;

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) langBtn.title = dict.lang_btn_title;

  // 5. Update impact cards if present
  renderImpactCards(lang);

  // 6. Dispatch custom event for page-specific dynamic logic
  window.dispatchEvent(new CustomEvent('muntahaLanguageChanged', { detail: { lang } }));
}

function toggleSiteLanguage() {
  const current = getCurrentLanguage();
  const next = current === 'ar' ? 'en' : 'ar';
  setSiteLanguage(next);
}

/**
 * Render localized impact cards
 */
function renderImpactCards(lang) {
  const container = document.getElementById('impact-cards-grid');
  if (!container) return;
  const cards = IMPACT_CARDS_DATA[lang] || IMPACT_CARDS_DATA.ar;

  container.innerHTML = cards.map(c => `
    <div class="glass-card impact-card">
      <div>
        <div class="pillar-icon-box">${c.icon}</div>
        <h3 class="impact-card-title">${c.title}</h3>
        <p class="impact-card-desc">${c.desc}</p>
      </div>
      <div class="impact-card-footer">
        <span>✔ ${lang === 'en' ? 'Community Impact' : 'أثر مجتمعي مستمر'}</span>
        <span style="color: var(--pink-light);">★</span>
      </div>
    </div>
  `).join('');
}

/**
 * Core Theme Management (Light / Dark Mode)
 * Default is Dark Mode
 */
function getSiteTheme() {
  return localStorage.getItem('muntaha_theme') || 'dark';
}

function setSiteTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') theme = 'dark';
  localStorage.setItem('muntaha_theme', theme);

  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'light') {
    document.body.classList.add('theme-light', 'light-mode');
    document.body.classList.remove('theme-dark', 'dark-mode');
  } else {
    document.body.classList.add('theme-dark', 'dark-mode');
    document.body.classList.remove('theme-light', 'light-mode');
  }

  // Update theme icon (☀️ for Dark so user clicks to get Sun/Light; 🌙 for Light so user clicks to get Dark)
  document.querySelectorAll('#theme-icon, .theme-icon').forEach(icon => {
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
  });

  // Update theme title tooltips
  const currentLang = getCurrentLanguage();
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.ar;
  document.querySelectorAll('#theme-toggle-btn, .theme-btn, #mobile-theme-toggle-btn').forEach(btn => {
    btn.title = dict.theme_btn_title || 'تبديل المظهر (نهاري / ليلي)';
  });

  window.dispatchEvent(new CustomEvent('muntahaThemeChanged', { detail: { theme } }));
}

function toggleSiteTheme() {
  const current = getSiteTheme();
  const next = current === 'light' ? 'dark' : 'light';
  setSiteTheme(next);
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme first
  const currentTheme = getSiteTheme();
  setSiteTheme(currentTheme);

  // Initialize Language
  const currentLang = getCurrentLanguage();
  setSiteLanguage(currentLang);

  // Theme Toggle Buttons
  document.querySelectorAll('#theme-toggle-btn, .theme-btn, #mobile-theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleSiteTheme();
    });
  });

  // Language Toggle Buttons
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleSiteLanguage();
    });
  }

  const mobileLangBtn = document.getElementById('mobile-lang-toggle-btn');
  if (mobileLangBtn) {
    mobileLangBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleSiteLanguage();
    });
  }
});
