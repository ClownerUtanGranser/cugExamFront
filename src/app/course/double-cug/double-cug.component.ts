import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DoubleCug } from 'src/app/model/pageModel/double-cug';

@Component({
  selector: 'app-double-cug',
  templateUrl: './double-cug.component.html',
  styleUrls: ['./double-cug.component.scss']
})
export class DoubleCugComponent implements OnInit, OnChanges {

  @Input()
  doubleCug:DoubleCug;
  @Input()
  lang:string;

  langCopy:string;

  ingress: SafeHtml;
  bulltes: {safeHtml:SafeHtml, open:boolean }[] = [];

  constructor(private sanitizer: DomSanitizer) {
   }
  ngOnChanges(changes: SimpleChanges): void {
    
    this.ingress = this.sanitizer.bypassSecurityTrustHtml(this.doubleCug?.ingressHtml) ;
    if(this.lang != this.langCopy){
      this.bulltes = []
      this.langCopy = this.lang
      for(let i = 0; i < this.doubleCug.paragraph.length; i++)
      {
        this.bulltes.push({safeHtml: this.sanitizer.bypassSecurityTrustHtml(this.doubleCug.paragraph[i].textHtml), open: false });
      }
    }   
}

  ngOnInit(): void {
    this.langCopy = this.lang;
  }


}
