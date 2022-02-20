export interface CodeOfConduct{
    
    headline?:string,
    paragrafHtmls?:{
        paragrafHeadline:string,
        paragrafHtml:string[],
        checkboxText:string
    }[]
    
}

export class CodeOfConductObj{

    code1And2Eng:CodeOfConduct = {
        headline: 'CODE OF CONDUCT',
        paragrafHtmls:[
            {
                paragrafHeadline:'1. Treat everyone with respect and dignity',
                paragrafHtml:[
                    'Clowns without Borders has zero tolerance of all forms of discrimination and harassment. As a representative of Clowns without Borders, you shall always treat all people with respect and not treat differently nor discriminate against any person or group on the basis of gender, ethnic origin or nationality, religion or other belief, sexual orientation, transgender identity and expression, functional variation, age, political opinion or social position. ',
                    ''
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            },
            {
                paragrafHeadline:'2. Adhere to the values of Clowns without Borders',
                paragrafHtml:[
                    'Clowns without Borders is a non-partisan organisation, which does not prevent you from being affiliated with other idea-driven organisations in addition to your involvement with Clowns without Borders. However, as a representative of CWB, you cannot be involved in organisations or contexts that directly oppose the values of Clowns without Borders. '
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            }
        ]
    }

    code1And2Sv:CodeOfConduct = {
        headline: 'UPPFÖRANDEKOD',
        paragrafHtmls:[
            {
                paragrafHeadline:'1. Behandla alla med respekt och värdighet',
                paragrafHtml:[
                    'Clowner utan Gränser har nolltolerans mot alla former av diskriminering och trakasserier. Som CUG-representant ska du alltid behandla alla människor med respekt och inte särbehandla eller diskriminera någon person eller grupp på grund av kön, etniskt ursprung eller nationalitet, religion eller annan trosuppfattning, sexuell läggning, transidentitet och uttryck, funktionsvariation, ålder, politisk åsikt eller social ställning.',
                    ''
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            },
            {
                paragrafHeadline:'2. Stå upp för Clowner utan Gränsers värderingar',
                paragrafHtml:[
                    'Clowner utan Gränser är en partipolitiskt obunden organisation, vilket inte hindrar dig som är engagerad i CUG från att också vara kopplad till andra idéburna organisationer. Däremot kan du som representant för Clowner utan Gränser inte vara aktiv i organisationer eller sammanhang som direkt motarbetar våra värderingar.'
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            }
        ]
    }

    code1And2Arb:CodeOfConduct = {
        headline: 'مدونة قواعد السلوك',
        paragrafHtmls:[
            {
                paragrafHeadline:'1. التعامل  مع الجميع باحترام وكرامة',
                paragrafHtml:[
                    ' إن منظمة مهرجون بلا حدود لا تتسامح مطلقًا مع جميع أشكال التمييز والمضايقات. بصفتك ممثلاً للمنظمة، يجب عليك دائمًا معاملة جميع الأشخاص باحترام على حد سواء، وعدم التمييز ضد أي شخص أو مجموعة على أساس الجنس، أو العرق، أو الجنسية، أو الدين، أو أي معتقد آخر، أو التوجه الجنسي، أو الهوية الجنسية، أو الوظيفة، أو الاختلاف، أو العمر، أو الرأي السياسي، أو المكانة الاجتماعية.',
                    ''
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه' 
            },
            {
                paragrafHeadline:'2. التمسك بقيم منظمة مهرجون بلا حدود',
                paragrafHtml:[
                    ' منظمة مهرجون بلا حدود هي منظمة غير حزبية، ولا تمنعك من الانتماء إلى منظمات فكرية أخرى بالإضافة إلى عملك معها. ولكن بصفتك ممثلاً للمنظمة، لا يمكنك المشاركة في منظمات أو سياقات تعارض بشكل مباشر  مع قيم منظمة مهرجون بلا حدود.'
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            }
        ]
    }



    code3And4Eng:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'3. Dissociate from harassment, exploitation, violence and abuse of power',
                paragrafHtml:[
                    'Clowns without Borders has zero tolerance of abuse, harassment, purchase of sexual services, violence or ill-treatment in the workplace as well as in our activities. On certain assignments with Clowns without Borders, people you work with may be, or perceive themselves to be, dependent on you. It is fundamental to Clowns without Borders that our representatives never take advantage of this. Undue services, benefits, discrimination or favouritism are completely prohibited.',
                    ''
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            },
            {
                paragrafHeadline:'4. Manage resources properly',
                paragrafHtml:[
                    "Clowns without Borders' resources originate from private donors, companies and grants. We have a big responsibility to ensure that these resources are used correctly. We attach a great deal of importance to being transparent about how all resources, whether human, financial or material, are utilised. All resources and working hours shall therefore always be used responsibly and for the purpose for which they are intended."
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            }
        ]
    }

    code3And4Sv:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'3. Ta avstånd från trakasserier, exploatering, våld och maktmissbruk',
                paragrafHtml:[
                    'Clowner utan Gränser har nolltolerans mot övergrepp, trakasserier, köp av sexuella tjänster, våld och kränkningar på såväl arbetsplatsen som i verksamheten ute i fält.',
                    'På vissa uppdrag med Clowner utan Gränser kan människor du arbetar med stå i – eller uppleva sig stå i – beroendeställning till dig. Grundläggande för Clowner utan Gränser är att du aldrig får utnyttja detta. Otillbörliga tjänster, förmåner, särbehandling eller favorisering får aldrig förekomma.'
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            },
            {
                paragrafHeadline:'4. Använda resurser på rätt sätt',
                paragrafHtml:[
                    "Clowner utan Gränsers resurser kommer från privata givare, företag och bidragsmedel. Vi har ett stort ansvar för att dessa resurser används på ett korrekt sätt. Vi värnar om att ha en tydlig transparens kring hur alla resurser – personella, ekonomiska och materiella – används. Samtliga resurser och arbetstid ska alltid användas ansvarsfullt och till det ändamål de är avsedda för."
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            }
        ]
    }

    code3And4Arb:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:' 3. الابتعاد عن التحرش والاستغلال والعنف وإساءة استعمال السلطة',
                paragrafHtml:[
                    ' لا تتسامح منظمة مهرجون بلا حدود مطلقًا مع سوء المعاملة والمضايقة وشراء الخدمات الجنسية والعنف وسوء المعاملة في مكان العمل وكذلك في تنفيذ الأنشطة. في مهام معينة في العمل مع المنظمة، ربما يكون الأشخاص الذين تعمل معهم يعتمدون عليك، أو يعتقدون انهم يعتمدون عليك. من المهم جدا ألا تستغل هذا مطلقًا. فالمنظمة تُحظر تمامًا الخدمات أو المزايا أو التمييز أو المحسوبية غير المبررة. ',
                    ''
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            },
            {
                paragrafHeadline:'.4 إدارة الموارد بشكل صحيح',
                paragrafHtml:[
                    "تأتي موارد منظمة مهرجون بلا حدود من جهات مانحة وشركات ومنح خاصة. نحن نتحمل مسؤولية كبيرة لضمان استخدام هذه الموارد بشكل صحيح. نولي قدرًا كبيرًا من الأهمية للتحلي بالشفافية بشأن كيفية استخدام جميع الموارد، سواء كانت بشرية أو مالية أو مادية. لذلك، يجب دائمًا استخدام جميع الموارد، وساعات العمل بطريقة مسؤولة، وللغرض المقصود منها."
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            }
        ]
    }

    code5And6Eng:CodeOfConduct = {
        paragrafHtmls:[
            {
                paragrafHeadline:'5. Counteract corruption and bias',
                paragrafHtml:[
                    'n all contexts, Clowns without Borders shall act to counter corruption, bias, bribery and exploitation of positions. Clear rules, administrative routines and transparent decision-making processes form the basis of our actions. As a representative of Clowns without Borders, you may not give or receive gifts or benefits to or from individuals or groups in exchange for services or collaborations. If people or groups want to show you appreciation (in the form of, for example, flowers, chocolate or other small token gifts), the value must not exceed SEK 200. You are never allowed to receive gifts in cash.',
                    ''
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            },
            {
                paragrafHeadline:'6. No use of alcohol or drugs at work',
                paragrafHtml:[
                    'When on assignment with Clowns without Borders, employees and volunteers shall always act as good role models and keep in mind that they represent CWB in the eyes of both the target group and partners. Consuming alcohol or illegal substances, being under the influence of alcohol or drugs, or to be hungover, is never allowed during any activity that involves our target groups. Employees and volunteers must keep in mind that they can encounter members of the target group/s also outside of organised activities and therefore, they must act as good role models throughout the assignment. Alcohol or illegal substances are never to be consumed when wearing clothes displaying the CWB logo in public contexts. Clowns without Borders never pays for alcohol. This also applies to situations of representation.'
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            }
        ]
    }

    code5And6Sv:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'5. Motverka korruption och jäv',
                paragrafHtml:[
                    'Clowner utan Gränser ska i alla sammanhang motverka korruption, jäv, mutor, utnyttjande av tjänsteställning och partiskhet. Tydliga regler, administrativa rutiner och transparenta beslutsprocesser ligger till grund för vårt agerande. Du får inte ge eller ta emot gåvor eller förmåner till enskilda eller grupper i utbyte mot tjänster eller samarbeten. Om personer eller grupper vill visa dig sin uppskattning (i form av exempelvis blommor, choklad eller andra mindre, symboliska gåvor) får värdet inte överstiga 200 kr. Du får aldrig ta emot gåvor i pengar. ',
                    '',
                    'För att undvika jäv får du som är volontär, anställd eller styrelseledamot aldrig delta i beslut om sådant som kan gynna dig personligen och/eller företag eller organisationer som du företräder. Du är alltid skyldig att informera styrelsen eller generalsekreteraren om du misstänker korruption, jäv eller dylikt.'
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            },
            {
                paragrafHeadline:'6. Inget nyttjande av alkohol eller droger',
                paragrafHtml:[
                    "Clowner utan Gränsers anställda och volontärer ska under uppdrag för organisationen alltid agera som goda förebilder och ta i beaktande att de är CUGs representanter gentemot både målgrupp och samarbetspartners. Det är därför aldrig tillåtet att konsumera alkohol eller droger, att vara påverkad eller bakfull i samband med aktiviteter som involverar Clowner utan Gränsers målgrupp. Anställda och volontärer ska ha i åtanke att de kan möta målgruppen även utanför aktiviteterna och ska även då vara goda förebilder. Alkohol/droger får därför aldrig konsumeras när man i offentliga sammanhang bär organisationens logga. Clowner utan Gränser bekostar aldrig alkohol, detta gäller även vid representation."
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            }
        ]
    }

    code5And6Arb:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'5. مكافحة الفساد والتحيز',
                paragrafHtml:[
                    'في جميع السياقات، تعمل منظمة مهرجون بلا حدود على مكافحة الفساد والتحيز والرشوة واستغلال المناصب. تشكل القواعد الواضحة والإجراءات الإدارية وعمليات صنع القرار الشفافة الأساس لأعمالنا. بصفتك ممثلاً للمنظمة، لا يجوز لك تقديم أو تلقي هدايا أو مزايا من أو إلى أفراد أو مجموعات في مقابل الخدمات أو التعاون. إذا أراد الأشخاص أو المجموعات إظهار تقديرهم لك (على شكل، زهور أو شوكولاتة أو أي رمز صغير آخر، مثلا) يجب ألا تتجاوز القيمة 200 كرونة سويدية. ويجب عدم تلقي الهدايا النقدية مطلقا. لتجنب التحيز، لا يشارك المتطوعون والموظفون وأعضاء مجلس الإدارة مطلقًا في اتخاذ قرارات بشأن الأمور التي يمكن أن تفيدهم شخصيًا و/ أو الشركات أو المنظمات التي يمثلونها. أنت ملزم دائمًا بإبلاغ مجلس الإدارة أو الأمين العام إذا كنت تشك في وجود فساد أو سوء سلوك أو ما شابه ذلك.',
                    ''
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            },
            {
                paragrafHeadline:'6.عدم استخدام الكحول أو المخدرات في العمل ',
                paragrafHtml:[
                    "عند المشاركة في مهمة مع منظمة مهرجون بلا حدود، يجب أن يكون الموظفون والمتطوعون دائمًا نماذج جيدة، ويجب أن يضعوا في اعتبارهم أنهم يمثلون المنظمة في نظر كل من المجموعات المستهدفة والشركاء. لذلك لا يُسمح لهم أبدًا بتناول الكحول أو المخدرات، أو أن يكونوا تحت تأثير الكحول أو المخدرات، أو أن يعانوا من أثر الثمالة أثناء الأنشطة مع المجموعة المستهدفة. يجب على الموظفين والمتطوعين أن يضعوا في اعتبارهم أنهم قد يلتقون بالمجموعات المستهدفة حتى خارج النشاط، ويجب أن يكونوا قدوة جيدة عند ذلك أيضا. لذا يجب عدم تناول الكحول أو المواد غير القانونية مطلقًا عند ارتداء ملابس تعرض شعار المنظمة في السياقات العامة. إن المنظمة لا تدفع أبدًا مقابل الكحول. وهذا ينطبق أيضا على حالات التمثيل."
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            }
        ]
    }


    code7And8Eng:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'7. Manage communication and information',
                paragrafHtml:[
                    'While on assignment with Clowns without Borders, you may come across sensitive information about individuals or situations. Our approach is to always protect integrity and security and not disclose information that may be sensitive. In a personal capacity, you have the right to freely express your opinions on various issues but you must not, to the media nor in official contexts, express yourself as a representative of Clowns without Borders in matters that are outside your area of responsibility. This is to ensure that the right information is communicated and to not risk endangering the safety or relationships of individuals, groups or organisations. In matters concerning the overall activities of Clowns without Borders, you shall contact the Communications Manager who decides who is to speak on behalf of the organisation. The Secretary-General is the official spokesperson of Clowns without Borders and ultimately decides who will represent the organisation in a particular context.',
                    ''
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            },
            {
                paragrafHeadline:'8. Security',
                paragrafHtml:[
                    'Clowns without Borders often works in complex settings and gives high priority to human security. You are obliged to take note of, respect and follow the safety regulations that apply to your assignment. In case of emergency, you are also obliged to follow instructions issued by the Chairman, Secretary-General or Project Manager.'
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            }
        ]
    }

    code7And8Sv:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'7. Hantera kommunikation och information',
                paragrafHtml:[
                    'På uppdrag för Clowner utan Gränser kan du komma i kontakt med känslig information om enskilda personer eller situationer. CUGs förhållningssätt är att alltid värna om integritet och säkerhet och inte lämna ut information som kan vara känslig. Du har som privatperson rätt att fritt uttrycka dina åsikter i olika frågor, men du får inte uttala dig i media eller i officiella sammanhang som representant för Clowner utan Gränser i frågor som ligger utanför ditt ansvarsområde. Detta för att säkerställa att rätt information förmedlas och för att inte riskera enskilda individers, gruppers eller organisationens säkerhet eller relationer. I frågor som rör Clowner utan Gränsers övergripande verksamhet ska du kontakta kommunikationsansvarig på kansliet som bedömer vem som ska uttala sig. Clowner utan Gränsers generalsekreterare är officiell talesperson för organisationen och avgör ytterst vem som ska representera CUG i olika frågor.',
                    ''
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            },
            {
                paragrafHeadline:'8. Säkerhet',
                paragrafHtml:[
                    "Clowner utan Gränser arbetar ofta i komplexa områden och människors säkerhet är högt prioriterad. Du är skyldig att ta del av, respektera och följa de säkerhetsföreskrifter som gäller för ditt uppdrag. Du är också skyldig att följa de anvisningar som ordföranden, generalsekreteraren eller projektledaren utfärdar vid en akut situation."
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            }
        ]
    }

    code7And8Arb:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'7 .  إدارة الاتصالات والمعلومات',
                paragrafHtml:[
                    'أثناء العمل في مهمة مع المنظمة، قد تطلع على معلومات حساسة حول الأفراد أو المواقف. إن نهج عمل منظمة مهرجون بلا حدود هو حماية السلامة والأمن دائمًا، وعدم الكشف عن المعلومات التي قد تكون حساسة. بصفتك الشخصية، يحق لك التعبير بحرية عن آرائك حول مختلف القضايا، ولكن لا يحق لك، في وسائل الإعلام أو السياقات الرسمية، التعبير عن نفسك كممثل للمنظمة في الأمور التي تقع خارج نطاق مسؤوليتك. وذلك لضمان توصيل المعلومات الصحيحة، وعدم المخاطرة بتهديد سلامة أو علاقات الأفراد أو الجماعات أو المنظمات. في الأمور المتعلقة بالأنشطة العامة للمنظمة، يجب عليك الاتصال بمدير الاتصالات الذي سيتخذ القرار بشأن من سيتحدث نيابة عن المنظمة. الأمين العام هو المتحدث الرسمي باسم المنظمة، وهو من يقرر في النهاية من سيمثل المنظمة في سياق معين.',
                    ''
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            },
            {
                paragrafHeadline:'8. الأمن',
                paragrafHtml:[
                    "غالبًا ما تعمل منظمة مهرجون بلا حدود في بيئات معقدة، وتعطي أولوية قصوى للأمن البشري. أنت ملزم بالمشاركة والاحترام واتباع لوائح السلامة التي تنطبق على مهمتك. في حالة الطوارئ، أنت ملزم أيضًا باتباع التعليمات الصادرة عن الرئيس أو الأمين العام أو مدير المشروع."
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            }
        ]
    }


