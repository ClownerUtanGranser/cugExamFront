export interface  PhotoText {
    chapter?:string,
    headline:string, 
    headlineText?:string, 
    sectionText?:string[],
    sectionTextHtml?:string[],
    secondSectionText?:string[],
    endBoldText?:string[], 
    points?:string[],
    pointsHtml?:string[],
    endTextHtml?:string[],
    circleText?:string,
    photoName:string
}

export class PhotoTextObj {

  //Welcome section 1

  WELCOME_page2Eng:PhotoText = {
        headline: "WELCOME!",
        
        sectionText:[
          "As you have seen in the video, Clowns without Borders is a children’s rights organisation dedicated to sharing emotional relief, laughter and play with children and communities in crisis around the world.",
          "Protecting children is an integral part of our mission and the best interest of the child always come first. Because we work with vulnerable communities, it is key that our activities never cause harm.",
          "Hence we have developed this training for anyone acting as a representative of Clowns Without Borders Sweden. Upon completing the training you will have learned:"
        ],
        points:[
          "- How to act as a good representative of Clowns Without Borders Sweden",
          "- Our core values, policies and guidelines",
          "- How to work preventively to ensure the safety of children",
          "- What to do if you witness a suspected violation or crime against a child"
        ],
        circleText:"If you have any questions after the training you can always turn to your closest point of contact within the organisation.",
        photoName:"two-boys"
    }

    WELCOME_page2Sv:PhotoText = {
      headline: "VÄLKOMMEN!",
      
      sectionText:[
        "Som du såg i videon är Clowner utan Gränser en barnrättsorganisation med uppdrag är att sprida skratt, hopp och drömmar till barn och samhällen i kris runtom i världen.",
        "Att skydda barn är en central del av vårt uppdrag och barnets bästa kommer alltid först. Vi arbetar med utsatta människor och det är av yttersta vikt att vår verksamhet aldrig orsakar skada.",
        "Därför har vi utvecklat den här utbildningen för alla som representerar Clowner utan Gränser Sverige.",
        "När du har avslutat kursen kommer du att känna till:"
      ],
      points:[
        "- Hur du är en bra representant för Clowner utan Gränser",
        "- Våra kärnvärden, policies och riktlinjer",
        "- Hur vi arbetar förebyggande för att säkerställa barns säkerhet",
        "- Vad du ska göra om du blir vittne till en misstänkt kränkning eller ett brott mot barn"
      ],
      circleText:"Om du har några frågor efter utbildningen kan du alltid vända dig till din närmaste kontaktperson.",
      photoName:"two-boys"
  }

  WELCOME_page2Arb:PhotoText = {
    headline: "أهلا بكم!",
    
    sectionText:[
      "كما شاهدتم في الفيديو فإن مهرجون بلا حدود هي منظمة لحقوق الأطفال مكرسة لمشاركة الارتياح النفسي، والضحك، واللعب مع الأطفال والمجتمعات التي تمر بأزمات حول العالم.",
      "تعتبر حماية الأطفال جزءًا لا يتجزأ من مهمتنا، ودائمًا ما تأتي مصلحة الأطفال في المقام الأول. عند العمل مع الأشخاص المستضعفين، من المهم التأكد من أن أنشطتنا لا تسبب أي ضرر.",
      "لهذا السبب قمنا بتطوير هذا التدريب لكل من يعمل كممثل لمنظمة مهرجون بلا حدود",
      " السويد. عند الانتهاء من التدريب سوف تتعلمون: "
    ],
    points:[
      "- كيف تتصرفون كممثلين جيدين لمنظمة مهرجون بلا حدود – السويد",
      "- ما هي قيمنا الأساسية وسياساتنا وإرشاداتنا",
      "- كيفية العمل الوقائي لضمان سلامة الأطفال",
      "- كيف تتصرفون وماذا تفعلون إذا شاهدتم انتهاكًا أو جريمة ضد الأطفال"
    ],
    circleText:"إذا كان لديكم أي أسئلة بعد التدريب، يمكنكم بالطبع التواصل دائمًا مع أقرب نقطة اتصال في المنظمة.",
    photoName:"two-boys"
}

