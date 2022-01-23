import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

export class FilmPage{
       
    movieObjEng:{headline:string, movieText:string[], movieUrl:SafeResourceUrl} = {
        headline: 'Welcome', movieText:[
          "We are happy to welcome you to the Clowns without Borders Sweden family. ", 
          "Before we start the online training, we want you to lean back and enjoy this short video!"
        ], movieUrl:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/d1kqBuVuMqA")
      };
    
      movieObjSv:{headline:string, movieText:string[], movieUrl:SafeResourceUrl} = {
        headline: 'VÄLKOMMEN!', movieText:[
          "Vi är glada över att hälsa dig välkommen till Clowner utan Gränser Sverige.", 
          "Innan vi sätter igång med den här digitala utbildningen vill vi att du lutar dig tillbaka och njuter av en kort video!"
        ], movieUrl:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5gqYeSMuYDs")
      };
    
      movieObjArb:{headline:string, movieText:string[], movieUrl:SafeResourceUrl} = {
        headline: 'أهلا بكم!', movieText:[
          "يسرنا أن نرحب بكم في أسرة مهرجون بلا حدود – السويد.", 
          "وقبل أن نبدأ التدريب عبر الانترنت نريد منكم الجلوس والاستمتاع بمشاهدة هذا الفيديو القصير"
        ], movieUrl:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/kb8-_x3OmHE")
      };
    
      constructor(private sanitizer: DomSanitizer) {}
    
}