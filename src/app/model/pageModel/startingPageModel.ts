export interface StartingPageModel{

    headline:string
    secondHedline:string
    texts:string[];
    buttonText?:string
}

export class StartingPage{

    startingSv():StartingPageModel
    {
        return {
            headline : "Välkommen",
            secondHedline: "",
            texts: [],
            buttonText:'Starta'
          }
    }

    startingEng():StartingPageModel
    {
        return {
            headline : "Welcome",
            secondHedline: "",
            texts: [],
            buttonText:'Start'
          }
    }

    startingArb():StartingPageModel
    {
        return {
            headline : "أهلا بك",
            secondHedline: "",
            texts: [],
            buttonText:'يبدأ'
          }
    }

    startingExamSv():StartingPageModel
    {
        return {
            headline : "SLUTPROV",
            secondHedline: "",
            texts: [
                "Testet består av 12 frågor. För att få godkänt måste du svara rätt på minst 8 frågor. Se till att du gör provet på en plats där du kan fokusera och där du inte blir störd på minst 30 minuter.",
                "",
                "Lycka till!"
            ],
            buttonText:'Starta'
          }
    }

    startingExamEng():StartingPageModel
    {
        return {
            headline : "FINAL TEST",
            secondHedline: "",
            texts: [
                "The final test consists of 12 questions. In order to pass the test, you need to get a minimum of 8 questions correct. Make sure you can take the test in an environment where you can focus and where you will not be disturbed for at least 30 minutes.",
                "",
                "Good luck!"
        ],
            buttonText:'Start'
          }
    }

    startingExamArb():StartingPageModel
    {
        return {
            headline : "الاختبار النهائي",
            secondHedline: "",
            texts: [
                " يتكون الاختبار النهائي من 12 سؤالاً. ولكي تنجح في الاختبار، يجب أن تجيب على 8 أسئلة على الأقل إجابة صحيحة. حاول الجلوس في مكان يمكنك فيه التركيز دون إزعاج لمدة 30 دقيقة على الأقل.",
                " حظا سعيدا!"
            ],
            buttonText:'يبدأ'
          }
    }
}