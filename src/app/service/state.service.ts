import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExamUser } from '../model/examUser';
import { Question } from '../model/question';
import { StartingPageModel } from '../model/pageModel/startingPageModel';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // private _examStart:BehaviorSubject<StartingPageModel> = new BehaviorSubject<StartingPageModel>(null);
  private _questionsEng:BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
  private _questionsSv:BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
  private _questionsArb:BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);

  private _questions:BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);

  private _examUser:BehaviorSubject<ExamUser> = new BehaviorSubject<ExamUser>(null)

  //Lang
  private _Lang:BehaviorSubject<string> = new BehaviorSubject<string>('ENG');

  constructor() { }

  getLang():Observable<string>
  {
    return this._Lang.asObservable()
  }

  setLang(lang:string):void
  {
    this._Lang.next(lang);
  }

  get questions():BehaviorSubject<Question[]>
  {
    return this._questions;
  }

  setQuestions( questions:Question[]){
    
    this._questions.next(questions);
  }

  setExamQuestionsBasealue(questions:Question[])
  {
    this._questions.next(questions);
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

}
