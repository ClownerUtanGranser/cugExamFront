import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {

  chapters:{headline:string, chapters:string[]} = {
    headline:'Section',
    chapters:[
      'INTRODUCTION',
      'WORKING WITH CHILDREN',
      'CODE OF CONDUCT',
      'WHISTLE BLOWER POLICY',
      'DOCUMENTATION OF CHILDREN',
      'CONCLUSION'
    ]
  }

  url:string = 'matrial'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
 
    this.route.params.subscribe((param)=> this.url = param.material)

  }

}
