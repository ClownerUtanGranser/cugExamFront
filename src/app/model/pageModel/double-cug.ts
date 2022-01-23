export interface DoubleCug{

    headline:string,
    subHeadline?:string,
    ingressHtml?:string, 
    paragraph:{
        direction?:string,
        subTitle?:string, 
        text:string[],
        textHtml?:string
    }[]
}

export class DoubleCugObj{

    introductionPurposeEng:DoubleCug = {

        headline: "Introduction",
        paragraph:[
            {
            subTitle:"Duration",
            direction:'L',
            text:[
                "The course will take 45 minutes to 1 hour. You can retake the course as many times as you want. When you feel ready, you can take the final test. ",
                "As a part of our quality assurance efforts, the course is mandatory for everyone representing CWB Sweden."
            ]},
        {

            subTitle:"Purpose",
            direction:'R',
            text:[
            "The purpose of this training is to provide guidance on how to act as a representative of our organisation.",
            "Specifically, we will focus on how to protect children during our work and how to recognise and respond to any risk of harm of children. ",
            "The first part of the training contains information about CWB policies, guidelines and values. The second part is a test to make sure that you have understood the information."
            ]}
        ]

    }


    introductionPurposeSv:DoubleCug = {

        headline: "Scenario 1: Safety guidelines for large crowds",
        paragraph:[
            {
            subTitle:"Varaktighet",
            direction:'L',
            text:[
                "Utbildningen tar 45-60 minuter. Du kan ta om den så många gånger du vill. När du känner dig redo gör du testet.",
                "Som en del av vårt kvalitetsarbete är kursen obligatorisk för alla som representerar Clowner utan Gränser Sverige."
            ]},
        {

            subTitle:"Syfte",
            direction:'R',
            text:[
                "Syftet med utbildningen är att ge vägledning i hur man är en bra representant för Clowner utan Gränser.",
                "Vi kommer att fokusera på hur vi skyddar barn i vårt arbete och hur vi känner igen och reagerar på risker för att barn skadas.",
                "Den första delen av utbildningen innehåller information om CUGs policies, riktlinjer och värderingar. Den andra delen är ett test för att säkerställa att du har förstått informationen."
            ]}
        ]

    }


    introductionPurposeArb:DoubleCug = {

        headline: "مقدمة",
        paragraph:[
            {
            subTitle:"المدة",
            direction:'L',
            text:[
                "المدة المقدرة للدورة تتراوح من 45 دقيقة الى ساعة تقريبا. يمكنك إعادة أخذ الدورة أكثر من مرة كما تريد. وعندما تشعر أنك أصبحت جاهزا، يمكنك التقدم لإجراء الاختبار النهائي.",
                "كجزء من ضمان ضبط الجودة لدينا، فإن هذه الدورة إلزامية للعمل مع مهرجون بلا حدود - السويد."
            ]},
        {

            subTitle:"الغرض",
            direction:'R',
            text:[
            "إن الغرض من هذه الدورة هو تزويد الممثلين العاملين في  منظمة مهرجون بلا حدود - السويد بالتوجيه المناسب حول كيفية التصرف كممثلين لمنظمتنا.",
            "سوف نركز بالتحديد على كيفية حماية الأطفال أثناء عملنا، وكيفية التعرف على الأخطار المحتملة التي قد تلحق الأذى بالأطفال، والاستجابة لها.",
            "يحتوي الجزء الأول من التدريب على معلومات حول سياسات وإرشادات وقيم  منظمة مهرجون بلا حدود، والجزء الثاني هو اختبار للتأكد من فهمكم لهذه المعلومات."
            ]}
        ]

    }