    //Working with children

    Safety_guidelines_for_large_crowdsEng:PhotoText = {
      headline: "WORKING WITH CHILDREN",

      headlineText:"Scenario 1: Safety guidelines for large crowds",
      
      sectionText:[
        "An example: ",
        "Marwa is a Clowns Without Borders artist participating in a performance tour. She and her team have made all preparations according to the Security protocol and Artist handbook in order to ensure a safe activity.",
        "The audience consists of around 300 excited children. Halfway into the show the children start expressing their excitement loudly and standing up. As a result, audience members further back cannot see the stage area, and children start fighting each other. Despite trying to calm the situation by using Clowns Without Borders methods, it escalates and there is a clear risk of harm to children. Local staff intervene by smacking and hitting children.",
        "What can Marwa do?"
      ],

      circleText: "Marwa makes a signal to her team to end the show to avoid further escalation and violence. The team withdraws from the area. Afterwards Marwa reaches out to her point of contact for further follow-up with partner organisation. ",
      
      photoName:"balancing-ball"
  }

  Safety_guidelines_for_large_crowdsSv:PhotoText = {
    headline: "ATT ARBETA MED BARN",

    headlineText:"Scenario 1: Säkerhetsriktlinjer för stora folksamlingar",
    
    sectionText:[
      "Ett exempel: ",
      "Marwa är en av Clowner utan Gränsers artister och deltar i en föreställningsturné. Hon och hennes team har gjort alla förberedelser i enlighet med säkerhetsprotokollet och artisthandboken.",
      "Publiken består av cirka 300 förväntansfulla barn. Halvvägs in i föreställningen börjar barnen ge uttryck för sina känslor högt och ställer sig upp. Det leder till att publiken längre bak inte kan se föreställningen och barn börjar slåss med varandra. Trots att man försöker lugna situationen genom att använda Clowner utan Gränsers metoder eskalerar det och det finns en klar risk för att barn ska komma till skada. Lokal personal ingriper genom att smälla till och slå barn.",
      "Vad kan Marwa göra?"
    ],

    circleText: "Marwa ger tecken till sitt team att avbryta föreställningen för att undvika ytterligare eskalering och våld. Teamet lämnar området. Sedan tar Marwa kontakt med sin kontaktperson för vidare uppföljning med partnerorganisationen.",
    
    photoName:"balancing-ball"
}

Safety_guidelines_for_large_crowdsArb:PhotoText = {
  headline: "العمل مع الأطفال",

  headlineText:"السيناريو 1: إرشادات السلامة للحشود الكبيرة",
  
  sectionText:[
    "مثال: ",
    "مروى فنانة من منظمة مهرجون بلا حدود، تشارك في جولة عروض. قامت هي وفريقها بجميع الاستعدادات، وفقًا لبروتوكول الأمان، وكتيب دليل الفنان، لضمان نشاط آمن.",
    "يتكون الجمهور من حوالي 300 طفل مشارك. وفي منتصف العرض، يبدأ الأطفال في التعبير عن حماستهم من خلال الصخب والوقوف. نتيجة لذلك، لا يستطيع الأطفال الذين يقفون في الخلف رؤية منطقة العرض، ويبدأ الأطفال في القتال فيما بينهم. على الرغم من محاولة تهدئة الموقف باستخدام أساليب منظمة مهرجون بلا حدود، إلا أن الموقف يتصاعد ويصبح هناك خطر واضح بتعرض الأطفال للأذى. يتدخل الموظفون المحليون من خلال صفع الأطفال وضربهم.",
    "ماذا بوسع مروى أن تفعل؟"
  ],

  circleText: "تعطي مروى إشارة لفريقها لإنهاء العرض، لتجنب المزيد من التصعيد والعنف، والانسحاب من المنطقة. بعد ذلك، تتواصل مع نقطة الاتصال الخاصة بها لمزيد من المتابعة مع المنظمة الشريكة. ",
  
  photoName:"balancing-ball"
}

