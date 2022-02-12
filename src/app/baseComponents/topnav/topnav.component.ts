import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ExamUser } from 'src/app/model/examUser';
import { LoginService } from 'src/app/service/auth/login.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Input() openMyPageBool:boolean;
  @Output() openMyPageBoolEmit = new EventEmitter();

  isAdminPage:boolean = false;

  examUser:ExamUser | undefined;

  lang:string;

  openCloseBoolean:boolean = false;

  constructor(private state:StateService,
              private loginService:LoginService,
              private router:Router) {

                router.events.subscribe(event => {
                  if(event instanceof NavigationEnd){
                    this.isAdminPage = event.url.includes('admin'); 
                  }
                });
               }

  ngOnInit(): void {
    this.state.examUser.subscribe((user)=>{
      this.examUser = user;
    })

    this.state.getLang().subscribe((lang) => this.lang = lang);
  }

  setLang(lang:string)
  {
    this.state.setLang(lang);
    this.openCloseBoolean = !this.openCloseBoolean;
  }

  openCloseMyPage()
  {
    this.openMyPageBoolEmit.emit(this.openMyPageBool);
  }

  logout()
  {
    this.loginService.logout();
  }

}
