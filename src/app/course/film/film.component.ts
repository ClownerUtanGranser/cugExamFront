import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FilmPage } from 'src/app/model/pageModel/filmPage';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {

  lang:string;
  filmPage = new FilmPage(this.sanitizer);

  movieObj:{headline:string, movieText:string[], movieUrl:SafeResourceUrl} = {
    headline: 'Welcome', movieText:[
      "We are happy to welcome you onboard to the family Clowns without Borders Sweden.", 
      "Before we start the online training, we want you to sit down, lean back and enjoy this short video!"
    ], movieUrl:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5gqYeSMuYDs")
  };

  constructor(private sanitizer: DomSanitizer, private state:StateService) {
    this.state.getLang().subscribe((lang) => {
      this.lang = lang
      this.setPageLang();
    })
   }

   setPageLang()
   {
      if(this.lang == 'SV')
      {
        this.movieObj = this.filmPage.movieObjSv
      }
      else if(this.lang == 'ENG')
      {
        this.movieObj = this.filmPage.movieObjEng
      }
      else
      {
        this.movieObj = this.filmPage.movieObjArb
      }
   }
}
