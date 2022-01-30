import { Component, OnInit } from '@angular/core';
import { PhotoTextObj } from './model/pageModel/photoText';
import { QuestionList } from './model/question';
import { LoginService } from './service/auth/login.service';
import { BaseInfoService } from './service/base-info.service';
import { ExamService } from './service/exam.service';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  
  // pages2 = new PhotoTextObj();
  exam;


  questionList:QuestionList = new QuestionList();

  constructor(private state:StateService, 
              private baseInfoService:BaseInfoService, 
              private loginService:LoginService,
              private examService:ExamService){}

  ngOnInit(): void {
    let lang = sessionStorage.getItem('cugLang')
    this.state.setLang(lang);
    this.examService.getExam();
    this.loginService.readJwt();
    this.baseInfoService.startingServer();
    this.baseInfoService.setLang();
    
  }
  
}
