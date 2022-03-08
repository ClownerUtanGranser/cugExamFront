import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExamUser } from 'src/app/model/examUser';

@Component({
  selector: 'app-cug-user-detail-admin',
  templateUrl: './cug-user-detail-admin.component.html',
  styleUrls: ['./cug-user-detail-admin.component.scss']
})
export class CugUserDetailAdminComponent implements OnInit, OnChanges {
  @Input() examUser:ExamUser;

  registerForm = this.fb.group({

    name:[''],
    country:[''],
    email: [''],
    password: [''],
    rePassword: ['']

  })

  showError:boolean = false;

  loading:boolean = false;

  constructor(private fb:FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    
    this.registerForm.controls['name'].setValue(this.examUser?.name ?? 'name');
    this.registerForm.controls['country'].setValue(this.examUser?.country ?? 'Countrys');
    this.registerForm.controls['email'].setValue(this.examUser?.email ?? 'E-mail');


  }

  ngOnInit(): void {
  }

  upDateUser(){
    console.log("Hej");
  }

}
