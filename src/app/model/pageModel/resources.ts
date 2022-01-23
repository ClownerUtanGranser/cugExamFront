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
            'Diversity policy',
            'Artist handbook'
        ],
        links:{
        linkText: 'Link to the documents' , url:''
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
            'Mångfaldspolicy',
            'Artisthandbok'
        ],
        links:{
        linkText: 'Länk till dokument' , url:''
        }
        
    }

    resourcesArb:Resources = {
        headline: 'المصادر',
        points:[
            'مدونة السلوك',
            'سياسة حماية الطفل',
            'خطة العمل في حالة الاشتباه بجريمة',
            'سياسة الاتصال',
            'سياسة الإبلاغ عن المخالفات',
            'سياسة التنوع',
            'كتيب دليل الفنان'
        ],
        links:{
        linkText: 'Link to the documents' , url:''
        }
        
    }
}