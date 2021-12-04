import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';

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
import { HomeAdminComponent } from './pages/user/admin/home-admin/home-admin.component';
import { LoginComponent } from './pages/user/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FilmComponent } from './course/film/film.component';
import { SectionComponent } from './course/section/section.component';
import { DosAndDontsComponent } from './course/dos-and-donts/dos-and-donts.component';
import { DoubleCugComponent } from './course/double-cug/double-cug.component';
import { ResourcesComponent } from './course/resources/resources.component';
import { TextPhotoComponent } from './course/text-photo/text-photo.component';
import { QuizAdminComponent } from './pages/user/admin/quiz-admin/quiz-admin.component';
import { QuizQuestionAdminComponent } from './pages/user/admin/quiz-question-admin/quiz-question-admin.component';

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
    HomeAdminComponent,
    LoaderComponent,
    FilmComponent,
    SectionComponent,
    DosAndDontsComponent,
    DoubleCugComponent,
    ResourcesComponent,
    TextPhotoComponent,
    QuizAdminComponent,
    QuizQuestionAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
