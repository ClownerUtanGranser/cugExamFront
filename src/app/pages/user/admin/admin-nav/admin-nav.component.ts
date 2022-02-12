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

  updateDBEng()
  {
    this.examService.resetQuestionsEng(this.jwt);
  }

  updateDBSv()
  {
    this.examService.resetQuestionsSv(this.jwt);
  }

  updateDBArb()
  {
    this.examService.resetQuestionsArb(this.jwt);
  }
}
