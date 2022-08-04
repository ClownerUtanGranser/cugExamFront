import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ExamUser } from 'src/app/model/examUser';
import { Question } from 'src/app/model/question';
import { ExamService } from 'src/app/service/exam.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-exam-overview',
  templateUrl: './exam-overview.component.html',
  styleUrls: ['./exam-overview.component.scss']
})
export class ExamOverviewComponent implements OnInit, OnChanges{
  @Input() openOverLay:boolean;
  @Input() questions:Question[];
  @Input() lang:string;
  @Output() openOverLayEmit = new EventEmitter();

  user: ExamUser;

  numberOfQuestions:number;
  correctResponses:number;
  questionsCopy:Question[] = []
  firstTime:boolean = true;

  buttonText:string = "Home";
  buttonTryAgainText:string = "Try again";
  numberOfQuestionsText:string = "Number of questions:";
  correctResponsesText:string = "Correct responses:";
  notAnswered:string = "Not answered";
  congratulationText:string = "Congratulations! You are now ready to start with your project!";

  constructor(private state:StateService,
              private examService: ExamService,
              private router:Router
              ) { }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.openOverLay && this.firstTime)
    {
      this.submitExam();
    }
    this.changeLang(this.lang);
  }

  ngOnInit(): void {
    this.state.examUser.subscribe((user) =>{
      this.user = user;
    })

    this.changeLang(this.lang);
  }

  changeLang(lang:string){
    if(lang == 'ENG'){
      this.buttonText = "Home"
      this.buttonTryAgainText = "Try again"
      this.numberOfQuestionsText = "Number of questions:";
      this.correctResponsesText = "Correct responses:";
      this.notAnswered = "Not answered";
      this.congratulationText = "Congratulations! You are now ready to start with your project!"
    
    }else if(lang == 'SV'){
      this.buttonText = "Startsidan"
      this.buttonTryAgainText = "Nytt försök"
      this.numberOfQuestionsText = "antal frågor: ";
      this.correctResponsesText = "Rätta svar: ";
      this.notAnswered = "Inget svar";
      this.congratulationText = "Grattis Du är nu redo att sätta igång med ditt projekt!"

    }else{
      this.buttonText = "الصفحة الرئيسية"
      this.buttonTryAgainText = "محاولة جديدة"
      this.numberOfQuestionsText = "عدد الأسئلة:";
      this.correctResponsesText = "الاستجابات الصحيحة:";
      this.notAnswered = "بلا جواب";
      this.congratulationText = " تهانينا! انت الآن جاهز لبدء العمل في البرنامج! "

    }

  }

  closeOverlay(succsess:boolean)
  {
    this.openOverLayEmit.emit(succsess);
  }



  translateCorrectresponse(correct:string):number
  {
    if(correct == "response1")
    {
      return 0;
    }
    else if(correct == "response2")
    {
      return 1;
    }
    else if(correct == "response3")
    {
      return 2;
    }
    else
    {
      return undefined;
    }
  }

  submitExam()
  {
    
    this.questions.forEach(val => this.questionsCopy.push(Object.assign({}, val)));
    this.numberOfQuestions = this.questionsCopy.length
    this.correctResponses = this.questionsCopy.filter((question) => this.translateCorrectresponse(question.correctResponse) == question.selectedAnswre).length
    this.firstTime = false;
    this.examService.examCorrection(this.user.jwt, this.questionsCopy).subscribe();
  }

}
