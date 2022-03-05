export interface FlipingCards{

    chapter?:string,
    headline:string,
    subHeading?:string,
    sectionTextHtml?:string[],
    paragraf?:string[],
    cards:{
        cardSize?:string,
        frontQuestion:string,
        backexplenation: string[],
        turned:boolean,
        empWord?:string[],
        chart?:string,
        correct?:string
    }[]
}

export class FlipingCardsObj{

    workingWithChildrenTheFoundationOfCwbEng:FlipingCards = {

        headline:"WORKING WITH CHILDREN",
        subHeading:"The foundation of CWB Sweden’s work",
        
        paragraf:[
            "The work of Clowns without Borders is based on the 1989 UN Convention on the Rights of the Child.",
            "Click on the cards!"
        ],
        cards:[{
                    frontQuestion: "CHILD",
                    cardSize:'S',
                    turned:false,
                    backexplenation:[
                        "A child is any human being under the age of eighteen"
                    ],
                    empWord:[
                        "child"
                    ]
                },
                {
                    frontQuestion: "RIGHT TO PLAY",
                    cardSize:'M',
                    turned:false,
                    backexplenation:[
                        "The right of the child to rest and leisure, to engage in play and recreational activities appropriate to their age and to participate freely in cultural life and the arts"
                    ],
                    empWord:[
                        "leisure", "play", "cultural life", "arts"
                    ],
                    chart:"Art 31, UN Convention of the Rights of the Child"
                },
                {
                    frontQuestion: "RIGHT TO BE PROTECTED FROM VIOLENCE",
                    cardSize:'L',
                    turned:false,
                    backexplenation:[
                        "Children shall be protected from all forms of physical or mental violence, injury or abuse, neglect or negligent treatment, maltreatment or exploitation, including sexual abuse."
                    ],
                    empWord:[
                        "protected"
                    ],
                    chart: "Art 19, UN Convention of the Rights of the Child"
        
                }
            ]
        }

    workingWithChildrenTheFoundationOfCwbSv:FlipingCards = {

        headline:"ATT ARBETA MED BARN",
        subHeading:"Grunden för Clowner utan Gränsers verksamhet",
        paragraf:[
            "Clowner utan Gränsers arbete bygger på FN:s konvention om barnets rättigheter från 1989.",
            " Klicka på korten!"
        ],
        cards:[{
            frontQuestion: "BARN",
            cardSize:'S',
            turned:false,
            backexplenation:[
                "Ett barn är en person under arton år"
            ],
            empWord:[
                "barn"
            ]
            },
            {
                frontQuestion: "RÄTTEN TILL LEK",
                cardSize:'M',
                turned:false,
                backexplenation:[
                    "Barnets rätt till vila och fritid, att delta i lek och rekreation som är anpassad till barnets ålder och att fritt delta i kulturlivet och i konstnärlig verksamhet"
                ],
                empWord:[
                    ""
                ],
                chart:"Artikel 31, FN:s konvention om barnets rättigheter"
            },
            {
                frontQuestion: "RÄTT ATT SKYDDAS FRÅN VÅLD",
                cardSize:'L',
                turned:false,
                backexplenation:[
                    "Barn ska skyddas från alla former av fysiskt eller psykiskt våld, skada eller övergrepp, vanvård eller försumlig behandling, misshandel eller utnyttjande, inklusive sexuella övergrepp."
                ],
                empWord:[
                    ""
                ],
                chart: "Artikel 19, FN:s konvention om barnets rättigheter"
    
            }
        
            ]
        }

