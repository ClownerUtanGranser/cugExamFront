import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  resource:{
    headline:string,
    points:string[]
    links:{
      linkText:string, url:string
    }
  } = {
    headline: 'RESOURCES',
    points:[
      'Code of conduct',
      'Child Protection policy',
      'Action Plan in case of suspicious crime',
      'Communication policy',
      'Whistleblower policy',
      'Diversity policy',
      'Artist handbook'
    ],
    links:{
      linkText: 'Link to the documents' , url:''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
