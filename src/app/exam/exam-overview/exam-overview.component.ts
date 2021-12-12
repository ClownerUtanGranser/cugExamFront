import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-exam-overview',
  templateUrl: './exam-overview.component.html',
  styleUrls: ['./exam-overview.component.scss']
})
export class ExamOverviewComponent implements OnInit, OnChanges{
  @Input() openOverLay:boolean;
  @Input() questions:Question[];
  @Output() openOverLayEmit = new EventEmitter();

  numberOfQuestions:number;
  correctResponses:number;
  firstTime:boolean = true;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.openOverLay && this.firstTime)
    {
      this.numberOfQuestions = this.questions.length
      this.correctResponses = this.questions.filter((question) => this.translateCorrectresponse(question.correctResponse) == question.selectedAnswre).length
      this.firstTime = false;
    }
  }

  ngOnInit(): void {
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

}