  cwbSwedenChildProtectionPolicyEng:PhotoText = {
    headline: "WORKING WITH CHILDREN",
    headlineText:"Clowns Without Borders Sweden Child Protection policy",
        
        sectionText:[
          "Clowns Without Borders Sweden works to support the emotional wellbeing of vulnerable children and communities. To ensure the safety of all children we have a Child Protection policy. The policy gives guidelines and support to anyone working with us. In short, everyone representing Clowns Without Borders Sweden shall:",
          ""
        ],
        points:[
          "Understand the importance of child protection",
          "Always ensure children’s dignity and respect",
          "In all activities strive to strengthen the psychosocial wellbeing and rights of children",
          "Ensure a safe environment for all children participating in Clowns Without Borders activities",
          "Know their obligations and commitments as a representative of Clowns Without Borders"
        ],
        
        photoName:"clown-with-children none"
  }

  cwbSwedenChildProtectionPolicySv:PhotoText = {
    headline: "ATT ARBETA MED BARN",
    headlineText:"Clowner utan Gränsers Barnskyddspolicy",
        
        sectionText:[
          "Clowner utan Gränser Sverige arbetar med att främja barns känslomässiga välbefinnande och ge stöd till samhällen i utsatthet. För att garantera säkerheten för alla barn vi möter har vi en barnskyddspolicy som ger riktlinjer och stöd till alla som arbetar med oss.",
          "Kort sammanfattat ska alla som representerar Clowner utan Gränser:"
        ],
        points:[
          "Förstå vikten av barnskydd",
          "Alltid säkerställa barns värdighet och respekt",
          "I all verksamhet sträva efter att stärka barns psykosociala välbefinnande och rättigheter",
          "Säkerställa en trygg miljö för alla barn som deltar i Clowner utan Gränsers aktiviteter",
          "Känna till sina skyldigheter och åtaganden som representant för Clowner utan Gränser"
        ],
        
        photoName:"clown-with-children none"
  }

  cwbSwedenChildProtectionPolicyArb:PhotoText = {
    headline: "العمل مع الأطفال",
    headlineText:"سياسة منظمة مهرجون بلا حدود - السويد لحماية الأطفال",
        
        sectionText:[
          " تعمل منظمة مهرجون بلا حدود - السويد على دعم الرفاهية العاطفية للأطفال والمجتمعات المعرضة للخطر.",
          "لضمان سلامة جميع الأطفال، لدينا سياسة خاصة لحماية الطفل. تهدف هذه السياسة إلى تقديم إرشادات ودعم لأي شخص يعمل معنا. باختصار، يجب على كل شخص يعمل مع مهرجون بلا حدود – السويد أن:"
        ],
        points:[
          " يفهم أهمية حماية الطفل",
          "يحرص دائمًا على احترام كرامة الأطفال",
          "يسعى جاهدا في جميع الأنشطة لتعزيز الرفاه النفسي الاجتماعي وحقوق الأطفال ",
          "يضمن بيئة آمنة لجميع الأطفال المشاركين في أنشطة منظمة مهرجون بلا حدود",
          "يعرف واجباته والتزاماته في أي مهمة للمنظمة"
        ],
        
        photoName:"clown-with-children none"
  }

  whatIsViolenceEng:PhotoText = {
    headline: "WORKING WITH CHILDREN",
    headlineText: "What is violence?",

    sectionText: ["Clowns Without Borders Sweden works with vulnerable children and everyone involved in the organisation needs to be aware of the different kinds of violence that children can be exposed to.",
          "",
          "Violence against children includes:"],
    points:[
      "Physical violence",
      "Sexual violence",
      "Psychological violence ",
      "Honour violence"
    ],

    secondSectionText: [
      "",
      "Clowns without Borders Sweden have zero tolerance for any act of violence against children. "
    ],

    endBoldText:[
      "If you witness, hear of or suspect an act of violence committed during Clowns Without Borders activities, you must report it to your contact person."
    ],
    circleText:"We will now look at two possible scenarios from Clowns Without Borders activities, where you can encounter violence or harm against children.",

    photoName:"two-hands"

  }