    workingWithChildrenTheFoundationOfCwbArb:FlipingCards = {

        headline:"العمل مع الأطفال",
        subHeading:"أساس عمل مهرجون بلا حدود - السويد",
        paragraf:[
            "يستند عمل منظمة مهرجون بلا حدود إلى اتفاقية الأمم المتحدة لحقوق الطفل لعام 1989",
            "اضغط على البطاقات"
        ],
        cards:[{
            frontQuestion: "الطفل",
            cardSize:'S',
            turned:false,
            backexplenation:[
                " الطفل هو أي إنسان لم يتجاوز الثامنة عشرة من عمره."
            ]
            },
            {
                frontQuestion: "الحق في اللعب",
                cardSize:'M',
                turned:false,
                backexplenation:[
                    "حق الطفل في الراحة ووقت الفراغ، ومزاولة الألعاب والأنشطة الترفيهية المناسبة لسنه والمشاركة بحرية في الحياة الثقافية والفنون"
                ],
                empWord:[
                    ""
                ],
                chart:" المادة 31 اتفاقية الأمم المتحدة لحقوق الطفل"
            },
            {
                frontQuestion: "الحق في الحماية من العنف",
                cardSize:'L',
                turned:false,
                backexplenation:[
                    "يجب حماية الأطفال من جميع أشكال العنف الجسدي أو النفسي، أو الإصابة أو الإساءة، أو الإهمال، أو سوء المعاملة أو الاستغلال، بما في ذلك الإساءة الجنسية."
                ],
                empWord:[
                    ""
                ],
                chart: "المادة 19 اتفاقية الأمم المتحدة لحقوق الطفل"
    
            }
        
        
            ]
        }

        //CODE OF CONDUCT

        prohibitionOfAlcoholAndDrugsEng:FlipingCards = {

            chapter:"CODE",
            headline:"CODE OF CONDUCT",
            subHeading:"Principle 6: Prohibition of alcohol and drugs",
            sectionTextHtml:[
                '<span style="font-weight:bold; letter-spacing: .1rem;"> Now we will take a look at a situation that could occur during your assignment with Clowns without Borders. </span> </br> Jonas and his colleagues have just completed three long days of performances and workshop. The last day on mission ends with a dinner for CWB representatives and representatives of a partner organisation. The dinner takes place at a restaurant. Jonas is wearing CWB costume/ T-shirt. A person from the local community offers Jonas a typical local liquor. Jonas declines the offer. Someone at the table remarks that according to local customs it is disrespectful to decline such an offer.</br></br></br> WHAT SHOULD JONAS DO? </br>Click on the right answer!'
            ],
            cards:[{
                frontQuestion: "Decline and explain that as a CWB representative he cannot drink alcohol",
                cardSize:'XL',
                turned:false,
                correct:'correct',
                backexplenation:[
                    " Correct ",
                    '',
                    "It is never allowed to consume alcohol or illegal substances, or to be hungover during activities that involve Clowns without Borders’ target group, and/or when wearing clothes displaying the CWB logo in public settings. To avoid difficult situations it is important to explain that you are not allowed to consume alcohol or illegal substances. "
                ],
                empWord:[
                    "Correct"
                ]
                },
                {
                    frontQuestion: "Have just a sip to show gratitude",
                    cardSize:'XL',
                    turned:false,
                    correct:'wrong',
                    backexplenation:[
                        "Wrong",
                        '',
                        "Alcohol or illegal substances must never be consumed when wearing clothes displaying the CWB logo in public contexts. "
                    ],
                    empWord:[
                        ""
                    ],
                    chart:""
                },
                {
                    frontQuestion: "Accept the offer and drink the liquor to avoid being rude ",
                    cardSize:'XL',
                    turned:false,
                    correct:'wrong',
                    backexplenation:[
                        'Wrong',
                        '',
                        "Alcohol or illegal substances must never be consumed when wearing clothes displaying the CWB logo in public contexts. "
                    ],
                    empWord:[
                        "Wrong"
                    ],
                    chart: ""
        
                }
            
                ]
            }

