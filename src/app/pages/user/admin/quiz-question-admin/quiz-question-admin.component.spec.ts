import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionAdminComponent } from './quiz-question-admin.component';

describe('QuizQuestionAdminComponent', () => {
  let component: QuizQuestionAdminComponent;
  let fixture: ComponentFixture<QuizQuestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuestionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
