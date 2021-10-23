import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { StartingComponent } from './course/starting/starting.component';
import { LandingComponent } from './pages/landing/landing.component';
import { QuizFrameComponent } from './pages/quiz-frame/quiz-frame.component';
import { LoginComponent } from './pages/user/login/login.component';

const routes: Routes = [
  {path:'', component: LandingComponent},
  {path:'course', component: StartingComponent},
  {path:'info', component: InfoBoxComponent},
  {path:'exam', component: StartingComponent},
  {path:'exam/question', component: QuizFrameComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
