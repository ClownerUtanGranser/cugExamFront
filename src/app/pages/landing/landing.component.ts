import { Component, OnInit } from '@angular/core';
import { LandingPage } from 'src/app/model/pageModel/landingPage';
import { StateService } from 'src/app/service/state.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  lang:string;

  textObj:{
    firstHeadline: string,
    country: string,
    online: string,
    Whom: string,
    exam: string,
    courseMaterial: string
    };

    landingPage = new LandingPage();

  constructor(private state:StateService) { 

    state.getLang().subscribe((lang) => this.lang = lang)
  }

  ngOnInit(): void {
  }

  setLang(lang:string)
  {
    if(lang == 'SV')
    {
      return this.landingPage.landingSv();
    }else if(lang == 'ENG')
    {
      return this.landingPage.landingEng();
    }else{
      return this.landingPage.landingArb();
    }
      
  }

}
