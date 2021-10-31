import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExamUser } from 'src/app/model/examUser';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {

  examUser:ExamUser | undefined; 

  seatForm = this.fb.group({
    seatNumber: []
  })

  constructor(private state:StateService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.state.examUser.subscribe((user)=>{
      this.examUser = user;
    })
  }

}
