import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-quiz-frame',
  templateUrl: './quiz-frame.component.html',
  styleUrls: ['./quiz-frame.component.scss']
})
export class QuizFrameComponent implements OnInit {

  questions:Question[] = [];
  showQuestionIndex:number = 0;

  constructor(private state:StateService) { }

  ngOnInit(): void {

    this.state.questions.subscribe((questions)=>{
      this.questions = questions;
    })
  }

  showQuestion(index:number)
  {
    this.showQuestionIndex = index;
  }  

  answeredQuestion(answerIndex:number)
  {
    console.log(answerIndex);
    this.questions[this.showQuestionIndex].selectedAnswre = answerIndex;
    this.state.setQuestions(this.questions);
  }

  selectedClass(index:number, question):string
  {
    if(index == this.showQuestionIndex && question.selectedAnswre == undefined){
      return "selected";
    }
    else if(index != this.showQuestionIndex && question.selectedAnswre != undefined)
    {
      return "yellow_circle"
    }
    else if(index == this.showQuestionIndex && question.selectedAnswre != undefined)
    {
      return "selected yellow_circle"
    }
    return '';
  }

}
