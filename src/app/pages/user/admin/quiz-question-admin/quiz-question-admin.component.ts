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
  @Input() lang:string;
  @Output() langEmit = new EventEmitter();

  selectedAnswer:number = null;

  questionForm = this.fb.group({

    questionId:[''],
    questionNumber:[''],
    question:[''],
    correctResponse: [""],
    lang:[''],
    response1: [''],
    response2: [''],
    response3: ['']

  })

  // Text variables
  language:string = "Language";

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.questionForm.controls['lang'].setValue(this.lang)
    //this.questionForm.setValue(['questionText', 'questionText'])
    // this.questionForm.controls['questionText'].setValue(this.question.questionText);
    this.questionForm.valueChanges.subscribe(() => {
      this.lang = this.questionForm.controls['lang'].value;
      this.langEmit.emit(this.lang);
      
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if(this.question?.questionText)
    {
      this.questionForm.controls['question'].setValue(this.question.questionText);
      this.questionForm.controls['response1'].setValue(this.question.answres[0]);
      this.questionForm.controls['response2'].setValue(this.question.answres[1]);
      this.questionForm.controls['response3'].setValue(this.question.answres[2]);
      this.questionForm.controls['correctResponse'].setValue(this.question.correctResponse);
      this.questionForm.controls['lang'].setValue(this.question.lang);
      this.questionForm.controls['questionNumber'].setValue(this.question.questionNumber);
      this.questionForm.controls['questionId'].setValue(this.question.id);
    }

  }

  update()
  {
    this.answerEmit.emit(this.questionForm.value);
  }


}
