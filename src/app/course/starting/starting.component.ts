import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartingPage, StartingPageModel } from 'src/app/model/pageModel/startingPageModel';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss']
})
export class StartingComponent implements OnInit {

  lang:string;

  startingPageTextObj = new StartingPage();
  pageTemplate:StartingPageModel | undefined;

  question:string = 'question/1'

  constructor(private state:StateService, private router:Router) { 

    

    this.state.getLang().subscribe((lang) => {
      this.lang = lang
      if(this.router.url == '/course')
      {
        this.question = 'material';
        this.changeLangOnText();
      }
      else
      {
        this.changeLangOnExamText()
      }
    });
  }

  ngOnInit(): void {

    if(this.router.url == '/course')
    {
      this.question = 'material';
    }
  }

  changeLangOnText()
  {
    if(this.lang == 'SV')
    {
      this.pageTemplate = this.startingPageTextObj.startingSv();
    }
    else if(this.lang == 'ENG')
    {
      this.pageTemplate = this.startingPageTextObj.startingEng();
    }
    else
    {
      this.pageTemplate = this.startingPageTextObj.startingArb();
    }
  }

  changeLangOnExamText()
  {
    if(this.lang == 'SV')
    {
      this.pageTemplate = this.startingPageTextObj.startingExamSv();
    }
    else if(this.lang == 'ENG')
    {
      this.pageTemplate = this.startingPageTextObj.startingExamEng();
    }
    else
    {
      this.pageTemplate = this.startingPageTextObj.startingExamArb();
    }
  }

}
