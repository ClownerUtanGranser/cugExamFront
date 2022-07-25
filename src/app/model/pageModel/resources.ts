export interface Resources {

    headline:string,
    points:string[]
    links:{
        linkText:string, url:string
    }

}

export class ResourcesObj {

    resourcesEng:Resources = {
        headline: 'RESOURCES',
        points:[
            'Code of conduct',
            'Child Protection policy',
            'Action Plan in case of suspicious crime',
            'Communication policy',
            'Whistleblower policy',
            'Artist handbook'
        ],
        links:{
        linkText: 'Link to the documents' , url:'https://clownerutangranser.se/information-for-clowns-without-borders-artists'
        }

    }
    
    resourcesSv:Resources = {
        headline: 'RESURSER',
        points:[
            'Uppförandekod',
            'Barnskyddspolicy',
            'Handlingsplan vid misstänkt brott',
            'Kommunikationspolicy',
            'Visselblåsarpolicy',
            'Artisthandbok'
        ],
        links:{
        linkText: 'Länk till dokument' , url:'https://clownerutangranser.se/artister-internt'
        }
        
    }

    resourcesArb:Resources = {
        headline: 'المصادر',
        points:[
            'مدونة السلوك',
            'سياسة حماية الطفل',
            'خطة العمل في حالة الاشتباه بانتهاك',
            'سياسة التواصل',
            'سياسة الإبلاغ عن المخالفات',
            'كتيب دليل الفنان'
        ],
        links:{
        linkText: 'رابط للمستندات' , url:'https://clownerutangranser.se/information-for-clowns-without-borders-artists'
        }
        
    }
}