    scenario1SafetyGuidelinesForLargeCrowdsEng:DoubleCug = {

        headline: "WORKING WITH CHILDREN",
        subHeadline: "Scenario 1: Safety guidelines for large crowds",
        ingressHtml:'<p> The guidelines below have been developed as part of CWB’s long-term work in difficult settings. These are examples, more can be found in the in the <span style="font-weight:bold; letter-spacing: .1rem;"> Artist handbook </span> and <span style="font-weight:bold; letter-spacing: .1rem;"> Security protocol. </span> If you are involved in performances, please ensure you read these resources in full. </p>',
        paragraph:[
            {
                direction:'L',
                text:[],
                textHtml: "Analyse and prepare the activity: Where will you be performing? Is the space open or closed? Who will be in the audience? How many? Which ages? Are there any obvious risks? What support do you have or need from the partner organisation?"
            },
            {
                text:[],    
                textHtml: '<span style="font-weight:bold; letter-spacing: .1rem;">Prepare a plan </span> for how to pause or end the performance if it becomes necessary. Once on site, determine how you will leave BEFORE you even set up.',
                    
            },
            {
                text:[],
                textHtml: 'Make sure that the partner organization has designated people in charge of safety and that these are on site before the activity begins. '
                    
            },
            {
                text:[],
                direction:'L',
                textHtml: '<span style="font-weight:bold; letter-spacing: .1rem;"> Inform partner organisation </span> staff before the performance about their role as crowd control, their responsibility to not use violence and how CWB operates.'
                
            },
            {
                text: [],
                direction:'L',
                textHtml: '<span style="font-weight:bold; letter-spacing: .1rem;"> Make sure you follow the instructions for safe seating of audience </span> (as found in the Artist handbook) Inform partner organisation staff before the performance about their role as crowd control, their responsibility to not use violence and how CWB operates.'
                
            },
            {
                text: [],
                textHtml: 'Clearly <span style="font-weight:bold; letter-spacing: .1rem;"> define the stage </span> using a rope or similar'
            },
            {
                text:[],
                direction:'L',
                textHtml:'Choose a <span style="font-weight:bold; letter-spacing: .1rem;"> limited space for the scene, preferably with a natural background such as a house wall'
                
            },
            {
                text:[],
                textHtml:'<span style="font-weight:bold; letter-spacing: .1rem;">Never hand out gifts or sweets </span> during Clowns without Borders activities'
                
            }
            
        ]

    }

    scenario1SafetyGuidelinesForLargeCrowdsSv:DoubleCug = {

        headline: "ATT ARBETA MED BARN",
        subHeadline: "Scenario 1: Säkerhetsriktlinjer för stora folksamlingar",
        ingressHtml:'Riktlinjerna har tagits fram som en del i Clowner utan Gränsers långsiktiga arbete i svåra miljöer. Här nedanför finns några exempel, du hittar fler i <span style="font-weight:bold; letter-spacing: .1rem;"> artisthandboken </span> och i vår <span style="font-weight:bold; letter-spacing: .1rem;"> säkerhetspolicy </span>. Om du arbetar med föreställningar, se till att du läser dessa dokument i sin helhet.',
        paragraph:[
            {
                direction:'L',
                text:[],
                textHtml: '<span style="font-weight:bold; letter-spacing: .1rem;">Analysera och förbered </span> aktiviteten: Var kommer du att uppträda? Är utrymmet öppet eller stängt? Vilka kommer att finnas i publiken? Hur många? Vilka åldrar? Finns det några uppenbara risker? Vilket stöd har du/behöver du från samarbetsorganisationen?'
            },
            {
                text:[],    
                textHtml: '<span style="font-weight:bold; letter-spacing: .1rem;">Förbered en plan </span> för att pausa och avbryta föreställningen om det skulle bli nödvändigt. Väl på plats, bestäm hur du ska lämna området redan INNAN du ställer iordning inför föreställningen.',
                    
            },
            {
                text:[],
                textHtml: 'Se till att det finns <span style="font-weight:bold; letter-spacing: .1rem;"> säkerhetsansvariga </span> från samarbetsorganisationen på plats innan aktiviteten börjar.'
                    
            },
            {
                text:[],
                direction:'L',
                textHtml: '<span style="font-weight:bold; letter-spacing: .1rem;"> Informera partnerorganisationens personal </span> innan föreställningen om deras roll i publikhanteringen, att våld inte får förekomma och om hur Clowner utan Gränser arbetar.'
                
            },
            {
                text: [],
                direction:'L',
                textHtml: 'Se till att du följer <span style="font-weight:bold; letter-spacing: .1rem;"> instruktionerna för säker placering av publiken </span> (som finns i artisthandboken).'
                
            },
            {
                text: [],
                textHtml: '<span style="font-weight:bold; letter-spacing: .1rem;"> Märk tydligt ut scenen </span> med hjälp av ett rep eller liknande.'
            },
            {
                text:[],
                direction:'L',
                textHtml:'Välj ett <span style="font-weight:bold; letter-spacing: .1rem;"> begränsat föreställningsområde, </span> gärna med en naturlig bakgrund som t.ex. en husvägg.'
                
            },
            {
                text:[],
                textHtml:'<span style="font-weight:bold; letter-spacing: .1rem;">Dela aldrig ut presenter eller sötsaker </span> under Clowner utan Gränsers aktiviteter.'
                
            }
            
        ]

    }


