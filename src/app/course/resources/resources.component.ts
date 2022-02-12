import { Component, Input, OnInit } from '@angular/core';
import { Resources } from 'src/app/model/pageModel/resources';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  @Input()
  resources:Resources;
  @Input()
  lang:string;

  constructor() { }

  ngOnInit(): void {
  }

  downloadPages(){
    console.log("CLICK");
  }

}
