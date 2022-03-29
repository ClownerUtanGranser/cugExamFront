export interface  dosAndDonts {
    headline:string, 
    headlineText:string, 
    doHeadline?:string
    dos?:string[], 
    dosText?:string[],
    dontHeadline?:string,
    donts?:string[],
    dontsText?:string[]
}

export class DosAndDontsObj {

  dosAndDontsWhenWorkingWithChildrenEng:dosAndDonts = {
        headline: "WORKING WITH CHILDREN",
        headlineText:"Dos and don'ts when working with children",
        doHeadline:'DOs',
        dos:[
          "Prepare properly for your assignment. Read the Risk Analysis carefully before your assignment and make sure you understand it ",
          "Read the Action Plan in case of suspected crime carefully",
          "Encourage children to raise their questions and concerns",
          "Implement the ”two adults rule” during all activities so that no adult is alone with a child",
          "Ensure that physical contact with children is always appropriate",
          "Use positive and non-violent methods to deal with children's behaviour",
          "Immediately raise concerns about inappropriate behaviour"
        ],
        dontHeadline:'DON’Ts',
        donts:[
          "Spend long periods alone with a child",
          "Be under the influence of alcohol or drugs during your assignment with CWB",
          "Behave in a way that is offensive to children",
          "Use offensive or hateful language against children or around children",
          "Favour a child by giving gifts or promises",
          "Drive a child alone in a car",
          "Promise children something you cannot fulfill (for example to come back) "
        ]
    }

    dosAndDontsWhenWorkingWithChildrenSv:dosAndDonts = {
      headline: "ATT ARBETA MED BARN",
      headlineText:"Att göra och inte göra när man arbetar med barn",
      doHeadline:'ATT GÖRA',
      dos:[
        "Förbered dig ordentligt för ditt uppdrag. Läs riskanalysen noggrant och se till att du förstår den",
        "Läs Handlingsplanen vid misstänkt brott noggrant",
        "Uppmuntra barn att ställa frågor och uttrycka sina åsikter ",
        "Implementera regeln om två vuxna närvarande under alla aktiviteter så att ingen vuxen är ensam med ett barn",
        "Se till att all eventuell fysisk kontakt med barn är lämplig",
        "Använd positiva och icke-våldsamma metoder för att hantera barns beteende",
        "Ta omedelbart upp dina eventuella farhågor om olämpligt beteende"
      ],
      dontHeadline:'ATT INTE GÖRA',
      donts:[
        "Tillbringa långa perioder ensam med ett barn",
        "Vara påverkad av alkohol eller droger under ditt uppdrag för Clowner utan Gränser",
        "Bete dig på ett sätt som är kränkande för barn",
        "Använda kränkande eller hatiskt språk mot barn eller i närheten av barn",
        "Favorisera barn genom att ge gåvor eller löften",
        "Köra ensam med ett barn i bilen",
        "Lova barn något du inte kan uppfylla (till exempel att komma tillbaka)"
      ]
  }

  dosAndDontsWhenWorkingWithChildrenArb:dosAndDonts = {
    headline: "العمل مع الأطفال",
    headlineText:"ما يجب الحرص على عمله، وما يجب تجنب عمله",
    doHeadline:'احرص على:',
    dos:[
      "الاستعداد بشكل صحيح لمهمتك. اقرأ بعناية، وافهم تحليل المخاطر قبل بداية المهمة",
      "قراءة خطة العمل الخاصة في حال الاشتباه في جريمة، بعناية",
      "تشجيع الأطفال على طرح أسئلتهم ومخاوفهم",
      'تطبيق "قاعدة شخصين بالغين" خلال جميع الأنشطة، حتى لا ينفرد أي شخص بالغ بطفل',
      "أن يكون الاتصال الجسدي مع الأطفال مناسب دائمًا",
      "استخدام أساليب إيجابية وغير عنيفة في التعامل مع سلوكيات الأطفال",
      "إثارة المخاوف بشأن السلوكيات غير اللائقة على الفور"
    ],
    dontHeadline:'تجنب',
    donts:[
      " قضاء فترات طويلة مع طفل منعزل عن الآخرين",
      "تعاطي الكحول أو المخدرات أثناء عملك مع المنظمة",
      "التصرف بطريقة مسيئة للأطفال",
      "استخدام لغة مسيئة وبغيضة ضد الأطفال",
      "اصطحاب طفل وحده في سيارة",
      "تفضيل طفل على الآخرين عن طريق التعامل أو اعطاء هدايا أو وغيره.",
      "وعد الأطفال بشيء لا يمكنك تحقيقه (مثل العودة وما إلى ذلك)"
    ]
}


