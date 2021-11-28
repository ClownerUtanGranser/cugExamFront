import { Component, Input, OnInit } from '@angular/core';
import { dosAndDonts } from 'src/app/model/pageModel/dos-and-donts';

@Component({
  selector: 'app-dos-and-donts',
  templateUrl: './dos-and-donts.component.html',
  styleUrls: ['./dos-and-donts.component.scss']
})
export class DosAndDontsComponent implements OnInit {

  @Input() dosAndDonts:dosAndDonts;

  constructor() { }

  ngOnInit(): void {
  }

}
