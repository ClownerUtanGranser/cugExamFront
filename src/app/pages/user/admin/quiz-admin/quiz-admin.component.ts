import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question';
import { QuestionBackendModel } from 'src/app/model/questionsBackendModel';
import { ExamService } from 'src/app/service/exam.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-quiz-admin',
  templateUrl: './quiz-admin.component.html',
  styleUrls: ['./quiz-admin.component.scss']
})
export class QuizAdminComponent implements OnInit {

  questions:Question[] = [];

  questionsEng:Question[] = [];
  questionsSv:Question[] = [];
  questionsArb:Question[] = [];


  showQuestionIndex:number = 0;

  lang:string = 'ENG';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private state:StateService,
              private examService:ExamService) { }

  ngOnInit(): void {

    this.state.questions.subscribe((questions:Question[])=>{

      this.questionsEng = questions.filter((question) => question.lang == 'ENG');
      this.questionsSv = questions.filter((question) => question.lang == 'SV');
      this.questionsArb = questions.filter((question) => question.lang == 'AR');
      this.changeLang();
    })
    
    this.route.params.subscribe((param) => {

      this.showQuestionIndex = parseInt(param.questionNumber)
       this.showQuestion(this.showQuestionIndex);
       if(this.showQuestionIndex < 1  || !this.showQuestionIndex) this.router.navigate(['/admin/question/1'])

    })

  }

  changeLang(lang?:string){
    this.lang = lang ?? 'ENG';
    if(this.lang == 'ENG'){
      this.questions = this.questionsEng;
    }else if(this.lang == 'SV'){
      this.questions = this.questionsSv;
    }else{
      this.questions = this.questionsArb;
    }
  }

  updateQuestion( question:QuestionBackendModel)
  {
    this.examService.uppdateQuestion(question);
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

  showQuestion(index?:number)
  {
    this.showQuestionIndex = index;
    this.router.navigate(['admin/question', this.showQuestionIndex])
  
  }  

  nextQuestion()
  {
    if( this.showQuestionIndex > 0 && this.showQuestionIndex  < this.questions.length)
    {
      this.showQuestion(this.showQuestionIndex +1)
    }
    else if(this.showQuestionIndex > this.questions.length + 1)
    {
      this.router.navigate(['../question'])
    }
    else
    {
      this.router.navigate(['../'])
    }  
  }

  previousQuestion()
  {
    
    if( this.showQuestionIndex  > 0 )
    {
      this.showQuestion(this.showQuestionIndex -1)
    }
    else
    {
       this.router.navigate(['../'])
    }
    
  }

  showQuestionBack():boolean
  {
    return this.showQuestionIndex  < 2; 
  }

  showQuestionForward():boolean
  {
    return this.showQuestionIndex > this.questions.length - 1; 
  }


}