    code9And10Eng:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'9. Climate and environmental considerations',
                paragrafHtml:[
                    'Clowns without Borders is a climate-conscious organisation. We aim to minimise our environmental impact and to lead by example by recycling, substituting unnecessary travel with online communication and travelling by public transport. We also take environmental considerations into account when purchasing materials or printing brochures and other information material.',
                    ''
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            },
            {
                paragrafHeadline:'10. Work environment',
                paragrafHtml:[
                    "Clowns without Borders' work climate is permeated by openness, positivity, zeal, safety and respect. We encourage, support and see possibilities in one another. We cherish each other's commitment, and it is important to us that everyone feels good at work. All of us take part in creating a fun-filled and creative work environment."
                ],
                checkboxText:'I declare that I have read and understood the principle above'
            }
        ]
    }


    code9And10Sv:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'9. Klimat- och miljöhänsyn',
                paragrafHtml:[
                    'Clowner utan Gränser är en miljömedveten organisation och vi strävar efter att minimera vår klimatpåverkan och föregå med gott exempel genom att återvinna, ersätta onödiga resor med digital kommunikation, samt resa kollektivt. Vi tar också miljöhänsyn vid inköp av material eller när vi ska trycka upp broschyrer och annat informationsmaterial.',
                    ''
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            },
            {
                paragrafHeadline:'10. Arbetsmiljö',
                paragrafHtml:[
                    "Clowner utan Gränsers arbetsklimat genomsyras av öppenhet, positivitet, lust, trygghet och respekt. Vi uppmuntrar, stödjer och ser möjligheter hos varandra. Vi värnar om varandras engagemang och det är viktigt för oss att alla mår bra i sitt arbete. Vi är alla delaktiga i att skapa ett lustfyllt och kreativt arbetsklimat."
                ],
                checkboxText:'Jag har läst och förstått principen ovan'
            }
        ]
    }

    code9And10Arb:CodeOfConduct = {
        
        paragrafHtmls:[
            {
                paragrafHeadline:'9.   الاعتبارات المناخية والبيئية',
                paragrafHtml:[
                    "مهرجون بلا حدود هي منظمة واعية بالبيئة والمناخ. نحن نهدف إلى تقليل تأثيرنا البيئي وأن نكون مثالاً يحتذى به من خلال إعادة التدوير، واستبدال السفر غير الضروري بالاتصالات عبر الإنترنت، والسفر بوسائل النقل العام. ونحن نأخذ أيضًا بالاعتبارات البيئية عند شراء المواد أو طباعة الكتيبات والمواد الإعلامية الأخرى.",
                    ''
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            },
            {
                paragrafHeadline:'10.   بيئة العمل',
                paragrafHtml:[
                    "يتميز مناخ عمل منظمة مهرجون بلا حدود بالانفتاح، والإيجابية، والحماس، والأمان والاحترام. نحن نشجع وندعم ونرى الامكانات في بعضنا البعض. نعتز بالتزامنا نحو بعضنا البعض، ويشعر الجميع معنا بالرضا في العمل. ونشارك جميعًا في خلق بيئة عمل إبداعية مليئة بالمرح."
                ],
                checkboxText:'أقر بأنني قد قرأت وفهمت المبدأ أعلاه'
            }
        ]
    }

    understodCheckBox = {
        q1 : -1,
        q2 : -1,
        q3 : -1,
        q4 : -1,
        q5 : -1,
        q6 : -1,
        q7 : -1,
        q8 : -1,
        q9 : -1,
        q10 : -1
    }

}