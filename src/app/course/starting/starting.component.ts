import { Component, OnInit } from '@angular/core';
import { StartingPageModel } from 'src/app/model/startingPageModel';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss']
})
export class StartingComponent implements OnInit {

  pageTemplate:StartingPageModel | undefined;

  question:string = 'question'

  constructor(private state:StateService) { }

  ngOnInit(): void {

    this.state.examStart.subscribe((page)=>{
      console.log("Page: ", page);
      console.log("Page: ", this.pageTemplate);
      this.pageTemplate = page;
    })
  }

}
