import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  movieObj:{headline:string, movieText:string[], movieUrl:SafeResourceUrl} = {
    headline: 'Welcome', movieText:[
      "We are happy to welcome you onboard to the family Clowns without Borders Sweden.", 
      "Before we start the online training, we want you to sit down, lean back and enjoy this short video!"
    ], movieUrl:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5gqYeSMuYDs")
  };

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
