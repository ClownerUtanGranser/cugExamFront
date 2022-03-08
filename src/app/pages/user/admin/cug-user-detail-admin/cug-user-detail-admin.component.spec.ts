import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CugUserDetailAdminComponent } from './cug-user-detail-admin.component';

describe('CugUserDetailAdminComponent', () => {
  let component: CugUserDetailAdminComponent;
  let fixture: ComponentFixture<CugUserDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CugUserDetailAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CugUserDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