    prevention_and_reaction_to_protect_children_ensure_safety_of_childrenEng:dosAndDonts = {

      headline: "WORKING WITH CHILDREN",
        headlineText:"Prevention and reaction to protect children/ensure safety of children",
        dosText:[
          "PREVENTION: ",
          "Working preventively is the foundation of our child protection work. By implementing clear guidelines we make sure to always provide a safe environment for children in our activities. ",
          "",
          "CWB PREVENTIVE measures are:",
          " ",
          "- Quality control of all CWB representatives working with children",
          "- Policies and guidelines to protect children",
          "- Risk analysis of activities/projects",
          "- Guidelines for how to plan safe activities",
          "- Clear start-up and introduction routines for new projects/representatives",
          " ",
          "Read more in the Child Protection policy"
        ],
        dontsText:[
          "REACTION",
          "By implementing clear reporting mechanisms we ensure that any suspicion of crime or violation against children is taken seriously and is acted upon.",
          " ",
          "CWB REACTIVE measures are:",
          " ",
          "- All representatives of CWB Sweden must know how to act in case of a suspected crime, violation or other action that risk children’s safety",
          "- An Action Plan is implemented in case of suspected crime or violation",
          "- We have a whistle blower policy for anonymous reporting of irregularities",
          "- A whistle blower policy is in place in order to ensure anonymous reporting of irregularities",
          "- Read more in the Action Plan and Whistleblower policy",
        ]
    }

    prevention_and_reaction_to_protect_children_ensure_safety_of_childrenSv:dosAndDonts = {

      headline: "ATT ARBETA MED BARN",
        headlineText:"Förebyggande och agerande för att skydda barn och säkerställa barns säkerhet",
        dosText:[
          "FÖREBYGGANDE: ",
          "",
          "Att arbeta förebyggande är grunden i vårt barnskyddsarbete. Genom att ha tydliga riktlinjer ser vi till att alltid tillhandahålla en säker miljö för barn i våra aktiviteter.",
          "",
          "Våra FÖREBYGGANDE åtgärder:",
          " ",
          "- Kvalitetskontroll av alla CUG-representanter som arbetar med barn",
          "- Policies och riktlinjer för att skydda barn",
          "- Riskanalys av aktiviteter/projekt",
          "- Riktlinjer för planering av säkra aktiviteter",
          "- Tydliga rutiner för uppstart och introduktion för nya projekt/representanter",
          " ",
          "Läs mer i Barnskyddspolicyn"
        ],
        dontsText:[
          "AGERANDE:",
          "",
          "Genom att implementera tydliga rapporteringsmekanismer säkerställer vi att varje misstanke om brott eller kränkning mot barn tas på allvar och åtgärdas.",
          " ",
          "Våra AGERANDE åtgärder:",
          " ",
          "- Alla företrädare för CUG ska veta hur de ska agera vid misstänkt brott, kränkning eller annan incident som riskerar barns säkerhet",
          "- En handlingsplan implementeras vid misstänkt brott eller kränkning",
          "- En visselblåsarpolicy säkerställer anonym rapportering av misstänkta oegentligheter",
          "- Läs mer i Handlingsplan och Visselblåsarpolicy"
        ]
    }

