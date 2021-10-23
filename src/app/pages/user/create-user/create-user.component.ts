import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  registerForm = this.fb.group({

    firstNameNew:[''],
    lastNameNew:[''],
    EmailNew: [''],
    passwordNew: [''],
    rePasswordNew: ['']

  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  

}
