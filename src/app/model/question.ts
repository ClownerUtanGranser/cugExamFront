export interface Question{

    id:number
    questionNumber:number | undefined
    questionText:string;
    answres:string[];
    selectedAnswre:number | undefined;
    lang:string;
    correctResponse?:string
    
}

export class QuestionList{

    QuestionListEng:Question[] = [
        {
            id:1,
            questionNumber: 1,
            questionText: "1. If you suspect a case of violence against children, you should?",
            lang:'ENG',
            answres: [
                "Act as if nothing happened as it is not your responsibility",
                "Call or email the Secretary - General and explain what happened",
                "Follow the Action Plan in case of suspected crime/violation (Listen to the child, let the child speak freely, fill in the incident report, assure the child, assist and cooperate in the investigation)"
            ],
            selectedAnswre:undefined
        },
        {
            id:2,
            questionNumber: 2,
            questionText: "2.    Which of the following statements is correct?",
            lang:'ENG',
            answres: [
                "Children shall be protected only from physical violence",
                "The work of Clowns Without Borders work is based on the UN Convention on the Rights of the Child",
                "There are only two forms of violence: physical violence and sexual violence"
            ],
            selectedAnswre:undefined
        },
        {
            id:3,
            questionNumber: 3,
            questionText: "3.    If a child communicates to you that they have been subjected to violence, you should:",
            lang:'ENG',
            answres: [
                "Do nothing, as this is not my responsibility.",
                "Follow the Action Plan in case of suspected crime ",
                "Try to directly confront the perpetrator of the abuse"
            ],
            selectedAnswre:undefined
        },
        {
            id:4,
            questionNumber: 4,
            questionText: "4. An adult from a partner organization hits a child because they are loud and cannot sit still during a workshop. Do you:",
            lang:'ENG',
            answres: [
                "Scold the person to let them know that they are not allowed to hit children.",
                "Politely tell the person that you have control over the situation, and that it’s ok if the child is loud and active. Follow up with closest point of contact after the activity.",
                "Leave and act as nothing happened"
            ],
            selectedAnswre:undefined
        },
        {
            id:5,
            questionNumber: 5,
            questionText: "5. Children are over-enthusiastic and start grabbing, pushing and playing too rough with Clowns Without Borders' artists. Do you:",
            lang:'ENG',
            answres: [
                "Shout at the children to make it clear that this is not acceptable!",
                "Together with a colleague show children how to go about it in a playful and appropriate way",
                "Try to run away from the situation as soon as you can"
            ],
            selectedAnswre:undefined
        },
        {
            id:6,
            questionNumber: 6,
            questionText: "6. Which of the following statements is correct?",
            lang:'ENG',
            answres: [
                "I am never allowed to ask about who and how many audience will attend the show, as this is culturally sensitive.",
                "Seating is not important, the most important is that the show goes as planned and artiats get to perform. ",
                "When working with children, preventive measures are key. Preventive measures include careful preparations, risk analysis and clear communication. "
            ],
            selectedAnswre:undefined
        },
        {
            id:7,
            questionNumber: 7,
            questionText: "7. Which of the following statements is correct?",
            lang:'ENG',
            answres: [
                "Anyone reporting in line with the Whistleblower policy will be announced and his/her name will be mentioned when confronting the accused.",
                "The Whistleblower policy aims to report acts of violence against children committed by partner organisations. ",
                "The Whistleblower policy aims to report irregularities committed by representatives of Clowns without Borders or partner organisations. Anyone who reports is anonymous."
            ],
            selectedAnswre:undefined
        },
        {
            id:8,
            questionNumber: 8,
            questionText: "8. An adolescent participant in a workshop is very helpful, polite and always makes sure to stay on after the workshop to help you (the artist) with tidying up the training space and carrying materials. Do you:",
            lang:'ENG',
            answres: [
                "Say thank you to the participant",
                "Choose this person to show exercises with and/or to be the first in line as a way of showing appreciation.",
                "Buy sweets or other symbolic gifts as a way of showing appreciation."
            ],
            selectedAnswre:undefined
        },
        {
            id:9,
            questionNumber: 9,
            questionText: "9. Which of the following statement is correct?",
            lang:'ENG',
            answres: [
                "The “two adults rule” means that you should always try to include a colleague when engaging with children so that no adult representing Clowns Without Borders is ever alone with a child.",
                "The “two adults rule” means that there can be a maximum of two adults working with a group of children",
                "The “two adults rule” means that it's much more fun when two adults are performing together"
            ],
            selectedAnswre:undefined
        },
        {
            id:10,
            questionNumber: 10,
            questionText: "10. During a workshop you see one of your colleagues from Clowns Without Borders struggling with a child. The child grabs your colleague’s clothes and plays too roughly. After a while, your colleague loses their patience and pushes the child violently. Do you:",
            lang:'ENG',
            answres: [
                "Explain to your colleague that they cannot behave like that and leave it there",
                "Pretend that you have not seen anything; after all you know your colleague to be a good person and they are your friend.",
                "Immediately report the incident to your closest point of contact."
            ],
            selectedAnswre:undefined
        },
        {
            id:11,
            questionNumber: 11,
            questionText: "11. Which of the following statement is correct?",
            lang:'ENG',
            answres: [
                "As a representative of Clowns Without Borders you should never spend much time alone with a child",
                "As a representative of Clowns Without Borders it’s ok to occasionally and for shorter times play alone in a closed room with a child.",
                "As a representative of Clowns Without Borders i's ok to spend a long time in a closed room playing with a child if they explicitly asks for it"
            ],
            selectedAnswre:undefined
        },
        {
            id:12,
            questionNumber: 12,
            questionText: "12. Which of the following statement is correct?",
            lang:'ENG',
            answres: [
                "If families of children involved in your activities want to show appreciation in the form of a gift, you can accept it if the value is symbolic.",
                "If families of children involved in your activities want to show appreciation in the form of a gift, you can accept it whatever the price is.",
                "If families of children involved in your activities want to show appreciation in the form of a gift, you should never accept it."
            ],
            selectedAnswre:undefined
        }

    ]