    prevention_and_reaction_to_protect_children_ensure_safety_of_childrenArb:dosAndDonts = {

      headline: "العمل مع الأطفال",
      headlineText:"الوقاية والتفاعل لحماية الأطفال / ضمان سلامتهم",
      dosText:[
        "الوقاية:",
        "العمل الوقائي هو أساس عملنا لحماية الطفل. من خلال وجود إرشادات وقائية واضحة، نضمن أننا نقدم دائمًا بيئة آمنة للأطفال. التدابير الوقائية في أنشطتنا هي:",
        "",
        " التدابير الوقائية في أنشطتنا هي:",
        " ",
        "- مراقبة جودة عمل جميع الممثلين العاملين مع الأطفال في المنظمة",
        "- سياسات وارشادات لحماية الأطفال ",
        "- تحليل مخاطر الأنشطة / المشاريع",
        "- إرشادات حول كيفية التخطيط للأنشطة الآمنة",
        "- إجراءات واضحة لبدء العمل والإعداد للمشاريع الجديدة / الممثلين",
        " ",
        "اقرأ المزيد في: سياسة حماية الطفل"
      ],
      dontsText:[
        "التفاعل:",
        "من خلال وجود آليات إبلاغ واضحة، نضمن أن يتم التعامل بجدية مع أي جريمة أو انتهاك ضد الأطفال.",
        " ",
        "تدابير التفاعل الخاصة بالمنظمة هي كما يلي:",
        " ",
        "- يجب على جميع ممثلي منظمة مهرجون بلا حدود- السويد معرفة ما يجب عمله في حالة الإشتباه بحدوث بجريمة أو أي خطريهدد سلامة الأطفال",
        "- لدينا خطة عمل في حالة الاشتباه بوقوع جريمة",
        "- لدينا سياسة لحماية المبلغين عن المخالفات",
        "- اقرأ المزيد في: خطة العمل وسياسة حماية المبلغين"
      ]
    }

    scenario1SafetyGuidelinesForLargeCrowdsEng:dosAndDonts = {

      headline: '',
      headlineText: 'Scenario 1: Safety guidelines for large crowds',
      dosText : [
        'In the example we just looked at, Marwa’s only option is to avoid further escalation that can harm children.',
        '',
        'Unfortunately, in some of the countries where CWB works, violence against children is common. Thus it is important to be clear with partners – especially with those involved in crowd management – what you need support with and how. It is also important to explain beforehand that violence, such as hitting children, is not allowed during the event. '
      ],
      dontsText : [
        'In most cases, the CWB Project Manager signs a contract with partners, which includes our Child Protection policy. The Project Manager informs local partners that violence against children is not accepted. Your point of contact at CWB is available to support you throughout the project period. '
      ] 

    } 

    scenario1SafetyGuidelinesForLargeCrowdsSv:dosAndDonts = {

      headline: '',
      headlineText: 'Scenario 1: Säkerhetsriktlinjer för stora folksamlingar',
      dosText : [
        'I exemplet vi just tittade på är Marwas enda alternativ att undvika ytterligare eskalering av situationen och därmed risk för att barn ska skadas.',
        '',
        'Tyvärr är våld mot barn vanligt i vissa av de länder där CUG arbetar. Därför är det viktigt att vara tydlig med partners – särskilt med dem som är involverade i publikhantering– vad du behöver stöd med och hur. Det är också viktigt att på förhand förklara att våld, exempelvis att slå barn, inte är tillåtet under CUGs aktiviteter.'
      ],
      dontsText : [
        'I de flesta fall undertecknar projektledaren ett kontrakt med partners, som inkluderar vår barnskyddspolicy. Projektledaren informerar partners om att våld mot barn inte är accepterat. Din kontaktperson på CUG finns tillhands för att stödja dig under hela projektperioden.'
      ] 

    } 

