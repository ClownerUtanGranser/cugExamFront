import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CodeOfConduct } from 'src/app/model/pageModel/code-of-conduct';

@Component({
  selector: 'app-code-of-conduct',
  templateUrl: './code-of-conduct.component.html',
  styleUrls: ['./code-of-conduct.component.scss']
})
export class CodeOfConductComponent implements OnInit {
  @Input() codeOfConduct:CodeOfConduct;
  @Input() lang:string;
  @Input() underStandCodeOfCunduct1 = -1;
  @Input() underStandCodeOfCunduct2 = -1;
  @Output() underStandCodeOfCunduct1emit = new EventEmitter();
  @Output() underStandCodeOfCunduct2emit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log("!")
  }

  checkBox(value?){
    if(value.target.checked && value.target.value == 0){
      this.underStandCodeOfCunduct1 = 1;
    }else if(value.target.checked && value.target.value == 1){
      this.underStandCodeOfCunduct2 = 2;
    }else if(!value.target.checked && value.target.value == 0){
      this.underStandCodeOfCunduct1 = -1;
    }else if(!value.target.checked && value.target.value == 1){
      this.underStandCodeOfCunduct2 = -1;
    }else{
      this.underStandCodeOfCunduct1 = -1;
      this.underStandCodeOfCunduct2 = -1;
    }
    this.underStandCodeOfCunduct1emit.emit(this.underStandCodeOfCunduct1);
    this.underStandCodeOfCunduct2emit.emit(this.underStandCodeOfCunduct2);
  }

}
