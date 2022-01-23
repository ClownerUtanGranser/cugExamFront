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
          "Hence we have developed this training for anyone acting as a representative of CWB Sweden. Upon completing the training you will have learned:"
        ],
        points:[
          "- How to act as a good representative of CWB Sweden",
          "- Our core values, policies and guidelines",
          "- How to work preventively to ensure the safety of children",
          "- What to do if you witness a suspected violation or crime against a child"
        ],
        circleText:"If you have any questions after the training you can always turn to your closest point of contact within the organisation.",
        photoName:"photo"
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
      photoName:"photo"
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
    photoName:"photo"
}

    //Working with children

    Safety_guidelines_for_large_crowdsEng:PhotoText = {
      headline: "WORKING WITH CHILDREN",

      headlineText:"Scenario 1: Safety guidelines for large crowds",
      
      sectionText:[
        "An example: ",
        "Marwa is a CWB artist participating in a performance tour. She and her team have made all preparations according to the Security protocol and Artist handbook in order to ensure a safe activity.",
        "The audience consists of around 300 excited children. Halfway into the show the children start expressing their excitement loudly and standing up. As a result, audience members further back cannot see the stage area, and children start fighting each other. Despite trying to calm the situation by using CWB methods, it escalates and there is a clear risk of harm to children. Local staff intervene by smacking and hitting children.",
        "What can Marwa do?"
      ],

      circleText: "Marwa makes a signal to her team to end the show to avoid further escalation and violence. The team withdraws from the area. Afterwards Marwa reaches out to her point of contact for further follow-up with partner organisation. ",
      
      photoName:"photo"
  }

  Safety_guidelines_for_large_crowdsSv:PhotoText = {
    headline: "ATT ARBETA MED BARN",

    headlineText:"Scenario 1: Säkerhetsriktlinjer för stora folksamlingar",
    
    sectionText:[
      "Ett exempel: ",
      "Marwa är en av Clowner utan Gränsers artister och deltar i en föreställningsturné. Hon och hennes team har gjort alla förberedelser i enlighet med säkerhetsprotokollet och artisthandboken.",
      "Publiken består av cirka 300 förväntansfulla barn. Halvvägs in i föreställningen börjar barnen ge uttryck för sina känslor högt och ställer sig upp. Det leder till att publiken längre bak inte kan se föreställningen och barn börjar slåss med varandra. Trots att man försöker lugna situationen genom att använda CUGs metoder eskalerar det och det finns en klar risk för att barn ska komma till skada. Lokal personal ingriper genom att smälla till och slå barn.",
      "Vad kan Marwa göra?"
    ],

    circleText: "Marwa ger tecken till sitt team att avbryta föreställningen för att undvika ytterligare eskalering och våld. Teamet lämnar området. Sedan tar Marwa kontakt med sin kontaktperson för vidare uppföljning med partnerorganisationen.",
    
    photoName:"photo"
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
  
  photoName:"photo"
}

  cwbSwedenChildProtectionPolicyEng:PhotoText = {
    headline: "WORKING WITH CHILDREN",
    headlineText:"CWB Sweden Child Protection policy",
        
        sectionText:[
          "CWB Sweden works to support the emotional wellbeing of vulnerable children and communities. To ensure the safety of all children we have a Child Protection policy. The policy gives guidelines and support to anyone working with us. In short, everyone representing CWB Sweden shall:",
          ""
        ],
        points:[
          "Understand the importance of child protection",
          "Always ensure children’s dignity and respect",
          "In all activities strive to strengthen the psychosocial wellbeing and rights of children",
          "Ensure a safe environment for all children participating in CWB activities",
          "Know their obligations and commitments as a representative of CWB"
        ],
        
        photoName:"photo"
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
          "Säkerställa en trygg miljö för alla barn som deltar i CUGs aktiviteter",
          "Känna till sina skyldigheter och åtaganden som representant för Clowner utan Gränser"
        ],
        
        photoName:"photo"
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
        
        photoName:"photo"
  }

  whatIsViolenceEng:PhotoText = {
    headline: "WORKING WITH CHILDREN",
    headlineText: "What is violence?",

    sectionText: ["CWB Sweden works with vulnerable children and everyone involved in the organisation needs to be aware of the different kinds of violence that children can be exposed to.",
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
      "If you witness, hear of or suspect an act of violence committed during CWB activities, you must report it to your contact person."
    ],
    circleText:"We will now look at two possible scenarios from CWB activities, where you can encounter violence or harm against children.",

    photoName:"photo"

  }

  largeCrowdsAtPerformancesEng:PhotoText = {

    headline: "WORKING WITH CHILDREN",
    headlineText:"Scenario 1: Large crowds at performances",
    sectionText:[
      "Performances are a key activity for CWB. Below are some practical examples of violence against children and risks to their safety that you may encounter when working with large crowds at performances:",
      ""
    ],
    points:[
      "Children are over-excited and start grabbing, pushing and playing rough, either with each other or with CWB artists",
      "Children want to help CWB artists with collecting items after the show and start fighting over these items",
      "Adults from partner organisation try to repress children in the audience by using violence",
      "Children stand up to get a better view of the show, which leads to others not being able to see well and there is a risk of fighting"
    ],
    photoName:"photo"

  }


  actionPlanInCaseOfSuspectedCrimeAgainstChildrenEng:PhotoText = {

    headline: "WORKING WITH CHILDREN",
    headlineText:"Action plan in case of suspected crime against children",
    sectionTextHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> If you suspect, hear of or witness a child being subjected to any violation of our Child Protection policy you have a duty to report it. </span> This is in order to protect children and to ensure that you get the right support.',
      // "",
      " According to the Action Plan you shall:"
    ],
    pointsHtml:[
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Listen openly </span> to what the child says',
      'Allow the child to <span style="font-weight:bold; letter-spacing: .1rem;"> speak freely </span> and only ask questions to establish basic facts',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Assure </span> the child that he/she did the right thing by speaking about what happened ',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Explain </span> to the child that you must report the incident to CWB',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Make an incident report </span> by using the CWB form or by reaching out to your point of contact ',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Assist CWB </span> in taking the matter further with partners or authorities',
      '<span style="font-weight:bold; letter-spacing: .1rem;"> Cooperate  </span>in any ensuing investigation'
    ],
    endTextHtml:[
      'All the steps above are included in the <span style="font-weight:bold; letter-spacing: .1rem;">ACTION PLAN IN CASE OF SUSPECTED CRIME </span>'
    ],
    circleText:"If a suspected crime is reported, the Secretary General and the Board of CWB Sweden will launch an internal or external investigation. If the suspected violation is a criminal offence, CWB will contact the police, after making a security analysis to ensure that no further harm is done to the child. If a crime is committed by a CWB representative, it will have disciplinary consequences and, in serious cases, lead to exclusion. ",

    photoName:"photo"

  }

  //CODE OF CONDUCT

  page1CodeOfConductEng:PhotoText = {
    
    chapter:'CODE',
    headline: "CODE OF CONDUCT",
    headlineText:"",
    sectionTextHtml:[
      'The Code of Conduct is one of the most important documents and forms the basis for a good representative of CWB Sweden.',
       "",
      "As a representative, it is your duty to understand and abide by the the Code of Conduct. ",
      "",
      "In the next session of this course we will go through all of its 10 basic principles."
    ],
    photoName:"photo"   
  }

  page1CodeOfConductSv:PhotoText = {
    
    chapter:'CODE',
    headline: "UPPFÖRANDEKOD",
    headlineText:"",
    sectionTextHtml:[
      'Uppförandekoden är ett av våra viktigaste dokument och utgör grunden för en god representant för Clowner utan Gränser.',
       "",
      "Som CUG-representant är det din skyldighet att förstå och följa uppförandekoden.",
      "",
      "I nästa del av utbildningen kommer vi att gå igenom uppförandekodens 10 grundläggande principer. "
    ],
    photoName:"photo"   
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
    photoName:"photo"   
  }

}