    scenario1SafetyGuidelinesForLargeCrowdsArb:dosAndDonts = {

      headline: '',
      headlineText: 'السيناريو 1: إرشادات السلامة للحشود الكبيرة',
      dosText : [
        'في الحالة التي رأيناها من قبل، الشيء الوحيد الذي تستطيع مروى فعله هو تجنب المزيد من التصعيد الذي يمكن أن يضر بالأطفال.',
        '',
        'في بعض البلدان التي تعمل فيها منظمة مهرجون بلا حدود، يعتبر العنف ضد الأطفال، للأسف، أمرًا شائعًا عند التعامل مع الأطفال. لذلك، من المهم أن تكون واضحًا مع الشركاء، وخاصة الموظفين والمتطوعين الذين يدعمون عملية إدارة الحشود، حول ما تحتاجه من دعم، وكيفية تقديم هذا الدعم، وأن تشرح لهم مسبقًا أن العنف ضد الأطفال أو ضربهم غير مقبول هنا، لأننا موجودون هنا أصلا من أجل الأطفال.'
      ],
      dontsText : [
        'في معظم الحالات، يوقع مدير المشروع من منظمة مهرجون بلا حدود عقدًا مع الشريك، يتضمن سياسة حماية الطفل الخاصة بالمنظمة، يقوم مدير المشروع بإبلاغ الشركاء المحليين بعدم السماح باستخدام العنف ضد الأطفال. إن نقطة الاتصال الخاصة بك في المنظمة متاحة لتقديم الدعم طوال فترة المشروع.'
      ] 

    } 

    scenario2LongtermWorkWithChildrenEng:dosAndDonts = {

      headline: 'WORKING WITH CHILDREN',
      headlineText: '',
      dontHeadline: 'Scenario 2: Long-term work with children',
      dosText : [],
      dontsText : [
        "In some CWB projects we conduct long-term pedagogical sessions that create strong bonds between participants and CWB representatives. If you are going to be involved in this kind of work it is important that you know how to prepare safely. You also need to know what to do if you witness or hear of any kind of violations of children's rights.",
        "",
        "Below are some practical examples of violence against children and risks to their safety that you could encounter while doing long-term pedagogical sessions:",
        "– A child confides in you (as a facilitator in a workshop) that they have been exposed to some kind of violence",
        "– Children are aggressive/act out/fight",
        "– Children bully and harass one another",
        "– You witness a volunteer or staff from a partner organisation behaving inappropriately with children and acting in violation of CWB policies"
      ] 

    } 

    scenario2LongtermWorkWithChildrenSv:dosAndDonts = {

      headline: 'ATT ARBETA MED BARN',
      headlineText: '',
      dontHeadline: 'Scenario 2: Långsiktigt arbete med barn',
      dosText : [ ],
      dontsText : [
        'I vissa projekt arbetar vi med långsiktiga pedagogiska insatser som skapar starka band mellan deltagare och CUG-representanter. Om du ska arbeta med den typen av insatser är det viktigt att du vet hur du ska förbereda dig på ett säkert sätt. Du måste också veta vad du ska göra om du bevittnar eller hör talas om någon form av kränkningar mot barn och deras rättigheter.',
        "Nedan följer några praktiska exempel på våld mot barn och risker för deras säkerhet som du kan stöta på när du arbetar med långsiktiga pedagogiska insatser:",
        "– Du är workshopledare och ett barn berättar att hon/han har blivit utsatt för någon form av våld",
        "– Barn är aggressiva/utåtagerande/bråkiga",
        "– Barn mobbar och trakasserar varandra",
        "– Du ser en volontär eller personal från en partnerorganisation bete sig olämpligt med barn och agera i strid med CUGs riktlinjer"
      ] 

    } 

    scenario2LongtermWorkWithChildrenSvArb:dosAndDonts = {

      headline: 'العمل مع الأطفال',
      headlineText: '',
      dontHeadline: 'السيناريو 2: العمل مع الأطفال على المدى الطويل',
      dosText : [],
      dontsText : [
        ' في بعض مشاريع منظمة مهرجون بلا حدود، نجري جلسات تربوية طويلة الأمد، تخلق روابط قوية بين المشاركين وممثلي المنظمة. إذا كنت تقوم بهذا النوع من العمل، فمن المهم أن تعرف كيفية الاستعداد بطريقة آمنة، وماذا تفعل إذا شاهدت أو سمعت شيئًا حول انتهاك حقوق الأطفال.',,
        'فيما يلي بعض الأمثلة العملية حول العنف ضد الأطفال، والمخاطر على سلامتهم، التي قد تواجهها أو تلفت انتباهك أثناء العمل في جلسات تربوية طويلة المدى:',
        '- يخبرك طفل (بصفتك ميسر في ورشة عمل) أنه قد تعرض لنوع من العنف',
        '-  أطفال عدوانيون / يتصرفون بانفعال وعصبية / يتشاجرون',
        '- أطفال يتنمرون ويتحرشون ببعضهم البعض.',
        '- تشاهد متطوعًا أو موظفًا من منظمة شريكة يتصرف بشكل غير لائق، ويتعارض مع سياسات منظمة مهرجون بلا حدود في التعامل مع الأطفال '
      ] 

    } 


