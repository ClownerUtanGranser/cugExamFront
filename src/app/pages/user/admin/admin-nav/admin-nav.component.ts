import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/service/exam.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  jwt:string;

  constructor(private state:StateService,
              private examService:ExamService
                ) { }

  ngOnInit(): void {
    
    this.state.examUser.subscribe((user)=>{
      this.jwt = user?.jwt
    })
    
  }

  updateDB()
  {
    console.log(this.jwt);
    this.examService.resetQuestions(this.jwt);
  }
}
