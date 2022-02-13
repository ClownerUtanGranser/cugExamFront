import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnChanges {
  @Input() lang:string;
  @Input() question:Question;
  @Output() answerEmit = new EventEmitter();
  @Output() submitExamEmit = new EventEmitter();

  selectedAnswer:number = null;

  buttonText:string = "Submit exam"

  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeLang(this.lang);
  }

  changeLang(lang:string){
    if(this.lang == 'AR')
    {
      this.buttonText = "تقديم الامتحان"
    }else if(this.lang == 'ENG'){
      this.buttonText = "Submit exam"
    }else{
      this.buttonText = "Lämna in"
    }
  }

  select(index:number)
  {
    this.answerEmit.emit(index);
  }

  submitExam()
  {
    this.submitExamEmit.emit();
  }

}
