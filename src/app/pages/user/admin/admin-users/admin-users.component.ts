import { Component, OnInit } from '@angular/core';
import { ExamUser } from 'src/app/model/examUser';
import { StateService } from 'src/app/service/state.service';
import { UserService } from 'src/app/service/user.service';
import {saveAs} from 'file-saver';
import { UpdateExamUser } from 'src/app/model/UpdateExamUser';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  user:ExamUser;
  users:ExamUser[];

  constructor(
              private state:StateService,
              private userService:UserService) { }

  ngOnInit(): void {
    this.state.examUser.subscribe((user) => {
      if(user?.jwt) this.getAllUsers(user);
      this.setUser(user);
    });
  }

  getAllUsers(user:ExamUser)
  {  
    this.userService.getAllUsers(user.jwt).subscribe((users) => {
      this.users = users
    });  
  }

  updateExamUser(user){
    console.log(user, this.user);
    const updateUser = new UpdateExamUser(user.email, user.name, user.country, this.user.roles);
    
    this.userService.updateExamUser(updateUser ,this.user.jwt).subscribe((users) => {
      console.log(users);
      
      this.users = users
    });
    
  }

  setUser(examUser:ExamUser){
    this.user = examUser;
  }

  examsPassed(examsPassed:{passed:boolean}[]):number
  {
    return examsPassed.filter((exam) => exam.passed).length
  }

  getExcel(){
    return this.userService.getAllUsersToExcel(this.user.jwt);
  }

}
