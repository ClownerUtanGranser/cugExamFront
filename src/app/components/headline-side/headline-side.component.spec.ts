import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineSideComponent } from './headline-side.component';

describe('HeadlineSideComponent', () => {
  let component: HeadlineSideComponent;
  let fixture: ComponentFixture<HeadlineSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlineSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
