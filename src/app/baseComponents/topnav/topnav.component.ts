import { Component, OnInit } from '@angular/core';
import { ExamUser } from 'src/app/model/examUser';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  examUser:ExamUser | undefined;

  constructor(private state:StateService) { }

  ngOnInit(): void {
    this.state.examUser.subscribe((user)=>{
      this.examUser = user;
    })
  }

  logout()
  {
    this.state.setExamUser(null);
  }

}
