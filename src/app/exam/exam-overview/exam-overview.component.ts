import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Output() openOverLayEmit = new EventEmitter();

  user: ExamUser;

  numberOfQuestions:number;
  correctResponses:number;
  questionsCopy:Question[] = []
  firstTime:boolean = true;

  constructor(private state:StateService,
              private examService: ExamService) { }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.openOverLay && this.firstTime)
    {
      this.submitExam();
    }
  }

  ngOnInit(): void {
    this.state.examUser.subscribe((user) =>{
      this.user = user;
    })
  }

  closeOverlay()
  {
    this.openOverLayEmit.emit(false);
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
    this.examService.examCorrection(this.user.jwt, this.questionsCopy).subscribe((succsess)=> console.log("Success: ", succsess));
  }

}
