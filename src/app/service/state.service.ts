import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExamUser } from '../model/examUser';
import { Question } from '../model/question';
import { StartingPageModel } from '../model/pageModel/startingPageModel';
import { dosAndDonts } from '../model/pageModel/dos-and-donts';
import { PhotoText } from '../model/pageModel/photoText';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _examStart:BehaviorSubject<StartingPageModel> = new BehaviorSubject<StartingPageModel>(null);
  private _courseStart:BehaviorSubject<StartingPageModel> = new BehaviorSubject<StartingPageModel>(null);
  private _questions:BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);

  private _examUser:BehaviorSubject<ExamUser> = new BehaviorSubject<ExamUser>(null)

  //Pages
  private _doesAndDonts:BehaviorSubject<dosAndDonts> = new BehaviorSubject<dosAndDonts>(null)
  private _photoText:BehaviorSubject<PhotoText> = new BehaviorSubject<PhotoText>(null)

  constructor() { }

  get courseStart():Observable<StartingPageModel>
  {
    return this._courseStart.asObservable();
  }

  setCourseStart(startingPage:StartingPageModel)
  {
    this._courseStart.next(startingPage);
  }

  get examStart():Observable<StartingPageModel>
  {
    return this._examStart.asObservable();
  }

  setExamStart(startingPage:StartingPageModel)
  {
    this._examStart.next(startingPage);
  }

  get questions():BehaviorSubject<Question[]>
  {
    return this._questions;
  }

  setQuestions( questions:Question[]){
    
    this._questions.next(questions);
  }
  //Starting values

  setExamStartBaseValuesEng()
  {
    let start:StartingPageModel = {
      headline : "Welcome",
      secondHedline: "Welcome to the online training for artists working for Clowns without Borders Sweden!",
      texts: [
        "This online training is for people working as representatives for CLowns without Borders, artists, pedagogues, project coordinaters or others.",
        "Upon completion of this course, you will know how to act as a good ambassador of CWB, what our core values are and what is important to think about when working with children.        "
      ]
    
    }

    let startExam:StartingPageModel = {
      headline : "FINAL TEST",
      secondHedline: '',
      texts: [
        "The final test consists of 13 questions. In order to pass, you must get a minimum of 9 questions correct.", "Make sure you can sit in a place where you can focus undisturbed for at least 30 minutes."
      ]
    
    }
    this.setExamStart(startExam)
    this.setCourseStart(start);
  }

  setExamQuestionsBasealue()
  {

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
  }

  //Exam user

  get examUser():Observable<ExamUser>
  {
    return this._examUser;
  }

  setExamUser(examUser:ExamUser)
  {
    this._examUser.next(examUser);
  }

  //Course pages 

  getDoesAndDonts():Observable<dosAndDonts>
  {
    return this._doesAndDonts.asObservable();
  }

  setDoesAndDonts(page:dosAndDonts)
  {
    this._doesAndDonts.next(page);
  }

  getPhotoText():Observable<PhotoText>
  {
    return this._photoText.asObservable();
  }

  setPhotoText(page:PhotoText)
  {
    this._photoText.next(page);
  }

}
