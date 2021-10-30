import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/auth/login.service';
import { BaseInfoService } from './service/base-info.service';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private state:StateService, private baseInfoService:BaseInfoService, private loginService:LoginService){}

  ngOnInit(): void {
    this.loginService.readJwt();
    this.state.setExamStartBaseValuesEng();
    this.state.setExamQuestionsBasealue();
    this.baseInfoService.startingServer();
    
  }
  
}
