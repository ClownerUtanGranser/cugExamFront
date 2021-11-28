import { Component, Input, OnInit } from '@angular/core';
import { PhotoText } from 'src/app/model/pageModel/photoText';

@Component({
  selector: 'app-text-photo',
  templateUrl: './text-photo.component.html',
  styleUrls: ['./text-photo.component.scss']
})
export class TextPhotoComponent implements OnInit {

  @Input() photoText:PhotoText;

  constructor() { }

  ngOnInit(): void {
  }

}
