import { Component, OnInit } from '@angular/core';
import { BaseInfoService } from './service/base-info.service';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private state:StateService, private baseInfoService:BaseInfoService){}

  ngOnInit(): void {
    this.state.setExamStartBasealuesEng();
    this.state.setExamQuestionsBasealue();
    this.baseInfoService.startingServer();
  }
  
}