  whatIsViolenceSv:PhotoText = {
    headline: "ATT ARBETA MED BARN",
    headlineText: "Vad är våld?",

    sectionText: ["Clowner utan Gränser arbetar med utsatta barn och alla som är engagerade i organisationen måste vara medvetna om de olika typer av våld som barn kan utsättas för.",
          "",
          "Våld mot barn inkluderar:"],
    points:[
      "– Fysiskt våld",
      "– Sexuellt våld",
      "– Psykiskt våld",
      "– Hedersvåld"
    ],

    secondSectionText: [
      "",
      "Clowner utan Gränser Sverige har nolltolerans mot alla former av våldshandlingar mot barn."
    ],

    endBoldText:[
      "Om du bevittnar, hör talas om eller misstänker att en våldshandling begåtts under Clowner utan Gränsers verksamhet ska du rapportera det till din kontaktperson."
    ],
    circleText:"Vi ska nu titta på två möjliga situationer i Clowners utan Gränsers arbete, där våld eller skada mot barn kan förekomma.",

    photoName:"two-hands"

  }

  whatIsViolenceArb:PhotoText = {
    headline: "العمل مع الأطفال",
    headlineText: "ما هو العنف؟",

    sectionText: ["بما أن منظمة مهرجون بلا حدود - السويد  تعمل مع الأطفال المعرضين للخط ، فمن المهم أن يدرك كل من يعمل في المنظمة أن هناك أنواعًا مختلفة من العنف التي يمكن أن يتعرض لها الأطفال، ويرفضونها.",
          "",
          "يمكن أن يشمل العنف ضد الأطفال ما يلي:"],
    points:[
      "العنف الجسدي",
      "العنف الجنسي",
      "العنف النفسي",
      "العنف الذي يرتكب باسم الشرف"
    ],

    secondSectionText: [
      "",
      "إن منظمة مهرجون بلا حدود – السويد لا تتساهل مطلقا إزاء أي عنف يرتكب ضد الأطفال"
    ],

    endBoldText:[
      "إذا رأيت أو سمعت أو اشتبهت في أي عمل عنيف تم ارتكابه أثناء أنشطتنا، فيجب عليك إبلاغ نقطة الاتصال الخاصة بك بذلك"
    ],
    circleText:"سننظر الآن في سيناريوهين محتملين من أنشطة مهرجون بلا حدود، حيث يمكنك مواجهة حالات عنف أو أذى ضد الأطفال",

    photoName:"two-hands"

  }


  largeCrowdsAtPerformancesEng:PhotoText = {

    headline: "WORKING WITH CHILDREN",
    headlineText:"Scenario 1: Large crowds at performances",
    sectionText:[
      "Performances are a key activity for Clowns Without Borders. Below are some practical examples of violence against children and risks to their safety that you may encounter when working with large crowds at performances:",
      ""
    ],
    points:[
      "Children are over-excited and start grabbing, pushing and playing rough, either with each other or with Clowns Without Borders artists",
      "Children want to help Clowns Without Borders artists with collecting items after the show and start fighting over these items",
      "Adults from partner organisation try to repress children in the audience by using violence",
      "Children stand up to get a better view of the show, which leads to others not being able to see well and there is a risk of fighting"
    ],
    photoName:"laughing-children none"

  }

  largeCrowdsAtPerformancesSv:PhotoText = {

    headline: "ATT ARBETA MED BARN",
    headlineText:"Scenario 1: Stor publik vid föreställningar",
    sectionTextHtml:[
      "Föreställningar är en av våra nyckelaktiviteter. Nedan följer några praktiska exempel på våld mot barn och risker för barn säkerhet som du kan stöta på när du arbetar med stora folkmassor vid föreställningar:",
      ""
    ],
    points:[
      "– Barn är överexalterade och börjar dra i varandra, knuffas och leka för våldsamt, antingen med varandra eller med Clowner utan Gränsers artister",
      "– Barn vill hjälpa Clowner utan Gränsers artister med att samla in rekvisita efter föreställningen och börjar slåss om föremålen",
      "– Vuxna från partnerorganisationer försöker få kontroll över barn i publiken genom att använda våld",
      "– Barn står upp för att se föreställningen bättre, vilket leder till att andra, som sitter bakom dem, inte kan se och det uppstår risk för slagsmål"
    ],
    photoName:"laughing-children none"

  }

