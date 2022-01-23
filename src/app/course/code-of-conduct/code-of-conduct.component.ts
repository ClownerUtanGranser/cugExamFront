import { Component, Input, OnInit } from '@angular/core';
import { CodeOfConduct } from 'src/app/model/pageModel/code-of-conduct';

@Component({
  selector: 'app-code-of-conduct',
  templateUrl: './code-of-conduct.component.html',
  styleUrls: ['./code-of-conduct.component.scss']
})
export class CodeOfConductComponent implements OnInit {
  @Input() codeOfConduct:CodeOfConduct;
  @Input() lang:string;

  constructor() { }

  ngOnInit(): void {
  }

}