    scenario1SafetyGuidelinesForLargeCrowdsArb:DoubleCug = {

        headline: "العمل مع الأطفال",
        subHeadline: "السيناريو 1: إرشادات السلامة للحشود الكبيرة",
        ingressHtml:'تم تطوير الإرشادات الواردة أدناه كجزء من عمل منظمة مهرجون بلا حدود طويل المدى مع العروض في البيئات الصعبة. وهذه مجرد أمثلة فقط، ويمكن العثور على المزيد من الارشادات في <span style="font-weight:bolder; letter-spacing: .1rem;"> دليل الفنان </span> و <span style="font-weight:bold; letter-spacing: .1rem;"> بروتوكول الأمان </span>. إذا كنت تقوم بالعروض، فيرجى التأكد من قراءة هذه المصادر كاملة.',
        paragraph:[
            {
                direction:'L',
                text:[],
                textHtml: "تحليل وإعداد النشاط: أين ستعرض؟ هل المساحة مفتوحة أم مغلقة؟ من هوالجمهور؟ كم العدد؟ ما هي الأعمار؟ هل هناك أي مخاطر واضحة؟ ما هو الدعم الذي ستحصل عليه أو تحتاجه من المنظمة الشريكة؟"
            },
            {
                text:[],    
                textHtml: ' <span style="font-weight:bold; letter-spacing: .1rem;"> قم بإعداد خطة </span> لإيقاف العرض مؤقتًا، ثم إيقافه نهائيا إذا لزم الأمر. فور الوصول إلى الموقع، حدد كيف ستغادر قبل البدء لإعداد',
                    
            },
            {
                text:[],
                textHtml: '  تأكد من وجود  <span style="font-weight:bold; letter-spacing: .1rem;"> ضباط سلامة </span> من المنظمة الشريكة في الموقع قبل بدء النشاط '
                    
            },
            {
                text:[],
                direction:'L',
                textHtml: ' أبلغ موظفي  <span style="font-weight:bold; letter-spacing: .1rem;"> المنظمة الشريكة </span> قبل العرض عن دورهم في السيطرة على الحشود، وعدم استخدام العنف، وعن كيفية عمل منظمة مهرجون بلا حدود'
                
            },
            {
                text: [],
                direction:'L',
                textHtml: '  <span style="font-weight:bold; letter-spacing: .1rem;"> تأكد من اتباع التعليمات الخاصة بالمقاعد الآمنة للجمهور (كما هي في كتيب دليل الفنان) </span>'
                
            },
            {
                text: [],
                textHtml: ' <span style="font-weight:bold; letter-spacing: .1rem;">  حدد مسرح العرض </span> بوضوح باستخدام حبل أو أي شيء من هذا القبيل'
            },
            {
                text:[],
                direction:'L',
                textHtml:' <span style="font-weight:bold; letter-spacing: .1rem;">  اختر ملعبًا محددًا، </span> ويفضل أن يكون له خلفية طبيعية، مثل جدار منزل'
                
            },
            {
                text:[],
                textHtml:' <span style="font-weight:bold; letter-spacing: .1rem;"> لا توزع الهدايا أو الحلوى </span> نهائيا خلال أنشطة منظمة مهرجون بلا حدود'          
            }
            
        ]

    }


    scenario2LongtermWorkWithChildrenEng:DoubleCug = {
        headline:"WORKING WITH CHILDREN",
        subHeadline: "Scenario 2: Long-term work with children",
        ingressHtml:'The guidelines below are intended to help you integrate preventive methods when doing long-term activities with children.',
        paragraph:[
            {
                text:[],
                textHtml:'Complete the <span style="font-weight:bold; letter-spacing: .1rem;"> safety checklist: </span> Any potential dangers? Is there enough space for the amount of expected participants? Are there cultural/social elements that may make participants unsafe? '
                
            },
            {
                text:[],
                textHtml:'<span style="font-weight:bold; letter-spacing: .1rem;"> Set rules </span> for the sessions and make sure that the group agrees to follow them. Continuously remind the group of these rules. '
                
            },
            {
                text:[],
                textHtml:'<span style="font-weight:bold; letter-spacing: .1rem;"> Use inclusive games </span> and exercises to avoid bullying. '
            },
            {
                text:[],
                textHtml:'Keep a <span style="font-weight:bold; letter-spacing: .1rem;"> list of organisations </span> specialised in child protection and psychosocial support.'
            },
            {
                text:[],
                textHtml:'<span style="font-weight:bold; letter-spacing: .1rem;"> Be aware of your physical place and presence </span> in the space as to include and see all participants. <span style="font-weight:bold; letter-spacing: .1rem;"> Treat all participants equally </span>! '
            },
            {
                text:[],
                textHtml:'<span style="font-weight:bold; letter-spacing: .1rem;"> Never hand out gifts </span> or sweets during Clowns without Borders activities.'
            }
        ]

    }

}