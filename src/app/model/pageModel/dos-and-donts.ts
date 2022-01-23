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
      

}