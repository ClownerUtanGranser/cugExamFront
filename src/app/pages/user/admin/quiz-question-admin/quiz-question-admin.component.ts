import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-quiz-question-admin',
  templateUrl: './quiz-question-admin.component.html',
  styleUrls: ['./quiz-question-admin.component.scss']
})
export class QuizQuestionAdminComponent implements OnInit {

  @Input() question:Question;
  @Output() answerEmit = new EventEmitter();

  selectedAnswer:number = null;

  questionForm = this.fb.group({

    questionText:[''],
    answres1: [''],
    answres2: [''],
    answres3: ['']

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    //this.questionForm.setValue(['questionText', 'questionText'])
    // this.questionForm.controls['questionText'].setValue(this.question.questionText);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.questionForm.controls['questionText'].setValue(this.question.questionText);

  }

  select(index:number)
  {
    this.answerEmit.emit(index);
  }


}
