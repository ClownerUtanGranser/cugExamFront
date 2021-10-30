import { Component, OnInit } from '@angular/core';
import { ExamUser } from 'src/app/model/examUser';
import { LoginService } from 'src/app/service/auth/login.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  examUser:ExamUser | undefined;

  constructor(private state:StateService,
              private loginService:LoginService) { }

  ngOnInit(): void {
    this.state.examUser.subscribe((user)=>{
      this.examUser = user;
    })
  }

  logout()
  {
    this.loginService.logout();
  }

}
