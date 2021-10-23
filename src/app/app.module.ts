import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './baseComponents/topnav/topnav.component';
import { FooterComponent } from './baseComponents/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeadlineSideComponent } from './components/headline-side/headline-side.component';
import { ClownsLoggoComponent } from './components/clowns-loggo/clowns-loggo.component';
import { StartingComponent } from './course/starting/starting.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { CourseInfoComponent } from './course/course-info/course-info.component';
import { QuizComponent } from './exam/quiz/quiz.component';
import { QuizFrameComponent } from './pages/quiz-frame/quiz-frame.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { HomeUserComponent } from './pages/user/home-user/home-user.component';
import { HomeAdminComponent } from './pages/user/home-admin/home-admin.component';
import { LoginComponent } from './pages/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    LandingComponent,
    HeadlineSideComponent,
    ClownsLoggoComponent,
    StartingComponent,
    InfoBoxComponent,
    CourseInfoComponent,
    QuizComponent,
    QuizFrameComponent,
    LoginComponent,
    CreateUserComponent,
    HomeUserComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
