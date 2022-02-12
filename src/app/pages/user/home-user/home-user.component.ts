import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExamUser } from 'src/app/model/examUser';
import { LoginService } from 'src/app/service/auth/login.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {
  @Input() openMyPageBool:boolean;
  @Output() openMyPageBoolEmit = new EventEmitter();

  examUser:ExamUser | undefined; 

  


  constructor(private state:StateService,
              private loginService:LoginService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.state.examUser.subscribe((user)=>{
      this.examUser = user;
      console.log(this.examUser);
    })
  }

  close(){
    this.openMyPageBool = false;
    this.openMyPageBoolEmit.emit(this.openMyPageBool);
  }

  logout(){
    this.openMyPageBool = false;
    this.openMyPageBoolEmit.emit(this.openMyPageBool);
    this.loginService.logout();
  }

}
