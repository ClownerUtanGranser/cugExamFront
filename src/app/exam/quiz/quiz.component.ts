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
  @Output() previousEmit = new EventEmitter();
  @Output() nextEmit = new EventEmitter();

  selectedAnswer:number = null;

  buttonNext:string = 'Next >';
  buttonPrevious:string = '< Previous';
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
      this.buttonText = "تسليم الامتحان"
      this.buttonNext = '>' 
      this.buttonPrevious = '<'

    }else if(this.lang == 'ENG'){
      this.buttonText = "Submit exam"
      this.buttonNext = 'Next >'
      this.buttonPrevious = '< Previous'
    }else{
      this.buttonText = "Lämna in"
      this.buttonNext = 'Nästa >'
      this.buttonPrevious = '< Föregående'

    }
  }

  select(index:number)
  {
    this.answerEmit.emit(index);
  }

  nextQuestion()
  {
    this.nextEmit.emit()
  }

  previousQuestion()
  {
    this.previousEmit.emit();
  }

  submitExam()
  {
    this.submitExamEmit.emit();
  }

}
