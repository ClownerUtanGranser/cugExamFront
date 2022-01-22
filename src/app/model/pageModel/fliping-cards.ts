export interface FlipingCards{

    headline:string,
    subHeading?:string,
    paragraf?:string[],
    cards:{
        cardSize?:string,
        frontQuestion:string,
        backexplenation: string[],
        turned:boolean,
        empWord?:string[],
        chart?:string
    }[]
}

export class FlipingCardsObj{

    workingWithChildrenTheFoundationOfCwbEng:FlipingCards = {

        headline:"WORKING WITH CHILDREN",
        subHeading:"The foundation of CWB Sweden’s work",
        
        paragraf:[
            "The work of Clowns without Borders is based on the 1989 UN Convention on the Rights of the Child."
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
            "Clowner utan Gränsers arbete bygger på FN:s konvention om barnets rättigheter från 1989."
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
            "يستند عمل منظمة مهرجون بلا حدود إلى اتفاقية الأمم المتحدة لحقوق الطفل لعام 1989"
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
}