  largeCrowdsAtPerformancesArb:PhotoText = {

    headline: "العمل مع الأطفال",
    headlineText:" السيناريو 1: المخاطر عند العمل مع حشود كبيرة أثناء تقديم العروض",
    sectionTextHtml:[
      " تعتبر العروض من الأنشطة الرئيسية في الكثير من أعمال منظمة مهرجون بلا حدود. فيما يلي بعض الأمثلة العملية للعنف ضد الأطفال والمخاطر على سلامتهم التي قد تواجهها عند العمل مع حشود كبيرة عند العروض:",
      ""
    ],
    points:[
      "-  الأطفال بطبيعتهم يتحمسون للغاية، ويبدأون في الإمساك والدفع واللعب بقسوة مع بعضهم البعض، أو مع فناني المنظمة",
      "-  قد يرغب الأطفال في مساعدة فناني المنظمة، والقيام بجمع بعض المواد عند انتهاء العرض، والبدء في الاقتتال عليها",
      "-  قد يحاول بعض البالغون من المنظمات الشريكة قمع الأطفال باستخدام العنف",
      "-   قد يبدأ بعض الأطفال بالوقوف أثناء العرض لرؤية العرض بشكل أفضل، مما يؤدي إلى حجب الرؤية عن أطفال آخرين، مما يؤدي الى خطر نشوب قتال بين الأطفال انفسهم"
    ],
    photoName:"laughing-children none"

  }

