import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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



  examUser:ExamUser | undefined;

  lang:string;

  openCloseBoolean:boolean = false;

  constructor(private state:StateService,
              private loginService:LoginService) { }

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
