import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private state:StateService, private router:Router) { }

  ngOnInit(): void {

    if(this.router.url == '/course') this.question = 'material';

    this.state.examStart.subscribe((page)=>{
      this.pageTemplate = page;
    })
  }

}