    //whistle blower policy

    whistleBlowerPolicyEng:dosAndDonts = {
      headline: 'WHISTLEBLOWER POLICY', 
      headlineText: 'It is crucial that everyone involved in Clowns without Borders abide by the same rules and conduct themselves according to the same standards, no matter their position or where they work. Hence we have a whistle-blower policy in place.',
      dosText:[
        'If you become aware of somebody in the organisation acting in a way that contradicts CWB policies, statutes or regulations you should immediately reach out to your nearest point of contact. If you do not wish to reach out to your closest point of contact, you can contact the Secretary-General or a member of the Board of directors.',
        '',
        'Reporting is anonymous. CWB guarantees the anonymity of anyone reporting irregularities.'
      ],
      dontHeadline:'Irregularities can be:',
      dontsText: [
        '- of financial nature ',
        '',
        '- illegal activities ',
        '',
        '- mismanagement of an assignment or a position',
        '',
        '- actions or behaviour that go against CWB’s statutes or policies'
      ]
    }

    whistleBlowerPolicySv:dosAndDonts = {
      headline: 'VISSELBLÅSARPOLICY', 
      headlineText: 'Det är av yttersta vikt att alla som är engagerade i Clowner utan Gränser följer samma regler och riktlinjer, oavsett befattning eller var de arbetar. Därför har vi en visselblåsarpolicy.',
      dosText:[
        'Om du får reda på att någon i organisationen agerar på ett sätt som strider mot CUGs policies, stadgar eller föreskrifter bör du omedelbart berätta det för din närmaste kontaktperson. Om du inte vill meddela din närmaste kontaktperson kan du kontakta generalsekreteraren eller en styrelseledamot.',
        '',
        'Rapporteringen är anonym. CUG garanterar att alla som rapporterar oegentligheter förblir anonyma. '
      ],
      dontHeadline:'Oegentligheter kan vara:',
      dontsText: [
        '– ekonomiska',
        '',
        '– illegal verksamhet',
        '',
        '– misskötsel av ett uppdrag eller en befattning',
        '',
        '– handlingar eller beteende som strider mot CUGs stadgar eller policies'
      ]
    }

    whistleBlowerPolicyArb:dosAndDonts = {
      headline: 'سياسة الإبلاغ عن المخالفات', 
      headlineText: ' نحن في منظمة مهرجون بلا حدود نعتقد أنه من الأهمية أن نتبع جميعًا القواعد نفسها، ونتصرف بنفس الطريقة أثناء تنفيذ عملنا، بغض النظر عن البلد الذي نعمل فيه. لذلك، لدينا سياسة خاصة بالإبلاغ عن المخالفات معمول بها.',
      dosText:[
        'إذا كنت على علم بأن شخصًا ما في المنظمة يرتكب مخالفات، يجب أن تصل على الفور بأقرب نقطة اتصال لك بالمنظمة. إذا كنت لا ترغب في الوصول إلى أقرب نقطة اتصال لك، فيمكنك دائمًا الاتصال بالأمين العام أو أحد أعضاء مجلس الإدارة.',
        '',
        'الإبلاغ سيكون مجهول المصدر، وستضمن المنظمة عدم الكشف عن هوية الشخص الذي قام بالإبلاغ عن المخالفات.'
      ],
      dontHeadline:'يمكن أن تكون المخالفات:',
      dontsText: [
        '- ذات طبيعة مالية ',
        '',
        '- أنشطة غير قانونية ',
        '',
        '- تتعلق بسوء إدارة المهمة أو الوظيفة',
        '',
        '- تتعلق بالأنشطة أو السلوك الذي يتعارض مع اللوائح أو السياسات الخاصة بالمنظمة'
      ]
    }
}