  actionPlanInCaseOfSuspectedCrimeAgainstChildrenEng:PhotoText = {

    headline: "WORKING WITH CHILDREN",
    headlineText:"Action plan in case of suspected crime against children",
    sectionTextHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> If you suspect, hear of or witness a child being subjected to any violation of our Child Protection policy you have a duty to report it. </span> This is in order to protect children and to ensure that you get the right support.',
      " According to the Action Plan you shall:"
    ],
    pointsHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Listen openly </span> to what the child says',
      'Allow the child to <span style="font-weight:bold; letter-spacing: .1rem;"> speak freely </span> and only ask questions to establish basic facts',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Assure </span> the child that they did the right thing by speaking about what happened ',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Explain </span> to the child that you must report the incident to Clowns Without Borders',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Make an incident report </span> by using the Clowns Without Borders form or by reaching out to your point of contact ',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Assist Clowns Without Borders </span> in taking the matter further with partners or authorities',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Cooperate  </span>in any ensuing investigation'
    ],
    endTextHtml:[
      'All the steps above are included in the <span style="font-weight:bold; letter-spacing: .1rem;">ACTION PLAN IN CASE OF SUSPECTED CRIME </span>'
    ],
    circleText:"If a suspected crime is reported, the Secretary General and the Board of Clowns Without Borders Sweden will launch an internal or external investigation. If the suspected violation is a criminal offence, Clowns Without Borders will contact the police, after making a security analysis to ensure that no further harm is done to the child. If a crime is committed by a Clowns Without Borders representative, it will have disciplinary consequences and, in serious cases, lead to exclusion. ",

    photoName:"action-plan"

  }

  actionPlanInCaseOfSuspectedCrimeAgainstChildrenSv:PhotoText = {

    headline: "ATT ARBETA MED BARN",
    headlineText:"Handlingsplan vid misstänkt brott mot barn",
    sectionTextHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Om du misstänker, hör talas om eller bevittnar att ett barn utsätts för en kränkning av vår barnskyddspolicy är du skyldig att rapportera det. Detta för att skydda barn och för att säkerställa att du får rätt stöd. </span>',
      "Enligt handlingsplanen ska du:"
    ],
    pointsHtml:[
      '– Lyssna öppet på vad barnet säger',
      '– Låta barnet tala fritt och bara ställa frågor för att fastställa grundläggande fakta',
      '– Försäkra barnet om att hon/han gjorde rätt i att berätta vad som hänt',
      '– Förklara för barnet att du måste rapportera händelsen till Clowner utan Gränser',
      '– Göra en incidentrapport genom att använda vårt formulär eller genom att kontakta din kontaktperson',
      '– Bistå Clowner utan Gränser i att ta ärendet vidare med partners eller myndigheter',
      '– Samarbeta i en eventuell utredning'
    ],
    endTextHtml:[
      'Alla steg ovan ingår i dokumentet <span style="font-weight:bold; letter-spacing: .1rem;">HANDLINGSPLAN VID MISSTÄNKT BROTT  </span>'
    ],
    circleText:"Om en misstänkt kränkning anmäls inleder Clowner utan Gränsers generalsekreterare och styrelsen en intern eller extern utredning. Om den misstänkta överträdelsen är ett brott kommer Clowns Without Borders att kontakta polisen, efter att ha gjort en säkerhetsanalys för att säkerställa att barnet inte skadas ytterligare. Om ett brott begås av en representant för Clowner utan Gränser får det disciplinära konsekvenser och kan i allvarliga fall leda till uteslutning.",

    photoName:"action-plan"

  }

  actionPlanInCaseOfSuspectedCrimeAgainstChildrenArb:PhotoText = {

    headline: "العمل مع الأطفال",
    headlineText:"خطة العمل في حالة الاشتباه بجرائم ضد الأطفال",
    sectionTextHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> إذا كنت تشك أو تسمع أو تشاهد طفلًا يتعرض لجريمة ضد سياسة حماية الطفل الخاصة بنا، فمن واجبك الإبلاغ عنها. وذلك لحماية الأطفال، ولضمان حصولك كممثل للمنظمة على الدعم المناسب. </span> ',
      " وفقًا لخطة العمل، يجب عليك القيام بما يلي:"
    ],
    pointsHtml:[
      '- استمع جيدا لما يقوله الطفل',
      '- اسمح للطفل بالتحدث بحرية واطرح الأسئلة فقط لتوضيح الحقائق الأساسية',
      '- أكد للطفل أنه قام بعمل الشيء الصحيح في التحدث عما حدث ',
      '- اشرح للطفل أنه يجب عليك إبلاغ المنظمة بما حدث ',
      '- قم بالإبلاغ عن الحادث من خلال ملء تقرير الحوادث الخاص بمنظمة مهرجون بلا حدود أو عن طريق الاتصال بنقطة الاتصال الخاصة بك في المنظمة',
      '- ساعد المنظمة على متابعة الأمر مع أي شركاء أو سلطات أخرى',
      '- تعاون مع التحقيق'
    ],
    endTextHtml:[
      ' تم تضمين جميع الخطوات المذكورة أعلاه في <span style="font-weight:bold; letter-spacing: .1rem;">خطة العمل في حال الاشتباه بوقوع جريمة </span>'
    ],
    circleText:"إذا تم الإبلاغ عن الاشتباه بجريمة، سيبدأ الأمين العام ومجلس منظمة مهرجون بلا حدود -بالسويد تحقيقًا داخليًا أو خارجيًا. إذا كانت الجريمة المشتبه بها هي جريمة جنائية، فستقوم المنظمة بالاتصال بالشرطة، بعد إجراء تحليل أمني لضمان عدم إلحاق مزيد من الضرر بالطفل. إذا تم ارتكاب جريمة من قبل ممثل للمنظمة، فسيؤدي ذلك إلى عواقب تأديبية، وفي الحالات الخطيرة، الطرد من المنظمة.",

    photoName:"action-plan"

  }


  preventingRisksWhenWorkingWithLargeCrowdsEng:PhotoText = {

    headline: "WORKING WITH CHILDREN",
    headlineText:"Scenario 1: Preventing risks when working with large crowds",
    sectionTextHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> The importance of prevention in Clowns Without Borders’s work with children  </span>',
      '',
      'As mentioned earlier, prevention is an important part of our work. Clowns Without Borders works in difficult settings and often with large crowds consisting of both children and adults. In order to prevent risks to the safety of children, Clowns Without Borders has outlined preventive measures to be implemented when we encounter large crowds.',
      ''
    ],
    circleText: "Let's see some examples of these preventive measures",
    photoName:"crowd"

  }

  preventingRisksWhenWorkingWithLargeCrowdsSv:PhotoText = {

    headline: "ATT ARBETA MED BARN",
    headlineText:"Scenario 1: Förebygga risker vid arbete med stora folkmassor",
    sectionTextHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Vikten av förebyggande arbete i Clowner utan Gränsers verksamhet med barn  </span>',
      '',
      'Som tidigare nämnts är prevention en viktig del av vårt arbete. Clowner utan Gränser arbetar i svåra miljöer och ofta med stora grupper av både barn och vuxna. För att förebygga risker för barns säkerhet har Clowner utan Gränser tagit fram förebyggande åtgärder för situationer där vi möter stora folkmassor.',
      ''
    ],
    circleText: "Nu ska vi titta på några exempel på våra förebyggande åtgärder",
    photoName:"crowd"

  }

  preventingRisksWhenWorkingWithLargeCrowdsArb:PhotoText = {

    headline: "العمل مع الأطفال",
    headlineText:"السيناريو 1: منع المخاطر عند العمل مع حشود كبيرة",
    sectionTextHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> أهمية الوقاية في عمل المنظمة مع الأطفال  </span>',
      '',
      'كما ذكرنا من قبل، تعتبر الوقاية جزءًا مهمًا من عمل منظمة مهرجون بلا حدود. فالمنظمة تعمل في بيئات صعبة، وغالبًا مع حشود كبيرة تتكون من الأطفال والبالغين. ومن أجل منع المخاطر على سلامة الأطفال، لدينا تدابير وقائية يجب اتباعها في حالة العمل مع الحشود الكبيرة. ',
      ''
    ],
    circleText: "دعونا نرى بعض الأمثلة على ماهية هذه التدابير الوقائية",
    photoName:"crowd"

  }

  //CODE OF CONDUCT

  page1CodeOfConductEng:PhotoText = {
    
    chapter:'CODE',
    headline: "CODE OF CONDUCT",
    headlineText:"",
    sectionTextHtml:[
      'The Code of Conduct is one of the most important documents and forms the basis for a good representative of Clowns Without Borders Sweden.',
       "",
      "As a representative, it is your duty to understand and abide by the the Code of Conduct. ",
      "",
      "In the next session of this course we will go through all of its 10 basic principles."
    ],
    photoName:"the-jump"   
  }

  page1CodeOfConductSv:PhotoText = {
    
    chapter:'CODE',
    headline: "UPPFÖRANDEKOD",
    headlineText:"",
    sectionTextHtml:[
      'Uppförandekoden är ett av våra viktigaste dokument och utgör grunden för en god representant för Clowner utan Gränser.',
       "",
      "Som Clowner utan Gränser-representant är det din skyldighet att förstå och följa uppförandekoden.",
      "",
      "I nästa del av utbildningen kommer vi att gå igenom uppförandekodens 10 grundläggande principer. "
    ],
    photoName:"the-jump"   
  }

  page1CodeOfConductArb:PhotoText = {
    
    chapter:'CODE',
    headline: "مدونة قواعد السلوك",
    headlineText:"",
    sectionTextHtml:[
      'تعتبر مدونة قواعد السلوك من أهم الوثائق، وخط الأساس لكيفية أن تكون ممثلاً جيدًا لمنظمة مهرجون بلا حدود – السويد',
       "",
      "بصفتك ممثلاً للمنظمة، فمن واجبك فهم مدونة قواعد السلوك والالتزام بها.",
      "",
      "في الجلسة التالية من هذه الدورة، سنتناول جميع مبادئها الأساسية العشرة."
    ],
    photoName:"the-jump"   
  }

  //DOCUMENTATION OF CHILDREN

  documentationOfChildrenPage1Eng:PhotoText = {

    headline: 'DOCUMENTATION OF CHILDREN',
    sectionTextHtml:[
      'Children’s integrity and privacy is important to Clowns Without Borders Sweden. Artists must never, in social media or otherwise, publish photos of children that can be identified. Furthermore, Clowns Without Borders Sweden is obliged to follow the European GDPR law which states that no personal information about children (such as photos, videos, audio files or personal data) can be shared unless we have <span style="font-weight:bold; letter-spacing: .1rem;">  informed consent </span> from the child and their legal guardian.',
      '',
      'If you are in charge of documenting activities or any other work of Clowns Without Borders Sweden you must make sure that all documentation respects children’s rights to privacy.',
      '',
      'This means that <span style="font-weight:bold; letter-spacing: .1rem;">  informed consent </span> must be obtained from the child in question and a legal guardian or other person responsible for the child on site. ',
      '',
      'Please note that a minor <span style="font-weight:bold; letter-spacing: .1rem;">  cannot </span> give consent without their caregivers! '
    ],

    endTextHtml:[
      'You can read more about this in the Communication policy.'
    ],
    circleText: 'Informed consent means that the person being portrayed understands how their photos/information will be used.',
    photoName:'selfie'
  }

  documentationOfChildrenPage1Sv:PhotoText = {

    headline: 'DOKUMENTATION AV BARN',
    sectionTextHtml:[
      'Barns integritet är viktig för Clowner utan Gränser. Artister får aldrig, i sociala medier eller på annat sätt, publicera foton på barn som kan identifieras. Clowner utan Gränser är också skyldig att följa den europeiska GDPR-lagen som anger att ingen personlig information om barn (såsom bilder, videor, ljudfiler eller personuppgifter) får spridas om vi inte har informerat samtycke från barnet och dess vårdnadshavare.',
      '',
      'Om du ansvarar för att dokumentera aktiviteter eller något annat arbete inom Clowner utan Gränser måste du se till att all dokumentation respekterar barns rätt till integritet.',
      '',
      'Det innebär att informerat samtycke ska inhämtas från barnet och en vårdnadshavare eller annan ansvarig för barnet på plats.',
      '',
      'Observera att en <span style="font-weight:bold; letter-spacing: .1rem;"> minderårig inte kan ge sitt samtycke utan vårdnadshavare!</span>'
    ],

    endTextHtml:[
      'Du kan läsa mer om detta i Kommunikationspolicyn.'
    ],
    circleText: 'Informerat samtycke innebär att personen förstår hur bilder/information kommer att användas.',
    photoName:'selfie'
  }

  documentationOfChildrenPage1Arb:PhotoText = {

    headline: 'التوثيق للأطفال',
    sectionTextHtml:[
      'إن كرامة وخصوصية الأطفال أمران مهمان في مهرجون بلا حدود - السويد. لضمان ذلك، لدينا قاعدة تقضي بعدم تمكن الفنانين مطلقًا من نشر صور الأطفال التي يمكن التعرف عليها على وسائل التواصل الاجتماعي. علاوة على ذلك، تلتزم منظمة مهرجون بلا حدود – السويد باتباع قانون حماية المعلومات الأوروبي الذي ينص على أنه لا يمكن مشاركة المعلومات الشخصية للأطفال (مثل الصور ومقاطع الفيديو والملفات الصوتية والبيانات الشخصية) إلا إذا حصلنا على موافقة مستنيرة.',
      '',
      'إذا كنت مسؤولاً عن توثيق عملك مع المنظمة، فيجب عليك التأكد من أن جميع الوثائق تحترم حقوق الأطفال في الخصوصية.',
      '',
      'هذا يعني أنه يجب الحصول على الموافقة المستنيرة من الطفل المعني ومن الوصي القانوني أو أي شخص آخر مسؤول عن الطفل في الموقع.',
      '',
      'يرجى ملاحظة أن <span style="font-weight:bold; letter-spacing: .1rem;"> الطفل لا يمكنه </span> منح الموافقة!'
    ],

    endTextHtml:[
      'يمكنك قراءة المزيد عن هذا في سياسة الاتصال '
    ],
    circleText: 'الموافقة المستنيرة تعني أن يفهم الشخص الذي يتم تصويره كيف سيتم استخدام صوره / معلوماته.',
    photoName:'selfie'
  }

}