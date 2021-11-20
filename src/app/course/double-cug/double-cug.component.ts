import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-cug',
  templateUrl: './double-cug.component.html',
  styleUrls: ['./double-cug.component.scss']
})
export class DoubleCugComponent implements OnInit {

  introductionObj:{headline:string, paragraph:{subTitle:string, text:string[]}[]} = {
    headline: "Introduction",
    paragraph:[
      {
      subTitle:"Duration",
      text:[
        "The estimated duration of the course is of around 1 hour. You can retake the course how many times you want. When you feel ready, you can go on and take the final test. "
      ]},
      {
        subTitle:"Purpose",
        text:[
          "The purpose of this course is to provide representatives working for CWB Sweden with the proper guidance on how to behave as a representative of our organization.  ",
          "Specifically, we will focus on how to protect children during our work and how to recognize and respond to the suspected risk of harm towards children.",
          "As a part of our quality assurance the course is mandatory in order to work for CWB."
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
