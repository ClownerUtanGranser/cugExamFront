import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {

  lang:string;

  chapters:{headlineEng:string, headlineSv:string, headlineArb:string, 

            chapters:string[], chaptersSv:string[], chaptersArb:string[]} = {
    headlineEng:'Sections', headlineSv:"DEL", headlineArb:"الأجزاء",
    chapters:[
      'INTRODUCTION',
      'WORKING WITH CHILDREN',
      'CODE OF CONDUCT',
      'WHISTLE BLOWER POLICY',
      'DOCUMENTATION OF CHILDREN',
      'CONCLUSION'
    ],
    chaptersSv:[
      'INTRODUKTION',
      'ATT ARBETA MED BARN',
      'UPPFÖRANDEKOD',
      'VISSELBLÅSARPOLICY',
      'DOKUMENTATION AV BARN',
      'SAMMANFATTNING'
    ],
    chaptersArb:[
      'مقدمة',
      'العمل مع الأطفال',
      'مدونة السلوك',
      'سياسة حماية المبلغين',
      'التوثيق للأطفال',
      'ختام'
    ]
  }

  url:string = 'matrial'

  constructor(private route: ActivatedRoute, private state:StateService) { 
    this.state.getLang().subscribe((lang)=> this.lang = lang);
  }

  ngOnInit(): void {
 
    this.route.params.subscribe((param)=> this.url = param.material)

  }

}
