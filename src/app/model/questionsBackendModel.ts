export interface QuestionBackendModel{

    questionId:number;
    questionNumber:number;
    question:string;
    lang:string;

    response1:string;
    response2:string;
    response3:string;
    correctResponse:string;

    exam?:string;

}