            prohibitionOfAlcoholAndDrugsSv:FlipingCards = {

                chapter:"CODE",
                headline:"UPPFÖRANDEKOD",
                subHeading:"Princip 6: Förbud mot alkohol och droger",
                sectionTextHtml:[
                    '<span style="font-weight:bold; letter-spacing: .1rem;">Nu ska vi ta en titt på en situation som kan uppstå under ditt uppdrag med Clowner utan Gränser. </span> </br>  Jonas och hans kollegor har precis avslutat tre långa dagar med föreställningar och workshops. Sista arbetsdagen avslutas med en middag för CUG-representanter och representanter för en partnerorganisation. Middagen äger rum på en restaurang. Jonas har kläder med CUGs logga på sig. En person från lokalsamhället erbjuder Jonas att smaka en typisk lokal spritsort. Jonas tackar nej. Någon vid bordet påpekar att det enligt lokala seder är respektlöst att tacka nej till ett sådant erbjudande.</br></br> VAD SKA JONAS GÖRA? </br> Klicka på rätta svaret!'
                ],
                cards:[{
                    frontQuestion: "Avböja och förklara att han som CUG-representant inte kan dricka alkohol",
                    cardSize:'XL',
                    turned:false,
                    correct:'correct',
                    backexplenation:[
                        " Rätt ",
                        '',
                        "Det är aldrig tillåtet att nyttja alkohol eller droger, eller att vara bakfull under aktiviteter som involverar Clowner utan Gränsers målgrupp och/eller när man i offentliga miljöer bär kläder med CUG-logotypen. För att undvika svåra situationer är det viktigt att förklara att du inte får konsumera alkohol eller droger. "
                    ],
                    empWord:[
                        "Correct"
                    ]
                    },
                    {
                        frontQuestion: "Bara ta en klunk för att visa uppskattning",
                        cardSize:'XL',
                        turned:false,
                        correct:'wrong',
                        backexplenation:[
                            "Fel",
                            '',
                            "Alkohol eller droger får aldrig konsumeras när man bär kläder med CUG-logotypen i offentliga miljöer. "
                        ],
                        empWord:[
                            ""
                        ],
                        chart:""
                    },
                    {
                        frontQuestion: "Acceptera erbjudandet och dricka spriten för att undvika att vara oförskämd ",
                        cardSize:'XL',
                        turned:false,
                        correct:'wrong',
                        backexplenation:[
                            "Fel",
                            '',
                            "Alkohol eller droger får aldrig konsumeras när man bär kläder med CUG-logotypen i offentliga miljöer. "
                        ],
                        empWord:[
                            "Wrong"
                        ],
                        chart: ""
            
                    }
                    
                    ]
                }

                prohibitionOfAlcoholAndDrugsArb:FlipingCards = {

                    chapter:"CODE",
                    headline:"مدونة قواعد السلوك",
                    subHeading:"المبدأ رقم 6: حظر الكحول والمخدرات",
                    sectionTextHtml:[
                        'الآن سوف نلقي نظرة على موقف يمكن أن ينشأ أثناء عملك في مهمة مع منظمة مهرجون بلا حدود أكمل جوناس وزملاؤه ثلاثة أيام طويلة من العروض وورش العمل. وينتهي اليوم الأخير في المهمة بعشاء مع كل من موظفي مهرجون بلا حدود والمنظمة الشريكة. جوناس يرتدي زي/ قميص المنظمة وهو في المطعم. يقدم ممثل من المجتمع المحلي مشروبات كحولية محلية لجوناس. جوناس يرفض العرض. يقول شخص من الحضور أنه وفقًا للعادات المحلية، أن رفض مثل هذا العرض يعتبر عدم احترام. <br><br> ماذا يجب أن يفعل جوناس؟ </br> اضغط على الإجابة الصحيحة!'
                    ],
                    cards:[{
                        frontQuestion: " أن يصر ويشرح أنه لا يستطيع الشرب أثناء العمل مع منظمة مهرجون بلا حدود",
                        cardSize:'XL',
                        turned:false,
                        correct:'correct',
                        backexplenation:[
                            " صحيح ",
                            '',
                            "لأنه لا يُسمح أبدًا بتناول الكحول أو المخدرات أثناء الأنشطة مع مجموعات المنظمة المستهدفة. عند ارتداء ملابس تعرض شعار المنظمة، من المهم أن تشرح للشخص الذي تتواجد معه أنه يُسمح لك بتجنب مثل هذه المواقف الصعبة."
                        ],
                        empWord:[
                            "Correct"
                        ]
                        },
                        {
                            frontQuestion: " أن يتناول رشفة واحدة فقط لإظهار الامتنان",
                            cardSize:'XL',
                            turned:false,
                            correct:'wrong',
                            backexplenation:[
                                "خطأ",
                                '',
                                "يجب عدم تناول المشروبات الكحولية أو المواد غير القانونية مطلقًا عند ارتداء ملابس تعرض شعار المنظمة في السياقات العامة. "
                            ],
                            empWord:[
                                ""
                            ],
                            chart:""
                        },
                        {
                            frontQuestion: "أن يقبل العرض ويتناول المشروب حتى لا يبدو وقحاً ",
                            cardSize:'XL',
                            turned:false,
                            correct:'wrong',
                            backexplenation:[
                                'خطأ',
                                '',
                                "يجب عدم تناول المشروبات الكحولية أو المواد غير القانونية مطلقًا عند ارتداء ملابس تعرض شعار المنظمة في السياقات العامة"
                            ],
                            empWord:[
                                "خطأ"
                            ],
                            chart: ""
                
                        }
                    
                        ]
                    }
        
    
    
