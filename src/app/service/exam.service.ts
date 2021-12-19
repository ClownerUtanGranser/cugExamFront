import { Injectable, QueryList } from '@angular/core';
import { StateService } from './state.service';
import { HttpHeader } from 'src/app/model/header';
import { HttpClient } from '@angular/common/http';
import { Question, QuestionList } from '../model/question';
import { QuestionBackendModel } from '../model/questionsBackendModel';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrlAdmin = "http://localhost:8081/v1/admin";
  private baseUrlUser:string = "http://localhost:8081/v1/user";
  private header:HttpHeader;

  constructor(private state:StateService,
              private http:HttpClient) {
 
   }

   getExam(jwt?:string)
   {
     let examQuestions:QuestionList;
     if(jwt)
     {
        this.http.get(`${this.baseUrlAdmin}/exam/cugExam`, new HttpHeader(jwt).getHeader()).subscribe((exam:{examName:string, questions:QuestionBackendModel[]}) =>{
        this.state.setExamQuestionsBasealue(exam.questions.map((question) => {
            
          return({
            id : question.questionId,
            questionNumber : question.questionNumber,
            questionText : question.question,
            answres : [question.response1, question.response2 ,question.response3],
            lang : question.lang,
            correctResponse : question.correctResponse,
            selectedAnswre : undefined
          })
          
        }));
      })
     }
     else
     {
        this.http.get(`${this.baseUrlAdmin}/exam/cugExam`).subscribe((exam:{examName:string, questions:QuestionBackendModel[]}) =>{
          this.state.setExamQuestionsBasealue(exam.questions.map((question) => {
            
            return({
              id : question.questionId,
              questionNumber : question.questionNumber,
              questionText : question.question,
              answres : [question.response1, question.response2 ,question.response3],
              lang : question.lang,
              correctResponse : question.correctResponse,
              selectedAnswre : undefined
            })
            
          }));
        })
     }

     return examQuestions; 
   }

   createEngExam(jwt:string)
   {
       let ouestionsEng:Question[] = new QuestionList().QuestionList;
       let exam = 'cugExam';
       this.http.post(`${this.baseUrlAdmin}/create/exam`, { examName: exam }, new HttpHeader(jwt).getHeader()).subscribe((exam) =>{
        let backendModel = ouestionsEng.map((question) =>{
        //  console.log(question);
          return({
            questionId: question.id,
            question: question.questionText,
            questionNumber: question.questionNumber,
            response1: question.answres[0],
            response2: question.answres[1],
            response3: question.answres[2],
            correctResponse:"Should be set",
            lang: question.lang
          })          
        }) 
        this.http.post(`${this.baseUrlAdmin}/exam/question/${exam}`, backendModel, new HttpHeader(jwt).getHeader()).subscribe();
      //  console.log(backendModel);
       })
     
   }

   resetQuestions(jwt:string)
   {
    let exam = 'cugExam';
    let ouestionsEng:Question[] = new QuestionList().QuestionList;
    let backendModel = ouestionsEng.map((question) =>{
      //  console.log(question);
        return({
          questionId: question.id,
          question: question.questionText,
          questionNumber: question.questionNumber,
          response1: question.answres[0],
          response2: question.answres[1],
          response3: question.answres[2],
          correctResponse:"Should be set",
          lang: question.lang
        })          
      })

      this.http.post(`${this.baseUrlAdmin}/exam/question/${exam}`, backendModel, new HttpHeader(jwt).getHeader()).subscribe();

   }

   uppdateQuestion( questionUpdate:QuestionBackendModel )
   {
      this.state.examUser.subscribe((user) =>{

          let exam = 'cugExam';
          this.http.put(`${this.baseUrlAdmin}/exam/question/${exam}`, questionUpdate, new HttpHeader(user.jwt).getHeader()).subscribe(() =>{
          this.getExam();
          })
      })
      
   }

   examCorrection(jwt, questions:Question[])
   {
    let exam = 'cugExam';

    let backendModel = questions.map((question) =>{
      //  console.log(question);
        return({
          questionId: question.id,
          question: question.questionText,
          questionNumber: question.questionNumber,
          response1: question.answres[0],
          response2: question.answres[1],
          response3: question.answres[2],
          correctResponse: question.correctResponse,
          selectedAnswre: question.selectedAnswre,
          lang: question.lang
        })          
      })

    return this.http.post(`${this.baseUrlUser}/exam/correction/${exam}`, backendModel, new HttpHeader(jwt).getHeader());
   }
}
