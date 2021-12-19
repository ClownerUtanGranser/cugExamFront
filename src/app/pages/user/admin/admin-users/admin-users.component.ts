import { Component, OnInit } from '@angular/core';
import { ExamUser } from 'src/app/model/examUser';
import { StateService } from 'src/app/service/state.service';
import { UserService } from 'src/app/service/user.service';

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
      this.user = user 
      if(this.user?.jwt) this.getAllUsers();
    });
  }

  getAllUsers()
  {
    
    this.userService.getAllUsers(this.user.jwt).subscribe((users) => {
      this.users = users
      console.log(this.users);
    });
    
  }

  examsPassed(examsPassed:{passed:boolean}[]):number
  {
    return examsPassed.filter((exam) => exam.passed).length
  }

}
