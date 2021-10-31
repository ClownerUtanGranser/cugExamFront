import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos-and-donts',
  templateUrl: './dos-and-donts.component.html',
  styleUrls: ['./dos-and-donts.component.scss']
})
export class DosAndDontsComponent implements OnInit {

  dosAndDonts:{headline:string, headlineText:string, dos:string[], donts:string[]} = {
    headline: "WORKING WITH CHILDREN",
    headlineText:"Dos and don'ts when working with children",
    dos:[
      "Read carefully and understand the risk analysis before your assignment ",
      "Read carefully the Action Plan in case of suspicious crime",
      "Encourage children to raise their questions and concerns",
      "Implement the ”two adults rule” during all activities so that no adult is alone with a child",
      "Ensure that physical contact with children is always appropriate",
      "Use positive and non-violent methods to deal with children's behaviours",
      "Immediately raise concerns about inappropriate behaviours  "
    ],
    donts:[
      "Spend long periods with a child, isolated from other people",
      "Drink alcohol or drugs during your assignment",
      "Behave in a way that is offensive to children",
      "Use a offensive and hateful language against children",
      "Favor a child by giving gifts or promising something",
      "Take a child alone in a car",
      "Post photo or video of children on social media without theirs and their caregiver's consent"
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
