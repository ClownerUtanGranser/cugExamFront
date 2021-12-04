import { Component, OnInit } from '@angular/core';
import { dosAndDontdText } from './model/pageModel/dos-and-donts';
import { PhotoTextObj } from './model/pageModel/photoText';
import { QuestionList } from './model/question';
import { LoginService } from './service/auth/login.service';
import { BaseInfoService } from './service/base-info.service';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  pages = new dosAndDontdText();
  pages2 = new PhotoTextObj();
  


  questionList:QuestionList = new QuestionList();

  constructor(private state:StateService, private baseInfoService:BaseInfoService, private loginService:LoginService){}

  ngOnInit(): void {
    this.loginService.readJwt();
    this.state.setExamStartBaseValuesEng();
    this.state.setExamQuestionsBasealue(this.questionList.QuestionList);
    this.baseInfoService.startingServer();
    this.state.setDoesAndDonts(this.pages.page3);
    this.state.setPhotoText(this.pages2.page2);
    this.state.setSafetyGuidelinesForLargerowds(this.pages2.Safety_guidelines_for_large_crowds);
    this.state.setPreventionAndReactionToProtectChildrenEnsureSafetyOfChildren(this.pages.prevention_and_reaction_to_protect_children_ensure_safety_of_children);
    this.state.setCwbSwedenChildProtectionPolicy(this.pages2.cwbSwedenChildProtectionPolicy);
    
  }
  
}
