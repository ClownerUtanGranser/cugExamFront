import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() question:Question;
  @Output() answerEmit = new EventEmitter();

  selectedAnswer:number = null;

  constructor() { }

  ngOnInit(): void {
  }

  select(index:number)
  {
    console.log("Index ", index);
  //  this.question.selectedAnswre = index;
    this.answerEmit.emit(index);
  }

}
