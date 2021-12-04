import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { CourseInfoComponent } from './course/course-info/course-info.component';
import { SectionComponent } from './course/section/section.component';
import { StartingComponent } from './course/starting/starting.component';
import { LandingComponent } from './pages/landing/landing.component';
import { QuizFrameComponent } from './pages/quiz-frame/quiz-frame.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { HomeAdminComponent } from './pages/user/home-admin/home-admin.component';
import { HomeUserComponent } from './pages/user/home-user/home-user.component';
import { LoginComponent } from './pages/user/login/login.component';
import { GaurdGuard } from './service/auth/gaurd.guard';

const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'course', component: StartingComponent},
  {path:'course/material', component: CourseInfoComponent },
  {path:'course/material/:material', component: SectionComponent },
  {path:'course/material/:material/:page', component: SectionComponent },
  {path:'info', component: InfoBoxComponent},
  {path:'exam', component: StartingComponent, canActivate: [GaurdGuard]},
  {path:'exam/question', component: QuizFrameComponent, canActivate: [GaurdGuard]},
  {path:'exam/question/:questionNumber', component: QuizFrameComponent, canActivate: [GaurdGuard]},
  {path:'login', component: LoginComponent},
  {path: 'admin', component: HomeAdminComponent , canActivate: [GaurdGuard]},
  {path:'register', component: CreateUserComponent},
  {path:'home', component: HomeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
