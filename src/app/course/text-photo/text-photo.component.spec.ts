import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPhotoComponent } from './text-photo.component';

describe('TextPhotoComponent', () => {
  let component: TextPhotoComponent;
  let fixture: ComponentFixture<TextPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