    QuestionListSv:Question[] = [
        {
            id:1001,
            questionNumber: 1,
            questionText: "1. Om du misstänker att en kränkning eller brottslig handling mot barn har skett bör du:",
            lang:'SV',
            answres: [
                "A. Agera som om ingenting hänt eftersom det inte är ditt ansvar",
                "B. Ringa eller mejla generalsekreteraren och förklara vad som hänt",
                "C. Följa Handlingsplanen vid misstänkt brott/kränkning (lyssna på barnet, låt barnet tala fritt, gör en incidentrapport, försäkra barnet om att det gjort rätt som berättat, bistå och samarbeta i utredningen)"
            ],
            selectedAnswre:undefined
        },
        {
            id:1002,
            questionNumber: 2,
            questionText: "2. Vilket av följande påståenden är korrekt?",
            lang:'SV',
            answres: [
                "A. Barn ska endast skyddas från fysiskt våld",
                "B. Clowner utan Gränsers arbete baseras på FN:s konvention om barnets rättigheter",
                "C. Det finns bara två former av våld: fysiskt våld och sexuellt våld"
            ],
            selectedAnswre:undefined
        },
        {
            id:1003,
            questionNumber: 3,
            questionText: "3. Om ett barn berättar för dig att hen har blivit utsatt för våld ska du:",
            lang:'SV',
            answres: [
                "A. Inte göra någonting, eftersom det inte är mitt ansvar",
                "B. Följa Handlingsplanen vid misstänkt brott eller kränkning",
                "C. Försöka att direkt konfrontera den som begått övergreppet"
            ],
            selectedAnswre:undefined
        },
        {
            id:1004,
            questionNumber: 4,
            questionText: "4. En vuxen från en samarbetsorganisation slår ett barn för att barnet är högljutt och inte kan sitta still under en workshop. Vad gör du?",
            lang:'SV',
            answres: [
                "A. Skriker åt personen att hen inte får slå barn",
                "B. Berättar på ett lugnt sätt för personen att du har kontroll över situationen och att det är okej att barnet är högljutt och aktivt, samt följer upp med din närmaste kontaktperson efter aktiviteten",
                "C. Låtsas som om ingenting har hänt"
            ],
            selectedAnswre:undefined
        },
        {
            id:1005,
            questionNumber: 5,
            questionText: "5. 	Barn är överexalterade och börjar ta tag i, knuffa och leka för våldsamt med Clowner utan Gränsers artister. Vad gör du?",
            lang:'SV',
            answres: [
                "A. Skriker åt barnen för att göra det tydligt att deras beteende inte är acceptabelt",
                "B. Visar, tillsammans med en kollega, barnen hur man kan agera på ett lekfullt och lämpligt sätt",
                "C. Försöker att komma bort från situationen så fort som möjligt"
            ],
            selectedAnswre:undefined
        },
        {
            id:1006,
            questionNumber: 6,
            questionText: "6. Vilket av följande påståenden är korrekt?",
            lang:'SV',
            answres: [
                "A. Jag får aldrig fråga om vilka och hur många åskådare som kommer att delta i föreställningen, eftersom detta kan vara kulturellt känsligt",
                "B. Det är inte viktigt hur publiken sitter, det viktigaste är att föreställningen fortsätter som planerat och artisterna får uppträda",
                "C. När man arbetar med barn är förebyggande åtgärder avgörande. Förebyggande åtgärder inkluderar noggranna förberedelser, riskanalys och tydlig kommunikation"
            ],
            selectedAnswre:undefined
        },
        {
            id:1007,
            questionNumber: 7,
            questionText: "7. Vilket av följande påståenden är korrekt?",
            lang:'SV',
            answres: [
                "A. Alla som rapporterar i enlighet med Visselblåsarpolicyn offentliggörs och deras namn nämns när de anklagade konfronteras",
                "B. Visselblåsarpolicyn syftar till att rapportera våldshandlingar mot barn som begås av partnerorganisationer",
                "C. Visselblåsarpolicyn syftar till att rapportera oegentligheter som begås av företrädare för Clowner utan Gränser eller partnerorganisationer. Den som anmäler är anonym"
            ],
            selectedAnswre:undefined
        },
        {
            id:1008,
            questionNumber: 8,
            questionText: "8. En ung deltagare i en workshop är mycket hjälpsam, artig och ser alltid till att stanna kvar efter workshopen för att hjälpa dig med att ställa i ordning lokalen och att bära material. Vad gör du?",
            lang:'SV',
            answres: [
                "A. Säger tack till deltagaren",
                "B. Väljer ut den här personen att visa övningar med och/eller att stå först i kön som ett sätt att visa uppskattning",
                "C. Köper godis eller annan symbolisk gåva som ett sätt att visa uppskattning"
            ],
            selectedAnswre:undefined
        },
        {
            id:1009,
            questionNumber: 9,
            questionText: "9. Vilket av följande påståenden är korrekt?",
            lang:'SV',
            answres: [
                "Regeln om två vuxna innebär att du alltid ska försöka inkludera en kollega när du umgås med barn så att ingen vuxen som representerar Clowner utan Gränser någonsin är ensam med ett barn",
                "Regeln om två vuxna innebär att det kan vara högst två vuxna som arbetar med en grupp barn",
                "Regeln om två vuxna betyder att det är mycket roligare när två vuxna uppträder tillsammans"
            ],
            selectedAnswre:undefined
        },
        {
            id:1010,
            questionNumber: 10,
            questionText: "Under en workshop ser du att en av dina kollegor från Clowner utan Gränser har det kämpigt med ett av de deltagande barnen. Barnet tar tag i din kollegas kläder och leker för våldsamt. Efter ett tag tappar din kollega tålamodet och knuffar barnet hårt. Vad gör du?",
            lang:'SV',
            answres: [
                "A. Förklarar för din kollega att det inte är ett acceptabelt beteende och låter det vara sedan",
                "B. Låtsas att du inte har sett någonting; trots allt vet du att din kollega är en bra person och han/hon är din vän",
                "C. Rapporterar omedelbart händelsen till din närmaste kontaktperson"
            ],
            selectedAnswre:undefined
        },
        {
            id:1011,
            questionNumber: 11,
            questionText: "11. Vilket av följande påståenden är korrekt?",
            lang:'SV',
            answres: [
                "A. Som representant för Clowner utan Gränser bör du aldrig tillbringa tid ensam med ett barn",
                "B. Som representant för Clowner utan Gränser är det okej att ibland och under kortare perioder leka ensam i ett stängt rum med ett barn",
                "C. Som representant för Clowner utan Gränser är det okej att tillbringa lång tid i ett stängt rum och leka med ett barn om hon/han uttryckligen ber om det"
            ],
            selectedAnswre:undefined
        },
        {
            id:1012,
            questionNumber: 12,
            questionText: "12. Vilket av följande påståenden är korrekt?",
            lang:'SV',
            answres: [
                "A. Om barnfamiljer som är involverade i Clowner utan Gränsers aktiviteter vill visa sin uppskattning i form av en gåva, kan du ta emot den om värdet är symboliskt",
                "B. Om barnfamiljer som är involverade i Clowner utan Gränsers aktiviteter vill visa sin uppskattning i form av en gåva, kan du ta emot den oavsett värdet",
                "C. Om barnfamiljer som är involverade i Clowner utan Gränsers aktiviteter vill visa sin uppskattning i form av en gåva, bör du aldrig ta emot den"
            ],
            selectedAnswre:undefined
        }

    ]

