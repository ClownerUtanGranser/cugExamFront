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
  private _photoText:BehaviorSubject<PhotoText> = new BehaviorSubject<PhotoText>(null);
  private _Safety_guidelines_for_large_crowds:BehaviorSubject<PhotoText> = new BehaviorSubject<PhotoText>(null);
  private _preventionAndReactionToProtectChildrenEnsureSafetyOfChildren:BehaviorSubject<dosAndDonts> = new BehaviorSubject<dosAndDonts>(null)
  private _cwbSwedenChildProtectionPolicy:BehaviorSubject<PhotoText> = new BehaviorSubject<PhotoText>(null);

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

  // setExamStartBaseValuesEng()
  // {
  //   let start:StartingPageModel = {
  //     headline : "Welcome",
  //     secondHedline: "Welcome to the online training for artists working for Clowns without Borders Sweden!",
  //     texts: [
  //       "This online training is for people working as representatives for CLowns without Borders, artists, pedagogues, project coordinaters or others.",
  //       "Upon completion of this course, you will know how to act as a good ambassador of CWB, what our core values are and what is important to think about when working with children.        "
  //     ]
    
  //   }

  //   let startExam:StartingPageModel = {
  //     headline : "FINAL TEST",
  //     secondHedline: '',
  //     texts: [
  //       "The final test consists of 12 questions. In order to pass, you must get a minimum of 8 questions correct.", "Make sure you can sit in a place where you can focus undisturbed for at least 30 minutes."
  //     ]
    
  //   }
  //   this.setExamStart(startExam)
  //   this.setCourseStart(start);
  // }

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

  getSafetyGuidelinesForLargeCrowds()
  {
    return this._Safety_guidelines_for_large_crowds.asObservable();
  }

  setSafetyGuidelinesForLargerowds(page:PhotoText)
  {
    this._Safety_guidelines_for_large_crowds.next(page);
  }

  getPreventionAndReactionToProtectChildrenEnsureSafetyOfChildren():Observable<dosAndDonts>
  {
    return this._preventionAndReactionToProtectChildrenEnsureSafetyOfChildren.asObservable()
  }

  setPreventionAndReactionToProtectChildrenEnsureSafetyOfChildren(page:dosAndDonts)
  {
    this._preventionAndReactionToProtectChildrenEnsureSafetyOfChildren.next(page);
  }

  getCwbSwedenChildProtectionPolicy()
  {
    return this._cwbSwedenChildProtectionPolicy.asObservable();
  }

  setCwbSwedenChildProtectionPolicy(page:PhotoText)
  {
    this._cwbSwedenChildProtectionPolicy.next(page);
  }


}
