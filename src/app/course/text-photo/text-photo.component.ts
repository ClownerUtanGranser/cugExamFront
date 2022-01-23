import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PhotoText } from 'src/app/model/pageModel/photoText';

@Component({
  selector: 'app-text-photo',
  templateUrl: './text-photo.component.html',
  styleUrls: ['./text-photo.component.scss']
})
export class TextPhotoComponent implements OnInit, OnChanges {

  @Input() photoText:PhotoText;
  @Input() lang:string;

  sectionTextHtml:SafeHtml[]
  pointsHtml:SafeHtml[]
  endTextHtml:SafeHtml[]

  langCopy:string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.ingress = this.sanitizer.bypassSecurityTrustHtml(this.doubleCug?.ingressHtml) ;
    if(this.lang != this.langCopy){
      this.sectionTextHtml = [],
      this.pointsHtml = [];
      this.endTextHtml = [];
      this.langCopy = this.lang
      for(let i = 0; i < this.photoText?.pointsHtml?.length; i++)
      {
        this.pointsHtml.push(this.sanitizer.bypassSecurityTrustHtml( this.photoText?.pointsHtml[i]))
      }
      for(let i = 0; i < this.photoText?.sectionTextHtml?.length; i++)
      {
        this.sectionTextHtml.push(this.sanitizer.bypassSecurityTrustHtml( this.photoText?.sectionTextHtml[i]))
      }
      for(let i = 0; i < this.photoText?.endTextHtml?.length; i++)
      {
        this.endTextHtml.push(this.sanitizer.bypassSecurityTrustHtml( this.photoText?.endTextHtml[i]))
      }


    }   
  }

  ngOnInit(): void {
  }

}
