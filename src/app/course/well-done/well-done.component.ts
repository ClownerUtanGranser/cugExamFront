import { Component, Input, OnInit } from '@angular/core';
import { WellDone } from 'src/app/model/pageModel/wellDone';

@Component({
  selector: 'app-well-done',
  templateUrl: './well-done.component.html',
  styleUrls: ['./well-done.component.scss']
})
export class WellDoneComponent implements OnInit {
  @Input() wellDone:WellDone;
  @Input() lang:string;

  constructor() { }

  ngOnInit(): void {
  }

}
