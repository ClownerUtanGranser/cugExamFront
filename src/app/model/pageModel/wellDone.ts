export interface WellDone {
    headline:string;
    text:string[];
}

export class WellDoneObj{

    wellDoneEng:WellDone = {
        headline:'WELL DONE',
        text:[
            'Congratulations! You have now completed the course.',
            'You can repeat this session as many times as you like.',
            'When you feel ready, go to the next page and take the test.   '
        ]
    }

    wellDoneSv:WellDone = {
        headline:'BRA JOBBAT!',
        text:[
            'Grattis! Du har nu slutfört utbildningen.',
            'Du kan gå igenom den så många gånger du vill.',
            'När du känner dig redo, gå till nästa sida och gör testet.'
        ]
    }

    wellDoneArb:WellDone = {
        headline:'أحسنت!',
        text:[
            'تهانينا! لقد أكملت الآن الدورة.',
            'يمكنك تكرار هذه الجلسة بقدر ما تريد.',           
            'عندما تشعر بأنك جاهز، انتقل إلى الصفحة التالية وقم بإجراء الاختبار.'
        ]
    }

}