    QuestionListArb:Question[] = [
        {
            id:2001,
            questionNumber: 1,
            questionText: ".1 إذا كنت تشك بوجود حالة جنائية ضد أطفال، يجب عليك:",
            lang:'AR',
            answres: [
                "أ.   التصرف وكأن شيئًا لم يحدث، لأن هذا ليس من مسؤوليتك",
                "ب. الاتصال أو إرسال بريد إلكتروني إلى الأمين العام وشرح ما حدث",
                "ج. اتباع خطة العمل الخاصة بحالات الاشتباه بجريمة (استمع إلى الطفل، ودع الطفل يتكلم بحرية، واملأ تقرير الحادث، وطمئن الطفل، وساعد وتعاون في التحقيق "
            ],
            selectedAnswre:undefined
        },
        {
            id:2002,
            questionNumber: 2,
            questionText: "2.أي من العبارات التالية صحيحة؟",
            lang:'AR',
            answres: [
                "أ. يجب حماية الأطفال من العنف الجسدي فقط",
                "ب. يستند عمل منظمة مهرجون بلا حدود إلى اتفاقية الأمم المتحدة لحقوق الطفل",
                "ج- هناك نوعان فقط من العنف: العنف الجسدي، والعنف الجنسي"
            ],
            selectedAnswre:undefined
        },
        {
            id:2003,
            questionNumber: 3,
            questionText: ".3 إذا أبلغك طفل بأنه تعرض للعنف، فيجب عليك:",
            lang:'AR',
            answres: [
                "أ.  ألا تفعل شيئا، فهذه ليست مسؤوليتك",
                "ب. اتبع خطة العمل في حالة الاشتباه في جريمة",
                "ج. محاولة مواجهة مرتكب الإساءة بشكل مباشر"
            ],
            selectedAnswre:undefined
        },
        {
            id:2004,
            questionNumber: 4,
            questionText: "4. شخص بالغ من منظمة شريكة يضرب طفلًا لأن صوته مرتفع، ولا يمكنه الجلوس أثناء ورشة العمل. ماذا تفعل:",
            lang:'AR',
            answres: [
                "أ. تصرخ على الشخص وتخبره انه لا يسمح بضرب الأطفالل",
                "ب. أخبر الشخص بأدب أنك تسيطر على الموقف، ولا بأس إذا كان الطفل صاخبًا ونشطًا، ثم تابع مع أقرب نقطة اتصال بعد ذلك",
                "ج. دعك من الأمر وتصرف كما لم يحدث شيء"
            ],
            selectedAnswre:undefined
        },
        {
            id:2005,
            questionNumber: 5,
            questionText: "5. الأطفال متحمسون أكثر من اللازم ويبدأون في الإمساك ببعضهم، والدفع، واللعب بقسوة مع فنانين المنظمة. ماذا تفعل:",
            lang:'AR',
            answres: [
                "أ.  أصرخ في الأطفال لأوضح لهم أن هذا تصرف غير مناسب.",
                "ب. أوضح للأطفال بمساعدة أحد الزملاء كيفية القيام بذلك بطريقة مرحة ومناسبة",
                "ج. أحاول الهروب من الموقف بأسرع ما يمكن."
            ],
            selectedAnswre:undefined
        },
        {
            id:2006,
            questionNumber: 6,
            questionText: " 6.  أي العبارات التالية صحيحة؟",
            lang:'AR',
            answres: [
                "أ. لا يُسمح لي مطلقًا بالسؤال عن طبيعة وعدد الجماهير التي ستحضر العرض، لأن هذا أمر حساس ثقافيًا.",
                "ب. ترتيب الجلوس ليس مهمًا، الأهم هو أن يسير العرض كما هو مخطط له، وأن يقوم الفنانون بأداء أدوارهم.",
                "ج. الاجراءات الوقائية هي أساس عمل المنظمة مع الأطفال. وذلك من خلال الاستعدادات الجيدة، وتحليل المخاطر، والتواصل الواضح."
            ],
            selectedAnswre:undefined
        },
        {
            id:2007,
            questionNumber: 7,
            questionText: ". 7  أي العبارات التالية صحيحة؟",
            lang:'AR',
            answres: [
                "أ. يتم الإعلان عن الشخص الذي يقوم بالإبلاغ وفق سياسة الإبلاغ عن المخالفات ويتم استخدام اسمه / اسمها لمواجهة المتهم.",
                "ب.  تهدف سياسة الإبلاغ عن المخالفات إلى الإبلاغ عن أعمال العنف ضد الأطفال التي ترتكبها المنظمات الشريكة.",
                "ج. تهدف سياسة الإبلاغ عن المخالفات إلى الإبلاغ عن المخالفات التي ترتكبها كل من المنظمات الشريكة وممثلي منظمة مهرجون بلا حدود. ولا يتم الكشف عن هوية الشخص الذي قام بالإبلاغ."
            ],
            selectedAnswre:undefined
        },
        {
            id:2008,
            questionNumber: 8,
            questionText: "8.  هناك مشارك في ورشة عمل مهذب ويحب المساعدة، ويحرص دائمًا على البقاء بعد نهاية ورشة العمل لمساعدتك (كفنان) على ترتيب مساحة التدريب وحمل المواد. ماذا تفعل معه:",
            lang:'AR',
            answres: [
                "أ. تشكره على مساعدته",
                "ب. تختار هذا الشخص للمشاركة في التدريب و/ أو ليقف في أول الصف كطريقة لإظهار تقديرك له",
                "ج- تشتري له الحلوى أو الهدايا الرمزية الأخرى كطريقة لإظهار التقدير"
            ],
            selectedAnswre:undefined
        },
        {
            id:2009,
            questionNumber: 9,
            questionText: "9 أي العبارات التالية صحيحة؟",
            lang:'AR',
            answres: [
                'أ. تعني "قاعدة شخصين بالغين" أنه يجب أن تحاول دائمًا أن تكون مع زميل عند الاتصال بالأطفال حتى لا يكون أي شخص بالغ من المنظمة بمفرده مع طفل واحد ',
                'ب. تعني "قاعدة شخصين بالغين" أنه يمكن أن يكون هناك شخصان بالغان كحد أقصى يعملان مع مجموعة من الأطفال',
                'ج. تعني "قاعدة شخصين بالغين" أن الأمر أكثر متعة عندما يؤدي شخصان معًا'
            ],
            selectedAnswre:undefined
        },
        {
            id:2010,
            questionNumber: 10,
            questionText: "10 أثناء ورشة عمل، ترى أحد زملائك من منظمة مهرجون بلا حدود يواجه مشكلة مع طفل. يمسك الطفل بملابس زميلك ويلعب بعنف. بعد فترة يفقد زميلك صبره ويدفع الطفل بعنف. ماذا تفعل:",
            lang:'AR',
            answres: [
                "أ. تشرح لزميلك فقط أنه لا يمكنه التصرف مع الطفل على هذا النحو ",
                "ب. تظاهر بأنك لم تر شيئًا، لأنك تعلم أن زميلك شخص جيد وصديق",
                "ج. تبلغ عن الواقعة فورًا إلى أقرب نقطة اتصال لديك"
            ],
            selectedAnswre:undefined
        },
        {
            id:2011,
            questionNumber: 11,
            questionText: "11. أي العبارات التالية صحيحة؟",
            lang:'AR',
            answres: [
                "أ.  بصفتك ممثلاً لمنظمة مهرجون بلا حدود، يجب ألا تقضي الكثير من الوقت بمفردك مع طفل وأن تنعزل معه",
                "ب. بصفتك ممثلاً لمنظمة مهرجون بلا حدود، من الجيد أحيانًا اللعب بمفردك في غرفة مغلقة مع طفل، إذا كان ذلك لفترة قصيرة.",
                "ج. بصفتك ممثلاً لمنظمة مهرجون بلا حدود، لا بأس من قضاء وقت طويل في غرفة مغلقة واللعب مع طفل إذا طلب ذلك صراحةً."
            ],
            selectedAnswre:undefined
        },
        {
            id:2012,
            questionNumber: 12,
            questionText: "12. أي من العبارات التالية صحيحة؟",
            lang:'AR',
            answres: [
                "أ.  إذا كانت عائلات الأطفال الذين كنت تعمل معهم ترغب في إظهار تقديرها لك على شكل هدية، فيمكنك قبولها إذا كانت قيمتها رمزية.",
                "ب.  إذا كانت عائلات الأطفال الذين كنت تعمل معهم ترغب في إظهار تقديرها لك على شكل هدية، فيمكنك قبولها مهما كانت قيمتها. ",
                "ج.  إذا كانت عائلات الأطفال الذين كنت تعمل معهم ترغب في إظهار تقديرها لك في شكل هدية، فلا يجب أن تقبلها أبدًا."
            ],
            selectedAnswre:undefined
        }

    ]
}