export interface Question{

    questionText:string;
    answres:string[];
    selectedAnswre:number | undefined;
    
}

export class QuestionList{

    QuestionList:Question[] = [
        {
            questionText: "1. If you suspect a case of violence against children, you should?",
            answres: [
                "Discuss with a colleague on what is the next step to take",
                "Call or email the Secretary - General and explain what happened",
                "Follow the Action Plan in case of suspicious crime (Listen to the child, let the child speak freely, fill in the incident report, assure the child, explain the child that you fill a report and what the next steps will be)"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "2.    Which of the following statements is correct?",
            answres: [
                "Children shall be protected only from physical violence",
                "Clowns Without Borders work is based on the UN Convention on the Rights of the Child",
                "There are only two forms of violence: physical violence and sexual violence"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "3.    If a child communicates to you that they have been subjected to violence, you should:",
            answres: [
                "Nothing, as this is not my responsibility.",
                "Follow the Action Plan in case of suspected crime ",
                "Try to directly confront the perpetrator of the abuse"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "4. An adult from a partner organization hits a child because they are loud and cannot sit still during the workshop. Would you:",
            answres: [
                "Shout at the person that they is not allowed to hit children",
                "Tell the person politely that you have control over the situation, and it is ok if the child is loud and active, follow up with closest point of contact afterwards",
                "Leave and act as nothing has happened"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "5. Children are over-enthusiastic and start to grab, push, and play too rough with CWB artists. Would you:",
            answres: [
                "Shout at the children to make it clear that this is not okay!",
                "Together with a colleague show children how to go about it in a playful and appropriate way",
                "Try to run away from the situation as soon as you can"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "6. Which of the following statements is correct?",
            answres: [
                "I am never allowed to ask about who and how many audience will attend the show, as this is culturally sensitive.",
                "Seating is not important, the most important is that the show goes as planned and artiats get to do their numbers. ",
                "Preventive measurements is the base of CWB while working with children. This is done through good preparations, risk-analysis & clear communication. "
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "7. Which of the following statements is correct?",
            answres: [
                "The person who reports using the whistle blower policy will be announced and his/ her name will be used to confront the accused part.",
                "The Whistleblower policy has the aim to report acts of violence against children committed by partner organizations ",
                "The Whistleblower policy has the aim to report irregularities committed by both partner organizations and representatives of Clowns without Borders. The person who reports is anonymous."
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "8. A participant/ adolescent in a workshop is very helpful, polite, and makes always sure to stay at the end of the workshop to help you (as an artist) to arrange the training space and carry the materials. Would you:",
            answres: [
                "Say thank you to the participant",
                "Choose this person in the training to show exercises with and/or to be the first in queue as a way of showing appreciation",
                "Buy candies or other symbolic gifts as a way of showing appreciation"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "9. Which of the following statement is correct?",
            answres: [
                "The “two adults’ rule” means that you should always try to be with a colleague when in contact with children so that no adult from CWB is alone with one child",
                "The “two adults’ rule” means that there can be a maximum of two adults working with a group of children",
                "The “two adults’ rule” means that is much more fun when two adults are performing together"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "10. During a workshop you see one of you colleagues from CWB who is struggling with a child. The child grabs your colleagues’ clothes and plays too roughly. After a while, your colleague loses their patience and pushes the child violently. Would you:",
            answres: [
                "Explain to your colleague that they cannot behave like that and leave it there",
                "Pretend that you have not seen anything, after all you know they are a good person and they are your friend",
                "Immediately report the fact to your closest point of contact"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "11. Which of the following statement is correct?",
            answres: [
                "As a representative of CWB you should never spend much time alone and be isolated with a child",
                "As a representative of CWB it is ok to sometimes play alone in a closed room with a child if it is for a short time.",
                "As a representative of CWB it is ok to spend a long time in a closed room playing with a child if he/she explicitly asks for it"
            ],
            selectedAnswre:undefined
        },
        {
            questionText: "12. Which of the following statement is correct?",
            answres: [
                "If families of children you have been working with want to show you appreciation in the form of a gift, you can accept it if the value is symbolic.",
                "If families of children you have been working with want to show you appreciation in the form of a gift, you can accept it whatever the price is",
                "If families of children, you have been working with want to show you appreciation in the form of a gift, you should never accept it "
            ],
            selectedAnswre:undefined
        }

    ]
}
/** 
let question1:Question = new Question();
question1.questionText = "1. If you suspect a case of violence against children, you should?";
question1.answres.push("Discuss with a colleague on what is the next step to take");
question1.answres.push("Call or email the Secretary - General and explain what happened");
question1.answres.push("Follow the Action Plan in case of suspicious crime (Listen to the child, let the child speak freely, fill in the incident report, assure the child, explain the child that you fill a report and what the next steps will be)");



let question2:Question = new Question();

question2.questionText = "2. Välj rätt!";
question2.answres.push("Rätt");
question2.answres.push("FEL");
question2.answres.push("FEL");

let question3:Question = new Question();

question3.questionText = "3. Välj rätt!";
question3.answres.push("E");
question3.answres.push("EL");
question3.answres.push("FEL");

let questions:Question[] = [question1, question2, question3];

this.setQuestions(questions);
*/