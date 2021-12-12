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

    QuestionList:Question[] = [
        {
            id:1,
            questionNumber: 1,
            questionText: "1. If you suspect a case of violence against children, you should?",
            lang:'ENG',
            answres: [
                "Discuss with a colleague on what is the next step to take",
                "Call or email the Secretary - General and explain what happened",
                "Follow the Action Plan in case of suspicious crime (Listen to the child, let the child speak freely, fill in the incident report, assure the child, explain the child that you fill a report and what the next steps will be)"
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
                "Clowns Without Borders work is based on the UN Convention on the Rights of the Child",
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
                "Nothing, as this is not my responsibility.",
                "Follow the Action Plan in case of suspected crime ",
                "Try to directly confront the perpetrator of the abuse"
            ],
            selectedAnswre:undefined
        },
        {
            id:4,
            questionNumber: 4,
            questionText: "4. An adult from a partner organization hits a child because they are loud and cannot sit still during the workshop. Would you:",
            lang:'ENG',
            answres: [
                "Shout at the person that they is not allowed to hit children",
                "Tell the person politely that you have control over the situation, and it is ok if the child is loud and active, follow up with closest point of contact afterwards",
                "Leave and act as nothing has happened"
            ],
            selectedAnswre:undefined
        },
        {
            id:5,
            questionNumber: 5,
            questionText: "5. Children are over-enthusiastic and start to grab, push, and play too rough with CWB artists. Would you:",
            lang:'ENG',
            answres: [
                "Shout at the children to make it clear that this is not okay!",
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
                "Seating is not important, the most important is that the show goes as planned and artiats get to do their numbers. ",
                "Preventive measurements is the base of CWB while working with children. This is done through good preparations, risk-analysis & clear communication. "
            ],
            selectedAnswre:undefined
        },
        {
            id:7,
            questionNumber: 7,
            questionText: "7. Which of the following statements is correct?",
            lang:'ENG',
            answres: [
                "The person who reports using the whistle blower policy will be announced and his/ her name will be used to confront the accused part.",
                "The Whistleblower policy has the aim to report acts of violence against children committed by partner organizations ",
                "The Whistleblower policy has the aim to report irregularities committed by both partner organizations and representatives of Clowns without Borders. The person who reports is anonymous."
            ],
            selectedAnswre:undefined
        },
        {
            id:8,
            questionNumber: 8,
            questionText: "8. A participant/ adolescent in a workshop is very helpful, polite, and makes always sure to stay at the end of the workshop to help you (as an artist) to arrange the training space and carry the materials. Would you:",
            lang:'ENG',
            answres: [
                "Say thank you to the participant",
                "Choose this person in the training to show exercises with and/or to be the first in queue as a way of showing appreciation",
                "Buy candies or other symbolic gifts as a way of showing appreciation"
            ],
            selectedAnswre:undefined
        },
        {
            id:9,
            questionNumber: 9,
            questionText: "9. Which of the following statement is correct?",
            lang:'ENG',
            answres: [
                "The “two adults’ rule” means that you should always try to be with a colleague when in contact with children so that no adult from CWB is alone with one child",
                "The “two adults’ rule” means that there can be a maximum of two adults working with a group of children",
                "The “two adults’ rule” means that is much more fun when two adults are performing together"
            ],
            selectedAnswre:undefined
        },
        {
            id:10,
            questionNumber: 10,
            questionText: "10. During a workshop you see one of you colleagues from CWB who is struggling with a child. The child grabs your colleagues’ clothes and plays too roughly. After a while, your colleague loses their patience and pushes the child violently. Would you:",
            lang:'ENG',
            answres: [
                "Explain to your colleague that they cannot behave like that and leave it there",
                "Pretend that you have not seen anything, after all you know they are a good person and they are your friend",
                "Immediately report the fact to your closest point of contact"
            ],
            selectedAnswre:undefined
        },
        {
            id:11,
            questionNumber: 11,
            questionText: "11. Which of the following statement is correct?",
            lang:'ENG',
            answres: [
                "As a representative of CWB you should never spend much time alone and be isolated with a child",
                "As a representative of CWB it is ok to sometimes play alone in a closed room with a child if it is for a short time.",
                "As a representative of CWB it is ok to spend a long time in a closed room playing with a child if he/she explicitly asks for it"
            ],
            selectedAnswre:undefined
        },
        {
            id:12,
            questionNumber: 12,
            questionText: "12. Which of the following statement is correct?",
            lang:'ENG',
            answres: [
                "If families of children you have been working with want to show you appreciation in the form of a gift, you can accept it if the value is symbolic.",
                "If families of children you have been working with want to show you appreciation in the form of a gift, you can accept it whatever the price is",
                "If families of children, you have been working with want to show you appreciation in the form of a gift, you should never accept it "
            ],
            selectedAnswre:undefined
        }

    ]
}