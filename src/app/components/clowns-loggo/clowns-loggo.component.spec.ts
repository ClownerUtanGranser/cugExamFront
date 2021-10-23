import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClownsLoggoComponent } from './clowns-loggo.component';

describe('ClownsLoggoComponent', () => {
  let component: ClownsLoggoComponent;
  let fixture: ComponentFixture<ClownsLoggoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClownsLoggoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClownsLoggoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
