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
    lang:['eng'],
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
    
    this.questionForm.controls['questionText'].setValue(this.question.questionText);
    this.questionForm.controls['answres1'].setValue(this.question.answres[0]);
    this.questionForm.controls['answres2'].setValue(this.question.answres[1]);
    this.questionForm.controls['answres3'].setValue(this.question.answres[2]);

  }

  update()
  {
    this.answerEmit.emit(this.questionForm.value);
  }


}
