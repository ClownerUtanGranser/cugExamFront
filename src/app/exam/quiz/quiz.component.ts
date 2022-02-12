import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() lang:string;
  @Input() question:Question;
  @Output() answerEmit = new EventEmitter();
  @Output() submitExamEmit = new EventEmitter();

  selectedAnswer:number = null;

  constructor() { }

  ngOnInit(): void {
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
