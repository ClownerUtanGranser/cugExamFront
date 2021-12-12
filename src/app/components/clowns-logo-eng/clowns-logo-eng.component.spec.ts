import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClownsLogoEngComponent } from './clowns-logo-eng.component';

describe('ClownsLogoEngComponent', () => {
  let component: ClownsLogoEngComponent;
  let fixture: ComponentFixture<ClownsLogoEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClownsLogoEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClownsLogoEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