            anExampleOfAPotentialSituationEng:FlipingCards = {

                headline:"DOCUMENTATION OF CHILDREN",
                subHeading:"An example of a potential situation",
                sectionTextHtml:[
                    'You are in charge of documenting and taking photos during a CWB tour. You take a beautiful photo of a 14-year-old boy with a big smile on his face. The photo is so expressive and positive. You want to write a blog post and publish the photo on your social media account. What do you do? </br> Click on the right answer!'
                ],
                paragraf:[
                    ""
                ],
                cards:[{
                    frontQuestion: "I can publish the photo since it is so expressive and positive.",
                    cardSize:'XL',
                    turned:false,
                    correct:'wrong',
                    backexplenation:[
                        " Wrong ",
                        '',
                        "Publishing the photo means violating the child’s right to privacy."
                    ],
                    empWord:[
                        "wrong"
                    ]
                    },
                    {
                        frontQuestion: "Ask the boy if it’s okay to use the photo, since the boy is big enough to decide.",
                        cardSize:'XL',
                        turned:false,
                        correct:'wrong',
                        backexplenation:[
                            "Wrong",
                            '',
                            "A minor cannot give consent!"
                        ],
                        empWord:[
                            ""
                        ],
                        chart:""
                    },
                    {
                        frontQuestion: "Ask the boy and the boy’s caregiver for permission and sign a consent form or possibly give oral consent.  ",
                        cardSize:'XL',
                        turned:false,
                        correct:'correct',
                        backexplenation:[
                            'Correct',
                            '',
                            "When working directly with children you must make sure that photos, videos, audio files and personal data respects children’s rights to privacy. This means that consent must be obtained from the child in question and a legal guardian or another person responsible for the child on site.  "
                        ],
                        empWord:[
                            "Correct"
                        ],
                        chart: ""
            
                    }
                
                    ]
                }

