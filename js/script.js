/**
 * منتهى محمد جاسم - الطفلة المذهلة وسفيرة الكلمة
 * Complete Pure Vanilla JavaScript - No Frameworks Required
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Data Store
  // ==========================================
  const personalInfo = {
    titles: [
      'الطفلة المذهلة',
      'سفيرة الكلمة',
      'عضو برلمان الطفل العراقي 2024',
      'عضو فريق AURONEXIS',
      'أصغر رائدة ثقافة',
      ' اميرة بابل',
      'فارس الإنسانية والعطاء'
    ]
  };

  const stats = [
    { target: 950, suffix: '+', elementId: 'stat-num-0' },
    { target: 50, suffix: '+', elementId: 'stat-num-1' },
    { target: 5, suffix: '', elementId: 'stat-num-2' },
    { target: 250, suffix: 'k+', elementId: 'stat-num-3' }
  ];

  const poetryCollection = [
    {
      id: 1, poet: 'أبو الطيب المتنبي', category: 'mutanabbi', title: 'على قدر أهل العزم',
      verses: [
        { shatr1: 'عَلى قَدرِ أَهلِ العَزمِ تَأتي العَزائِمُ', shatr2: 'وَتَأتي عَلى قَدرِ الكِرامِ المَكارِمُ' },
        { shatr1: 'وَتَعظُمُ في عَينِ الصَغيرِ صِغارُها', shatr2: 'وَتَصغُرُ في عَينِ العَظيمِ العَظائِمُ' }
      ]
    },
    {
      id: 2, poet: 'أبو الطيب المتنبي', category: 'mutanabbi', title: 'إذا غامرت في شرف مروم',
      verses: [
        { shatr1: 'إِذا غامَرتَ في شَرَفٍ مَرومٍ', shatr2: 'فَلا تَقنَع بِما دونَ النُجومِ' },
        { shatr1: 'فَطَعمُ المَوتِ في أَمرٍ حَقيرٍ', shatr2: 'كَطَعمِ المَوتِ في أَمرٍ عَظيمِ' }
      ]
    },
    {
      id: 3, poet: 'أبو الطيب المتنبي', category: 'mutanabbi', title: 'أنا الذي نظر الأعمى إلى أدبي',
      verses: [
        { shatr1: 'أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي', shatr2: 'وَأَسمَعَت كَلِماتي مَن بِهِ صَمَمُ' },
        { shatr1: 'الخَيلُ وَاللَيلُ وَالبَيداءُ تَعرِفُني', shatr2: 'وَالسَيفُ وَالرُمحُ وَالقِرطاسُ وَالقَلَمُ' }
      ]
    },
    {
      id: 4, poet: 'محمد مهدي الجواهري', category: 'jawahiri', title: 'يا دجلة الخير',
      verses: [
        { shatr1: 'يا دِجلَةَ الخَيرِ يا أُمَّ البَساتينِ', shatr2: 'حَيَّيتُ سَفحَكِ عَن بُعدٍ فَحَيّيني' },
        { shatr1: 'يا دِجلَةَ الخَيرِ يا نَبعاً أُفارِقُهُ', shatr2: 'عَلى الكَراهَةِ بَينَ الحينِ وَالحينِ' }
      ]
    },
    {
      id: 5, poet: 'محمد مهدي الجواهري', category: 'jawahiri', title: 'أطبق دجى',
      verses: [
        { shatr1: 'أَطبِق دُجىً فَقَد أَضَعتَ المَنهَجا', shatr2: 'وَتَلَمَّسِ الصُبحَ الجَديدَ تَبَلُّجا' },
        { shatr1: 'لا تَحسَبِ المَجدَ تَمراً أَنتَ آكِلُهُ', shatr2: 'لَن تَبلُغَ المَجدَ حَتّى تَلعَقَ الصَبِرا' }
      ]
    },
    {
      id: 6, poet: 'حافظ إبراهيم', category: 'hafez', title: 'اللغة العربية تنعى حظها',
      verses: [
        { shatr1: 'رَجَعتُ لِنَفسي فَاتَّهَمتُ حَصاتي', shatr2: 'وَنادَيتُ قَومي فَاحتَسَبتُ حَياتي' },
        { shatr1: 'أَنا البَحرُ في أَحشائِهِ الدُرُّ كامِنٌ', shatr2: 'فَهَل سَأَلوا الغَوّاصَ عَن صَدَفاتي' }
      ]
    },
    {
      id: 7, poet: 'حافظ إبراهيم', category: 'hafez', title: 'مصر تتحدث عن نفسها',
      verses: [
        { shatr1: 'وَقَف الخَلقُ يَنظُرونَ جَميعاً', shatr2: 'كَيفَ أَبني قَواعِدَ المَجدِ وَحدي' },
        { shatr1: 'وَبُناةُ الأَهرامِ في سالِفِ الدَهرِ', shatr2: 'كَفَوني الكَلامَ عِندَ التَحَدّي' }
      ]
    },
    {
      id: 8, poet: 'خطابة ونثر', category: 'prose', title: 'قصيدة نثرية - المركز الأول',
      verses: [
        { shatr1: 'بالكلمة نصنع الأمل، وبالحرف نبني الوطن', shatr2: 'فلتكن كلماتنا جسوراً تعبر بنا نحو الغد المشرق' },
        { shatr1: 'نحن أبناء العراق، أرض الحضارات', shatr2: 'ومن تربتها ينبت كل جميل وعظيم' }
      ]
    },
    {
      id: 9, poet: 'المنهج الدراسي', category: 'curriculum', title: 'قصائد الأول متوسط',
      verses: [
        { shatr1: 'القصائد المنهجية للصف الأول متوسط', shatr2: 'أكثر من 250 ألف مشاهدة على منصات التواصل' }
      ]
    },
    {
      id: 10, poet: 'المنهج الدراسي', category: 'curriculum', title: 'قصائد السادس الإعدادي',
      verses: [
        { shatr1: 'إنجاز تنزيل قصائد السادس الإعدادي', shatr2: 'في عمر 11 سنة - إنجاز استثنائي لطفلة' }
      ]
    }
  ];

  // ==========================================
  // Bilingual Datasets: Certificates & Honors
  // ==========================================
  const certificates_ar = [
    { id: 1, title: 'درع المرأة - وزارة الصحة', description: 'مهرجان تمكين المرأة بحضور وزير الصحة', category: 'ministries', year: '2023' },
    { id: 2, title: 'درع الإبداع - جامعة بابل', description: 'مهرجان لغة الضاد في جامعة بابل', category: 'festivals', year: '2023' },
    { id: 3, title: 'تكريم مبدعي العراق', description: 'يوم المرأة في الحلة الفيحاء', category: 'honorary', year: '2023' },
    { id: 4, title: 'تكريم رئيس جامعة بابل', description: 'تكريم خاص من رئيس الجامعة تقديراً لموهبتها الفذة', category: 'festivals', year: '2023' },
    { id: 5, title: 'درع وزارة الشباب والرياضة', description: 'ضمن المتفوقين والموهوبين في العراق', category: 'ministries', year: '2023' },
    { id: 6, title: 'المركز الأول - الخطابة', description: 'المرتبة الأولى في الخطابة على محافظة بابل في عمر 9 أعوام', category: 'shields', year: '2022' },
    { id: 7, title: 'المركز الأول - خطب الإمام الحسن (ع)', description: 'الحصول على المركز الأول في عمر 12 عاماً', category: 'shields', year: '2025' },
    { id: 8, title: 'شارة اتحاد كتاب وشعراء بابل', description: 'منحت أثناء إلقائها الشعر في الأمسيات الشعرية الرسمية', category: 'honorary', year: '2023' },
    { id: 9, title: 'أصغر رائدة - متحف هنّ الحياة', description: 'اختيرت كأصغر رائدة وعمل لوحة تعريفية ضمن المتحف', category: 'honorary', year: '2023' },
    { id: 10, title: 'تكريم مهرجان بابل الدولي العاشر', description: 'مهرجان بابل الدولي للثقافات والفنون - أمسيتان شعريتان', category: 'festivals', year: '2023' },
    { id: 11, title: 'المركز الأول - مسابقة القرآن الكريم', description: 'المركز الأول في سورة النبأ في الدورات الصيفية', category: 'shields', year: '2023' },
    { id: 12, title: 'لقب فارس الإنسانية والعطاء', description: 'مهرجان تكريم هنّ الحياة الدولي 2023', category: 'honorary', year: '2023' },
    { id: 13, title: 'درع الإبداع والتميز - جامعة الزهراء', description: 'مهرجان لغة الضاد في جامعة الزهراء في كربلاء المقدسة', category: 'festivals', year: '2024' },
    { id: 14, title: 'درع الإبداع والتمييز - دورة الخطابة', description: 'دورة الخطابة المقامة من وزارة الشباب', category: 'ministries', year: '2024' },
    { id: 15, title: 'شهادة اجتياز دورة الخطابة', description: 'شهادة معترف بها لاجتيازها دورة الخطابة بنجاح تام', category: 'ministries', year: '2024' },
    { id: 16, title: 'تكريم وزير الشباب والرياضة', description: 'تكريم من الدكتور أحمد المبرقع عام 2024', category: 'ministries', year: '2024' },
    { id: 17, title: 'هوية نقابة صناع المحتوى', description: 'كأصغر صانعة محتوى هادف - اختيار أحمد نبيل (داسكي العراقي)', category: 'honorary', year: '2024' },
    { id: 18, title: 'عضوية برلمان الطفل العراقي', description: 'ترشيحها لتمثيل أطفال العراق لعام 2024', category: 'honorary', year: '2024' },
    { id: 19, title: 'مشاركة مهرجان العنف ضد المرأة', description: 'مهرجان وزارة الصحة بحضور وكيل وزير الصحة', category: 'ministries', year: '2023' },
    { id: 20, title: 'مشاركة مهرجان ألق الحسين (ع)', description: 'أبرز المهرجانات الشعرية في العراق', category: 'festivals', year: '2023' },
    { id: 21, title: 'مشاركة مهرجان شاعر شباب العرب', description: 'جامعة المستقبل 2023', category: 'festivals', year: '2023' },
    { id: 22, title: 'مشاركة مهرجان الاستدامة', description: 'جامعة المستقبل - مشاركة مرتين والتقاء بالسفير الصربي', category: 'festivals', year: '2024' },
    { id: 23, title: 'مشاركة مهرجان ينابيع الشهادة المسرحي', description: 'مشاركة في الفعاليات المسرحية', category: 'festivals', year: '2024' },
    { id: 24, title: 'لقب الطفلة المذهلة', description: 'من شخصيات أدبية وثقافية معروفة', category: 'honorary', year: '2022' },
    { id: 25, title: 'لقب سفيرة الكلمة', description: 'من شخصيات أدبية وثقافية معروفة', category: 'honorary', year: '2022' },
    { id: 26, title: 'حضور مجلس السيد حسام الشلاه الثقافي', description: 'مشاركة مستمرة بإلقاء الشعر', category: 'festivals', year: '2023' },
    { id: 27, title: 'حضور مجلس الحاج مالك عبد الأخوة', description: 'مشاركة مستمرة بإلقاء الشعر', category: 'festivals', year: '2023' },
    { id: 28, title: 'مشاركة البطولة الدولية تكنوزيان', description: 'مسابقة الذكاء الاصطناعي والروبوتات في محافظة النجف', category: 'festivals', year: '2025' },
    { id: 29, title: 'عضوية فريق AURONEXIS', description: 'انضمام كأحد الأعضاء الأساسيين في الفريق التقني', category: 'honorary', year: '2025' },
    { id: 30, title: 'عضوية فريق أثر الخالدين', description: 'منظمة المجتمع المدني لخدمة الطفولة', category: 'honorary', year: '2025' },
    { id: 31, title: 'مشاركة فعاليات وزارة الاتصالات', description: 'إلقاء ضمن فعاليات تحسين خدمة الإنترنت والرقمنة', category: 'ministries', year: '2025' },
    { id: 32, title: 'المبادرة الوطنية لدعم أطفال السرطان', description: 'مشاركة بين مشاهير العراق والعرب عام 2025', category: 'ministries', year: '2025' },
    { id: 33, title: 'شهادة وتكريم رسمي رقم 33', description: 'توثيق رسمي لدرع وشهادة تقدير', category: 'shields', year: '2024' },
    { id: 34, title: 'شهادة وتكريم رسمي رقم 34', description: 'توثيق رسمي لدرع وشهادة تقدير', category: 'shields', year: '2024' },
    { id: 35, title: 'شهادة وتكريم رسمي رقم 35', description: 'توثيق رسمي لدرع وشهادة تقدير', category: 'shields', year: '2024' },
    { id: 36, title: 'شهادة وتكريم رسمي رقم 36', description: 'توثيق رسمي لدرع وشهادة تقدير', category: 'shields', year: '2024' },
    { id: 37, title: 'شهادة وتكريم رسمي رقم 37', description: 'توثيق رسمي لدرع وشهادة تقدير', category: 'shields', year: '2024' },
    { id: 38, title: 'شهادة وتكريم رسمي رقم 38', description: 'توثيق رسمي لدرع وشهادة تقدير', category: 'shields', year: '2024' },
    { id: 39, title: 'شهادة وتكريم رسمي رقم 39', description: 'توثيق رسمي لدرع وشهادة تقدير', category: 'shields', year: '2024' },
    { id: 40, title: 'ثلاث قصائد نثر فائزة', description: 'الفائزة بالمرتبة الأولى في الخطابة', category: 'shields', year: '2022' },
    { id: 41, title: 'لوحة تعريفية في متحف هنّ الحياة', description: 'كأصغر رائدة في عمر العشر سنوات', category: 'honorary', year: '2023' },
    { id: 42, title: 'تكريم هوية صانعة المحتوى الهادف', description: 'أصغر صانعة محتوى في العراق', category: 'honorary', year: '2024' }
  ];

  const certificates_en = [
    { id: 1, title: 'Women’s Shield - Ministry of Health', description: 'Women Empowerment Festival attended by the Minister of Health', category: 'ministries', year: '2023' },
    { id: 2, title: 'Shield of Creativity - Babylon University', description: 'Annual Arabic Language (Dhad) Festival at Babylon University', category: 'festivals', year: '2023' },
    { id: 3, title: 'Honoring Iraqi Creators', description: 'International Women’s Day in Al-Hillah', category: 'honorary', year: '2023' },
    { id: 4, title: 'President of Babylon University Award', description: 'Personal recognition from the University President for poetic genius', category: 'festivals', year: '2023' },
    { id: 5, title: 'Ministry of Youth & Sports Shield', description: 'Honoring top young prodigies and achievers across Iraq', category: 'ministries', year: '2023' },
    { id: 6, title: '1st Place in Public Speaking', description: 'First place in classical oratory in Babylon province at age 9', category: 'shields', year: '2022' },
    { id: 7, title: '1st Place - Imam Hassan (AS) Sermons', description: 'Achieved first place in rhetoric and eloquence at age 12', category: 'shields', year: '2025' },
    { id: 8, title: 'Babylon Writers & Poets Union Badge', description: 'Awarded gold badge during official classical poetry evenings', category: 'honorary', year: '2023' },
    { id: 9, title: 'Youngest Pioneer - Hunna Al-Hayat Museum', description: 'Permanent memorial plaque inside the Museum of Iraqi Pioneers', category: 'honorary', year: '2023' },
    { id: 10, title: '10th Babylon International Festival', description: 'Babylon International Festival of Cultures - Recited in two major evenings', category: 'festivals', year: '2023' },
    { id: 11, title: '1st Place - Holy Quran Competition', description: 'First place in Surah An-Naba memorization in summer courses', category: 'shields', year: '2023' },
    { id: 12, title: 'Knight of Humanity & Giving Title', description: 'Hunna Al-Hayat International Festival for voluntary childhood work', category: 'honorary', year: '2023' },
    { id: 13, title: 'Creativity Shield - Al-Zahraa University', description: 'Arabic Language Festival at Al-Zahraa University in Karbala', category: 'festivals', year: '2024' },
    { id: 14, title: 'Excellence Shield - Oratory Course', description: 'Specialized public speaking program hosted by Ministry of Youth', category: 'ministries', year: '2024' },
    { id: 15, title: 'Oratory Graduation Certificate', description: 'Accredited certificate for completing advanced rhetoric & delivery', category: 'ministries', year: '2024' },
    { id: 16, title: 'Minister of Youth & Sports Honor', description: 'Personal commendation from Minister Dr. Ahmed Al-Mubarkaa', category: 'ministries', year: '2024' },
    { id: 17, title: 'Content Creators Syndicate Card', description: 'Accredited as youngest purposeful educational content creator in Iraq', category: 'honorary', year: '2024' },
    { id: 18, title: 'Iraqi Children Parliament Membership', description: 'Elected to represent the children of Babylon in the Parliament', category: 'honorary', year: '2024' },
    { id: 19, title: 'Anti-Violence Against Women Festival', description: 'Ministry of Health & WHO event attended by the Deputy Minister', category: 'ministries', year: '2023' },
    { id: 20, title: 'Alaq Al-Hussein Festival Shield', description: 'Prominent classical Arabic poetry forum in Iraq', category: 'festivals', year: '2023' },
    { id: 21, title: 'Arab Youth Poet Festival', description: 'Al-Mustaqbal University competition with poets across all provinces', category: 'festivals', year: '2023' },
    { id: 22, title: 'Sustainability Festival Medal', description: 'Participated twice and met international diplomats & Serbian Ambassador', category: 'festivals', year: '2024' },
    { id: 23, title: 'Yanabee Al-Shahada Theatrical Shield', description: 'Opening theatrical & lyrical recitation in the annual festival', category: 'festivals', year: '2024' },
    { id: 24, title: 'The Amazing Child Official Title', description: 'Bestowed by celebrated Iraqi literary critics and poets', category: 'honorary', year: '2022' },
    { id: 25, title: 'Ambassador of the Word Title', description: 'Honored by cultural institutions for spreading Arabic eloquence', category: 'honorary', year: '2022' },
    { id: 26, title: 'Al-Shallah Cultural Council Shield', description: 'Commemorative medal from the weekly intellectual council in Babylon', category: 'festivals', year: '2023' },
    { id: 27, title: 'Hajj Malik Abdul-Ikhwa Assembly Honor', description: 'Reciting Al-Mutanabbi and Al-Jawahiri masterpieces before senior scholars', category: 'festivals', year: '2023' },
    { id: 28, title: 'TecnoZian International Championship', description: 'Robotics and Artificial Intelligence Championship in Najaf', category: 'festivals', year: '2025' },
    { id: 29, title: 'AURONEXIS AI Team Membership', description: 'Core team member merging classical heritage with generative AI', category: 'honorary', year: '2025' },
    { id: 30, title: 'Athar Al-Khalideen Organization Medal', description: 'Community giving medal for supporting orphan homes and initiatives', category: 'honorary', year: '2025' },
    { id: 31, title: 'Ministry of Communications Shield', description: 'Keynote poetic recitation at national digital infrastructure launch', category: 'ministries', year: '2025' },
    { id: 32, title: 'Pediatric Cancer Support Initiative', description: 'Honored among Iraqi & Arab celebrities for visiting young cancer fighters', category: 'ministries', year: '2025' },
    { id: 33, title: 'Official Honor & Shield #33', description: 'Official documented shield and certificate of appreciation', category: 'shields', year: '2024' },
    { id: 34, title: 'Official Honor & Shield #34', description: 'Official documented shield and certificate of appreciation', category: 'shields', year: '2024' },
    { id: 35, title: 'Official Honor & Shield #35', description: 'Official documented shield and certificate of appreciation', category: 'shields', year: '2024' },
    { id: 36, title: 'Official Honor & Shield #36', description: 'Official documented shield and certificate of appreciation', category: 'shields', year: '2024' },
    { id: 37, title: 'Official Honor & Shield #37', description: 'Official documented shield and certificate of appreciation', category: 'shields', year: '2024' },
    { id: 38, title: 'Official Honor & Shield #38', description: 'Official documented shield and certificate of appreciation', category: 'shields', year: '2024' },
    { id: 39, title: 'Official Honor & Shield #39', description: 'Official documented shield and certificate of appreciation', category: 'shields', year: '2024' },
    { id: 40, title: 'Rhetorical Prose & Oratory Award', description: 'First prize for three oratorical prose pieces delivered with poise', category: 'shields', year: '2022' },
    { id: 41, title: 'Honor Plaque at Hunna Al-Hayat Museum', description: 'Inducted into national hall of fame as youngest pioneer at age 10', category: 'honorary', year: '2023' },
    { id: 42, title: 'Purposeful Content Creators Shield', description: 'Recognized as youngest educational cultural creator in Iraq', category: 'honorary', year: '2024' }
  ];

  // ==========================================
  // Bilingual Datasets: Timeline Milestones
  // ==========================================
  const timeline_ar = [
    {
      year: '2022',
      title: 'بداية المسيرة - في سن 9 أعوام',
      events: [
        'حصلت على المرتبة الأولى في الخطابة على محافظة بابل في عمر 9 أعوام',
        'فوز ثلاث قصائد نثرية بالمركز الأول في المحافل المدرسية والأدبية',
        'منحت ألقاب "الطفلة المذهلة" و"سفيرة الكلمة" من شخصيات أدبية بارزة'
      ]
    },
    {
      year: '2023',
      title: 'عام التألق والانطلاقة الوطنية الكبرى',
      events: [
        'مشاركة في مهرجان ألق الحسين (ع) - أحد أبرز المهرجانات الشعرية',
        'مهرجان تمكين المرأة في وزارة الصحة بحضور معالي وزير الصحة ونيل درع المرأة',
        'مهرجان لغة الضاد في جامعة بابل وحصد درع الإبداع',
        'مهرجان بابل الدولي للثقافات والفنون العاشر وإحياء أمسيتين شعريتين',
        'اختيرت كأصغر رائدة في متحف "هنّ الحياة" ووضع لوحة تعريفية بها',
        'المركز الأول في مسابقة القرآن الكريم - سورة النبأ',
        'لقب فارس الإنسانية والعطاء وعضوية جمعية رعاية أطفال السكري'
      ]
    },
    {
      year: '2024',
      title: 'عام البرلمان والتكريم الوزاري',
      events: [
        'ترشيحها رسمياً لعضوية برلمان الطفل العراقي لتمثيل أطفال العراق',
        'تكريم رفيع من وزير الشباب والرياضة الدكتور أحمد المبرقع',
        'درع الإبداع والتميز من جامعة الزهراء (ع) في كربلاء المقدسة',
        'اجتياز دورة الخطابة الوزارية ونيل درع التميز',
        'منح هوية نقابة صناع المحتوى كأصغر صانعة محتوى هادف',
        'لقاء الشاعر د. علي جعفر العلاق ورئيس المجمع العلمي وثناؤهما على فصاحتها'
      ]
    },
    {
      year: '2025',
      title: 'عام التكنولوجيا والأثر المجتمعي والذكاء الاصطناعي',
      events: [
        'المركز الأول في خطب الإمام الحسن (ع) في عمر 12 عاماً',
        'المشاركة في البطولة الدولية تكنوزيان للروبوتات والذكاء الاصطناعي في النجف',
        'انضمام كعضو أساسي في فريق AURONEXIS التقني المتطور',
        'مشاركة مشاهير العرب في المبادرة الوطنية لدعم أطفال السرطان',
        'تخطي حاجز ربع مليون مشاهدة للقصائد المنهجية الدراسية'
      ]
    }
  ];

  const timeline_en = [
    {
      year: '2022',
      title: 'Journey Begins - At Age 9',
      events: [
        'Achieved 1st place in classical public speaking across Babylon province at age 9',
        'Won 1st place for three prose poems in academic and literary competitions',
        'Awarded honorary titles "The Amazing Child" and "Ambassador of the Word" by renowned literary figures'
      ]
    },
    {
      year: '2023',
      title: 'Year of Stardom & National Breakthrough',
      events: [
        'Recited at Alaq Al-Hussein (AS) Festival - one of Iraq’s most prestigious classical poetry forums',
        'Keynote recitation at Ministry of Health Women’s Festival attended by the Minister and received Women’s Shield',
        'Bestowed the Shield of Creativity at Babylon University’s Arabic Language (Dhad) Festival',
        'Recited in two featured evenings at the 10th Babylon International Festival of Cultures & Arts',
        'Inducted as youngest pioneer in Hunna Al-Hayat Museum with a permanent biographical plaque',
        '1st place in Quranic Recitation & Memorization - Surah An-Naba',
        'Conferred "Knight of Humanity & Giving" title and joined Diabetic Children Care Association'
      ]
    },
    {
      year: '2024',
      title: 'Year of Parliament & Ministerial Recognition',
      events: [
        'Officially elected member of the Iraqi Children\'s Parliament representing Iraqi youth',
        'High-level personal honor from Minister of Youth & Sports Dr. Ahmed Al-Mubarkaa',
        'Awarded Shield of Creativity & Excellence from Al-Zahraa University in Karbala',
        'Graduated from ministerial oratory training program and received Excellence Shield',
        'Issued Content Creators Syndicate membership as Iraq\'s youngest purposeful creator',
        'Praised by celebrated poet Dr. Ali Jaafar Al-Allaq and Scientific Academy President Dr. Mohammed Al-Yassin'
      ]
    },
    {
      year: '2025',
      title: 'Year of Technology, AI & Community Impact',
      events: [
        '1st place in Imam Hassan (AS) Eloquence & Rhetoric Competition at age 12',
        'Competed in TecnoZian International Robotics & AI Championship in Najaf',
        'Joined AURONEXIS technology team as core member pioneering AI and Arabic poetry integration',
        'Joined Arab and Iraqi celebrities in the National Pediatric Cancer Support Initiative',
        'Surpassed 250,000 views across educational platforms for school curriculum poem lectures'
      ]
    }
  ];

  const quizQuestions = [
    {
      poet: 'أبو الطيب المتنبي',
      verseStart: 'عَلى قَدرِ أَهلِ العَزمِ تَأتي العَزائِمُ',
      correct: 'وَتَأتي عَلى قَدرِ الكِرامِ المَكارِمُ',
      options: [
        'وَتَأتي عَلى قَدرِ الكِرامِ المَكارِمُ',
        'وَتَصغُرُ في عَينِ العَظيمِ العَظائِمُ',
        'فَلا تَحسَبَنَّ المَجدَ زِقّاً وَقَينَةً'
      ]
    },
    {
      poet: 'أبو الطيب المتنبي',
      verseStart: 'الخَيلُ وَاللَيلُ وَالبَيداءُ تَعرِفُني',
      correct: 'وَالسَيفُ وَالرُمحُ وَالقِرطاسُ وَالقَلَمُ',
      options: [
        'وَالصَّحبُ وَالأَهْلُ وَالآفاقُ وَالحَرَمُ',
        'وَالسَيفُ وَالرُمحُ وَالقِرطاسُ وَالقَلَمُ',
        'وَكُلُّ مَن سارَ في البَطحاءِ يَغتَنِمُ'
      ]
    },
    {
      poet: 'محمد مهدي الجواهري',
      verseStart: 'يا دِجلَةَ الخَيرِ يا أُمَّ البَساتينِ',
      correct: 'حَيَّيتُ سَفحَكِ عَن بُعدٍ فَحَيّيني',
      options: [
        'سَقَتْكِ كَفُّ الرِّضا ما كُنتِ تَسْقيني',
        'حَيَّيتُ سَفحَكِ عَن بُعدٍ فَحَيّيني',
        'وَطُفتُ حَولَكِ شَوقاً كالمَجانينِ'
      ]
    },
    {
      poet: 'شاعر النيل حافظ إبراهيم',
      verseStart: 'أَنا البَحرُ في أَحشائِهِ الدُرُّ كامِنٌ',
      correct: 'فَهَل سَأَلوا الغَوّاصَ عَن صَدَفاتي',
      options: [
        'فَهَل سَأَلوا الغَوّاصَ عَن صَدَفاتي',
        'وَهَل رَأَوا النُّورَ في أعماقِ ظُلُماتي',
        'وَقَد حَوَت كُلَّ لَفظٍ في العِباراتِ'
      ]
    },
    {
      poet: 'أبو الطيب المتنبي',
      verseStart: 'إِذا غامَرتَ في شَرَفٍ مَرومٍ',
      correct: 'فَلا تَقنَع بِما دونَ النُجومِ',
      options: [
        'فَكُن صَبّاراً في حَربِ الهُمومِ',
        'فَلا تَقنَع بِما دونَ النُجومِ',
        'فَإِنَّ الحُرَّ يَصبِرُ لِلغَريمِ'
      ]
    }
  ];

  // ==========================================
  // 2. Global Toast Notification
  // ==========================================
  const toastBox = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(msg) {
    if (!toastBox || !toastMessage) return;
    toastMessage.textContent = msg;
    toastBox.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastBox.classList.remove('show');
    }, 3200);
  }

  // ==========================================
  // 3. Navbar & Sticky Floating Social Dock
  // ==========================================
  const navbar = document.getElementById('main-navbar');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
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

    // Close mobile drawer when clicking any link
    document.querySelectorAll('.mobile-drawer .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (navbar && !navbar.contains(e.target)) {
        mobileDrawer.classList.remove('open');
      }
    });
  }

  // ==========================================
  // 4. Rotating Title Pill in Hero
  // ==========================================
  const rotatingTitleEl = document.getElementById('rotating-hero-title');
  if (rotatingTitleEl) {
    let titleIndex = 0;
    setInterval(() => {
      titleIndex = (titleIndex + 1) % personalInfo.titles.length;
      rotatingTitleEl.style.opacity = '0';
      rotatingTitleEl.style.transform = 'scale(0.9)';
      setTimeout(() => {
        rotatingTitleEl.textContent = personalInfo.titles[titleIndex];
        rotatingTitleEl.style.opacity = '1';
        rotatingTitleEl.style.transform = 'scale(1)';
      }, 250);
    }, 2800);
  }

  // ==========================================
  // 5. Audio Reciter Removed Per User Request
  // ==========================================

  // ==========================================
  // 6. Animated Stats Counter (Scroll Observer)
  // ==========================================
  let statsCounted = false;
  const statsSection = document.getElementById('stats');

  function animateCounters() {
    stats.forEach(stat => {
      const el = document.getElementById(stat.elementId);
      if (!el) return;
      const target = stat.target;
      const duration = 2000;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress * (2 - progress); // easeOutQuad
        const current = Math.round(target * ease);
        el.textContent = current;
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(update);
    });
  }

  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsCounted) {
        statsCounted = true;
        animateCounters();
      }
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  } else {
    animateCounters();
  }

  // ==========================================
  // 7. Poetry Diwan (Rendering & Interactivity)
  // ==========================================
  const poemsGrid = document.getElementById('poems-grid');
  const poetrySearchInput = document.getElementById('poetry-search-input');
  const poetryCategoryPills = document.querySelectorAll('.category-pill[data-poetry-cat]');
  const fontDecBtn = document.getElementById('font-dec-btn');
  const fontIncBtn = document.getElementById('font-inc-btn');
  const fontSizeDisplay = document.getElementById('font-size-val');

  let currentPoetryCat = 'mutanabbi';
  let poetrySearchQuery = '';
  let currentPoemFontSize = 22;
  let currentlyPlayingPoemId = null;

  function renderPoems() {
    if (!poemsGrid) return;
    const filtered = poetryCollection.filter(poem => {
      const matchCat = currentPoetryCat === 'all' || poem.category === currentPoetryCat;
      const q = poetrySearchQuery.trim();
      const matchSearch = q === '' ||
        poem.title.includes(q) ||
        poem.poet.includes(q) ||
        poem.verses.some(v => v.shatr1.includes(q) || v.shatr2.includes(q));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      poemsGrid.innerHTML = `
        <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <p style="color: var(--text-gray-400);">لم يتم العثور على قصائد مطابقة للبحث.</p>
        </div>
      `;
      return;
    }

    poemsGrid.innerHTML = filtered.map(poem => {
      const isPlaying = currentlyPlayingPoemId === poem.id;
      const versesHtml = poem.verses.map(v => `
        <div class="verse-item">
          <div class="hemistich-line" style="font-size: ${currentPoemFontSize}px;">
            <span class="shatr">${v.shatr1}</span>
            <div class="hemistich-divider"></div>
            <span class="shatr">${v.shatr2}</span>
          </div>
        </div>
      `).join('');

      return `
        <div class="glass-card poem-card">
          <div>
            <div class="poem-card-header">
              <div>
                <span class="poet-badge">${poem.poet}</span>
                <h3 class="poem-title">${poem.title}</h3>
              </div>
              <div class="poem-actions">
                <button class="poem-action-btn" data-action="copy-poem" data-id="${poem.id}" title="نسخ الأبيات">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
                <button class="poem-action-btn" data-action="share-poem" data-id="${poem.id}" title="مشاركة">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div class="verses-list">
              ${versesHtml}
            </div>
          </div>

          <div style="padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-gray-400);">
            <span style="color: var(--pink-light);">★ محفوظة غيباً بتمكن تام</span>
            <span>${poem.verses.length} أبيات مختارة</span>
          </div>
        </div>
      `;
    }).join('');

    // Attach listeners for play/copy/share
    attachPoemActionListeners();
  }

  function attachPoemActionListeners() {
    document.querySelectorAll('[data-action="copy-poem"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const poem = poetryCollection.find(p => p.id === id);
        if (poem) {
          const formatted = `${poem.title} - ${poem.poet}\n` +
            poem.verses.map(v => `${v.shatr1} ... ${v.shatr2}`).join('\n') +
            `\n(من محفوظات الطفلة المذهلة منتهى محمد جاسم)`;
          navigator.clipboard.writeText(formatted);
          showToast('تم نسخ الأبيات بنجاح إلى الحافظة!');
        }
      });
    });

    document.querySelectorAll('[data-action="share-poem"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const poem = poetryCollection.find(p => p.id === id);
        if (poem) {
          if (navigator.share) {
            navigator.share({
              title: `${poem.title} | ديوان منتهى محمد جاسم`,
              text: `${poem.title} - ${poem.poet}`,
              url: window.location.href
            }).catch(() => { });
          } else {
            const formatted = `${poem.title} - ${poem.poet}\n` + poem.verses.map(v => `${v.shatr1} ... ${v.shatr2}`).join('\n');
            navigator.clipboard.writeText(formatted);
            showToast('تم نسخ رابط وتفاصيل القصيدة للمشاركة');
          }
        }
      });
    });
  }

  // Category filter
  poetryCategoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      poetryCategoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentPoetryCat = pill.getAttribute('data-poetry-cat');
      renderPoems();
    });
  });

  // Search input
  if (poetrySearchInput) {
    poetrySearchInput.addEventListener('input', (e) => {
      poetrySearchQuery = e.target.value;
      renderPoems();
    });
  }

  // Font size scaler
  if (fontDecBtn && fontIncBtn && fontSizeDisplay) {
    fontDecBtn.addEventListener('click', () => {
      currentPoemFontSize = Math.max(16, currentPoemFontSize - 2);
      fontSizeDisplay.textContent = `${currentPoemFontSize}px`;
      renderPoems();
    });
    fontIncBtn.addEventListener('click', () => {
      currentPoemFontSize = Math.min(32, currentPoemFontSize + 2);
      fontSizeDisplay.textContent = `${currentPoemFontSize}px`;
      renderPoems();
    });
  }

  renderPoems();

  // ==========================================
  // 8. Certificates & Awards
  // ==========================================
  const awardsGrid = document.getElementById('awards-grid');
  const awardsSearchInput = document.getElementById('awards-search-input');
  const awardsCatBtns = document.querySelectorAll('[data-awards-cat]');
  const awardsYearBtns = document.querySelectorAll('[data-awards-year]');
  const loadMoreAwardsBtn = document.getElementById('load-more-awards-btn');

  let currentAwardCat = 'all';
  let currentAwardYear = 'all';
  let awardsSearchQuery = '';
  let awardsDisplayCount = 12;

  function getActiveCertificates() {
    const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'ar';
    return lang === 'en' ? certificates_en : certificates_ar;
  }

  function getActiveTimeline() {
    const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'ar';
    return lang === 'en' ? timeline_en : timeline_ar;
  }

  function renderAwards() {
    if (!awardsGrid) return;
    const isEn = (typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'en');
    const activeCertificates = getActiveCertificates();

    const filtered = activeCertificates.filter(cert => {
      const matchCat = currentAwardCat === 'all' || cert.category === currentAwardCat;
      const matchYear = currentAwardYear === 'all' || cert.year === currentAwardYear;
      const q = awardsSearchQuery.trim().toLowerCase();
      const matchSearch = q === '' ||
        cert.title.toLowerCase().includes(q) ||
        cert.description.toLowerCase().includes(q) ||
        cert.year.includes(q);
      return matchCat && matchYear && matchSearch;
    });

    const visible = filtered.slice(0, awardsDisplayCount);

    if (visible.length === 0) {
      awardsGrid.innerHTML = `
        <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <p style="color: var(--text-gray-400);">${isEn ? 'No honors matching your search criteria.' : 'لم يتم العثور على أوسمة مطابقة لبحثك.'}</p>
        </div>
      `;
      if (loadMoreAwardsBtn) loadMoreAwardsBtn.style.display = 'none';
      return;
    }

    awardsGrid.innerHTML = visible.map(cert => `
      <div class="glass-card certificate-card" data-cert-id="${cert.id}" tabindex="0" role="button">
        <div>
          <div class="cert-card-header">
            <div class="cert-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <span class="cert-year-badge">${isEn ? 'Year ' : 'عام '}${cert.year}${isEn ? '' : 'م'}</span>
          </div>
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-desc">${cert.description}</p>
        </div>
        <div class="cert-footer-link" style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06);">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--pink-light);">${isEn ? 'Official Details →' : 'عرض التفاصيل الرسمية ←'}</span>
          <button class="cert-share-btn" data-cert-id="${cert.id}" title="${isEn ? 'Share Honor' : 'مشاركة التكريم'}">
            <span>📤</span>
            <span>${isEn ? 'Share' : 'مشاركة'}</span>
          </button>
        </div>
      </div>
    `).join('');

    // Load more button visibility
    if (loadMoreAwardsBtn) {
      if (filtered.length > awardsDisplayCount) {
        loadMoreAwardsBtn.style.display = 'inline-flex';
        loadMoreAwardsBtn.textContent = isEn
          ? `Show More Honors (${filtered.length - awardsDisplayCount} remaining)`
          : `عرض المزيد من التكريمات (${filtered.length - awardsDisplayCount} متبقية)`;
      } else {
        loadMoreAwardsBtn.style.display = 'none';
      }
    }

    // Modal click handler
    document.querySelectorAll('.certificate-card').forEach(card => {
      card.addEventListener('click', (e) => {
        // If clicking share button directly, ignore modal trigger
        if (e.target.closest('.cert-share-btn')) return;
        const id = parseInt(card.getAttribute('data-cert-id'), 10);
        const cert = activeCertificates.find(c => c.id === id);
        if (cert) openCertificateModal(cert);
      });
    });

    // Share button click handler on cards
    document.querySelectorAll('.cert-share-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-cert-id'), 10);
        const cert = activeCertificates.find(c => c.id === id);
        if (cert) shareCertificate(cert);
      });
    });
  }

  function shareCertificate(cert) {
    if (!cert) return;
    const isEn = (typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'en');
    const shareTitle = `${cert.title} | ${isEn ? 'Muntaha Mohammed Jasim (The Amazing Child)' : 'منتهى محمد جاسم (الطفلة المذهلة)'}`;
    const shareText = `${isEn ? 'Official Honor' : 'تكريم رسمي'}: ${cert.title} (${cert.year})\n${cert.description}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(`${shareTitle}\n${shareText}\n${shareUrl}`);
      showToast(isEn ? 'Honor details copied to clipboard!' : 'تم نسخ تفاصيل التكريم بنجاح للمشاركة!');
    }
  }

  // Award Category Tabs
  awardsCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      awardsCatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAwardCat = btn.getAttribute('data-awards-cat');
      awardsDisplayCount = 12;
      renderAwards();
    });
  });

  // Award Year Tabs
  awardsYearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      awardsYearBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAwardYear = btn.getAttribute('data-awards-year');
      awardsDisplayCount = 12;
      renderAwards();
    });
  });

  // Awards Search
  if (awardsSearchInput) {
    awardsSearchInput.addEventListener('input', (e) => {
      awardsSearchQuery = e.target.value;
      awardsDisplayCount = 12;
      renderAwards();
    });
  }

  // Load More
  if (loadMoreAwardsBtn) {
    loadMoreAwardsBtn.addEventListener('click', () => {
      awardsDisplayCount += 12;
      renderAwards();
    });
  }

  renderAwards();

  // Certificate Modal Popup
  const certModal = document.getElementById('cert-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCertTitle = document.getElementById('modal-cert-title');
  const modalCertYear = document.getElementById('modal-cert-year');
  const modalCertDesc = document.getElementById('modal-cert-desc');
  const modalShareBtn = document.getElementById('modal-share-btn');
  let currentModalCert = null;

  function openCertificateModal(cert) {
    currentModalCert = cert;
    const isEn = (typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'en');
    if (modalCertTitle) modalCertTitle.textContent = cert.title;
    if (modalCertYear) modalCertYear.textContent = `${isEn ? 'Year of Honor: ' : 'عام التكريم: '}${cert.year}${isEn ? '' : 'م'}`;
    if (modalCertDesc) modalCertDesc.textContent = cert.description;
    certModal?.classList.add('active');
  }

  function closeCertificateModal() {
    certModal?.classList.remove('active');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCertificateModal);
  certModal?.addEventListener('click', (e) => {
    if (e.target === certModal) closeCertificateModal();
  });

  if (modalShareBtn) {
    modalShareBtn.addEventListener('click', () => {
      if (currentModalCert) shareCertificate(currentModalCert);
    });
  }

  // ==========================================
  // 9. Timeline Year Filter
  // ==========================================
  const timelineContainer = document.getElementById('timeline-track-container');
  const timelineYearBtns = document.querySelectorAll('[data-timeline-year]');

  function renderTimeline(selectedYear = 'all') {
    if (!timelineContainer) return;
    const isEn = (typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'en');
    const activeTimeline = getActiveTimeline();

    const filtered = selectedYear === 'all'
      ? activeTimeline
      : activeTimeline.filter(t => t.year === selectedYear);

    timelineContainer.innerHTML = filtered.map(item => `
      <div class="timeline-block">
        <div class="timeline-marker">★</div>
        <div class="glass-card timeline-content-card">
          <div class="timeline-header">
            <div>
              <span class="cert-year-badge">${isEn ? 'Year ' : 'عام '}${item.year}${isEn ? '' : 'م'}</span>
              <h3 style="font-size: 1.4rem; font-weight: 800; margin-top: 0.5rem; color: #fff;">${item.title}</h3>
            </div>
            <span style="font-size: 0.8rem; color: var(--pink-light); font-weight: 700;">${item.events.length} ${isEn ? 'Milestones & Honors' : 'إنجازات وتكريمات'}</span>
          </div>
          <div class="timeline-events-grid">
            ${item.events.map(ev => `
              <div class="timeline-event-item">
                <span style="color: var(--emerald-accent); font-weight: bold; flex-shrink: 0;">✔</span>
                <span>${ev}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  timelineYearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timelineYearBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const year = btn.getAttribute('data-timeline-year');
      renderTimeline(year);
    });
  });

  renderTimeline('all');

  // Re-render dynamic sections on Language Change
  window.addEventListener('muntahaLanguageChanged', () => {
    renderAwards();
    renderTimeline();
  });

  // ==========================================
  // 10. Interactive Poetry Quiz Game
  // ==========================================
  let currentQuizIndex = 0;
  let quizScore = 0;
  let quizAnswered = false;

  const quizQuestionBox = document.getElementById('quiz-question-box');
  const quizResultBox = document.getElementById('quiz-result-box');
  const quizQIndex = document.getElementById('quiz-q-index');
  const quizScoreDisplay = document.getElementById('quiz-score-display');
  const quizPoetName = document.getElementById('quiz-poet-name');
  const quizVerseStart = document.getElementById('quiz-verse-start');
  const quizOptionsContainer = document.getElementById('quiz-options-container');
  const quizNextBtn = document.getElementById('quiz-next-btn');
  const quizFinalScore = document.getElementById('quiz-final-score');
  const quizRestartBtn = document.getElementById('quiz-restart-btn');
  const quizShareBtn = document.getElementById('quiz-share-btn');

  function loadQuizQuestion() {
    if (!quizQuestionBox || currentQuizIndex >= quizQuestions.length) {
      showQuizResults();
      return;
    }
    quizAnswered = false;
    const q = quizQuestions[currentQuizIndex];

    if (quizQIndex) quizQIndex.textContent = `السؤال ${currentQuizIndex + 1} من ${quizQuestions.length}`;
    if (quizScoreDisplay) quizScoreDisplay.textContent = `النقاط: ${quizScore}`;
    if (quizPoetName) quizPoetName.textContent = `قائل البيت: ${q.poet}`;
    if (quizVerseStart) quizVerseStart.textContent = `« ${q.verseStart} ... »`;
    if (quizNextBtn) quizNextBtn.style.display = 'none';

    if (quizOptionsContainer) {
      quizOptionsContainer.innerHTML = q.options.map((opt, idx) => `
        <button class="quiz-option-btn" data-opt-idx="${idx}">
          <span>${opt}</span>
          <span class="opt-status-icon"></span>
        </button>
      `).join('');

      document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (quizAnswered) return;
          quizAnswered = true;
          const idx = parseInt(btn.getAttribute('data-opt-idx'));
          const selectedText = q.options[idx];

          if (selectedText === q.correct) {
            btn.classList.add('correct');
            btn.querySelector('.opt-status-icon').textContent = '✔';
            quizScore++;
            if (quizScoreDisplay) quizScoreDisplay.textContent = `النقاط: ${quizScore}`;
          } else {
            btn.classList.add('wrong');
            btn.querySelector('.opt-status-icon').textContent = '✖';
            // Highlight the correct one
            document.querySelectorAll('.quiz-option-btn').forEach(b => {
              const bIdx = parseInt(b.getAttribute('data-opt-idx'));
              if (q.options[bIdx] === q.correct) {
                b.classList.add('correct');
                b.querySelector('.opt-status-icon').textContent = '✔';
              }
            });
          }

          if (quizNextBtn) {
            quizNextBtn.style.display = 'inline-flex';
            quizNextBtn.textContent = currentQuizIndex + 1 < quizQuestions.length ? 'السؤال التالي ←' : 'عرض النتيجة النهائية';
          }
        });
      });
    }
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener('click', () => {
      currentQuizIndex++;
      if (currentQuizIndex < quizQuestions.length) {
        loadQuizQuestion();
      } else {
        showQuizResults();
      }
    });
  }

  function showQuizResults() {
    if (quizQuestionBox) quizQuestionBox.style.display = 'none';
    if (quizResultBox) quizResultBox.style.display = 'block';
    if (quizFinalScore) quizFinalScore.textContent = `${quizScore} من أصل ${quizQuestions.length}`;
  }

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener('click', () => {
      currentQuizIndex = 0;
      quizScore = 0;
      quizAnswered = false;
      if (quizQuestionBox) quizQuestionBox.style.display = 'block';
      if (quizResultBox) quizResultBox.style.display = 'none';
      loadQuizQuestion();
    });
  }

  if (quizShareBtn) {
    quizShareBtn.addEventListener('click', () => {
      const text = `حصلت على ${quizScore} من ${quizQuestions.length} في تحدي حفظ الشعر العربي مع الطفلة المذهلة منتهى محمد جاسم! جرب الآن.`;
      navigator.clipboard.writeText(text);
      showToast('تم نسخ نتيجتك للمشاركة!');
    });
  }

  loadQuizQuestion();

  // ==========================================
  // 11. Scroll to Top
  // ==========================================
  const scrollToTopBtn = document.getElementById('scroll-top-btn');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