                anExampleOfAPotentialSituationSv:FlipingCards = {

                    headline:"DOKUMENTATION AV BARN",
                    subHeading:"Ett exempel på en potentiell situation",
                    sectionTextHtml:[
                        'Du ansvarar för att dokumentera och ta bilder under en av Clowner utan Gränsers turnéer. Du tar ett fantastiskt foto av en 14-årig pojke med ett stort leende på läpparna. Bilden är så uttrycksfull och positiv. Du vill skriva ett blogginlägg och publicera bilden på dina sociala medier.</br> Vad gör du? </br> Klicka på rätt svar!'
                    ],
                    paragraf:[
                        ""
                    ],
                    cards:[{
                        frontQuestion: "Jag kan publicera bilden eftersom den är så uttrycksfull och positiv.",
                        cardSize:'XL',
                        turned:false,
                        correct:'wrong',
                        backexplenation:[
                            " FEL ",
                            '',
                            "Att publicera bilden innebär att kränka barnets rätt till integritet."
                        ],
                        empWord:[
                            "FEL"
                        ]
                        },
                        {
                            frontQuestion: "Fråga pojken om det är okej att använda bilden, eftersom han är stor nog att bestämma själv.",
                            cardSize:'XL',
                            turned:false,
                            correct:'wrong',
                            backexplenation:[
                                "FEL",
                                '',
                                "En minderårig kan inte ge sitt samtycke!"
                            ],
                            empWord:[
                                "FEL"
                            ],
                            chart:""
                        },
                        {
                            frontQuestion: "Be pojken och hans vårdnadshavare om lov och underteckna en samtyckesblankett eller eventuellt ge muntligt samtycke. ",
                            cardSize:'XL',
                            turned:false,
                            correct:'correct',
                            backexplenation:[
                                'RÄTT',
                                '',
                                "När du arbetar med barn måste du se till att foton, videor, ljudfiler och personuppgifter respekterar barns rätt till integritet. Det innebär att samtycke ska inhämtas från barnet och en vårdnadshavare eller annan ansvarig för barnet på plats."
                            ],
                            empWord:[
                                "RÄTT"
                            ],
                            chart: ""
                
                        }
                    
                        ]
                    }

                    anExampleOfAPotentialSituationArb:FlipingCards = {

                        headline:"التوثيق للأطفال",
                        subHeading:"مثال على حالة محتملة",
                        sectionTextHtml:[
                            ' أنت مسؤول عن التوثيق والتقاط الصور أثناء الجولة، تلتقط صورة جميلة جدًا لطفل يبلغ من العمر 14 عامًا بابتسامة جميلة على وجهه. الصورة معبرة وإيجابية للغاية. تريد كتابة مدونة ونشر الصورة على وسائل التواصل الاجتماعي الخاصة بك.<br> كيف ستتصرف؟</br>اضغط على الإجابة الصحيحة!'
                        ],
                        paragraf:[
                            ""
                        ],
                        cards:[{
                            frontQuestion: "يمكنني نشر الصورة لأن الصورة معبرة وإيجابية للغاية",
                            cardSize:'XL',
                            turned:false,
                            correct:'wrong',
                            backexplenation:[
                                " خطأ ",
                                '',
                                "من خلال نشر الصورة على الإنترنت، فإنك تنتهك حق الطفل في الخصوصية"
                            ],
                            empWord:[
                                "خطأ"
                            ]
                            },
                            {
                                frontQuestion: " اسأل الفتى إذا كان يوافق على استخدام الصورة، فهو كبير بما يكفي لاتخاذ القرار",
                                cardSize:'XL',
                                turned:false,
                                correct:'wrong',
                                backexplenation:[
                                    "خطأ",
                                    '',
                                    "الطفل لا يمكنه منح الموافقة"
                                ],
                                empWord:[
                                    ""
                                ],
                                chart:""
                            },
                            {
                                frontQuestion: "أطلب من الفتى ومقدم الرعاية له تأكيد استخدام الصورة والتوقيع على استمارة الموافقة",
                                cardSize:'XL',
                                turned:false,
                                correct:'correct',
                                backexplenation:[
                                    'صحيح',
                                    '',
                                    ""
                                ],
                                empWord:[
                                    "صحيح"
                                ],
                                chart: "عند العمل بشكل مباشر مع الأطفال، يجب التأكد من أن الصور ومقاطع الفيديو والملفات الصوتية والبيانات الشخصية تحترم حقوق الأطفال في الخصوصية. هذا يعني أنه يجب الحصول على الموافقة من الطفل المعني ومن الوصي القانوني أو أي شخص آخر مسؤول عن الطفل في الموقع."
                    
                            }
                        
                            ]
                        }
        


}